import * as S from './styles';

const title = 'Boilerplate NextJS.';

console.log(typeof title.length);

export const Main = () => (
  <S.Container quantityLetter={title.length}>
    <h1>{title}</h1>
  </S.Container>
);
