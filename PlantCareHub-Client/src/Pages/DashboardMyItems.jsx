import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../auth/AuthProvider";

const DashboardMyItems = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.uid) {
      axios.get(`${import.meta.env.VITE_API_URL}/my-plants?userId=${user.uid}`)
        .then(res => {
          setItems(res.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [user]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-green-700">My Items</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow">
            <thead>
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Added</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item._id} className="border-t">
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.category}</td>
                  <td className="px-4 py-2">{new Date(item.addedDate).toLocaleDateString()}</td>
                  <td className="px-4 py-2">
                    {/* Actions like view/edit/delete can be added here */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DashboardMyItems;
