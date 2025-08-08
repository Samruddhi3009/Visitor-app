function VisitorPage({ name, setName, eventName, organizerName, onNext }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      alert("Checked In!");
    }
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <label>Enter your name:</label>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Check In</button>
      </form>

      {name && <p>Welcome, {name}!</p>}

      {eventName && organizerName && (
        <>
          <p>• Event: {eventName}</p>
          <p>• Organizer: {organizerName}</p>
        </>
      )}

      <button onClick={onNext}>Go to Event Info ➡️</button>
    </div>
  );
}

export default VisitorPage;
