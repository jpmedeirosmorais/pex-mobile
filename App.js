import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "./src/screens/Onboarding";
import LoginScreen from "./src/screens/Auth/Login";

import { Main } from "./src/screens/Main";
import { TermsConditions } from "./src/screens/Auth/TermsConditions";
import { SignUp } from "./src/screens/Auth/SignUp";

const NativeStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <NativeStack.Screen name="Onboarding" component={OnboardingScreen} />
        <NativeStack.Screen name="Login" component={LoginScreen} />
        <NativeStack.Screen name="SignUp" component={SignUp} />
        <NativeStack.Screen
          name="TermsConditions"
          component={TermsConditions}
        />
        <NativeStack.Screen name="Main" component={Main} />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}
