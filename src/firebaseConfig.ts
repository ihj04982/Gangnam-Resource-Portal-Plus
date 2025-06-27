import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase 프로젝트의 구성 정보를 여기에 입력합니다.
// 이 정보는 Firebase 콘솔의 프로젝트 설정에서 "내 앱" 섹션에서 찾을 수 있습니다.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AuthDomain,
  projectId: import.meta.env.VITE_FIREBASE_rojectId,
  storageBucket: import.meta.env.VITE_FIREBASE_StorageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MessagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_AppId,
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firestore 인스턴스 가져오기
export const db = getFirestore(app);
