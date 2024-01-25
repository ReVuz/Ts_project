import React from 'react';
import Header from './components/Header';
import DisplayItems from './components/DisplayItems';
function App() {
  return (
    <>
      <Header/>
      <DisplayItems apiEndpoint='string'
      itemHeading='Hello'
      tvShowOn={true}
      showButtons={true}
      MoviesOn={true}
      numberOfMovies={17}
      />
    </>
  );
}

export default App;
 