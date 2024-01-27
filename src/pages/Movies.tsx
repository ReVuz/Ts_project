import React from 'react'
import CoverPage from "../components/CoverPage.tsx";
import DisplayItems from "../components/DisplayItems.tsx";
import { apiKey, top_rated_movies, now_playing, upcoming } from "../modules/ApiLinks.ts";
import coverPicture from "../assets/img.jpg"

const NowPlaying = () => {
  return (
    <div>
      <CoverPage title="Movies"
        description="All the movies you can think of"
        catchyPhrase="at your fingertips"
        headerImage={coverPicture}
        showSearch={false}
        showHeaderImage={true}
      />

      <DisplayItems
        apiEndpoint={`${now_playing}?api_key=${apiKey}`}
        itemHeading={"Now Playing Movies"}
        showButtons={true}
        tvShows={false}
        moviesOn={true}
        numberOfMovies={12}
      />

      <DisplayItems
        apiEndpoint={`${top_rated_movies}?api_key=${apiKey}`}
        itemHeading={"Top Rated Movies"}
        showButtons={true}
        tvShows={false}
        moviesOn={true}
        numberOfMovies={12}
      />

      <DisplayItems
        apiEndpoint={`${upcoming}?api_key=${apiKey}`}
        itemHeading={"Upcoming Movie"}
        showButtons={true}
        tvShows={false}
        moviesOn={true}
        numberOfMovies={12}
      />
    </div>
  )
}

export default NowPlaying
