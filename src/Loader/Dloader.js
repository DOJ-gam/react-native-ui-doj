import {
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
  View,
  Text,
  Dimensions,
} from "react-native";
import React from "react";

const Dloader = ({
  visible = false,
  loaderColor,
  text,
  textColor,
  bg,
  w,
  h,
}) => {
  const { width, height } = Dimensions.get("window");
  return (
    visible && (
      <View
        style={[
          styles.container,
          { height: height + 50, width: w ? w : width },
        ]}
      >
        <View
          style={{
            height: 70,
            height: 70,
            backgroundColor: bg ? bg : "white",
            marginHorizontal: 30,
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <ActivityIndicator
            size="large"
            color={loaderColor ? loaderClor : "red"}
          />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 16,
              color: textColor ? textColor : "#333",
            }}
          >
            {text ? text : "Loading..."}
          </Text>
        </View>
      </View>
    )
  );
};

export default Dloader;

const styles = StyleSheet.create({
  container: {
    position: "absolute",

    zIndex: 100,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    // alignItems: "center",
  },
});
