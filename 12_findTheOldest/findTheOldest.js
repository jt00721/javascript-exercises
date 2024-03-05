const findTheOldest = function(people) {
    const sortedByAge = people.sort(function(a, b) {
        const currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        if (!(a.yearOfDeath)){
            a.yearOfDeath = Number(currentYear);
        }
        if (!(b.yearOfDeath)){
            b.yearOfDeath = Number(currentYear);
        }
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    });
    return sortedByAge[0]
};

// Do not edit below this line
module.exports = findTheOldest;
