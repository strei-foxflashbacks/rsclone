import userPage from '../../main/userPage/userPage';

const openUserPage = (): void => {
  const isAuth = true;
  if (!isAuth) return;

  userPage();
};

export default openUserPage;
