const findTheOldest = function(people) {
    const sortedByAge = people.sort(function(a, b) {
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    });
    return sortedByAge[0]
};

// Do not edit below this line
module.exports = findTheOldest;
