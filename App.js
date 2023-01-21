import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#130a04' },
            headerTintColor: '#ffffff',
            contentStyle: { backgroundColor: '#24180f' },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={CategoryScreen}
            options={{ title: 'All Categories' }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

//options={({route, navigation}) =>{
//const catId = route.params.categoryId;
//return{
//title : catId
//}
//}}
const styles = StyleSheet.create({});
