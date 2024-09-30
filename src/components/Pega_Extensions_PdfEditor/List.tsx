import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 5
  },
  bulletPoint: {
    width: 10,
    fontSize: 10
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
    fontFamily: 'Lato'
  }
});

interface ListProps {
  children: React.ReactNode;
}

interface ItemProps {
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => <>{children}</>;

export const Item: React.FC<ItemProps> = ({ children }) => (
  <View style={styles.item}>
    <Text style={styles.bulletPoint}>•</Text>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
);

export default List;
