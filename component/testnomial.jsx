
import { useUniversities } from './UniversityContext';

const Users = () => {
  const {users} = useUniversities();
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Random Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {users.map((user, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <img src={user.picture.large} alt={user.name.first} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-center">{user.name.first} {user.name.last}</h2>
            <p className="text-sm text-gray-600 text-center">{user.email}</p>
            <p className="text-sm text-gray-600 text-center">{user.location.country}, {user.location.timezone.offset }</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
