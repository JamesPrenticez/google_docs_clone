import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
//import { FirebaseAdapter } from "@next-auth/firebase-adapter"
//import { app, db } from "../../../firebase"
require('dotenv').config();

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
    //adapter: FirebaseAdapter(app),
})