var sum = function (a, b) {
    return a + b;
};
var ans = sum(4, 5);
console.log(ans);
// boolean
var isCool = true;
// number
var age = 12;
// string
var eyeColor = "brown";
var quote = "I am king " + age;
// array
var pets = [2, 4];
var pets2 = ["lala", "hehe"];
// Object
var wizard = {
    a: "john"
};
// null and undefined
var met = undefined;
var meh = null;
// tuple
var basket;
basket = ["basketball", 5];
// enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Small;
// any !!! be careful when using this
var whatever = "adsasd";
whatever = true;
// void (for nothing return)
var sing = function () {
    console.log("lalala");
};
// never (no return and no reachable points)
var error = function () {
    throw Error("oops");
};
var fightRobotArmy = function (robots) {
    console.log("Fight!");
};
var dog = {};
dog.count;
// function
var fightRobotArmy3 = function (robots) {
    console.log("Fight");
};
// classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = "lala";
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal("raar");
console.log(lion.greet());
// Union (either of the types)
var confused = 5;
