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
import { useRouter } from "next/navigation";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";

export default function AuthPage() {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [stage, setStage] = useState<"login" | "signup">("login");
  const [error, setError] = useState("");
  const router = useRouter();
  const db = getFirestore(app);

  const validatePassword = (password: string): string | null => {
    if (password.length < 8) return "Password must be at least 8 characters long.";
    if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter.";
    if (!/[0-9]/.test(password)) return "Password must contain at least one number.";
    return null;
  };

  const handleLogin = async () => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/browse-notes");
    } catch (err) {
      setError("Incorrect Email or Password.");
    }
  };

  const handleSignup = async () => {
    setError("");
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Optional: update displayName
      await updateProfile(user, {
        displayName: name,
      });

      // Save user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: name,
        email: user.email,
        createdAt: new Date(),
      });

      router.push("/browse-notes");
    } catch (err: any) {
      console.error("Signup error:", err);
      if (err.code === "auth/email-already-in-use") {
        setError("Email is already in use.");
      } else {
        setError("Error creating account.");
      }
    }
  };


  const handleGoogleSignin = async () => {
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/browse-notes");
    } catch (err) {
      setError("Google sign-in failed.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#F9F1E5]">
      {/* Left Info Section */}
      <div className="hidden md:flex w-full lg:w-1/2 p-10 bg-[#F3E8D8] shadow-md flex-col justify-center items-start space-y-6">
        <div className="flex items-center gap-4 mb-4">
          <Image src={Logo} alt="TerpNotes Logo" width={48} height={48} />
          <h1 className="text-4xl font-bold text-[#1F1F1F] font-sans tracking-tight">
            TerpNotes
          </h1>
        </div>
        <h2 className="text-2xl font-semibold text-[#1F1F1F]">Why TerpNotes?</h2>
        <ul className="list-disc list-inside space-y-2 text-[#333] text-base leading-relaxed">
          <li>Access peer-created notes anytime.</li>
          <li>Rate and review for better quality.</li>
          <li>Share and contribute to your classes.</li>
          <li>Organized by courses and semesters.</li>
        </ul>
      </div>

      {/* Right Login/Signup Section */}
      <div className="flex flex-col items-center justify-center w-full min-h-screen p-10 lg:w-1/2">
        <Image src={Logo} alt="TerpNotes Logo" width={48} height={48} />
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
                Don't have an account?{' '}
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
                placeholder="Username"
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
                className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Sign Up
              </button>
              <p className="text-sm text-center text-gray-600">
                Already have an account?{' '}
                <button onClick={() => setStage("login")} className="text-blue-500 hover:underline">
                  Log in
                </button>
              </p>
            </>
          )}

          {(stage === "login" || stage === "signup") && (
            <>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <hr className="flex-grow border-t border-black" />
                <span>or</span>
                <hr className="flex-grow border-t border-black" />
              </div>
              <button
                onClick={handleGoogleSignin}
                className="w-full py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
              >
                Sign in with Google
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
