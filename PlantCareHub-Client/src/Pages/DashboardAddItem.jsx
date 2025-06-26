/**
 * DashboardAddItem page component.
 * Provides a form for users to add new plant items to their collection.
 * Handles form state, validation, and submission to the backend.
 * Implements best practices for React state and UI structure.
 */
import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext.js";

const DashboardAddItem = () => {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    category: "",
    image: "",
    description: "",
    careLevel: "",
    wateringFrequency: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/plants`, {
        ...form,
        userId: user?.uid,
        userName: user?.displayName,
      });
      setSuccess("Item added successfully!");
      setForm({
        name: "",
        category: "",
        image: "",
        description: "",
        careLevel: "",
        wateringFrequency: "",
      });
    } catch {
      setSuccess("Failed to add item.");
    }
    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-green-700">Add Item</h2>
      <form className="space-y-4 max-w-xl" onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Plant Name"
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full px-4 py-2 border rounded-lg"
          rows={3}
          required
        />
        <input
          name="careLevel"
          value={form.careLevel}
          onChange={handleChange}
          placeholder="Care Level (e.g., Easy, Medium, Hard)"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          name="wateringFrequency"
          value={form.wateringFrequency}
          onChange={handleChange}
          placeholder="Watering Frequency (e.g., Weekly)"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Item"}
        </button>
        {success && <div className="mt-2 text-green-600">{success}</div>}
      </form>
    </div>
  );
};

export default DashboardAddItem;
