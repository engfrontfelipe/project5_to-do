import ButtonAdd from "../../components/ButtonAdd";
import SideBar from "../../containers/SideBar";
import TaskList from "../../containers/TaskList";

const Home = () => (
  <>
    <SideBar />
    <TaskList />
    <ButtonAdd />
  </>
);
export default Home;
