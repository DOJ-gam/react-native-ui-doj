import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

const Dbutton = (props) => {
  const {
    position = "relative", //
    flex, //
    fld, //
    ai, //
    jc, //
    bbw, //
    btw, //
    bbc, //
    btc, //
    blw, //
    brw, //
    blc, //
    brc, //
    btlr, //
    btrr, //
    bblr, //
    bbrr, //
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
          flexDirection: fld && fld,
          alignItems: ai && ai,
          justifyContent: jc && jc,
          flex: flex && flex,
          position: position,

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
          borderTopLeftRadius: btlr && btlr,
          borderTopRightRadius: btrr && btrr,
          borderBottomLeftRadius: bblr && bblr,
          borderBottomRightRadius: bbrr && bbrr,

          elevation: shadow && shadow,

          ...style,
        },
        { ...rest },
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
