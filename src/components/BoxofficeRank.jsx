import styled from "styled-components";
import DATA from '../assets/Data.jsx';

const BoxofficeRank = () => {

    const formatNumber = (num) => {
		const formattedNum = num / 10000;
		return formattedNum.toFixed(1) + '만명';
	};
    return (
        <>
        <RankTitle>박스오피스 순위</RankTitle>
        <MovieRank>
            {DATA.map((movie, index) => (
                <MovieItem key={index}>
                    <MovieImage src={movie.img} alt={movie.title} />
                    <MovieDescription>
                        <MovieTitle>{movie.title}</MovieTitle>
						<MovieInfo>{movie.year} · {movie.country}</MovieInfo>
						<AudienceInfo>예매율 {movie.percent}  ·  누적 관객 {formatNumber(movie.audience)}</AudienceInfo>
					</MovieDescription>
				</MovieItem>
			))}
		</MovieRank>
    </>
    )
};


const MovieRank = styled.div`
	overflow-x: auto;
	white-space: nowrap;
	margin: 10px 28px;
    margin-bottom: 50px;
	width: 90%;
    justify-content: center;
`;

const MovieItem = styled.div`
	display: inline-block;
	text-align: start;
`;

const MovieImage = styled.img`
	height: 300px;
	border-radius: 5px;
	border: 1px solid #ececec;
	margin: 0 5px;
`;

const MovieDescription = styled.div`
	font-size: 14px;
	margin-left: 7px;
	line-height: 25px;
`;

const MovieTitle = styled.div`
	font-weight: bold;
	font-size: 15px;
`;

const MovieInfo = styled.div`
	
`;

const AudienceInfo = styled.div`
	font-size: 12px;
	color: #6b6b6b;
`;

const RankTitle = styled.div`
	margin: 30px 0 0 30px;
	font-size: 20px;
	font-weight: bolder;
`;

export default BoxofficeRank;