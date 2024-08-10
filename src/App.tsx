import { ConfigProvider, Layout } from "antd";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Photos from "./components/Photos";
import { MainContent } from "./styles/App.style";

function App() {
  return (
    <ConfigProvider theme={{
      components: {
        Breadcrumb: {
          lastItemColor: 'rgba(0, 0, 0, 0.45)'
        },
      },
    }}>
      <div className="App">
        <Header/>
        <MainContent>
          <Sidebar/>
          <Photos/>
        </MainContent>
      </div>
    </ConfigProvider>
  );
}

export default App;
