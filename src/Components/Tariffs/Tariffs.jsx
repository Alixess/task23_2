import React, { useState } from "react";
import tariffs from "../../data/tariffs.json";
import TariffsItem from "../TariffsItem/TariffsItem";

export default function Tariffs() {
  const [arrStatusTariffs, setArrStatusTariffs] = React.useState([
    false,
    false,
    false,
    false,
  ]);
  function handleClick(index) {
    const newArrStatusTariffs = arrStatusTariffs.map(() => false);
    newArrStatusTariffs[index] = true;
    setArrStatusTariffs(newArrStatusTariffs);
  }
  return (
    <div className="cardholder">
      {tariffs.map((item, index) => (
        <TariffsItem
          key={index}
          {...item}
          activeSelect={arrStatusTariffs[index]}
          index={index}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}
