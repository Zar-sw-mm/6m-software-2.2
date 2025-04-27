import Genre from "./Genre";

function Container() {
  const styleHeader = {
    backgroundColor: "lightcyan",
    padding: "2px",
    fontFamily: "Robot",
    textShadow: " #000000",
    fontSize: "40px",
    color: "darkblue",
  };

  const styleContainer = {
    display: "flex",
    flexDirection: "row", // Arrange items horizontally
    justifyContent: "space-evenly", // Distribute space between items
    alignItems: "center",
    padding: "50px 0 0 0",
  };

  const styleItem = {
    position: "sticky",
    width: "500px",
    height: "200px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    backgroundColor: "aqua",
    gap: "30px",
  };

  return (
    <div>
      <header style={styleHeader}>Movie Selection App</header>
      <div style={styleContainer}>
        <div style={styleItem}>
          {/* Display content of Comedy */}
          <h1 style={{ fontFamily: "Times New Romen" }}>Comedy</h1>
          <Genre
            name="Short Flim"
            description="Movies"
            title1="The Elevator"
            title2="Robbery"
          />
        </div>
        <div style={styleItem}>
          {/* Display content of Romance */}
          <h1 style={{ fontFamily: "Times New Romen" }}>Romance</h1>
          <Genre
            name="Short Flim"
            description="Movies"
            title1="Together"
            title2="Ocean"
          />
        </div>
      </div>
    </div>
  );
}

export default Container;

/*
  Ref Link: https://www.google.com/search?q=two+object+display+row+in+react&sca_esv=cb024d960f24b994&rlz=1C5GCEM_enSG1156SG1156&ei=xiMOaPqzHrSb4-EP5Je70Qo&ved=0ahUKEwj6ro6LnPiMAxW0zTgGHeTLLqoQ4dUDCBA&uact=5&oq=two+object+display+row+in+react&gs_lp=Egxnd3Mtd2l6LXNlcnAiH3R3byBvYmplY3QgZGlzcGxheSByb3cgaW4gcmVhY3QyBRAhGKABSLGmBVAAWM6lBXAHeAGQAQCYAWugAewTqgEEMzcuMbgBA8gBAPgBAZgCLaACtxXCAgsQABiABBiRAhiKBcICChAAGIAEGEMYigXCAhAQABiABBixAxhDGIMBGIoFwgIWEC4YgAQYsQMY0QMYQxiDARjHARiKBcICCBAAGIAEGLEDwgILEAAYgAQYsQMYgwHCAhAQLhiABBjRAxhDGMcBGIoFwgIOEC4YgAQYsQMY0QMYxwHCAgsQLhiABBixAxiDAcICBRAAGIAEwgIOEC4YgAQYsQMYgwEYigXCAgsQLhiABBjHARivAcICCxAAGIAEGLEDGIoFwgIFEC4YgATCAhoQLhiABBjHARivARiXBRjcBBjeBBjgBNgBAcICBxAAGIAEGArCAgYQABgWGB7CAggQABgWGAoYHsICCBAAGIAEGKIEwgIFEAAY7wXCAgcQIRigARgKwgIEECEYCsICCxAAGIAEGIYDGIoFwgIFECEYnwXCAgQQIRgVmAMAugYGCAEQARgUkgcENDQuMaAHkr0BsgcEMzcuMbgHoBU&sclient=gws-wiz-serp
            https://developer.mozilla.org/en-US/docs/Web/CSS/named-color
            https://fonts.google.com/specimen/Roboto+Condensed

*/
