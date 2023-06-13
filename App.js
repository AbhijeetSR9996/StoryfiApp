import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, WelcomeScreen} from './src/splashscreen';
import {SignIn, SignUp} from './src/usercredentials';
import HomeScreen from './src/HomeScreen';
import DashBoard from './src/DashBoard';
import MyStory from './src/MyStory';
import ViewStoryScreen from './src/ViewStoryScreen';
import InstructionScreen from './src/InstructionScreen';
import StoriesListScreen from './src/StoriesListScreen';
import CharacterMain from './src/character/CharacterMain';
import CustomTheme from './src/character/CustomTheme';
import Settings from './src/profile/Settings';
import AboutUs from './src/profile/AboutUs';
import AboutHelp from './src/profile/AboutHelp';
import Subscription from './src/profile/Subscription';
import BuyNow from './src/profile/BuyNow';
import Place from './src/character/Place';
import Theme from './src/character/Theme';
import CharacterMain2 from './src/character/CharacterMain2';
import ReviewUs from './src/ReviewUs';
import Faq from './src/Faq';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={DashBoard} />
        <Stack.Screen name="MyStory" component={MyStory} />
        <Stack.Screen name="Instruction" component={InstructionScreen} />
        <Stack.Screen name="StoriesList" component={StoriesListScreen} />
        <Stack.Screen name="ViewStory" component={ViewStoryScreen} />
        <Stack.Screen name="about" component={AboutUs} />
        <Stack.Screen name="aboutHelp" component={AboutHelp} />
        <Stack.Screen name="setting" component={Settings} />
        <Stack.Screen name="subscription" component={Subscription} />
        <Stack.Screen name="buyNow" component={BuyNow} />
        <Stack.Screen name="customTheme" component={CustomTheme} />
        <Stack.Screen name="customizeStory" component={CharacterMain} />
        <Stack.Screen name="theme" component={Theme} />
        <Stack.Screen name="place" component={Place} />
        <Stack.Screen name="characterMain2" component={CharacterMain2} />
        <Stack.Screen name="ReviewUs" component={ReviewUs}/>
        <Stack.Screen name="Faq" component={Faq}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
