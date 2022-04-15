import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const DformContainer = (props) => {
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
    <ScrollView
      contentContainerStyle={{
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
        borderRadius: br && br,
        borderTopLeftRadius: btlr && btlr,
        borderTopRightRadius: btrr && btrr,
        borderBottomLeftRadius: bblr && bblr,
        borderBottomRightRadius: bbrr && bbrr,

        elevation: shadow && shadow,

        ...style,
      }}
      {...rest}
    >
      <TouchableWithoutFeedback>
        <View>{children}</View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default DformContainer;

export const DformData = (values) => {
  const [formValues, setFormValues] = useState({
    ...values,
  });
  const [errors, setErrors] = useState({});
  // let validated = true;
  const handleFormValueChange = (formInput, value) => {
    setFormValues({
      ...formValues,
      [formInput]: value,
    });
  };

  const handleError = (field, message) => {
    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  return [
    formValues,
    setFormValues,
    handleFormValueChange,
    errors,
    handleError,
  ];
};

const styles = StyleSheet.create({});
