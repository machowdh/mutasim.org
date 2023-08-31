import { getProjects } from '../lib/projects';
import Index from '../pages/index';
import { render, screen } from './utils';

describe('index page', () => {
  it('renders a heading', () => {
    render(<Index recentProjects={[]} />);

    const heading = screen.getByRole('heading', {
      name: /mutasim chowdhury/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('displays last 2 projects', () => {
    const projects = getProjects();

    const { getByRole } = render(<Index recentProjects={projects} />);

    expect(getByRole('main')).toHaveTextContent(projects[0].title);
  });
});
