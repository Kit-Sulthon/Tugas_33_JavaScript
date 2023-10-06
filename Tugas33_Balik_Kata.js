function balikKata(kata) {
  let result = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    result += kata[i];
  }
  return result;
}
console.log(balikKata("Niomic!"));
console.log(balikKata("JavaScript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));
