import React from "react"

export function getEmail(email) {
    let firstThreelettersofEmail = email.slice(0,3);
    let restOfEmail = "";

    for(let i = 0; i<email.length; i++) {
        if(email[i] === "@") {
            restOfEmail = email.slice(i-3, email.length);
        }
    }

    let emailForDisplay = `${firstThreelettersofEmail}...${restOfEmail}`;
    return emailForDisplay;

}