import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "./types";
import HomeScreen from "@/presentation/screens/HomeScreen";
import TabsStack from "./stacks/TabsStack";
import DrawerStack from "./stacks/DrawerStack";
import SearchImageScreen from '@/presentation/screens/earth/SearchImageScreen';
import NeowsScreen from '@/presentation/screens/neows/NeowsScreen';
import RoverScreen from '@/presentation/screens/rover/RoverScreen';
import ImageModalScreen from '@/presentation/screens/modals/ImageModalScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ animation: 'simple_push' }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'NASA APP' }} />
            <Stack.Screen name="Apod" component={TabsStack} options={{ title: 'Explorando APOD' }} />
            <Stack.Screen name="Earth" component={SearchImageScreen} options={{ title: 'Explorando Earth' }} />
            <Stack.Screen name="Epic" component={DrawerStack} options={{ headerShown: false }} />
            <Stack.Screen name="Neows" component={NeowsScreen} options={{ title: 'Explorando NeoWs' }} />
            <Stack.Screen name="Rover" component={RoverScreen} options={{ title: 'Explorando las imagenes de Rover' }} />
            <Stack.Screen
                name="ImageModalScreen"
                component={ImageModalScreen}
                options={{
                    presentation: 'modal',
                    animation: 'slide_from_bottom',
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}