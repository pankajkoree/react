import Header from "./components/Header";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
const App = () => {
  return (
    <>
      <Header />
      <div className="search-filter-container">
        <SearchBar />
        <SelectMenu />
      </div>
    </>
  );
};

export default App;
