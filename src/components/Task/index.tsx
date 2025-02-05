import { ChangeEvent, useEffect, useState } from "react";
import * as S from "./styles";

import * as enums from "../../utils/enums/Tasks";
import { useDispatch } from "react-redux";

import { remove, edit, alternStatus } from "../../store/reducers/tasks";
import { ButtonSave, PrimaryButton } from "../../styles";

type Props = {
  title: string;
  priority: enums.PriorityEnum;
  status: enums.StatusEnum;
  description: string;
  id: number;
};

const Task = ({
  title,
  priority,
  status,
  description: originalDescription,
  id,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (originalDescription.length > 0) {
      setDescription(originalDescription);
    }
  }, [originalDescription]);

  function cancelEdit() {
    setDescription(originalDescription);
    setIsEditing(false);
  }

  function alternStatusForTask (event: ChangeEvent<HTMLInputElement>){
    dispatch(alternStatus({
      id,
      finish: event.target.checked
    }))
    
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input type="checkbox" id={title} checked={status === enums.StatusEnum.CONCLUIDA} onChange={alternStatusForTask}/>
        <S.Title>
          {isEditing ? <em>Editando: </em> : ""}
          {title}</S.Title>
      </label>
      <S.Tag parameter="prioridade" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="status" status={status}>
        {status}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <S.ActionBar>
        {isEditing ? (
          <>
            <ButtonSave
              onClick={() => {
                dispatch(
                  edit({
                    description,
                    id,
                    status,
                    title,
                    priority,
                  }),
                );
                setIsEditing(false);
              }}
            >
              Salvar
            </ButtonSave>
            <S.ButtonCancelAndRemove onClick={cancelEdit}>
              Cancelar
            </S.ButtonCancelAndRemove>
          </>
        ) : (
          <>
            <PrimaryButton onClick={() => setIsEditing(true)}>
              Editar
            </PrimaryButton>
            <S.ButtonCancelAndRemove onClick={() => dispatch(remove(id))}>
              Remover
            </S.ButtonCancelAndRemove>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  );
};

export default Task;
