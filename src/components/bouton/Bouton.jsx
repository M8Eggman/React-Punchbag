import { useState } from "react";
import "./Bouton.css";

function Bouton(props) {
  return (
    <>
      <div className="bouton">
        {props.pv == 0 ? (
          <button className="boutonRestart" onClick={(e) => props.punch(e, false)}>
            Restart
          </button>
        ) : // si rand = 0 super punch
        props.rand == 0 ? (
          <button className="boutonSuperPunch" onClick={(e) => props.punch(e, true)}>
            Super Punch
          </button>
        ) : (
          <button className="boutonPunch" onClick={(e) => props.punch(e, false)}>
            Punch
          </button>
        )}
      </div>
    </>
  );
}

export default Bouton;
