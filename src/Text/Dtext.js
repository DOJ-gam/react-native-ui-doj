import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Dtext = (props) => {
  const {
    m,
    mb,
    mt,
    my,
    mx,
    ml,
    mr,
    p,
    pt,
    pb,
    px,
    py,
    pl,
    pr,
    w,
    bg,
    br,
    bw,
    bc,
    shadow,
    disabled,
    children,
    style,
    ...rest
  } = props;
  return <Text style={{ ...style }}>{children}</Text>;
};

export default Dtext;

const styles = StyleSheet.create({});
