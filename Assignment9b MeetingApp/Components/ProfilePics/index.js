import React from 'react';
import "../../App.css";
import swal from 'sweetalert';


const validateInfo = (e, saveProfilePics) => {
  e.preventDefault();
  const pic1 = document.getElementById("file-input1").files[0];
  const pic2 = document.getElementById("file-input2").files[0];
  const pic3 = document.getElementById("file-input3").files[0];
  console.log(pic1,pic2,pic3);
  if (pic1 && pic2 && pic3) {
    console.log("success");
    saveProfilePics([pic1, pic2, pic3]);
  }
  else
    swal("please upload all three","","warning");
};

function ProfilePics({saveProfilePics}) {
  return (
    <div>
      <h2 className="heading">Upload your pictures</h2>
      <form action="" onSubmit={(e) => {validateInfo(e,saveProfilePics)}} >
        <div className="upload-btn">
          <div className="image-upload">
            <label htmlFor="file-input1">
              <i className="fas fa-upload fa-3x"></i>
              <br/>
              Select
            </label>
            <input id="file-input1" type="file" />
          </div>

          <div className="image-upload">
            <label htmlFor="file-input2">
              <i className="fas fa-upload fa-3x"></i>
              <br/>
              Select
            </label>
            <input id="file-input2" type="file" />
          </div>

          <div className="image-upload">
            <label htmlFor="file-input3">
              <i className="fas fa-upload fa-3x"></i>
              <br/>
              Select
            </label>
            <input id="file-input3" type="file" />
          </div>
        </div>
        <span className="upload-info">All are necessary</span>

        <button className="btn-next">Next</button>
      </form>
    </div>
  )
}

export default ProfilePics;
