import { width } from "@mui/system";

const styles = {
  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: 550,
    padding: 20,
    marginLeft: 100,
  },

  containerImage: {
    width: "100%",
  },

  changingText: {
    backgroundColor: "#e2de00",
    color: "#e2de00",
    fontWeight: "bold",
  },

  containerButtons: {
    width: "100%",
    height: 200,
    display: "flex",
    justifyContent: "center",
    marginTop: "5%",
  },

  imageLeftSide: {
    width: 30,
    height: 30,
    margin: 5,
    rotate: "180deg",
  },

  imageRightSide: {
    width: 30,
    height: 30,
    margin: 5,
  },

  button: {
    border: "none",
    height: 50,
    width: 50,
    alignItems: "center",
    display: "flex",
    backgroundColor: "transparent",
  },
  separator: {
    height: 3,
    width: "15%",
    backgroundColor: "#e2de00",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    margin: "25px 0",
  },
};

export default styles;
