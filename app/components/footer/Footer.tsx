import Image from "next/image";
import Pay from "../../assets/plasCart.png"
function Footer() {
  return (
    <footer className="w-full mt-[80px] bg-[#F0F0F0] text-gray-800 font-sans relative">
      {/* Newsletter Section */}
      <div className="absolute  max-w-[1200px] w-full -top-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-10 px-5 rounded-xl shadow-xl z-10">
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-6 text-center">
          Stay up to date about our latest offers
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full  border border-white sm:w-3/4 px-4 py-2 rounded-l-md  outline-none text-black placeholder-gray-500"
          />
          <button className="w-full sm:w-auto px-5 py-2 bg-white text-black rounded-r-md font-semibold hover:bg-orange-500 hover:text-white transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-5 py-32 relative z-0">
        {/* Column 1: Shop.co */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">SHOP.CO</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We have clothes that suits your style and which youre proud to wear. From women to men.
          </p>
          <div className="flex gap-2">
            {["T", "f", "i", "y"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs hover:bg-orange-500 hover:text-white transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Company */}
        <div>
          <h3 className="text-md font-bold text-gray-900 mb-4">COMPANY</h3>
          <ul className="space-y-2">
            {["About", "Features", "Works", "Career"].map((item, i) => (
              <li key={i}>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Help */}
        <div>
          <h3 className="text-md font-bold text-gray-900 mb-4">HELP</h3>
          <ul className="space-y-2">
            {["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"].map((item, i) => (
              <li key={i}>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: FAQ */}
        <div>
          <h3 className="text-md font-bold text-gray-900 mb-4">FAQ</h3>
          <ul className="space-y-2">
            {["Account", "Manage Deliveries", "Orders", "Payments"].map((item, i) => (
              <li key={i}>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 5: Resources */}
        <div>
          <h3 className="text-md font-bold text-gray-900 mb-4">RESOURCES</h3>
          <ul className="space-y-2">
            {["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"].map((item, i) => (
              <li key={i}>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center px-5 py-6 border-t border-gray-200 bg-[#F0F0F0]">
        <p className="text-gray-500 text-sm mb-3 md:mb-0">
          Shop.co © 2000-2023, All Rights Reserved
        </p>


        <div className="">
          <Image src={Pay}  alt="" />
        </div>


      </div>
    </footer>
  );
}

export default Footer;
