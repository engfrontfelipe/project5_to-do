import { useSelector } from "react-redux";

import Task from "../../components/Task";
import { Container } from "./styles";

import { RootReducer } from "../../store";
const TaskList = () => {
  const Tasks = useSelector((state: RootReducer) => state.tasks);
  return (
    <Container>
      <p>2 tarefas marcadas como: 'categoria' e 'termo'</p>
      <ul>
        {Tasks.map((t) => (
          <li key={Math.random()}>
            <Task
              title={t.title}
              priority={t.priority}
              description={t.description}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TaskList;
