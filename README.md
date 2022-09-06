# Patient Center

[Deployed version](https://justmarous-patient-center.onrender.com)

This project is inspired by visual design created by grahic designer [Liza Aleksandrovych](https://www.linkedin.com/in/liza-aleksandrovych/?originalSubdomain=pl)

Patient center is meant to be used as information center for guardians and researchers of patients affected by genetic illnesses.

Application serves demostrational purposes of my coding abilities.

## Technicalities

### Demo

One can test the app by creating account and logging in or using following credentials:
login: user@gmail.com
password: qwerty1

### Data storage

Application stores all information created by user in the session, it does not utilise any database and all data are deleted upon refresh.

### Functions

- user creation
- user configuration
- user-bound patient base manipulation: adding, configuring patiens data
- adding information related to each patient 

### Security & passwords

As all data are kept in the store, passwords and data of other users created in the app are not protected, however as the site does not have external database, I did not want to focus on the topic of the data protection any further.

### Markup

Styling of the app was in 95% done by hand, without use of aiding libraries what was partially my goal. I am aware of small CSS-related bugs and this will be the main issue I will be fixing in the future.

### Additional remarks

- App bootstrapped by create-react-app, redux-toolkit used
- focus on functional components
- raw CSS styling, react-bootstrap used in the dropdown

### Planned future development

As the application serves mainly for my own training and presentation of my abilities, it will not be developed further, however some fixes are planned:
- fixing relative imports
- compartmentalization of components
- styling relative to grid
- styled components implementation
- minor visual fixes
