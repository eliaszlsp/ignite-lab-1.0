import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { Menu } from "../components/responsive/menu";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <>
      <div className="md:flex md:flex-col min-h-screen max-md:hidden">
        <Header />
        <main className="flex flex-1 ">
          {slug ? (
            <Video key={String(new Date().getTime())} lessonSlug={slug} />
          ) : (
            <div className="flex-1"> </div>
          )}
          <Sidebar />
        </main>
      </div>
      <div className="md:hidden max-sm:w-fit  ">
        <Menu />
      </div>
    </>
  );
}
