import { View ,StyleSheet} from 'react-native';
import MoviesScreen from './src/Screens/MoviesSceen/MoviesScreen';
import AppNavigator from './src/components/AppNavigator';
export default function App() {

  
  return (
<View>
<AppNavigator/>
<MoviesScreen/>
</View>
  );
}

const styles = StyleSheet.create({
  app:{
    display:'flex',
    flexDirection:'column',
  }
})


