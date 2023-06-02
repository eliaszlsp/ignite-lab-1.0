import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { Menu } from "../components/responsive/menu";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <>
      <div className="sm:flex sm:flex-col min-h-screen max-sm:hidden">
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
      <div className="sm:hidden  overflow-x-hidden  ">
        <Menu />
      </div>
    </>
  );
}
