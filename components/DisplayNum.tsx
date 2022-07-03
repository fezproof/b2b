/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface DisplayNumProps {
  number: number;
}

export default function DisplayNum({ number }: DisplayNumProps) {
  return (
    <div class={tw`flex gap-2 w-full`}>
      <p class={tw`flex-grow-1 font-bold text-xl`}>{number}</p>
    </div>
  );
}
