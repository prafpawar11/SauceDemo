import dotenv from 'dotenv';

const envName = process.env.TEST_ENV || 'qa';
console.log(`Executing Test Cases on ${envName.toUpperCase()}`);
console.log(`Executing Test Cases on ${envName.toUpperCase()}`);

dotenv.config({path : `./env/${envName}.env`, override : true});

module.exports = 
    {
        BASE_URL : process.env.BASE_URL,
        USERNAME : process.env.USERNAME,
        PASSWORD : process.env.PASSWORD
    }
