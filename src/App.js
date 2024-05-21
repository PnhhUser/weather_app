import { BackgroundApp } from "./Components/backgroundApp";
import { ContentApp } from "./Components/contentApp";
import { HeaderApp } from "./Components/headerApp";
import { HiddenSearchTab } from "./Components/hideSearchTab";

function App() {
  return (
    <div className="relative">
      <BackgroundApp>
        <HeaderApp />
        <ContentApp />
      </BackgroundApp>
      <HiddenSearchTab />
    </div>
  );
}

export default App;
