import { LangProvider } from "@/components/LangContext";
import Win95 from "@/components/Win95";
import BootScreen from "@/components/BootScreen";
import Oneko from "@/components/Oneko";

export default function Home() {
  return (
    <LangProvider>
      <Win95 />
      <BootScreen />
      <Oneko />
    </LangProvider>
  );
}
