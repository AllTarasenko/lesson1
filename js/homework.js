
var num = 'number'; // type string
a = num +  3 + 3; // 3 type number
console.log(a); // result = number33, because + in this case is operation of concatenation

num_bool = null + 3; //  null means nothing and equals 0
console.log(num_bool); // result = 3

bool_operator = 5 && "qwerty"; //&& boolean operator witch means AND, back true, if both operators is true, another any case false.
console.log(bool_operator); // result = qwerty, because "qwerty" != 5, back last value

unary_plus = +'40' + +'2' + "hillel"; //+'a' - unary plus
console.log(unary_plus);// result = 42hillel, because + in construction +'40' change string to number, "hillel" - stay string

strict_equality = '10' - 5 === 6; // '10' - string, strict equality operator witch comparing value and date type
console.log(strict_equality); // result = false, value and date type don't equal

bool_type = true + false; // null is boolean date type witch equals 1, false 0
console.log(bool_type); // result = 1, because 1 + 0 = 1

minuse = '4px' - 3; // '4px' - string
console.log(minuse);// result = NaN (not a number), '4px' cannot be converted in number

minuse2 = '4' - 3; // '4' - string
console.log(minuse2);// result = 1, '4' - can be converted to number and converted to number 4

exponentiation = '6' + 3 ** 0; //  ** - exponentiation
console.log(exponentiation); // result = 61, '6' - string, any number in exponentiation 0 = 1, string + num is operation of concatenation

division = 12 / '6'; //  '6' - string,
console.log(division); // result = 2,  '6' - converted to umber, 12 / 6 = 2

pluse = '10' + (5 === 6); //  '10' - string, === strict equality operator witch comparing value and date type
console.log(pluse); // result = 10false, '10' - string, false because 5 != 6, string + boolean is operation of concatenation

comparison_operator = null == ''; // == comparison operator, '' - empty string = 0 , null = undefined
console.log(comparison_operator);// result = false

exponentiation2 = 3 ** (9 / 3); //** exponentiation, action in () more prioritize
console.log(exponentiation2); // result = 27, 3 ** 3

inequality = !!'false' == !!'true'; // == inequality operator, !! - double negotiation
console.log(inequality); // result = true, 'false' and 'true' - string

or_and = 0 || '0' && 1; // || - OR back true, if at list one is true, another way false. && - AND back true, if both operands are true, another way  false.
console.log(or_and); // result = 1, 0 - false, '0' - true, back last value 1

less_operator = (+null == false) < 1; // // == inequality operator
console.log(less_operator); // result = false , +null = undefined and null, 1 < 1

and_or = false && true || true; //  && - AND back true, if both operands are true, another way  false. || - OR back true, if at list one is true, another way false.
console.log(and_or); // result = true, false && true = false, false || true = true

or_and2 = false && (false || true); // && - AND back true, if both operands are true, another way  false. || - OR back true, if at list one is true, another way false.
console.log(or_and2); // result = false, (false || true) = true, false && true = false

a2 = (+null == false) < 1 ** 5; // +null = undefined and null,
console.log(a2); // result = false, (+null == false) = 1, 1 ** 5 = 1, 1 < 1