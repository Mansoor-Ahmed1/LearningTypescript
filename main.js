console.log("Salam, World");
//                             VARIABLES
// There are 3 types of Variables: Var,Let,Const
//                      LET    VS   VAR 
// (LET preffered, as VAR makes issues in big applicatiton's)
// this will throw error
// let greet="SalamBhaiya"         
// let greet = "haha"
// this will not throw error
// var greet="SalamBhaiya"
var greet2 = "haha";
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
var user = main_user_name;
var num = "22"; // everything inside " " is string 
// let num1 : number = "22"; 
var num2 = 22;
var sum = 22 + 33 + 4;
var summ = "22+33+4";
console.log(sum, summ);
console.log("sum"); // "sum" != sum; one is string, another is variable
// when computer sees " " , bhaya hath na lgao.as it is print karde
console.log(3 > 4); // " ", nahi hai? chlo bhai Computer ka jalwa
true; // reserved : ese alfaz jjinka matlab computer ko pata h.
"Hunain"; // computer ko nh pata kya h.
// = ----> left wale me right ko store krdo
// == ---> dono sides barbar
var username = "Ali";
console.log("Ali" == username); // useful in FB
var passward = 123;
console.log(passward == 456); // only login when pass matches to DB
