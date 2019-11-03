const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export async function apiLogin(name) {
  await delay(2000);
  if (name === "John") return true;
  throw new Error("User not found!");
}
