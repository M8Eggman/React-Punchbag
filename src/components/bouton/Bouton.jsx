import { useState } from "react";
import "./Bouton.css";

function Bouton(props) {
  return (
    <>
      <div className="bouton">
        {props.pv <= 0 ? (
          <button className="boutonRestart" onClick={() => props.punch(false)}>
            Restart
          </button>
        ) : props.rand == 0 ? (
          <button className="boutonSuperPunch" onClick={() => props.punch(true)}>
            Super Punch
          </button>
        ) : (
          <button className="boutonPunch" onClick={() => props.punch(false)}>
            Punch
          </button>
        )}
      </div>
    </>
  );
}

export default Bouton;
