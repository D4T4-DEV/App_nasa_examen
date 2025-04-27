import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "./types";
import HomeScreen from "@/presentation/screens/HomeScreen";
import TabsStack from "./stacks/TabsStack";
import DrawerStack from "./stacks/DrawerStack";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'NASA APP' }} />
            <Stack.Screen name="Apod" component={TabsStack} options={{ title: 'Explorando APOD' }} />
            <Stack.Screen name="Epic" component={DrawerStack} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}