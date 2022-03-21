import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Dcard = (props) => {
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
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        // borderWidth: 1,
        // width: "80%",
        // marginHorizontal: "10%",
        // elevation: 5,

        backgroundColor: "#fff",

        height: h && h,
        minHeight: 50,
        margin: m && 10,
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
        borderColor: bc ? bc : "#333",

        width: w ? w : "25%",
        minWidth: 100,
        borderRadius: br && br,

        elevation: shadow ? shadow : 5,

        ...style,
      }}
    >
      {children}
    </View>
  );
};

export default Dcard;

const styles = StyleSheet.create({});
