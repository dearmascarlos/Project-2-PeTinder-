
# ![](https://github.com/dearmascarlos/Proyect-2-PeTinder-/blob/main/logo_api_xl.png)

### User Signup/Login

METHOD | ENDPOINT                    | TOKEN | ROLE | DESCRIPTION           | POST PARAMS                             | RETURNS
-------|-----------------------------|-------|------|-----------------------|-----------------------------------------|--------------------
POST   | /auth/signup                | -     | user | User Signup           | `username`, `email`, `password`         | {msg: string, token: token }
POST   | /auth/login                 | -     | user | Login                 | `email`, `password`                     | `token`

### User Endpoints

METHOD | ENDPOINT                    | TOKEN | ROLE   | DESCRIPTION           | POST PARAMS                                  | RETURNS
-------|-----------------------------|-------|--------|-----------------------|----------------------------------------------|--------------------
GET    | /user/profile               | YES   | user   | Get Own Profile       |                                              | {user}
PUT    | /user/profile               | YES   | user   | Update Own Profile    |  `name`, `age`, `email`, `pets`, `direction` | 'Profile updated'
DELETE | /user/profile               | YES   | user   | Delete Own Profile    |                                              | 'Profile Removed'
GET    | /user/direction             | YES   | user   | See Own address       |                                             | {direction}
POST   | /user/direction             | YES   | user   | Create  own address   |  `country`, `city`, `street`                  | 'Address created'
PUT    | /user/direction             | YES   | user   | Update Own address    |  `country`, `city`, `street`                  |'Address updated'
DELETE | /user/direction             | YES   | user   | Update Own address    |  `country`, `city`, `street`                  |'Address updated'|

### Pet Endpoints

METHOD | ENDPOINT                    | TOKEN | ROLE   | DESCRIPTION           | POST PARAMS                                  | RETURNS
-------|-----------------------------|-------|--------|-----------------------|----------------------------------------------|--------------------
GET    | /pet                        | YES   | user   | Get All Own Pets      |                                              | [pets]
GET    | /pet/profile:id             | YES   | user   | Get Own Pet profile   |                                              | {pets} 
GET    | /pet/search                 | YES   | user   | Search One pet by breed | body: `breedName`                            | [pets], user_name}
PUT    | /pet/profile                | YES   | user   | Update Own pet Profile |  `name`, `age`, `gender`                   | 'Profile pet updated'
PUT    | /pet/friends/:id            | YES   | user   | Add Friend            |                                             | 'Friend Added'
PUT    | /pet/friends/:id/remove     | YES   | user   | Remove Friend         |                                              | 'Friend Removed'
DELETE | /pet/profile                | YES   | user   | Delete Own Profile    |                                              | 'Profile Removed'



### Admin Endpoints

METHOD | ENDPOINT                    | TOKEN | ROLE   | DESCRIPTION          | POST PARAMS                             | RETURNS
-------|-----------------------------|-------|--------|----------------------|-----------------------------------------|--------------------
GET    | /user                       | YES   | admin  | Get All Users        | query params                            | [users]
GET    | /user/:id                   | YES   | admin  | Get One User         |                                         | {user}
GET    | /pet/                       | YES   | admin  | Get All Pets         |                                         | [pets]
GET    | /pet/:id                    | YES   | admin  | Get One Pet          |                                         | {pet}
PUT    | /user/:id                   | YES   | admin  | Update One User      | `user_name`, `email`, `password`        | 'Profile updated'
PUT    | /pet/:id                    | YES   | admin  | Update One Pet       | `pet_name`, `gender`, ``            | 'Profile updated'
DELETE | /user/:id                   | YES   | admin  | Delete One User      |                                         | 'User Removed'
DELETE | /pet/:id                    | YES   | admin  | Delete One Pet       |                                         | 'Pet Removed'
