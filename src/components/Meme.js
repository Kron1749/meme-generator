import React from "react";

export default function Meme() {
  return (
    <main>
      <form className="form">
        <input placeholder="Top text" className="form--input" type="text" />
        <input placeholder="Bottom text" className="form--input" type="text" />
        <button className="form--button">Get a new meme image</button>
      </form>
    </main>
  );
}
