import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            {/* Profile Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons name="arrow-back-outline" size={28} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profile</Text>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons name="settings-outline" size={28} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Profile Info */}
            <View style={styles.profileContainer}>
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
                    }}
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>Deva Vinoth</Text>
                <Text style={styles.profileEmail}>deva.vinoth@example.com</Text>
            </View>

            {/* Buttons */}
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <FontAwesome5 name="user-edit" size={24} color="#fff" />
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Ionicons name="lock-closed-outline" size={24} color="#fff" />
                    <Text style={styles.buttonText}>Privacy Settings</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Ionicons name="notifications-outline" size={24} color="#fff" />
                    <Text style={styles.buttonText}>Notifications</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.logoutButton}>
                    <Ionicons name="log-out-outline" size={24} color="#FF6347" />
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FF6347',
        paddingVertical: 15,
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    icon: {
        padding: 10,
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: 40,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: '#088F8F',
    },
    profileName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 10,
    },
    profileEmail: {
        fontSize: 16,
        color: '#666',
    },
    buttonsContainer: {
        marginTop: 40,
        paddingHorizontal: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF6347',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FF6347',
    },
    logoutButtonText: {
        color: '#FF6347',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
    },
});

export default ProfileScreen;