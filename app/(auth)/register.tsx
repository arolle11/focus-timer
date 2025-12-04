import { router } from "expo-router";
import {
  CheckSquare,
  ChevronLeft,
  Eye,
  EyeOff,
  Square,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Button from "../../components/Button";
import { Colors } from "../../constants/Colors";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Navigate to tabs on successful login
      router.replace("/login");
    }, 1500);
  };

  const handleTermsAndConditions = () => {
    Alert.alert(
      "Terms and Conditions",
      "Terms and conditions would be displayed here"
    );
  };

  const handleSignUp = () => {
    router.replace("/login");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.content}>
          <Pressable onPress={() => router.back()}>
            <ChevronLeft size={24} color={Colors.secondary} />
          </Pressable>
          <Text style={styles.title}>Join Focus Timer Today</Text>
          <Text style={styles.subtitle}>
            Join thousands who are turning distractions into deep work.
          </Text>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor={Colors.secondary}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  placeholderTextColor={Colors.secondary}
                />
                <Pressable
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                >
                  {showPassword ? (
                    <EyeOff size={20} color={Colors.secondary} />
                  ) : (
                    <Eye size={20} color={Colors.secondary} />
                  )}
                </Pressable>
              </View>
            </View>

            <View style={styles.termsContainer}>
              <Pressable onPress={() => setAgreedToTerms(!agreedToTerms)}>
                {agreedToTerms ? (
                  <CheckSquare size={20} color={Colors.primary} />
                ) : (
                  <Square size={20} color={Colors.secondary} />
                )}
              </Pressable>
              <Text style={styles.forgotPassword}>
                I agree to the{" "}
                <Pressable onPress={handleTermsAndConditions}>
                  <Text style={styles.termsAndConditionsLink}>
                    terms and conditions
                  </Text>
                </Pressable>
              </Text>
            </View>

            <Button
              title="Register"
              onPress={handleRegister}
              loading={loading}
              disabled={loading}
            />

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Already have an account? </Text>
              <TouchableWithoutFeedback onPress={handleSignUp}>
                <Text style={styles.signupLink}>Sign In</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    padding: 20,
    // justifyContent: "center",
    marginTop: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.text,
    textAlign: "left",
    marginBottom: 8,
    marginTop: 14,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.secondary,
    textAlign: "left",
    marginBottom: 40,
  },
  form: {
    gap: 24,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.text,
    marginLeft: 4,
  },
  input: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: Colors.text,
  },
  passwordInputContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    padding: 16,
    paddingRight: 48,
    fontSize: 16,
    color: Colors.text,
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    padding: 4,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
  },
  forgotPassword: {
    fontSize: 14,
    color: Colors.secondary,
    fontWeight: "600",
    flex: 1,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signupText: {
    fontSize: 14,
    color: Colors.secondary,
  },
  signupLink: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "600",
  },
  termsAndConditionsLink: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "600",
  },
});
