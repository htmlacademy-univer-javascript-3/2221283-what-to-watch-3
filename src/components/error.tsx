import { useAppSelector } from '../hooks';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);
  return (error) ? <div>{error}</div> : null;
}
