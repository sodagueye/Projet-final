import banniere2 from "../Footer-img/banniere2.jpg";
import banner3 from "../Footer-img/banner3.jpg";
import banniere4 from "../Footer-img/banniere4.jpg";

<<<<<<< HEAD
export function Carroussel(){
    return <div className="container py-4 mt-5" style={{marginTop:"150px"}}>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src={banniere2} class="d-block w-100" alt="..." style={{height:350}}/>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src={banner3} class="d-block w-100" alt="..." style={{height:350}}/>
                </div>
                <div class="carousel-item">
                    <img src={banniere4} class="d-block w-100" alt="..." style={{height:350}}/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
=======
export function Carroussel() {
  return (
    <div className="container-fluid p-0">
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src={banniere2}
              class="d-block w-100"
              alt="..."
              style={{ height: 350, objectFit: "cover" }}
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src={banner3}
              class="d-block w-100"
              alt="..."
              style={{ height: 350, objectFit: "cover" }}
            />
          </div>
          <div class="carousel-item">
            <img
              src={banniere4}
              class="d-block w-100"
              alt="..."
              style={{ height: 350, objectFit: "cover" }}
            />
          </div>
>>>>>>> 274b1ed1e7c6f59d954e1455fc15beb29cee896b
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
