function EventCard({ event, onRegister, onUnregister, onDelete }) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <h2 className="text-2xl font-bold text-[#E178C5] mb-2">{event.name}</h2>
        <p className="text-gray-600">Date: {event.date}</p>
        <p className="text-gray-600">Location: {event.location}</p>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <div className="flex space-x-2">
          <button onClick={() => onRegister(event)} className="bg-[#FF8E8F] text-white py-2 px-4 rounded hover:bg-[#FF8E8F]/80 transition">Register</button>
          <button onClick={() => onUnregister(event)} className="bg-[#FFB38E] text-white py-2 px-4 rounded hover:bg-[#FFB38E]/80 transition">Unregister</button>
          <button onClick={() => onDelete(event)} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-400 transition">Delete</button>
        </div>
      </div>
    );
  }
  
  export default EventCard;