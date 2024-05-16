import styled from "styled-components";
import DATA from '../assets/Data.jsx';
import { useNavigate } from "react-router-dom";

const BoxofficeRank = () => {
	const navigate = useNavigate();

	const handleMovieClick = (id) => {
		navigate(`/detail/${id}`);
	};

	const formatNumber = (num) => {
	const formattedNum = num / 10000;
	return formattedNum.toFixed(1) + '만명';
	};

	return (
		<>
			<Content>
				<p>박스오피스 순위</p>
				<MovieRank>
					{DATA.map((movie, index) => (
						<MovieItem key={index}>
							<MovieImage src={movie.img} alt={movie.title} onClick={() => handleMovieClick(movie.rank)} />
							<MovieDescription>
								<MovieTitle>{movie.title}</MovieTitle>
								<MovieInfo>{movie.year} · {movie.country}</MovieInfo>
								<AudienceInfo>예매율 {movie.percent}  ·  누적 관객 {formatNumber(movie.audience)}</AudienceInfo>
							</MovieDescription>
						</MovieItem>
					))}
				</MovieRank>
			</Content>
		</>
	)
};

const Content = styled.div`
	margin: 100px 0 0 30px;
	p {
		font-size: 20px;
		font-weight: bolder;
	}
`;

const MovieRank = styled.div`
	overflow-x: auto;
	white-space: nowrap;
	margin-top: 10px;
	width: 95%;
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
	border-radius: 5px;
	border: 1px solid #ececec;
	margin: 0 5px;
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
`;

const MovieInfo = styled.div`
	color: #4b4a4a;
`;

const AudienceInfo = styled.div`
	font-size: 12px;
	color: #6b6b6b;
`;

export default BoxofficeRank;