import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const { width: screenWidth } = Dimensions.get('window');

const SignUpScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            
            // Navigate to the Home Screen
            navigation.navigate('TabNavigation');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1542060743-1d848b4e5bca' }}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.overlay} />

            <View style={styles.container}>
                <Text style={styles.headerText}>Create Account</Text>

                {/* Name Input */}
                <TextInput
                    placeholder="Full Name"
                    placeholderTextColor="#ccc"
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />

                {/* Email Input */}
                <TextInput
                    placeholder="Email Address"
                    placeholderTextColor="#ccc"
                    keyboardType="email-address"
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />

                {/* Password Input */}
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#ccc"
                    secureTextEntry
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                />

                {/* Re-enter Password */}
                <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor="#ccc"
                    secureTextEntry
                    style={styles.input}
                />

                {/* Sign Up Button */}
                <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                {/* Already have an account */}
                <View style={styles.bottomTextContainer}>
                    <Text style={styles.bottomText}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')} >
                        <Text style={styles.bottomLinkText}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        width: screenWidth,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 60,
    },
    headerText: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: 15,
        borderRadius: 25,
        fontSize: 16,
        color: '#fff',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 20,
    },
    signUpButton: {
        backgroundColor: '#28a745',
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    bottomText: {
        color: '#fff',
        fontSize: 14,
    },
    bottomLinkText: {
        color: '#007AFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default SignUpScreen;