/* Transform To Prime
    Given a List [] of n integers , find minimum number 
    to be inserted in a list, so that sum of all elements of list should equal the closest prime number .
    https://www.codewars.com/kata/5a946d9fba1bb5135100007c/train/javascript
*/

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length - 1);
}