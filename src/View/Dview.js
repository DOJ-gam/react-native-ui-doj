import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Dview = (props) => {
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
    h,
    w,
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

    bg,
    br,
    bw,
    bc,
    shadow,
    children,
    style,
    ...rest
  } = props;
  return (
    <View
      style={{
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
      }}
    >
      {children}
    </View>
  );
};

export default Dview;

const styles = StyleSheet.create({});
