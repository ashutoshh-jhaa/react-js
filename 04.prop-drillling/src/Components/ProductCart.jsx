function ProductCard({ pro }) {
  function truncateDescription(desc) {
    const words = desc.split(" ");
    if (words.length > 20) {
      return words.splice(0, 20).join(" ") + "..."
    }
    return words;
  }
  function addToCart(pro) {
    alert("added to cart");
  }
  return (
    <div className="col-md-4 col-lg-3">
      <div className="card h-100 border-2 border-black">
        <img src={pro.image} alt={pro.title} className="card-img-top" style={{ height: "300px", objectFit: "contain" }} />
        <div className="card-body">
          <h5 className="card-title">{pro.title}</h5>
          <p className="card-text">{truncateDescription(pro.description)}</p>
          <button className="btn btn-secondary" onClick={() => addToCart(pro)}>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;