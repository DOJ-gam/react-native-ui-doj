[Main Page](/README)

# Dcard

- Our Card component gives you the ability to customize your cards very easily

```js
import { StyleSheet } from "react-native";
import { Dview, Dcard, Dtext } from "react-native-ui-doj";

export default function App() {
  return (
    <Dview style={styles.container}>
      <Dcard mx={10}>
        <Dtext>Hello in card</Dtext>
      </Dcard>
    </Dview>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
});
```
