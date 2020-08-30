import React from 'react';
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='キーワード検索' type='text' />
      </div>

      <div className='widgets__widgetContainer'>
        <h2>何が起こっていますか?</h2>

        <TwitterTweetEmbed tweetId={'1223068566645161984'} />

        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='digiangler'
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={'https://twitter.com/digiangler'}
          options={{ text: '#reactjs is awesome', via: 'digiangler' }}
        />
      </div>
    </div>
  );
}

export default Widgets;
