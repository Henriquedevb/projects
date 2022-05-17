import { CardProject } from "./components/CardProject";

import seguemepsa from "./assets/segueme.png";
import barber from "./assets/barber.png";

function App() {
  return (
    <div className="min-h-[100vh] flex flex-wrap">
      <CardProject
        description="Projeto para galeria de imagens. Em construção."
        href="https://seguemepsa.vercel.app/"
        imageAlt="Imagem da home do segueme com a frase um batalhão de amor"
        imageSrc={seguemepsa}
        name="Projeto Segue-me PSA"
      />

      <CardProject
        description="Projeto feito para estudos com tema de barbearia."
        href="https://fontenele-barbearia.vercel.app/"
        imageAlt="Imagem de um produto de salão de beleza"
        imageSrc={barber}
        name="Projeto Fontenele Barbearia"
      />
    </div>
  );
}

export default App;
