// function apitest(params) {
//   let request = new XMLHttpRequest();
//   request.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       let borderRequest = new XMLHttpRequest();
//       borderRequest.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//           console.log(borderRequest.responseText);
//         }
//       };
//       let borderUrl = `https://restcountries.com/v3.1/alpha/${
//         JSON.parse(request.responseText)[0].borders[0]
//       }`;
//       borderRequest.open("GET", borderUrl);
//       borderRequest.send();
//     }
//   };
//   let url = "https://restcountries.com/v3.1/alpha/in";
//   request.open("GET", url);
//   request.send();
// }
// apitest();
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (data[0].borders) {
        return fetch(
          `https://restcountries.com/v3.1/alpha/${data[0].borders[0]}`
        );
      }
      throw new Error("No borders");
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
    .finally(() => {
      console.log("Completed");
    });
};
getCountryData("canada");
