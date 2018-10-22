import React from 'react'
import "../../App.css";
import swal from 'sweetalert';



const validateInfo = (e, saveBaveragesAndTime) => {
    e.preventDefault();
    var bvgs = document.querySelectorAll("input[name='baverage']:checked");
    var time = document.querySelectorAll("input[name='duration']:checked");
    bvgs = [...bvgs];
    time = [...time];
    if(bvgs.length && time.length) {
        var baverages = bvgs.map( item => item.value );
        var durations = time.map( item => item.value );
        saveBaveragesAndTime(baverages,durations);
    }
    else
        swal("please select at least one beverage and duration to continue","","warning");
}
  
  
  
function BaveragesAndTime( {saveBaveragesAndTime} ) {
    return (
        <div>
            <form action="" onSubmit={(e) => {validateInfo(e, saveBaveragesAndTime)}} >
                <span className="heading">
                    Select your favourite baverages
                    <span className="upload-info">(atleast one)</span>
                </span>
                <div className="upload-btn">

                <div>
                    <label htmlFor="Coffee">
                    <i className="fas fa-coffee fa-3x"></i>
                    <br/>
                    Coffee
                    </label>
                    <input type="checkbox" name="baverage" value="Coffee" id="Coffee"/>
                </div>

                <div>
                    <label htmlFor="Juice">
                    <i className="fas fa-wine-glass-alt fa-3x"></i>
                    <br/>
                    Juice
                    </label>
                    <input type="checkbox" name="baverage" value="Juice" id="Juice"/>
                </div>

                <div>
                    <label htmlFor="Cocktail">
                    <i className="fas fa-cocktail fa-3x"></i>
                    <br/>
                    Cocktail
                    </label>
                    <input type="checkbox" name="baverage" value="Cocktail" id="Cocktail"/> 
                </div>
                </div>
                <hr/>
                <span className="heading">
                    Select duration of meeting
                    <span className="upload-info">(atleast one)</span>
                </span>
                <div className="upload-btn">
                    <label><input type="checkbox" name="duration" value="20" /> 20 min</label>
                    <label><input type="checkbox" name="duration" value="60" /> 60 min</label>
                    <label><input type="checkbox" name="duration" value="120" /> 120 min</label>
                </div>
                
                <button className="btn-next">Next</button>
            </form>
        </div>
    )
}

export default BaveragesAndTime;