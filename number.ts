// var var_name:data_type = value
var num1: number = 5;
var num2: number = 10;
var num3: number = 22;

var sum: number = num1 + num2 + num3;
console.log("Sum of num1 and num2 is: " + sum);

var oct: number = 0o100001;
var hexa: number = 0b00001;
var binary: number = 0x00001;

console.log(oct + 10);

var item: number = 100;
var item2 = "40";
var item3 = +item2;

console.log(item + item3);

var data: number | string = 30;
data = "Hello";
console.log(data);
