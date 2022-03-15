import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

function Profile({ history }) {
  const [user, setUser] = useState('');
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user'))
    || { email: 'nao encontrado' });
  }, []);

  const handleClick = (path) => {
    if (path === '') {
      localStorage.clear();
    }
    history.push(`/${path}`);
  };
  return (
    <>
      <Header title="Profile" />
      <section>
        <h3 data-testid="profile-email">{user.email}</h3>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => handleClick('done-recipes') }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => handleClick('favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => handleClick('') }
        >
          Logout
        </button>
      </section>
      <Footer />
    </>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Profile;