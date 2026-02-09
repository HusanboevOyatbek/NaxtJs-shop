import Button from "./ui/Button"
import Style1 from "./assets/styleP1.png"
import Style2 from "./assets/styleP2.png"
import Style3 from "./assets/styleP3.png"
import Style4 from "./assets/style4.png"
import Reating from "./assets/reating.png"
import Galichka from "./assets/galichka.png"
import topshop from "./assets/topShop.png"
import Image from "next/image";
import { Bebas_Neue, Crimson_Text, Jaro, Noto_Sans_Inscriptional_Pahlavi, Noto_Sans_Psalter_Pahlavi, Oswald, Playfair_Display_SC, Playwrite_AU_NSW, Playwrite_AU_VIC_Guides, Playwrite_NZ, Playwrite_NZ_Guides, Playwrite_VN } from "next/font/google"
import HomeCart from "./components/home-carts/HomeCart"






////////////////////////////////////////////////////////////////////////////////////////////





const zealand = Oswald({
  weight: "700",
  subsets: ["latin"]

})


const GUCCI = Playwrite_NZ({
  weight: "400",

})


const Prada = Noto_Sans_Inscriptional_Pahlavi({
  weight: "400",

})

const Calvi = Crimson_Text({
  weight: "400",

})


const Zara = Jaro({
  weight: "400",
  subsets: ["latin"]

})

const versachi = Playfair_Display_SC({
  weight: "400",
  subsets: ["latin"]

})


const News = Bebas_Neue({
  weight: "400",
  subsets: ["latin"]

})

type productType = {
  "id": number
  "title": string,
  "price": number,
  "description": string,
  "category": string,
  "image": string,
  "rating": {
    "rate": number,
    "count": number
  }
}


/////////////////////////////////////////////
const HomePage =  async() => {

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products" , {
      next:{
        revalidate: 3600
      }
    });
    const data = await res.json();

    return data

  };

  const res = await getData()

const categoryData:string[] = res?.map((el:productType) => {
  return el.category
});

const categories:string[] = [... new Set(categoryData)]

console.log(categories);


