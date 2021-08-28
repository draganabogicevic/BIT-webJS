import React from "react";


export function getDateOfBirth(year, month, date) {  
    let fullDate = new Date(year, month, date);
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    let monthForDisplay =  months[fullDate.getMonth()];
    let fullDateForDisplay = `${date} ${monthForDisplay} ${year}`;
    
    return fullDateForDisplay;
}