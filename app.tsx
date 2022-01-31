/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { h, tw } from "https://crux.land/nanossr@0.0.1";

import { Container, Title, SubTitle, Image } from "./components.tsx"

export const Hello = (props: { name: any }) => (
  <div class={tw`h-screen bg-gray-100 pt-12 pb-12`}>
    <Container>
      <Title>Hello {props.name}!</Title>
      <SubTitle>Hello {props.name} smaller!</SubTitle>
      <Image src="https://deno.land/logo.svg" style={{ height: "64px" }} />
    </Container>
  </div>
);
