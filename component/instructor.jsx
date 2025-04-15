import React, { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        setUsers(data.users); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-200">
            <img
              src={user.image}
              alt={user.firstName}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold text-center">{user.firstName} {user.lastName}</h2>
            <p className="text-sm text-gray-600 text-center">{user.email}</p>
            <p className="text-sm text-gray-600 text-center">{user.phone}</p>
            <p className="text-sm text-gray-600 text-center"> Department {user.company.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
