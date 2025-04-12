"use client";

import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "@/lib/firebase";

import Image from "next/image";
import Logo from "@/../public/assets/images/logo.svg";

export default function AuthPage() {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [stage, setStage] = useState<"email" | "login" | "signup">("email");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError("Incorrect password or other login error.");
    }
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // You can also store 'name' in Firestore if needed
    } catch (err) {
      setError("Error creating account.");
    }
  };

  const handleGoogleSignin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err) {
      setError("Google sign-in failed.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#F9F1E5]">
      {/* Left Info Section */}
      <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center items-start bg-[#F3E8D8] space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <Image src={Logo} alt="TerpNotes Logo" width={40} height={40} />
          <h1 className="text-3xl font-semibold text-[#1F1F1F]" style={{ fontFamily: "sen" }}>
            TerpNotes
          </h1>
        </div>
        <h2 className="text-2xl font-bold text-[#1F1F1F]">Why TerpNotes?</h2>
        <ul className="list-disc list-inside space-y-2 text-[#333]">
          <li>Access peer-created notes anytime.</li>
          <li>Rate and review for better quality.</li>
          <li>Share and contribute to your classes.</li>
          <li>Organized by courses and semesters.</li>
        </ul>
      </div>

      {/* Right Login/Signup Section */}
      <div className="flex items-center justify-center w-full p-10 lg:w-1/2">
        <div className="w-full max-w-md p-6 space-y-6 bg-white shadow rounded-2xl">
          <h1 className="text-2xl font-semibold text-center">Welcome</h1>

          {error && <p className="text-sm text-center text-red-500">{error}</p>}

          {stage === "login" && (
            <>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
              <button
                onClick={handleLogin}
                className="w-full bg-[#CD1015] text-white py-2 rounded-lg hover:bg-[#a60d11]"
              >
                Log In
              </button>
              <p className="text-sm text-center text-gray-600">
                Don't have an account?{" "}
                <button onClick={() => setStage("signup")} className="text-blue-500 hover:underline">
                  Sign Up!
                </button>
              </p>
            </>
          )}

          {stage === "signup" && (
            <>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
              <button
                onClick={handleSignup}
                className="w-full py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
              >
                Sign Up
              </button>
              <p className="text-sm text-center text-gray-600">
                Already have an account?{" "}
                <button onClick={() => setStage("login")} className="text-blue-500 hover:underline">
                  Log in
                </button>
              </p>
            </>
          )}

          {stage === "login" || stage === "signup" ? (
            <>
              <div className="text-sm text-center text-gray-600">or</div>

              <button
                onClick={handleGoogleSignin}
                className="w-full py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
              >
                Sign in with Google
              </button>
            </>
          ) : null}

          {stage === "email" && (
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
              <button
                onClick={async () => {
                  try {
                    const methods = await fetchSignInMethodsForEmail(auth, email);
                    setStage(methods.length > 0 ? "login" : "signup");
                  } catch (err) {
                    setError("Error checking email.");
                  }
                }}
                className="w-full bg-[#CD1015] text-white py-2 rounded-lg hover:bg-[#a60d11]"
              >
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
