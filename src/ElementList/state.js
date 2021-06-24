import { atom, atomFamily, selectorFamily } from 'recoil';

export const elementsState = atom({
  key: 'Elements',
  default: [],
});

export const elementStateFamily = atomFamily({
  key: 'Element',
  default: selectorFamily({
    key: 'Element/Default',
    get:
      (id) =>
      ({ get }) => {
        return get(elementsState).find((element) => element.id === id);
      },
  }),
});
