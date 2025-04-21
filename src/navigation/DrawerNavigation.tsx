import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import ImgSunNewScreen from '@/presentation/screens/ImgSunEarthNewScreen';
import SearchImgSunEarthScreen from '@/presentation/screens/SearchImgSunEarthScreen';
import { Ionicons } from '@expo/vector-icons';

export type DrawerStackParamList = {
    ImgSunNew: undefined;
    SearchSunImgEarth: undefined;
};

const Drawer = createDrawerNavigator<DrawerStackParamList>();

function DrawerContent(props: DrawerContentComponentProps) {
    const navigation = useNavigation();

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />

            {/* Accion para volver hacia atras */}
            {navigation.canGoBack() && (
                <DrawerItem
                    label="Volver a home"
                    onPress={() => navigation.goBack()}
                    icon={({ color, size }) => (
                        <Ionicons name="arrow-back" color={color} size={size} />
                    )}
                />
            )}
        </DrawerContentScrollView>
    );
}

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen
                name="ImgSunNew"
                component={ImgSunNewScreen}
                options={{
                    drawerIcon: ({ size, color }) =>
                    (
                        <Ionicons name="image" color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name="SearchSunImgEarth"
                component={SearchImgSunEarthScreen}
                options={{
                    drawerIcon: ({ size, color }) =>
                    (
                        <Ionicons name='search' color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}
