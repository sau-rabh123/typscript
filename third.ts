var n:number = 0
var count:number = 0;

for(n=0;n<=20;n++) {
   if (n % 2==0) {
      continue
   }
   count++
}
console.log (" The count of odd values between 0 and 20 is: "+count) 