import style from "./css/chatregion.module.css";
import Backdrop from "@material-ui/core/Backdrop";
import Avatar from "@material-ui/core/Avatar"; 
import { UserDetails } from "../store/store";
import { useContext, useState } from "react"; 
import ChatEntry from "./ChatEntry";
import ChatList from "./ChatList";

const URL = `https://images.unsplash.com/photo-1507038732509-8b1a9623223a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fm=pjpg&usm=10&w=400&h=400&fit=min&auto=compress`;

export default function ChatRegion() {
  const [chat, setChat] = useState([]);
  const { user } = useContext(UserDetails);

  const fullName =
    user.serverDetails.firstName + " " + user.serverDetails.lastName;

  return (
    <Backdrop open={true} className={`${style.backdrop} md:p-5`}>
      <section className={`grid ${style.chat} h-full w-full md:rounded-xl`}>
        <div className={`p-4 flex items-center ${style.head}`}>
          <span>{/* <ArrowBackIosRoundedIcon /> */}</span>
          <span>
            <Avatar src={URL} />
          </span>
          <span className={`font-bold p-2 text-indigo-500`}>{fullName}</span>
        </div>
        <ChatList chat={chat} />
        <ChatEntry setChat={setChat} />
      </section>
    </Backdrop>
  );
}
