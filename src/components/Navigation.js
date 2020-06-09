import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Drawer, DrawerItem, Layout, Text, IndexPath } from "@ui-kitten/components";
import { HomeScreen } from "../containers/HomeScreen";
import Icon from "../../assets/icon.png";

const { Navigator, Screen } = createDrawerNavigator();

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">ORDERS</Text>
  </Layout>
);

const DrawerContent = ({ navigation, state }) => (
  <Drawer
    selectedIndex={new IndexPath(state.index)}
    onSelect={(index) => navigation.navigate(state.routeNames[index.row])}
    style={{ paddingTop: 25 }}
    appearance="noDivier"
  >
    <DrawerItem title="Users" style />
    <DrawerItem title="Orders" />
  </Drawer>
);

export const DrawerNavigator = () => (
  <Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    <Screen name="Users" component={HomeScreen} />
    <Screen name="Orders" component={OrdersScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);
// import React from "react";
// import { Drawer, DrawerItem, IndexPath } from "@ui-kitten/components";

// export const DrawerSimpleUsageShowcase = () => {
//   const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

//   return (
//     <Drawer selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
//       <DrawerItem title="Users" />
//       <DrawerItem title="Orders" />
//       <DrawerItem title="Transactions" />
//       <DrawerItem title="Settings" />
//     </Drawer>
//   );
// };
