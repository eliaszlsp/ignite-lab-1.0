import { List, X } from "phosphor-react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { useState } from "react";
import { Video } from "../Video";
import { useParams } from "react-router-dom";

export function Menu() {
  const [active, setMode] = useState(false);
  const { slug } = useParams<{ slug: string }>();
  return (
    <div
      className={`h-screen  w-screen bg-gray-700 ${
        active ? "overflow-x-hidden" : ""
      } `}
    >
      <div
        className=" flex  justify-center items-center  w-full
       border-gray-600 border-b-[2px] "
      >
        <Header />
        <p>Aulas</p>
        <button onClick={() => setMode(!active)} className="xl:hidden  ">
          {active ? (
            <X size={32} color="#81D8F7" />
          ) : (
            <List size={32} color="#81D8F7" />
          )}
        </button>
      </div>
      <div
        className={`${active ? "block" : "hidden"} max-w-md relative h-full `}
      >
        <Sidebar />
      </div>
      <main className={`  ${!active ? "block" : "hidden"}     flex flex-row `}>
        {slug ? (
          <Video key={String(new Date().getTime())} lessonSlug={slug} />
        ) : (
          <div className="flex-1"> </div>
        )}
      </main>
    </div>
  );
}
