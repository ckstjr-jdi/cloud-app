import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js';

// 파이어베이스 API를 활용하여 웹 서비스를 제공받기 위한 초기화 작업


const firebaseConfig = {
  apiKey: "AIzaSyDsJKoLDO4YnDwZwJKfZxv6mnQkyDNL9Yg",
  authDomain: "kosmo25-d829d.firebaseapp.com",
  projectId: "kosmo25-d829d",
  storageBucket: "kosmo25-d829d.firebasestorage.app",
  messagingSenderId: "57959572325",
  appId: "1:57959572325:web:42eddb73c54af4c296378c"
};

// Initialize Firebase
// 변수(app)앞에 export를 붙여서 외부(html,js)에서 사용 가능하도록 구현
  export const app = initializeApp(firebaseConfig);
