const generator = function* (person) {
  const { name, surname, age } = person();

  if (age > 18) {
    majorAge();
  } else {
    minorAge();
    return;
  }

  yield returName(name, surname);
};

const person = function () {
  return {
    name: "José",
    surname: "Lucas",
    age: 21,
  };
};

const minorAge = function () {
  console.log("you are underage, you cannot do driving school");
};

const majorAge = function () {
  console.log("If you are of legal age, you can register for a driving school");
};

const returName = function (name, surname) {
  return console.log(
    `${name} ${surname} driving school registration was successful`
  );
};

const g1 = generator(person);

g1.next();
g1.next();
