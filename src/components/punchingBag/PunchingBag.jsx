import "./PunchingBag.css";
import bag from "../../assets/img/bag.png";
import bagBurst from "../../assets/img/bag-burst.png";

function PunchingBag(props) {
  return (
    <>
      {/* si pv est 0 affiche bagburst */}
      <div className="bag">{props.pv == 0 ? <img src={bagBurst} onClick={() => props.punch(false)} /> : props.rand == 0 ? <img src={bag} onClick={() => props.punch(true)} /> : <img src={bag} onClick={() => props.punch(false)} />}</div>
    </>
  );
}

export default PunchingBag;
