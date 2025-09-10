const ColorBox = ({ color }) => {
  const boxStyle = {
    width: "150px",
    height: "150px",
    backgroundColor: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "8px",
    border: "2px solid #333",
    margin: "20px auto",
  };

  return <div style={boxStyle}>{color}</div>;
};

export default ColorBox;
