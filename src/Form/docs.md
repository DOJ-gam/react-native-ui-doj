[Main Page](/README)

# Dinput

- Our input component gives you the ability to customize your input very easily

```js
import { Dinput } from "react-native-ui-doj";
import React, { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  return (
    <Dinput
      placeholder="Email"
      onChangeText={(text) => setEmail(text)}
      value={email}
      style={styles.input} //you can add your custom styles here
      //you can also add all the props that are available in the react-native TextInput Component:
      autoCapitalize="none"
      keyboardType="email-address"
    />
  );
}
```

## DformContainer:

- you can wrap your input with our formContainer component for it to handle things like:
  - closing the keyboard when you press outside the textInput
  - add a ScrollView to for you if your form content exceeds the height of your screen, and much more
- **USAGE**
  - You have to import the DformContainer,
  - Make sure it wraps everything in your component(it should not be wrapped by anything)
  - You can add your own custom styles to it using the _style prop_ by adding its values as object.

## Practical usecase of our Dinput and DformContainer

```js
import { Dbutton, DformContainer, Dinput } from "react-native-ui-doj";
import React, { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <DformContainer style={styles.container}>
      <Dinput
        placeholder="Email"
        handleChange={(text) => setEmail(text)}
        value={email}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Dinput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => handleChange(text)}
        value={password}
        autoCapitalize="none"
      />
      <Dbutton
        text="white"
        bg="#B90000"
        fs={18}
        br={10}
        p={10}
        onPress={() => handleSubmit({ email, password })}
      >
        Submit
      </Dbutton>
    </DformContainer>
  );
}
```

## Handling Form and Data

- Our form data component helps you manage all the data of your form. You do not need to a state to store your data.
- Below is a sample of how to use it.

```js
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { DformContainer, DformData, Dinput, Dtext } from "react-native-ui-doj";

export default function App() {
  const [username, setUsername] = useState("");
  const [formValues, handleFormValueChange, setFormValues] = DformData({
    email: "",
    password: "",
  });
  return (
    <DformContainer
      style={styles.container}
      onSubmit={() => console.log("first")}
    >
      <Dinput
        my={20}
        placeholder="Email"
        onChangeText={handleFormValueChange}
        name="email"
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
        error={{}}
      />
      <Dinput
        my={20}
        placeholder="Username"
        handleChange={(text) => {
          setUsername(text);
        }}
        name="username"
        value={username}
        style={styles.input}
        autoCapitalize="none"
        error={{}}
      />

      <Dtext>Email: {formValues.email}</Dtext>
      <Dtext>username: {username}</Dtext>
    </DformContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginHorizontal: 20,
  },
});
```

### formValues

- This stores all the values in your form using the _key value pair approach_. example: : **{name:"Omar", gender:"male"}**

### handleFormValueChange

- is a function that you pass as a prop to you Dinput Field and under the hood it will handle your input field's state using the 'name' prop provided or tht input field

### setFormData

- Is a function that you can use to manually edit your form data.

# Reference

## Props

### **handleChange**

- You pass in a function to handle what will happen when text is changed

```html
<Dinput h={20} handleChange={(text) => setEmail(text)}/>
```

### **onChangeText**

- You pass in our handleFormValueChange as a prop to handle your data for you. Note that you will need to pass the "name" prop because it will be used as the key to represent your data for that value

```html
<Dinput h="{20}" name="email" onChangeText="{handleFormValueChange}" />
```

### **h**

- sets height for your input component

```html
<Dinput h="{40}" />;
```

### **m**

- sets margin for your input component (marginTop, bottom, left, and right)

```html
<Dinput m="{20}" />;
```

### **mb**

- sets marginBottom of your input component

```html
<Dinput mb="{5}" />>;
```

### **mt**

- sets marginTop of your input component

```html
<Dinput mt="{5}" />;
```

### **ml**

- sets marginLeft of your input component

```html
<Dinput ml="{15}" />;
```

### **mr**

- sets marginRight of your input component

```html
<Dinput mr="{7}" />;
```

### **my**

- sets marginTop and marginBottom of your input component

```html
<Dinput my="{10}" />;
```

### **mx**

- sets marginLeft and marginRight of your input component

```html
<Dinput mx="{15}" />;
```

### **p**

- set the padding of your input component

```html
<Dinput p="{15}" />;
```

### **pt**

- sets the paddingTop of your input component

```html
<Dinput pt="{5}" />;
```

### **pb**

- sets the paddingBottom of your input component

```html
<Dinput pb="{5}" />;
```

### **pl**

- sets the paddingLeft of your input component

```html
<Dinput pl="{15}" />;
```

### **pr**### **px**

- sets the paddingRight of your input component

```html
<Dinput mr="{10}" />;
```

### **py**

- sets the paddingTop and paddingBottom of your input component

```html
<Dinput py="{15}" />;
```

### **w**

- sets the width of your input component

```html
<Dinput w="{150}" />; or you can use percentages(Depending on the container)
<Dinput w={"80%"}/>;
```

### **bg**

- sets the backgroundColor of your input component

```html
<Dinput bg="blue" />; You can use hexadecimals or any other method of assigning
colors <Dinput bg="#010" />;
```

### **br**

sets the border radius of your input component

```html
<Dinput br="{20}" />;
```

### **text**

- sets the fontColor of your input component text

```html
<Dinput text="white" />; or <Dinput text="#fff" />;
```

### **fs**

- sets the fontSize of your input component text

```html
<Dinput fs="{17}" />;
```

### **bw**

- sets the borderWidth of your input component(you need to set borderColor(bc) props for this to work )

```html
<Dinput bw="{1}" />;
```

### **bc**

- sets the borderColor of your input component(you need to set borderWidth(bw) props for this to work )

```html
<Dinput bc="#ccc" />;
```

### **shadow**

- Adds shadow to your input component

```html
<Dinput shadow="{1}" />;
```

### **style**

- You can add your very own react native styles by adding the style object as a prop
