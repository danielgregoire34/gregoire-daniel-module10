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
        createTeam();
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
        addTeamMember();
        return createTeam();
    })
};
function createEngineer(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:'What is your enginners name?',
        },
        {
            type: 'input',
            name: 'id',
            message:'What is your engineers id?',
        },
        {
            type: 'input',
            name: 'email',
            message:'What is your engineers email?',
        },
        {
            type: 'input',
            name: 'github',
            message:'What is your engineers github?',
        },
    ]).then((data)=>{
        const engineer = new Engineer(data.name, data.id, data.email,data.github);
        addEmployee.push(engineer);
        addTeamMember();
        return createTeam();
    })
};
function createIntern(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:'What is your interns name?',
        },
        {
            type: 'input',
            name: 'id',
            message:'What is your interns id?',
        },
        {
            type: 'input',
            name: 'email',
            message:'What is your interns email?',
        },
        {
            type: 'input',
            name: 'school',
            message:'What school did the Intern go to?',
        },
    ]).then((data)=>{
        const intern = new Intern(data.name, data.id, data.email,data.school);
        addEmployee.push(intern);
        addTeamMember();
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