module.exports = responses => {
    const { questions } = responses;

    return`# ${responses.title}

## Description 
${responses.description}
Created by ${responses.github} [www.github.com/${responses.github}]
Repository: ${responses.repo}

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)
        
## Installation 
${responses.install}

## Usage 
${responses.usage}

## Credits 
${responses.collab}
${responses.assets}

## License 
${responses.license}

## Tests
${responses.test}

## Questions 
Any questions? Please contact me at ${responses.email}
`;
};
