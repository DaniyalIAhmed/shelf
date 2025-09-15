import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoginSchema } from '@/lib/schemas'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@/contexts/ThemeContext'
import createStyles from '@/assets/styles/login.style'
import { Link } from 'expo-router'

const LoginScreen = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginSchema>();
    const { theme } = useTheme();
    const styles = createStyles(theme);
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = (data: LoginSchema) => {
        try {
            setIsLoading(true);
            // const response = await axios.post(`${API_URL}/auth/login`, data);
            // console.log(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.container}>
                <View style={styles.topIllustration}>
                    <Image source={require('@/assets/images/login.png')} style={styles.illustrationImage} />
                </View>
                <View style={styles.card}>
                    <View style={styles.formContainer}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons
                                    name="mail-outline"
                                    size={24}
                                    color={theme.textPrimary}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email"
                                    {...register('email')}
                                    placeholderTextColor={theme.placeholderText}
                                    autoCapitalize='none'
                                />
                            </View>
                        </View>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Password</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons
                                    name="lock-closed-outline"
                                    size={24}
                                    color={theme.textPrimary}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    {...register('password')}
                                    placeholderTextColor={theme.placeholderText}
                                    autoCapitalize='none'
                                    secureTextEntry={true}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)} disabled={isLoading}>
                            {isLoading ? <ActivityIndicator size="small" color={theme.white} /> : <Text style={styles.buttonText}>Login</Text>}
                        </TouchableOpacity>
                        <View style={styles.footer}>
                            <Text style={styles.footerText}>Don&apos;t have an account?</Text>
                            <Link href="/(auth)/signup" style={styles.link} asChild>
                                <TouchableOpacity>
                                    <Text style={styles.link}>Sign up</Text>
                                </TouchableOpacity>
                            </Link>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen