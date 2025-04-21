import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationBottomTabs from "../BottomTabsNavigator";

const Stack = createNativeStackNavigator();

export default function TabsStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TabsStack" component={NavigationBottomTabs} />
        </Stack.Navigator>
    );
}