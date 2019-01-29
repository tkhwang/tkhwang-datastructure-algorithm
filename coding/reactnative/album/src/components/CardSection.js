import React from "react";
import { View } from "react-native";

const CardSection = props => {
  return <View style={styles.containStyle}>{props.children}</View>;
};

const styles = {
  containStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    backgroundColor: "#ddd",
    position: "relative"
  }
};

export default CardSection;
