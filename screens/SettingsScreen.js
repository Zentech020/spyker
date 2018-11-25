import React from 'react';
import { ScrollView, StyleSheet, View, Text, Alert } from 'react-native';
import { SearchBar, ListItem, Icon } from 'react-native-elements';

const initialList = [
  {
    name: 'Cola',
    avatar_url:
      'https://davidclarkcause.com/wp-content/uploads/2015/05/Coke-Disc-1024x1024.jpg',
    subtitle: 'Lorem ipsum'
  },
  {
    name: 'Ariel',
    avatar_url:
      'https://vignette.wikia.nocookie.net/logopedia/images/3/3d/Ariel_logo.png/revision/latest?cb=20130210231613',
    subtitle: 'Lorem ipsum'
  }
];

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      list: initialList
    };
  }
  static navigationOptions = {
    title: 'Links'
  };

  onType = e => {
    const { list, searchText } = this.state;

    if (e.trim() == '') {
      this.setState({
        list: initialList
      });
    }

    const newList = list.filter(item => item.name.includes(e));

    this.setState({
      list: newList
    });
  };

  onClear() {
    this.setState({
      list: initialList
    });
  }

  onPressAdd() {
    alert('added item !');
  }

  onPress() {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        { text: 'Add', onPress: () => console.log('OK Pressed') },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        }
      ],
      { cancelable: false }
    );
  }

  render() {
    const { list, searchText } = this.state;

    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
         * content, we just wanted to provide you with some helpful links */}
        <SearchBar
          lightTheme
          onChangeText={this.onType}
          onClear={() => this.onClear()}
          placeholder="Type Here..."
        />

        <View>
          {!!list.length ? (
            list.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={l.name}
                subtitle={l.subtitle}
                rightIcon={<Icon name={'remove'} size={20} />}
                onPressRightIcon={() => this.onPressAdd()}
                onPress={() => this.onPress()}
              />
            ))
          ) : (
            <Text>Empty shizzle</Text>
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
