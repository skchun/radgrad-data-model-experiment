defineTags = function() {

  let sampleTags = [
    {
      name: "Software Engineering",
      slug: "software-engineering",
      description: "The systematic application of scientific and technological knowledge, methods, and experience to the design, implementation, testing, and documentation of software",
      tagType: "cs-disciplines"
    },
    {
      name: "Psychology",
      slug: "psychology",
      description: "The scientific study of the human mind and its functions, especially those affecting behavior in a given context",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Silicon Valley",
      slug: "silicon-valley",
      description: "the southern portion of the San Francisco Bay Area, centering on the Santa Clara valley.",
      tagType: "locations"
    },
    {
      name: "Data Scientist",
      slug: "data-scientist",
      description: "Combine statistics, data mining, and predictive analytics to gain insight from large data sets.",
      tagType: "professional-goals"
    },
    {
      name: "Computer Hardware Engineer",
      slug: "computer-hardware-engineer",
      description: "Research, design, develop, or test computer or computer-related equipment for commercial, industrial, military, or scientific use. May supervise the manufacturing and installation of computer or computer-related equipment and components.",
      tagType: "professional-goals"
    },
    {
      name: "Software Developer",
      slug: "software-developer",
      description: "Develop, create, and modify general computer applications software or specialized utility programs. Analyze user needs and develop software solutions. Design software or customize software for client use with the aim of optimizing operational efficiency. May analyze and design databases within an application area, working individually or coordinating database development as part of a team. May supervise computer programmers.",
      tagType: "professional-goals"
    },
    {
      name: "Computer Software Engineer",
      slug: "computer-software-engineer",
      description: "Research, design, develop, and test operating systems-level software, compilers, and network distribution software for medical, industrial, military, communications, aerospace, business, scientific, and general computing applications. Set operational specifications and formulate and analyze software requirements. Apply principles and techniques of computer science, engineering, and mathematical analysis.",
      tagType: "professional-goals"
    },
    {
      name: "Information Security Analyst",
      slug: "information-security-analyst",
      description: "Plan, implement, upgrade, or monitor security measures for the protection of computer networks and information. May ensure appropriate security controls are in place that will safeguard digital files and vital electronic infrastructure. May respond to computer security breaches and viruses.",
      tagType: "professional-goals"
    },
  ];

  _.each(sampleTags, RadGrad.tag.define);
};