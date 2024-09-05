import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import Navbar from '../components/Navbar';
import Notification from '../components/Notification';
import { getStoredData } from '../utils/localStorage';

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const events = getStoredData('events');
    const selectedEvent = events.find(e => e.id === parseInt(id));
    setEvent(selectedEvent);
  }, [id]);

  const handleRegister = () => {
    setNotification('Registered successfully!');
  };

  const handleUnregister = () => {
    setNotification('Unregistered successfully!');
  };

  const handleDelete = () => {
    // Handle deletion logic
    setNotification('Event deleted successfully!');
  };

  return (
    <div className="bg-[#FFFDCB]" style={{ backgroundImage: `url('/assets/background.jpg')`, backgroundSize: 'cover' }}>
      <Navbar />
      <div className="container mx-auto p-4">
        {event ? (
          <EventCard
            event={event}
            onRegister={handleRegister}
            onUnregister={handleUnregister}
            onDelete={() => handleDelete(event)}
          />
        ) : (
          <p>Loading...</p>
        )}
        <Notification message={notification} />
      </div>
    </div>
  );
}

export default EventDetail;