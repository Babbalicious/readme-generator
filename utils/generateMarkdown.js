// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {

  if (license == "MIT") {
    badge = "![Static Badge](https://img.shields.io/badge/license-MIT-brightgreen)";
  } else if (license == "APACHE 2.0") {
    badge = "![Static Badge](https://img.shields.io/badge/license-APACHE%202.0-brightgreen)";
  } else if (license == "GPL 3.0") {
    badge = "![Static Badge](https://img.shields.io/badge/license-GPL%203.0-brightgreen)";
  } else if (license == "BSD 3") {
    badge = "![Static Badge](https://img.shields.io/badge/license-BSD%203-brightgreen)";
  } else badge = "";

  return badge;
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    link = "https://mit-license.org/";
  } else if (license == "APACHE 2.0") {
    link = "https://www.apache.org/licenses/LICENSE-2.0.html";
  } else if (license == "GPL 3.0") {
    link = "https://www.gnu.org/licenses/gpl-3.0.html";
  } else if (license == "BSD 3") {
    link = "https://opensource.org/license/BSD-3-clause";
  } else link = "";

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license) {
    licenseSection = `This project is licensed under the ${license} license.`;
  }

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  const license = renderLicenseSection(data.license);

  return `# ${data.title}
 
  ## Description
  
  ${data.description}
  
  ## Installation Instructions
  
 ${data.installation}

 ## Usage Information

 ${data.usage}

 ## Contribution Guidelines

 ${data.contribution}

 ## Test Instructions

 ${data.test}
  
## Contact Me
  
 Feel free to reach out to me if you have any questions, suggestions, or collaboration opportunities.
  
  - **Email**: ${data.email}
  - **GitHub**: https://github.com/${data.github}
  
  ## License
${license}

${badge}

${link}

  `;
}

module.exports = generateMarkdown;
