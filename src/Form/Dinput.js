import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

const Dinput = (props) => {
  const {
    onChangeText, //
    handleChange, //
    name, //
    label, //
    flex, //
    items, //
    content, //
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
    text,
    fs,
    bw,
    bc,
    shadow,
    disabled,
    style,
    ...rest
  } = props;
  return (
    <TextInput
      style={{
        flexDirection: flex && flex,
        alignItems: items && items,
        justifyContent: content && content,

        height: h ? h : 30,
        margin: m && 0,
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

        borderBottomWidth: 1,
        borderWidth: bw && bw,
        borderColor: bc ? bc : "#333",

        width: w ? w : "100%",

        backgroundColor: bg ? bg : "transparent",
        borderRadius: br && br,

        alignItems: "center",
        elevation: shadow ? shadow : 0,

        fontSize: fs ? fs : 13,
        color: text ? text : "black",

        ...style,
      }}
      {...rest}
      onChangeText={(text) =>
        handleChange ? handleChange(text) : onChangeText(name, text)
      }
    />
  );
};

export default Dinput;

const styles = StyleSheet.create({});
