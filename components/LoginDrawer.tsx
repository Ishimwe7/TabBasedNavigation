import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';


interface LoginFormData {
  email: string;
  password: string;
}
const Login = () => {
    const [formData, setFormData] = useState<LoginFormData>({ email: '', password: '' });
    const [requiredFields, setRequiredFields] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const handleLogin = async() => {
        // Validate input fields
        if (!formData.email || !formData.password) {
            setSuccess('');
            setError('');
            setRequiredFields('All Fields are required !');
        }


        try {
            const response = await axios.post('https://todo-app-qw91.onrender.com/users/login', {
                formData
            });
            console.log(response);
            if (response.status === 200) {
                setRequiredFields('');
                setSuccess('Login Successfully !');
                setError('');
                setFormData({ email: '', password: '' });
                //onLogin();
            }
            else {
                setError('Invalid Credentials ');
            }
        } catch (error) {
            setError('Login Failed!');
            setSuccess('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            
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
            {requiredFields && <Text style={styles.error}>{requiredFields}</Text>}
             {error && <Text style={styles.error}>{error}</Text>}
            {success && <Text style={styles.success}>{ success}</Text>}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.account}>Don't have an account ? Register</Text>
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

export default Login;