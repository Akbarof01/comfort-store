import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

function Details() {
  const [data, setData] = useState({});
  const [selectedColor, setSelectedColor] = useState('');
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    if (params.id) {
      setLoading(true)

      fetch(`https://strapi-store-server.onrender.com/api/products/${params.id}`)
        .then(res => res.json())
        .then(d => {
          if (!d.data) {
            navigate('/')
          }
          setData(d)
          selectedColor(d.data.attributes.colors[0])
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false)
        });
    } else {
      navigate('/')
    }
  }, [])
  return (
    <div className="w-4/5 mx-auto py-20">
      {
        loading && <span className="loading loading-ring loading-lg block mx-auto mt-40"></span>
      }
      {
        !loading && <>
          <div className="text-sm breadcrumbs mb-5">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Product</a></li>
            </ul>
          </div>

          <div className="detail flex gap-16">
            {
              data?.data?.id && <>
                <div className="card-img w-1/2">
                  <img class="w-[550px] h-96 object-cover rounded-lg" src={data.data.attributes.image} alt="" />
                </div>
                <div className="card-info w-1/2">
                  <h1 class="capitalize text-3xl font-bold">{data.data.attributes.title}</h1>
                  <h4 class="text-xl text-neutral-content font-bold mt-2">{data.data.attributes.company}</h4>
                  <p class="mt-3 text-xl">{data.data.attributes.price / 100}</p>
                  <p class="mt-6 leading-8">{data.data.attributes.description}</p>
                  <p class="mt-8 text-md font-medium tracking-wider capitalize">Colors</p>
                  <div className="form">
                    <div className="colors flex items-center gap-2 mt-2">
                      {data.data.attributes.colors.map((color, index) => {
                        return (
                          <span
                            style={{ backgroundColor: color, border: color == selectedColor ? "1.5px solid black" : "none" }}
                            key={index}
                            className={`w-6 h-6 rounded-full block cursor-pointer`}
                            onClick={() => { setSelectedColor(color) }}
                          ></span>
                        );
                      })}
                    </div>

                    <div className="flex flex-col mt-7 gap-3">
                      <label htmlFor="" className="text-md font-medium tracking-wider capitalize">Amout</label>
                      <select className="select select-primary w-full max-w-xs" id='select' value={count} onChange={(e) => { setCount(e.target.value) }}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>13</option>
                        <option value={13}>14</option>
                        <option value={14}>15</option>
                        <option value={16}>16</option>
                        <option value={17}>17</option>
                        <option value={18}>18</option>
                        <option value={19}>19</option>
                        <option value={20}>20</option>
                      </select>
                    </div>

                    <button className="mt-8 btn btn-primary">ADD TO BAG</button>

                  </div>
                </div></>
            }
          </div>
        </>
      }
    </div>
  )
}

export default Details