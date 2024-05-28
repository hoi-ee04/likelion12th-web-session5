import { useRecoilState } from "recoil";
import { darkModeState } from "../../atoms/darkModeAtom";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? "DarkMode" : "LightMode"}
    </button>
  );
};

export default DarkModeToggle;
