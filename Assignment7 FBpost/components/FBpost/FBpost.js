import React, { Component } from 'react';
import FBImgGrid from 'react-fb-image-grid';
import Emojis from 'react-facebook-emoji';
import * as moment from 'moment'
import icon from './user.png';
import './FBpost.css';

class FBpost extends Component {

  constructor() {
    super();

    this.state = {

    }

    this.toggleLike = this.toggleLike.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
   return {likes : props.likes} 
  }
  componentDidMount() {
    // document.getElementById("like").onmouseover
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.likes.length !== this.props.likes.length) {
      this.setState({likes : this.props.likes})
    }
  }

  toggleLike() {
    const {likes} = this.state;
    document.getElementById("like2").classList.toggle("blu");
    if (!!likes.length) {
      if (likes[0] === "you") {
        likes.shift();
      } else {
        likes.unshift("you");
      }
    }
    else{
      likes.unshift("you");
    }
    this.setState({ likes });
  }

  render() {
    const { createdBy, avatar, description, images, createdAt } = this.props;
    const {likes} = this.state;

    return (
      <div className="">
        <div className="post">

          <div className="post-header">
            <div className="avatar">
              <img src={avatar} alt=""/>
            </div>

            <div className="details">
              <div className="name">
                {createdBy}
              </div>

              <div className="time">
                {moment(createdAt).fromNow()}
              </div>
            </div>
          </div>

          <div className="post-body">
            <div className="content">
              {description}
            </div>
            <div className="photos">
              <FBImgGrid width={90} images={images} />
            </div>
            <div className="likes">
              {!!likes.length 
              ?
                <span>
                  <i className="fas blu fa-thumbs-up"></i> &nbsp;
                  {likes.length === 1 && <span>{likes[0]} likes this  </span>}
                  {likes.length === 2 && <span>{likes[0]} and {likes[1]} like this  </span>}
                  {likes.length === 3 && <span>{likes[0]}, {likes[1]} and {likes.length-2} others like this. </span>}
                </span>
              :
                null 
              }
            </div>
          </div>

          <div className="post-footer">
            <span onClick={this.toggleLike} id="like2" className="like"><i className="far fa-thumbs-up"></i> Like</span>
            <div onClick={this.toggleLike} id="emojis" className="emojis">
              <Emojis size="sm" type="like"/>
              <Emojis size="sm" type="love"/>
              <Emojis size="sm" type="wow"/>
              <Emojis size="sm" type="yay"/>
              <Emojis size="sm" type="angry"/>
              <Emojis size="sm" type="haha"/>
              <Emojis size="sm" type="sad"/>
            </div>
            <span className="comment"><i className="far fa-comment-alt"></i> Comment</span>
            <span className="share"><i className="fas fa-share"></i> Share</span>
          </div>

        </div>
      </div>
    );
  }
}

FBpost.defaultProps = {
  createdBy : "Anonymous",
  avatar : icon,
  images : [],
  createdAt : new Date().setHours(18),
  likes : ['a','b'],
}

export default FBpost;