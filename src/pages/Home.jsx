import Navbar from '../components/Navbar';
import EventList from '../components/EventList';
import EventForm from '../components/EventForm';
import { useState, useEffect } from 'react';
import Notification from '../components/Notification';
import { getStoredData, setStoredData } from '../utils/localStorage';
import backgroundImg from '../assets/backgroundImg.jpg'

function Home() {
  const [events, setEvents] = useState([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const storedEvents = getStoredData('events');
    setEvents(storedEvents);
  }, []);

  const handleCreateEvent = (values) => {
    const newEvent = { ...values, id: Date.now() };
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    setStoredData('events', updatedEvents);
    setNotification('Event created successfully!');
  };

  const handleRegister = (event) => {
    // Handle registration logic
    setNotification('Registered successfully!');
  };

  const handleUnregister = (event) => {
    // Handle unregistration logic
    setNotification('Unregistered successfully!');
  };

  const handleDelete = (event) => {
    const updatedEvents = events.filter(e => e.id !== event.id);
    setEvents(updatedEvents);
    setStoredData('events', updatedEvents);
    setNotification('Event deleted successfully!');
  };

  return (
    <div className="bg-[#FFFDCB]" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover' }}>
      <Navbar />
      <div className="container mx-auto p-4">
        <EventForm onSubmit={handleCreateEvent} />
        <div className='m-4 bg-yellow-400/50 p-4 rounded-md '>
        <EventList events={events} onRegister={handleRegister} onUnregister={handleUnregister} onDelete={handleDelete} />
        <Notification message={notification} />
        </div>
    
      </div>
    </div>
  );
}

export default Home;