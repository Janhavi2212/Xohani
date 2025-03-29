import { useParams, useNavigate } from "react-router-dom";

const WebinarDetail = ({ webinars }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const webinar = webinars.find((w) => w.id === parseInt(id));

  if (!webinar) return <h2>Webinar Not Found</h2>;

  return (
    <div className="container">
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>{webinar.title}</h2>
      <p>{webinar.description}</p>
      <p><strong>Price:</strong> {webinar.price}</p>
      <p><strong>Rating:</strong> ⭐ {webinar.rating}</p>
      <p><strong>Total Number of Attendees:</strong>{webinar.totalAttendees}</p>
      <p><strong>Total revenue generated:</strong>{webinar.totalRevenue}</p>
      <p><strong>Monthly active users:</strong>{webinar.monthlyUsers}</p>
      <p><strong>Subscribers</strong>{webinar.subscribers}</p>
      <p><strong>Affiliate Revenue</strong>{webinar.affiliateRevenue}</p>
      <p><strong>Webinar Revenue</strong>{webinar.webinarRevenue}</p>
    </div>
  );
};

export default WebinarDetail;
