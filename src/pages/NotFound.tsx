import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>
      <div className="text-center relative z-10">
        <img src="/logo.png" alt="Vertex Web Solutions" className="h-20 w-auto mx-auto mb-8" />
        <h1 className="mb-4 text-8xl font-bold font-display text-gradient">404</h1>
        <p className="mb-8 text-xl text-white/60">This page doesn't exist.</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
        >
          <ArrowLeft size={18} />
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
