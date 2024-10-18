function lifeInWeeks(age) {
    const lifeExpectancy = 90;

    let yearsRemaining = lifeExpectancy - age;
    let daysRemaining = yearsRemaining * 365;
    let weeksRemaining = yearsRemaining * 52;
    let monthsRemaining = yearsRemaining * 12;

    console.log(`You have ${daysRemaining} days, ${weeksRemaining} weeks, and ${monthsRemaining} months left.`);
}

lifeInWeeks(56); // Output: You have 12410 days, 1768 weeks, and 408 months left.
