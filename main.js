// const hello = document.createElement("h1");
// const test = document.createTextNode("Hello");
// hello.appendChild(test);
// const main = document.querySelector("body")
// main.appendChild(hello);


// const hello = () => {
//     const test = document.querySelector("h1");
//     test.textContent = "Hello Mars"
// }
// const tesssst = document.getElementById("gg");
// tesssst.addEventListener("click", hello);

const hello2 = document.createElement("h1");
const main2 = document.querySelector("body");
main2.appendChild(hello2);
hello2.innerHTML = prompt("Ismingizni kiriting");
hello2.style.color = "red";
hello2.style.textAlign = "center";
hello2.style.marginTop = "250px";
main2.style.background = "yellow";