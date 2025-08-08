import { createContext, useState } from "react";

export const EventContext = createContext();

export function EventProvider({ children }) {
  const [visitorName, setVisitorName] = useState("");

  return (
    <EventContext.Provider value={{ visitorName, setVisitorName }}>
      {children}
    </EventContext.Provider>
  );
}
