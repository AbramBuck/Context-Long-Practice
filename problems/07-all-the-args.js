function allTheArgs(func, ...args) {
  return function(...args2) {
    return func.apply(null, [...args, ...args2]);
  }
}



const bow = (...names) => {
  return "You bowed to " + names.join(" and ");
};
console.log(bow("Sandy")) // prints "You bowed to Sandy"

let bowSandy = allTheArgs(bow, "Sandy");
console.log(bowSandy()); // prints "You bowed to Sandy"
console.log(bowSandy("Joe", "Nico")); // prints "You bowed to Sandy and Joe and Nico"
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
