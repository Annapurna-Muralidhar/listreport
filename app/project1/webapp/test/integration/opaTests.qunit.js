sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project1/test/integration/FirstJourney',
		'project1/test/integration/pages/CoursesList',
		'project1/test/integration/pages/CoursesObjectPage'
    ],
    function(JourneyRunner, opaJourney, CoursesList, CoursesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCoursesList: CoursesList,
					onTheCoursesObjectPage: CoursesObjectPage
                }
            },
            opaJourney.run
        );
    }
);