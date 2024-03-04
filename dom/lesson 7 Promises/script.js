let promiseOne = new Promise(function (resolve, reject) {
    setTimeout(()=>{
        console.log('async function completed ');
        resolve()
    }, 1000)

})

promiseOne.then(function () {
    console.log('resolve function called');
})

// way 2

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('from inside the settime out method');
        resolve()
    }, 1000)

}).then(() => {
    setTimeout(() => {
        console.log('from inside the then method');
    }, 3000)
})

// Promise 3

new Promise(function (resolve, reject) {
  let error = false;
  if (!error) {
    resolve({ name: "sayeed", password: "123456" });
  } else {
    reject("ERROR : something went wrong !");
  }
})
  .then((user) => {
    return [user.name, user.password];
  })
  .then((info) => {
    console.log(`The username is : ${info[0]} and password is :${info[1]}`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("the process is ended"));



// github api fetch 

fetch('https://api.github.com/users/Sayeed-Shorif')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data.login
  })
  .then((name)=>console.log(name))

  .catch((error) => {
    console.log(error);
})


