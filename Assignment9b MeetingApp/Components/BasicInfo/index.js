import React from "react";
import "../../App.css";

const validateInfo = (e, saveBasicInfo) => {
  e.preventDefault();
  const userData = document.getElementsByTagName("input");
  saveBasicInfo(userData[0].value, userData[1].value);
};

const BasicInfo = ({saveBasicInfo}) => {
  return (
    <div>
      <h1 className="heading">Basic Info</h1>
      <form onSubmit={(e) => {validateInfo(e, saveBasicInfo)} } action="">
        {/* <label>
          Nick Name: <br /> */}
          <input placeholder="Nick Name" required type="text" />
        {/* </label> */}

        {/* <label>
          Phone Number: <br /> */}
          <input placeholder="Phone Number" required type="tel" />
        {/* </label> */}
        <br /><br /><br />
        <button className="btn-next light">Next</button>
      </form>
    </div>
  );
};

export default BasicInfo;
