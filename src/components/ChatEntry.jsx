import TextField from "@material-ui/core/TextField";
import io from "socket.io-client";
import { useEffect } from "react";

export default function ChatEntry({ setChat }) {
  const socket = io(`http://localhost:2021`);

  socket.on("reply", (msg) => {
    console.log(msg);
    setChat((prev) => [...prev, { data: msg, type: "rpl" }]);
  });

  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    const value = event.target.value;

    // submit typed info
    if (event.key === "Enter") {
      setChat((prev) => [...prev, { data: value, type: "msg" }]);

      // send to server and get response
      socket.emit("message", event.target.value);

      // reset input
      event.target.value = "";
    }
  };

  return (
    <div className={`p-5 flex items-center mt-4 pb-4`}>
      <TextField
        onKeyDown={handleSubmit}
        className={`w-full`}
        id="outlined-required"
        label="write a message [then Enter]"
        defaultValue=""
        variant="outlined"
      />
    </div>
  );
}
