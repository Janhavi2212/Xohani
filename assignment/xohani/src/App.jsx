import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WebinarList from "./components/WebinarList";
import WebinarDetail from "./components/WebinarDetail";
import CreateWebinar from "./components/CreateWebinar";
import webinars from "./data/webinars";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create-webinar">Create Webinar</Link>
      </nav>

      <Routes>
        <Route path="/" element={<WebinarList />} />
        <Route path="/webinar/:id" element={<WebinarDetail webinars={webinars} />} />
        <Route path="/create-webinar" element={<CreateWebinar />} />
      </Routes>
    </Router>
  );
};

export default App;
