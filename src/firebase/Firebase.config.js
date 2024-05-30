import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB0ShP_qiG3_C3Ww5zE6tjnTeB-Xh_c-P4",
  authDomain: "shopcart-react.firebaseapp.com",
  projectId: "shopcart-react",
  storageBucket: "shopcart-react.appspot.com",
  messagingSenderId: "769733873936",
  appId: "1:769733873936:web:03e31c7afca6fe088cd595"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
