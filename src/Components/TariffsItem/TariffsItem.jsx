import React, { useState } from "react";
import "./TariffsItem.scss";

export default function TariffsItem({
  name,
  price,
  speed,
  info,
  background,
  activeSelect,
  index,
  handleClick,
}) {
  return (
    <div
      className={`card ${activeSelect ? "medium" : ""}`}
      onClick={() => handleClick(index)}>
      <div className="card-body">
        <h2 className={`${background} card-title`}>{name}</h2>
        <p className={`${background} card-text`}>руб {price}/мес</p>
        <p className="card-text">до {speed} Мбит/сек</p>
        <p className="card-text grey">{info}</p>
      </div>
    </div>
  );
}
