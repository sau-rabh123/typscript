var str = new String("This is saurabh"); 
var str2= new String("done with this code")
console.log("str.charAt(0) is:" + str.charAt(0)); 
console.log("str.charAt(1) is:" + str.charAt(1)); 
console.log("str.charAt(2) is:" + str.charAt(2)); 
console.log("str.charAt(3) is:" + str.charAt(3)); 
console.log("str.charAt(4) is:" + str.charAt(4)); 
console.log("str.charAt(5) is:" + str.charAt(5));
console.log("Length "+str2.length);
var str3 = str.concat(str2.toString());
console.log("str + str2 : "+str3);
var sliced = str.slice(3, -2); 
console.log(sliced);