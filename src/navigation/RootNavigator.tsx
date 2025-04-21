import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "./types";
import { linking } from "./linking";
import HomeScreen from "@/presentation/screens/HomeScreen";
import TabsStack from "./stacks/TabsStack";
import DrawerStack from "./stacks/DrawerStack";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="APOD" component={TabsStack} options={{ title: 'Explorando APOD' }} />
                <Stack.Screen name="EPIC" component={DrawerStack} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}