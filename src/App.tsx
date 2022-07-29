import SideBar from "./components/SideBar";
import { Provider as StateProvider } from "jotai";
import Home from "./components/Home";
import DogList from "./components/DogList";
import { Route, Switch } from "wouter";
import ParkList from "./components/ParkList";
// import {useRegisterSW} from 'virtual:pwa-register/react';

function App() {
  return (
    <StateProvider>
        <div className="mx-auto bg-bone flex flex-row">
          <div className="w-24 h-screen">
            <SideBar></SideBar>
          </div>
          <div className="flex h-screen"></div>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/dogs" component={DogList} />
            <Route path="/dogs/:id" component={DogList} />
            <Route path="/parks" component={ParkList} />
            <Route path="/parks/:id" component={ParkList} />
          </Switch>
        </div>
    </StateProvider>
  );
}

export default App;
