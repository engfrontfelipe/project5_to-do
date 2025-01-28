import { Provider } from "react-redux";
import GlobalStyle, { Container } from "./styles";
import SideBar from "./containers/SideBar";
import TaskList from "./containers/TaskList";

import store from "./store";

function App() {
  
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <SideBar />
        <TaskList />
      </Container>
    </Provider>
  );
}

export default App;
