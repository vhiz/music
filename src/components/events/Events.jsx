import React from "react";
import EventBox from "../eventsBox/EventBox";
import { events } from "../../data";
import SectionHeader from "./SectionHeader";

export default function Events() {
  return (
    <section className="section" id="tours">
      <div className="container mx-auto">
        <SectionHeader pretitle={"World Tour"} title={"Upcomming"} />
        <EventBox events={events} />
      </div>
    </section>
  );
}
