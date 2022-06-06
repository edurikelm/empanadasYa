import { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import {
  Button,
  Card,
  FAB,
  Modal,
  Paragraph,
  Portal,
  Provider,
  Surface,
  Text,
  Title,
} from "react-native-paper";
import React from "react";
import AgregarPedidoModal from "../components/Modal/AgregarPedidoModal";

const HomeScreen = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <View style={styles.homeContainer}>
      <ScrollView>
        <Surface style={styles.surface}>
          <Card.Content style={{ justifyContent: "center" }}>
            <Title>Cacera</Title>
          </Card.Content>
          <Card.Content>
            <Paragraph>15 Pino</Paragraph>
          </Card.Content>
          <Card.Content style={{ justifyContent: "center" }}>
            <Title>$30.000</Title>
          </Card.Content>
        </Surface>
        <Surface style={styles.surface}>
          <Card.Content style={{ justifyContent: "center" }}>
            <Title>Negocio</Title>
          </Card.Content>
          <Card.Content>
            <Paragraph>20 Pino</Paragraph>
            <Paragraph>5 Queso</Paragraph>
          </Card.Content>
          <Card.Content style={{ justifyContent: "center" }}>
            <Title>$35.000</Title>
          </Card.Content>
        </Surface>
        <Surface style={styles.surface}>
          <Card.Content style={{ justifyContent: "center" }}>
            <Title>Vecina</Title>
          </Card.Content>
          <Card.Content>
            <Paragraph>4 Pino</Paragraph>
            <Paragraph>3 Queso</Paragraph>
          </Card.Content>
          <Card.Content style={{ justifyContent: "center" }}>
            <Title>$15.000</Title>
          </Card.Content>
        </Surface>
      </ScrollView>

      <Provider >
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={showModal}
        />
      </Provider>
      <AgregarPedidoModal visible={visible} hideModal={hideModal} containerStyle={containerStyle}/>

      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: -150,
  },
  surface: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    borderRadius: 10,
    padding: 8,
    elevation: 4,
  },
});
