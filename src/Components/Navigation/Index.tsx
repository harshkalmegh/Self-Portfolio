import { Link } from "react-router-dom";

function Index() {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Link to="/">Home</Link>
      <Link
        to="/About"
        state={{
          name: "Harsh Kalmegh",
          city: "Indore",
          graduationYear: 2020,
          country: "India",
        }}
      >
        About
      </Link>
      <Link to="/Project/hello">Project</Link>
      <Link to="/Contact/?name=pen">Contact</Link>
    </div>
  );
}

export default Index;
