import Img1 from '../../public/1.webp'
import Img2 from '../../public/2.webp'
import Img3 from '../../public/3.webp'
import Img4 from '../../public/4.jpeg'
import Img5 from '../../public/5.jpeg'

function Home() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="w-5/7 mx-auto py-2 flex">
        <div className="w-4/5 mx-auto mt-[80px] ">
          <h1 class="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl text-slate-700">We are changing the way people shop</h1>
          <p className="mt-8 max-w-xl text-lg leading-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Tempore repellat explicabo enim soluta temporibus
            asperiores aut obcaecati perferendis porro nobis.</p>
          <button className="mt-[40px] btn bg-[#3498db] text-white hover:bg-[#6dc5ff]">Our Products</button>
        </div>
        <div className="w-3/5 mt-[40px] carousel carousel-center max-w-md p-4 space-x-4 bg-[#070F2B] rounded-box">
          <div className="carousel-item">
            <img src={Img1} class="rounded-box h-full w-80 object-cover" />
          </div>
          <div className="carousel-item">
            <img src={Img2} class="rounded-box h-full w-80 object-cover" />
          </div>
        </div>
      </div>

      <div className='mt-24 mb-40'>
        <h1 class="text-3xl border-b-2 pb-5 mb-5 text-slate-700 font-medium tracking-wider capitalize">Featured Products</h1>
        <div className='flex gap-5'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img src={Img3} alt="" className="rounded-xl w-[300px] h-[250px] " />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Avant-Garde Lamp</h2>
              <p>
                $179.99</p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img src={Img4} alt="" className="rounded-xl w-[300px] h-[250px] " />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Coffee Table</h2>
              <p>
              $179.99</p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
              <img src={Img5} alt="" className="rounded-xl w-[300px] h-[250px] " />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Comfy Bed</h2>
              <p>
              $129.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home