import style from "./css/profile.module.css";
import { UserDetails } from "../store/store";
import Link from "next/link";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";

import { useContext } from "react";

const URL = `https://images.unsplash.com/photo-1507038732509-8b1a9623223a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fm=pjpg&usm=10&w=400&h=400&fit=min&auto=compress`;

export default function Profile({ next }) {
  const { user } = useContext(UserDetails);

  return (
    <section
      className={`${style.outer} m-4 rounded-2xl justify-center items-center p-4 flex flex-col`}
    >
      <div className={`${style.content}`}>
        <div
          className={`${style.img} rounded-2xl flex justify-center hover:shadow-md`}
        >
          <img src={user.url} alt="user" className={`m-4 rounded-2xl`} />
        </div>
        <div
          className={`text-center text-indigo-700 font-bold pt-2`}
        >{`${user.firstName} ${user.lastName}`}</div>
        <div className={`text-center p-2 pb-4 font-bold`}>
          <Link href={`tel: +${user.phone}`}>
            <a className={`text-indigo-500`}>{user.phone}</a>
          </Link>
        </div>
        <div
          className={`p-4 bg-purple-300 text-indigo rounded-2xl flex items-center justify-between`}
        >
          <Avatar alt="Travis Howard" src={URL} />
          <div className={`flex flex-col justify-center items-center`}>
            <span>{user.serverDetails.firstName}</span>
            <span>{user.serverDetails.lastName}</span>
          </div>
          <div>
            <IconButton
              aria-label="send"
              color="primary"
              onClick={() => next()}
            >
              <ArrowForwardIosRoundedIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
}
