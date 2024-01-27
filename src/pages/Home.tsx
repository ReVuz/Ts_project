import React from 'react'
import CoverPage from "../components/CoverPage";
import DisplayItems from "../components/DisplayItems";
import { apiKey, popularShows } from "../modules/ApiLinks";
import coverPicture from "../assets/img.jpg"

const Home = () => {
  return (
    <div>
        <CoverPage title="Welcome to Movie App"
        description="This is a movie app that displays popular movies and tv shows"
        catchyPhrase="Watch your favorite movies and tv shows"
        headerImage={coverPicture}
        showSearch={true}
        showHeaderImage={true}
      />

      <DisplayItems 
        apiEndpoint={`${popularShows}?api_key=${apiKey}`}
        itemHeading={"Popular Shows"} 
        showButtons={true}
        tvShows={true}
        moviesOn={false} 
        numberOfMovies={5}/>
      <DisplayItems 
        apiEndpoint={`${popularShows}?api_key=${apiKey}`}
        itemHeading={"Popular Shows"} 
        showButtons={false} 
        tvShows={true}
        moviesOn={false} 
        numberOfMovies={6}/>
      
    </div>
  )
}

export default Home
