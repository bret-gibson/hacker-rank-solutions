function timeConversion(s) {
    
    var newDate = s.slice(0, 8);
    newDate = newDate.split(":");
    var hours = newDate[0];

    if (s.includes("AM")) {

        if(hours == "12") {
            hours = "00";
        }
    }

    else if (s.includes("PM") && hours!= "12") {
        hours = Number(hours) + 12;  
    }

    newDate.unshift(hours.toString());
    newDate.splice(1, 1);
    newDate = newDate.join(":");

    return newDate;
}