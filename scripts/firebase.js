const firebaseConfig = {
    apiKey: "AIzaSyC8z4biKJ7UE9eJYpmvA9obbTZ1vH6GkiY",
    authDomain: "colegio-95f06.firebaseapp.com",
    projectId: "colegio-95f06",
    storageBucket: "colegio-95f06.appspot.com",
    messagingSenderId: "720745435027",
    appId: "1:720745435027:web:33754fcc958fcfec916266",
    measurementId: "G-JCSZKKNR5Z"
};

firebase.initializeApp(firebaseConfig);
const turma = "cadastros"
let db = firebase.firestore(); 
let dadosFinal = values()

enviar.onclick = ()=>{
    db.collection(turma).doc(nomeFinal).set({
        nome: nomeFinal,
        email: emailFinal,
        celular: celularFinal,
    }).then(()=>{
        console.log('Enviado com sucesso')
    })
}

