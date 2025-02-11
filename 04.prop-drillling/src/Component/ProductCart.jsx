function ProductCart({ product }) {
  return (
    <>
      <div className="col-3 ">
        <img src={product.image} alt="" className="card-img-top " />
        <div className="card-body">
          <h3>{product.title}</h3>
          <p>Price : ${product.price}</p>
          <p>{product.description}</p>
        </div>

      </div>
    </>
  )
}

export default ProductCart;