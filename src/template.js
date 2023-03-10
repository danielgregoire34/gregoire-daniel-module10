const manager = data => {
    return `
    <h3> ${data.Id()}</h3>
    <h3> ${data.Role()}</h3>
    <h3> ${data.Email()}</h3>
    <h3> ${data.Name()}</h3>
    <h3> ${data.OfficeNumber()}</h3>
    `
}




const employee = teamArray =>{

    let teamhtml = ''

    for (i=0;i<teamArray.length;i++){
        if(teamArray[i].Role()==="Manager"){
            teamhtml = teamhtml + manager(teamArray[i])
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
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>${employee(data)}</h1>
    </body>
    </html>`

}



module.exports=template;