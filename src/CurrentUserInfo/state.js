import { atom, selector } from 'recoil';
import { getUserInfo } from '../api';

export const currentUserIdState = atom({
  key: 'CurrentUserId',
  default: 1,
});

export const currentUserNameState = selector({
  key: 'CurrentUserName',
  get: async ({ get }) => {
    try {
      const userInfo = await getUserInfo(get(currentUserIdState));
      return userInfo.name;
    } catch (error) {
      throw error;
    }
  },
});
