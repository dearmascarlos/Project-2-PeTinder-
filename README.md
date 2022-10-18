# Proyect-2-PeTinder-

### User Signup/Login

METHOD | ENDPOINT                    | TOKEN | ROLE | DESCRIPTION           | POST PARAMS                             | RETURNS
-------|-----------------------------|-------|------|-----------------------|-----------------------------------------|--------------------
POST   | /auth/signup                | -     | user | User Signup           | `username`, `email`, `password`         | {msg: string, token: token }
POST   | /auth/login                 | -     | user | Login                 | `email`, `password`                     | `token`

### User Endpoints

METHOD | ENDPOINT                    | TOKEN | ROLE   | DESCRIPTION          | POST PARAMS                                  | RETURNS
-------|-----------------------------|-------|--------|----------------------|----------------------------------------------|--------------------
GET    | /user/profile               | YES   | user   | Get Own Profile      |                                              | {user}
GET    | /pet                        | YES   | user   | Get All Own Pets     |                                              | [pets]
GET    | /pet/profile:id             | YES   | user   | Get Own Pet profile  |                                              | {pets}
PUT    | /user/profile               | YES   | user   | Update Own Profile   |  `name`, `age`, `email`,                     | 'Profile updated'
                                                                             |     `pets`, `direction`                      | 
PUT    | /pet/friends/:id            | YES   | user   | Add Friend           |                                              | 'Friend Added'
PUT    | /pet/friends/:id/remove     | YES   | user   | Remove Friend        |                                              | 'Friend Removed'
DELETE | /user/profile               | YES   | user   | Delete Own Profile   |                                              | 'Profile Removed'
DELETE | /pet/profile                | YES   | user   | Delete Own Profile   |                                              | 'Profile Removed'

?? POST   | /pet/search                 | YES   | user   | Search One pet      | body: `breedName`                           | [pets], user_name}
 

### Admin Endpoints

METHOD | ENDPOINT                    | TOKEN | ROLE   | DESCRIPTION          | POST PARAMS                             | RETURNS
-------|-----------------------------|-------|--------|----------------------|-----------------------------------------|--------------------
GET    | /user                       | YES   | admin  | Get All Users        | query params                            | [users]
GET    | /user/:id                   | YES   | admin  | Get One User         |                                         | {user}
GET    | /pet/                       | YES   | admin  | Get All Pets         |                                         | [pets]
GET    | /pet/:id                    | YES   | admin  | Get One Pet          |                                         | {pet}
PUT    | /user/:id                   | YES   | admin  | Update One User      |   `userName`, `email`, `password`       | 'Profile updated'
DELETE | /user/:id                   | YES   | admin  | Delete One Profile   |                                         | 'Profile Removed'











