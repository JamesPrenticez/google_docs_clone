import { 
  onSnapshot,
  query,
  doc
} from "@firebase/firestore";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router"
import { db } from "../../firebase"
import { getSession, useSession } from "next-auth/react"
import Login from "../../components/Login"
import { useEffect, useState } from "react";
import TextEditor from "../../components/TextEditor"


function Doc() {
  const {data: session} = useSession()
  const router = useRouter()
  const { id } = router.query
  const [docs, setUserDocs] = useState([]);

  //This is not right but it kinda works
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
    
    //Weak form of security
    // if(!docs.fileName){
    //   router.replace("/")
    // }

  return (

    <div>
      <header className="flex justify-between items-center p-3 pb-1">
        <span onClick={() => router.push("/")} className="cursor-pointer">
        <Icon name="description" size="5xl" color="blue"/>
        </span>

        <div className="flex-grow px-2">       
          <h2>{docs.fileName}</h2>
          <div className="flex items-center h-auto flex-wrap text-sm space-x-1 -ml-1">
            <p className="option">File</p>
            <p className="option">Edit</p>
            <p className="option">View</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
            <p className="option">Help</p>
          </div>
        </div>

        <Button
          color="lightBlue"
          buttonType="filled"
          size="regular"
          className="hidden md:!inline-flex h-10"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="light"
        >       
          <Icon name="people" size="md" /> SHARE
        </Button>
        <img className="h-10 w-10 ml-2 rounded-full hover:cursor-pointer" src={session.user.image} alt="" />  
      </header>
        <TextEditor session={session} />
    </div>
  )
}

export default Doc

export async function getServerSideProps(context){
  const session = await getSession(context)
  return {
    props: {
      session
    }
  }
}