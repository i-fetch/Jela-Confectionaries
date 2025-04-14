// app/components/SessionProviderWrapper.jsx
"use client";

import { useUserStore } from "@/store/userStore";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SessionProviderWrapper({ children, session }) {
  const setUser = useUserStore((state) => state.setUser);


  // When the session changes, update the Zustand store with key user properties.
  useEffect(() => {
    if (session?.user) {
      setUser({
        userID: session.user.id, // adjust if your session provides a different property name
        username: session.user.name,
        email: session.user.email,
        
      });
    }
  }, [session, setUser]);

  return <SessionProvider session={session}>{children}</SessionProvider>;
}
