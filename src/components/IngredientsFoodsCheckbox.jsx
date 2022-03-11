import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import MyContext from '../context';

function IngredientsFoodsCheckbox({ meals }) {
  const [finishedFoods, setFinishedFoods] = useState([]);

  useEffect(() => {
    const arrayAntigo = localStorage.getItem('inProgressRecipes');

    if (arrayAntigo !== null) {
      const novoArray = {
        ...JSON.parse(arrayAntigo),
        meals: {
          [meals.idMeal]: [finishedFoods],
        },
      };

      localStorage.setItem('inProgressRecipes', JSON.stringify(novoArray));
    } else {
      const novoArray = {
        meals: {
          [meals.idMeal]: [finishedFoods],
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(novoArray));
    }

    // localStorage.setItem('inProgressRecipes', JSON.stringify(
    //   {
    //     meals: {
    //       [meals.idMeal]: [finishedFoods],
    //     },
    //   },
    // ));
  }, [meals.idMeal, finishedFoods]);

  const handleChange = (target) => {
    setFinishedFoods(
      (prevState) => ({ ...prevState, [target.name]: target.checked }),
    );
    console.log(finishedFoods);
  };

  const ingredientList = () => {
    const keys = Object.keys(meals);
    const myRegex = /strIngredient/gi;
    const filterWithRegex = keys.filter((el) => el.match(myRegex));
    const valores = filterWithRegex.map((el) => meals[el]);

    return (
      <section className="d-flex flex-column">
        {valores.map((elemento, index) => (
          elemento
        && (
          <section key={ index }>
            <label
              htmlFor={ elemento }
              style={ { textDecoration: finishedFoods[elemento] && 'line-through' } }
              data-testid={ `${index}-ingredient-step` }
            >
              <input
                type="checkbox"
                id={ elemento }
                checked={ finishedFoods[elemento] }
                name={ elemento }
                onChange={ ({ target }) => handleChange(target) }
              />
              {elemento}
            </label>
          </section>
        )
        ))}
      </section>
    );
  };
  return (
    <div>{ingredientList()}</div>
  );
}

IngredientsFoodsCheckbox.propTypes = {
  // handleChange: PropTypes.func,
}.isRequire;

export default IngredientsFoodsCheckbox;
