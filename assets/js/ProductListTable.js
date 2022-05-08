document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  const createTableFromJs = document.getElementById("CreateTableFromJSON");
  const catPhone = document.getElementById("phones");
  const catTv = document.getElementById("tv");
  const catAccessories = document.getElementById("accessories");
  const catEarPhone = document.getElementById("earphone");
  const catLaptop = document.getElementById("laptop");
  const orderCounter = 123456;

  // catPhone.onclick= function () {
  //   const key = "Phone";
  //   const value= "86094";
  //   const result = data.filter(d=>d[key]==value);
  // }

  // catTv.onclick= function () {}


  // catAccessories.onclick= function () {}

  // catEarPhone.onclick= function () {}

  // catLaptop.onclick= function () {}

  //createTableFromJs.onclick = function () {}



    async function populate() {
      const requestURL = "./assets/json/ProductList.json";
      const request = new Request(requestURL);

      const response = await fetch(request);
      const productText = await response.text();

      const products = JSON.parse(productText);
  
      populateProducts(products);
    }

    function populateProducts(obj) {
      const section = document.querySelector("sectionProducts");
      const productList = obj["products"];

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
      document.getElementById("sectionProducts").appendChild(table);

      for (const product of productList) {
        // Creating and adding data to second row of the table
        let row_2 = document.createElement("tr");

        let row_2_data_1 = document.createElement("td");
        let row_2_data_2 = document.createElement("td");
        let row_2_data_3 = document.createElement("td");
        let row_2_data_4 = document.createElement("td");
        let row_2_data_5 = document.createElement("td");
        let row_2_data_6 = document.createElement("td");
        let row_2_data_7 = document.createElement("td");

        let img = document.createElement('img');
        img.src = "./assets/img/phones2.png"; 
        img.setAttribute("class", "cartImgSize");

        row_2_data_2.textContent = `${product.prodName}`;
        row_2_data_3.textContent = `${product.prodDesc}`;
        row_2_data_4.textContent = `${product.prodPrice}`;
        row_2_data_5.textContent = `${product.status}`;

        let qty = document.createElement("input");
        qty.setAttribute("id", "prodQty")
        qty.setAttribute("type", "number");
        qty.setAttribute("value", "default");
        row_2_data_6.appendChild(qty);

        let btn = document.createElement("button");
        btn.innerHTML = "Commander";
        row_2_data_7.appendChild(btn);

        let tempOrderIdCounter = orderCounter + 1;

        btn.onclick = function () {
          let ShopCart = localStorage;
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

        };

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

    populate();
});
