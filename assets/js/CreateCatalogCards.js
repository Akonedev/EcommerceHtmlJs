document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();

  let DivRow = document.createElement("div");

  // let DivContainer = document.createElement("div");

  let DivContainer = document.querySelector(".catalogContainer");
  let DivSection = document.querySelector(".catalogSection");
  nbcard = 4;

  createCatalogCard();

  function createCatalogCard() {
    for (let index = 1; index <= nbcard; index++) {
      createCatalogCardEl();
    }
    //Add to Container
    DivContainer.appendChild(DivRow);
    DivContainer.setAttribute("class", "d-flex justify-content-center row");

    //Add to Section
    DivSection.appendChild(DivContainer);
    DivSection.setAttribute("class", "container catalogContainer");
  }

  function createCatalogCardEl() {
    // Creating and adding data to second row of the table
    let Div = document.createElement("div");
    let Div_Div2 = document.createElement("div");
    let Div_Div2_img = document.createElement("img");
    let Div_Div2_Div3 = document.createElement("div");
    let Div_Div2_Div3_h3 = document.createElement("h2");
    let Div_Div2_Div3_a = document.createElement("a");

    createCatalogCard();

    function createCatalogCard() {
      for (let index = 1; index <= nbcard; index++) {
        createCatalogCardEl();
      }
      DivContainer.appendChild(DivRow);
      DivContainer.setAttribute("class", "d-flex justify-content-center row");

      //Add to Section
      DivSection.appendChild(DivContainer);
      DivSection.setAttribute("class", "container bestSellContainer");
    }

    function createCatalogCardEl() {
      //Div 3
      Div_Div2_Div3.appendChild(Div_Div2_Div3_a);
      Div_Div2_Div3_a.setAttribute(
        "class",
        "lead fw-bold text-dark link-secondary small stretched-link text-decoration-none"
      );
      Div_Div2_Div3_a.setAttribute("data-bs-toggle", "modal");
      Div_Div2_Div3_a.setAttribute("data-bs-target", "#categoryModal");

      Div_Div2_Div3.appendChild(Div_Div2_Div3_h3);
      Div_a3_h3.setAttribute("class", "h3");

      Div_Div2.appendChild(Div_Div2_Div3);
      Div_Div2_Div3.setAttribute(
        "class",
        "bottom-0 end-0  pb-5 pe-4 position-absolute ps-4 start-0"
      );

      //Div 2
      Div_Div2.appendChild(Div_Div2_img);
      Div_Div2.setAttribute("class", "img-fluid w-100 catalogImg");
      Div_Div2.setAttribute("alt", "catalog image");

      Div.appendChild(Div_Div2);

      ///Div Row
      DivRow.appendChild(Div);
      // Div.setAttribute("class", "catalog col-6 col-lg-3 col-md-4 pb-3 pt-3");
      Div.setAttribute("class", "col-lg-4 col-md-6 py-3");
      DivRow.setAttribute("class", "align-items-center row");
    }
  }
});
