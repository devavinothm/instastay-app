import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/Home';
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                    iconName = focused ? "home" : "home";
                    color = focused ? "#FF6347" : "#555";
                    return <AntDesign name={iconName} size={size} color={color} />;
                } else if (route.name === "Search") {
                    iconName = focused ? "search" : "search";
                    color = focused ? "#FF6347" : "#555";
                    return <Feather name={iconName} size={30} color={color} />;
                }
            },
            tabBarLabel: ({ focused }) => (
                <Text style={{ fontSize: 12, color: focused ? "#FF6347" : "#777", fontWeight: focused ? "bold" : "normal" }}>{route.name}</Text>
            ),
            tabBarActiveTintColor: "#FF6347",
            tabBarInactiveTintColor: "#000",
            tabBarStyle: {
                backgroundColor: "#FFF",
                borderTopWidth: 0,
                elevation: 10,
                height: 100,
            },
            tabBarItemStyle: {
                paddingVertical: 6,
            },
            tabBarLabelStyle: {
                marginTop: -4,
            },
        })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Search" component={HomeScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

export default TabNavigation;