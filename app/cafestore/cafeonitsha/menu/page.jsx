import React from "react";
import CafeMenu from "../_components/CafeMenu/CafeMenu";

export default async function page() {

  return (
    <div className="w-full">
      <CafeMenu menuItems={menuItems} />
    </div>
  );
}