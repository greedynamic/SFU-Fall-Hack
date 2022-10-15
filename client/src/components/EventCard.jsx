const styles = {
  eventCard: {
    width: "45rem",
    margin: "auto",
    marginTop: "2em",
    display: "block"
  }
};
const EventCard = ({ title, location, time, cost, userID }) => {
  return (
    <div className="card" style={styles.eventCard}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <hr></hr>
        <p className="card-text">
          Venue Location: {location} <br />
          Date and Time: {time} <br />
          Original Cost: {cost}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
        {userID == 11 && (
          <button
            style={{ marginLeft: "1em" }}
            onClick={() => {
              console.log("clicked");
            }}
            className="btn btn-primary"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
