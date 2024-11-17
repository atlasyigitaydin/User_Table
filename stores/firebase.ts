// import { initializeApp } from 'firebase/app'
// import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'

// export const useFirebaseStore = defineStore('firebase', () => {
//   const runtimeConfig = useRuntimeConfig()

//   const firebaseConfig = {
//     apiKey: runtimeConfig.public.firebase.apiKey,
//     authDomain: runtimeConfig.public.firebase.authDomain,
//     projectId: runtimeConfig.public.firebase.projectId,
//     storageBucket: runtimeConfig.public.firebase.storageBucket,
//     messagingSenderId: runtimeConfig.public.firebase.messagingSenderId,
//     appId: runtimeConfig.public.firebase.appId,
//     measurementId: runtimeConfig.public.firebase.measurementId,
//   }

//   const documentConfig = runtimeConfig.public.firebase.documentConfig

//   const app = initializeApp(firebaseConfig)
//   const firestore = getFirestore(app)
//   const count = ref<number>()

//   const fetchCount = async () => {
//     const docRef = doc(firestore, 'screenshot', documentConfig)
//     const docSnap = await getDoc(docRef)
//     count.value = docSnap.data()?.count
//   }

//   const incrementCount = async () => {
//     if (count.value === undefined) {
//       return
//     }

//     const docRef = doc(firestore, 'screenshot', documentConfig)
//     await updateDoc(docRef, {
//       count: count.value + 1,
//     })
//     count.value++
//   }

//   return {
//     fetchCount,
//     incrementCount,

//     count,
//   }
// })
