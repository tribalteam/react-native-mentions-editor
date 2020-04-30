import React from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, FlatList, View } from "react-native";

import MentionListItem from "../MentionListItem";
// Styles
import styles from "./MentionListStyles";

export class MentionList extends React.PureComponent {
  static propTypes = {
    list: PropTypes.array,
    editorStyles: PropTypes.object,
    isTrackingStarted: PropTypes.bool,
    suggestions: PropTypes.array,
    keyword: PropTypes.string,
    onSuggestionTap: PropTypes.func
  };

  constructor() {
    super();
    this.previousChar = " ";
  }

  renderSuggestionsRow = ({ item }) => {
    return (
        <MentionListItem
          onSuggestionTap={this.props.onSuggestionTap}
          item={item}
          editorStyles={this.props.editorStyles}
          sourceEmpty={this.props.sourceEmpty}
        />
    );
  };

  filterUser = keyword => {
    const list = this.props.list;
    let arr = [];
    for (const item of list) {
      if (
        item.username.toLowerCase().indexOf(keyword.toLowerCase().trim()) !== -1
      ) {
        arr.push(item);
      }
    }
    return arr;
  };

  render() {
    const { props } = this;

    const { keyword, isTrackingStarted, editorStyles } = props;
    const withoutAtKeyword = keyword.substr(1, keyword.length);
    const listSuggest = this.filterUser(withoutAtKeyword)
    const suggestions = listSuggest.length ? listSuggest : this.props.list;

    if (!isTrackingStarted) {
      return null;
    }

    return (
      <FlatList
        style={[styles.mentionsListContainer, editorStyles.mentionsListContainer]}
        keyboardShouldPersistTaps={"always"}
        horizontal={false}
        ListEmptyComponent={
          <View style={styles.loaderContainer}>
            <ActivityIndicator />
          </View>
        }
        enableEmptySections={true}
        data={suggestions}
        keyExtractor={(item, index) => `${item.ref}-${index}`}
        renderItem={rowData => this.renderSuggestionsRow(rowData)}
      />
    );
  }
}

export default MentionList;
