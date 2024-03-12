import HeroBreeding from "../components/hero_breeding";
import Herd from "../components/herd";

export default function Home() {
  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <HeroBreeding />
	      <Herd />
      </div>
    </div>
  );
}
