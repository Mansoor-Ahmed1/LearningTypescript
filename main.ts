//                           CLASS-1

console.log("Salam, World")
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
// var greet="SalamBhaiya"
var greet2 = "haha"
// greet2=23 // Error: reassigned value must be of same type as that of initialized, in this case "string"
console.log(greet2 , "Sahab")
// Rules:
// only $ and _  can be used in variable names.
// numbers can't be at the start of variable name


// let x = 83;
// let temp = (x-32)/1.8;
// console.log(temp,"C");

//                 Strong Typing
// (assigning a variable specific datatype)
let user_name = "Sir Kamran"; //type interference
let main_user_name : string = "Sir Kamran Tessori"
let user = main_user_name;
let num : string = "22"; // everything inside " " is string 
// let num1 : number = "22"; 
let num2 : number = 22; 
let sum :number = 22+33+4
let summ :string = "22+33+4"
console.log(sum,summ)
console.log("sum") // "sum" != sum; one is string, another is variable
// when computer sees " " , bhaya hath na lgao.as it is print karde
console.log(3>4) // " ", nahi hai? chlo bhai Computer ka jalwa
true // reserved : ese alfaz jjinka matlab computer ko pata h.
"Hunain" // computer ko nh pata kya h.

// = ----> left wale me right ko store krdo
// == ---> dono sides barbar
let username:string =`Ali`;
console.log("Ali" == username) // useful in FB
let passward :number = 123;
console.log(passward == 456);// only login when pass matches in DB

//                 DataType:ANY
let pass:any="12"
pass=12
pass=false
pass=19230321323;
console.log()

//                 ANY(datatype)  vs UNKNOWN(variable)
// in unknown, datatype should be same as that of initialized
var greet2 = "haha"
// greet2=23 Error: reassigned value must be of same type as that of initialized, in this case "string"

//  Whereas Any datatype may occur in ANY

//               Strongly Typed Syntax VS Type Inference
// Strongly typed syntax:
let f:boolean=true
let nam:string="Haider";

// Type Inference
let g=true
let naam="Haider";