import { useNavigate } from "react-router-dom";

const CreateWebinar = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>Create Webinar</h2>
      <form>
        <label>Title*</label>
        <input type="text" placeholder="Enter title" required />

        <label>Description*</label>
        <textarea placeholder="Write a short introduction" required />

        <label>Price*</label>
        <input type="text" placeholder="Enter price" required />

        <button type="submit">Upload Webinar</button>
      </form>
    </div>
  );
};

export default CreateWebinar;
