import "./Questions.scss"
import { BsArrowDownCircleFill } from "react-icons/bs";

const Accordion = ({title, desc, active, setActive}) => {
    
    
    
  return (
    <div className="accordionContainer">
      <span className={(active === title ? "activeTitle" : "") + "title" + "flex"}>
       {title}
        <span>
          <BsArrowDownCircleFill className="icon" />
        </span>
      </span> 
      <p className={(active === title ? "show" : "")}>{desc}</p>
    </div>
  );
};

export default Accordion;
