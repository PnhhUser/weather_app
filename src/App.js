import { BackgroundApp } from "./Components/backgroundApp";
import { ContentApp } from "./Components/contentApp";
import { HeaderApp } from "./Components/headerApp";
import { HiddenSearchTab } from "./Components/hideSearchTab";
import { SearchTabProvider } from "./contexts/searchTabContext";

function App() {
  return (
    <div className="relative bg-[#BBE1FA]">
      <SearchTabProvider>
        <BackgroundApp>
          <HeaderApp />
          <ContentApp />
        </BackgroundApp>
        <HiddenSearchTab />
      </SearchTabProvider>
    </div>
  );
}

export default App;
