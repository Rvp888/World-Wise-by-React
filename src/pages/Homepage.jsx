import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h2>WorlWise</h2>
      {/* <a href="pricing">Pricing</a> */}
      <Link to="/pricing">Pricing</Link>
    </div>
  );
}

export default Homepage;
