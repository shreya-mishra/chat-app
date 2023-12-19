import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/codebuds-fk/chat/chats")
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="App">
      {/* Chat filter option
      ChatList
      selected Chat */}
    </div>
  );
}

export default App;
