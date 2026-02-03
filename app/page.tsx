import Button from "./ui/Button"
import Style1 from "./assets/styleP1.png"
import Style2 from "./assets/styleP2.png"
import Style3 from "./assets/styleP3.png"
import Style4 from "./assets/style4.png"
import Reating from "./assets/reating.png"
import Galichka from "./assets/galichka.png"

import Fragment1 from "./assets/Frame 32 (1).png"
import Fragment2 from "./assets/Frame 33.png"
import Fragment3 from "./assets/Frame 34.png"
import Fragment4 from "./assets/Frame 38.png"
import topshop from "./assets/topShop.png"
import star from "./assets/star.png"
import Image from "next/image";

function HomePage() {
  return (
    <>
      <section>
        <div
          className="bg-gray-100 "
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
                  className="
          text-[36px]
          sm:text-[44px]
          lg:text-[64px]
          leading-[1.1]
          font-extrabold
          text-black
        "
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
        <div className="bg-black py-6 flex justify-around items-center">
          <div className="text-white font-bold text-3xl uppercase">VERSACE</div>
          <div className="text-white font-bold text-3xl uppercase">ZARA</div>
          <div className="text-white font-bold text-3xl uppercase">GUCCI</div>
          <div className="text-white font-bold text-3xl uppercase">PRADA</div>
          <div className="text-white font-bold text-3xl">Calvin Klein</div>
        </div>
      </section>


      <section className="py-20">
        <div className="conatainer mx-auto px-5">
          <h1 className="text-black font-bold text-6xl text-center ">
            NEW ARRIVALS
          </h1>

          <div className="grid grid-cols-4 gap-5 *:">
            <div className="w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 space-y-3">

              {/* IMAGE */}
              <div className="w-full h-[260px] relative rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={Fragment1}
                  alt="T-shirt"
                  fill
                  className="object-cover"
                />
              </div>

              {/* TITLE */}
              <h2 className="font-semibold text-[16px] leading-snug text-black">
                T-SHIRT WITH TAPE DETAILS
              </h2>

              {/* RATING */}
              <div className="flex items-center gap-2">
                <Image src={star} alt="star" width={90} height={18} />
                <p className="text-[14px] text-gray-600">4.5/5</p>
              </div>

              {/* PRICE */}
              <h1 className="text-[22px] font-bold text-black">
                $120
              </h1>

            </div>

            <div className="w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 space-y-3">

              {/* IMAGE */}
              <div className="w-full h-[260px] relative rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={Fragment2}
                  alt="T-shirt"
                  fill
                  className="object-cover"
                />
              </div>

              {/* TITLE */}
              <h2 className="font-semibold text-[16px] leading-snug text-black">
                SKINNY FIT JEANS
              </h2>

              {/* RATING */}
              <div className="flex items-center gap-2">
                <Image src={star} alt="star" width={90} height={18} />
                <p className="text-[14px] text-gray-600">4.5/5</p>
              </div>

              {/* PRICE */}
              <h1 className="text-[22px] font-bold text-black">
                $120
              </h1>

            </div>


            <div className="w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 space-y-3">

              {/* IMAGE */}
              <div className="w-full h-[260px] relative rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={Fragment3}
                  alt="T-shirt"
                  fill
                  className="object-cover"
                />
              </div>

              {/* TITLE */}
              <h2 className="font-semibold text-[16px] leading-snug text-black">
                CHECKERED SHIRT
              </h2>

              {/* RATING */}
              <div className="flex items-center gap-2">
                <Image src={star} alt="star" width={90} height={18} />
                <p className="text-[14px] text-gray-600">4.5/5</p>
              </div>

              {/* PRICE */}
              <h1 className="text-[22px] font-bold text-black">
                $120
              </h1>

            </div>


            <div className="w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 space-y-3">

              {/* IMAGE */}
              <div className="w-full h-[260px] relative rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={Fragment4}
                  alt="T-shirt"
                  fill
                  className="object-cover"
                />
              </div>

              {/* TITLE */}
              <h2 className="font-semibold text-[16px] leading-snug text-black">
                SLEEVE STRIPED T-SHIRT
              </h2>

              {/* RATING */}
              <div className="flex items-center gap-2">
                <Image src={star} alt="star" width={90} height={18} />
                <p className="text-[14px] text-gray-600">4.5/5</p>
              </div>

              {/* PRICE */}
              <h1 className="text-[22px] font-bold text-black">
                $120
              </h1>

            </div>

          </div>

          <div className=" mt-10 text-center">
            <button className="rounded-[62px] cursor-pointer border-1 p-[10px] w-[200px] font-bold">
              View All
            </button>
          </div>
        </div>
      </section>


      <section className="py-20">
        <div className="conatainer mx-auto px-5">
          <h1 className="text-black font-bold text-6xl text-center ">
            Top selling
          </h1>

          <div className="grid grid-cols-4 gap-5 *:">
            <div className="w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 space-y-3">

              {/* IMAGE */}
              <div className="w-full h-[260px] relative rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={Fragment1}
                  alt="T-shirt"
                  fill
                  className="object-cover"
                />
              </div>

              {/* TITLE */}
              <h2 className="font-semibold text-[16px] leading-snug text-black">
                T-SHIRT WITH TAPE DETAILS
              </h2>

              {/* RATING */}
              <div className="flex items-center gap-2">
                <Image src={star} alt="star" width={90} height={18} />
                <p className="text-[14px] text-gray-600">4.5/5</p>
              </div>

              {/* PRICE */}
              <h1 className="text-[22px] font-bold text-black">
                $120
              </h1>

            </div>

            <div className="w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 space-y-3">

              {/* IMAGE */}
              <div className="w-full h-[260px] relative rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={Fragment2}
                  alt="T-shirt"
                  fill
                  className="object-cover"
                />
              </div>

              {/* TITLE */}
              <h2 className="font-semibold text-[16px] leading-snug text-black">
                SKINNY FIT JEANS
              </h2>

              {/* RATING */}
              <div className="flex items-center gap-2">
                <Image src={star} alt="star" width={90} height={18} />
                <p className="text-[14px] text-gray-600">4.5/5</p>
              </div>

              {/* PRICE */}
              <h1 className="text-[22px] font-bold text-black">
                $120
              </h1>

            </div>


            <div className="w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 space-y-3">

              {/* IMAGE */}
              <div className="w-full h-[260px] relative rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={Fragment3}
                  alt="T-shirt"
                  fill
                  className="object-cover"
                />
              </div>

              {/* TITLE */}
              <h2 className="font-semibold text-[16px] leading-snug text-black">
                CHECKERED SHIRT
              </h2>

              {/* RATING */}
              <div className="flex items-center gap-2">
                <Image src={star} alt="star" width={90} height={18} />
                <p className="text-[14px] text-gray-600">4.5/5</p>
              </div>

              {/* PRICE */}
              <h1 className="text-[22px] font-bold text-black">
                $120
              </h1>

            </div>


            <div className="w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 space-y-3">

              {/* IMAGE */}
              <div className="w-full h-[260px] relative rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={Fragment4}
                  alt="T-shirt"
                  fill
                  className="object-cover"
                />
              </div>

              {/* TITLE */}
              <h2 className="font-semibold text-[16px] leading-snug text-black">
                SLEEVE STRIPED T-SHIRT
              </h2>

              {/* RATING */}
              <div className="flex items-center gap-2">
                <Image src={star} alt="star" width={90} height={18} />
                <p className="text-[14px] text-gray-600">4.5/5</p>
              </div>

              {/* PRICE */}
              <h1 className="text-[22px] font-bold text-black">
                $120
              </h1>

            </div>

          </div>

          <div className=" mt-10 text-center">
            <button className="rounded-[62px] cursor-pointer border-1 p-[10px] w-[200px] font-bold">
              View All
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-5 bg-gray-100 rounded-3xl grid grid-cols-1 py-[30px] ">
          <div className="flex gap-6 justify-center ">
            <div className="relative max-w-[500px] w-full h-80 group overflow-hidden rounded-lg shadow-lg">
              {/* Rasm */}
              <Image src={Style1} alt="" className="w-full h-full object-cover" />

              {/* Hover yozuvi */}
              <span className="absolute text-[30px] left-4 top-10 -translate-y-1/2 font-bold -translate-x-full text-black  bg-opacity-70 px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Casual
              </span>
            </div>




            <div className="relative max-w-[700px] w-full h-80 group overflow-hidden rounded-lg shadow-lg">
              {/* Rasm */}
              <Image src={Style2} alt="" className="w-full h-full object-cover" />

              {/* Hover yozuvi */}
              <span className="absolute text-[30px] left-4 top-10 -translate-y-1/2 font-bold -translate-x-full text-black  bg-opacity-70 px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Formal
              </span>
            </div>
          </div>


          <div className="flex gap-5 justify-center mt-[40px]">
            <div className="relative max-w-[700px] w-full h-80 group overflow-hidden rounded-lg shadow-lg">
              {/* Rasm */}
              <Image src={Style3} alt="" className="w-full h-full object-cover" />

              {/* Hover yozuvi */}
              <span className="absolute text-[30px] left-4 top-10 -translate-y-1/2 font-bold -translate-x-full text-black  bg-opacity-70 px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Party
              </span>
            </div>


            <div className="relative max-w-[500px] w-full h-80 group overflow-hidden rounded-lg shadow-lg">
              {/* Rasm */}
              <Image src={Style4} alt="" className="w-full h-full object-cover" />

              {/* Hover yozuvi */}
              <span className="absolute text-[30px] left-4 top-10 -translate-y-1/2 font-bold -translate-x-full text-black  bg-opacity-70 px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Gym
              </span>
            </div>
          </div>









        </div>
      </section>


      <section className="py-10">
        <div className="container mx-auto px-5">
          


          <div className=" flex gap-[30px] items-center  justify-center">
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
                "I'm blown away by the quality and style of the clothes I received from Shop.co.
                From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
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
                "I'm blown away by the quality and style of the clothes I received from Shop.co.
                From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
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
                "I'm blown away by the quality and style of the clothes I received from Shop.co.
                From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </div>




          

        </div>
      </section>
    </>
    
  )
}

export default HomePage