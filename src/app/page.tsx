import Image from "next/image";
import Grid from "@/../public/assets/images/grid.svg"

export default function Home() {

  return (
    <div className="w-screen">
      <div className="fixed flex justify-center w-full pt-6 px-50 z-40 select-none">
        <div className="border w-full max-w-[800px] rounded p-2 flex">
          <div
            className="text-xl"
            style={{
              fontFamily: "sen"
            }}>
            TerpNotes
          </div>
          <div className="flex flex-grow justify-end gap-2">
            <button className="cursor-pointer bg-[#CD1015] text-white border px-4 rounded">Sign Up</button>
            <button className="cursor-pointer bg-[#CD1015] text-white border px-4 rounded">Info</button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center pt-20">
        <div className="">
          Here is the website content
        </div>
      </div>
    </div>
  );
}
