import ProductCard from "./ProductCart";

function ProductList({ product }) {
  return (
    <>
      <h1 className="display-1 text-center">Product List</h1>
      <div className="row row-gap-4">
        {product.map((p, i) => (
          <ProductCard key={i} pro={p} />
        ))}
      </div>
    </>
  )
}
export default ProductList;