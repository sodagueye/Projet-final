import { useContext, useEffect } from "react";
import { Context } from "../Components";
import { MdOutlineDelete } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Panier = () => {
  const { cartItems, setCartItems, setCartQuantity} = useContext(Context);

  const totalPrix = cartItems.reduce((total, item) => {
    return total + (item.price || 0);
  }, 0);

  const handleDelete = (id) => {
    const newCartItems = cartItems.filter((item) => item._id !== id);
    setCartItems(newCartItems);
    toast.success("Le produit a été retiré du panier")
    setCartQuantity(newCartItems.length)
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, [setCartItems]);

  return (
    <div className="container-fluid test">
      <div className="row">
        <div className="col-lg-9 bg-body shadow rounded">
          {cartItems.length > 0 ? (
            <div>
              <h3 className="text-start">Panier ({cartItems.length})</h3>
              <hr />
              {cartItems.map((item) => (
                <div key={item.id}>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex justify-content-center align-items-center">
                      <div>
                        <img className="product-img" src={item.image} alt="" />
                        <div>
                          <span
                            onClick={() => handleDelete(item._id)}
                            className="fs-3 cart"
                          >
                            <MdOutlineDelete />
                          </span>
                          <span className="delete fw-bold fs-6">SUPPRIMER</span>
                        </div>
                      </div>

                      <p>{item.description}</p>
                    </div>
                    <p className="fw-bold">{item.price} FCFA</p>
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
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title text-uppercase text-start">
                Résumé du panier
              </h5>
              <hr />
              <div className="d-flex align-items-center justify-content-between">
                <h6 className="text-start">Total : </h6>
                <h6>{totalPrix} FCFA</h6>
              </div>
              <button className="btn w-100 btn-commande text-white shadow">
                Commander ({totalPrix} FCFA)
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Panier;
