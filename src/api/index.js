export const getUserInfo = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({
          id: 1,
          name: 'casio',
          age: 20,
        });
      } else if (userId === 2) {
        resolve({
          id: 2,
          name: 'casio2',
          age: 30,
        });
      } else {
        resolve({
          id: 3,
          name: 'casio3',
          age: 40,
        });
      }

      // reject('Error!');
    }, 500);
  });
};
