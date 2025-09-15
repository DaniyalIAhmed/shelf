import createStyles from '@/assets/styles/signup.style'
import { useTheme } from '@/contexts/ThemeContext'
import { SignupSchema } from '@/lib/schemas'
import { Ionicons } from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ActivityIndicator, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'

const SignupScreen = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SignupSchema>();
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data: SignupSchema) => {
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
        <View style={styles.card}>
          <View style={styles.header}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8}}>
              <AntDesign name="book" style={{marginBottom: 4}} size={24} color={theme.primary} />
              <Text style={styles.title}>Shelf</Text>
            </View>
            <Text style={styles.subtitle}>Share your favourite reads!</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Name</Text>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="person-outline"
                  size={24}
                  color={theme.textPrimary}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  {...register('name')}
                  placeholderTextColor={theme.placeholderText}
                  autoCapitalize='none'
                />
              </View>
            </View>
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
              {isLoading ? <ActivityIndicator size="small" color={theme.white} /> : <Text style={styles.buttonText}>Sign up</Text>}
            </TouchableOpacity>
            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account?</Text>
              <Link href="/(auth)" style={styles.link} asChild>
                <TouchableOpacity>
                  <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignupScreen