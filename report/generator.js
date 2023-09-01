const report = require('multiple-cucumber-html-reporter');
report.generate({
	jsonDir:"./report/cucumber-json",
    reportPath:"./report",
    pageTitle: "Automation Test Report",
    reportName: "Trello UI Testing Report",
    pageFooter: "<div><p></p></div>",
    theme: 'bootstrap',
	metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Cypress'},
            {label: 'Release', value: '1.1.0-SNAPSHOT'},
            {label: 'Cycle', value: 'development'},
            {label: 'Author', value: 'Testing Team'},
            {label: 'Last run', value: new Date().toLocaleDateString()},
        ]
    }
});
