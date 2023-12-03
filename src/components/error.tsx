import { useAppSelector } from '../hooks';
import { getFilmsLoadStatus } from '../redux/store/data-process/data-selectors';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getFilmsLoadStatus);
  return (error) ? <div>{error}</div> : null;
}
