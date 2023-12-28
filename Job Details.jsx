import React from "react";
const Jobdetails = () => {
    return(
        <div>
            <h3>Job Details</h3>
            <form>
            <label htmlFor="title">Job Title</label><br />
            <input type="text" name="job" id="title" placeholder="Enter job title" /><br />
            <label htmlFor="details">Requistion Details</label><br />
            <input type="text" name="description" id="details" placeholder="Enter job details" /><br />
            <label htmlFor="location">Requistion Details</label><br />
            <input type="text" name="area" id="location" placeholder="Enter job location" /><br />
            </form>
            <button id="previous-button"><span id="previous-text">Previous</span></button>
            <button id="after-button"><span id="after-text">Next</span></button>
        </div>
    )
}
export default Jobdetails;