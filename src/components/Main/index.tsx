import * as S from './styles';

export function Main({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components',
}) {
  return (
    <S.Container>
      <img
        src="img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <h1>{title}</h1>

      <h2>{description}</h2>

      <img
        src="img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </S.Container>
  );
}
