// task 1:to save a string value to localStorage
function saveToLocalStorage(key, value) {
  localStorage.setItem(key, value);
  console.log(`Saved: ${value} to localStorage with key: ${key}`);
}

function getFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  console.log(`Retrieved: ${value} from localStorage with key: ${key}`);
  return value;
}

const key = "StudentName1";
const valueToSave = "Rajan Poudel";

saveToLocalStorage(key, valueToSave);

const retrievedValue = getFromLocalStorage(key);
console.log(retrievedValue);

// task 2: Function to save an object to localStorage
function saveObjectToLocalStorage(key, obj) {
  const jsonString = JSON.stringify(obj);
  localStorage.setItem(key, jsonString);
  console.log(`Saved object to localStorage with key: ${key}`);
}
function getObjectFromLocalStorage(key) {
  const jsonString = localStorage.getItem(key);
  if (jsonString) {
    try {
      const obj = JSON.parse(jsonString);
      console.log(`Retrieved object from localStorage with key: ${key}`);
      return obj;
    } catch (e) {
      console.error("Error parsing JSON string:", e);
    }
  } else {
    console.log(`No object found in localStorage with key: ${key}`);
  }
  return null;
}
const key2 = "Object1";
const objectToSave = {
  name: "John Doe",
  age: 30,
  hobbies: ["reading", "traveling", "gaming"],
};

saveObjectToLocalStorage(key2, objectToSave);

const retrievedObject = getObjectFromLocalStorage(key2);
console.log(retrievedObject);

// task 3: Function to save user data to localStorage from form
function saveUserData(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const userData = { name, email };
  localStorage.setItem("userData", JSON.stringify(userData));
  displayUserData();
}

function displayUserData() {
  const displayData = document.getElementById("displayData");
  const userData = localStorage.getItem("userData");

  if (userData) {
    const parsedData = JSON.parse(userData);
    displayData.textContent = `Name: ${parsedData.name}, Email: ${parsedData.email}`;
  } else {
    displayData.textContent = "No data saved.";
  }
}
document.getElementById("userForm").addEventListener("submit", saveUserData);

window.onload = displayUserData;

// task 4: Function to remove an item from localStorage
function logLocalStorage() {
  console.log("Current localStorage contents:");
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
  }
  console.log("---------------------------");
}
function removeItemFromLocalStorage(key) {
  console.log("Before removal:");
  logLocalStorage();
  localStorage.removeItem(key);
  console.log(`Removed item with key: ${key}`);
  console.log("After removal:");
  logLocalStorage();
}
const keyToRemove = "Object2";
localStorage.setItem("Object2", JSON.stringify({ name: "John Doe", age: 30 }));
localStorage.setItem("anotherKey", "Some other value");
removeItemFromLocalStorage(keyToRemove);

// task 5: Function to save a string value to sessionStorage
function saveToSessionStorage(key, value) {
  sessionStorage.setItem(key, value);
  console.log(`Saved: "${value}" to sessionStorage with key: "${key}"`);
}
function getFromSessionStorage(key) {
  const value = sessionStorage.getItem(key);
  if (value !== null) {
    console.log(`Retrieved: "${value}" from sessionStorage with key: "${key}"`);
  } else {
    console.log(`No data found in sessionStorage with key: "${key}"`);
  }
  return value;
}
const key5 = "exampleKey";
const valueToSave5 = "Hello, SessionStorage!";

saveToSessionStorage(key5, valueToSave5);

const retrievedValue5 = getFromSessionStorage(key5);
console.log(retrievedValue5);

// task 6: Function to save an object to sessionStorage
function saveObjectToSessionStorage(key, obj) {
  const jsonString = JSON.stringify(obj);
  sessionStorage.setItem(key, jsonString);
  console.log(`Saved object to sessionStorage with key: "${key}"`);
}
function getObjectFromSessionStorage(key) {
  const jsonString = sessionStorage.getItem(key);
  if (jsonString) {
    try {
      const obj = JSON.parse(jsonString);
      console.log(`Retrieved object from sessionStorage with key: "${key}"`);
      return obj;
    } catch (e) {
      console.error("Error parsing JSON string:", e);
    }
  } else {
    console.log(`No object found in sessionStorage with key: "${key}"`);
  }
  return null;
}

