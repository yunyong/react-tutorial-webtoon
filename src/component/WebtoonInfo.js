import React from 'react';

const WebtoonInfo = (props) => {
    const webtoon = props.webtoon;
    return (
        <div className="wrap_webtoon">
            <img src={webtoon.thumbnail} className="img_webtoon" alt={webtoon.title} />
            <div className="info_webtoon">
                <strong className="tit_webtoon">{webtoon.title}</strong>
                { webtoon.genre.map((g, index) => (
                    <span key={index} className="txt_genre">{g}</span>
                )) }
                <span className="num_score">평점 : {webtoon.score}</span>
            </div>
        </div>
    )
}

export default WebtoonInfo;