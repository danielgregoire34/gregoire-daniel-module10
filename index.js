const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const template = require('./src/template');

const addEmployee =[];


teamMaker();

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
        fs.writeFile('./dist/index.html',data,(err) =>
        err ? console.log(err) : console.log('Success!')
        ); 
        createTeam();
        writeTeam(data);
    }
});

};

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
        const manager = new Manager(data.name, data.id, data.email,data.officenumber);
        addEmployee.push(manager);
        return createTeam();

    })

};


function createTeam(){
let finalTeamHtml = template(addEmployee);
writeFile(finalTeamHtml)
};


const writeFile = (team)=>{
    fs.writeFile('./dist/index.html',team,(err)=>{

    })
}