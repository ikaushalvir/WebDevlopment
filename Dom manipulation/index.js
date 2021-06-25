// const body = document.body;
// creating a refrence to div.
// body.innerHTML="<h2>my name is</h2>";
// const div = document.createElement("div");
// div.innerHTML = "<h1>kaushal</h1>";
// body.append(div);

// // DIFFERENCE BETWEEN TEXT CONTENT AND INNERTEXT
// const div = document.querySelector(".div-1");
// document.querySelector("#hello").style.display="none";
// console.log(div.innerText);
// console.log(div.textContent);

// innerHTML has security issues;
const heading_h1 = document.querySelector("h1");
const em = document.createElement("em");
em.innerText = " kaushal ";
heading_h1.remove();
document.body.prepend(heading_h1);
heading_h1.prepend(em);
