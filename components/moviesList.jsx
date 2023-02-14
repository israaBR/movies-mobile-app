import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Movie } from "./movie";
import { MovieDetails } from "./movieDetails";

const API_KEY = "&api_key=310e3cd476067c29ca5424fdb5e04b41";
const URL = "https://api.themoviedb.org/3";
const PATH = "/discover/movie?sort_by=popularity.desc";
const IMG_PATH = "https://image.tmdb.org/t/p/w500/";
const API_URL = URL + PATH + API_KEY;

export const MoviesList = (props) => {
  let [movies, setMovies] = useState([]);

  getMovies(API_URL);

  function getMovies(url) {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data.results);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Movies List</Text>
      <View style={styles.list}>
        <ScrollView>
          <View style={styles.innerList}>
            {movies.map((movie, index) => {
              return (
                <Movie
                  key={movie.id}
                  title={movie.title}
                  image={IMG_PATH + movie.poster_path}
                  description={movie.overview}
                  navigation={props.navigation}
                ></Movie>
              );
            })}
          </View>
        </ScrollView>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: "5%",
    paddingHorizontal: "2%",
  },
  text: {
    flex: 1,
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "monospace",
    color: "#ffffff",
  },
  list: {
    flex: 9,
  },
  innerList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
