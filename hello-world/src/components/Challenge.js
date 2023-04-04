const num1 = 5;
const num2 = 10;

const renderEquacao = () => {
  return (
    <h1>
      {num1} + {num2}
    </h1>
  );
};

const handleEquacao = () => {
  console.log(num1 + num2);
};

const Challenge = () => {
  return (
    <div>
      {renderEquacao()}
      <button onClick={handleEquacao}>
        Clique aqui para somar. (no console pq ainda nao sei colocar na tela :p
        )
      </button>
    </div>
  );
};

export default Challenge;
