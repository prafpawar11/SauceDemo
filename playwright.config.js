import { defineConfig } from "playwright/test";


export default defineConfig({

    testDir : './tests',

    fullyParallel : true,

    workers : 1,

    reporter: [
    ['list'],
    ['allure-playwright', {
      resultsDir: 'allure-results'
    }]
  ],

    use :
    {
        headless : false,
        screenshot : 'on',
        video : 'on',
        trace : 'on'
    },

    projects :
    [
        {
            name : 'chromium', 
            use :
            {
                browserName : 'chromium'
            }
        },
        {
            name : 'FIREfox',
            use :
            {
                browserName : 'firefox'
            }
        },
        {
            name : 'webkit',
            use :
            {
                browserName : 'webkit'
            }
        }
    ]



    



});