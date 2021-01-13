import style from "./css/chat.module.css";
import Backdrop from "@material-ui/core/Backdrop";
import Profile from "./Profile";
import { useState } from "react";

import ChatRegion from "./ChatRegion";

export default function Chat() {
  const [chat, setChat] = useState(false);

  const next = () => {
    setChat(true);
  };

  if (chat) return <ChatRegion />;

  return (
    <Backdrop open={true} className={`${style.backdrop}`}>
      <Profile next={next} />
    </Backdrop>
  );
}
