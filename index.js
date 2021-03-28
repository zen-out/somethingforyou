/**********************************************
 * Add an event listener to input
 * ==================================
 ***********************************************/
console.log("This loads");

// Grab all inputs
const inputs = document.querySelectorAll("input");
// Grab the tag with message id
const message = document.querySelector("#message");
// console log the inputs
console.log(inputs);
// Add event listener
document.addEventListener("keypress", (e) => {
  console.dir(e);
});
// For each input
inputs.forEach((el) => {
  // Add an event listener
  el.addEventListener("keydown", (e) => {
    // Console.log the key
    const keyName = e.key;
    console.log(`DOWN ${keyName}`);
    // As well as manipulate the message id to display the keyName
    message.textContent += keyName;
  });

  el.addEventListener("keyup", (e) => {
    // C
    const keyName = e.key;
    console.log(`UP ${keyName}`);
  });
  el.addEventListener("keypress", (e) => {
    const keyName = e.key;
    console.log(`PRESSED ${keyName}`);
  });
});

/**********************************************
 * To do list
 * ==================================
 ***********************************************/

const main = document.querySelector(".main");
const ul = document.createElement("ul");
const input1 = document.createElement("input");
const button = document.createElement("button");
button.textContent = "Add Item";
main.prepend(button);
main.prepend(input1);
main.append(ul);
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "red";
});
button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "grey";
});
input1.addEventListener("focus", (e) => {
  input1.style.backgroundColor = "red";
  input1.style.color = "white";
});
input1.addEventListener("blur", (e) => {
  input1.style.backgroundColor = "white";
  input1.style.color = "black";
});
const myStuff = ["Bananas", "Apples", "Milk"];
myStuff.forEach((ele, ind) => {
  createItem(myStuff[ind]);
});
button.addEventListener("click", (e) => {
  console.log(input1.value);
  createItem(input1.value);
  input1.value = "";
});

function createItem(val) {
  console.log(val);
  const ele = document.createElement("li");
  ele.textContent = val;
  ele.style.fontSize = "3em";
  const span = document.createElement("span");
  span.textContent = " X ";
  span.style.color = "red";
  span.addEventListener("click", (e) => {
    ele.remove();
  });
  span.addEventListener("mouseover", (e) => {
    span.style.cursor = "grab";
  });
  span.addEventListener("mouseout", (e) => {
    span.style.cursor = "pointer";
  });
  ele.append(span);
  ul.append(ele);
}
