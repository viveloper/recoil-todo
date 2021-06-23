import { atomFamily, selector } from 'recoil';

export const elementStateFamily = atomFamily({
  key: 'Element',
  default: (element) => element,
});

// export const elementPositionListState = selector({
//   key: 'ElementPositionList',
//   get: ({ get }) => {
//     return get(elementPositionStateFamily(1));
//   },
// });
