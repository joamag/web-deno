/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { h, tw } from "https://crux.land/nanossr@0.0.1";

export const Container = (props: { children: any; }) => (
  <div class={tw`bg-white rounded-2xl shadow backdrop-filter backdrop-blur-3xl pt-8 pb-8 px-8 lg:px-12 w-full mt-4`} style={{ width: "600px", margin: "auto" }}>
    {props.children}
  </div>
)

export const Title = (props: { children: any; }) => (
  <div class={tw`flex`}>
    <h1 class={tw`text-5xl text-gray-600 m-auto`}>
      {props.children}
    </h1>
  </div>
)

export const SubTitle = (props: { children: any; }) => (
  <div class={tw`flex`}>
    <h2 class={tw`text-2xl text-gray-400 m-auto mt-8`}>
      {props.children}
    </h2>
  </div>
)

export const Image = (props: { src: string; style: object;}) => (
  <div class={tw`flex justify-center mt-8`}>
    <img src={props.src} style={props.style} />
  </div>
)
