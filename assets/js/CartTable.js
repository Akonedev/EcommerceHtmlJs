document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();

  const cartProdBagde = document.getElementById("cartProdBagde");
  cartProdBagde.textContent = "0";

  //Update the Cart Badge
  let cartStorage = localStorage;
  const carttotal = cartStorage.getItem("Total");
  cartProdBagde.innerHTML = carttotal;
  const cartModalBtn = document.getElementById("cartModalbtn");

  //Creta table for Shopping Cart
  let table = document.createElement("table");
  table.setAttribute("class", "table table-striped");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  //Create table header for Shopping Cart
  let row_1 = document.createElement("tr");
  let heading_1 = document.createElement("th");
  let heading_2 = document.createElement("th");
  let heading_3 = document.createElement("th");
  let heading_4 = document.createElement("th");

  heading_1.innerHTML = "Produit";
  heading_2.innerHTML = "Prix";
  heading_3.innerHTML = "Quantite";
  heading_4.innerHTML = "Total";


  //When click on Shopping Cart button
  cartModalBtn.onclick = function () {
    tbody.innerHTML = "";
    getCart();
  };

  function getCart() {
    const carModalHeader = document.getElementById("carModalHeader");
    const cartModalBody = document.getElementById("carModalBody");
    const carModalFooter = document.getElementById("carModalFooter");
    let totalGeneral =0

    //Get CartDetails From localStorage
    cartStorage = localStorage;
    let cartArray = "";

    table.appendChild(thead);
    table.appendChild(tbody);

    // Adding the entire table to the body tag
    cartModalBody.appendChild(table);

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    thead.appendChild(row_1);

    for (var i = 0; i < cartStorage.length; i++) {
     
      cartArray = cartStorage.getItem(cartStorage.key(i));
      cartArray = JSON.parse(cartArray);

      const cartId = cartArray[0];
      const cartDate = cartArray[1];
      const cartProd = cartArray[2];
      const cartPrice = cartArray[3];
      const cartQty = cartArray[4];
      const carttotal = cartArray[5];
      totalGeneral = totalGeneral + carttotal
      //Create table Body
      let row_2 = document.createElement("tr");
      let row_2_data_1 = document.createElement("td");
      let row_2_data_2 = document.createElement("td");
      let row_2_data_3 = document.createElement("td");
      let row_2_data_4 = document.createElement("td");

      row_2_data_1.innerHTML = cartProd;
      row_2_data_2.innerHTML = cartPrice;
      row_2_data_3.innerHTML = cartQty;
      row_2_data_4.innerHTML = carttotal;

      row_2.appendChild(row_2_data_1);
      row_2.appendChild(row_2_data_2);
      row_2.appendChild(row_2_data_3);
      row_2.appendChild(row_2_data_4);

      tbody.appendChild(row_2);
      
      carModalHeader.innerHTML = "Votre Commande "
      carModalHeader.setAttribute("class", "cartheader");

      carModalFooter.setAttribute("class", "cartFooter");
      carModalFooter.innerHTML = "Total de votre commande : " + totalGeneral;
    }
  }
});
