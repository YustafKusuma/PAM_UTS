import 'react-native-gesture-handler';
import Home from './src/Home';
import NoteAdd from './src/NoteAdd';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './src/Header';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Home}
          name="Home"
          options={{
            headerTitle: () => <Header name="Notaking" />,
            headerStyle:{
              backgroundColor:'#3E54AC',
              height:120,
            }
          }}
        />
        <Stack.Screen
          component={NoteAdd}
          name="NoteAdd"
          options={{
            headerTitle: () => <Header name="Tambah Catatan" />,
            headerStyle:{
              backgroundColor:'#3E54AC',
              height:120,
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}