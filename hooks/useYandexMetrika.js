import { useEffect, useRef, useState } from "react";
import { Platform } from "react-native";

const useYandexMetrika = (counterId) => {
  const isLoaded = useRef(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!counterId || isLoaded.current) return;
    isLoaded.current = true;

    if (Platform.OS === "web") {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://mc.yandex.ru/metrika/tag.js";
      script.defer = true;

      script.onload = () => {
        // Polling to check if ym is defined
        const checkYmReady = setInterval(() => {
          if (window.ym) {
            clearInterval(checkYmReady);
            try {
              window.ym(counterId, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
              });
              setIsReady(true);
              debugger;
            } catch (e) {
              console.error("Error initializing Yandex Metrika:", e);
            }
          }
        }, 100); // Check every 100ms

        // Handle case where ym never becomes available
        setTimeout(() => clearInterval(checkYmReady), 5000); // Stop checking after 5 seconds
      };

      script.onerror = (error) => {
        console.error("Error loading Yandex Metrika script:", error);
      };

      document.head.appendChild(script);

      return () => document.head.removeChild(script);
    } else {
      console.warn("Yandex Metrika not loaded on mobile platform");
    }
  }, [counterId]);

  const hit = (url) => {
    if (Platform.OS === "web" && isReady && window.ym) {
      try {
        window.ym(counterId, "hit", url);
      } catch (e) {
        console.error("Error sending Yandex Metrika hit:", e);
      }
    } else {
      console.warn("Yandex Metrika not ready. Hit ignored for:", url);
    }
  };

  const reachGoal = (target) => {
    if (Platform.OS === "web" && isReady && window.ym) {
      try {
        window.ym(counterId, "reachGoal", target);
      } catch (e) {
        console.error("Error sending Yandex Metrika reachGoal:", e);
      }
    } else {
      console.warn("Yandex Metrika not ready. Reach Goal ignored for:", target);
    }
  };

  return { hit, reachGoal };
};

export default useYandexMetrika;
