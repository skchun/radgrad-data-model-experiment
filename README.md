# RadGrad Data Model Experiment

![](https://raw.githubusercontent.com/skchun/radgrad-data-model-experiment/master/doc/images/pic1.png)

This application demonstrates my understanding of the [RadGrad data model](https://github.com/radgrad/data-model-example) by defining an arrangement of entities.


### Define four additional courses of your choice from the ICS curriculum.

```
    {
          name: "Tools for the Info World",
          slug: "ics101",
          number: "ICS 101",
          description: "Fundamental information technology concepts and computing terminology, productivity software for problem solving, computer technology trends and impact on individuals and society. Emphasizes the utilization of operating systems and the production of professional documents, spreadsheets, etc.",
          tags: []
        },
        {
          name: "Introduction to Programming: Through Animations",
          slug: "ics110d",
          number: "ICS 110D",
          description: "Basic concepts needed to write computer programs. Simple program design and implementation using a specific programming language; (D) through animations.",
          tags: []
        },
        {
          name: "Intro to Computer Science I",
          slug: "ics111",
          number: "ICS 111",
          description: "Overview of the fundamentals of computer science emphasizing problem solving, algorithm development, implementation, and debugging/testing using an object-oriented programming language.",
          tags: []
        },
        {
          name: "Discrete Math for CS I",
          slug: "ics141",
          number: "ICS 141",
          description: "Includes logic, sets, functions, matrices, algorithmic concepts, mathematical reasoning, recursion, counting techniques, and probability theory.",
          tags: []
        }
```
### Define one new degree goal, “Network Engineer”, and another one of your own choosing.
```
    {name: "Network Engineer", slug: "degree-goal-ntwk-engr", description: "TBD"},
    {name: "Software Engineer", slug: "degree-goal-sftwre-engr", description: "TBD"}
```
### Define one new opportunity, “IEEE Student Branch”, and another one of your own choosing.
```
    {
      name: "IEEE Student Branch",
      slug: "ieee-manoa",
      description: "IEEE Student Chapter",
      opportunityType: "club",
      sponsor: "henricasanova",
      tags: ["software-engineering", "silicon-valley"],
      startActive: moment("2015-01-12").toDate(),
      endActive: moment("2016-02-12").toDate()
    },
    {
      name: "Google Internship",
      slug: "google-intern",
      description: "Intern at Google",
      opportunityType: "internship",
      sponsor: "henricasanova",
      tags: ["software-engineering", "silicon-valley"],
      startActive: moment("2015-01-12").toDate(),
      endActive: moment("2016-02-12").toDate()
    }
```
### Define four new Tags of your own choosing. They should be useful and relevant to computer science students.
```
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
```
### Define two new students. Each student should have at least four course instances, and four opportunity instances. Make sure all of your new additions are incorporated into the student profile definitions.

```
    {
      firstName: "Kyle",
      middleName: "",
      lastName: "Abear",
      slug: "kyleabear",
      password: "foo",
      uhEmail: "kabear@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Brian",
      middleName: "",
      lastName: "Young",
      slug: "brianyoung",
      password: "foo",
      uhEmail: "byoung@hawaii.edu",
      role: RadGrad.role.student
    }
```
Please refer to the [StudentProfile.js](https://github.com/skchun/radgrad-data-model-experiment/blob/master/app/server/sample-data-model/definitions/StudentProfile.js) file to see user profile definitions.
