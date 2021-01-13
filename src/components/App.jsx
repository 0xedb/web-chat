import AppLoad from "./AppLoad";
import Chat from "./Chat";
import style from "./css/app.module.css";

import { useState, useEffect } from "react";
import { UserDetails } from "../store/store";
import { useRouter } from "next/router";

const user = {
  user: {},
  setUser: function (data) {
    this.user = data;
  },
};

export default function App() {
  const [done, setDone] = useState(false);

  const next = () => {
    setDone(true);
  };

  return (
    <UserDetails.Provider value={user}>
      <main className={`h-screen w-screen bg-gray-400 ${style.app}`}>
        {done ? <Chat /> : <AppLoad next={next} />}
      </main>
    </UserDetails.Provider>
  );
}
