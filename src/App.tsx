
import DisplayItems from "./components/DisplayItems";
import Header from "./components/Header";
import { trending, apiKey, popularShows } from "./modules/ApiLinks";

const itemsProps = {
  numberOfMovies: 5,
  moviesOn: false,
  tvShows: true,
  showButtons: true,
};

function App() {
  return (
    <>
    <Header />
    <DisplayItems {...itemsProps}
    apiEndpoint={`${popularShows}?api_key=${apiKey}`}
    itemHeading={"Popular Shows"}/>
    <DisplayItems {...itemsProps}
    apiEndpoint={`${popularShows}?api_key=${apiKey}`}
    itemHeading={"Popular Shows"}/>
    </>
  );
}

export default App;
