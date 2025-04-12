"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { auth, provider, signInWithPopup } from "@/lib/firebase";
import { useState } from "react";


export default function login() {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log("User signed in:", result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="w-dvw h-dvh bg-blue-500 justify-center items-center flex">
      <Card>
        <CardHeader>
          <CardTitle className="text-center py-2">Login</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}