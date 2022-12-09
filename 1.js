let year = prompt("Та жилээ оруулна уу");
let month = prompt("Та сар оруулна уу");
let day = prompt("Та өдөр оруулна уу");

let yearNumber = Number(year);
let monthNumber = Number(month);
let dayNumber = Number(day);

if(Number.isInteger(yearNumber) && yearNumber > 0) {
    if(Number.isInteger(monthNumber) && monthNumber > 0) {
        if(Number.isInteger(day) && dayNumber > 0) {
            if (year.length == 4) {
                month = month.length == 1 ? "0" + month : month;
                day = day.length == 1 ? "0" + day : day;

                alert(result);
            }else{
                alert("Та жилээ оруулна уу");
            }
        }
    }else{
        alert("Та өдрөө бүхэл тоо оруулна уу");
    }
}else{
    alert("Та огноогоо бүхэл тоо оруулна уу");
}



