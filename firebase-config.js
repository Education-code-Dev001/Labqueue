// วางค่าจาก Firebase Console > Project settings > Your apps > Web app
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "YOUR_PROJECT",
  appId: "YOUR_APP_ID"
};
// รหัสห้อง/คาบ: เปิดหน้าเว็บด้วย ?room=m1-1 เพื่อแยกข้อมูลแต่ละห้อง
const ROOM = new URLSearchParams(location.search).get('room') || 'room1';
firebase.initializeApp(firebaseConfig);
const db = firebase.database(), auth = firebase.auth();
const TS = firebase.database.ServerValue.TIMESTAMP;   // เวลาจากเซิร์ฟเวอร์ ไม่ใช้นาฬิกาเครื่องเด็ก
const R = p => db.ref('rooms/' + ROOM + '/' + p);
const $ = id => document.getElementById(id);
let off = 0; db.ref('.info/serverTimeOffset').on('value', s => off = s.val() || 0);
const fmt = ms => { const s = Math.max(0, Math.floor(ms / 1000)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
