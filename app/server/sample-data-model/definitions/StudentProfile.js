defineStudentProfile = function() {
  let acID = RadGrad.user.findBySlug("anthonychriste")._id;
  let acID2 = RadGrad.user.findBySlug("kyleabear")._id;
  let acID3 = RadGrad.user.findBySlug("brianyoung")._id;

  let sampleWorkInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 10, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), hrswk: 20, studentID: acID}
  ];
  let sampleWorkInstanceData2 = [
    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 10, studentID: acID2},
    {semesterID: RadGrad.semester.get("Spring", 2016), hrswk: 20, studentID: acID2}
  ];
  let sampleWorkInstanceData3 = [
    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 10, studentID: acID3},
    {semesterID: RadGrad.semester.get("Spring", 2016), hrswk: 20, studentID: acID3}
  ];

  let sampleWorkInstanceIDs = _.map(sampleWorkInstanceData, RadGrad.workinstance.define);
  let sampleWorkInstanceIDs2 = _.map(sampleWorkInstanceData2, RadGrad.workinstance.define);
  let sampleWorkInstanceIDs3 = _.map(sampleWorkInstanceData3, RadGrad.workinstance.define);

  let sampleCourseInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics311", verified: false, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "nonICS-1xx", verified: false, grade: "B", studentID: acID, note: "Art 132"},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics212", verified: true, grade: "A", studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics101", verified: true, grade: "A", studentID: acID},
  ];
  let sampleCourseInstanceData2 = [
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics311", verified: false, grade: "B", studentID: acID2},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "nonICS-1xx", verified: false, grade: "B", studentID: acID2, note: "Art 132"},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics212", verified: true, grade: "A", studentID: acID2},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics101", verified: true, grade: "A", studentID: acID2},
  ];
  let sampleCourseInstanceData3 = [
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics311", verified: false, grade: "B", studentID: acID3},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "nonICS-1xx", verified: false, grade: "B", studentID: acID3, note: "Art 132"},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics212", verified: true, grade: "A", studentID: acID3},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics101", verified: true, grade: "A", studentID: acID3},
  ];

  let sampleCourseInstanceIDs = _.map(sampleCourseInstanceData, RadGrad.courseinstance.define);
  let sampleCourseInstanceIDs2 = _.map(sampleCourseInstanceData2, RadGrad.courseinstance.define);
  let sampleCourseInstanceIDs3 = _.map(sampleCourseInstanceData3, RadGrad.courseinstance.define);

  let sampleOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: acID},
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "acm-manoa",
      verified: false,
      hrswk: 20,
      studentID: acID
    },
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "google-intern",
      verified: true,
      hrswk: 40,
      studentID: acID
    },
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "ieee-manoa",
      verified: false,
      hrswk: 3,
      studentID: acID
    }
  ];
  let sampleOpportunityInstanceData2 = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: acID2},
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "acm-manoa",
      verified: false,
      hrswk: 20,
      studentID: acID2
    },
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "google-intern",
      verified: true,
      hrswk: 40,
      studentID: acID2
    },
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "ieee-manoa",
      verified: false,
      hrswk: 3,
      studentID: acID2
    }
  ];
  let sampleOpportunityInstanceData3 = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: acID3},
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "acm-manoa",
      verified: false,
      hrswk: 20,
      studentID: acID3
    },
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "google-intern",
      verified: true,
      hrswk: 40,
      studentID: acID3
    },
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "ieee-manoa",
      verified: false,
      hrswk: 3,
      studentID: acID3
    }
  ];
  let sampleOpportunityInstanceIDs = _.map(sampleOpportunityInstanceData, RadGrad.opportunityinstance.define);
  let sampleOpportunityInstanceIDs2 = _.map(sampleOpportunityInstanceData2, RadGrad.opportunityinstance.define);
  let sampleOpportunityInstanceIDs3 = _.map(sampleOpportunityInstanceData3, RadGrad.opportunityinstance.define);

  let sampleDegreePlan = RadGrad.degreeplan.define({
    courseInstanceIDs: sampleCourseInstanceIDs,
    opportunityInstanceIDs: sampleOpportunityInstanceIDs,
    workInstanceIDs: sampleWorkInstanceData,
    studentID: acID
  });
  let sampleDegreePlan2 = RadGrad.degreeplan.define({
    courseInstanceIDs: sampleCourseInstanceIDs2,
    opportunityInstanceIDs: sampleOpportunityInstanceIDs2,
    workInstanceIDs: sampleWorkInstanceData2,
    studentID: acID2
  });
  let sampleDegreePlan3 = RadGrad.degreeplan.define({
    courseInstanceIDs: sampleCourseInstanceIDs3,
    opportunityInstanceIDs: sampleOpportunityInstanceIDs3,
    workInstanceIDs: sampleWorkInstanceData3,
    studentID: acID3
  });

  RadGrad.user.setDegreePlanID(acID, sampleDegreePlan);
  RadGrad.user.setDegreeGoalIDs(acID, [RadGrad.slug.getEntityID("degree-goal-sv-tech", "DegreeGoal")]);
  RadGrad.user.setInterestTagIDs(acID, [RadGrad.slug.getEntityID("software-engineering", "Tag")]);
  RadGrad.user.setPicture(acID, "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/1eb/082/154da42.jpg");
  RadGrad.user.setAboutMe(acID, "I am a student at the [University of Hawaii](http://www.hawaii.edu/).");
  RadGrad.user.setSemesterID(acID, RadGrad.semester.get("Fall", 2018));
  RadGrad.user.setDegreePlanID(acID2, sampleDegreePlan2);
  RadGrad.user.setDegreeGoalIDs(acID2, [RadGrad.slug.getEntityID("degree-goal-sv-tech", "DegreeGoal")]);
  RadGrad.user.setInterestTagIDs(acID2, [RadGrad.slug.getEntityID("software-engineering", "Tag")]);
  RadGrad.user.setPicture(acID2, "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/1eb/082/154da42.jpg");
  RadGrad.user.setAboutMe(acID2, "I am a student at the [University of Hawaii](http://www.hawaii.edu/).");
  RadGrad.user.setSemesterID(acID2, RadGrad.semester.get("Fall", 2018));
  RadGrad.user.setDegreePlanID(acID3, sampleDegreePlan3);
  RadGrad.user.setDegreeGoalIDs(acID3, [RadGrad.slug.getEntityID("degree-goal-sv-tech", "DegreeGoal")]);
  RadGrad.user.setInterestTagIDs(acID3, [RadGrad.slug.getEntityID("software-engineering", "Tag")]);
  RadGrad.user.setPicture(acID3, "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/1eb/082/154da42.jpg");
  RadGrad.user.setAboutMe(acID3, "I am a student at the [University of Hawaii](http://www.hawaii.edu/).");
  RadGrad.user.setSemesterID(acID3, RadGrad.semester.get("Fall", 2018));

};

