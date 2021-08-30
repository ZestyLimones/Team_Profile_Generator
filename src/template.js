const template = (team) => {
  return `    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile Generator</title>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron text-white mb-3 bg-primary">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="main-section col-12 d-flex justify-content-center">
                    ${createCard(team)}
                </div>
            </div>
        </div>
    </body>
    </html>`;
};

const createCard = (team) => {
  const createmanagerCard = (manager) => {
    return `
        <div class="card employee-card manager-card bg-info m-1">
            <div class="card-header text-center text-light">
                <h2 class="card-title">${manager.getName()}</h2>
                <h4 class="card-title">Title: ${manager.getRole()}</h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group text-dark">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: <a href="tel:${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
                </ul>
            </div>
        </div>`;
  };

  const createEngineerCard = (Engineer) => {
    return `
    <div class="card employee-card engineer-card bg-info m-1">
        <div class="card-header text-center text-light">
            <h2 class="card-title">${Engineer.getName()}</h2>
            <h4 class="card-title">Title: ${Engineer.getRole()}</h4>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group text-dark">
                <li class="list-group-item">ID: ${Engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${Engineer.getGitHub()}</a></li>
            </ul>
        </div>
    </div>`;
  };

  const createInternCard = (Intern) => {
    return `
    <div class="card employee-card intern-card bg-info m-1">
        <div class="card-header text-center text-light">
            <h2 class="card-title">${Intern.getName()}</h2>
            <h4 class="card-title">Title: ${Intern.getRole()}</h4>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group text-dark">
                <li class="list-group-item">ID: ${Intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${Intern.getSchool()}</li>
            </ul>
        </div>
    </div>`;
  };
  const createTeamContent = () => {
    console.log('from src');
    const teamContent = [];
    console.log(team);
    teamContent.push(
      team
        .filter((employee) => employee.getRole() === 'Manager')
        .map((manager) => createmanagerCard(manager))
    );
    teamContent.push(
      team
        .filter((team) => team.getRole() === 'Engineer')
        .map((engineer) => createmanagerCard(engineer))
    );
    teamContent.push(
      team
        .filter((team) => team.getRole() === 'Intern')
        .map((intern) => createmanagerCard(intern))
    );
    return teamContent.join('');
  };

  createTeamContent();
};

module.exports = template;
