import { LangProvider } from "@/components/LangContext";
import Win95 from "@/components/Win95";
import BootScreen from "@/components/BootScreen";
import Oneko from "@/components/Oneko";

// Корень: русский пре-рендер + авто-определение языка по браузеру.
export default function Home() {
  return (
    <LangProvider initialLang="ru" detect>
      <Win95 />
      <BootScreen />
      <Oneko />
    </LangProvider>
  );
}
