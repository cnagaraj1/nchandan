#!/usr/bin/env node
const pkgJson = require("./package.json");
const welcome = require("cli-welcome");


welcome({
    title: `Get to know N Chandan`,
    clear: false,
    version: pkgJson.version
}
);
console.log(`

N Chandan - Software Engineer

Enterprise Application design and Development on Microsoft Azure, Database Developer in a wide variety of business applications for large Enterprise customers . Particularly interested in cloud based designs and solutions.

Experience in open stack frameworks like MongoDB/Angular Frameworks/Knockout/D3.Js etc

Certification
 -Microsoft Certified Professional

Specialties: Azure design principles ,Front door service, ARM templates, MongoDB,.NetCore;.Net Framework,MVC,Entity Framework, REST Services,Angular,MS SQL Server ,Web Services/WCF ,Design Patterns
`);