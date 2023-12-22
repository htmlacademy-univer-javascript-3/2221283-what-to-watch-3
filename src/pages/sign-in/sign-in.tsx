import { useRef, FormEvent, useState } from 'react';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../redux/store/api-actions';
import { AppRoute } from '../../const';
import { redirectToRoute } from '../../redux/store/action';
import { Helmet } from 'react-helmet-async';

export default function SignIn() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [mailError, setMailError] = useState(false);

  const validateEmail = (email:string) =>
    Boolean(email.match(/[a-zA-Z0-9.]+@[a-zA-Z]+[.][a-zA-Z]{2,4}$/));

  const dispatch = useAppDispatch();
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();


    if (loginRef.current !== null && passwordRef.current !== null) {
      const email = loginRef.current.value;
      const password = passwordRef.current.value;

      if (!validateEmail(email)){
        setMailError(true);
      } else{
        dispatch(loginAction({
          login: email,
          password: password
        }));
        dispatch(redirectToRoute(AppRoute.Root));
      }
    }
  };

  return (
    <div className="user-page">
      <Helmet>
        <title>Авторизация</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="" className="sign-in__form" onSubmit={handleSubmit}>
          {mailError && (
            <div className="sign-in__message">
              <p>Please enter a valid email address</p>
            </div>)}
          <div className="sign-in__fields">
            <div className={`sign-in__field ${mailError ? 'sign-in__field--error' : ''}`}>
              <input
                data-testid="loginElement"
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
              Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                data-testid="passwordElement"
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
              Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" data-testid='submitButton'>
            Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}
