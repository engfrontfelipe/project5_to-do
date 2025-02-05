import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";

import { Field, MainContainer, Title } from "../../styles";
import { FormStyle, Options } from "./styles";
import * as enums from "../../utils/enums/Tasks";
import { ButtonSave } from "../../styles";
import { register } from "../../store/reducers/tasks";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(enums.PriorityEnum.NORMAL);

  const registerTask = (event: FormEvent) => {
    event.preventDefault();
    dispatch(
      register({
        title,
        priority,
        description,
        status: enums.StatusEnum.PENDENTE,
      }),
    );
    alert("Tarefa Registrada com Sucesso.");
    navigate("/");
  };

  return (
    <MainContainer>
      <Title>Nova Tarefa</Title>
      <FormStyle onSubmit={registerTask}>
        <Field
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Título"
        />
        <Field
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        ></Field>
        <Options>
          <p>Prioridade</p>
          <input
            value={enums.PriorityEnum.URGENT}
            name="priority"
            type="radio"
            id="urgent"
            onChange={(event) =>
              setPriority(event.target.value as enums.PriorityEnum)
            }
          />
          <label htmlFor="urgent">Urgente</label>
          <input
            value={enums.PriorityEnum.IMPORTANT}
            name="priority"
            type="radio"
            id="important"
          />
          <label htmlFor="important">Importante</label>
          <input
            value={enums.PriorityEnum.NORMAL}
            name="priority"
            type="radio"
            id="normal"
            defaultChecked
          />
          <label htmlFor="normal">Normal</label>
        </Options>
        <ButtonSave type="submit">Cadastrar</ButtonSave>
      </FormStyle>
    </MainContainer>
  );
};

export default Form;
