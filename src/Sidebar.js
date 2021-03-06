import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function Sidebar() {
  return (
    <div className='sidebar'>
      <TwitterIcon className='sidebar__twitterIcon' />

      <SidebarOption active Icon={HomeIcon} text='ホーム' />
      <SidebarOption Icon={SearchIcon} text='話題を検索' />
      <SidebarOption Icon={NotificationsNoneIcon} text='通知' />
      <SidebarOption Icon={MailOutlineIcon} text='メッセージ' />
      <SidebarOption Icon={BookmarkBorderIcon} text='ブックマーク' />
      <SidebarOption Icon={ListAltIcon} text='リスト' />
      <SidebarOption Icon={PermIdentityIcon} text='プロフィール' />
      <SidebarOption Icon={MoreHorizIcon} text='もっと見る' />

      {/* Button -> Tweet */}
      <Button variant='outlined' className='sidebar__tweet' fullWidth>
        ツイート
      </Button>
    </div>
  );
}

export default Sidebar;
