import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const DtouchableCard = (props) => {
  const {
    onPress,
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
    <TouchableOpacity
      style={{
        // alignItems: "center",
        // justifyContent: "center",
        // padding: 10,
        // borderWidth: 1,
        // width: "80%",
        // marginHorizontal: "10%",
        // elevation: 5,

        backgroundColor: bg ? bg : "#fff",

        height: h && h,
        minHeight: 50,
        margin: m && 10,
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

        borderWidth: bw ? bw : 0,
        borderColor: bc && bc,

        width: w && w,
        minWidth: 100,
        borderRadius: br && br,

        elevation: shadow ? shadow : 5,

        ...style,
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default DtouchableCard;

const styles = StyleSheet.create({});
