import { useEffect } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { recAtom } from "../atoms/recAtom";
import BoxofficeRank from "../components/Main/BoxofficeRank";

const Main = () => {
  const setRecMovies = useSetRecoilState(recAtom);

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

  return <BoxofficeRank />;
};

export default Main;
