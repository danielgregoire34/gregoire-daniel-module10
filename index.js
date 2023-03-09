const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');


const addEmployee =[];

function teamMaker(){
    inquirer.prompt([
    {
        type: 'input',
        name:'teamname',
        message: 'What is your team name?',
    }
    ]).then((data)=>{
        addTeamMember();
    })
}


function addTeamMember(){
inquirer.prompt([
    {
    type: 'list',
    name: 'teamlist',
    message: 'Add a team member',
    choices:['Manager','Engineer','Intern','Finish'],
    },
])
.then((data) => {
    if(data.teamlist==='Manager'){
        createManager();
    }else if(data.teamlist==='Engineer'){
        createEngineer();
    }else if(data.teamlist==='Intern'){
        createIntern();
    } else if(data.teamlist==='Finish'){
        fs.writeFile('./index.html',writeTeam(data),(err) =>
        err ? console.log(err) : console.log('Success!')
        ); 
        
        writeTeam(data);
    }
});

}


let writeTeam = (data) => {
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
        <h1>
        </h1>
    </body>
    </html>`

}




function createTeam(){



    //fs.writeFileSync('./index.html',writeTeam(data),err); 

    /*
    inquirer.prompt([
        {
            type: 'list',
            name: 'confirm',
            message: 'Are you sure?',
            choices: ['Yes','No'],
        }
    ]).then((data)=>{
        if(data.confirm ==='Yes'){
            fs.writeFile(filename, writeTeam(data), (err) =>
            err ? console.log(err) : console.log('Success!')
            );
        } else if(data.confirm ==='No'){
        }
    })
    */
}


function createManager(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:'What is your managers name?',
        },
        {
            type: 'input',
            name: 'id',
            message:'What is your managers id?',
        },
        {
            type: 'input',
            name: 'email',
            message:'What is your managers email?',
        },
        {
            type: 'input',
            name: 'officenumber',
            message:'What is your managers office number?',
        },
    ]).then((data)=>{
        const manager = new Manager(data.id, data.email, data.officeNumber);
        managerWrite(data)
        fs.appendFile('./index.html',managerWrite(data), (err) =>
        err ? console.log(err) : console.log('Success!')
        ); 
        //teamMaker.push(manager);
        addTeamMember();
    })

}

let managerWrite = (data) => {
    return `
    
    <p>${data.name}<p>
    <p>${data.id}<p>
    <p>${data.email}<p>
    <p>${data.officeNumber}<p>
    
    
    `

}


teamMaker();