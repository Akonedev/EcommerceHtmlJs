document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();

  const catLaptop = document.getElementById("laptop");
  const catEarPhone = document.getElementById("earphone");
  const catGaming = document.getElementById("gaming");

  const catalogModal = document.getElementById("categoryModal");
  const catalogModalLabel = document.getElementById("categoryModalLabel");
  const catModalBody = document.getElementById("categoryModalBody");
  const catModalFooter = document.getElementById("categoryModalFooter");
  // const bestSellOrderBtn = document.getElementById("bestSellOrder");

  const bestSellOrderBtn = document.querySelectorAll("button.bestSellOrder");

  
  const orderIdCounter = 123456;
  let category = "";
  let ShopCart = localStorage;

  bestSellOrderBtn.forEach(function() {
    bestSellOrderBtn.onclick = function () {
        OrderBesSell();
      };
  });

  // bestSellOrderBtn.onclick = function () {
  //   OrderBesSell();
  // };

  function OrderBesSell() {
      let tempOrderIdCounter = orderIdCounter + 1;
    let orderDate = Date.now();
    let orderQty = 1;
    let orderProdNameTemp = document.getElementById("bestSellLabel");
    let orderProdName= orderProdNameTemp.textContent
    let orderProdPriceTemp = document.getElementById("bestSellPrice");
    let orderProdPrice=orderProdPriceTemp.textContent
    let total = orderProdPrice * orderQty;

    alert("bestSellLabel = " + orderProdName + "    bestSellPrice = " + orderProdPrice)
    const oId = "abdk";

    let orderId = oId + tempOrderIdCounter;
    console.log("prderId = " + orderId);

    let orderArray = [
      orderId,
      orderDate,
      orderProdName,
      orderProdPrice,
      orderQty,
      total,
    ];

    localStorage.setItem(orderId, JSON.stringify(orderArray));
    tempOrderIdCounter = tempOrderIdCounter + 1;
  }

  async function populate() {
    const requestURL = "./assets/json/ProductList.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const productText = await response.text();

    const products = JSON.parse(productText);

    catEarPhone.onclick = function () {
      catModalBody.innerHTML = "";
      cartTotalGeneral.innerHTML = "";
      category = "earphone";
      catalogModalLabel.innerHTML = "Catalog  -  " + category.toUpperCase();
      populateProducts(products, category);
    };

    catLaptop.onclick = function () {
      catModalBody.innerHTML = "";
      cartTotalGeneral.innerHTML = "";
      category = "laptop";
      catalogModalLabel.innerHTML = "Catalog  -  " + category.toUpperCase();
      populateProducts(products, category);
    };

    catGaming.onclick = function () {
      catModalBody.innerHTML = "";
      cartTotalGeneral.innerHTML = "";
      category = "gaming";
      catalogModalLabel.innerHTML = "Catalog  -  " + category.toUpperCase();
      populateProducts(products, category);
    };
  }

  function populateProducts(obj, category) {
    cartTotalGeneral.innerHTML = "";

    const productList = obj["products"];
    let popCategory = category;

    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    table.appendChild(thead);
    table.appendChild(tbody);

    // Creating and adding data to first row of the table
    let row_1 = document.createElement("tr");

    let heading_1 = document.createElement("th");
    heading_1.innerHTML = "Image";

    let heading_2 = document.createElement("th");
    heading_2.innerHTML = "Produits";

    let heading_3 = document.createElement("th");
    heading_3.innerHTML = "Descriptions";

    let heading_4 = document.createElement("th");
    heading_4.innerHTML = "Prix";

    let heading_5 = document.createElement("th");
    heading_5.innerHTML = "Disponibilite";

    let heading_6 = document.createElement("th");
    heading_6.innerHTML = "Quantite a commander";

    let heading_7 = document.createElement("th");
    heading_7.innerHTML = "Commander";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_6);
    row_1.appendChild(heading_7);
    thead.appendChild(row_1);

    // Adding the entire table to the body tag
    catModalBody.appendChild(table);

    for (const product of productList) {
      if (product.Categorie == popCategory) {
        // Creating and adding data to second row of the table
        let row_2 = document.createElement("tr");

        let row_2_data_1 = document.createElement("td");
        let row_2_data_2 = document.createElement("td");
        let row_2_data_3 = document.createElement("td");
        let row_2_data_4 = document.createElement("td");
        let row_2_data_5 = document.createElement("td");
        let row_2_data_6 = document.createElement("td");
        let row_2_data_7 = document.createElement("td");

        let img = document.createElement("img");
        img.src = "./assets/img/phones2.png";
        img.setAttribute("class", "cartImgSize");

        row_2_data_2.textContent = `${product.prodName}`;
        row_2_data_3.textContent = `${product.prodDesc}`;
        row_2_data_4.textContent = `${product.prodPrice}`;
        row_2_data_5.textContent = `${product.status}`;

        let qty = document.createElement("input");

        // qty.defaultValue="1";
        // qty.setAttribute("defaultValue", 1);
        qty.setAttribute("id", "prodQty");
        qty.setAttribute("type", "number");
        qty.setAttribute("value", "default");
        row_2_data_6.appendChild(qty);

        let btn = document.createElement("button");
        btn.innerHTML = "Commander";
        row_2_data_7.appendChild(btn);

        let tempOrderIdCounter = orderIdCounter + 1;

        btn.onclick = function () {
          // qty.defaultValue=1;
          Order();
        };

        function Order() {
          // qty.defaultValue=1;
          ShopCart = localStorage;
          let orderDate = Date.now();
          let orderQty = qty.value;
          let orderProdName = product.prodName;
          let orderProdPrice = product.prodPrice;
          let total = product.prodPrice * orderQty;
          const oId = "abdk";

          let orderId = oId + tempOrderIdCounter;
          console.log("prderId = " + orderId);

          let orderArray = [
            orderId,
            orderDate,
            orderProdName,
            orderProdPrice,
            orderQty,
            total,
          ];

          localStorage.setItem(orderId, JSON.stringify(orderArray));
          tempOrderIdCounter = tempOrderIdCounter + 1;
          alert("Votre commande est validée");
        }

        row_2_data_1.appendChild(img);
        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        row_2.appendChild(row_2_data_4);
        row_2.appendChild(row_2_data_5);
        row_2.appendChild(row_2_data_6);
        row_2.appendChild(row_2_data_7);
        tbody.appendChild(row_2);
      }
    }
  
  }
  populate();
});
