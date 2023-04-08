import { screen, render } from '@testing-library/react';

import { Main } from './index';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main title="Boilerplate NextJS." />);

    expect(
      screen.getByRole('heading', { name: /boilerplate nextjs/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
