const EventCard = ({ title, location, time, cost }) => {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <hr></hr>
        <p class="card-text">
          Venue Location: {location} <br />
          Date and Time: {time} <br />
          Original Cost: {cost}
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default EventCard;
