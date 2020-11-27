const baseUrl = "https://www.foaas.com";

export function getCoolStoryBro(firstName) {
  return fetch(`${baseUrl}/cool/${firstName}`, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
}
