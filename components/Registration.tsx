import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

interface RegisterFormData {
  names: string;
  email: string;
  password: string;
}
export default function Registration() {
    const [formData, setFormData] = useState<RegisterFormData>({ names: '', email: '', password: '' });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMismatch, setPasswordMismatch] = useState('');
    const [requiredFields, setRequiredFields] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [invalidEmail, setInvalidEmail] = useState('');

    const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

    const handleRegistration = async() => {
        
        // Validate input fields
        if (!formData.names || !formData.email || !formData.password || !confirmPassword) {
            setSuccess('');
            setPasswordMismatch('');
            setError('');
            setInvalidEmail('');
            setRequiredFields('All Fields are required !');
            return;
        }
        if (!validateEmail(formData.email)) {
           setSuccess('');
           setRequiredFields('');
           setPasswordMismatch('');
            setError('');
           setInvalidEmail('Invalid email address!');
           return;
        }

        if (formData.password !== confirmPassword) {
            setSuccess('');
            setRequiredFields('');
            setInvalidEmail('');
            setError('');
            setPasswordMismatch('Password Mismatches !');
            return;
        }

         try {
            const response = await axios.post('https://todo-app-qw91.onrender.com/users/register', {
                formData
            });
             if (response.status === 200) {
                setConfirmPassword('');
                setRequiredFields('');
                setPasswordMismatch('');
                setError('');
                setFormData({ names: '', email: '', password: '' });
                setSuccess('Registration Done Successfully !');
             }
             else {
                 setConfirmPassword('');
                 setRequiredFields('');
                 setPasswordMismatch('');
                 setSuccess('');
                 setError('Registration Failed !');
             }
         } catch (error) {
            setConfirmPassword('');
            setRequiredFields('');
            setPasswordMismatch('');
            setSuccess('');
            setError('Registration Failed!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registration</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={formData.names} onChangeText={(text) => setFormData({ ...formData, names: text })}
                autoCapitalize="words"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={formData.email}
                onChangeText={(text) => setFormData({ ...formData, email: text })}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={formData.password}
                onChangeText={(text) => setFormData({ ...formData, password: text })}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            {requiredFields && <Text style={styles.error}>{requiredFields}</Text>}
            {invalidEmail && <Text style={styles.error}>{invalidEmail}</Text>}
            {passwordMismatch && <Text style={styles.error}>{passwordMismatch}</Text>}
            {error&& <Text style={styles.error}>{ error}</Text>}
            {success && <Text style={styles.success}>{ success}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleRegistration}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <Text style={styles.account}>Already have an account ? Login</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 30,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    account: {
        fontSize: 18,
        marginTop:20
    },
    error: {
        fontSize: 18,
        color:'red'
    },
    success: {
        fontSize: 18,
        color:'green'
    }
});
