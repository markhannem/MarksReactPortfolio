import "./skills.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FiFigma } from "react-icons/fi";
import { TbBrandPython } from "react-icons/tb";
import { SiNodedotjs } from "react-icons/si";
import { BsPlusCircle } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineFolderOpen } from "react-icons/ai";

const Skills = () => {
  return (
    <div className="s">
      <div className="s-text">
        <h1 className="s-title">My Relevent Skills </h1>
      </div>
      <div className="s-list">
        <article className="s_details">
          <AiOutlineHtml5 className="s_details-icon" size={100} />
          <div>
            <h4>HTML</h4>
          </div>
        </article>
        <article className="s_details">
          <TbBrandCss3 className="s_details-icon" size={100} />
          <div>
            <h4>CSS</h4>
          </div>
        </article>
        <article className="s_details">
          <TbBrandJavascript className="s_details-icon" size={100} />
          <div>
            <h4>JavaScript</h4>
          </div>
        </article>
        <article className="s_details">
          <GrReactjs className="s_details-icon" size={100} />
          <div>
            <h4>React</h4>
          </div>
        </article>
        <article className="s_details">
          <FiFigma className="s_details-icon" size={100} />
          <div>
            <h4>Figma Design</h4>
          </div>
        </article>
        <article className="s_details">
          <TbBrandPython className="s_details-icon" size={100} />
          <div>
            <h4>Python</h4>
          </div>
        </article>
        <article className="s_details">
          <SiNodedotjs className="s_details-icon" size={100} />
          <div>
            <h4>Node.js</h4>
          </div>
        </article>
        <article className="s_details">
          <TbReportAnalytics className="s_details-icon" size={100} />
          <div>
            <h4>
              Technical <br />
              Analysis
            </h4>
          </div>
        </article>
        <article className="s_details">
          <AiOutlineFolderOpen className="s_details-icon" size={100} />
          <div>
            <h4>
              Project <br />
              Management
            </h4>
          </div>
        </article>
        <article className="s_details">
          <BsPlusCircle className="s_details-icon" size={100} />
          <div>
            <h4>
              Learning <br />
              More <br />
              in Later <br />
              Semesters...
            </h4>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Skills;
