import Hero from "../components/hero";
import Catalogue from "../components/catalogus";
import * as FullStory from "@fullstory/browser";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      FullStory.init({ orgId: process.env.NEXT_PUBLIC_FULLSTORY_ORG_ID! });
    }
  }, []);

  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <Hero />
	      <Catalogue />
      </div>
    </div>
  );
}
