import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import StorefrontOutLinedIcon from "@material-ui/icons/Storefront";
import SubscriptionsOutLinedIcon from "@material-ui/icons/Subscriptions";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img 
        src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.15752-0/cp0/q90/s118x90/120867589_832565594148308_4298719622504100348_n.jpg?_nc_cat=101&ccb=2&_nc_sid=02e273&_nc_ohc=qtJl7VeVGkkAX8wsImf&_nc_ht=scontent.ftun2-1.fna&tp=28&oh=8b18ca6aaf3fd58b3977565e4901aa69&oe=5FFDF401" 
        alt="" 
        />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon fontsize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontsize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutLinedIcon fontsize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutLinedIcon fontsize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontsize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
