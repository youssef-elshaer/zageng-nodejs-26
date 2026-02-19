function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = { id: 1, name: "Youssef" };
      resolve(user);
    }, 1000);
  });
}

function getProfile(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const profile = { id: 10, userId: userId };
      resolve(profile);
    }, 1000);
  });
}

function getSettings(profileId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const settings = { theme: "dark", profileId: profileId };
      resolve(settings);
    }, 1000);
  });
}

login()
  .then((user) => getProfile(user.id))
  .then((profile) => getSettings(profile.id))
  .then((settings) => {
    console.log(settings);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
async function loadUserData() {
  try {
    const user = await login();
    const profile = await getProfile(user.id);
    const settings = await getSettings(profile.id);

    console.log(settings);
  } catch (error) {
    console.log("Error:", error);
  }
}

loadUserData();
