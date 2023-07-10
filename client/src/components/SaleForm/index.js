import React from "react";

function SaleForm({ children }) {
  return (
    <div
      style={{
        height: 560,
        clear: "both",
        paddingTop: 120,
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}

export default SaleForm;
