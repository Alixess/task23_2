import React from "react";
import tariffs from "../../data/tariffs.json";
import TariffsItem from "../TariffsItem/TariffsItem";

export default function Tariffs() {
  return (
    <div className="cardholder">
      {tariffs.map((item, index) => (
        <TariffsItem key={index} {...item} />
      ))}
    </div>
  );
}
