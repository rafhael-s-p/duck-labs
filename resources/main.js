/* --- Constant Section --- */

const LB_PER_KG = 2.2;
const MILLI_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = 3600;

/* --- Object Section --- */
// Create Experiment Objects
let experiment1 = {
    id: 101,
    task: "Measure Weight",
    budget: 123.45,
    startTime: new Date(2024, 9, 18, 14, 33),
    complete: false
};

let experiment2 = {
    id: 102,
    task: "Measure Length",
    budget: 321.54,
    startTime: new Date(2024, 9, 18, 14, 33),
    endTime: new Date(2024, 9, 18, 21, 33),
    complete: true
};