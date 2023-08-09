import React from 'react'

const ProductList =()=> (
    <div className="container mb-5">
    <div id="products" className="row">
        <div className="col-xl-3 col-lg-4 col-md-6 position-relative">
          

            <div className="card product-item">
              <i className="bi bi-heart-fill position-absolute liked"></i>
              <i className="bi bi-heart position-absolute like"></i>
              <img src="images/product-1-square.jpg" onClick="goToProductDetails()" className="card-img-top" alt="..." data-bs-toggle="tooltip" data-bs-placement="top" title="Click to See Product Details"/>
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted  fw-light">Headphones</h6>
                <h5 className="card-title">Sony WX-5</h5>
                <p className="card-text price"> $100.75 <span className="float-end rating-stars" >
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                </span> </p>
                <div className="text-center">
                  <a className="btn btn-dark w-100" onClick="showToast()" role="button" > Add To Cart</a>
                </div>
              </div>
            </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 position-relative">
          
          <div className="card product-item" >
            <i className="bi bi-heart-fill position-absolute liked"></i>
          <i className="bi bi-heart position-absolute like"></i>
            <img src="images/product-2-square.jpg" onClick="goToProductDetails()" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted  fw-light ">SmartWatch</h6>
              <h5 className="card-title">Apple Watch 2</h5>
              <p className="card-text price"> $500.75 <span className="float-end rating-stars" >
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
              </span> </p>
              <div className="text-center">
                  <a className="btn btn-dark w-100" onClick="showToast()" role="button"> Add To Cart</a>
                </div>
            </div>
          </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 position-relative">
        
          <div className="card product-item">
            <i className="bi bi-heart-fill position-absolute liked"></i>
             <i className="bi bi-heart position-absolute like"></i>
            <img src="images/product-4-square.jpg" onClick="goToProductDetails()" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted  fw-light ">Camera</h6>
              <h5 className="card-title">Canon WM-5</h5>
              <p className="card-text price"> $300.75 <span className="float-end rating-stars" >
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
              </span> </p>
              <div className="text-center">
                  <a className="btn btn-dark w-100" onClick="showToast()" role="button"> Add To Cart</a>
                </div>
            </div>
          </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 position-relative">
        
          <div className="card product-item">
            <i className="bi bi-heart-fill position-absolute liked"></i>
             <i className="bi bi-heart position-absolute like"></i>
            <img src="images/product-3-square.jpg" onClick="goToProductDetails()" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted  fw-light ">Mobile</h6>
              <h5 className="card-title">Apple IPhone 11</h5>
              <p className="card-text price"> $799.75 <span className="float-end rating-stars" >
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
              </span> </p>
              <div className="text-center">
                  <a className="btn btn-dark w-100" onClick="showToast()" role="button"> Add To Cart</a>
                </div>
            </div>
          </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6 position-relative">

          <div className="card product-item">
            <i className="bi bi-heart-fill position-absolute liked"></i>
            <i className="bi bi-heart position-absolute like"></i>
            <img src="images/product-5-square.jpg"  onClick="goToProductDetails()" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted  fw-light ">Tablet</h6>
              <h5 className="card-title">iPad Pro</h5>
              <p className="card-text price"> $999.75 <span className="float-end rating-stars" >
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
              </span> </p>
              <div className="text-center">
                  <a className="btn btn-dark w-100" onClick="showToast()" role="button"> Add To Cart</a>
                </div>
            </div>
          </div>
      </div>

      <div className="col-xl-3 col-lg-4 col-md-6 position-relative">

          <div className="card product-item">
            <i className="bi bi-heart-fill position-absolute liked"></i>
            <i className="bi bi-heart position-absolute like"></i>
            <img src="images/product-6-square.jpg" onClick="goToProductDetails()" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted  fw-light ">Drones</h6>
              <h5 className="card-title">XT-5</h5>
              <p className="card-text price"> $1100.75 <span className="float-end rating-stars" >
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
              </span> </p>
              <div className="text-center">
                  <a className="btn btn-dark w-100" onClick="showToast()" role="button"> Add To Cart</a>
                </div>
            </div>
          </div>
      </div>
       
      
    </div>
</div>
)

export default ProductList;
