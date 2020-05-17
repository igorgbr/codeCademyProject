// const getSleepHours = (monday, ...sunday) => {
//   if (day === 'monday') {
//     return monday;
//   } else if (day === 'tuesday') {
//     return tuesday;
//   } else if (day === 'wednesday') {
//     return wednesday;
//   } else if (day === 'thursday') {
//     return thursday;
//   } else if (day === 'friday') {
//     return friday;
//   } else if (day === 'saturday') {
//     return saturday;
//   } else if (day === 'sunday') {
//     return sunday;
//   }
// }

const getActualSleepHours = (monday, tuesday, wednesday, thursday, friday, saturday, sunday) =>
    monday +
    tuesday +
    wednesday +
    thursday +
    friday +
    saturday +
    sunday;

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = (monday, tuesday, wednesday, thursday, friday, saturday, sunday, hours) => {
    let actualSleepHours = getActualSleepHours(monday, tuesday, wednesday, thursday, friday, saturday, sunday);
    let idealSleepHours = getIdealSleepHours(hours);

    if (actualSleepHours === idealSleepHours) {
        console.log('perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You sleep a lot, you have ' + (idealSleepHours - actualSleepHours) + ' hours of sleep!');
    } else {
        console.log('You need some rest, you debt ' + (idealSleepHours - actualSleepHours) + ' hours of sleep"');
    }
}

calculateSleepDebt(8, 8, 8, 7, 6, 7, 8, 7);