console.log(categoryData);






  return (
    <>
      <section>
        <div
          className="bg-[#f3f0f1] "
        >
          <div
            className="
    container 
    mx-auto 
    px-5 
    py-[80px] 
    lg:py-[120px] 
    grid 
    grid-cols-1 
    lg:grid-cols-2 
    items-center 
    gap-12 
    lg:gap-20
  "
          >

            {/* LEFT */}
            <div>

              {/* TEXT BLOCK */}
              <div className="max-w-[600px] space-y-5 lg:space-y-6">
                <h1
                  className={`
    ${zealand.className}
    text-[36px]
    sm:text-[44px]
    lg:text-[64px]
    leading-[1.1]
    font-extrabold
    text-black
  `}
                >
                  FIND CLOTHES <br />
                  THAT MATCHES <br />
                  YOUR STYLE
                </h1>

                <p
                  className="
          text-black/60
          text-[14px]
          sm:text-[15px]
          lg:text-[16px]
          leading-relaxed
        "
                >
                  Browse through our diverse range of meticulously crafted garments,
                  designed to bring out your individuality and cater to your sense of style.
                </p>

                <Button>Shop Now</Button>
              </div>

              {/* STATS */}
              <ul
                className="
        mt-10
        lg:mt-16
        grid
        grid-cols-2
        sm:grid-cols-3
        max-w-[650px]
        gap-6
      "
              >
                <li className="sm:pr-6 sm:border-r border-gray-300">
                  <h2 className="text-[32px] lg:text-[40px] font-extrabold text-black">
                    200+
                  </h2>
                  <p className="text-gray-500 text-sm">
                    International Brands
                  </p>
                </li>

                <li className="sm:px-6 sm:border-r border-gray-300">
                  <h2 className="text-[32px] lg:text-[40px] font-extrabold text-black">
                    2,000+
                  </h2>
                  <p className="text-gray-500 text-sm">
                    High-Quality Products
                  </p>
                </li>

                <li className=" text-center justify-center ">
                  <div className="">
                    <h2 className="text-[32px] lg:text-[40px] font-extrabold text-black">
                      30,000+
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Happy Customers
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src={topshop}
                alt=""
                className="w-full max-w-[480px] lg:max-w-[600px]"
              />
            </div>

          </div>

        </div>


      </section>



      <section>
        <div className="conatainer mx-auto">
          <div className=" bg-black py-6 flex flex-wrap justify-center md:justify-around items-center gap-3 md:gap-0">
            <div className={`${versachi.className} text-white font-bold text-lg md:text-3xl uppercase`}>VERSACE</div>
            <div className={`${Zara.className} text-white text-lg md:text-3xl uppercase`}>ZARA</div>
            <div className={`${GUCCI.className} text-white text-lg md:text-3xl uppercase`}>GUCCI</div>
            <div className={`${Prada.className} text-white text-lg md:text-3xl uppercase`}>PRADA</div>
            <div className={`${Calvi.className} text-white text-lg md:text-3xl uppercase`}>Calvin Klein</div>
          </div>
        </div>
      </section>


      <section className="py-20">
        <div className="conatainer mx-auto px-5">
         {
          categories?.map((el1 , i) =>{

          return (
            <div key={i} className="container mx-auto overflow-x-auto pb-4 md:overflow-x-visible md:pb-0">
              <h1 className={` ${News.className} mt-5  text-black font-bold text-3xl sm:text-4xl lg:text-6xl text-center `}>
               {
                el1
               }
              </h1>
              <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:justify-items-center mt-8 w-min md:w-full">
                {
                  res?.filter((item:productType) => item.category === el1)?.map((el: productType) => (
                    <HomeCart key={el.id} {...el} />
                  ))
                }

              </div>
            </div>
          )
          })
         }

          

          <div className=" mt-10 text-center">
            <button className="rounded-[62px] cursor-pointer border-1 p-[10px] w-[200px] font-bold">
              View All
            </button>
          </div>
        </div>
      </section>


      

      <section>
        <div className="container mx-auto px-5 bg-gray-100 rounded-3xl grid grid-cols-1 py-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 justify-center">
            <div className="relative w-full h-48 md:h-80 group overflow-hidden rounded-lg shadow-lg">
              {/* Rasm */}
              <Image src={Style1} alt="" className="w-full h-full object-cover" />

              {/* Hover yozuvi */}
              <span className={` ${Prada.className}  absolute text-[20px] md:text-[30px] left-4 top-10 -translate-y-1/2 font-bold -translate-x-full text-black  bg-opacity-70 px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}>
                Casual
              </span>
            </div>




            <div className="relative w-full h-48 md:h-80 group overflow-hidden rounded-lg shadow-lg">
              {/* Rasm */}
              <Image src={Style2} alt="" className="w-full h-full object-cover" />

              {/* Hover yozuvi */}
              <span className={` ${versachi.className}  absolute text-[20px] md:text-[30px] left-4 top-10 -translate-y-1/2 font-bold -translate-x-full text-black  bg-opacity-70 px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}>
                Formal
              </span>
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 justify-center mt-6 md:mt-[40px]">
            <div className="relative w-full h-48 md:h-80 group overflow-hidden rounded-lg shadow-lg">
              {/* Rasm */}
              <Image src={Style3} alt="" className="w-full h-full object-cover" />

              {/* Hover yozuvi */}
              <span className={` ${GUCCI.className}  absolute text-[20px] md:text-[30px] left-4 top-10 -translate-y-1/2 font-bold -translate-x-full text-black  bg-opacity-70 px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}>
                Party
              </span>
            </div>


            <div className="relative w-full h-48 md:h-80 group overflow-hidden rounded-lg shadow-lg">
              {/* Rasm */}
              <Image src={Style4} alt="" className="w-full h-full object-cover" />

              {/* Hover yozuvi */}
              <span className="absolute text-[20px] md:text-[30px] left-4 top-10 -translate-y-1/2 font-bold -translate-x-full text-black  bg-opacity-70 px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Gym
              </span>
            </div>
          </div>









        </div>
      </section>


      <section className="py-10">
        <div className="container mx-auto px-5">



          <div className="mundaraja grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[30px] items-center justify-center">
            <div className="cart max-w-sm bg-white rounded-2xl shadow-lg p-6 flex flex-col space-y-4 hover:shadow-xl transition-shadow duration-300">
              {/* Foydalanuvchi rasmi */}
              <Image
                src={Reating}
                alt="Sarah M."
                className=""
              />

              {/* Foydalanuvchi ismi va tekshirish icon */}
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-gray-800">Sarah M.</h1>
                <Image src={Galichka} alt="Verified" className="w-5 h-5" />
              </div>

              {/* Foydalanuvchi sharhi */}
              <p className="text-gray-600 text-sm leading-relaxed">
                Im blown away by the quality and style of the clothes I received from Shop.co.
                From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.”
              </p>
            </div>



            <div className="cart max-w-sm bg-white rounded-2xl shadow-lg p-6 flex flex-col space-y-4 hover:shadow-xl transition-shadow duration-300">
              {/* Foydalanuvchi rasmi */}
              <Image
                src={Reating}
                alt="Sarah M."
                className=""
              />

              {/* Foydalanuvchi ismi va tekshirish icon */}
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-gray-800">Sarah M.</h1>
                <Image src={Galichka} alt="Verified" className="w-5 h-5" />
              </div>

              {/* Foydalanuvchi sharhi */}
              <p className="text-gray-600 text-sm leading-relaxed">
                Im blown away by the quality and style of the clothes I received from Shop.co.
                From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.”
              </p>
            </div>






            <div className="cart max-w-sm bg-white rounded-2xl shadow-lg p-6 flex flex-col space-y-4 hover:shadow-xl transition-shadow duration-300">
              {/* Foydalanuvchi rasmi */}
              <Image
                src={Reating}
                alt="Sarah M."
                className=""
              />

              {/* Foydalanuvchi ismi va tekshirish icon */}
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-gray-800">Sarah M.</h1>
                <Image src={Galichka} alt="Verified" className="w-5 h-5" />
              </div>

              {/* Foydalanuvchi sharhi */}
              <p className="text-gray-600 text-sm leading-relaxed">
                Im blown away by the quality and style of the clothes I received from Shop.co.
                From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.”
              </p>
            </div>
          </div>






        </div>
      </section>
    </>

  )
}

export default HomePage