import React from "react";
const RequistionDetails = () => {
    return(
        <div>
            <h3>Requistion Details</h3>
            <form>
            <label htmlFor="position">Requistion Details</label><br />
            <input type="text" name="tile" id="position" placeholder="EnterrRequistion title" /><br />
            <label htmlFor="vacancy">Number of openings</label><br />
            <input type="text" name="openings" id="vacancy"  /><br />
            <label htmlFor="gender">Gender</label><br />
            <select name="gender" id="gender" >
                <option disabled = {true} value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non Binary">Non Binary</option>
            </select><br />
            <label htmlFor="time">Urgency</label><br />
            <select name="joining" id="time" >
                <option disabled = {true} value="">Select urgency</option>
                <option value="Urgent">Urgent</option>
                <option value="Immediate joining">Immediate joining</option>
                <option value="Relaxed">Relaxed</option>
            </select>
            </form>
            <button id="next-button"><span id="next-text">Next</span></button>
        </div>
    )
}
export default RequistionDetails;