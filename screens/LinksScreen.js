import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
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

export default class LinksScreen extends React.Component {
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
    const { list } = this.state;

    if (e == '') {
      this.setState({
        list: initialList
      });
    }

    const newList = list.filter(item => item.name.includes(e));

    this.setState({
      list: newList
    });
  };

  clearList() {
    this.setState({
      list: initialList
    });
  }

  onPressAdd() {
    alert('added item !');
  }

  render() {
    const { list } = this.state;

    list.map((li, i) => {
      console.log(i);
    });

    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
         * content, we just wanted to provide you with some helpful links */}
        <SearchBar
          lightTheme
          onChangeText={this.onType}
          onClear={this.clearList}
          onClear={() => this.clearList()}
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
                rightIcon={<Icon name={'add'} size={20} />}
                onPressRightIcon={() => this.onPressAdd()}
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
