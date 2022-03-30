import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Dtext } from "react-native-ui-doj";

const Dinput = (props) => {
  const {
    validations, //
    onChangeText, //
    handleChange = () => {}, //
    onBlur = () => {}, //
    onFocus = () => {}, //
    error, //
    leftIcon, //
    rightIcon, //
    password, //
    showIcon,
    hideIcon,

    name, //
    label, //
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

  const [focused, setFocused] = useState(false);
  const [hidePassword, setHidePassword] = React.useState(
    password ? true : false
  );

  return (
    <>
      <View
        style={{
          flexDirection: flex ? flex : "row",
          alignItems: items ? items : "center",
          justifyContent: content ? content : "space-between",

          height: h ? h : 50,
          margin: m && m,
          marginVertical: my ? my : 15,
          marginHorizontal: mx && mx,
          marginTop: mt && mt,
          marginBottom: mb && mb,
          marginLeft: ml && ml,
          marginRight: mr && mr,

          padding: p ? p : p == 0 ? 0 : 10,
          paddingVertical: py && py,
          paddingHorizontal: px && px,
          paddingTop: pt && pt,
          paddingBottom: pb && pb,
          paddingLeft: pl && pl,
          paddingRight: pr && pr,

          borderWidth: bw ? bw : bw == 0 ? 0 : 1,
          borderColor: error ? "red" : focused ? "darkblue" : "#333",
          borderTopWidth: btw && btw,
          borderTopColor: btc && btc,
          borderBottomWidth: bbw && bbw,
          borderBottomColor: bbc && bbc,
          borderLeftWidth: blw && blw,
          borderLeftColor: blc && blc,
          borderRightWidth: brw && brw,
          borderRightColor: brc && brc,

          width: w && w,

          backgroundColor: bg ? bg : "transparent",
          borderRadius: br && br,

          alignItems: "center",
          elevation: shadow ? shadow : 0,

          ...style,
        }}
      >
        {leftIcon ? leftIcon : null}
        <TextInput
          style={{
            flex: 1,
            fontSize: fs ? fs : 13,
            color: text ? text : "black",
            marginLeft: leftIcon ? 10 : 0,
            marginRight: rightIcon ? 10 : 0,
          }}
          {...rest}
          secureTextEntry={hidePassword}
          onChangeText={(text) => {
            if (handleChange.legth > 2) {
              handleChange(text);
            } else {
              onChangeText(name, text);
              // console.log(name);
            }
          }}
          onBlur={() => {
            setFocused(false);
            onBlur();
          }}
          onFocus={() => {
            setFocused(true);
            onFocus();
          }}
        />
        {password ? (
          hidePassword ? (
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              {showIcon}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              {hideIcon}
            </TouchableOpacity>
          )
        ) : rightIcon ? (
          rightIcon
        ) : null}
        {error ? (
          <Dtext style={{ position: "absolute", bottom: -20, color: "red" }}>
            {error}
          </Dtext>
        ) : null}
      </View>
    </>
  );
};

export default Dinput;

const styles = StyleSheet.create({});
