import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const hotelData = [
    {
        id: '1',
        name: 'Luxury Hotel',
        description: 'Experience the height of luxury and comfort.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptMU91iSm4EL_W92ryNnMIBcuvpulsGGQfQ&s',
        rating: 4.8,
        price: '₹2000/night',
    },
    {
        id: '2',
        name: 'Beach Resort',
        description: 'Relax at our beautiful beach resort.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNfP1r1Ck7b16JdwZnxX-G6xP_bTOYHE3DcA&s',
        rating: 4.7,
        price: '₹1800/night',
    },
    {
        id: '3',
        name: 'City Hotel',
        description: 'Stay in the heart of the city.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlo-91dLs4_r9U-91ewM0NbLRaigiaRD4-5w&s',
        rating: 4.5,
        price: '₹1500/night',
    },
    {
        id: '4',
        name: 'Countryside Inn',
        description: 'A serene escape in the countryside.',
        image: 'https://i.pinimg.com/736x/e1/0b/4e/e10b4e68413932968ffb0a4ee90b1719.jpg',
        rating: 4.6,
        price: '₹1200/night',
    },
];

const HomeScreen = () => {
    const [favorites, setFavorites] = useState({}); // Store the favorite state for each hotel

    const toggleFavorite = (id) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [id]: !prevFavorites[id], // Toggle favorite state for the specific hotel
        }));
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.locationContainer}>
                    <MaterialIcons name="location-on" size={24} color="#FF6347" />
                    <Text style={styles.locationText}>Chennai, India</Text>
                </View>
                <TouchableOpacity style={styles.notificationIcon}>
                    <Ionicons name="notifications-outline" size={24} color="#FF6347" />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Discover Amazing Hotels</Text>
            <FlatList
                data={hotelData}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <View>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <TouchableOpacity
                                style={styles.heartIcon}
                                onPress={() => toggleFavorite(item.id)}
                            >
                                <Ionicons
                                    name={favorites[item.id] ? 'heart' : 'heart-outline'}
                                    size={28}
                                    color={favorites[item.id] ? '#FF6347' : '#fff'}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.hotelName}>{item.name}</Text>
                            <Text style={styles.hotelDescription}>{item.description}</Text>
                            <View style={styles.footer}>
                                <Text style={styles.rating}>{item.rating} ⭐</Text>
                                <Text style={styles.price}>{item.price}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 20,
        paddingTop: 50, // For better padding at the top
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 5,
    },
    notificationIcon: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#e3e3e3',
        elevation: 3,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 15,
        elevation: 5, // Increased shadow depth
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
    },
    image: {
        width: '100%',
        height: 200,
    },
    heartIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#00000050', // Semi-transparent background
        padding: 8,
        borderRadius: 25,
    },
    cardContent: {
        padding: 15,
    },
    hotelName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    hotelDescription: {
        fontSize: 14,
        color: '#666',
        marginVertical: 5,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    rating: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFA500',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF6347',
    },
});

export default HomeScreen;