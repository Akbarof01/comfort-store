import { useNavigate } from "react-router-dom";


function Cart(props) {
const {image, title, price} = props.data.attributes;
const {id} = props.data;
const navigate = useNavigate();
function handleRedurect() {
  navigate(`/product/${id}`)
}
  return (
    <div onClick={handleRedurect} className="w-3/5">
      <div className="card w-[350px] bg-base-100 shadow-xl">
        <figure className="px-5 pt-5">
          <img src={image} alt="Shoes" className="rounded-xl object-cover h-64 w-full " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title copitalize">{title}</h2>
          <p className="text-primary ">${price / 100}</p>
        </div>
      </div>
    </div>
  )
}

export default Cart;