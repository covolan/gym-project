import React from "react";
import "./styles/maincontent.css";

const Maincontent = () => {
  return (
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
        <button className="main-content-description-btn">Escolha um plano!</button>
      </div>
    </div>
  );
};

export default Maincontent;
