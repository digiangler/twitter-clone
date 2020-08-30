import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Digi-Angler',
      username: 'digiangler',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        'https://github.com/digiangler/digiangler/blob/master/assets/img/GitHub-Logo.png?raw=true',
    });

    setTweetMessage('');
    setTweetImage('');
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://github.com/digiangler/digiangler/blob/master/assets/img/GitHub-Logo.png?raw=true' />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder='何が起こっていますか?'
            type='text'
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className='tweetBox__imageInput'
          placeholder='オプション：画像のURLを入力してください'
          type='text'
        />

        <Button
          onClick={sendTweet}
          type='submit'
          className='tweetBox__tweetButton'
        >
          ツイート
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
