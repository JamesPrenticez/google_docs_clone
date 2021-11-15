import Icon from "@material-tailwind/react/Icon"
import Image from "next/image"
import { useState } from "react"


import Button from "@material-tailwind/react/Button"
import Modal from "@material-tailwind/react/Modal"
import ModalBody from "@material-tailwind/react/ModalBody"
import ModalFooter from "@material-tailwind/react/ModalFooter"

function NewDoc() {
  const [showModal, setShowModal] = useState(false)
  const [input, setInput] = useState("")
 
   function createDocument(){
     
   }
 
   const modal = (
     <Modal
       size="sm"
       active={showModal}
       toggler={() => setShowModal(false)}
     >
       <ModalBody>
         <input 
           value={input}
           onChange={(e) => setInput(e.target.value)}
           type="text"
           className="outline-none w-full"
           placeholder="Enter name of document"
           onKeyDown = {(e) => e.key === "Enter" && createDocument()}
         />
         <ModalFooter>
           <Button
             color="blue"
             buttonType="link"
             onClick={(e) => setShowModal(false)}
             ripple="dark"
           >
             Cancel
           </Button>
 
           <Button
             color="blue"
             buttonType="link"
             onClick={createDocument}
             ripple="light"
           >
             Create
           </Button>
 
         </ModalFooter>
 
       </ModalBody>
     </Modal>
   )
 
  return (
    <section className="bg-[#F8F9FA] pb-10 px-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between py-6">
        <h2 className="text-gray-700 text-lg">Start a new document</h2>
          <Button 
            color="gray"
            buttonType="outline"
            iconOnly={true}
            ripple="dark"
            className="border-0 rounded-full"
          >
            <Icon name="more_vert" size="3xl" />
          </Button>
        </div>
        <div>
          <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-600">
            <Image 
              src="/plus.png"
              layout="fill"
              onClick={() => setShowModal(true)}
            />
          </div>
          <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">Blank</p>
        </div>
      </div>
      {modal}
    </section>

  )
}

export default NewDoc
