import { useState } from "react";
import { View } from "react-native";
import { Button, Menu, Divider, Provider } from "react-native-paper";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const BtnMenuCliente = () => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
      <Menu
        style={{margin: -45}}
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button color="black" style={{ borderRadius: 25 }} onPress={openMenu}>
            <FontAwesome5 name="ellipsis-v" size={20} />
          </Button>
        }
      >
        <Menu.Item onPress={() => {}} title="Item 1" />
        <Menu.Item onPress={() => {}} title="Item 2" />
        <Divider />
        <Menu.Item onPress={() => {}} title="Item 3" />
      </Menu>
  );
};

export default BtnMenuCliente;
