import { mocks, mockImages } from "./mock";
import camelize from "camelize"; // npm add camelize xxx_yyy =>> xxxYyy

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("no location found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      address:restaurant.vicinity, //mock ta addressi vacinity diye yazilmistir datayi cekerken adini degistiriyoruz
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now, 
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      //burasi onemli burada mock datada bazi veri isimleri bizim kullanigimiz isimlerle uyusmuyor, yukardaki 2si, bunlari array a dokunmadan uzerine ekliyoruz
      //yani arrayin icindeki elemanlarin tuttuklari veriyi alip kendi kullanacagimiz isimle isOpenNow gibi esitleyip arraya ekledik //orginaline dokunmadik 
    };
  });
  return camelize(mappedResults); //camelize ediyoruz
};
