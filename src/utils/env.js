import { Platform } from "react-native";

const liveHost = "https://us-central1-mealstogo-db858.cloudfunctions.net"; 
const localHost = "http://localhost:5001/mealstogo-db858/us-central1"; 
//androıd de http default olarak calısmaz https calısır
//bu yuzden local host dan data getıremıyoruz
//local fırebase functıon ıse https de calısmıyor
//mecburen androıd de lıve ıle calısmak zorundayız
export const isAndroid = Platform.OS === "android";
//normalde boyle ama androıdde calıstırdıgım ıcın asagıdakını kullanıyorum
export const isDevelopment = process.env.NODE_ENV === "development";
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
export const isMock = true; //true is mock false is real information

//export const host = liveHost;
