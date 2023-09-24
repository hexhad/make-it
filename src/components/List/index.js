import { FlatList, RefreshControl } from "react-native";

export default ({data,loading,onRefresh,renderItem,onEndReached,provider}) => {
  return(
    <FlatList
      onEndReached={onEndReached}
      onEndReachedThreshold={3}
      data={data}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={onRefresh} />
      }
    />
  );
}


/**
 * <List
 *         onRefresh={}
 *         loading={false}
 *         data={[1,23,4]}
 *         renderItem={({item})=>{
 *         return <View><Text>{item}</Text></View>
 *       }}/>
 * */
