import React from 'react';
import DisplayItems from './components/DisplayItems';
import Header from './components/Header';
import { MovieShowsWrapper } from './styles/Styles.modules';

function App() {
  return (
    <>
      <Header />
      <DisplayItems apiEndpoint='string'
        itemHeading='Hello'
        tvShowOn={true}
        showButtons={true}
        MoviesOn={true}
        numberOfMovies={17} />
    </>
  );
};


export default App;
 