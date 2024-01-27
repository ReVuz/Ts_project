import React from 'react'
import CoverPage from "../components/CoverPage";
import DisplayItems from "../components/DisplayItems";
import { apiKey, airing_today, top_rated_shows } from "../modules/ApiLinks";
import coverPicture from "../assets/img.jpg";

const TvShows = () => {
  return (
    <div>
      <CoverPage title="TV Shows"
        description="All the TV Shows you can think of"
        catchyPhrase="watch from the best"
        headerImage={coverPicture}
        showSearch={false}
        showHeaderImage={true}
      />

      <DisplayItems
        apiEndpoint={`${airing_today}?api_key=${apiKey}`}
        itemHeading={"Airing Today TV Shows"}
        showButtons={true}
        tvShows={true}
        moviesOn={false}
        numberOfMovies={12}
      />

      <DisplayItems
        apiEndpoint={`${top_rated_shows}?api_key=${apiKey}`}
        itemHeading={"Top Rated TV Shows"}
        showButtons={true}
        tvShows={true}
        moviesOn={false}
        numberOfMovies={12}
      />
    </div>
  )
}

export default TvShows
