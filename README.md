# Buffy the Vampire Slayer and Angel API

Ever wanted to get all episodes, cast and crew data from *Buffy the Vampire Slayer* and it's spin-off *Angel*?

Well, after 32 hours of staring at IMDb, a couple of existential crisis and trying to remember why I decided to develop this in the first place, the API is finally here!

## Production Host
:globe_with_meridians: [https://btvs-angel-api-production-3a72.up.railway.app/](https://btvs-angel-api-production-3a72.up.railway.app/)

## API

### `GET /api/buffy`

Get all 144 episodes of Buffy the Vampire Slayer in the following JSON format:

> [https://btvs-angel-api-production-3a72.up.railway.app/api/buffy](https://btvs-angel-api-production-3a72.up.railway.app/api/buffy)

<details>
  <summary>Show full returned data :dizzy:</summary>

  
 ``` [
    {
        "_id": "6463378f250179fbf47aab14",
        "episodeName": "welcome to the hellmouth",
        "seasonNumber": 1,
        "episodeNumber": 1,
        "hasAired": true,
        "airDate": "march 10, 1997",
        "description": "when teen vampire slayer buffy tries to start a new life at sunnydale high, she discovers that the school sits atop a demonic dimensional portal.",
        "director": [
            {
                "_id": "645e0e469bf1e1a7235d3c9c",
                "name": "charles martin smith",
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BNTM2Y2MwYTYtYmIzZi00YzQ0LTgwN2UtOTQ5YTZjYTBjNTYxXkEyXkFqcGdeQXVyNzY3NTc4OTQ@._V1_FMjpg_UY720_.jpg"
            },
            {
                "_id": "645dfb21c7ec73d3f9318a49",
                "name": "joss whedon",
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTg5MzQ0MDA4MF5BMl5BanBnXkFtZTcwNzUwOTk4OQ@@._V1_FMjpg_UY720_.jpg"
            }
        ],
        "writer": [
            {
                "_id": "645dfb21c7ec73d3f9318a49",
                "name": "joss whedon",
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTg5MzQ0MDA4MF5BMl5BanBnXkFtZTcwNzUwOTk4OQ@@._V1_FMjpg_UY720_.jpg"
            },
            {
                "_id": "645e136f9bf1e1a7235d3cbc",
                "name": "matt kiene",
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BY2MwOGIyZGYtNzgxZC00N2Q5LTllYjItM2U4MTkwMDBjYzUyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_FMjpg_UX500_.jpg"
            },
            {
                "_id": "645e13a79bf1e1a7235d3cbe",
                "name": "joe reinkemeyer",
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BY2MwOGIyZGYtNzgxZC00N2Q5LTllYjItM2U4MTkwMDBjYzUyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_FMjpg_UX500_.jpg"
            }
        ],
        "trivia": "the scene with buffy and giles at the bronze was anthony head's audition scene.",
        "episodeCast": [
            {
                "_id": "645cbd33d39c7d5df28f4ed8",
                "name": "sarah michelle gellar",
                "characterPlayed": [
                    "Buffy Summers",
                    "Buffy Bot",
                    "Faith"
                ],
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BNzA5MDA4MTEwOV5BMl5BanBnXkFtZTcwNzY2MjcyNw@@._V1_FMjpg_UY2048_.jpg"
            },
            {
                "_id": "645cc34e029c323e8d35f6e4",
                "name": "nicholas brendon",
                "characterPlayed": [
                    "Xander Harris"
                ],
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTM3NTA3MzM3N15BMl5BanBnXkFtZTYwMTY4NjEz._V1_FMjpg_UX485_.jpg"
            },
            {
                "_id": "645cc41a151db11d78896f92",
                "name": "alyson hannigan",
                "characterPlayed": [
                    "Willow Rosenberg"
                ],
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTkxODc5ODI5OV5BMl5BanBnXkFtZTcwNzExOTUyNw@@._V1_FMjpg_UY749_.jpg"
            },
            {
                "_id": "645cc880151db11d78896f9e",
                "name": "charisma carpenter",
                "characterPlayed": [
                    "Cordelia Chase"
                ],
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BNGZiNjkzMjMtYWRlNC00MDNhLTk2MmEtOTg5ZDc2YjhhYmFmXkEyXkFqcGdeQXVyMTk5NjY5MDY@._V1_FMjpg_UX1170_.jpg"
            },
            {
                "_id": "645cc57e151db11d78896f94",
                "name": "anthony head",
                "characterPlayed": [
                    "Rupert Giles"
                ],
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTI3NDQ3NTMwNF5BMl5BanBnXkFtZTYwMzY4NjEz._V1_FMjpg_UX485_.jpg"
            },
            {
                "_id": "645df0b9c7ec73d3f9318a1f",
                "name": "mark metcalf",
                "characterPlayed": [
                    "The Master"
                ],
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BODA0MDM4NzUyNV5BMl5BanBnXkFtZTcwOTgwNTUwOA@@._V1_FMjpg_UX846_.jpg"
            },
            {
                "_id": "645cc910151db11d78896fa0",
                "name": "david boreanaz",
                "characterPlayed": [
                    "angel",
                    "angelus",
                    "marcus roscoe"
                ],
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTY0MDA2MTI4Ml5BMl5BanBnXkFtZTcwNzI4NDE3Mw@@._V1_FMjpg_UX278_.jpg"
            },
            {
                "_id": "645df9a2c7ec73d3f9318a43",
                "name": "ken lerner",
                "characterPlayed": [
                    "Principal Bob Flutie"
                ],
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTYzOTg0NzY4MV5BMl5BanBnXkFtZTcwMTUxOTgyMQ@@._V1_FMjpg_UX450_.jpg"
            },
            {
                "_id": "645cc80d151db11d78896f9c",
                "name": "kristine sutherland",
                "characterPlayed": [
                    "Joyce Summers"
                ],
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BMjE5NTMzNjYwMF5BMl5BanBnXkFtZTcwNjIxODcyNA@@._V1_FMjpg_UX576_.jpg"
            },
            {
                "_id": "645df489c7ec73d3f9318a2f",
                "name": "julie benz",
                "characterPlayed": [
                    "Darla"
                ],
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BOTE3ZjAxOWQtMzc2Ny00ZjU0LWJkMDMtNmQ5ZjJlNzc1NTFlXkEyXkFqcGdeQXVyMjMwNTM1OQ@@._V1_FMjpg_UX585_.jpg"
            }
        ],
        "episodeScreenshot": "https://m.media-amazon.com/images/M/MV5BMTU2NDQ1NTI2MF5BMl5BanBnXkFtZTgwNDMzMTM1NjM@._V1_FMjpg_UX1000_.jpg",
        "imdbLink": "https://www.imdb.com/title/tt0452716/",
        "__v": 0
    }
    ]
```
</details>

### `GET /api/buffy/season/{seasonNumber}`

Returns an arrary with all Buffy the Vampire episodes in season `{seasonNumber}` e.g. `GET /api/buffy/season/1`:
> [https://btvs-angel-api-production-3a72.up.railway.app/api/buffy/season/1](https://btvs-angel-api-production-3a72.up.railway.app/api/buffy/season/1)

> [https://btvs-angel-api-production-3a72.up.railway.app/api/buffy](https://btvs-angel-api-production-3a72.up.railway.app/api/buffy)

