// eslint-disable-next-line import/no-unresolved
import { getCookie } from '../../util/cookies';
import SetCookieForm from './SetCookies';

export default function SetCookiePage() {
  const getCookieValue = getCookie('testCookie');

  return (
    <>
      <div>Cookie value: {getCookieValue}</div>
      <SetCookieForm />
    </>
  );
}
