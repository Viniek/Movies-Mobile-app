import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Modal, Pressable } from 'react-native';

export default function OverlayExample() {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  
    return (
      <View style={styles.container}>
        <Button title="Show Overlay" onPress={() => setIsOverlayVisible(true)} />
  
        <Modal
          transparent
          visible={isOverlayVisible}
          animationType="fade"
          onRequestClose={() => setIsOverlayVisible(false)}
        >
          <View style={styles.overlay}>
            <View style={styles.modalContent}>
              <Text style={{ color: 'white' }}>This is an overlay!</Text>
              <Pressable onPress={() => setIsOverlayVisible(false)}>
                <Text style={styles.closeText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent background
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: '#333',
      padding: 20,
      borderRadius: 8,
    },
    closeText: {
      marginTop: 10,
      color: '#ffdddd',
    },
  });
    