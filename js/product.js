"use strict"

productPage = "producto.html";
let varChoose
let varPrice
const cardContainer = document.querySelector('#productCardContainer');
const choose = JSON.parse(localStorage.getItem("Libro_buscado"));




function drawCard() {
  let index = articulos.findIndex(element => element.titulo.name == choose)
  let theOne = articulos[index]

  if (theOne.titulo.name == choose) {

    varChoose = theOne.titulo;
    varPrice = theOne.precio;

    let div = document.createElement("div");
    div.classList.add("gx-5");
    div.classList.add("border");
    div.classList.add("rounded-4");
    div.innerHTML = `<div class="row gx-5">
    <aside id="productImages" class="col-lg-6">
      <div class="rounded-4  d-flex justify-content-center">
          <img style=" height: 630px; margin: auto;" class="rounded-4 fit mx-auto d-block" src=".${varChoose.image}"  />
      </div>
    </aside>
    <div id="productInformation" class="col-lg-6 border-start">
      <div class="ps-lg-3">
        <h4 class="title text-dark">
          ${varChoose.serie} <br />
          ${varChoose.name}
        </h4>
        <div class="d-flex flex-row my-3">
          <div class="text-warning mb-1 me-2">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <span class="ms-1">
              4.5
            </span>
          </div>
          <span class="text-muted"><i class="fas fa-shopping-basket fa-sm mx-1"></i>0 orders</span>
          <span class="text-success ms-2">In stock</span>
        </div>

        <div class="mb-3">
          <span class="h5">COP$${varPrice}</span>
          <span class="text-muted">/per unit</span>
        </div>

        <p>
          Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
          men.
        </p>

        <div class="row">
          <dt class="col-3">Type:</dt>
          <dd class="col-9">${varChoose.type.capitalize()}</dd>

          <dt class="col-3">Serie</dt>
          <dd class="col-9">${varChoose.serie}</dd>

          <dt class="col-3">Autor</dt>
          <dd class="col-9">${varChoose.author}</dd>

          <dt class="col-3">vol</dt>
          <dd class="col-9">${varChoose.vol}</dd>
        </div>

        <hr />

        <div class="row mb-4">
          <div class="col-md-4 col-6">
            <label class="mb-2">Formato</label>
            <select class="form-select border border-secondary" style="height: 35px;">
              <option>Audio</option>
              <option>Ebook</option>
              <option>Libro físico</option>
            </select>
          </div>
          <div class="col-md-4 col-6 mb-3">
            <label class="mb-2 d-block">Quantity</label>
            <div class="input-group mb-3" style="width: 170px;">
              <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                <i class="fas fa-minus"></i>
              </button>
              <input type="text" class="form-control text-center border border-secondary" placeholder="0" aria-label="Example text with button addon" aria-describedby="button-addon1" />
              <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <a href="#" class="btn btn-warning shadow-0"> Buy now </a>
        <a href="#" class="btn btn-primary shadow-0"> <i class="me-1 fa fa-shopping-basket"></i> Add to cart </a>
        <a href="#" class="btn btn-light border border-secondary py-2 icon-hover px-3"> <i class="me-1 fa fa-heart fa-lg"></i> Save </a>
      </div>
    </div>
  </div>

    `
    cardContainer.appendChild(div)

  }
}
drawCard()