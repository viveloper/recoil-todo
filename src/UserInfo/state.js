import { selectorFamily } from 'recoil';
import { getUserInfo } from '../api';

export const userNameQuery = selectorFamily({
  key: 'UserName',
  get: (userId) => async () => {
    try {
      const userInfo = await getUserInfo(userId);
      return userInfo.name;
    } catch (error) {
      throw error;
    }
  },
});
