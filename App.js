import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import merge from 'deepmerge';

import { DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

import Login from './screens/Inicio/Login';
import Registro from './screens/Inicio/Registro';

import Configuraciones from './screens/Configuraciones';
import HomeScreen from './screens/HomeScreen';
import Pedidos from './screens/Pedidos';
import Clientes from './screens/Clientes';

const Tab = createBottomTabNavigator()

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

export default function App() {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <NavigationContainer theme={CombinedDefaultTheme}>
        <Tab.Navigator
          initialRouteName='Inicio'
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Inicio') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'Pedidos') {
                iconName = focused ? 'calendar' : 'calendar';

              }else if (route.name === 'Configuraciones') {
                iconName = focused ? 'cog' : 'cog';

              }else if (route.name === 'Clientes') {
                iconName = focused ? 'user-alt' : 'user';
              }
              

              // You can return any component that you like here!
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          {/* <Stack.Screen options={{headerShown: false}} name='Login' component={Login} />
          <Stack.Screen options={{headerShown: false}} name='Registro' component={Registro} /> */}
          <Tab.Screen name='Inicio' component={HomeScreen} />
          <Tab.Screen name='Clientes' component={Clientes} />
          <Tab.Screen name='Pedidos' component={Pedidos} />
          <Tab.Screen name='Configuraciones' component={Configuraciones} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
