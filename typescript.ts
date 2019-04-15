const sum = (a: number, b: number) => {
  return a + b;
};

const ans = sum(4, 5);
console.log(ans);

// boolean
let isCool: boolean = true;

// number
let age: number = 12;

// string
let eyeColor: string = "brown";
let quote: string = `I am king ${age}`;

// array
let pets: number[] = [2, 4];
let pets2: Array<string> = ["lala", "hehe"];

// Object
let wizard: object = {
  a: "john"
};

// null and undefined
let met: undefined = undefined;
let meh: null = null;

// tuple
let basket: [string, number];
basket = ["basketball", 5];

// enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3
}
let sizeName: number = Size.Small;

// any !!! be careful when using this
let whatever: any = "adsasd";
whatever = true;

// void (for nothing return)
let sing = (): void => {
  console.log("lalala");
};

// never (no return and no reachable points)
let error = (): never => {
  throw Error("oops");
};

// interface (work well with object)
interface RobotArmy {
  count: number;
  type: string;
  magic?: string; // ? stands for this properties either exists or not
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log("Fight!");
};

// type assertion (allow to overwrite)
interface DogArmy {
  count: number;
}

let dog = {} as DogArmy;
dog.count;

// function
let fightRobotArmy3 = (robots: RobotArmy): void => {
  console.log("Fight");
};

// classes

class Animal {
  public sing: string = "lala";
  constructor(sound: string) {
    this.sing = sound;
  }

  greet(): string {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal("raar");
console.log(lion.greet());

// Union (either of the types)
let confused: string | number = 5;
