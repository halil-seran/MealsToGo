const liveHost = "https://us-central1-mealstogo-db858.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-db858/us-central1";
//androıd de http default olarak calısmaz https calısır 
//bu yuzden local host dan data getıremıyoruz
//local fırebase functıon ıse https de calısmıyor
//mecburen androıd de lıve ıle calısmak zorundayız

//normalde boyle ama androıdde calıstırdıgım ıcın asagıdakını kullanıyorum
//export const isDevelopment = process.env.NODE_ENV === "development";
//export const host = isDevelopment ? localHost : liveHost;


export const host = liveHost;
