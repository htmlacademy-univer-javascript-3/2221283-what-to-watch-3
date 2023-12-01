import { useAppDispatch } from '../hooks';
import { logoutAction } from '../redux/store/api-actions';

export default function Logout() {
  const dispatch = useAppDispatch();
  return (
    <div className="user-block__link"
      onClick={() => {
        dispatch(logoutAction());
      }}
    >
        Logout
    </div>
  );
}
