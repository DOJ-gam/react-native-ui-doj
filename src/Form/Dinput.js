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
    showIcon, //
    hideIcon, //
    label, //
    labelStyle, //
    keyboard, //
    capitalize = "none", //
    position = "relative", //

    name, //
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

    fw, //
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
      {label ? <Dtext style={{ ...labelStyle }}>{label}</Dtext> : null}
      <View
        style={{
          // flexDirection: fld && fld,
          // alignItems: ai && ai,
          // justifyContent: jc && jc,
          // flex: flex && flex,
          flexDirection: "row",
          alignItems: "stretch",
          position: position,

          height: h ? h : 50,
          margin: m && m,
          marginVertical: my && my,
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
          borderRadius: br && br,
          borderTopLeftRadius: btlr && btlr,
          borderTopRightRadius: btrr && btrr,
          borderBottomLeftRadius: bblr && bblr,
          borderBottomRightRadius: bbrr && bbrr,

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
            fontWeight: fw && fw,
            marginLeft: leftIcon ? 10 : 0,
            marginRight: rightIcon ? 10 : 0,
          }}
          keyboardType={
            keyboard == "number"
              ? "numeric"
              : keyboard == "text"
              ? "default"
              : keyboard == "phone"
              ? "phone-pad"
              : keyboard == "email"
              ? "email-address"
              : keyboard == "decimal"
              ? "decimal-pad"
              : keyboard == "url"
              ? "url"
              : keyboard
          }
          // keyboardType="decimal-pad"
          autoCapitalize={capitalize}
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
          <Text style={{ position: "absolute", bottom: -20, color: "red" }}>
            {error}
          </Text>
        ) : null}
      </View>
    </>
  );
};

export default Dinput;

const styles = StyleSheet.create({});
