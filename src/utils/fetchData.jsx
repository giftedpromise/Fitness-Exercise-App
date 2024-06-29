export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  console.log("Fetching data from:", url);
  console.log("Using options:", options);

  if (!options.headers["X-RapidAPI-Key"]) {
    throw new Error("API key is missing!");
  }

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const data = await response.json();
  console.log("Fetched data:", data);
  return data;
};
