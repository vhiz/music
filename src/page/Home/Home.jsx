import React from "react";
import Events from "../../components/events/Events";
import Hero from "../../hero/Hero";
import Player from "../../components/player/Player";
import Sidebar from "../../components/Sidebar/Sidebar";
import Albums from "../../components/album/Albums";
import Blog from "../../components/blog/Blog";
import NewsLetter from "../../components/newsLetter/NewsLetter";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <Hero />
      <Player />
      <Events />
      <Albums />
      <Blog />
      <NewsLetter />
    </main>
  );
}
