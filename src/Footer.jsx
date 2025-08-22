
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-4 w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <span className="text-sm">&copy; {new Date().getFullYear()} Employee Portal. All rights reserved.</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
