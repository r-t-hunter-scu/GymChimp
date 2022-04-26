import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import CardAndModal from "./CardAndModal";
var styles = StyleSheet.create({
  content: {},
});

export default ({ navigation }) => (
  <ScrollView>
    <CardAndModal />
  </ScrollView>
);
