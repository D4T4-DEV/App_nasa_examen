import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import ImgSunNewScreen from '@/presentation/screens/epic/ImgSunEarthNewScreen';
import SearchImgSunEarthScreen from '@/presentation/screens/epic/SearchImgSunEarthScreen';
import { Ionicons } from '@expo/vector-icons';
import { AnimatedThemeView } from '@/presentation/components/animated/AnimatedView';
import { useTheme } from '@/presentation/hooks/useTheme';
import { ThemeToggleButton } from '@/presentation/components/ToggleButton';

export type DrawerStackParamList = {
    ImgSunNew: undefined;
    SearchSunImgEarth: undefined;
};

const Drawer = createDrawerNavigator<DrawerStackParamList>();

// Funcion para renderizar los componentes de manera personalizada
// dentro del drawer
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

    const { isDarkContext, darkTheme, lightTheme, } = useTheme();

    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={{
                headerBackground: () => (
                    <AnimatedThemeView
                        isDarkMode={isDarkContext}
                        lightColor={lightTheme.colors.background}
                        darkColor={darkTheme.colors.background}
                        style={{ flex: 1 }}
                    />
                )
            }}
        >
            <Drawer.Screen
                name="ImgSunNew"
                component={ImgSunNewScreen}
                options={{
                    title: 'Imagen solar más actual',
                    drawerIcon: ({ size, color }) =>
                    (
                        <Ionicons name="image" color={color} size={size} />
                    ),
                    headerRight: () => <ThemeToggleButton />,
                }}
            />
            <Drawer.Screen
                name="SearchSunImgEarth"
                component={SearchImgSunEarthScreen}
                options={{
                    title: 'Buscar una imagen solar',
                    drawerIcon: ({ size, color }) =>
                    (
                        <Ionicons name='search' color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}
