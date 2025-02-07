import { useEffect, useState } from 'react';

const useColorSchemeDetector = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = event => {
      setIsDarkMode(event.matches);
    };

    mediaQuery.addListener(handleChange);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);

  return isDarkMode;
};

export default useColorSchemeDetector;
