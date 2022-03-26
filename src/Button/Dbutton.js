import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

const Dbutton = (props) => {
  const {
    flex, //
    items, //
    content, //
    bbw, //
    btw, //
    bbc, //
    btc, //
    blw, //
    brw, //
    blc, //
    brc, //
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
    h,
    ...rest
  } = props;

  // const rest2 = rest.replace(rest, '"([a-zA-Z]w*)"(?=:');
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          flexDirection: flex && flex,
          alignItems: items && items,
          justifyContent: content && content,

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
          borderTopWidth: btw && btw,
          borderTopColor: btc && btc,
          borderBottomWidth: bbw && bbw,
          borderBottomColor: bbc && bbc,
          borderLeftWidth: blw && blw,
          borderLeftColor: blc && blc,
          borderRightWidth: brw && brw,
          borderRightColor: brc && brc,

          height: h && h,
          width: w && w,

          backgroundColor: bg && bg,
          borderRadius: br && br,

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
