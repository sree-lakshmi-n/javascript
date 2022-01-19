/* Transform To Prime
    Given a List [] of n integers , find minimum number 
    to be inserted in a list, so that sum of all elements of list should equal the closest prime number .
    https://www.codewars.com/kata/5a946d9fba1bb5135100007c/train/javascript
*/

const isPrime = (num) => {
   let sqrtnum = Math.floor(Math.sqrt(num));
   let prime = num !== 1;
   for(let i = 2; i < sqrtnum + 1; i++){
      if(num % i === 0){
         prime = false;
         break;
      };
   };
   return prime;
}
const nextPrime = (num = 1) => {
   while(!isPrime(++num)){
   };
   return num;
};
function minimumNumber(numbers){
    const sum = numbers.reduce((accumulator, curr) => accumulator + curr);
    if(isPrime(sum)) return 0;
    else{
        return (nextPrime(sum)-sum);
    }
  }