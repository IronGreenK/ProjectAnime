import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

class PaginationButtons extends React.Component<{ setPage: any, page: any }> {
  render() {
    let {setPage, page} = this.props;
    return (
        <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingBottom: 20,
            }}>
          <TouchableOpacity
              disabled={page <= 1}
              onPress={() => {
                setPage(page - 1);
              }}
              style={{
                paddingHorizontal: 15,
                paddingVertical: 10,
                backgroundColor: '#22d3ee',
                borderRadius: 5,
              }}>
            <Text style={{color: 'white', fontSize: 18}}>Last Page</Text>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => {
                setPage(page + 1);
              }}
              style={{
                paddingHorizontal: 15,
                paddingVertical: 10,
                backgroundColor: '#22d3ee',
                borderRadius: 5,
              }}>
            <Text style={{color: 'white', fontSize: 18}}>Next Page</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

export default PaginationButtons;
