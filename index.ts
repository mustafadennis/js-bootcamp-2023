let arrayOfString: string[];

// arrayOfString = ["1", "2", "3", true];

let arrayOfBooleans: boolean[];

// arrayOfBooleans = [true, false, false, 10];

const myStrictArray: unknown = ["MAX", true, 100];

let userInput: unknown = "Max";

if (typeof userInput === "number") {
  let userInput2 = userInput;
}

type userTypes = {
  name: string;
  age: number;
  isStudent?: boolean;
};

interface IUserTypes {
  name: string;
  age: number;
  email?: string;
  isStudent?: boolean;
  userId: string | number;
}

interface IAdmin extends IUserTypes {
  isAdmin: boolean;
}

const user1: IUserTypes = {
  name: "Max",
  age: 10,
  userId: "12345",
};

const admin1: IAdmin = {
  name: "Max",
  age: 10,
  isAdmin: true,
  userId: 61512512,
};

interface multiplyDigitsParams {
  a: number;
  b: number;
  b1: number;
  b2: number;
}

// const multiplyDigits = ({ a, b }: { a: number; b: number }): string => {
//   return (a * b).toString();
// };

type dayOfWeekType = "Monday" | "Tuesday" | "Wednesday";

let dayOfWeek: dayOfWeekType = "Wednesday";

const mapDayWeekFunc = (weekDay: dayOfWeekType) => {
  dayOfWeek = weekDay;
};
