import "./App.css";
import logo from "./Img/Carla Ramos.png";
function App() {
  return (
    <>
      <header className="h-1/4 max-h-72 bg-white">
        <div className="flex my-2 mx-3 w-4/5  h-4/5 mx-auto ">
          <div className="w-1/4">
            <img className="h-auto" src={logo} alt="" />
          </div>
          <div className="w-1/2">
            <div className="text-gray-700 text-5xl pt-5 font-serif text-center tracking-widest mt-5">
              Dra. Carla Ramos
            </div>
            <div className="text-gray-500 text-center mt-5 text-2xl">
              Odontologia Reabilitadora: Saúde Bucal e Estética
            </div>
            <div className="text-gray-500 text-center text-2xl">
              Cirurgiã-dentista e Palestrante
            </div>
          </div>
          <div className="w-1/4">contato</div>
        </div>
      </header>
      <div className="bg-black">
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default App;
