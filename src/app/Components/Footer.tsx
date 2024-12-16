const FurnitureFooter = () => {
    return (
      <footer className="bg-[#FFFFFF] text-black py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            {/* Company Info */}
            <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
              <h2 className="text-2xl font-bold">Furniro</h2>
              <p className="mt-4 text-gray-500">Your destination for premium <br /> furniture, crafted with care and designed for comfort.</p>
            </div>
  
            {/* Quick Links */}
            <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
              <h3 className="text-xl font-semibold text-gray-500">Quick Links</h3>
              <ul className="mt-4">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About Us</a></li>
                <li><a href="#products" className="hover:underline">Products</a></li>
                <li><a href="#contact" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div className="w-full sm:w-1/3">
              <h3 className="text-xl font-semibold text-gray-400">Contact Us</h3>
              <p className="mt-4">Email: <a href="mailto:info@furniturehaven.com" className="hover:underline">info@furniturehaven.com</a></p>
              <p className="mt-2">Phone: +123 456 7890</p>
            </div>
          </div>
  
          {/* Social Media Links */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-gray-500">Follow Us</h3>
            <div className="mt-4 space-x-6">
              <a href="https://facebook.com" className="hover:text-blue-500">Facebook</a>
              <a href="https://instagram.com" className="hover:text-pink-500">Instagram</a>
              <a href="https://twitter.com" className="hover:text-blue-400">Twitter</a>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Furniture Haven. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default FurnitureFooter;
  