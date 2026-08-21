import { defineConfig } from "playwright/test";


export default defineConfig({

    testDir : './tests',

    reporter: [
    ['list'],
    ['allure-playwright', {
      resultsDir: 'allure-results'
    }]
  ],

    use :
    {
        headless : false
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