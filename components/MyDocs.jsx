import { 
  collection,
  onSnapshot,
  orderBy,
  query
} from "@firebase/firestore";
import { db } from "../firebase"
import { useEffect, useState } from "react";
import Icon from "@material-tailwind/react/Icon";
import DocumentRow from "./DocumentRow";

function MyDocs(props) {
  const {name} = props.session.user
  const [docs, setUserDocs] = useState([]);

  useEffect(() => {
    const unsuscribe = onSnapshot(
      query(collection(db, 'userDocs', name, "docs"), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setUserDocs(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    );
    return unsuscribe;
  }, [db]);
  
  //console.log(docs[0]?.id)
  return (
    <section className="bg-white px-10 md:px-0">
      <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
        <div className="flex items-center justify-between pb-5">
          <h2 className="font-md flex-grow">My Documents</h2>
          <p className="mr-12">Date Created</p>
          <Icon name="folder" size="3xl" color="gray" />
        </div>

       {docs.map((doc) => {
        return( 
          <DocumentRow
            key={doc.id}
            id={doc.id}
            fileName={doc.fileName}
            date={doc.timestamp}
          />
        )
        })}
      </div>
    </section>
  );
}

export default MyDocs;
