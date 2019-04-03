import styled from "styled-components";

const DisplayItem = styled.div(() => ({
  height: "0px",
  position: "relative",
  paddingBottom: "100%",
  background: "#fff",
  borderRadius: "0.5em",
  boxShadow: "0px 4px 10px -2px rgba(0,0,0,0.1)",
  border: "0.5px solid rgba(0,0,0,0.2)",
  "svg, img": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    padding: "2em",
  },
}));

export default DisplayItem;
