import Cart from "./Cart"

function Products() {
  return (
    <div className="w-4/5 mx-auto mt-20">
      <div className="filter p-4 bg-primary-content rounded-lg gap-3">
        <div className="filter-top flex justify-between mb-5">

          <div className="field flex flex-col gap-1 w-1/4">
            <label htmlFor="search" className="cursor-pointerso">Search Product</label>
            <input type="search" className="input input-bordered w-full input-sm" id="search" />
          </div>

          <div className="field flex flex-col gap-1 w-1/4">
            <label htmlFor="search" className="cursor-pointerso">select category</label>
            <select className="select select-bordered w-full select-sm">
              <option disabled selected>Who shot first?</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>

          <div className="field flex flex-col gap-1 w-1/4">
            <label htmlFor="search" className="cursor-pointerso">select company</label>
            <select className="select select-bordered w-full select-sm">
              <option disabled selected>Who shot first?</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>

          <div className="field flex flex-col gap-1 w-1/4">
            <label htmlFor="search" className="cursor-pointerso">sort by</label>
            <select className="select select-bordered w-full select-sm">
              <option disabled selected>Who shot first?</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>
        <div className="filter-bottom flex justify-between gap-2 mt-8">
          <div className="range=block">
            <input type="range" min={0} max="1000000" value="40" className="range range-primary" />
          </div>
          <div className="shiping">

            <label className="label-text">Free Shiping</label>
            <br />
            <input type="checkbox" defaultChecked className="ml-5 checkbox checkbox-primary" />

          </div>
          <div className="search w-56">
          <button className="btn btn-primary btn-sm w-full">Search</button>
          </div>
          <div className="reset w-56">
          <button className="btn btn-secondary btn-sm w-full">Reset</button>
          </div>
        </div>
      </div>
      <div className="product">
      
      </div>
    </div>
  )
}

export default Products