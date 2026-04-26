import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const API = "http://localhost:3001/api/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Restore session on app start — checks the httpOnly cookie
  useEffect(() => {
    fetch(`${API}/me`, { credentials: "include" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => setUser(data?.user ?? null))
      .catch(() => setUser(null))
      .finally(() => setIsLoading(false));
  }, []);

  const register = useCallback(async (name, email, password) => {
    const res = await fetch(`${API}/register`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error ?? "Registration failed.");
    setUser(data.user);
    return data.user;
  }, []);

  const login = useCallback(async (email, password) => {
    const res = await fetch(`${API}/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error ?? "Login failed.");
    setUser(data.user);
    return data.user;
  }, []);

  const logout = useCallback(async () => {
    await fetch(`${API}/logout`, { method: "POST", credentials: "include" });
    setUser(null);
  }, []);

  /** Redirects to Google OAuth — backend will handle the callback */
  const loginWithGoogle = useCallback(() => {
    window.location.href = `${API}/google`;
  }, []);

  const value = useMemo(
    () => ({ user, isLoading, login, register, logout, loginWithGoogle }),
    [user, isLoading, login, register, logout, loginWithGoogle]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
