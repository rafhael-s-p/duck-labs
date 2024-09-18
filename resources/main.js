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

// Create Measurement Objects
let measurement1 = {
    id: 1,
    unit: "kg",
    value: 42,
    time: 'PT2M12S' // The time value represents a period of time elapsed since the start of the experiment and should be expressed as a string value in iso format
};
let measurement2 = {
    id: 2,
    unit: "kg",
    value: 40,
    time: 'PT3M10S'
};
let measurement3 = {
    id: 3,
    unit: "kg",
    value: 3,
    time: 'PT3M55S'
};
let measurement4 = {
    id: 4,
    unit: "m",
    value: 12,
    time: 'PT20M'
};
let measurement5 = {
    id: 5,
    unit: "m",
    value: 10,
    time: 'PT1H22M10S'
};
// Create and populate and array of Measurement objects
let measurements = [measurement1, measurement2, measurement3];

/*--- Function Section ---*/
// Convert between pounds and kilograms
function lb2kg(lb) {
    return lb / LB_PER_KG;
}
function kg2lb(kg) {
    return kg * LB_PER_KG;
}

/*--- Test Section ---*/
// Convert between pounds and kilograms
let lb = kg2lb(measurement1.value);
let kg = lb2kg(lb);
console.log("Pounds: " + lb + " Kilograms: " + kg);