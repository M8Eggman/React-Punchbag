import { useState } from "react";
import "./Pv.css";

function Pv() {
  const [pv, setPv] = useState(0);
  return (
    <>
      <div className="pvMax">
        <div className="pvActuel" style={{ width: pv + "vw" }}></div>
      </div>
    </>
  );
}

export default Pv;
