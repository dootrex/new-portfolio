import React from "react";
import * as Icon from "react-feather";
import { motion } from "framer-motion";

export default function PageContact() {
  return (
    <section className="contact">
      <h1>Reach Out</h1>
      <motion.h3
        initial={{
          color: "black",
          textDecoration: "none",
        }}
        animate={{
          color: "red",
          scale: 1.1,
          textDecoration: "undeline",
        }}
        transition={{
          yoyo: Infinity,
        }}
      >
        avigill@hotmail.ca
      </motion.h3>
      <div className="links">
        <motion.div className="icon" whileHover={{ scale: 1.2 }}>
          <Icon.Linkedin />
        </motion.div>
        <motion.div className="icon" whileHover={{ scale: 1.2 }}>
          <Icon.Code />
        </motion.div>
        <motion.div className="icon" whileHover={{ scale: 1.2 }}>
          <Icon.BookOpen />
        </motion.div>
      </div>
    </section>
  );
}
