import React from "react";
import "./styles/maincontent.css";

const Maincontent = () => {
  return (
    <div className="maindiv">
      <div className="main-content">
        <div></div>
        <div className="main-content-description">
          <h1 className="main-content-description-title">Começe agora!</h1>
          <p className="main-content-description-text">
            Junte-se a nós para descobrir o poder que está dentro de você. Na
            academia, cada esforço é um passo em direção à sua melhor versão.
            Aqui, encontramos desafios e oportunidades para crescermos juntos.
            Venha fazer parte desta jornada de superação e transformação. Não
            espere mais, seu potencial aguarda por você. Vamos alcançar grandes
            conquistas lado a lado!
          </p>
          <a href="/contact/">
            <button className="main-content-description-btn">
              Escolha um plano!
            </button>
          </a>
        </div>
      </div>
      <Bottomcards />
    </div>
  );
};

const Bottomcards = () => {
  return (
    <div className="carddiv">
      <div className="carddiv-card main-card">Benefícios de nossa unidade</div>
      <div className="carddiv-card">
        <div className="icon-div">
          <i class="fa-solid fa-pencil"></i>
        </div>
        Aula experimental com personal trainer.
      </div>
      <div className="carddiv-card">
        <div className="icon-div">
          <i class="fa-regular fa-clock"></i>
        </div>
        Funcionamento das 6h às 23h.
      </div>
      <div className="carddiv-card">
        <div className="icon-div">
          <i class="fa-regular fa-circle-xmark"></i>
        </div>
        Cancelamento a qualquer momento!
      </div>
    </div>
  );
};

export default Maincontent;
