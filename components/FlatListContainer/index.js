import React, {useState} from 'react';
import {TouchableOpacity, View, Text, FlatList} from 'react-native';
import styles from './styles';
import {FastImageContainer} from '..';

// import FastImage from 'react-native-fast-image';

import db from '../../db/dbImages';

const FlatListContainer = props => {
  const renderCellItem = ({item, index}) => {
    return (
      <>
        <Text style={styles.text}>Title: {item?.title}</Text>
        <FastImageContainer item={item} />
        {/* <FastImage
          style={{width: 200, height: 200}}
          source={{
            uri: item?.imageURL,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        /> */}
      </>
    );
  };

  const renderEmptyListMessage = () => {
    return (
      <View style={styles.listEmpty}>
        <Text style={styles.text}>No data found</Text>
      </View>
    );
  };

  const renderSeparatorItem = () => {
    return <View style={{backgroundColor: 'grey', height: 5}}></View>;
  };

  const renderHeaderList = () => {
    return <View style={{backgroundColor: 'black', height: 5}}></View>;
  };

  const renderFooterList = () => {
    return <View style={{backgroundColor: 'black', height: 5}}></View>;
  };

  return (
    <View style={styles.outputContainer}>
      <FlatList
        data={db}
        renderItem={renderCellItem}
        ListEmptyComponent={renderEmptyListMessage}
        ItemSeparatorComponent={renderSeparatorItem}
        ListHeaderComponent={renderHeaderList}
        ListFooterComponent={renderFooterList}
      />
    </View>
  );
};

export default FlatListContainer;
