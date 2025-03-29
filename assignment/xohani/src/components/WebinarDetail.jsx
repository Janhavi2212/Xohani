import { useParams, useNavigate } from "react-router-dom";

const WebinarDetail = ({ webinars }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const webinar = webinars.find((w) => w.id === parseInt(id));

  if (!webinar) return <h2>Webinar Not Found</h2>;

  return (
    <div className="webinar-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>

      <div className="webinar-header">
        <h2 className="webinar-title">{webinar.title}</h2>
        {webinar.active && <span className="webinar-status">Active</span>}
      </div>

      <div className="webinar-content">
        <p className="webinar-description">{webinar.description}</p>
      </div>

      <div className="webinar-info">
        <div className="info-row">
          <div className="info-item">
            <label>Price:</label>
            <span>${webinar.price}</span>
          </div>
          <div className="info-item">
            <label>Rating:</label>
            <span>⭐ {webinar.rating}</span>
          </div>
        </div>

        <div className="info-row">
          <div className="info-item">
            <label>Total Attendees:</label>
            <span>{webinar.totalAttendees}</span>
          </div>
          <div className="info-item">
            <label>Total Revenue:</label>
            <span>${webinar.totalRevenue}</span>
          </div>
        </div>

        <div className="info-row">
          <div className="info-item">
            <label>Monthly Users:</label>
            <span>{webinar.monthlyUsers}</span>
          </div>
          <div className="info-item">
            <label>Subscribers:</label>
            <span>{webinar.subscribers}</span>
          </div>
        </div>

        <div className="info-row">
          <div className="info-item">
            <label>Affiliate Revenue:</label>
            <span>${webinar.affiliateRevenue}</span>
          </div>
          <div className="info-item">
            <label>Webinar Revenue:</label>
            <span>${webinar.webinarRevenue}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarDetail;