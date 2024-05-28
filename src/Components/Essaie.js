function Essaie(){
    return(
      <div className='container mt-5 paanier'>
  
        <h1 className="text-center">Mon Panier </h1>
  
        <div className='Paiment mb-3 p-2'>
          <h5>Delivery ( Now) </h5>
          <button className='btn show'>Change</button>
        </div>
  
        <div className='boody mt-5'>
          <p>
            You don't have any orders here
          </p>
          <p className=" text-center">
            Let's Change that
          </p>
        </div>
  
        <div className=' '>
  
        <button  className=" rounded-pill Theck fs-4 ps-4">
            Checkout
        </button>
        </div>
        
      </div>
    )
  }
  export default Essaie;