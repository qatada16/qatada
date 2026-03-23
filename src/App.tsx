import { lazy, Suspense, useState, useEffect } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const Resume = lazy(() => import("./components/Resume"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    // Check URL for resume parameter
    const checkResumeParam = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const hasResumeParam = urlParams.get('resume') === 'true';
      setShowResume(hasResumeParam);
    };

    checkResumeParam();

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', checkResumeParam);

    return () => {
      window.removeEventListener('popstate', checkResumeParam);
    };
  }, []);

  const handleOpenResume = () => {
    window.history.pushState({}, '', '?resume=true');
    setShowResume(true);
  };

  const handleCloseResume = () => {
    window.history.pushState({}, '', window.location.pathname);
    setShowResume(false);
  };

  // Expose function globally for other components to use
  useEffect(() => {
    (window as any).openResume = handleOpenResume;
    return () => {
      delete (window as any).openResume;
    };
  }, []);

  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
        {showResume && (
          <Suspense fallback={<div className="resume-loading">Loading Resume...</div>}>
            <Resume onClose={handleCloseResume} />
          </Suspense>
        )}
      </LoadingProvider>
    </>
  );
};

export default App;
