

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold tracking-wide">Employee Portal</div>
        <nav className="space-x-4">
          <a
            href="/login"
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition font-medium"
          >
            Login
          </a>
          <a
            href="/register"
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition font-medium"
          >
            Register
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header
