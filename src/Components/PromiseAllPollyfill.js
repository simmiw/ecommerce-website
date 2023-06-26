const MyPromiseAllPolyfill = () => {
  const promise1 = new Promise((resolve, reject) => {
    const person = {
      name: "Simmi",
      age: 28,
      city: "Amsterdam",
    };
    resolve(person);
  });

  const createPromise = (time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(time);
      }, time);
    });
  };

  const promise3 = new Promise((resolve, reject) => {
    resolve(console.log("Hey,I got resolved"));
  });

  let allTasks = [createPromise(2000), createPromise(1000), promise1];

  Promise.myAll = (allTasks) => {
    let pending = allTasks.length;
    return new Promise((resolve, reject) => {
      let output = [];
      allTasks.forEach((promise, index) => {
        promise
          .then((data) => {
            // why did you not use [].push instead of index?
            // - sequence of promise resolving is not known
            output[index] = data;
            pending--;
            if (pending === 0) {
              resolve(output);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  };

  Promise.myAll(allTasks)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  return <></>;
};

export default MyPromiseAllPolyfill;

