import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Text, FlatList} from 'react-native';
import styles from './TestAPIStyles';

const dbTitle = [
  {title: 'some title 1'},
  {title: 'some title 2'},
  {title: 'some title 3'},
];

const TestAPIlist = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(response =>
      response
        .json()
        .then(responseData => {
          console.log(responseData);

          if (responseData && responseData.length > 0) {
            setListData(responseData);
          }
        })
        .catch(err => {
          console.log(err);
        }),
    );
  }, []);

  const renderCellItem = ({item, index}) => {
    return (
      <>
        <Text>Title is : {item.title}</Text>
        <Text>User ID is : {item.userId}</Text>
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
    <View>
      <Text>Flat list from fetch:</Text>
      <FlatList
        data={listData}
        renderItem={renderCellItem}
        keyExtractor={(item, index) => index}
        ListEmptyComponent={renderEmptyListMessage}
        ItemSeparatorComponent={renderSeparatorItem}
        ListHeaderComponent={renderHeaderList}
        ListFooterComponent={renderFooterList}
      />
    </View>
  );
};

export default TestAPIlist;

// const FlatListContainer = props => {
//   const renderCellItem = ({item, index}) => {
//     return (
//       <>
//         <Text style={styles.text}>Title: {item?.title}</Text>
//         <FastImageContainer item={item} />
//         {/* <FastImage
//           style={{width: 200, height: 200}}
//           source={{
//             uri: item?.imageURL,
//             headers: {Authorization: 'someAuthToken'},
//             priority: FastImage.priority.normal,
//           }}
//           resizeMode={FastImage.resizeMode.contain}
//         /> */}
//       </>
//     );
//   };

//   const renderEmptyListMessage = () => {
//     return (
//       <View style={styles.listEmpty}>
//         <Text style={styles.text}>No data found</Text>
//       </View>
//     );
//   };

//   const renderSeparatorItem = () => {
//     return <View style={{backgroundColor: 'grey', height: 5}}></View>;
//   };

//   const renderHeaderList = () => {
//     return <View style={{backgroundColor: 'black', height: 5}}></View>;
//   };

//   const renderFooterList = () => {
//     return <View style={{backgroundColor: 'black', height: 5}}></View>;
//   };

//   return (
//     <View style={styles.outputContainer}>
//       <FlatList
//         data={db}
//         renderItem={renderCellItem}
//         ListEmptyComponent={renderEmptyListMessage}
//         ItemSeparatorComponent={renderSeparatorItem}
//         ListHeaderComponent={renderHeaderList}
//         ListFooterComponent={renderFooterList}
//       />
//     </View>
//   );
// };

// export default FlatListContainer;
