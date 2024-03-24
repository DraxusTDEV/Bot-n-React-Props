const Button = ({ texto = "Text Default", color = "black" }) => {
  const styles = {
    width: "100px",
    background: color,
    color: "white",
    height: "30px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    margin: "5px",
  };

  return <button style={styles}>{texto}</button>;
};

export default Button;
