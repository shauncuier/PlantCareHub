const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware - CORS Configuration
const corsOptions = {
    origin: [
        'http://localhost:5173', // Vite dev server
        'http://localhost:3000', // Alternative dev port
        'https://plantcarehub-595ab.web.app', // Production frontend URL
        'https://plantcarehub-595ab.firebaseapp.com' // Alternative Firebase URL
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// MongoDB URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@plantcarehub.ppek7sb.mongodb.net/?retryWrites=true&w=majority&appName=PlantCareHub`;

// MongoDB Client
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // await client.connect();
        const database = client.db("plantCareHub");
        const plantsCollection = database.collection("plants");

        // ✅ CREATE - Add a new plant
        app.post('/plants', async (req, res) => {
            try {
                const plant = { 
                    ...req.body,
                    addedDate: new Date().toISOString()
                };
                const result = await plantsCollection.insertOne(plant);
                res.send(result);
            } catch (error) {
                console.error('Error adding plant:', error);
                res.status(500).send({ error: 'Failed to add plant' });
            }
        });

        // ✅ READ - Get all plants (for All Plants page)
        app.get('/plants', async (req, res) => {
            try {
                const cursor = plantsCollection.find({});
                const plants = await cursor.toArray();
                res.send(plants);
            } catch (error) {
                console.error('Error fetching plants:', error);
                res.status(500).send({ error: 'Failed to fetch plants' });
            }
        });

        // ✅ READ - Get plants by userId (for My Plants page)
        app.get('/my-plants', async (req, res) => {
            try {
                const userId = req.query.userId;
                if (!userId) {
                    return res.status(400).send({ error: 'User ID is required' });
                }
                const query = { userId: String(userId) };
                const cursor = plantsCollection.find(query);
                const plants = await cursor.toArray();
                res.send(plants);
            } catch (error) {
                console.error('Error fetching user plants:', error);
                res.status(500).send({ error: 'Failed to fetch user plants' });
            }
        });

        // ✅ READ - Get single plant by ID
        app.get('/plants/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) };
                const plant = await plantsCollection.findOne(query);
                if (!plant) {
                    return res.status(404).send({ error: 'Plant not found' });
                }
                res.send(plant);
            } catch (error) {
                console.error('Error fetching plant:', error);
                res.status(500).send({ error: 'Failed to fetch plant' });
            }
        });

        // ✅ UPDATE - Update a plant by ID
        app.put('/plants/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const updatedPlant = { ...req.body };
                delete updatedPlant._id; // Never allow _id to be updated

                const filter = { _id: new ObjectId(id) };
                const updateDoc = { $set: updatedPlant };

                const result = await plantsCollection.updateOne(filter, updateDoc);
                res.send(result);
            } catch (error) {
                console.error('Error updating plant:', error);
                res.status(500).send({ error: 'Failed to update plant' });
            }
        });

        // ✅ DELETE - Delete a plant by ID
        app.delete('/plants/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const query = { _id: new ObjectId(id) };
                const result = await plantsCollection.deleteOne(query);
                res.send(result);
            } catch (error) {
                console.error('Error deleting plant:', error);
                res.status(500).send({ error: 'Failed to delete plant' });
            }
        });

        // ✅ Test Route
        app.get('/', (req, res) => {
            res.send('🌿 Plant Care Hub Server is running!');
        });

        console.log("✅ Connected to MongoDB successfully.");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
    }
}

run().catch(console.dir);

// Server Listen
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
