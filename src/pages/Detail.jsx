import { useParams } from "react-router-dom";
import DATA from "../assets/Data";
import styled from "styled-components";
import graph from "../assets/image/review_graph.png";
import stars from "../assets/image/star_review.png";
import plus from "../assets/image/icon_plus.png";
import pencil from "../assets/image/icon_pencil.png";
import eye from "../assets/image/icon_eye.png";
import etc from "../assets/image/icon_etc.png";
import video1_1 from "../assets/image/1_video/1_video1.jpg";
import video1_2 from "../assets/image/1_video/1_video2.jpg";
import video1_3 from "../assets/image/1_video/1_video3.jpg";
import video1_4 from "../assets/image/1_video/1_video4.jpg";
import video1_5 from "../assets/image/1_video/1_video5.jpg";

const Detail = () => {
	const {pageId} = useParams();

	const movie = DATA.find((movie) => movie.rank === parseInt(pageId));

	if (!movie) {
		return (
			<>
				<AbsenceUrl>이 URL은 존재하지 않는 URL입니다.</AbsenceUrl>
			</>
		)
	}

	return (
		<>
			<SceneImg bgImage={movie.scene}>
				<MovieTitle>{movie.title}</MovieTitle>
				<MovieInfo>{movie.original_title}</MovieInfo>
				<MovieInfo>{movie.year} · {movie.genre} · {movie.country}</MovieInfo>
				<MovieInfo>{movie.viewing_time} · {movie.age}</MovieInfo>
				<AudienceInfo>예매순위 {movie.rank}위({movie.percent}) · 누적 관객 {(movie.audience/10000+"만명")}</AudienceInfo>
			</SceneImg>
			<MovieReview>
				<PosterWrapper>
					<img src={movie.img} alt="영화 포스터" />
					<p>별점 그래프</p>
					<content>
						<p1>평균 ★3.0</p1>
						<p>(3.4만명)</p>
					</content>
					<img src={graph} alt='리뷰 그래프 사진'></img>
				</PosterWrapper>
				<ReviewWrapper>
					<RatingWrapper>
						<StarRating>
							<img src={stars} alt='별점' />
							<p>평가하기</p>
						</StarRating>
						<RateAverage>
							<rate>3.0</rate>
							<p>평균 별점(3.4만명)</p>
						</RateAverage>
					</RatingWrapper>
					<Grayline />
					<Reaction>
						<ReactionButton>
							<img src={plus} alt='보고싶어요 버튼' />
							<p>보고싶어요</p>
						</ReactionButton>
						<ReactionButton>
							<img src={pencil} alt='코멘트 버튼' />
							<p>코멘트</p>
						</ReactionButton>
						<ReactionButton>
							<img src={eye} alt='보는 중 버튼' />
							<p>보는 중</p>
						</ReactionButton>
						<ReactionButton>
							<img src={etc} alt='더보기 버튼' />
							<p>더보기</p>
						</ReactionButton>
					</Reaction>
					<Grayline />
					<MovieIntro>{movie.intro}</MovieIntro>
				</ReviewWrapper>
			</MovieReview>
			<Video>
				<p2>동영상</p2>
				<VideoList>
					<a href="https://www.youtube.com/watch?v=pMAPj6WVsT4" >
						<img src={video1_1} alt="메인 예고편" />
						<p>메인 예고편</p>
					</a>
					<a href="https://www.youtube.com/watch?v=1nf0dQFWzcY">
						<img src={video1_2} alt="박지환 '대찬인생' (feat. 장이수) OFFICIAL MV" />
						<p>박지환 '대찬인생' (feat. 장이수) OFFICIAL MV</p>
					</a>
					<a href="https://www.youtube.com/watch?v=M8FDonrEeU4">
						<img src={video1_3} alt="더 강력해진 액션과 유머 극장에서 확인" />
						<p>더 강력해진 액션과 유머 극장에서 확인</p>
					</a>
					<a href="https://www.youtube.com/watch?v=OqfiM8zEzQA">
						<img src={video1_4} alt="4 Characters 영상" />
						<p>4 Characters 영상</p>
					</a>
					<a href="https://www.youtube.com/watch?v=jrQ-pInzXHE">
						<img src={video1_5} alt="티저 예고편" />
						<p>티저 예고편</p>
					</a>
				</VideoList>
			</Video>
		</>
	);
};

const Video = styled.div`
	margin: 20px;
	p2 {
		font-size: 20px;
		font-weight: bolder;
	}
`;

const VideoList = styled.div`
	display: flex;
	overflow-x: auto;
	white-space: nowrap;
	margin-top: 10px;
	width: 100%;
    justify-content: flex-start;
	a {
		cursor: pointer;
		img {
			padding: 20px 0;
			background-color: #000000;
			width: 430px;
			margin: 0 10px;
		}
		p {
			font-size: 11px;
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
	content {
		height: 20px;
		display: flex;
		align-items: center;
	}
	p1 {
		margin-right: 2px;
		font-weight: bold;
	}
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
	rate {
		font-size: 40px;
		color: #adadad;
	}
`;


const SceneImg = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-start;
	width: 100%;
	height: 550px;
	background-image: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(${props => props.bgImage});
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
	font-size: 12px;
	color: white;
	margin-top: 8px;
	margin-bottom: 58px;
	font-size: 13px;
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