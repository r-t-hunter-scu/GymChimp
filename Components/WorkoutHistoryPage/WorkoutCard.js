import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const PastWorkout = [
  {
    Title: "Pull",
    Date: "Friday, April 1",
    TimeAndPRs: {
      Time: "1h 47m",
      TotalWeight: "14480 lbs",
      PRs: "3 PRs",
    },
    Exercises: [
      { Ex: "3 x Incline Row" },
      { Ex: "3 x Lat Pulldown" },
      { Ex: "3 x Seated Row" },
      { Ex: "3 x Pull ups" },
    ],
    BestSets: [
      { Ex: "80 lb x 11" },
      { Ex: "100 lb x 9" },
      { Ex: "220 lb x 10" },
      { Ex: "8 reps" },
    ],
  },
];

export default ({ navigation }) => (
  <View style={styles.card}>
    <Text style={{ color: "#2B2118", fontSize: 20 }}>
      {PastWorkout[0].Title}
      {"\n"}
      {PastWorkout[0].Date}
    </Text>
    <View
      style={
        (styles.card, { flexDirection: "row", justifyContent: "space-between" })
      }
    >
      <Image
        source={require("../../img/time.png")}
        style={{ width: 25, height: 25 }}
      />
      <Text style={{ color: "#2B2118", fontSize: 20 }}>
        {PastWorkout[0].TimeAndPRs.Time}
      </Text>
      <Image
        source={require("../../img/total_weight.png")}
        style={{ width: 25, height: 25 }}
      />
      <Text style={{ color: "#2B2118", fontSize: 20 }}>
        {PastWorkout[0].TimeAndPRs.TotalWeight}
      </Text>
      <Image
        source={require("../../img/badge.png")}
        style={{ width: 25, height: 25 }}
      />
      <Text style={{ color: "#2B2118", fontSize: 20 }}>
        {PastWorkout[0].TimeAndPRs.PRs}
      </Text>
    </View>
    <View
      style={
        (styles.card,
        {
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: 50,
        })
      }
    >
      <Text style={{ color: "#2B2118", fontSize: 20 }}>
        {"Exercises"}
        {PastWorkout[0].Exercises.map((data) => (
          <Text key={data.Ex}>
            {"\n"}
            {data.Ex}
          </Text>
        ))}
      </Text>
      <Text style={{ color: "#2B2118", fontSize: 20 }}>
        {"Best Set"}
        {PastWorkout[0].BestSets.map((data) => (
          <Text key={data.Ex}>
            {"\n"}
            {data.Ex}
          </Text>
        ))}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    alignSelf: "center",
    width: "95%",
    padding: 10,
    margin: 2,
    opacity: 1,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#F9EBD7",
    borderWidth: 2,
    borderColor: "#EFB905",
  },
});
