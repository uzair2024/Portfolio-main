import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
function Experience() {
  const timelineElements = [
    {
      id: 1,
      company: "Wipro Infotech Ltd",
      title: "IT Engineer",
      date: "Feb 2011 - Jun 2012",
      desc: "Maintaining Hardware Troubleshooting & Computer Maintenance, Desktops, Laptops & Printers, Diagnose and repair hardware Issues in desktop and laptop",
    },
    {
      id: 2,
      company: "Insight India Pvt Ltd",
      title: "Server Engineer",
      date: "Jul 2012 - Oct 2014",
      desc: "Added/removed server roles and features (AD Domain Services, WDS, DNS, DHCP scopes) Created/managed user and group accounts Set permissions for common, private, and confidential folders on servers Associated GPOs with Active Directory containers",
    },
    {
      id: 3,
      company: "Microland Limited",
      title: "Wintel Administrator",
      date: "Jun 2015 - Jun 2017",
      desc: "Managing windows server infrastructure (More Than 400 Servers) with Physical & Virtual environment. Dealing with access problems, diagnosing and troubleshooting all incidents related to Citrix & VMware issues.",
    },
    {
      id: 4,
      company: "Capgemini",
      title: "Consultant",
      date: "Jun 2017 - Dec 2017",
      desc: "",
    },
    {
      id: 5,
      company: "Infosys",
      title: "Senior System Administrator",
      date: "May 2018 - Dec 2019",
      desc: "",
    },
    {
      id: 6,
      company: "JIBE Web Development",
      title: "Senior System Administrator",
      date: "Mar 2020 - Feb 2021",
      desc: "",
    },
    {
      id: 7,
      company: "Tata Consultancy Services",
      title: "System Analyst",
      date: "Apr 2021 - Apr 2023",
      desc: "",
    },
    {
      id: 8,
      company: "Cloud Infosolution · Full-time",
      title: "Founder",
      date: "Jan 2023 - Present",
      desc: "",
    },
  ];
  return (
    <div data-aos="zoom-out">
      <VerticalTimeline lineColor="#081724">
        {timelineElements.reverse().map((element) => (
          <VerticalTimelineElement
            key={element.id}
            className="vertical-timeline-element"
            contentStyle={{ background: "#87D3F8", color: "black" }}
            contentArrowStyle={{ borderRight: "13px solid #01080f" }}
            date={element.date}
            iconStyle={{ background: "#a0aaba", color: "#F0F8FF" }}
            //style={{ borderBottom: "3px solid #ff0000" }}
          >
            <h3 className="vertical-timeline-element-title">{element.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {element.company}
            </h4>
            <p>{element.desc}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
