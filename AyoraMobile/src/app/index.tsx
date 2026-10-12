import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>AYORA</Text>
          <Text style={styles.menu}>☰</Text>
        </View>

        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.tagline}>
            DISCOVER. COMPARE. WEAR.
          </Text>

          <Text style={styles.title}>
            Find Fashion That Fits You.
          </Text>

          <Text style={styles.description}>
            Discover fashion from online stores across Nepal in one place.
            Search by your budget, size, style, color, festival, or occasion.
          </Text>

          {/* Search */}
          <View style={styles.searchBox}>
            <TextInput
              style={styles.input}
              placeholder="Dashain outfit under Rs. 5,000"
              placeholderTextColor="#777"
            />

            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
          </View>

          {/* Main Button */}
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>
              Discover Fashion
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>
              Explore Occasions
            </Text>
          </TouchableOpacity>
        </View>

        {/* Discovery Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Fashion Discovery Made Simple
          </Text>

          <Text style={styles.sectionDescription}>
            Find fashion that matches your budget, style and occasion.
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardIcon}>💰</Text>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Shop Your Budget</Text>
              <Text style={styles.cardText}>
                Discover clothing options that fit within your budget.
              </Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardIcon}>🎨</Text>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Search Your Way</Text>
              <Text style={styles.cardText}>
                Search by size, color, style, category and price.
              </Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardIcon}>✨</Text>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Dress for the Occasion</Text>
              <Text style={styles.cardText}>
                Find fashion for festivals, weddings, parties and more.
              </Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardIcon}>⇄</Text>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Compare Your Options</Text>
              <Text style={styles.cardText}>
                Compare styles and prices from different sellers.
              </Text>
            </View>
          </View>
        </View>

        {/* Occasion Section */}
        <View style={styles.occasionSection}>
          <Text style={styles.sectionTitle}>
            What Are You Dressing For?
          </Text>

          <View style={styles.occasionGrid}>
            {[
              'Dashain',
              'Tihar',
              'Teej',
              'Wedding',
              'Party',
              'College',
              'Office',
            ].map((occasion) => (
              <TouchableOpacity
                key={occasion}
                style={styles.occasionButton}
              >
                <Text style={styles.occasionText}>
                  {occasion}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerLogo}>AYORA</Text>
          <Text style={styles.footerText}>
            Discover. Compare. Wear.
          </Text>
          <Text style={styles.copyright}>
            © 2026 AYORA
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fffaf8',
  },

  container: {
    flexGrow: 1,
  },

  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 4,
    color: '#222',
  },

  menu: {
    fontSize: 25,
    color: '#222',
  },

  hero: {
    backgroundColor: '#fbe9e7',
    paddingHorizontal: 24,
    paddingVertical: 55,
    alignItems: 'center',
  },

  tagline: {
    fontSize: 12,
    letterSpacing: 3,
    color: '#7b5e57',
    marginBottom: 18,
    textAlign: 'center',
  },

  title: {
    fontSize: 38,
    lineHeight: 44,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 20,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    textAlign: 'center',
    marginBottom: 28,
  },

  searchBox: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 8,
    marginBottom: 20,
  },

  input: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 15,
    color: '#222',
  },

  searchButton: {
    backgroundColor: '#222',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },

  searchButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  primaryButton: {
    width: '100%',
    backgroundColor: '#222',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },

  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  secondaryButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#222',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },

  secondaryButtonText: {
    color: '#222',
    fontSize: 16,
    fontWeight: 'bold',
  },

  section: {
    paddingHorizontal: 20,
    paddingVertical: 45,
  },

  sectionTitle: {
    fontSize: 27,
    lineHeight: 34,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 10,
  },

  sectionDescription: {
    textAlign: 'center',
    color: '#666',
    fontSize: 15,
    marginBottom: 28,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },

  cardIcon: {
    fontSize: 30,
    marginRight: 17,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 5,
  },

  cardText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },

  occasionSection: {
    backgroundColor: '#f8efeb',
    paddingHorizontal: 20,
    paddingVertical: 45,
  },

  occasionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  occasionButton: {
    width: '48%',
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2,
  },

  occasionText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },

  footer: {
    backgroundColor: '#111',
    alignItems: 'center',
    paddingVertical: 35,
  },

  footerLogo: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 4,
    marginBottom: 5,
  },

  footerText: {
    color: '#bbbbbb',
    fontSize: 14,
  },

  copyright: {
    color: '#777',
    fontSize: 12,
    marginTop: 15,
  },
});