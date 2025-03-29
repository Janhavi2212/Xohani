import { Link } from "react-router-dom";
import webinars from "../data/webinars";

const WebinarList = () => {
  return (
    <div className="container">
      <h2>Home</h2>
      <Link to="/create-webinar" className="create-button">+ Create Webinar</Link>
      <div className="webinar-list">
        {webinars.map((webinar) => (
          <Link to={`/webinar/${webinar.id}`} key={webinar.id} className="webinar-card">
            <h3>{webinar.title}</h3>
            <p>{webinar.description}</p>
            <p>Price: {webinar.price}</p>
            <p>⭐ {webinar.rating}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WebinarList;
