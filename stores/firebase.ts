import { initializeApp } from 'firebase/app'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'

export const useFirebaseStore = defineStore('firebase', () => {
  const runtimeConfig = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: runtimeConfig.public.apiKey,
    authDomain: runtimeConfig.public.authDomain,
    projectId: runtimeConfig.public.projectId,
    storageBucket: runtimeConfig.public.storageBucket,
    messagingSenderId: runtimeConfig.public.messagingSenderId,
    appId: runtimeConfig.public.appId,
    measurementId: runtimeConfig.public.measurementId,
  }

  const documentConfig = runtimeConfig.public.documentConfig

  const app = initializeApp(firebaseConfig)
  const firestore = getFirestore(app)
  const count = ref<number>()

  const fetchCount = async () => {
    const docRef = doc(firestore, 'screenshot', documentConfig)
    const docSnap = await getDoc(docRef)
    count.value = docSnap.data()?.count
  }

  const incrementCount = async () => {
    if (count.value === undefined) {
      return
    }

    const docRef = doc(firestore, 'screenshot', documentConfig)
    await updateDoc(docRef, {
      count: count.value + 1,
    })
    count.value++
  }

  return {
    fetchCount,
    incrementCount,

    count,
  }
})
