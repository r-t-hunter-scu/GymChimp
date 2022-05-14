import React from "react";
import { ScrollView, Text } from "react-native";
import Video from "react-native-video";
export default ({ title }) => (
  <ScrollView>
    <Text>{title}</Text>
    <Text>About exercise section: video tutorial, muscles hit, tips?</Text>
    <Video
      source={{
        uri: "https://youtu.be/ZRTNHDd0gL8",
      }}
      style={{ width: 300, height: 300 }}
      controls={true}
      ref={(ref) => {
        this.player = ref;
      }}
    />
  </ScrollView>
);
