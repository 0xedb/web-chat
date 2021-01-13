import { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import style from "./css/appload.module.css";
import LinearProgress from "@material-ui/core/LinearProgress";
import { UserDetails } from "../store/store";
import faker from "faker";

const timeout = 500;
const server = "http://localhost:2021";

function generateUserData() {
  return {
    firstName: faker.name.firstName(1),
    lastName: faker.name.lastName(1),
    phone: faker.phone.phoneNumber("024 ### ####"),
    url: `https://images.unsplash.com/photo-1570406794469-630903944dc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fm=pjpg&usm=10&w=400&h=400&fit=min&auto=compress`,
  };
}

function getServerDetails() {
  const route = `${server}/register`;
  return fetch(route, { method: "post" })
    .then((res) => res.json())
    .catch((err) => console.error(err));
}

export default function AppLoad({ next }) {
  const user = useContext(UserDetails);

  useEffect(() => {
    // set user data

    const data = generateUserData();
    user.setUser(data);

    let interval;

    getServerDetails()
      .then((res) => {
        user.setUser({ ...data, serverDetails: res });
        console.log(user);
      })
      .then(() => {
        interval = setInterval(next, timeout);
      });

    // wait for some seconds
    // move to chat page

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`w-full h-full flex flex-col justify-center items-center`}
    >
      <LinearProgress color="secondary" className={`${style.loader}`} />
      <motion.div
        initial={{ opacity: 1 }}
        className={`py-3`}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        getting ready...
      </motion.div>
    </section>
  );
}
