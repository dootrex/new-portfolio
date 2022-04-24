import React from "react";
import stocky from "../images/stockyImage.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PageStocky() {
  return (
    <div className="singleProject">
      <div className="image">
        <img src={stocky} alt="Stocky image" />
      </div>

      <div className="projectText">
        <h1>Stocky</h1>
        <h3>
          A stock trading platform build on NodeJS backend with React frontend
          and MongoDB storage.
        </h3>
        <p>
          Developed a game for Industry client’s users to learn about team
          dynamics and workplace culture. Worked with other team members to
          implement a fully self-contained and operational video game after
          researching and learning Unity. Developed a web incapsulement for the
          game to be played in browser and other devices using ASP.NET Core
          backend and React frontend.
        </p>
        <hr />
        <div className="languages">
          <span>#react</span> <span>#NodeJS</span>
          <span>#MongoDB</span> <span>#AlphaVantageAPI</span>
        </div>
        <div className="codeLinks">
          <motion.button
            whileHover={{
              scale: 1.2,
            }}
          >
            <h3>Live</h3>
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.2,
            }}
          >
            <h3>Code</h3>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
