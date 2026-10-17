import { StyleSheet, TextInput } from "react-native";

export default function Input({ ...rest }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Adicione algo a sua lista"
      placeholderTextColor="#7a7a7a"
      {...rest} // sempre como ultima prop
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 54,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#333',
    padding: 16,
    fontSize: 16,
    color: '#fff',
  },
});