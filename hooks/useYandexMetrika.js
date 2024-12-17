import { useEffect, useRef, useState } from "react";
import { Platform } from "react-native"; // Добавили импорт

const useYandexMetrika = (counterId) => {
  const isLoaded = useRef(false);
  const isInitialized = useRef(false);
  const [isReady, setIsReady] = useState(false); // Флаг для готовности ym

  const checkYmReady = (callback) => {
    if (window.ym && typeof window.ym === "function") {
      callback();
    } else {
      setTimeout(() => checkYmReady(callback), 50); // Проверяем еще раз через 50 мс
    }
  };

  useEffect(() => {
    if (!counterId || isLoaded.current) return;
    isLoaded.current = true;

    if (Platform.OS === "web") {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://mc.yandex.ru/metrika/tag.js";

      script.onload = () => {
        try {
          checkYmReady(() => {
            if (!isInitialized.current) {
              window.ym(counterId, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
              });
              setIsReady(true);
              isInitialized.current = true;
            }
          });
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
    } else {
      // Если это не веб, метрику не загружаем
      console.warn("Yandex Metrika not loading on React Native");
      isLoaded.current = true;
    }
  }, [counterId]);

  const hit = (url) => {
    if (Platform.OS === "web") {
      if (isReady) {
        // Проверяем, что ym готов
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
      } else {
        console.warn("Yandex Metrika not ready. Hit ignored for: " + url);
      }
    } else {
      console.log("Yandex metrika. Hit ignored on mobile");
    }
  };

  const reachGoal = (target) => {
    if (Platform.OS === "web") {
      if (isReady) {
        // Проверяем, что ym готов
        if (window.ym) {
          try {
            window.ym(counterId, "reachGoal", target);
          } catch (e) {
            console.error("Error sending Yandex Metrika reachGoal:", e);
          }
        } else {
          console.warn(
            "Yandex Metrika script not loaded yet. Target ignored for: " +
              target
          );
        }
      } else {
        console.warn("Yandex Metrika not ready. Target ignored for: " + target);
      }
    } else {
      console.log("Yandex metrika. Reach goal ignored on mobile");
    }
  };

  return {
    hit,
    reachGoal,
  };
};

export default useYandexMetrika;
