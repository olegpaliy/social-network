import React from "react";
import s from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <div className={s.sidebarContainer}>
      <div className={s.sidebarContent}>
        <h4> Hello World!</h4>
        <div>
          <img
            src="https://cdn.logojoy.com/wp-content/uploads/20191212164817/hogwarts-logo-600x600.png"
            alt=""
          />
          <img
            src="https://cdn.logojoy.com/wp-content/uploads/20191212164817/hogwarts-logo-600x600.png"
            alt=""
          />
          <img
            src="https://cdn.logojoy.com/wp-content/uploads/20191212164817/hogwarts-logo-600x600.png"
            alt=""
          />
        </div>
        <div>
          <p>
            {" "}
            Lorem ipsum 
          </p>
          <p>
            {" "}
            Lorem ipsum 
            dicta.
          </p>
          <p>
            {" "}
            Lorem ipsum
            dicta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
