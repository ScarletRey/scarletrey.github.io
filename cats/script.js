'use strict';

var startDate = new Date('Fri Nov 01 2019 21:39:35 GMT+0300 (Москва, стандартное время)'),
    date = new Date(),
    dateArray = [],
    triper = false,
    triperCounter = 0,
    doubler = false,
    doublerCounter = 0;

var myCalendar = new VanillaCalendar({
    selector: "#myCalendar",
    datesFilter: true
});

document.addEventListener('DOMContentLoaded', function () {
    CheckDate();
});

var CheckDate = function () {
    for (var i = 0; i<=366; i++) {
        var day = new Date(startDate.setDate(startDate.getDate() + 1));

        (triper && triperCounter < 3) && (doubler && doublerCounter < 2) ?  dateArray.push({date: day.getFullYear()+'-'
                +(day.getMonth() >= 10 ? (day.getMonth()+1) : '0'+(day.getMonth()+1))+'-'
                +(day.getDate() >= 10 ? day.getDate() : '0'+day.getDate())}) : null;
        triperCounter++;
        if (triperCounter === 3) {
            triper = !triper;
            triperCounter = 0;
        }
        doublerCounter++;
        if (doublerCounter === 2) {
            doubler = !doubler;
            doublerCounter = 0;
        }
    }
    myCalendar.set({
        availableDates: dateArray,
    });
};

