import { useEffect, useRef } from "react";

const useYandexMetrika = (counterId) => {
  const isLoaded = useRef(false);
  const isInitialized = useRef(false); // Флаг для отслеживания инициализации

  useEffect(() => {
    if (!counterId || isLoaded.current) return;
    isLoaded.current = true;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://mc.yandex.ru/metrika/tag.js";

    script.onload = () => {
      try {
        if (!isInitialized.current) {
          window.ym(counterId, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
          });
          isInitialized.current = true;
        }
      } catch (e) {
        console.error("Error initializing Yandex Metrika:", e);
      }
    };

    script.onerror = (error) => {
      console.error("Error loading Yandex Metrika script:", error);
      isLoaded.current = false;
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [counterId]);

  const hit = (url) => {
    if (window.ym) {
      try {
        window.ym(counterId, "hit", url);
      } catch (e) {
        console.error("Error sending Yandex Metrika hit:", e);
      }
    } else {
      console.warn(
        "Yandex Metrika script not loaded yet. Hit ignored for: " + url
      );
    }
  };

  const reachGoal = (target) => {
    if (window.ym) {
      try {
        window.ym(counterId, "reachGoal", target);
      } catch (e) {
        console.error("Error sending Yandex Metrika reachGoal:", e);
      }
    } else {
      console.warn(
        "Yandex Metrika script not loaded yet. Target ignored for: " + target
      );
    }
  };

  return {
    hit,
    reachGoal,
  };
};

export default useYandexMetrika;
