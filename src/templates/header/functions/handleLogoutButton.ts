import { logoutUser } from '../../../api/apiLogout';
import { deleteTokenInLocalStorage } from '../../../components/modals/authorization/functions/tokenInLocalStorage';
import router from '../../../components/router/router';

const handleLogoutButton = async () => {
  await logoutUser();
  deleteTokenInLocalStorage();
  router.navigateTo(router.root);
};

export default handleLogoutButton;