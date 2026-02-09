"use client"
import Image from "next/image";
import Starr from "../../assets/star.png"
import { useCartStore } from "@/app/store/useCartStore";




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


const SingleProduct =({res}:{res:productType}) => {
    const cart = useCartStore((state) => state.cart)
    const addToCart = useCartStore((state) => state.addToCart)



   

  return (
    <div>
          <section>

              <div className="min-h-screen bg-neutral-50">
                  <div className="max-w-7xl mx-auto px-6 py-12">
                      <div className="grid md:grid-cols-2 gap-14">

                          {/* Left Side - Product Images */}
                          <div className="space-y-4">
                              <div className="aspect-square bg-neutral-100 rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
                                  {res && (
                                      <Image
                                          src={res.image}
                                          alt={res.title}
                                          width={500}
                                          height={500}
                                          className="object-contain"
                                      />
                                  )}


                              </div>
                          </div>

                          {/* Right Side - Product Info */}
                          <div className="space-y-7">
                              <div>
                                  <h1 className="text-4xl font-bold text-neutral-900 mb-3">
                                      {res?.title}
                                  </h1>



                                  <div className="flex items-center gap-3 mb-4">
                                      <div className="flex">
                                          <Image src={Starr} alt="" className="w-[120px]" />
                                      </div>
                                      <span className="text-neutral-500 text-sm">4.5/5</span>
                                  </div>

                                  <div className="flex items-center gap-4">
                                      <span className="text-3xl font-bold text-neutral-900">$ {res?.price}</span>

                                  </div>
                              </div>

                              <p className="text-neutral-600 leading-relaxed">
                                  {
                                      res?.description
                                  }
                              </p>

                              {/* Color Selection */}
                              <div>
                                  <h3 className="font-semibold mb-3 text-neutral-900">Select Colors</h3>
                                  <div className="flex gap-4">
                                      <div className="w-10 h-10 rounded-full bg-[#556B2F] ring-2 ring-black cursor-pointer"></div>
                                      <div className="w-10 h-10 rounded-full bg-[#2F4F4F] ring-1 ring-neutral-300 hover:ring-neutral-500 cursor-pointer"></div>
                                      <div className="w-10 h-10 rounded-full bg-[#1e3a5f] ring-1 ring-neutral-300 hover:ring-neutral-500 cursor-pointer"></div>
                                  </div>
                              </div>

                              {/* Size Selection */}
                              <div>
                                  <h3 className="font-semibold mb-3 text-neutral-900">Choose Size</h3>
                                  <div className="flex gap-3 flex-wrap">
                                      <button className="px-6 py-3 border rounded-[30px] cursor-pointer hover:border-neutral-500">
                                          Small
                                      </button>
                                      <button className="px-6 py-3 border rounded-[30px] cursor-pointer hover:border-neutral-500">
                                          Medium
                                      </button>
                                      <button className="px-6 py-3 border bg-black text-white rounded-[30px] cursor-pointer">
                                          Large
                                      </button>
                                      <button className="px-6 py-3 border rounded-[30px] cursor-pointer hover:border-neutral-500">
                                          X-Large
                                      </button>
                                  </div>
                              </div>

                              {/* Quantity and Add to Cart */}
                              <div className="flex gap-4">
                                  <div className="flex items-center border rounded-[30px] cursor-pointer overflow-hidden">
                                      <button className="px-4 py-3 hover:bg-neutral-100">−</button>
                                      <span className="px-6 py-3  text-sm">1</span>
                                      <button className="px-4 py-3 hover:bg-neutral-100">+</button>
                                  </div>

                                  <button onClick={() => addToCart(res)} className="flex-1 cursor-pointer bg-black text-white py-3 rounded-xl font-semibold hover:bg-neutral-800 transition">
                                      add to cart
                                  </button>
                              </div>

                          </div>
                      </div>
                  </div>
              </div>




          </section>


          <section>
              <div className="min-h-screen bg-neutral-50 p-4 md:p-8">
                  <div className="max-w-7xl mx-auto">

                      {/* Tabs */}
                      <div className="border-b  border-neutral-200 mb-10">
                          <div className="flex gap-6 justify-between">
                              <button className="cursor-pointer pb-4 font-medium text-neutral-500 hover:text-black transition">
                                  Product Details
                              </button>
                              <button className="cursor-pointer pb-4 font-semibold  text-black">
                                  Rating & Reviews
                              </button>
                              <button className="cursor-pointer pb-4 font-medium text-neutral-500 hover:text-black transition">
                                  FAQs
                              </button>
                          </div>
                      </div>

                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                          <h2 className="text-2xl md:text-3xl font-bold">
                              All Reviews <span className="text-neutral-400">(451)</span>
                          </h2>

                          <div className="flex items-center gap-3">
                              <button className="p-3 border rounded-xl hover:bg-neutral-100 transition">
                                  ☰
                              </button>

                              <select
                                  className="px-6 py-3 border rounded-xl bg-white 
             hover:bg-neutral-100 transition font-medium
             outline-none cursor-pointer"
                              >
                                  <option>Latest</option>
                                  <option>Oldest</option>
                                  <option>Highest Rating</option>
                                  <option>Lowest Rating</option>
                              </select>


                              <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-neutral-800 transition font-semibold">
                                  Write a Review
                              </button>
                          </div>
                      </div>

                      {/* Reviews */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                          {/* Review Card */}
                          {[
                              "Samantha D.",
                              "Alex M.",
                              "Ethan R.",
                              "Olivia P.",
                              "Liam K.",
                              "Ava H."
                          ].map((name, i) => (
                              <div
                                  key={i}
                                  className="bg-white border border-neutral-300 rounded-2xl p-6 
            shadow-sm hover:shadow-lg transition"
                              >
                                  {/* Stars */}
                                  <div className="flex gap-1 mb-4">
                                      <Image src={Starr} alt="" className="w-[100px]" />

                                  </div>

                                  {/* Name */}
                                  <div className="flex items-center gap-2 mb-3">
                                      <h3 className="font-semibold text-lg">{name}</h3>
                                      <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                                          ✓
                                      </span>
                                      <button className="ml-auto text-neutral-400 hover:text-black transition">
                                          ⋮
                                      </button>
                                  </div>

                                  {/* Text */}
                                  <p className="text-neutral-600 leading-relaxed mb-4">
                                      This t-shirt exceeded my expectations! The fabric is soft,
                                      the design is clean and stylish, and it feels premium when worn.
                                  </p>

                                  <p className="text-neutral-400 text-sm">
                                      Posted on August {14 + i}, 2023
                                  </p>
                              </div>
                          ))}
                      </div>

                      {/* Load More */}
                      <div className="flex justify-center mt-12">
                          <button className="px-8 py-3 border rounded-full hover:bg-neutral-100 transition font-semibold">
                              Load More Reviews
                          </button>
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}

export default SingleProduct