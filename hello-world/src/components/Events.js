const Events = () => {
  const handleOnClick = (event) => {
    console.log("You clicked :o");
    console.log("These are my properties: ");
    console.log(event);
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Rendering this...</h1>;
    } else {
      return <h1>and also rendering this.</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleOnClick}>Click me!</button>
        <button
          onClick={() => {
            console.log("Nice, hehe");
          }}
        >
          Then click me!
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
