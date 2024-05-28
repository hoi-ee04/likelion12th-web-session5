import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { recAtom } from "../../atoms/recAtom";
import { useRecoilValue } from "recoil";
import { darkModeState } from "../../atoms/darkModeAtom";

const BoxofficeRank = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const setRecMovies = useSetRecoilState(recAtom);
  const isDarkMode = useRecoilValue(darkModeState);

  const handleMovieClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const formatNumber = (num) => {
    const formattedNum = num / 10000;
    return formattedNum.toFixed(1) + "만명";
  };

  const fetchMovies = async () => {
    try {
      const options = {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
        },
      };
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?language=ko-KR",
        options
      );
      setMovies(data.results);
      setRecMovies(data.results);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Content darkmode={isDarkMode ? 1 : 0}>
        <p>박스오피스 순위</p>
        <MovieRank>
          {movies.map((movie) => (
            <MovieItem key={movie.id}>
              <MovieImage
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                onClick={() => handleMovieClick(movie.id)}
              />
              <MovieDescription>
                <MovieTitle darkmode={isDarkMode ? 1 : 0}>
                  {movie.title}
                </MovieTitle>
                <MovieInfo>
                  {new Date(movie.release_date).getFullYear()} ·{" "}
                  {movie.original_language.toUpperCase()}
                </MovieInfo>
                <AudienceInfo>
                  예매율 {movie.vote_average} · 누적 관객{" "}
                  {formatNumber(movie.popularity)}
                </AudienceInfo>
              </MovieDescription>
            </MovieItem>
          ))}
        </MovieRank>
      </Content>
    </>
  );
};

const Content = styled.div`
  margin: 0 30px;
  padding: 70px 0;
  height: 600px;
  p {
    color: ${(props) => (props.darkmode ? "#000000" : "#d3d3d3")};
    font-size: 20px;
    font-weight: bolder;
  }
`;

const MovieRank = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  margin-top: 10px;
  width: 100%;
  justify-content: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MovieItem = styled.div`
  display: inline-block;
`;

const MovieImage = styled.img`
  width: 210px;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
  margin: 0 7px;
  cursor: pointer;
`;

const MovieDescription = styled.div`
  font-size: 14px;
  margin-left: 7px;
  line-height: 25px;
`;

const MovieTitle = styled.div`
  font-weight: bold;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 210px;
  word-break: break-all;
  color: ${(props) => (props.darkmode ? "#000000" : "#d3d3d3")};
`;

const MovieInfo = styled.div`
  color: #4b4a4a;
`;

const AudienceInfo = styled.div`
  font-size: 12px;
  color: #6b6b6b;
`;

export default BoxofficeRank;
