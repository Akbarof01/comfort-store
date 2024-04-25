
function Products() {
  return (
    <div>
      <div className="form">
        <div className="inp">
          <label htmlFor="">Search Product</label>
          <input type="search" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="chek"></div>
      </div>
      <div className="cart-poduct"></div>
    </div>
  )
}

export default Products