import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

const Dbutton = (props) => {
  const {
    children,
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
    style,
    onPress,
    ...rest
  } = props;

  // const rest2 = rest.replace(rest, '"([a-zA-Z]w*)"(?=:');
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          margin: m && m,
          marginVertical: my && my,
          marginHorizontal: mx && mx,
          marginTop: mt && mt,
          marginBottom: mb && mb,
          marginLeft: ml && ml,
          marginRight: mr && mr,

          padding: p && p,
          paddingVertical: py && py,
          paddingHorizontal: px && px,
          paddingTop: pt && pt,
          paddingBottom: pb && pb,
          paddingLeft: pl && pl,
          paddingRight: pr && pr,

          borderWidth: bw && bw,
          borderColor: bc && bc,

          // height: h ? h : 100,
          width: w && w,

          backgroundColor: bg && bg,
          borderRadius: br && br,

          alignItems: "center",
          elevation: shadow && shadow,

          ...style,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Dbutton;

const styles = StyleSheet.create({
  // button: {
  //   marginVertical: 10,
  //   padding: 10,
  //   backgroundColor: "#dcdcdc",
  //   // width: "85%",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
