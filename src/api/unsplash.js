//Axiousの設定やunsplashにリクエストをacceptするためのcomponent
//予めAxiousをimportされているので、ベースのURLとheader部分をここで登録しておくよ

import axious from "axios";

export default axious.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID CG-6TrHE3gcTpcpECn48aFwfcKv26qj7Epgm0fsqRUY",
  },
});
