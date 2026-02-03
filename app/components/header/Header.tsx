import Link from "next/link"
import { IoMdSearch } from "react-icons/io"
import { IoCartOutline, IoPersonCircleOutline } from "react-icons/io5"

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-5 h-[80px] flex items-center justify-between gap-6">

        {/* LOGO */}
        <Link
          href="/"
          className="text-black font-extrabold text-3xl whitespace-nowrap"
        >
          SHOP.CO
        </Link>

        {/* NAV */}
        <ul className="flex items-center gap-6">
          <li>
            <select className="outline-none px-4 py-2 bg-white  rounded-xl text-sm cursor-pointer hover:border-orange-400 transition">
              <option>Shop</option>
              <option value="new">New</option>
              <option value="pro">Pro</option>
            </select>
          </li>

          <li>
            <Link className="text-sm text-black hover:text-orange-500 transition" href="/single">
              On Sale
            </Link>
          </li>

          <li>
            <Link className="text-sm text-black hover:text-orange-500 transition" href="/single">
              New Arrivals
            </Link>
          </li>

          <li>
            <Link className="text-sm text-black hover:text-orange-500 transition" href="/filter">
              Brands
            </Link>
          </li>
        </ul>

        {/* SEARCH */}
        <form className="max-w-[420px] w-full hidden lg:block">
          <div className="relative">
            <IoMdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="search"
              placeholder="Search products..."
              className="w-full py-2.5 pl-10 pr-24 text-sm bg-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-400"
            />

            <button
              type="button"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-4 py-2 rounded-xl hover:bg-orange-500 transition cursor-pointer"
            >
              Search
            </button>
          </div>
        </form>

        {/* ICONS */}
        <div className="flex items-center gap-4">
          <Link href={"cart"}> 

          <IoCartOutline className="w-[26px] h-[26px] cursor-pointer hover:text-orange-500 transition" />
          
          </Link>

          <IoPersonCircleOutline className="w-[28px] h-[28px] cursor-pointer hover:text-orange-500 transition" />
        </div>

      </div>
    </header>
  )
}

export default Header
