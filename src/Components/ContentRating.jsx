
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        total_ratings : 0,
        handleLikes:()=>{
            this.setState((prevState)=>({
                likes: prevState.likes + 1,
                total_ratings: prevState.total_ratings + 1
            }))
        },  
        handleDislikes:()=>{
            this.setState((prevState)=>({
                dislikes: prevState.dislikes + 1,
                total_ratings: prevState.total_ratings + 1
            }))
            
        },
    };
}
  render() {
    return (

     <div className = "content-rating">
        <p>
            C'est mon contenu personnalisé
        </p>
        <div className='rating-buttons'>
            <button className="like-button" onClick={this.state.handleLikes}>Bouton Likes ({this.state.likes})</button>
            <button className="dislike-button" onClick={this.state.handleDislikes}>Bouton Dislikes ({this.state.dislikes})</button>
        </div>
        <p>
            Total Ratings ({this.state.total_ratings})
        </p>
     </div>

    );
  }
}

export default ContentRating;
