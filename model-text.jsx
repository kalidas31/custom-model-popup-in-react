import { useState } from "react";
import Model from "./model";
import "./styles.css";

export default function Modeltest() {
  const [handletoggleclick, sethandletoggle] = useState(false);

  function handletoggle() {
    sethandletoggle(!handletoggleclick);
  }
  function onClose() {
    sethandletoggle(false);
  }
  return (
    <div>
      <button onClick={handletoggle}>open custom model</button>
      {handletoggleclick && (
        <Model onClose={onClose} body={<div>this is body</div>} />
      )}
    </div>
  );
}
