
# ![](https://github.com/dearmascarlos/Proyect-2-PeTinder-/blob/main/assets/logo_api_xl.png)

### User Signup/Login

METHOD | ENDPOINT                    | TOKEN | ROLE | DESCRIPTION           | POST PARAMS                                   | RETURNS
-------|-----------------------------|-------|------|-----------------------|-----------------------------------------------|--------------------
POST   | /auth/signup                | -     | user | User Signup           | `username`, `email`, `password`               | {msg: string, token: token }
POST   | /auth/login                 | -     | user | Login                 | `email`, `password`                           | `token`

### User Endpoints

METHOD | ENDPOINT                    | TOKEN | ROLE   | DESCRIPTION           | POST PARAMS                                  | RETURNS
-------|-----------------------------|-------|--------|-----------------------|----------------------------------------------|--------------------
POST   | /user/direction             | YES   | user   | Create  own address   | `country`, `city`, `street`                  | 'Address created'
POST   | /user/pet/                  | YES   | user   | Create own Pet        | `name`, `age`, `gender`, `friend`            | 'Pet created', {pet}
GET    | /user/profile               | YES   | user   | Get Own Profile       |                                              | {user}
GET    | /user/pet                   | YES   | user   | See Own all pets      |                                              | [{pet}]
GET    | /user/pet/:id               | YES   | user   | See Own One pet       |                                              | {pet}
GET    | /user/direction             | YES   | user   | See Own address       |                                              | {direction}
GET    | /user/pet/date              | YES   | user   | See All Own Date      |                                              | [{date}]
GET    | /user/breed                 | YES   | user   | See All Own Breeds    |                                              | [{breed}]
GET    | /user                       | YES   | admin  | Get All Users         |                                              | [users]
GET    | /user/:id                   | YES   | admin  | Get One User          |                                              | {user}
PUT    | /user/profile               | YES   | user   | Update Own Profile    | `name`, `age`, `email`, `pets`, `direction`  | 'Profile updated'
PUT    | /user/direction             | YES   | user   | Update Own address    | `country`, `city`, `street`                  |'Address updated'
PUT    | /user/:id                   | YES   | admin  | Update One User       | `user_name`, `email`, `password`             | 'Profile updated'
DELETE | /user/profile               | YES   | user   | Delete Own Profile    |                                              | 'Profile Removed'
DELETE | /user/direction             | YES   | user   | Delete Own address    |                                              |'Address removed'
DELETE | /user/:id                   | YES   | admin  | Delete One User       |                                              | 'User Removed'

### Pet Endpoints

METHOD | ENDPOINT                        | TOKEN | ROLE   | DESCRIPTION            | POST PARAMS                                   | RETURNS
-------|---------------------------------|-------|--------|------------------------|-----------------------------------------------|--------------------
POST   | /pet                            | YES   | admin  | Create Pet             |  `userId`, `name`, `age`, `gender`, `friend`  | 'Pet created'
POST   | /pet/:petId1/date/:petId2       | YES   | user   | Create Own Pet Date    |  `meetPoint`, `date`                          | 'Date created'
GET    | /pet                            | YES   | user   | See All Pets           |                                               | [{pet}]
GET    | /pet/profile:id                 | YES   | user   | Get Own Pet profile    |                                               | {pets} 
GET    | /pet/friends                    | YES   | user   | See All Own Friends    |                                               | [friend]
GET    | /pet/:id                        | YES   | admin  | Get One Pet            |                                               | {pet}
GET    | /pet/:id/date                   | YES   | user   | See Own Pet Dates      |  query params                                 | [{date}] 
GET    | /pet/:id/breed                  | YES   | user   |See Own Pet breed       |                                               | {breed} 
PUT    | /pet/profile/:id                | YES   | user   | Update Own pet Profile |  `name`, `age`, `gender`                      | 'Profile updated'
PUT    | /pet/:petId/friends/:friendId   | YES   | user   | Add Friend             |                                               | 'Friend added'
PUT    | /pet/:id                        | YES   | admin  | Update One Pet         | `pet_name`, `gender`                          | 'Profile updated'
PUT    | /pet/date/:id                   | YES   | user   | Update Own Pet Date    |  `meetPoint`, `date`, `petId1`, `petId2`      | 'Date updated
PUT    | /pet/:id/breed                  | YES   | user   | Update Own breed       |  `animal`, `breedName`, `size`                | 'Breed updated'
DELETE | /pet/profile/:id                | YES   | user   | Delete Own Pet Profile |                                               | 'Profile removed'
DELETE | /pet/:id/friends/:friendId      | YES   | user   | Remove Own Friends     |                                               | 'Friend removed'
DELETE | /pet/:id                        | YES   | admin  | Delete One Pet         |                                               | 'Pet removed'
DELETE | /pet/date/:id                   | YES   | user   | Delete Own Pet date    |                                               | 'Date removed'

### Directions Endpoints

METHOD | ENDPOINT                        | TOKEN | ROLE   | DESCRIPTION          | POST PARAMS                                   | RETURNS
-------|---------------------------------|-------|--------|----------------------|-----------------------------------------------|--------------------
POST   | /direction                      | YES   | admin  | Create One address   |  `country`, `city`, `street`                  | 'Address created'
GET    | /direction                      | YES   | admin  | See All address      |                                               | [{direction}]
GET    | /direction/:id                  | YES   | admin  | See One address      |                                               | {direction}
PUT    | /direction/:id                  | YES   | admin  | Update One address   |  `country`, `city`, `street`                  | 'Address updated'
DELETE | /direction/:id                  | YES   | admin  | Delete One address   |                                               | 'Address removed'

### Date Endpoints

METHOD  | ENDPOINT                       | TOKEN | ROLE   | DESCRIPTION          | POST PARAMS                                   | RETURNS
--------|--------------------------------|-------|--------|----------------------|-----------------------------------------------|--------------------
POST    | /date/:petId1/:petId2          | YES   | admin  | Create One Date      |  `meetPoint`, `date`                          | 'Date created'
GET     | /date/:id                      | YES   | admin  | See One date         |                                               | {date}
GET     | /date                          | YES   | admin  | See All dates        |                                               | [{date}]
PUT     | /date/:id                      | YES   | admin  | Update One Date      |  `meetPoint`, `date`                          | 'Date updated'
PUT     | /date/:id/cancelled            | YES   | user   | Cancell date         |                                               | 'Date cancelled' 
PUT     | /date/:id/acepted              | YES   | user   | Acepted date         |                                               | 'Date acepted' 
DELETE  | /date/:id                      | YES   | admin  | Delete One date      |                                               | 'Date removed'

### Breed Endpoints

METHOD  | ENDPOINT                       | TOKEN | ROLE   | DESCRIPTION          | POST PARAMS                                   | RETURNS
--------|--------------------------------|-------|--------|----------------------|-----------------------------------------------|--------------------
POST    | /breed                         | YES   | admin  | Create One Breed     |  `animal`, `breedName`, `size`                | 'Breed created'
GET     | /breed/:id                     | YES   | admin  | See One Breed        |                                               | {breed}
GET     | /breed                         | YES   | admin  | See All Breeds       |                                               | [{breed}]
PUT     | /breed/:id                     | YES   | admin  | Update One Breed     |  `animal`, `breedName`, `size`                | 'Breed updated'
DELETE  | /breed/:id                     | YES   | admin  | Delete One breed     |                                               | 'Breed removed'
