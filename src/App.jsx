import "./App.css";
import logo from "./Img/Carla Ramos.png";
import Dtr from "./Img/DT.webp";
import Dtr2 from "./Img/Dt2.jpg";

function App() {
  return (
    <>
      <header className="h-1/4 max-h-56 bg-color1">
        <div className="flex mx-3 w-4/5  h-4/5 mx-auto ">
          <div className="w-1/4">
            <img className="h-auto mt-5" src={logo} alt="" />
          </div>
          <div className="w-1/2">
            <div className="text-color6 text-5xl pt-5 font-serif text-center tracking-widest mt-5">
              Dra. Carla Ramos
            </div>
            <div className="text-gray-500 text-center mt-5 text-2xl">
              Odontologia Reabilitadora: Saúde Bucal e Estética
            </div>
            <div className="text-gray-500 text-center text-2xl">
              Cirurgiã-dentista e Palestrante
            </div>
          </div>
        </div>
      </header>
      <div className="text-black flex p-5 justify-between bg-color4">
        <div className="w-2/5 text-center my-40">
          <div className=" text-center text-5xl ">
            Saúde Estética <br /> <span className="text-color1">&#10057; </span>
            <br /> Bem-estar Autoestima
          </div>
          <br />
          <div className="w-2/4 text-center text-lg text-color7 mx-auto my-5">
            <div className="text-xl tracking-wide text-center font-thin mt-5 pt-5 px-20 font-semibold font-serif text-color9">
              Transformo e cuido de sorrisos através de atendimentos
              personalizados, com enfoque na Saúde Geral, Qualidade de Vida e
              Bem-estar. Em constante aperfeiçoamento para proporcionar os
              melhores e mais modernos tratamentos em Odontologia.
            </div>
          </div>
        </div>
        <div className=" flex justify-end w-1/5 py-16 pr-40">
          <div>
            <img src={Dtr} alt="" className="h-4/4" />
          </div>
        </div>
      </div>
      <div className="text-black p-5 justify-between bg-color3">
        <div className="w-1/2 flex text-center  mx-auto ">
          <div className=" flex w-1/5 h-6/10 my-16">
            <div>
              <img src={Dtr2} alt="" />
            </div>
          </div>
          <div className="w-2/5  my-16">
            <div className="text-5xl text-center mt-5 font-bold text-color8">
              Sou a Dra. Carla Ramos
            </div>
            <div className="text-3xl text-end mt-5 font-bold text-color8">
              Muito Prazer!
            </div>
            <div className="text-xl tracking-wide text-center font-thin mt-5 pt-5 px-20 font-semibold font-serif text-color9">
              Apaixonada por Odontologia <br />
              Possuo formação e experiência profissional direcionada para a
              Odontologia Reabilitadora e Estética. Com mais de 20 anos de
              experiência, tenho Especialização em Prótese Dentária e Saúde
              Coletiva, Mestrado e Doutorado em Odontologia pela PUC/RS. Também
              sou Pós Doutora em Odontologia Restauradora pela USP - Ribeirão
              Preto/SP.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-color2 p-5 py-20 ">
        <div className="flex w-1/5  mx-auto justify-between">
          <div className=" font-bold text-center text-color10 text-2xl">
            Tratamentos
          </div>
          <div className="text-color1 text-5xl font-bold text-center w-3/5 ">
            &#10057;
          </div>
          <div className=" font-bold   text-color10 text-2xl">Prevenção</div>
        </div>
      </div>
    </>
  );
}

export default App;
