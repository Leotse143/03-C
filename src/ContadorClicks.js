import React, { useState } from "react";

function ContadorClicks() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };
  const restablecer = () => {
    // eslint-disable-next-line no-const-assign
    setContador(0);
  };

  return (
    <div className="caldero">
      <h2>{contador}</h2>
      <button onClick={incrementar} className="clic">
        Aumentar
      </button>
      <button onClick={restablecer} className="restablecer">
        Reiniciar
      </button>
    </div>
  );
}
export default ContadorClicks;
