document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();

  let DivRow = document.createElement("div");

  let DivContainer = document.createElement("div");

  let DivSection = document.querySelector(".bestSellContainer");
  nbcard = 4;

  createCard();

  function createCard() {
    for (let index = 1; index <= nbcard; index++) {
      createCardEl();
    }
    //Add to Container
  DivContainer.appendChild(DivRow);
  DivContainer.setAttribute("class", "d-flex justify-content-center row");

  //Add to Section
  DivSection.appendChild(DivContainer);
  DivSection.setAttribute("class", "container bestSellContainer");
  }

  function createCardEl() {
    // Creating and adding data to second row of the table
    let Div = document.createElement("div");

    let Div_a1 = document.createElement("a");
    let Div_a1_img = document.createElement("img");

    let Div_a2 = document.createElement("a");

    let Div_a3 = document.createElement("a");
    let Div_a3_h3 = document.createElement("h3");

    let Div_Div2 = document.createElement("div");
    let Div_Div2_span = document.createElement("span");
    let Div_Div2_Divbtn = document.createElement("div");
    let Div_Div2_btn = document.createElement("button");

    //a1 to Parent
    Div_a1.appendChild(Div_a1_img);
    Div_a1_img.setAttribute(
      "class",
      "bestSellImg img-fluid w-100 productImage"
    );

    Div.appendChild(Div_a1);
    Div_a1.setAttribute("class", "d-block mb-3");

    //a2 to Parent
    Div.appendChild(Div_a2);
    Div_a2.setAttribute(
      "class",
      "bestSellBrand d-inline-block link-secondary mb-2 small text-decoration-none"
    );

    //a3 to Parent
    Div_a3.appendChild(Div_a3_h3);
    Div_a3_h3.setAttribute("class", "h6");

    Div.appendChild(Div_a3);
    Div_a3.setAttribute("class", "bestSellProd link-dark text-decoration-none");

    //Div2 to Parent
    Div_Div2.appendChild(Div_Div2_span);

    Div_Div2.setAttribute(
      "class",
      "bestSellPrice me-2 justify-content-center text-center"
    );
    Div_Div2_span.setAttribute("class", "bestSellPrice me-2");

    //Order Button and div
    Div_Div2_btn.setAttribute("type", "button");
    Div_Div2_btn.setAttribute(
      "class",
      "bestSellOrder order btn btn-success btnclass"
    );
    Div_Div2_Divbtn.appendChild(Div_Div2_btn);
    Div_Div2.appendChild(Div_Div2_Divbtn);
    Div_Div2_Divbtn.setAttribute("class", "justify-content-center text-center");

    Div.appendChild(Div_Div2);

    ///Div Row
    DivRow.appendChild(Div);
    Div.setAttribute("class", "bestSell col-6 col-lg-3 col-md-4 pb-3 pt-3");
    DivRow.setAttribute("class", "align-items-center row");
  
}
 
});
