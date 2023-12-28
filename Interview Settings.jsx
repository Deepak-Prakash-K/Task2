import React from "react";
const Interviewsetting = () => {
    return(
        <div>
            <h3>Interview Settings</h3>
            <form>
            <label htmlFor="mode">Interview Mode</label><br />
            <select name="interview" id="mode">
                <option disabled = {true} value="">Select interviewmode</option>
                <option value="Online ">Online</option>
                <option value="Offline">Offline</option>
            </select><br />
            <label htmlFor="duration">Interview Duration</label><br />
            <select name="timings" id="duration" >
            <option disabled = {true} value="">Select interview duration</option>
                <option value="Short">Short</option>
                <option value="Medium">Medium</option>
                <option value="Long">Long</option>
            </select><br />
            <label htmlFor="area">Interview Language</label><br />
            <select name="location" id="area" >
            <option disabled = {true} value="">Select interview language</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
            </select><br />
            </form>
            <button id="previous-button"><span id="previous-text">Previous</span></button>
            <button id="after-button"><span id="after-text">Next</span></button>
        </div>
    )
}
export default Interviewsetting;