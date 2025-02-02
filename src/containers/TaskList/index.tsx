import { useSelector } from "react-redux";

import Task from "../../components/Task";
import { Container } from "./styles";

import { RootReducer } from "../../store";
const TaskList = () => {
  const itens = useSelector((state: RootReducer) => state.tasks);
  const { term, criterium, value } = useSelector(
    (state: RootReducer) => state.filter,
  );

  const filterTasks = () => {
    let filteredTask = itens;

    if (term) {
      filteredTask = filteredTask.filter(
        (item) => item.title.toLowerCase().search(term.toLowerCase()) >= 0,
      );
    }

      if (criterium === "prioridade") {
        return (filteredTask = filteredTask.filter(
          (item) => item.priority === value
        ));
      } else if (criterium === "status") {
        return (filteredTask = filteredTask.filter(
          (item) => item.status === value
        ));
      }

      return filteredTask;
    
  };

  return (
    <Container>
      <p>
        {filterTasks().length} tarefas marcadas como: 'categoria' e {term}
      </p>
      <ul>
        <li>{term}</li>
        <li>{criterium}</li>
        <li>{value}</li>
      </ul>

      <ul>
        {filterTasks().map((t) => (
          <li key={Math.random()}>
            <Task
              id={t.id}
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
