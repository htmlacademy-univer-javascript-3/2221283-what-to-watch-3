import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import FormReview from './form-review';
import userEvent from '@testing-library/user-event';

describe('Component: FormReview', () => {

  it('should render correctly', () => {

    const preparedComponent = withHistory(
      <FormReview id={''} />
    );
    const { withStoreComponent } = withStore(preparedComponent, {
    });

    render(withStoreComponent);

    expect(screen.getByText('Post')).toBeInTheDocument();

  });

  it('button should be disabled when not validate (text, but less then 50)', async () => {
    const str = new Array(42).join('a');

    const preparedComponent = withHistory(
      <FormReview id={''} />
    );
    const { withStoreComponent } = withStore(preparedComponent, {
    });

    render(withStoreComponent);
    await userEvent.click(
      screen.getByTestId('star-3'),
    );
    await userEvent.type(
      screen.getByTestId('textarea-review'),
      str
    );

    expect(screen.getByTestId('post-button')).toBeDisabled();

  });

  it('button should be disabled when not validate (text, but more then 400)', async () => {
    const str = new Array(404).join('a');

    const preparedComponent = withHistory(
      <FormReview id={''} />
    );
    const { withStoreComponent } = withStore(preparedComponent, {
    });

    render(withStoreComponent);
    await userEvent.click(
      screen.getByTestId('star-3'),
    );
    await userEvent.type(
      screen.getByTestId('textarea-review'),
      str
    );

    expect(screen.getByTestId('post-button')).toBeDisabled();

  });

  it('button should be enabled when validate', async () => {
    const str = new Array(100).join('a');

    const preparedComponent = withHistory(
      <FormReview id={''} />
    );
    const { withStoreComponent } = withStore(preparedComponent, {
    });

    render(withStoreComponent);
    await userEvent.click(
      screen.getByTestId('star-3'),
    );
    await userEvent.type(
      screen.getByTestId('textarea-review'),
      str
    );

    expect(screen.getByTestId('post-button')).not.toBeDisabled();

  });
});
