import { useState } from "react";
import VisitorPage from "./pages/VisitorPage";
import EventPage from "./pages/EventPage";

function App() {
  const [name, setName] = useState("");
  const [eventName, setEventName] = useState("");
  const [organizerName, setOrganizerName] = useState("");
  const [showEventPage, setShowEventPage] = useState(false);

  return (
    <div className="App">
      {showEventPage ? (
        <EventPage
          eventName={eventName}
          organizerName={organizerName}
          setEventName={setEventName}
          setOrganizerName={setOrganizerName}
          onBack={() => setShowEventPage(false)}
        />
      ) : (
        <VisitorPage
          name={name}
          setName={setName}
          eventName={eventName}
          organizerName={organizerName}
          onNext={() => setShowEventPage(true)}
        />
      )}
    </div>
  );
}

export default App;
