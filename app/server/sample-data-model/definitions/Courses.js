defineCourses = function() {
  let sampleCourses = [
    {
      name: "Program Structure",
      slug: "ics212",
      number: "ICS 212",
      description: "Program organization paradigms, programming environments, implementation of a module from specifications, the C and C++ programming languages.",
      tags: ["software-engineering"]
    },
    {
      name: "nonICS 100-level course",
      slug: "nonICS-1xx",
      number: "nonICS 1xx",
      description: "Any non ICS course at the 100 level.",
      tags: []
    },
    {
      name: "Algorithms",
      slug: "ics311",
      number: "ICS 311",
      description: "Design and correctness of algorithms, including divide-and-conquer, greedy and dynamic programming methods.",
      tags: ["software-engineering", "silicon-valley"]
    },
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
  ];

  _.each(sampleCourses, RadGrad.course.define);
};
