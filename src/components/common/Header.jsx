function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 border-b-4 border-black">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Kuis App</h1>
        <button className="text-sm hover:underline">Logout</button>
      </div>
    </header>
  );
}

export default Header;
