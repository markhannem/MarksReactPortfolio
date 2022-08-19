import "./portfoliolist.css";
import Portfolio from "../portfolio/Portfolio";
import { portfolio } from "../../data";

const PortfolioList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Imagine </h1>
        <p className="pl-desc">
          This is a creative portfolio that your work has been waiting for.
          Beautiful apps, stunning portfolio styles & a whole lot more awaits.
        </p>
      </div>
      <div className="pl-list">
        {/* if using map inside react you have to provide an unique id */}
        {portfolio.map((item) => (
          <Portfolio key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
