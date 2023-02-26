import Header from "./Header";
import Footer from "./Footer";
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import styles from "../styles/style";

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <Header/>
      <Footer/>
    </SafeAreaView>
  );
}