import EventCard from "./components/EventCard";
import events from "./sampleData/events.json";



function Home() {
  const events = [
    {
      id: 1,
      title: "Coldplay world tour",
      location: "Rogers arena",
      time: "October 18th 2022",
      cost: 0
    },
    {
      id: 2,
      title: "Maroon 5 concer",
      location: "Toronto",
      time: "tomorrow",
      cost: 0
    },
    {
      id: 3,
      title: "SFU special concert",
      location: "SFU Burnaby, AQ",
      time: "7 pm",
      cost: 0
    }
  ]
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
          />
        );
      })}
    </div>
  );
}
export default Home;
