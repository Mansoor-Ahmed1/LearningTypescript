//                           CLASS-1
console.log("Salam, World");
// extension : JavaScript and TypeScript Nightly
//                           CLASS-2
//                             VARIABLES
// There are 3 types of Variables: Var,Let,Const
//                      LET    VS   VAR 
// (LET preffered, as VAR makes issues in big applicatiton's)
// this will throw error
// let greet="SalamBhaiya"         
// let greet = "haha"
// this will not throw error
var greet = "SalamBhaiya";
var greet2 = "haha";
// greet2=23 // Error: reassigned value must be of same type as that of initialized, in this case "string"
console.log(greet2, "Sahab");
// Rules:
// only $ and _  can be used in variable names.
// numbers can't be at the start of variable name
// let x = 83;
// let temp = (x-32)/1.8;
// console.log(temp,"C");
//                 Strong Typing
// (assigning a variable specific datatype)
var user_name = "Sir Kamran"; //type interference
var main_user_name = "Sir Kamran Tessori";
var user = main_user_name; // asssigning use whatever is assigned to main_user_name
var num = "22"; // everything inside " " is string 
// let num1 : number = "22"; //Error coz i have assigned wrong DataType
var num2 = 22;
var sum = 22 + 33 + 4;
var summ = "22+33+4";
console.log(sum, summ);
console.log("sum"); // "sum" isn't same as sum; one is string, another is variable
// when computer sees " " , bhaya hath na lgao. As It Is print karde
console.log(3 > 4); // " " (string) nahi hai? chlo bhai Computer ka jalwa
true;
/* reserved : Words that computer is aware of, and we can't use them, as it would have double meaning for computer, if we use them as well. e.g:name  */
var a = "Hunain"; // computer ko nh pata 'a' kya h.
// = ----> left wale me right ko store krdo
// == ---> dono sides barabar
var username = "Ali"; // ` ` also a valid string
console.log("Ali" == username); // useful in FB login
var passward = 123;
console.log(passward == 456); // only login when pass matches as that one in DB
//                 DataType:ANY
var pass = "12";
pass = 12;
pass = false;
pass = 19230321323;
console.log();
//                 ANY(datatype)  vs UNKNOWN(variable)
// in unknown, datatype should be same as that of initialized
var greet2 = "haha";
// greet2=23 // Error: reassigned value must be of same type as that of initialized, in this case "string"
// greet2=true // Error: reassigned value must be of same type as that of initialized, in this case "string"
//  Whereas Any datatype may occur in ANY
var greet3 = false;
greet3 = 22;
greet3 = "Salam-un-Alaykum";
//               Strongly Typed Syntax VS Type Inference
// Strongly typed syntax:
var f = true;
var nam = "Haider";
// Type Inference
var g = true;
var naam = "Haider";
