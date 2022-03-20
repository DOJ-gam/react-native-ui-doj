[Main Page](/README)

# Button Component

- The button component gives you a customizable button

```js
import { Dbutton } from "react-native-ui-doj";
<Dbutton
  m={20}
  p={10}
  bw={1}
  w={"80%"}
  br={10}
  bg="#B90000"
  text="#fff"
  fs={19}
  shadow={2}
  style={{ position: "absolute", bottom: 10 }}
  onPress={handleButton}
>
  Click me
</Dbutton>;
```

# Reference

## Props

### **m**

- sets margin for your component (marginTop, bottom, left, and right)

```html
<Dbutton m={20}> Click me </Dbuttonm>;
```

### **mb**

- sets marginBottom of your botton

```html
<Dbutton mb={5}> Click me </Dbuttonm>;
```

### **mt**

- sets marginTop of your botton

```html
<Dbutton mt={5}> Click me </Dbuttonm>;
```

### **ml**

- sets marginLeft of your botton

```html
<Dbutton ml={15}> Click me </Dbuttonm>;
```

### **mr**

- sets marginRight of your botton

```html
<Dbutton mr={7}> Click me </Dbuttonm>;
```

### **my**

- sets marginTop and marginBottom of your botton

```html
<Dbutton my={10}> Click me </Dbuttonm>;
```

### **mx**

- sets marginLeft and marginRight of your botton

```html
<Dbutton mx={15}> Click me </Dbuttonm>;
```

### **p**

- set the padding of your button

```html
<Dbutton p={15}> Click me </Dbuttonm>;
```

### **pt**

- sets the paddingTop of your button

```html
<Dbutton pt={5}> Click me </Dbuttonm>;
```

### **pb**

- sets the paddingBottom of your button

```html
<Dbutton pb={5}> Click me </Dbuttonm>;
```

### **pl**

- sets the paddingLeft of your button

```html
<Dbutton pl={15}> Click me </Dbuttonm>;
```

### **pr**###

- sets the paddingRight of your button

```html
<Dbutton pr={10}> Click me </Dbuttonm>;
```

**px**

- sets the paddingRight and paddingLeft of your button

```html
<Dbutton px={10}> Click me </Dbuttonm>;
```

### **py**

- sets the paddingTop and paddingBottom of your button

```html
<Dbutton py={15}> Click me </Dbuttonm>;
```

### **w**

- sets the width of your button

```html
<Dbutton w={150}> Click me </Dbuttonm>;
or you can use percentages(Depending on the container)
<Dbutton w={"80%"}> Click me </Dbuttonm>;
```

### **bg**

- sets the backgroundColor of your button

```html
<Dbutton bg="blue"> Click me </Dbuttonm>;
You can use hexadecimals or any other method of assigning colors
<Dbutton bg="#010"> Click me </Dbuttonm>;
```

### **br**

sets the border radius of your button

```html
<Dbutton br={20}> Click me </Dbuttonm>;
```

### **text**

- sets the fontColor of your buttont text

```html
<Dbutton text="white"> Click me </Dbuttonm>;
or
<Dbutton text="#fff"> Click me </Dbuttonm>;
```

### **fs**

- sets the fontSize of your button text

```html
<Dbutton fs={17}> Click me </Dbuttonm>;
```

### **bw**

- sets the borderWidth of your button(you need to set borderColor(bc) props for this to work )

```html
<Dbutton bw={1}> Click me </Dbuttonm>;
```

### **bc**

- sets the borderColor of your button(you need to set borderWidth(bw) props for this to work )

```html
<Dbutton bc="#ccc"> Click me </Dbuttonm>;
```

### **shadow**

- Adds shadow to your button

```html
<Dbutton shadow={1}> Click me </Dbuttonm>;
```

### **disabled**

- pass in true to disable button, else it is no disabled

```html
<Dbutton disabled={true}> Click me </Dbuttonm>;
or
<Dbutton disabled={false}> Click me </Dbuttonm>;
or you can skip the prop(it is false by default)
```

### **style**

- You can add your very own react native styles by adding the style object as a prop
- sets marginBottom of your botton

```html
<Dbutton  style={{ position: "absolute", bottom: 10 }}> Click me </Dbuttonm>;
```

### **onPress**

- You pass in a function to handle what will happen when button is pressed

```html
<Dbutton  onPress={() => console.log("pressed Dbutton!")}}> Click me </Dbuttonm>;
or you can create your custom function and pass it as props:
<Dbutton  onPress={  onPress={handleButton}}}> Click me </Dbuttonm>;

```
