import React from 'react'
import CoverPage from "../components/CoverPage";
import DisplayItems from "../components/DisplayItems";
import { apiKey, trendingShows, trending } from "../modules/ApiLinks";
import coverPicture from "../assets/img.jpg"

const Home = () => {
  return (
    <div>
      <CoverPage title="Welcome to MovieClub"
        description="Thousands of movies and tv shows at your fingertips"
        catchyPhrase="It's time to watch"
        headerImage={coverPicture}
        showSearch={true}
        showHeaderImage={true}
      />

      <DisplayItems
        apiEndpoint={`${trending}?api_key=${apiKey}`}
        itemHeading={"Trending Movies"}
        showButtons={false}
        tvShows={false}
        moviesOn={true}
        numberOfMovies={12}
      />

      <DisplayItems
        apiEndpoint={`${trendingShows}?api_key=${apiKey}`}
        itemHeading={"Trending TV Shows"}
        showButtons={false}
        tvShows={true}
        moviesOn={false}
        numberOfMovies={12}
      />
    </div>
  )
}

export default Home
