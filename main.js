/*.
DOM [Events]
  Validate Form Practice
  Prevent Default
*/

// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");

// document.forms[0].onsubmit = function (e) {
//   let userVaild = false;
//   let ageVaild = false;

//   if (userInput.value !== "" && userInput.value.length <= 10) {
//     userVaild = true;
//   }

//   if (ageInput.value !== "") {
//     ageVaild = true;
//   }

//   if (userVaild === false || ageVaild === false) {
//     e.preventDefault();
//   }
// };

// let one = document.querySelector(".one");
// let two = document.querySelector(".two");

// window.onload = function () {
//   two.focus();
// };
// one.onblur = function () {
//   document.links[0].click();
// };

// //Javascript with Route

// var Num1 = window.prompt("Enter your Num1");
// var Num2 = window.prompt("Enter your Num2");

// var result = Number(Num1) + Number(Num2);
// console.log(result);

var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPric");
var productcategoInput = document.getElementById("productCategory");
var productDescInput = document.getElementById("productDesc");
var mainProduct = document.getElementById("mainBtn");
var productContainer;

if (localStorage.getItem("products") == null) {
  productContainer = [];
} else {
  productContainer = JSON.parse(localStorage.getItem("products"));
  displayProduct(productContainer);
}

function addproduct() {
  var product = {
    Name: productNameInput.value,
    Price: productPriceInput.value,
    Catego: productcategoInput.value,
    Desc: productDescInput.value,
  };
  productContainer.push(product);
  localStorage.setItem("products", JSON.stringify(productContainer));
  displayProduct(productContainer);
  cleerForm();
}

function displayProduct(productList) {
  var cartona = ``;
  for (var i = 1; i < productList.length; i++) {
    cartona += `<tr>
    <td>${i}</td>
    <td>${productList[i].Name}</td>
    <td>${productList[i].Price}</td>
    <td>${productList[i].Catego}</td>
    <td>${productList[i].Desc}</td>
    <td>
      <button onclick="updateButton(${i})" class="btn btn-info">update</button>
    </td>
    <td>
      <button onclick="deleteProduct(${i})" class="btn btn-danger">delete</button>
    </td>
  </tr>`;
  }
  document.getElementById("tableRow").innerHTML = cartona;
}

function deleteProduct(productIndex) {
  productContainer.splice(productIndex, 1);
  localStorage.setItem("products", JSON.stringify(productContainer));
  displayProduct(productContainer);
}

function cleerForm() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productcategoInput.value = "";
  productDescInput.value = "";
}

function searchProducts(term) {
  var searchProducts = [];
  for (var i = 0; i < productContainer.length; i++) {
    if (
      productContainer[i].Name.toLowerCase().includes(term.toLowerCase()) ==
      true
    ) {
      searchProducts.push(productContainer[i]);
    }
  }
  displayProduct(searchProducts);
}

function updateButton(index) {
  productNameInput.value = productContainer[index].Name;
  productPriceInput.value = productContainer[index].Price;
  productcategoInput.value = productContainer[index].Catego;
  productDescInput.value = productContainer[index].Desc;
  mainBtn.innerHTML = "updateProduct";
  mainBtn.onclick = () => setUpdate(index);
}

function setUpdate(index) {
  var newProduct = {
    Name: productNameInput.value,
    Price: productPriceInput.value,
    Catego: productcategoInput.value,
    Desc: productDescInput.value,
  };
  productContainer[index] = newProduct;
  localStorage.setItem("products", JSON.stringify(productContainer));
  displayProduct(productContainer);
  mainBtn.innerHTML = "AddProduct";
}
