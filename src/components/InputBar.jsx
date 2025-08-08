// src/components/InputBar.jsx
import { useState } from "react";
import { useEventContext } from "../context/EventContext";

function InputBar() {
  const [visitorName, setVisitorName] = useState("");
  const { eventData } = useEventContext();

  const handleCheckIn = () => {
    if (visitorName.trim() !== "") {
      alert(`Welcome, ${visitorName}\nEvent: ${eventData.name}\nOrganizer: ${eventData.organizer}`);
    } else {
      alert("Please enter your name");
    }
  };

  return (
    <div className="input-card">
      <h2><span role="img" aria-label="person">🧍‍♂️</span> Enter your name:</h2>
      <input
        type="text"
        value={visitorName}
        placeholder="Enter your name"
        onChange={(e) => setVisitorName(e.target.value)}
      />
      <button onClick={handleCheckIn}>Check In</button>

      {visitorName && (
        <div style={{ marginTop: "20px" }}>
          <p>Welcome, {visitorName}</p>
          <p>• Event: {eventData.name}</p>
          <p>• Organizer: {eventData.organizer}</p>
        </div>
      )}
    </div>
  );
}

export default InputBar;
