import Image from "next/image";

export default function Home() {
  return (
    <>
      Hello World
      <Image src="/icons/timer.svg" width={16} height={16} alt="timer-icon"/>
    </>
  );
}
