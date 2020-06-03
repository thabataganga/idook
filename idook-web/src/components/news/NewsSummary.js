import React from "react";
import * as moment from 'moment'; import 'moment/locale/pt-br'

const NewsSummary = ({news}) => {
  return (
    <div className='card z-depth-0 news-summary'>
        <div className='card-content text-darken-3'>
        <img src={news.url} object-fit= 'cover' class="center"/>
        <p className='black-text'>{moment(news.createdAt.toDate()).calendar()}</p>
            <span className='black-text card-title'>{news.title}</span>
        </div>
    </div>
  );
};

export default NewsSummary;
