import { useState } from "react";
import "./App.css";
import Bouton from "./components/bouton/Bouton";
import Pv from "./components/pdv/Pv";
import PunchingBag from "./components/punchingBag/punchingBag";
import punchSrc from "./assets/sound/punch.mp3";
import superPunchSrc from "./assets/sound/superPunch.mp3";

function App() {
  function punch(e, superPunch) {
    // crée un const pour chaque son
    const punchSound = new Audio(punchSrc);
    const superPunchSound = new Audio(superPunchSrc);
    // réduit les pv de 10% et si pv 0 les reset
    if (pv > 0) {
      // si superpunch vrai fait 20% de dégat
      superPunch ? setPv(pv - 20) : setPv(pv - 10);
    } else {
      setPv(100);
    }
    // si pv inférieur a 0 le set a 0
    if (pv < 0) {
      setPv(0);
    }
    // génère un nouveau nombre
    setRand(Math.floor(Math.random() * 10));

    if (e.target.tagName == "IMG" && pv != 0) {
      // ajoute et enleve l'animation pour forcer l'animation a se lancer a chaque fois
      e.target.style.animation = "";
      setTimeout(() => {
        e.target.style.animation = "animationBag 500ms ease-in-out";
      }, 5);
    } else if (e.target.tagName == "BUTTON" && pv != 0) {
      // a partir du bouton retrace le chemin pour trouver l'image utilise du dom pas opti
      e.target.parentElement.previousElementSibling.firstElementChild.style.animation = "";
      setTimeout(() => {
        e.target.parentElement.previousElementSibling.firstElementChild.style.animation = "animationBag 500ms ease-in-out";
      }, 5);
    }
    // selon le booléen super punch choisi le son adéquoi
    const sound = superPunch ? superPunchSound : punchSound;
    sound.currentTime = 0;
    sound.play();
  }

  const [pv, setPv] = useState(100);
  // génère un nombre aléatoire pour le superpunch
  const [rand, setRand] = useState(Math.floor(Math.random() * 10));

  return (
    <>
      <Pv pv={pv} />
      <PunchingBag punch={punch} pv={pv} rand={rand} />
      <Bouton punch={punch} pv={pv} rand={rand} />
    </>
  );
}

export default App;
