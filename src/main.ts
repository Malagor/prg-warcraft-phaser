import "./style.css";

import Phaser from "phaser";
import { scenes } from './scenes';

new Phaser.Game({
  width: 800,
  height: 600,
  title: "Phaser RPG",
  scene: scenes,
  url: import.meta.env.URL || "",
  version: import.meta.env.URL || "0.0.1",
  backgroundColor: "#000",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  pixelArt: true,
});
