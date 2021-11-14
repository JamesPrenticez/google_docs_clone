import Image from "next/image"
import { signIn } from "next-auth/react"
import Button from "@material-tailwind/react/Button"

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image 
        src="/gdocs.png"
        height="300"
        width="550"
        objectFit="contain"
      />
      <Button
        className="w-44 mt-10"
        color="blue"
        buttonType="filled"
        ripple="light"
        onClick={signIn}
      > 
        Sign In
      </Button>
    </div>
  )
}

