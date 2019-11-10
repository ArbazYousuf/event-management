import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';
const DrawerContent = () => {
return (
<Fragment>
<View style={ styles.container }>
<View style={styles.topDrawer}>
<Text style={styles.drawerText}>Top of drawer</Text>
</View>
<View style={styles.bottomDrawer}>
<Text>1. Bottom of Drawer</Text>
<Text>2. Bottom of Drawer</Text>
<Text>3. Bottom of Drawer</Text>
<Text>4. Bottom of Drawer</Text>
</View>
</View>
</Fragment>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#333'
},
drawerText: {
color: '#fff'
},
topDrawer: {
flex: 1,
backgroundColor: '#000',
justifyContent: 'center',
alignContent: 'center',
alignItems: 'center'
},
bottomDrawer: {
flex: 2,
backgroundColor: '#fff',
paddingHorizontal: 15,
paddingVertical: 15
}
});
export default DrawerContent;