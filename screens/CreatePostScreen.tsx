import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const CreatePostScreen = ({ navigation, route }: any): React.JSX.Element => {
  const [postText, setPostText] = useState("");
  return (
    // Fragment
    <>
      <TextInput
        multiline
        placeholder="Tell something..."
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="DONE"
        onPress={() => {
          navigation.navigate({
            name: "Home",
            params: { post: postText },
          });
        }}
      />
    </>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({});
