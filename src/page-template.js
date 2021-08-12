module.exports = responses => {
    const { questions } = responses;

    return `
        
        # ${questions.title}
        -----------------------

        ## Description 
        ${questions.description}
        ${questions.screenshot}
        Created by ${questions.github}
        Repository: ${questions.repo}

        ## Table of Contents 
        ${questions.tableOfContents}
        * [Installation](#installation)
        * [Usage](#usage)
        * [Credits](#credits)
        * [License](#license)
        
        ## Installation 
        ${questions.install}

        ## Usage 
        ${questions.usage}

        ## Credits 
        ${questions.collab}
        ${questions.assets}

        ## License 

        ## Questions 
        Any questions? Please contact me at ${questions.email}
        
        `;
};
