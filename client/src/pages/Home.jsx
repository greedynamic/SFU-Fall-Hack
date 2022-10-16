import EventCard from "../components/EventCard";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Context } from "../context/GlobalContext";

function Home() {
  const userId = useContext(Context);
  let eventsData;
  useEffect(() => {
    console.log(userId);

    console.log("GETTING EVENTS");

    axios.get("http://localhost:5001/api/v1/tickets").then((response) => {
      console.log(response);
    });
  }, []);
  const events = [
    {
      id: 1,
      title: "Coldplay world tour",
      location: "Rogers arena",
      time: "October 18th 2022",
      cost: 0,
      userID: 10
    },
    {
      id: 2,
      title: "Maroon 5 concer",
      location: "Toronto",
      time: "tomorrow",
      cost: 0,
      userID: 11
    },
    {
      id: 3,
      title: "SFU special concert",
      location: "SFU Burnaby, AQ",
      time: "7 pm",
      cost: 0,
      userID: 12
    }
  ];
  return (
    <div>
      {events.map((event) => {
        return (
          <EventCard
            key={event.id}
            title={event.title}
            location={event.location}
            time={event.time}
            cost={event.cost}
            userID={event.userID}
          />
        );
      })}
    </div>
  );
}
export default Home;
