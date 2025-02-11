import ProductCart from "./ProductCart";

function ProductList({ product }) {
  return (
    <>
      <h1 className="display-2 text-center">Product List</h1>
      <div className="row row-gap-3">
        {product.map((p) => (
          <ProductCart key={p.id} product={p} />
        ))}
      </div>
    </>
  )
}

export default ProductList;