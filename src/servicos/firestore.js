import { db, storage } from "../config/firebase";
import { collection, query, onSnapshot, where, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { ref, deleteObject, getDownloadURL } from "firebase/storage";

export async function pegarProdutosEudora(setProdutosEudora) {
    const ref = query(collection(db, 'produtos'), where("pasta", "==", "EUDORA"))
    onSnapshot(ref, (querySnapshot) => {
        const ProdutosEudora = []
        querySnapshot.forEach((doc) => {
            ProdutosEudora.push({ id: doc.id, ...doc.data() })
        })
        setProdutosEudora(ProdutosEudora)
    })
}

export async function pegarProdutosNatura(setProdutosNatura) {
    const ref = query(collection(db, 'produtos'), where("pasta", "==", "NATURA"))
    onSnapshot(ref, (querySnapshot) => {
        const ProdutosNatura = []
        querySnapshot.forEach((doc) => {
            ProdutosNatura.push({ id: doc.id, ...doc.data() })
        })
        setProdutosNatura(ProdutosNatura)
    })
}

export async function pegarProdutosOBoticario(setProdutosOBoticario) {
    const ref = query(collection(db, 'produtos'), where("pasta", "==", "OBOTICÁRIO"))
    onSnapshot(ref, (querySnapshot) => {
        const ProdutosOBoticario = []
        querySnapshot.forEach((doc) => {
            ProdutosOBoticario.push({ id: doc.id, ...doc.data() })
        })
        setProdutosOBoticario(ProdutosOBoticario)
    })
}

export async function pegarHidratantes(setHidratantes) {
    const ref = query(collection(db, 'produtos'), where("tipo", "==", "HIDRATANTE"))
    onSnapshot(ref, (querySnapshot) => {
        const Hidratantes = []
        querySnapshot.forEach((doc) => {
            Hidratantes.push({ id: doc.id, ...doc.data() })
        })
        setHidratantes(Hidratantes)
    })
}

export async function pegarPerfumes(setPerfumes) {
    const ref = query(collection(db, 'produtos'), where("tipo", "==", "PERFUME"))
    onSnapshot(ref, (querySnapshot) => {
        const Perfumes = []
        querySnapshot.forEach((doc) => {
            Perfumes.push({ id: doc.id, ...doc.data() })
        })
        setPerfumes(Perfumes)
    })
}

export async function pegarKits(setKits) {
    const ref = query(collection(db, 'produtos'), where("tipo", "==", "KIT"))
    onSnapshot(ref, (querySnapshot) => {
        const Kits = []
        querySnapshot.forEach((doc) => {
            Kits.push({ id: doc.id, ...doc.data() })
        })
        setKits(Kits)
    })
}

export async function pegarAllProdutos(setAllProdutos) {
    const ref = query(collection(db, 'produtos'))
    onSnapshot(ref, (querySnapshot) => {
        const AllProdutos = []
        querySnapshot.forEach((doc) => {
            AllProdutos.push({ id: doc.id, ...doc.data() })
        })
        setAllProdutos(AllProdutos)
    })
}

export async function atualizarProduto(ID, data) {
    try {
        const produtoRef = doc(db, 'produtos', ID)

        await updateDoc(produtoRef, data).then(() => {
            console.log('produto atualizado')
        }).catch((e) => {
            console.log(e)
        })
        return 'ok'
    } catch (error) {
        console.log(error)
        return 'error'
    }

}

export async function deletarProduto(ID, pasta, nome) {
    try {
        const produtoRef = doc(db, 'produtos', ID)
        const prodStorageRef = ref(storage, `${pasta.toUpperCase()}/${nome}`)

        await deleteDoc(produtoRef)
        await deleteObject(prodStorageRef).then(() => { console.log('img deletada') }).catch((e) => { console.log('deu erro') })
        return 'ok'
    }
    catch (error) {
        console.log(error)
        return 'erro'
    }
}