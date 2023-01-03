async function getFile() {
  let myPromise = new Promise(function (resolve) {
    let req = new XMLHttpRequest();
    req.open("GET", "car.html");
    req.onload = function () {
      if (req.status === 200) {
        resolve(req.response);
      } else {
        resolve("File not found");
      }
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await myPromise;
}
getFile();
