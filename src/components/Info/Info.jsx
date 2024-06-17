import React from "react";
import "./Info.css";
import { infoTxts } from "../../constants/index";
const Info = () => {
  return (
    <aside className="info__container section__padding">
      <section className="info-column__container">
        <h1>{infoTxts.leftColumn.title}</h1>
        <p>{infoTxts.leftColumn.par1}</p>
        <p>{infoTxts.leftColumn.par2}</p>
      </section>
      <section className="info-column__container">
        <h1>{infoTxts.righColumn.title}</h1>
        <p>{infoTxts.righColumn.par1}</p>
        <p>{infoTxts.righColumn.par2}</p>
      </section>
    </aside>
  );
};

export default Info;
