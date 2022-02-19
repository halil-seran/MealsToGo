import camelize from "camelize"; // npm add camelize xxx_yyy =>> xxxYyy
import { host, isMock } from "../../utils/env";

export const restaurantsRequest = (location) => {
  return fetch(`${host}/placesNearby?location=${location}&mock=${isMock}`).then((res) => {
    return res.json();
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity, //mock ta addressi vacinity diye yazilmistir datayi cekerken adini degistiriyoruz
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      //burasi onemli burada mock datada bazi veri isimleri bizim kullanigimiz isimlerle uyusmuyor, yukardaki 2si, bunlari array a dokunmadan uzerine ekliyoruz
      //yani arrayin icindeki elemanlarin tuttuklari veriyi alip kendi kullanacagimiz isimle isOpenNow gibi esitleyip arraya ekledik //orginaline dokunmadik
    };
  });
  return camelize(mappedResults); //camelize ediyoruz
};
