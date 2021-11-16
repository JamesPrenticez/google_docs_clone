import { 
  collection,
  onSnapshot,
  orderBy,
  query,
  doc
} from "@firebase/firestore";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router"
import { db } from "../../firebase"
import { getSession, signOut, useSession } from "next-auth/react"
import Login from "../../components/Login"
import { useEffect, useState } from "react";
import { route } from "next/dist/server/router";

function Doc() {
  const {data: session} = useSession()
  const router = useRouter()
  const { id } = router.query
  const [docs, setUserDocs] = useState([]);

  useEffect(() => {
    if(id){
      const unsuscribe = onSnapshot(
        query(doc(db, 'userDocs', session?.user.name, "docs", id)),
        (snapshot) => {
          setUserDocs(snapshot.data())
        }
        );
        console.log(unsuscribe)
        return unsuscribe;
      }
    }, [db, id]);
    
    if(!session) return <Login />

  return (

    <div>
      <header className="flex justify-between items-center p-3 pb-1">
        <span onClick={() => router.push("/")} className="cursor-pointer">
        <Icon name="description" size="5xl" color="blue"/>
        </span>

        <div>       
          <h2>{docs.fileName}</h2>
        </div>       
      </header>
    </div>
  )
}

export default Doc
