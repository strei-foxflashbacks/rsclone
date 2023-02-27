import router from '../../../components/router/router';

const openUserPage = (): void => {
  const isAuth = true;
  if (!isAuth) return;

  router.navigateTo('/account');
};

export default openUserPage;
