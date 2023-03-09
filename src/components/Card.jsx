import React from 'react';

function Card(props) {
  return (
    <article className="card" onClick={props.onClickCard}>
      <header className="card__header header__title">{props.title}</header>
      <section className="card__main">Content</section>
      <p>{props.children}</p>
    </article>
  );
}

export default Card;
