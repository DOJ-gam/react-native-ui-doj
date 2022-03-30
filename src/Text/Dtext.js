import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Dtext = (props) => {
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
    text, //
    bw, //
    h,
    w,
    br,
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

  // const [customStyles, setCustomStyles] = useState({});
  let customStyles = "";
  const styles = props.class ? props.class.split(" ") : "";
  styles
    ? styles.forEach((element) => {
        // let key = element.split("-")[0];
        // let value = element.split("-")[1];
        // let obj = {key: value}
        // customStyles[key.replaceAll("'", " ")] = value;
        // let temp = element.split("-");
        // for (let i = 0; i < temp.length; i++) {
        //   const element = temp[i];
        // }
        customStyles += ` ${element}`;
      })
    : null;
  // console.log(customStyles);

  return (
    <Text
      style={{
        textAlign: text && text,
        flexDirection: flex && flex,
        alignItems: items && items,
        justifyContent: content && content,

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

        backgroundColor: bg && bg,
        height: h && h,
        width: w && w,
        borderRadius: br && br,

        ...style,
      }}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Dtext;

const styles = StyleSheet.create({});
