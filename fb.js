// Conexión con Firebase. Funciona abriendo los archivos con doble clic y también en un sitio publicado.
const cfg={apiKey:"AIzaSyBp0exvXTjBVQpf-U46OaYGuF65udBU16k",authDomain:"regalocartas-e5b7a.firebaseapp.com",projectId:"regalocartas-e5b7a",appId:"1:753368750739:web:fbb2e8319ffb7ea3864b66"};
firebase.initializeApp(cfg);
const auth=firebase.auth(),db=firebase.firestore();
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).catch(()=>{}); // cada pestaña tiene su propia sesión
// Funciones con los nombres que usa el resto del proyecto
const doc=(d,...p)=>d.doc(p.join('/')),collection=(d,...p)=>d.collection(p.join('/'));
const getDoc=async r=>{const s=await r.get();return{exists:()=>s.exists,data:()=>s.data()}};
const getDocs=q=>q.get(),setDoc=(r,d)=>r.set(d),updateDoc=(r,d)=>r.update(d),writeBatch=d=>d.batch();
const where=(f,o,v)=>q=>q.where(f,o,v),query=(c,...w)=>w.reduce((q,f)=>f(q),c);
const initializeApp=(c,n)=>firebase.initializeApp(c,n),getAuth=a=>a.auth();
const signInWithEmailAndPassword=(a,e,p)=>a.signInWithEmailAndPassword(e,p),createUserWithEmailAndPassword=(a,e,p)=>a.createUserWithEmailAndPassword(e,p);
const sendPasswordResetEmail=(a,e)=>a.sendPasswordResetEmail(e),signOut=a=>a.signOut(),onAuthStateChanged=(a,f)=>a.onAuthStateChanged(f);
