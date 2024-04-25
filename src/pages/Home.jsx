import Cart from './Cart'
import Img1 from "../../public/1.webp"
import Img2 from "../../public/2.webp"
import { useEffect } from "react";
import { useState } from "react"

function Home() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    setLoading(true);
    fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
    .then(res => res.json())
    .then(data => {setFeatured(data.data)})
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false)
    });
  },[])
  return (
    <div className="w-4/5 mx-auto">

<div className="w-5/7 mx-auto py-2 flex">
        <div className="w-4/5 mx-auto mt-[80px] ">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl text-dracula">We are changing the way people shop</h1>
          <p className="mt-8 max-w-xl text-lg leading-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Tempore repellat explicabo enim soluta temporibus
            asperiores aut obcaecati perferendis porro nobis.</p>
          <button className="mt-[40px] btn btn-primary hover:btn-primary">Our Products</button>
        </div>
        <div className="w-3/5 mt-[40px] carousel carousel-center max-w-md p-4 space-x-4 bg-[#070F2B] rounded-box">
          <div className="carousel-item">
            <img src={Img1} className="rounded-box h-full w-80 object-cover" />
          </div>
          <div className="carousel-item">
            <img src={Img2} className="rounded-box h-full w-80 object-cover" />
          </div>
        </div>
      </div>

      <div className='mt-24 mb-40'>
        <h1 className="text-3xl border-b-2 border-dracula-500 pb-5 mb-5 text-dracula font-medium tracking-wider capitalize">Featured Products</h1>
        <div className="flex justify-between mt-4 gap-4 mb-10">
          {
            loading && <span className="loading loading-ring loading-lg block mx-auto mt-40"></span>
          }
          {
          !loading && featured.length > 0 && featured.map((el, index) => {
            return(<Cart key={index} data = {el} />)
          })
          }
        </div>
      </div>
    </div>
  )
}

export default Home