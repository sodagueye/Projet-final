import { useContext } from "react";
import { Context } from "../Components";
import { MdOutlineDelete } from "react-icons/md";
const Panier = () => {
  const { cartItems } = useContext(Context);

  const totalPrix = cartItems.reduce((total, item) => {
    return total + (item.price || 0);
  }, 0);

  return (
    <div className="container-fluid test">
      <div className="row">
        <div className="col-lg-9 bg-body shadow rounded">
          {cartItems.length > 0 ? (
            <div>
              <h3 className="text-start">Panier ({cartItems.length})</h3>
              {cartItems.map((item, index) => (
                <div>
                  <div
                    className="d-flex align-items-center justify-content-between"
                    key={index}
                  >
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={item.image} alt="" />

                      {/* <h4>{item.name}</h4> */}
                      <p>{item.description}</p>
                    </div>

                    <p>{item.price} FCFA</p>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          ) : (
            <p>Votre panier est vide.</p>
          )}
        </div>
        <div className="col-lg-3">
          <div class="card shadow">
            <div class="card-body">
              <h5 class="card-title text-uppercase text-start">
                Résumé du panier
              </h5>
              <hr />
              <div className="d-flex align-items-center justify-content-between">
                <h6 className="text-start">Total : </h6>
                <h6>{totalPrix} FCFA</h6>
              </div>
              <button className="btn w-100 btn-commande text-white shadow">
                Commander ({totalPrix} FCFA){" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panier;
