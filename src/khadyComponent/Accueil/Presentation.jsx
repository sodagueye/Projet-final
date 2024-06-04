import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
export function Presentation() {
  const [data, setData] = useState([]);
  const navigation = useNavigate()
  useEffect(() => {
    async function getAllProducts() {
      const response = await axios.get("http://localhost:4000/recup");
      const resultat = await response.data;
      console.log(resultat);
      setData(resultat);
    }
    getAllProducts();
  }, []);

  const details = async ()=>{
    // const test = await axios.post("http://localhost:4000/recup/:id")
    navigation("/details")
  }
  // useEffect(()=>{
  //   details()
  // },[])
  return (
    <div className="container py-3">
      <div className="row">
        {data.map((item) => (
          <div className="col-lg-3">
            <div class="card">
              <img src={item.description} className="card-img-top"  alt="..." />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button onClick={details}>Test</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
