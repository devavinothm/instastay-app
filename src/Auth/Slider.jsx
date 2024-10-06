import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, Animated, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const data = [
    {
        title: 'Luxury Hotel',
        description: 'Experience the luxury and comfort at our premium hotels.',
        image: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1',
    },
    {
        title: 'Beach Resorts',
        description: 'Stay at top beach resorts with a serene sea view.',
        image: 'https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKAl7LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-sunset-view-maldives-SONEVA0421-74b37591d80441ce87831a41da518e49.jpg',
    },
    {
        title: 'City Hotels',
        description: 'Stay in the heart of the city with everything nearby.',
        image: 'https://images.prestigeonline.com/wp-content/uploads/sites/5/2024/04/10221200/431313100_17874505356049139_5206131842345222780_n-1-1.jpeg',
    },
];

const SliderScreen = () => {
    const navigation = useNavigation();
    const scrollX = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const onScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
    );

    const onMomentumScrollEnd = (event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
        setActiveIndex(index);
    };

    const goToNextSlide = () => {
        if (activeIndex < data.length - 1) {
            scrollViewRef.current.scrollTo({ x: (activeIndex + 1) * screenWidth, animated: true });
        }
    };

    return (
        <View style={styles.container}>
            {/* Image Slider */}
            <Animated.ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                onMomentumScrollEnd={onMomentumScrollEnd}
                scrollEventThrottle={16}
                ref={scrollViewRef}
            >
                {data.map((item, index) => (
                    <View key={index} style={styles.slide}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.overlay} />
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    </View>
                ))}
            </Animated.ScrollView>

            {/* Dots */}
            <View style={styles.dotsContainer}>
                {data.map((_, index) => {
                    const opacity = scrollX.interpolate({
                        inputRange: [
                            (index - 1) * screenWidth,
                            index * screenWidth,
                            (index + 1) * screenWidth,
                        ],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp',
                    });
                    return <Animated.View key={index} style={[styles.dot, { opacity }]} />;
                })}
            </View>

            {/* Next Button */}
            <View style={styles.buttonContainer}>
                {activeIndex === data.length - 1 ? (
                    <TouchableOpacity style={styles.signUpButton} 
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.nextButton} onPress={goToNextSlide}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    slide: {
        width: screenWidth,
        // height: 400,
        position: 'relative',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 20,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 20,
    },
    textContainer: {
        padding: 20,
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,
    },
    title: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        color: '#ddd',
        fontSize: 16,
        marginTop: 10,
        textAlign: 'center',
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#000',
        marginHorizontal: 8,
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    nextButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
    },
    signUpButton: {
        backgroundColor: '#28a745',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SliderScreen;