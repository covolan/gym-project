import React from "react";
import "./styles/bottomcards.css";

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

export default Bottomcards;
