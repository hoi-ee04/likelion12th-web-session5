import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { recAtom } from "../atoms/recAtom";
import graph from "../assets/image/review_graph.png";
import stars from "../assets/image/star_review.png";
import plus from "../assets/image/icon_plus.png";
import pencil from "../assets/image/icon_pencil.png";
import eye from "../assets/image/icon_eye.png";
import etc from "../assets/image/icon_etc.png";

const Detail = () => {
  const { pageId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const topRatedMovies = useRecoilValue(recAtom);

  const handleMovieClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const fetchMovie = async (id) => {
    try {
      const options = {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
        },
        params: {
          language: "ko-KR",
        },
      };
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}`,
        options
      );
      setMovie(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchVideos = async (id) => {
    try {
      const options = {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
        },
        params: {
          language: "ko-KR",
        },
      };
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        options
      );
      setVideos(data.results);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleScroll = (e) => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetchMovie(pageId);
    fetchVideos(pageId);
  }, [pageId]);

  if (loading) {
    return <Loading>로딩중...</Loading>;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  if (!movie) {
    return (
      <>
        <AbsenceUrl>이 URL은 존재하지 않는 URL입니다.</AbsenceUrl>
      </>
    );
  }
  return (
    <>
      <SceneImg
        bgimage={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
      >
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieInfo>{movie.original_title}</MovieInfo>
        <MovieInfo>
          {new Date(movie.release_date).getFullYear()} ·{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </MovieInfo>
        <MovieInfo>
          {Math.floor(movie.runtime / 60) +
            "시간 " +
            (movie.runtime % 60) +
            "분"}{" "}
        </MovieInfo>
        <AudienceInfo>
          예매순위 {movie.popularity}위({movie.percent}) · 누적 관객{" "}
          {movie.popularity + "명"} · 평점 {(movie.vote_average / 2).toFixed(1)}
        </AudienceInfo>
      </SceneImg>
      <MovieReview>
        <PosterWrapper>
          <img
            src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
            alt="영화 포스터"
          />
          <p>별점 그래프</p>
          <GraphContent>
            <h4>평균 ★{(movie.vote_average / 2).toFixed(1)}</h4>
            <p>({movie.vote_count}명)</p>
          </GraphContent>
          <img src={graph} alt="리뷰 그래프 사진"></img>
        </PosterWrapper>
        <ReviewWrapper>
          <RatingWrapper>
            <StarRating>
              <img src={stars} alt="별점" />
              <p>평가하기</p>
            </StarRating>
            <RateAverage>
              <AverageStar>{(movie.vote_average / 2).toFixed(1)}</AverageStar>
              <p>평균 별점({movie.vote_count}명)</p>
            </RateAverage>
          </RatingWrapper>
          <Grayline />
          <Reaction>
            <ReactionButton>
              <img src={plus} alt="보고싶어요 버튼" />
              <p>보고싶어요</p>
            </ReactionButton>
            <ReactionButton>
              <img src={pencil} alt="코멘트 버튼" />
              <p>코멘트</p>
            </ReactionButton>
            <ReactionButton>
              <img src={eye} alt="보는 중 버튼" />
              <p>보는 중</p>
            </ReactionButton>
            <ReactionButton>
              <img src={etc} alt="더보기 버튼" />
              <p>더보기</p>
            </ReactionButton>
          </Reaction>
          <Grayline />
          <MovieIntro>{movie.overview}</MovieIntro>
        </ReviewWrapper>
      </MovieReview>
      <Video>
        <h3>동영상</h3>
        <VideoList>
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=` + video.key}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`https://img.youtube.com/vi/` + video.key + `/0.jpg`}
                alt={video.name}
              />
              <p>{video.name}</p>
            </a>
          ))}
        </VideoList>
      </Video>
      <RecommendedSection>
        <h3>추천작</h3>
        <RecommendedMovies>
          {topRatedMovies.map((movie) => (
            <RecMovieItem key={movie.id} onClick={handleScroll}>
              <RecMovieImg
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                onClick={() => handleMovieClick(movie.id)}
              />
              <RecMovieInfo>
                <RecMovieTitle>{movie.title}</RecMovieTitle>
                <RecMovieStar>평균 ★ {movie.vote_average}</RecMovieStar>
              </RecMovieInfo>
            </RecMovieItem>
          ))}
        </RecommendedMovies>
      </RecommendedSection>
    </>
  );
};

const RecommendedSection = styled.div`
  margin: 50px 20px;
  p {
    font-size: 20px;
    font-weight: bolder;
  }
`;

const RecommendedMovies = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  margin-top: 10px;
  width: 95%;
  justify-content: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const RecMovieItem = styled.div`
  display: inline-block;
`;

const RecMovieTitle = styled.div`
  font-weight: bold;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 210px;
  word-break: break-all;
`;

const RecMovieStar = styled.div`
  font-size: 12px;
  color: #6b6b6b;
`;

const RecMovieImg = styled.img`
  width: 210px;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #ececec;
  margin: 0 5px;
  cursor: pointer;
`;

const RecMovieInfo = styled.div`
  font-size: 14px;
  margin-left: 7px;
  line-height: 25px;
`;

const Loading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 800px;
`;

const Error = styled.h1`
  text-align: center;
  margin-top: 20px;
  color: red;
`;

const Video = styled.div`
  margin: 20px;
`;

const VideoList = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-start;
  &::-webkit-scrollbar {
    display: none;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    img {
      width: 430px;
      margin: 0 7px;
    }
    p {
      margin: 0 0 0 7px;
      font-size: 15px;
      color: #7e7e7e;
    }
  }
`;

const AbsenceUrl = styled.div`
  margin: 10px;
`;

const ReviewWrapper = styled.div`
  width: 65%;
`;

const PosterWrapper = styled.div`
  margin: 3%;
  flex-direction: column;
  width: 25%;
  img {
    width: 100%;
  }
`;

const GraphContent = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
`;

const Reaction = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReactionButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  img {
    width: 35px;
    margin: 5px;
  }
`;

const MovieReview = styled.div`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  p {
    font-size: 11px;
    color: #7e7e7e;
  }
`;

const RatingWrapper = styled.div`
  height: 16%;
  display: flex;
  justify-content: space-between;
`;

const RateAverage = styled.div`
  display: flex;
  margin: 20px;
  width: 500px;
  flex-direction: column;
  align-items: center;
`;

const AverageStar = styled.div`
  font-size: 40px;
  color: #adadad;
`;

const SceneImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 550px;
  background-image: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.bgimage});
  background-size: cover;
  background-position: center;
`;

const MovieTitle = styled.div`
  font-weight: bold;
  font-size: 33px;
  color: white;
  margin-bottom: 15px;
  margin-left: 30px;
`;

const MovieInfo = styled.div`
  color: white;
  margin-bottom: 8px;
  font-size: 13px;
  margin-left: 30px;
`;

const AudienceInfo = styled.div`
  font-size: 13px;
  color: white;
  margin-top: 8px;
  margin-bottom: 58px;
  margin-left: 30px;
`;

const Grayline = styled.div`
  margin: 15px 0;
  height: 1px;
  background-color: #dadada;
`;

const StarRating = styled.div`
  margin: 20px;
  height: 10%;
  img {
    width: 80%;
  }
  p {
    margin: 0;
    margin-left: 10px;
  }
`;

const MovieIntro = styled.div`
  white-space: pre-wrap;
  margin-top: 20px;
  font-size: 13px;
  color: #7e7e7e;
  line-height: 20px;
`;

export default Detail;
