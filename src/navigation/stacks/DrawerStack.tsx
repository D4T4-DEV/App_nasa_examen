import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigation from "../DrawerNavigation";

const Stack = createNativeStackNavigator();

export default function DrawerStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DrawerStack" component={DrawerNavigation} />
        </Stack.Navigator>
    );
}