import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import Input from './src/components/Input';
import { useEffect, useState } from 'react';
import Item from './src/components/Item';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@mylist:list'

export default function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  async function handleAddTask() {
    const newList = [...list, task]
    setList(newList);
    setTask('');

    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newList))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect( () => {
    async function getList() {
      try {
        const data = await AsyncStorage.getItem(STORAGE_KEY)
        if (data != null) {
          setList(JSON.parse(data))
        }
      } catch (error) {
        console.error(error)
      }
    }

    getList()
  }, [] )

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image source={require('./src/assets/logo.png')} />
      </View>

      <View style={styles.inputContainer}>
        <Input
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <Button onPress={handleAddTask} />
      </View>

      <View style={styles.itemsCount}>
        <View style={styles.itemCount}>
          <Text style={styles.createdText}>Criadas</Text>

          <View style={styles.badge}>
            <Text style={styles.itemsNumber}>0</Text>
          </View>
        </View>

        <View style={styles.itemCount}>
          <Text style={styles.concludedText}>Concluídas</Text>

          <View style={styles.badge}>
            <Text style={styles.itemsNumber}>0</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={list}
        keyExtractor={(item, index) => (item + index).toString()}
        renderItem={({ item }) => (
          <Item item={item} />
        )}
        contentContainerStyle={{
          paddingVertical: 24,
          paddingHorizontal: 24,
          gap: 8,
        }}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    backgroundColor: '#181818',
    width: '100%',
    height: 180,
    paddingTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    marginTop: -28,
  },
  itemsCount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 20,
  },
  itemCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  createdText: {
    fontSize: 16,
    color: '#00cbce',
    fontWeight: 'bold',
  },
  badge: {
    backgroundColor: '#333',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  itemsNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  concludedText: {
    fontSize: 16,
    color: '#00a3ed',
    fontWeight: 'bold',
  },
});
