import "./Questions.scss";
import { BsArrowDownCircle } from "react-icons/bs";

const Accordion = ({ title, desc, active, setActive }) => {
  return (
    <div className="accordionContainer">
      <span
        className={
          (active === title ? "activeTitle " : "") + "flex " + "title "
        }>
        {title}
        <span>
          <BsArrowDownCircle
            className="icon"
            onClick={() => setActive(title)}
          />
        </span>
      </span>
      <p className={(active === title ? "show " : "") + "description "}>
        {desc}
      </p>
    </div>
  );
};

export default Accordion;
