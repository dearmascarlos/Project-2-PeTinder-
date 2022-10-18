# Proyect-2-PeTinder-

### User Signup/Login

METHOD | ENDPOINT                    | TOKEN | ROLE | DESCRIPTION           | POST PARAMS                             | RETURNS
-------|-----------------------------|-------|------|-----------------------|-----------------------------------------|--------------------
POST   | /auth/signup                | -     | user | User Signup           | `username`, `email`, `password`         | {msg: string, token: token }
POST   | /auth/login                 | -     | user | Login                 | `email`, `password`                     | `token`


### User Endpoints

METHOD | ENDPOINT                    | TOKEN | ROLE   | DESCRIPTION          | POST PARAMS                             | RETURNS
-------|-----------------------------|-------|--------|----------------------|-----------------------------------------|--------------------
GET    | /user/profile               | YES   | user   | Get Own Profile      |                                         | {user}
GET    | /user                       | YES   | admin  | Get All Users        | query params                            | [users]
POST   | /user/search                | YES   | user   | Search One User      | body (userName)                         | {id, userName, tweets, friends}
GET    | /user/:id                   | YES   | admin  | Get One User         |                                         | {user}
PUT    | /user/profile               | YES   | user   | Update Own Profile   |  `userName`, `email`                    | 'Profile updated'
PUT    | /user/:id                   | YES   | admin  | Update One User      |   `userName`, `email`, `password`       | 'Profile updated'
PUT    | /user/friends/:id           | YES   | user   | Add Friend           |                                         | 'Friend Added'
PUT    | /user/friends/:id/remove    | YES   | user   | Remove Friend        |                                         | 'Friend Removed'
DELETE | /user/profile               | YES   | user   | Delete Own Profile   |                                         | 'Profile Removed'
DELETE | /user/:id                   | YES   | admin  | Delete One Profile   |                                         | 'Profile Removed'
