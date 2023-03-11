const manager = data => {
    return `
    <div class="w3-panel w3-container w3-center w3-cell">
    <div class="w3-card-4" style="width:100%;">
    <header class="w3-container w3-teal">
    <h1>${data.Name()}</h1>
    <h1>${data.Role()}</h1>
    </header>
    <div class="w3-container">
    <p>ID: ${data.Id()} </p>
    <p>Email:${data.Email()} </p>
    <p>Office Number:${data.OfficeNumber()} </p>
    </div>
    </div>
    </div>
    `
}

const intern = data => {
    return `
    <div class="w3-panel w3-container w3-center w3-cell">
    <div class="w3-card-4" style="width:100%;">
    <header class="w3-container w3-teal">
    <h1>${data.Name()}</h1>
    <h1>${data.Role()}</h1>
    </header>
    <div class="w3-container">
    <p>ID: ${data.Id()} </p>
    <p>Email:${data.Email()} </p>
    <p>School:${data.School()} </p>
    </div>
    </div>
    </div>
    `
}
const engineer = data => {
    return `
    <div class="w3-panel w3-container w3-center w3-cell">
    <div class="w3-card-4" style="width:100%;">
    <header class="w3-container w3-teal">
    <h1>${data.Name()}</h1>
    <h1>${data.Role()}</h1>
    </header>
    <div class="w3-container">
    <p>ID: ${data.Id()} </p>
    <p>Email:${data.Email()} </p>
    <p>Github:${data.Github()} </p>
    </div>
    </div>
    </div>
    `
}




const employee = teamArray =>{

    let teamhtml = ''

    for (i=0;i<teamArray.length;i++)
        {
        if(teamArray[i].Role()==="Manager")
        {
            teamhtml = teamhtml + manager(teamArray[i])
        }
        else if(teamArray[i].Role()==="Intern")
        {
            teamhtml = teamhtml + intern(teamArray[i])
        }
        else if(teamArray[i].Role()==="Engineer")
        {
            teamhtml = teamhtml + engineer(teamArray[i])
        }
    } return teamhtml


}


const template = data =>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Team profile </title>
        <link rel="stylesheet" href="w3.css">
    </head>
    <body>
    <div class ="w3-container w3-center w3-green">
    <h1 style="text-shadow:1px 1px 0 #444">Team Profile Generator</h1>
    </div>
<div class ="w3-container w3-center">
${employee(data)}
</div>

    </body>
    </html>`

}



module.exports=template;