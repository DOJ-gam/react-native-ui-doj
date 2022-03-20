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
    text,
    fs,
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
          margin: m ? m : 0,
          marginVertical: my && my,
          marginHorizontal: mx && mx,
          marginTop: mt && mt,
          marginBottom: mb && mb,
          marginLeft: ml && ml,
          marginRight: mr && mr,

          padding: p ? p : 10,
          paddingVertical: py && py,
          paddingHorizontal: px && px,
          paddingTop: pt && pt,
          paddingBottom: pb && pb,
          paddingLeft: pl && pl,
          paddingRight: pr && pr,

          borderWidth: bw ? bw : 0,
          borderColor: bc ? bc : "none",

          // height: h ? h : 100,
          width: w && w,

          backgroundColor: bg ? bg : "#cdcdcd",
          borderRadius: br && br,

          alignItems: "center",
          elevation: shadow ? shadow : 0,

          ...style,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={{ fontSize: fs ? fs : 13, color: text ? text : "black" }}>
        {children}
      </Text>
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
