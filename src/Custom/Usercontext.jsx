import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

function Usercontext({ children }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}

export default Usercontext;

