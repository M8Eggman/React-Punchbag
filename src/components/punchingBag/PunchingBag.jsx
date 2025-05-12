import "./PunchingBag.css";
import bag from "../../assets/img/bag.png";
import bagBurst from "../../assets/img/bag-burst.png";
import { useState } from "react";

function PunchingBag(props) {
  return (
    <>
      {/* si pv est 0 affiche bagburst */}
      <div className="bag">
        {props.pv == 0 ? <img src={bagBurst} onClick={(e) => props.punch(e, false)} /> : props.rand == 0 ? <img src={bag} onClick={(e) => props.punch(e, true)} /> : <img src={bag} onClick={(e) => props.punch(e, false)} />}
      </div>
    </>
  );
}

export default PunchingBag;
