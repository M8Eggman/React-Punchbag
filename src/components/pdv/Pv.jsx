import "./Pv.css";

function Pv(props) {
  return (
    <>
      <div className="pvMax">
        {/* selon les pv va changer la largeur de la div */}
        <div className="pvActuel" style={{ width: props.pv + "%" }}></div>
      </div>
    </>
  );
}

export default Pv;
