## Doctor Lookup
#### By Dave Sarbora
#### To help you search the right doctor!
## Description

This application will take in your city and ailment, and search a list of doctors who can help you with a particular problem.

## Specifications
* A user will be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
* A user will be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
* If the query response includes any doctors, the following information will be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
* If the API call results in an error (any message not a 200 OK), the application will return a notification that states what the error is.
If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application will return a notification that states that no doctors meet the criteria. (This is not an error so it will be handled separately from any errors.)

## Setup/Installation Requirements
* Download the respository from [https://github.com/dsarbora/doctor-finder](https://github.com/dsarbora/doctor-finder)
* _Download and install node.js and Node Package Manager._
* _Navigate to the project directory in your command line._
* _Use the command $ **npm install**_
* _Use a web browser to navigate to [https://api.betterdoctor.com/](https://api.betterdoctor.com/) and create an account to generate your own API key that will work with this program.
* _Create a directory titled ".env" at the root level of this project, and in it include the line "exports.apiKey = {Copy and paste your API key here.}
* _When necessary dependencies are finished loading, use the command $ **npm run build**_
* _Finally, use the command $ **npm run start** to start the web server._

## API Key
* Visit the BetterDoctor API site and click “Get a free API key”.
* Fill out the form, listing Epicodus as the Organization/Company Name.
* Your API key should be listed on the front page (ex: “a2c356ibgh44…..”)   or under My Account > Applications.
* Create a file in the root level of your directory called ".env"
* In .env, store your API key as "exports.apiKey = {Your API Key Here}"

## Known Bugs
* Whether or not the information appearing on the screen actually represents an accurate depiction of reality is unknown to the author of this program.
* **response.data[i].practices** is an array, and when a doctor works at more than one location, data may only reflect one location's information.
* The accepting new patients section appears to be drawn from the practice as opposed to the doctor. 

## Technologies Used
* Atom
* JavaScript
* HTML
* CSS
* Node.js
* Node Package Manager
* Webpack
* UglifyJs
* ESLint
* DotEnv

#### License

*MIT

Copyright (c) 2019 by *_Dave Sarbora_*

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.