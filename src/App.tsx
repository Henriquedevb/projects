import { CardProject } from "./components/CardProject";

import seguemePsa from "./assets/segueme.png";
import barber from "./assets/barber.png";
import todoList from "./assets/todolist.png";

function App() {
  return (
    <div className="min-h-[100vh] flex flex-wrap bg-slate-50">
      <CardProject
        description="Projeto para galeria de imagens. Em construção."
        href="https://seguemepsa.vercel.app/"
        imageAlt="Imagem da home do segueme com a frase um batalhão de amor"
        imageSrc={seguemePsa}
        name="Projeto Segue-me PSA"
      />

      <CardProject
        description="Projeto feito para estudos com tema de barbearia."
        href="https://fontenele-barbearia.vercel.app/"
        imageAlt="Imagem de um produto de salão de beleza"
        imageSrc={barber}
        name="Projeto Fontenele Barbearia"
      />

      <CardProject
        description="Projeto de TODO list."
        href="https://todo-list-de8q7l98e-henriquedevb.vercel.app/"
        imageAlt="Imagem do todo list"
        imageSrc={todoList}
        name="Projeto TODO list."
      />
    </div>
  );
}

export default App;
