import React from 'react'
import CoverPage from "../components/CoverPage";
import DisplayItems from "../components/DisplayItems";
import { apiKey, popularShows, popular } from "../modules/ApiLinks";
import coverPicture from "../assets/img.jpg"

const Popular = () => {
  return (
    <div>
      <CoverPage title="Popular Movies and TV Shows"
        description="Movies and TV Shows that are popular right now"
        catchyPhrase="What's popular?"
        headerImage={coverPicture}
        showSearch={false}
        showHeaderImage={true}
      />

      <DisplayItems
        apiEndpoint={`${popular}?api_key=${apiKey}`}
        itemHeading={"Popular Movies"}
        showButtons={false}
        tvShows={false}
        moviesOn={true}
        numberOfMovies={12}
      />

      <DisplayItems
        apiEndpoint={`${popularShows}?api_key=${apiKey}`}
        itemHeading={"Popular TV Shows  "}
        showButtons={false}
        tvShows={true}
        moviesOn={false}
        numberOfMovies={12}
      />
    </div>
  )
}

export default Popular
