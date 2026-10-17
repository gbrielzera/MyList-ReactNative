import { StyleSheet, Text, View } from "react-native";

export default function Item({ item }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#454545',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
  },
  itemText: {
    fontSize: 18,
    color: '#fff',
  },
});