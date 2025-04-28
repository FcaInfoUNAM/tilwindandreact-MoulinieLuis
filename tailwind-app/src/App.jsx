import './App.css';

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-orange-500 p-4 flex justify-around items-center">
        <a href="#home" className="text-white font-semibold hover:text-gray-300">Home</a>
        <a href="#about" className="text-white font-semibold hover:text-gray-300">About</a>
        <a href="#contact" className="text-white font-semibold hover:text-gray-300">Contact</a>
      </nav>

      {/* Main content */}
      <div className="h-screen bg-orange-500 p-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white">¡Hola Tailwind CSS!</h1>
        <p className="mt-4 text-white">
          Tailwind CSS es increíblemente poderoso. ¡No puedo esperar para seguir explorándolo!
        </p>

        {/* Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-80 mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Título de la Card</h2>
          <p className="mt-4 text-gray-600">Este es un ejemplo de texto dentro de una tarjeta. Puedes personalizar este componente según tus necesidades.</p>
          <button className="mt-6 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-300">
            Botón de acción
          </button>
        </div>
      </div>
    </>
  );
}

export default App;