import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography, Link } from '@mui/material';

const JourneyTimeline = () => {
  const journeyEvents = [
    { date: "Now", text: "On a curious pursuit!" },
    { date: "October 2024", text: <>Launched a newsletter, <Link href="https://kuriousjobs.substack.com" target="_blank" rel="noopener noreferrer">'kurious opportunities'</Link>, to share curated opportunities every wednesday.</> },
    { date: "May 2024", text: <>Launched a podcast, <Link href="https://kuriouskathakal.com" target="_blank" rel="noopener noreferrer">'kurious kathakal'</Link>, to share stories of amazing individuals in tech from Kerala.</> },
    { date: "January 2024", text: <>Joined <Link href="https://www.stoaschool.com/" target="_blank" rel="noopener noreferrer">Stoa's alt MBA</Link> to learn more about business fundamentals.</> },
    { date: "December 2023", text: "Departed from Figma after a fulfilling journey, despite the mishaps during the Adobe acquisition fiasco, to explore what's next?" },
    { date: "November 2023", text: <>Consulted for friends at <Link href="https://hoppscotch.com/" target="_blank" rel="noopener noreferrer">Hoppscotch</Link> on community building, marketing, and DevRel setup.</> },
    { date: "June 2023", text: "Concluded a long journey at TinkerHub and left the role, but I continue to contribute as a volunteer to the community." },
    { date: "September 2021", text: "After a conversation with Nadia, she hired me as the Regional Lead to build and scale the Friends of Figma program in India." },
    { date: "August 2021", text: <>Joined <Link href="https://tinkerhub.org/" target="_blank" rel="noopener noreferrer">TinkerHub</Link> to lead learning initiatives—an opportunity to expand what I was doing at GDSC on a larger scale and impact in Kerala</> },
    { date: "August 2021", text: <>Sent a cold email to <Link href="https://www.linkedin.com/in/nadiahussain/" target="_blank" rel="noopener noreferrer">Nadia</Link> with ideas on enhancing and scaling the <Link href="https://friends.figma.com/" target="_blank" rel="noopener noreferrer">Friends of Figma</Link> program in India.</> },
    { date: "May 2021", text: <>Launched a mentorship platform, <Link href="https://www.producthunt.com/products/mendor-space" target="_blank" rel="noopener noreferrer">mendor.space</Link>. It attracted a few users but didn't scale as expected.</> },
    { date: "February 2021", text: <>
      <Link href="https://ingress-hack.devfolio.co/" target="_blank" rel="noopener noreferrer">IngressHack</Link>; stepped out of my comfort zone to raise over $15K in sponsorships, including Figma's first Hackathon sponsorship in Kerala
    </> },
    { date: "September 2020", text: "Fast forward, got selected as GDSC Lead; building a community and managing a team in a completely virtual environment transformed me" },
    { date: "June 2019", text: <>Met <Link href="https://www.linkedin.com/in/aravind1444/" target="_blank" rel="noopener noreferrer">Aravind</Link>, a mentor who became like a brother; joined GDSC as a community organizer</> },
    { date: "April 2019", text: <>Participated in my first hackathon, escaped tutorial hell, won it, and started <Link href="https://wiki.advaith.co/journey/hack.io" target="_blank" rel="noopener noreferrer">hack.io</Link></> },
    { date: "January 2019", text: "Published a Google Action \"Mischief Managed,\" and fell in love with the process of building things" },
    { date: "October 2018", text: "Attended my first tech event, ML by Google; didn't learn much but enjoyed the pizza" },
    { date: "June 2018", text: "Gained proper internet access" },
  ];

  const coralColor = '#FF6F61'; // The coral color used earlier

  return (
    <Timeline position="alternate">
      {journeyEvents.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: coralColor }} />
            {index < journeyEvents.length - 1 && <TimelineConnector sx={{ backgroundColor: coralColor }} />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span" className="text-custom-coral font-semibold">
              {event.date}
            </Typography>
            <Typography className="text-gray-700">{event.text}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default JourneyTimeline;