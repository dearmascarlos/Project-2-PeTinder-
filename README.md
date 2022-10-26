
# ![](https://github.com/dearmascarlos/Proyect-2-PeTinder-/blob/main/assets/logo_api_xl.png)

### User Signup/Login

METHOD | ENDPOINT                    | TOKEN | ROLE | DESCRIPTION           | POST PARAMS                                   | RETURNS
-------|-----------------------------|-------|------|-----------------------|-----------------------------------------------|--------------------
POST   | /auth/signup                | -     | user | User Signup           | `name`, `age`, `email`, `password`            | {msg: string, token: token }
POST   | /auth/login                 | -     | user | Login                 | `email`, `password`                           | {msg: string, token: token }
GET    | /auth/logout                | -     | user | Logout                |                                               | {msg: string, token }

### User Endpoints

METHOD | ENDPOINT                    | TOKEN | ROLE   | DESCRIPTION           | POST PARAMS                                  | RETURNS
-------|-----------------------------|-------|--------|-----------------------|----------------------------------------------|--------------------
POST   | /user/address               | YES   | user   | Create  own address   | `country`, `city`, `street`                  | 'Address created'
POST   | /user/pet/                  | YES   | user   | Create own Pet        | `name`, `age`, `gender`, `friend`            | 'Pet created', {pet}
GET    | /user/profile               | YES   | user   | Get Own Profile       |                                              | {user}
GET    | /user/address               | YES   | user   | See Own address       |                                              | {direction}
GET    | /user/pet/date              | YES   | user   | See All Own Date      |                                              | [{date}]
GET    | /user/breed                 | YES   | user   | See All Own Breeds    |                                              | [{breed}]
GET    | /user                       | YES   | admin  | Get All Users         |                                              | [users]
GET    | /user/:id                   | YES   | admin  | Get One User          |                                              | {user}
PUT    | /user/profile               | YES   | user   | Update Own Profile    | `name`, `age`, `email`, `pets??`, `direction??`| 'Profile updated'
PUT    | /user/address               | YES   | user   | Update Own address    | `country`, `city`, `street`                  |'Address updated'
PUT    | /user/:id                   | YES   | admin  | Update One User       | `user_name`, `age`, `email`, `password`      | 'Profile updated'
DELETE | /user/profile               | YES   | user   | Delete Own Profile    |                                              | 'Profile Removed'
DELETE | /user/address               | YES   | user   | Delete Own address    |                                              |'Address removed'
DELETE | /user/:id                   | YES   | admin  | Delete One User       |                                              | 'User Removed'

### Pet Endpoints

METHOD | ENDPOINT                        | TOKEN | ROLE   | DESCRIPTION            | POST PARAMS                                   | RETURNS
-------|---------------------------------|-------|--------|------------------------|-----------------------------------------------|--------------------
POST   | /pet                            | YES   | admin  | Create Pet             |  `userId`, `name`, `age`, `gender`            | 'Pet created'
POST   | /pet/:petId1/date               | YES   | user   | Create Own Pet Date    |  `meetPoint`, `date`, `petId2`                | 'Date created'
GET    | /pet                            | YES   | user   | See All Pets           |                                               | [{pet}]
GET    | /pet/profile:id                 | YES   | user   | Get Own Pet profile    |                                               | {pets} 
GET    | /pet/friends                    | YES   | user   | See All Own Friends    |                                               | [friend]
GET    | /pet/:id                        | YES   | user   | See One Pet            |                                               | {pet}
GET    | /pet/:id/date                   | YES   | user   | See Own Pet Dates      |  query params                                 | [{date}] 
PUT    | /pet/profile/:id                | YES   | user   | Update Own pet Profile |  `name`, `age`, `gender`, `breedId`           | 'Profile updated'
PUT    | /pet/:petId/friend/:id          | YES   | user   | Add Friend             |                                               | 'Friend added'
PUT    | /pet/:id                        | YES   | admin  | Update One Pet         | `name`, `age`, `gender`                       | 'Pet profile updated', {pet}
PUT    | /pet/date/:id                   | YES   | user   | Update Own Pet Date    |  `meetPoint`, `date`, `petId1`, `petId2`      | 'Date updated
DELETE | /pet/profile/:id                | YES   | user   | Delete Own Pet Profile |                                               | 'Profile removed'
DELETE | /pet/:id/friends/:id            | YES   | user   | Remove Own Friends     |                                               | 'Friend removed'
DELETE | /pet/:id                        | YES   | admin  | Delete One Pet         |                                               | 'Pet removed'
DELETE | /pet/date/:id                   | YES   | user   | Delete Own Pet date    |                                               | 'Date removed'

### Address Endpoints

METHOD | ENDPOINT                        | TOKEN | ROLE   | DESCRIPTION          | POST PARAMS                                   | RETURNS
-------|---------------------------------|-------|--------|----------------------|-----------------------------------------------|--------------------
POST   | /address                        | YES   | admin  | Create One address   |  `country`, `city`, `street`                  | 'Address created'
GET    | /address                        | YES   | admin  | See All addresses    |                                               | [{direction}]
GET    | /address/:id                    | YES   | admin  | See One address      |                                               | {direction}
PUT    | /address/:id                    | YES   | admin  | Update One address   |  `country`, `city`, `street`                  | 'Address updated'
DELETE | /address/:id                    | YES   | admin  | Delete One address   |                                               | 'Address removed'

### Date Endpoints

METHOD  | ENDPOINT                       | TOKEN | ROLE   | DESCRIPTION          | POST PARAMS                                   | RETURNS
--------|--------------------------------|-------|--------|----------------------|-----------------------------------------------|--------------------
POST    | /date                          | YES   | admin  | Create One Date      |  `meetPoint`, `date`, `petId1`, `petId2`      | 'Date created'
GET     | /date/:id                      | YES   | admin  | See One date         |                                               | {date}
GET     | /date                          | YES   | admin  | See All dates        |                                               | [{date}]
GET     | /date/petId/date               | YES   | user   | See Own Pet Dates    |  query params                                 | [{date}] 
PUT     | /date/:id                      | YES   | admin  | Update One Date      |  `meetPoint`, `date`                          | 'Date updated'
PUT     | /date/:id/cancelled            | YES   | user   | Cancell date         |                                               | 'Date cancelled' 
PUT     | /date/:id/acepted              | YES   | user   | Accepted date        |                                               | 'Date accepted' 
DELETE  | /date/:id                      | YES   | admin  | Delete One date      |                                               | 'Date removed'

### Breed Endpoints

METHOD  | ENDPOINT                       | TOKEN | ROLE   | DESCRIPTION          | POST PARAMS                                   | RETURNS
--------|--------------------------------|-------|--------|----------------------|-----------------------------------------------|--------------------
POST    | /breed                         | YES   | admin  | Create One Breed     |  `animal`, `breedName`, `size`                | 'Breed created'
GET     | /breed/:id                     | YES   | admin  | See One Breed        |                                               | {breed}
GET     | /breed                         | YES   | admin  | See All Breeds       |                                               | [{breed}]
PUT     | /breed/:id                     | YES   | admin  | Update One Breed     |  `animal`, `breedName`, `size`                | 'Breed updated'
DELETE  | /breed/:id                     | YES   | admin  | Delete One breed     |                                               | 'Breed removed'
