function apitest(params) {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(request.responseText);
    }
  };
  let url = "https://api.api-ninjas.com/v1/cats?name=abyssinian";
  request.open("GET", url);
  request.setRequestHeader(
    "x-api-key",
    "skQCIz65JT1wSxJ1tFi80Q==CYFFXMUlAgCiPWKz"
  );
  request.send();
}
apitest();
