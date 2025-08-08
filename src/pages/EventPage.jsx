function EventPage({
  eventName,
  setEventName,
  organizerName,
  setOrganizerName,
  onBack,
}) {
  const handleSave = (e) => {
    e.preventDefault();
    if (eventName && organizerName) {
      alert("Event Info Saved!");
    }
  };

  return (
    <div className="box">
      <form onSubmit={handleSave}>
        <label>Event Name:</label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />

        <label>Organizer Name:</label>
        <input
          type="text"
          value={organizerName}
          onChange={(e) => setOrganizerName(e.target.value)}
        />

        <button type="submit">Save Event Info</button>
      </form>

      {eventName && organizerName && (
        <>
          <p>• Event: {eventName}</p>
          <p>• Organizer: {organizerName}</p>
        </>
      )}

      <button onClick={onBack}>⬅️ Back to Check In</button>
    </div>
  );
}

export default EventPage;
