import { FilterCard } from "../../components/FilterCard";

import * as S from "./styles";

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Field type="text" placeholder="Buscar" />
      <S.Filters>
        <FilterCard active={false} label="pendentes" counter={1} />
        <FilterCard active={false} label="concluídas" counter={2}/>
        <FilterCard active={false} label="urgentes" counter={3} />
        <FilterCard active={false} label="importantes" counter={4}/>
        <FilterCard active={false} label="normal"counter={5}/>
        <FilterCard active={true}  label="todas" counter={6}/>
      </S.Filters>
    </div>
  </S.Aside>
);

export default SideBar;
