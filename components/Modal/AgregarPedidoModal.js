import { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Modal,
  Provider,
  Portal,
  Text,
  Button,
  Card,
  Title,
  TextInput,
} from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";

const AgregarPedidoModal = ({ visible, hideModal, containerStyle }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Cacera", value: "Cacera" },
    { label: "Negocio", value: "Negocio" },
    { label: "Vecino1", value: "Vecino1" },
    { label: "Vecino2", value: "Vecino2" },
  ]);

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Card.Content>
            <View style={styles.conteinerTitle}>
              <Title>Nuevo Pedido</Title>
            </View>
            <DropDownPicker
              language="ES"
              placeholder="Selecciona un Cliente"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
            <TextInput mode="outlined" label="Valor" />
            <TextInput mode="outlined" label="Cantidad de Pino" />
            <TextInput mode="outlined" label="Cantidad de Napolitana" />
            <Card.Actions style={styles.containerButton}>
              <Button mode="contained" onPress={hideModal}>
                Cancelar
              </Button>
              <Button
                style={styles.buttonNuevo}
                mode="contained"
                onPress={hideModal}
              >
                Nuevo
              </Button>
            </Card.Actions>
          </Card.Content>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default AgregarPedidoModal;

const styles = StyleSheet.create({
  conteinerTitle: {
    alignItems: "center",
    marginBottom: 15,
  },
  containerButton: {
    justifyContent: "flex-end",
    marginTop: 10,
  },
  buttonNuevo: {
    marginStart: 5,
  },
});
