module.exports = responses => {
    const { questions } = responses;

    return `
        
        # ${responses.title}
        -----------------------

        ## Description 
        ${responses.description}
        ${responses.screenshot}
        Created by ${responses.github}
        Repository: ${responses.repo}

        ## Table of Contents 
        ${responses.tableOfContents}
        * [Installation](#installation)
        * [Usage](#usage)
        * [Credits](#credits)
        * [License](#license)
        
        ## Installation 
        ${responses.install}

        ## Usage 
        ${responses.usage}

        ## Credits 
        ${responses.collab}
        ${responses.assets}

        ## License 

        ## Questions 
        Any questions? Please contact me at ${responses.email}
        
        `;
};
