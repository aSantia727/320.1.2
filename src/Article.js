import React from 'react';

    function Article(props) {
      return (
        <article>
          <img src={props.image} alt={props.alt} />
          <h3>{props.title}</h3>
          <p>{props.content}</p>
          <a href="#">Continues...</a>
        </article>
      );
    }

    export default Article;