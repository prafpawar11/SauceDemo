
	pipeline
	{
		agent any

		parameters
		{
			choice(
					name : 'ENVIRONMENT_NAME',
					choices : ['qa', 'uat', 'staging'],
					description : 'Select Environment Name'
				)

			choice(
					name : 'BROWSER_NAME',
					choices : ['chromium', 'firefox', 'webkit'],
					description : 'Select Browser Name'
				)
			
			choice(
					name : 'SUITE_NAME',
					choices : ['Regression', 'Smoke', 'Sanity', 'E2E'],
					description : 'Select Suite Type'
				)
		
			string(
					name : 'BRANCH_NAME',
					defaultValue : 'master',
					description : 'Enter Branch Name'
				)
			choice(
					name : 'WORKER_NUMBER',
					choices : [1, 2, 3, 4],
					description : 'Select Workers Number'
				)
		}
		
		stages
		{
			stage("Clone GitHub Repository")
			{
				steps
				{
					git  url : "https://github.com/prafpawar11/SauceDemo.git", branch : "${params.BRANCH_NAME}"
				}
			}
			stage("Install package.json dependencies ")
			{
				steps
				{
					bat "npm ci"
				}
			}

			stage("install Playwright")
			{
				steps
				{
					bat "npm install playwright"
				}
			}

			stage("Execute Test cases")
			{
				steps
				{
					script
					{
					bat "if exist allure-results rmdir /s /q allure-results"

					bat "set TEST_ENV = %ENVIRONMENT_NAME% "
						
					int workers = params.WORKER_NUMBER.toInteger();
						
					bat "npx playwright test --project=%BROWSER_NAME% --grep %SUITE_NAME% --workers= ${params.workers}" 
					}
				}
			}
		}

		post{
			always
				{
					script 
						{
							allure([
									includeProperties : false,
									reportBuildPolicy : 'ALWAYS',
									results : [[path : 'allure-results']]
								])
						}
				}
	
			}

	}	
	
