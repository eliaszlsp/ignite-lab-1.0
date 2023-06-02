import { Logo } from "./Logo";

export function Header() {
  return (
    <>
      <header
        className=" w-full py-5 flex xl:items-center xl:justify-center justify-evenly lg:justify-between
       bg-gray-700 xl:border-b
       border-gray-600 "
      >
        <div className="lg:ml-3">
          <Logo />{" "}
        </div>
      </header>
    </>
  );
}
