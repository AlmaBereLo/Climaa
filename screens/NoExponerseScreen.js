import { View, Text, SafeAreaView, Image, StyleSheet, ImageBackground, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@react-navigation/native';
import { theme } from '../theme';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { CalendarDaysIcon, MapPinIcon } from 'react-native-heroicons/solid'
import { debounce } from 'lodash';
import { fetchLocations, fetchWeatherForecast } from '../api/weather';
import { recomendations, weatherImages } from '../constants';
import { useNavigation } from '@react-navigation/native';

const NoExponerseScreen = () => {
    return (
        <ScrollView contentContainerStyle={{ flex: 1, padding: 20, backgroundColor: '#f0f0f0' }}>
            {/* Sección superior (2 flex) */}
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                {/* Aquí puedes agregar una imagen o texto */}
                <Image
                    source={require('../assets/images/sun.png')} // Reemplaza esta imagen según tu necesidad
                    style={{ width: 150, height: 150 }}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>
                    Protección Solar
                </Text>
            </View>

            {/* Sección inferior (6 flex) */}
            <View style={{ flex: 6 }}>
                {/* Aquí puedes agregar más imágenes o texto */}
                <View style={{ backgroundColor: '#ffffff', padding: 20, borderRadius: 10, marginBottom: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                        Recomendación 1
                    </Text>
                    <Text style={{ marginTop: 5 }}>
                        Evita la exposición directa al sol durante las horas pico (10 a.m. - 4 p.m.).
                    </Text>
                </View>
                
                <View style={{ backgroundColor: '#ffffff', padding: 20, borderRadius: 10, marginBottom: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                        Recomendación 2
                    </Text>
                    <Text style={{ marginTop: 5 }}>
                        Usa ropa protectora como sombreros, gafas de sol, y prendas de manga larga.
                    </Text>
                </View>

                {/* Puedes seguir agregando más recomendaciones o contenido aquí */}
            </View>
        </ScrollView>
    );
};

export default NoExponerseScreen;
