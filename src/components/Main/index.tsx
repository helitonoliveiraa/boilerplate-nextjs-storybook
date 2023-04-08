import * as S from './styles';

export const Main = ({ title }: { title: string }) => (
  <S.Container quantityLetter={title.length}>
    <h1>{title}</h1>
  </S.Container>
);
