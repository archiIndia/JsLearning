// write a function
// that take 3 param,
// 1. first operation type "add" , "sub"
// 2. a number (n1)
// 3. a number (n2)

function operate(operation_type, n1, n2) {
  if (operation_type === "add") {
    return n1 + n2;
  } else if (operation_type === "sub") {
    return n1 - n2;
  }
}
console.log("macho", operate("add", 25, 10));

/**
 * if number is even
 *    then
 *          if number is  > 10 then, add 2
 *          else add 3
 * else
 *   subtract 1
 */
function all(a1) {
  let rel = 0;
  if (a1 % 2 === 0) {
    if (a1 > 10) {
      rel = a1 + 2;
    } else {
      rel = a1 + 3;
    }
  } else {
    rel = a1 - 1;
  }
  return rel;
}
console.log("Output IS", all(6));

const day=2;

let name_of_day;
switch(day){
    case 1: {name_of_day="Sunday"; break;}
    case 2: name_of_day="Monday";break
    case 3: name_of_day="Tue"; break;
    case 4: name_of_day="Wed"; break;
    case 5: name_of_day="Thur"; break;
    case 6: name_of_day="Fri"; break;
    case 7: name_of_day="Sat"; break;
}
console.log("name of day", name_of_day);

