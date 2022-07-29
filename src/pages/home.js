import React from 'react';
import { Box } from 'grommet';

import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import FavouriteLocationsList from '../components/FavouriteLocationsList';
import ResponsiveHeader from '../components/ResponsiveHeader';
import Logo from '../components/Logo';
import NearbyLocationsList from '../components/NearbyLocationsList';

function Home() {
  return (
    <>
      <ResponsiveHeader>
        <Header>
          <SearchForm />
        </Header>
        <Logo />
      </ResponsiveHeader>
      <Box direction="row" wrap align="stretch">
        <NearbyLocationsList />
        <FavouriteLocationsList />
      </Box>
    </>
  );
}

export default Home;
