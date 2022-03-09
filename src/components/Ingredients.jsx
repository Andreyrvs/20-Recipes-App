import React, { } from 'react';
import PropTypes from 'prop-types';
// import MyContext from '../context';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function Ingredients({ item }) {
  const recipe = () => {
    const keys = Object.keys(item);
    const myRegex = /strIngredient/gi;
    const filterWithRegex = keys.filter((el) => el.match(myRegex));
    const valores = filterWithRegex.map((el) => item[el]);

    return (
      <section className="d-flex flex-column">
        {valores.map((elemento, index) => (
          elemento
        && (
          <section key={ index }>
            <input type="checkbox" />
            <span
              data-testid={ `${index}-ingredient-step` }
            >
              {elemento}
            </span>
          </section>
        )
        ))}
      </section>
    );
  };

  return (
    <section className="receita">
      <section className="container__image">
        <img
          className="image"
          data-testid="recipe-photo"
          src={ item.strMealThumb }
          alt="strMealThumb"
        />
      </section>
      <section className="container__title-buttons">
        <section className="container__title">
          <span data-testid="recipe-title">{item.strMeal}</span>
          <span data-testid="recipe-category">{item.strCategory}</span>
        </section>
        <section className="container__buttons">
          <img
            height="26px"
            data-testid="share-btn"
            src={ shareIcon }
            alt="shareIcon"
          />
          <img
            height="26px"
            data-testid="favorite-btn"
            src={ whiteHeartIcon }
            alt="shareIcon"
          />
        </section>
      </section>
      <section className="container__ingredientes">
        <p>Ingredientes</p>
        {recipe()}
      </section>
      <section className="container__instructions">
        <span>Instructions</span>
        <p
          data-testid="instructions"
          className="instructions"
        >
          {item.strInstructions}
        </p>
      </section>
      <section className="container__button">
        <button data-testid="finish-recipe-btn" type="button">Finish Recipe</button>
      </section>
    </section>
  );
}

Ingredients.propTypes = {
  item: PropTypes.string,
  index: PropTypes.number,
}.isRequire;

export default Ingredients;
