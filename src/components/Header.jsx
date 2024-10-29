import React from "react";
import { Appbar } from "react-native-paper";

const Header = ({ title }) => {
  return (
    <Appbar.Header elevated={true} style={{ backgroundColor: "#121212" }}>
      <Appbar.Content title={title} titleStyle={{ color: "#FFF", fontSize: 18 }} />
    </Appbar.Header>
  );
};

export default Header;
