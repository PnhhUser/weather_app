import { BackgroundApp } from "./Components/backgroundApp";
import { ContentApp } from "./Components/contentApp";
// import { HeaderApp } from "./Components/headerApp";
import { HiddenSearchTab } from "./Components/hideSearchTab";
import { SearchTabProvider } from "./contexts/searchTabContext";
import bgWeather from "./b1.jpg";

function App() {
  return (
    <div
      className="relative bg-cover"
      style={{
        backgroundImage: `url(${bgWeather})`,
      }}
    >
      <SearchTabProvider>
        <BackgroundApp>
          <ContentApp />
        </BackgroundApp>
        <HiddenSearchTab />
      </SearchTabProvider>
    </div>
  );
}

export default App;
