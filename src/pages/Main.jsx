import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { recAtom } from "../atoms/recAtom";
import BoxofficeRank from "../components/Main/BoxofficeRank";
import { useRecoilValue } from "recoil";
import { darkModeState } from "../atoms/darkModeAtom";

const Main = () => {
  const setRecMovies = useSetRecoilState(recAtom);
  const isDarkMode = useRecoilValue(darkModeState);

  const fetchTopRatedMovies = async () => {
    try {
      const options = {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
        },
      };
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR",
        options
      );
      setRecMovies(data.results);
    } catch (error) {
      console.error("Error fetching top-rated movies: ", error);
    }
  };

  useEffect(() => {
    fetchTopRatedMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <Background darkmode={isDarkMode ? 1 : 0}>
      <BoxofficeRank />
    </Background>
  );
};

const Background = styled.div`
  background-color: ${(props) => (props.darkmode ? "#fff" : "#292929")};
`;

export default Main;
