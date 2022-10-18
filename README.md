
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
GET    | /user/pet                   | YES   | user   | See Own all pets      |                                             | [{pet}]
GET    | /user/pet/:id               | YES   | user   | See Own One pet       |                                             | {pet}
GET    | /user/direction             | YES   | user   | See Own address       |                                             | {direction}
POST   | /user/direction             | YES   | user   | Create  own address   |  `country`, `city`, `street`                  | 'Address created'
PUT    | /user/direction             | YES   | user   | Update Own address    |  `country`, `city`, `street`                  |'Address updated'
DELETE | /user/direction             | YES   | user   | Update Own address    |  `country`, `city`, `street`                  |'Address updated'|
POST   | /user/pet/                  | YES   | user   | Create own Pet       |   `name`, `age`, `gender`, `friend`            | 'Pet created', {pet}
GET    | /user                       | YES   | admin  | Get All Users        | query params                                   | [users]
GET    | /user/:id                   | YES   | admin  | Get One User         |                                                | {user}
PUT    | /user/:id                   | YES   | admin  | Update One User      | `user_name`, `email`, `password`              | 'Profile updated'
DELETE | /user/:id                   | YES   | admin  | Delete One User      |                                                | 'User Removed'

### Pet Endpoints

METHOD | ENDPOINT                        | TOKEN | ROLE   | DESCRIPTION           | POST PARAMS                                  | RETURNS
-------|--------------------------------|-------|--------|-----------------------|----------------------------------------------|--------------------
GET    | /pet                          | YES   | user   | See All Pets          |                                              | [{pet}]
GET    | /pet/profile:id               | YES   | user   | Get Own Pet profile   |                                              | {pets} 
PUT    | /pet/profile/:id              | YES   | user   | Update Own pet Profile |  `name`, `age`, `gender`                   | 'Profile updated'
DELETE | /pet/profile/:id              | YES   | user   | Delete Own Profile    |                                              | 'Profile Removed'
PUT    | /pet/:petId/friends/:friendId | YES   | user   | Add Friend            |                                              | 'Friend Added'
GET    | /pet/friends                  | YES   | user   | See All Own Friends    |                                              | [friend]
DELETE | /pet/:petId/friends/:friendId | YES   | user   | Remove Own Friends      |                                              | 'Friend Removed'
POST   | /pet                          | YES   | Admin   | Create Pet           |  `userId`, `name`, `age`, `gender`, `friend`  | 'Pet created'
GET    | /pet/:id                      | YES   | admin  | Get One Pet          |                                              | {pet}
PUT    | /pet/:id                      | YES   | admin  | Update One Pet       | `pet_name`, `gender`, ``                   | 'Profile updated'
DELETE | /pet/:id                      | YES   | admin  | Delete One Pet       |                                             | 'Pet Removed'
 
### Directions Endpoints

METHOD | ENDPOINT                    | TOKEN | ROLE   | DESCRIPTION          | POST PARAMS                                    | RETURNS
-------|-----------------------------|-------|--------|----------------------|------------------------------------------------|--------------------

