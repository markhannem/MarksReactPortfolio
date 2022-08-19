import "./portfoliolist.css";
import Portfolio from "../portfolio/Portfolio";
import DP from "../../img/Disneyplus.png";
import TD from "../../img/tdsite.PNG";
import SD from "../../img/SamsungDesign .PNG";
import GB from "../../img/GB2.png";
import KS from "../../img/Keyinsocial.png";
import HP from "../../img/Home_Page.png";

const PortfolioList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        <p className="pl-desc">
          This is my creative portfolio to show off my programming skills!
        </p>
      </div>
      <div className="pl-list">
        <Portfolio img={DP} />
        <Portfolio img={SD} />
        <Portfolio img={TD} />
        <Portfolio img={GB} />
        <Portfolio img={KS} />
        <Portfolio img={HP} />
        {/* if using map inside react you have to provide an unique id
        {portfolio.map((item) => (
          <Portfolio key={item.id} img={item.img} link={item.link} />
        ))} */}
      </div>
    </div>
  );
};

export default PortfolioList;
