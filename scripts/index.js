function palindrome(str) {
  let a = "";
  str = str.toLowerCase();
  str = str.split("");
  str = str.filter(function (val) {
    return !/[\W_]/g.test(val);
  });
  a = str.slice();
  a = a.join("");
  str = str.reverse();
  str = str.join("");

  let resultado = a == str;
  console.log(resultado, str, "de verdad ");
  return resultado;
}

async function createlabel() {
  let c = document.getElementById("palabra");
  let d = document.getElementById("respuesta");
  let z = document.createElement("h3");
  z.textContent = palindrome(c.value);
  d.appendChild(z);
  return d;
}
let e = document.getElementById("boton").addEventListener("click", createlabel);