const key6 = "Object6";
const objectToSave6 = {
  name: "Jane Doe",
  age: 25,
  hobbies: ["painting", "cycling", "hiking"],
};
saveObjectToSessionStorage(key6, objectToSave6);
const retrievedObject6 = getObjectFromSessionStorage(key);
console.log(retrievedObject6);

// task 7: to save user data to sessionStorage from form
function saveUserData(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const userData = { name, email };
  sessionStorage.setItem("userData", JSON.stringify(userData));
  displayUserData();
}
function displayUserData() {
  const displayData = document.getElementById("displayData");
  const userData = sessionStorage.getItem("userData");

  if (userData) {
    const parsedData = JSON.parse(userData);
    displayData.textContent = `Name: ${parsedData.name}, Email: ${parsedData.email}`;
  } else {
    displayData.textContent = "No data saved.";
  }
}
document.getElementById("userForm").addEventListener("submit", saveUserData);

window.onload = displayUserData;

// task 8: to remove an item from sessionStorage
function logSessionStorage() {
  console.log("Current sessionStorage contents:");
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    const value = sessionStorage.getItem(key);
    console.log(`${key}: ${value}`);
  }
  console.log("---------------------------");
}
function removeItemFromSessionStorage(key) {
  console.log("Before removal:");
  logSessionStorage();
  sessionStorage.removeItem(key);
  console.log(`Removed item with key: "${key}"`);
  console.log("After removal:");
  logSessionStorage();
}
const keyToRemove8 = "Object8";
sessionStorage.setItem(
  "Object8",
  JSON.stringify({ name: "John Doe", age: 30 })
);
sessionStorage.setItem("anotherKey", "Some other value");
removeItemFromSessionStorage(keyToRemove8);

// task 9: function that accepts a key and value, saves the value to both localstorage and sessionstorage. retrieve and log the values from both storage mechanism
function saveToBothStorages(key, value) {
  const stringValue = JSON.stringify(value);
  localStorage.setItem(key, stringValue);
  console.log(`Saved "${stringValue}" to localStorage with key "${key}"`);
  sessionStorage.setItem(key, stringValue);
  console.log(`Saved "${stringValue}" to sessionStorage with key "${key}"`);
}

function retrieveFromBothStorages(key) {
  const localStorageValue = localStorage.getItem(key);
  if (localStorageValue !== null) {
    console.log(
      `Retrieved from localStorage: "${localStorageValue}" with key "${key}"`
    );
  } else {
    console.log(`No data found in localStorage with key "${key}"`);
  }
  const sessionStorageValue = sessionStorage.getItem(key);
  if (sessionStorageValue !== null) {
    console.log(
      `Retrieved from sessionStorage: "${sessionStorageValue}" with key "${key}"`
    );
  } else {
    console.log(`No data found in sessionStorage with key "${key}"`);
  }
}
const key9 = "userSettings";
const valueToSave9 = { theme: "dark", fontSize: 14 };

saveToBothStorages(key9, valueToSave9);
retrieveFromBothStorages(key);

// task 10: function that clears all data from both localstorage and sessionstorage. verify that both storages are empty
function clearAllStorages() {
  localStorage.clear();
  console.log("All data cleared from localStorage.");
  sessionStorage.clear();
  console.log("All data cleared from sessionStorage.");
  verifyStoragesEmpty();
}
function verifyStoragesEmpty() {
  if (localStorage.length === 0) {
    console.log("localStorage is empty.");
  } else {
    console.log("localStorage is not empty. Contents:");
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      console.log(`${key}: ${value}`);
    }
  }
  if (sessionStorage.length === 0) {
    console.log("sessionStorage is empty.");
  } else {
    console.log("sessionStorage is not empty. Contents:");
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      const value = sessionStorage.getItem(key);
      console.log(`${key}: ${value}`);
    }
  }
}
clearAllStorages();
