import { View, Text } from "react-native";
import { Card, Avatar, IconButton, Button, Provider } from 'react-native-paper'
import BtnMenuCliente from "../components/BtnMenuCliente";


const Clientes = () => {
  return (
    <Provider>
      <View>
        <Card.Title
          title="Cacera"
          subtitle="Card Subtitle"
          left={(props) => <Avatar.Icon {...props} icon="folder" />}
          right={(props) => (
            <BtnMenuCliente/>
          )}
        />
        <Card.Title
          title="Vecina"
          subtitle="Card Subtitle"
          left={(props) => <Avatar.Icon {...props} icon="folder" />}
          right={(props) => (
            <BtnMenuCliente/>
          )}
        />
      </View>
    </Provider>
  );
};

export default Clientes;
