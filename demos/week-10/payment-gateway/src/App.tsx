import Menu from './components/Menu/Menu';

import './App.css';

function App() {
  // you can "interpolate" ({var} in JSX) - number, string, a react element, an array of any of the above
  const appTitle = <div>Choose your mode of payment and complete the purchase</div>;

  return (
    <div className="app">
      <h1 className="app-title">{appTitle}</h1>
      <Menu />
    </div>
  );
}

export default App;


// Idea os splitting into smaller components
{/* <div>
  <TopMenu />
  <Sidebar>
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
      <SidebarItem />
  </Sidebar>
  <Inbox />
</div> */}