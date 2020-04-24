import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight, Image, TouchableOpacity } from "react-native";

// Styles
import styles from "./MentionListItemStyles";

export class MentionListItem extends React.PureComponent {
  static propTypes = {
    item: PropTypes.object,
    onSuggestionTap: PropTypes.func,
    editorStyles: PropTypes.object,
    sourceEmpty: PropTypes.any
  };

  onSuggestionTap = (user, hidePanel) => {
    this.props.onSuggestionTap(user);
  };

  render() {
    const { item: user, index, editorStyles, sourceEmpty } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        key={user.id}
        style={[styles.suggestionItem, editorStyles.mentionListItemWrapper]}
        onPress={
          () => {
            console.log("I pressed this user", user);
            return this.onSuggestionTap(user);
          }
        }
      >
        <Image
          source={user && user.avatar ? { uri: user.avatar } : sourceEmpty}
          style={[styles.image, editorStyles.mentionListItemImage]}
          resizeMode={'contain'}
        />

        <View style={[styles.text, editorStyles.mentionListItemTextWrapper]}>
          <Text
            style={[styles.username, editorStyles.mentionListItemUsername]}
          >
            @{user.username}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default MentionListItem;
