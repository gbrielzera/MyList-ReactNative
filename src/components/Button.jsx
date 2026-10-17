import { PlusCircleIcon } from "phosphor-react-native";
import { TouchableOpacity, StyleSheet } from "react-native";

export default function Button({ ...rest }) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <PlusCircleIcon size={22} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 54,
    height: 54,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#007cb5',
    borderRadius: 6,
  },
});