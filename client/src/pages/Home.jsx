import EventCard from "./components/EventCard";
import events from "./sampleData/events.json";

function Home() {
  return (
    <div className="App">
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
