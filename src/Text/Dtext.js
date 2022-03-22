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
    bg,
    bc,
    fs,
    fw,
    fc,
    children,
    style,
    ...rest
  } = props;
  return (
    <Text
      style={{
        fontSize: fs && fs,
        fontWeight: fw && fw,
        color: fc && fc,

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

        borderColor: bc && bc,

        backgroundColor: bg && bg,

        elevation: shadow && shadow,

        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export default Dtext;

const styles = StyleSheet.create({});
