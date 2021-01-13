import { useState, useEffect, useRef } from "react";
import style from "./css/chatlist.module.css";

export default function ChatList({ chat }) {
  //   const [chats, setChats] = useState([]);
  const elRef = useRef();

  useEffect(() => {
    elRef.current.scrollTop = elRef.current.scrollHeight;
  });

  return (
    <div className={`p-4 overflow-auto ${style.list}`} ref={elRef}>
      {chat.map((el, ind) => (
        <p
          key={ind}
          className={`${el.type === "msg" ? style.right : ""}`}
        >
          <span
            className={`${
              el.type === "msg" ? style.msg : style.rpl
            } p-3 m-2 inline-block text-base`}
          >
            {el.data}
          </span>
        </p>
      ))}
    </div>
  );
}
