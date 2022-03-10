import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Text,
  View,
} from 'react-native';

import Header from '../components/Header';
import Card from '../components/Card';

export default EventList = ({title}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getEvents = async () => {
    try {
      const response = await fetch(
        'https://thedistance.co.uk/wp-content/uploads/2020/01/eventbrite.json',
      );
      const json = await response.json();
      setData(json.events);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Events" />

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={styles.listContainer}
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Card date={item.name.text} start={item.start.local} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listContainer: {
    margin: 20,
  },
});
