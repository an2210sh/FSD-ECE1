const flightPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve({
      service: "Flight",
      data: "5 seats available"
    });
  } else {
    reject(new Error("Flight service failed"));
  }
});

const hotelPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve({
      service: "Hotel",
      data: "3 rooms available"
    });
  } else {
    reject(new Error("Hotel service failed"));
  }
});

const cabPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve({
      service: "Cab",
      data: "Cab booked"
    });
  } else {
    reject(new Error("Cab service failed"));
  }
});

const insurancePromise = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    resolve({
      service: "Insurance",
      data: "Policy issued"
    });
  } else {
    reject(new Error("Insurance service failed"));
  }
});

const flightServer1 = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve({ server: "Server1", data: "Flight data from server 1" });
  } else {
    reject(new Error("Server 1 failed"));
  }
});

const flightServer2 = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    resolve({ server: "Server2", data: "Flight data from server 2" });
  } else {
    reject(new Error("Server 2 failed"));
  }
});

const backupServerA = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    resolve({ server: "ServerA", data: "Backup A data" });
  } else {
    reject(new Error("Server A failed"));
  }
});

const backupServerB = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve({ server: "ServerB", data: "Backup B data" });
  } else {
    reject(new Error("Server B failed"));
  }
});

const backupServerC = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    resolve({ server: "ServerC", data: "Backup C data" });
  } else {
    reject(new Error("Server C failed"));
  }
});

Promise.all([flightPromise, hotelPromise, cabPromise, insurancePromise])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error.message);
  });

Promise.race([flightServer1, flightServer2])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error.message);
  });

Promise.allSettled([flightPromise, hotelPromise, cabPromise, insurancePromise])
  .then((results) => {
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log("Success:", result.value);
      } else {
        console.log("Failed:", result.reason.message);
      }
    });
  });
Promise.any([backupServerA, backupServerB, backupServerC])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error.message);
  });