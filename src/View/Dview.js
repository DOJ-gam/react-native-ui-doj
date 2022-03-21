import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Dview = (props) => {
  const {
    h,
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
  return (
    <View
      style={{
        ...style,
      }}
    >
      {children}
    </View>
  );
};

export default Dview;

const styles = StyleSheet.create({});
