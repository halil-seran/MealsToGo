const liveHost = "https://us-central1-mealstogo-db858.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-db858/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;
