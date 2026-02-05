// "use cl"
// import Link from "next/link"
// import Fragment1 from "../../assets/Frame 32 (1).png"

// function HomeCart({ id, name, price, image }:{id:number , name:string , price:number}) {
//   return (
//       <Link href={`/products/${id}`} key={id} className="w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 space-y-3">

//           {/* IMAGE */}
//           <div className="w-full h-[260px] rtive rounded-xl overflow-hidden bg-gray-100">
//               <Image
//                   src={image || Fragment1}
//                   alt="T-shirt"
//                   fill
//                   className="object-cover"
//               />
//           </div>

//           {/* TITLE */}
//           <h2 className="font-semibold text-[16px] leading-snug text-black">
//               {name}
//           </h2>

//           {/* RATING */}
//           <div className="flex items-center gap-2">
//               <Image src={star} alt="star" width={90} height={18} />
//               <p className="text-[14px] text-gray-600">4.5/5</p>
//           </div>

//           {/* PRICE */}
//           <h1 className="text-[22px] font-bold text-black">
//               {price}
//           </h1>

//       </Link>
//   )
// }

// export default HomeCart