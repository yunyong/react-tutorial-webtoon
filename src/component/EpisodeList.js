import React from 'react';
import {Link} from "react-router-dom";

const EpisodeList = (props) => {
    return (
        <ul className="list_webtoon list_episode">
            { props.episodes.map((episode, index) => (
                <li key={index}>
                    <Link to={`/viewer/${episode.id}`} className="link_webtoon">
                        <img src={episode.thumbnailImage.url} className="img_webtoon" alt={episode.title} />
                        <div className="info_webtoon">
                            <strong className="tit_webtoon">
                                {episode.title}
                            </strong>
                            {`${episode.dateCreated.substr(0,4)}.${episode.dateCreated.substr(4,2)}.${episode.dateCreated.substr(6,2)}`}
                        </div>
                    </Link>
                </li>
            )) }
        </ul>
    )
}

export default EpisodeList;