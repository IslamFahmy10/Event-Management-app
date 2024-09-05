import EventCard from './EventCard';

function EventList({ events, onRegister, onUnregister, onDelete }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {events.map(event => (
        <EventCard
          key={event.id}
          event={event}
          onRegister={onRegister}
          onUnregister={onUnregister}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default EventList;