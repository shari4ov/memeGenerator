import React from "react";
import troll from "../images/troll-face.png";
export default function Header(){
       return (
              <nav className="nav align-items-center p-3 text-light" id="nav">
                            <img src={troll} className="troll" />
                            <h1 className="nav--title">Meme Generator </h1>
              </nav>
       )
}