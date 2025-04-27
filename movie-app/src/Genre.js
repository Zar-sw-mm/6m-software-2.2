import Release from "./Release";
import Card from "./Card";

function Genre({ description, title1, title2 }) {
  const desStyle = {
    backgroundColor: "lightcyan",
    padding: "2px",
    fontFamily: "Robot",
    fontSize: "20px",
    color: "darkblue",
    fontWeight: "bold",
  };

  const displayStyle = {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  };

  const itemStyle = {
    height: "80px",
    width: "200px",
    backgroundColor: "teal",
    margin: "5px 0px 0px 30px",
    border: "1px",
    textAlign: "center",
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  };

  return (
    <div>
      <header style={desStyle}>{description}</header>
      <Card>
        <div style={displayStyle}>
          <div style={itemStyle}>
            <div>Title: {title1}</div>
            <Release year="2020" />
          </div>
          <div style={itemStyle}>
            <div>Title: {title2}</div>
            <Release year="2024" />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Genre;

/*
  Ref Link: https://www.geeksforgeeks.org/how-to-make-rounded-or-custom-border-radius-in-react-native/
*/
