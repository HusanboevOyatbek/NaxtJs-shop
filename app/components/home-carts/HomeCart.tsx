
import Image from "next/image";
import Link from "next/link"
import star from "../../assets/star.png"


type productType ={
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

const HomeCart = ({id , title , price , image}:productType) => {
  return (
      <Link href={`/products/${id}`} key={id} className="w-[280px] bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 space-y-3 flex-shrink-0">

          {/* IMAGE */}
          
          <div className="w-full h-[260px] relative rounded-xl overflow-hidden bg-gray-100">
              <Image

                  src={image}
                  alt="T-shirt"
                  fill
                  className="object-contain"
              />
          </div>

          {/* TITLE */}
          <h2 className="font-semibold text-[16px] leading-snug line-clamp-2 text-black">
              {title}
          </h2>

          {/* RATING */}
          <div className="flex items-center gap-2">
              <Image src={star} alt="star" width={90} height={18} />
              <p className="text-[14px] text-gray-600">4.5/5</p>
          </div>

          {/* PRICE */}
          <h1 className="text-[22px] font-bold text-black">
              {price}
          </h1>

      </Link>
  )
}

export default HomeCart