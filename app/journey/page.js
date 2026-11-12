import SiteFrame from "../../components/home/SiteFrame";
import JourneyTimeline from "../components/JourneyTimeline";

export const metadata = {
  title: "Journey | Advaith U",
  alternates: { canonical: "/journey" },
};

export default function Journey() {
  return (
    <SiteFrame current="/journey">
      <h1>Journey.</h1>
      <JourneyTimeline />
    </SiteFrame>
  );
}
