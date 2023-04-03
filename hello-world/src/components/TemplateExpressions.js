const TemplateExpressions = () => {
  const birthYear = 1998;
  const currentYear = 2023;

  const userData = {
    name: "Fernanda",
    age: currentYear - birthYear,
  };

  return (
    <p>
      Meu nome é {userData.name} e eu tenho {userData.age} anos.{" "}
    </p>
  );
};

export default TemplateExpressions;
