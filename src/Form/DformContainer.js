import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import React from "react";

const DformContainer = ({ children, style }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        // alignItems: "center",
        justifyContent: "center",
        margin: 10,
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

const styles = StyleSheet.create({});
