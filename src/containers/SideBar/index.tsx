import { useDispatch, useSelector } from "react-redux";
import { FilterCard } from "../../components/FilterCard";
import { RootReducer } from "../../store";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import { altern } from "../../store/reducers/filters";
import * as enums from "../../utils/enums/Tasks";
import { Field, PrimaryButton } from "../../styles";

type Props = {
  showFilter: boolean;
};

const SideBar = ({ showFilter }: Props) => {
  const dispatch = useDispatch();
  const { term } = useSelector((state: RootReducer) => state.filter);
  const navigate = useNavigate();

  return (
    <S.Aside>
      <div>
        {showFilter ? (
          <>
            <Field
              type="text"
              placeholder="Buscar"
              value={term}
              onChange={(evento) => dispatch(altern(evento.target.value))}
            />
            <S.Filters>
              <FilterCard
                value={enums.StatusEnum.PENDENTE}
                criterium="status"
                label="pendentes"
              />
              <FilterCard
                value={enums.StatusEnum.CONCLUIDA}
                criterium="status"
                label="concluídas"
              />
              <FilterCard
                value={enums.PriorityEnum.URGENT}
                criterium="prioridade"
                label="urgentes"
              />
              <FilterCard
                value={enums.PriorityEnum.IMPORTANT}
                criterium="prioridade"
                label="importantes"
              />
              <FilterCard
                value={enums.PriorityEnum.NORMAL}
                criterium="prioridade"
                label="normal"
              />
              <FilterCard criterium="todas" label="todas" />
            </S.Filters>
          </>
        ) : (
          <PrimaryButton onClick={() => navigate("/")}>
            Voltar a lista de Tarefas
          </PrimaryButton>
        )}
      </div>
    </S.Aside>
  );
};

export default SideBar;
