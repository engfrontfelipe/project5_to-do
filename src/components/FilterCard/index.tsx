import { useDispatch, useSelector } from "react-redux";

import * as S from "./styles";
import { alternFilter } from "../../store/reducers/filters";
import { PriorityEnum, StatusEnum } from "../../utils/enums/Tasks";
import { RootReducer } from "../../store";

export type Props = {
  label: string;
  criterium: "prioridade" | "status" | "todas";
  value?: StatusEnum | PriorityEnum;
};

export const FilterCard = ({ label, criterium, value }: Props) => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state: RootReducer) => state);
  const itens = useSelector((state: RootReducer) => state.tasks);


  const counterTask = () => {
    if (criterium === "todas") {
      return itens.length
    }
    if(criterium === 'prioridade'){
      return itens.filter((item) => item.priority === value).length
    }

    if(criterium === 'status'){
      return itens.filter((item) => item.status === value).length
    }
  };

  const verifyIsActive = () => {
    const sameCriterium = filter.criterium === criterium;
    const sameValue = filter.value === value;

    return sameCriterium && sameValue;
  };

  const filterTask = () => {
    dispatch(
      alternFilter({
        criterium,
        value,
      }),
    );
  };

  const active = verifyIsActive();
  const counter = counterTask()

  return (
    <S.Card active={active} onClick={filterTask}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{label}</S.Label>
    </S.Card>
  );
};
