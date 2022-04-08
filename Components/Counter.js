import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/counterSlice";

export default () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <View>
        <Button title="click" onPress={() => dispatch(increment())}>
          Increment
        </Button>
        <Text>{count}</Text>
        <Button title="click" onPress={() => dispatch(decrement())}>
          Decrement
        </Button>
      </View>
    </View>
  );
};
