interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person): string {
  return "Hello," + person.firstName + " " + person.lastName;
}

let user = {
  firstName: "Jane",
  lastName: "User"
};

document.body.textContent = greeter(user);
