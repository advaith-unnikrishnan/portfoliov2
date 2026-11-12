import { CalendarDays } from "lucide-react";
import React from "react";
const Link = (props) => <a {...props} />;

const JourneyTimeline = () => {
  const journeyEvents = [
    { date: "Now", text: "Investing in early-stage startups at Y0." },
    {
      date: "October 2024",
      text: (
        <>
          Launched a newsletter,{" "}
          <Link
            href="https://kuriousjobs.substack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            'kurious opportunities'
          </Link>
          , to share curated opportunities every wednesday.
        </>
      ),
    },
    {
      date: "May 2024",
      text: (
        <>
          Launched a podcast,{" "}
          <Link
            href="https://kuriouskathakal.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            'kurious kathakal'
          </Link>
          , to share stories of amazing individuals in tech from Kerala.
        </>
      ),
    },
    {
      date: "January 2024",
      text: (
        <>
          Joined{" "}
          <Link
            href="https://www.stoaschool.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stoa's alt MBA
          </Link>{" "}
          to learn more about business fundamentals.
        </>
      ),
    },
    {
      date: "December 2023",
      text: "Departed from Figma after a fulfilling journey, despite the mishaps during the Adobe acquisition fiasco, to explore what's next?",
    },
    {
      date: "November 2023",
      text: (
        <>
          Consulted for friends at{" "}
          <Link
            href="https://hoppscotch.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hoppscotch
          </Link>{" "}
          on community building, marketing, and DevRel setup.
        </>
      ),
    },
    {
      date: "June 2023",
      text: "Concluded a long journey at TinkerHub and left the role, but I continue to contribute as a volunteer to the community.",
    },
    {
      date: "September 2021",
      text: "After a conversation with Nadia, she hired me as the Regional Lead to build and scale the Friends of Figma program in India.",
    },
    {
      date: "August 2021",
      text: (
        <>
          Joined{" "}
          <Link
            href="https://tinkerhub.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TinkerHub
          </Link>{" "}
          to lead learning initiatives—an opportunity to expand what I was doing
          at GDSC on a larger scale and impact in Kerala
        </>
      ),
    },
    {
      date: "August 2021",
      text: (
        <>
          Sent a cold email to{" "}
          <Link
            href="https://www.linkedin.com/in/nadiahussain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nadia
          </Link>{" "}
          with ideas on enhancing and scaling the{" "}
          <Link
            href="https://friends.figma.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Friends of Figma
          </Link>{" "}
          program in India.
        </>
      ),
    },
    {
      date: "May 2021",
      text: (
        <>
          Launched a mentorship platform,{" "}
          <Link
            href="https://www.producthunt.com/products/mendor-space"
            target="_blank"
            rel="noopener noreferrer"
          >
            mendor.space
          </Link>
          . It attracted a few users but didn't scale as expected.
        </>
      ),
    },
    {
      date: "February 2021",
      text: (
        <>
          <Link
            href="https://ingress-hack.devfolio.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            IngressHack
          </Link>
          . Raised over $150k in sponsorships through cold emailing for the
          first hackathon in Kerala sponsored by Figma, O’Reilly Media, and
          DigitalOcean.
        </>
      ),
    },
    {
      date: "September 2020",
      text: "Fast forward, got selected as GDSC Lead; building a community and managing a team in a completely virtual environment transformed me",
    },
    {
      date: "June 2019",
      text: (
        <>
          Met{" "}
          <Link
            href="https://www.linkedin.com/in/aravind1444/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aravind
          </Link>
          , a mentor who became like a brother; joined GDSC as a community
          organizer
        </>
      ),
    },
    {
      date: "April 2019",
      text: (
        <>
          Participated in my first hackathon, escaped tutorial hell, won it, and
          started{" "}
          <Link
            href="https://wiki.advaith.co/journey/hack.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            hack.io
          </Link>
        </>
      ),
    },
    {
      date: "January 2019",
      text: 'Published a Google Action "Mischief Managed," and fell in love with the process of building things',
    },
    {
      date: "October 2018",
      text: "Attended my first tech event, ML by Google; didn't learn much but enjoyed the pizza",
    },
    { date: "June 2018", text: "Gained proper internet access" },
  ];

  return (
    // Adapted from 21st.dev's Experience Timeline (timeline-01).
    <ol className="experience-timeline">
      {journeyEvents.map((event, index) => (
        <li key={index}>
          <div className="timeline-card">
            <h2>
              <CalendarDays size={15} aria-hidden="true" /> {event.date}
            </h2>
            <p>{event.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default JourneyTimeline;
