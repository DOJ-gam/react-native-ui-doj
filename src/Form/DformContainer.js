import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const DformContainer = ({ children, style }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        // margin: 10,
        ...style,
      }}
    >
      <TouchableWithoutFeedback style={{ flex: 1 }}>
        <View>{children}</View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default DformContainer;

// here
export const DformData = (values) => {
  const [formValues, setFormValues] = useState({
    ...values,
  });

  const handleFormValueChange = (formInput, value) => {
    setFormValues({
      ...formValues,
      [formInput]: value,
    });
  };
  return [formValues, handleFormValueChange, setFormValues];
};

const styles = StyleSheet.create({});
