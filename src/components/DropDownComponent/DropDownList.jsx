import style from "./DropDownList.module.css";
import { useState } from "react";

function DropDownList(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((wasOpen) => !wasOpen);
  }

  return (
    <nav>
      <button onClick={toggleOpen}>
        <h3>{props.title}</h3>
      </button>
      <ul>
        {isOpen &&
          props.children.map((child, index) => (
            <li className={style.project} key={index}>
              {child}
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default DropDownList;
