# Buffy the Vampire Slayer and Angel API

Ever wanted to get all episodes, cast and crew data from *Buffy the Vampire Slayer* and it's spin-off *Angel*?

Well, after 32 hours of staring at IMDb, a couple of existential crisis and trying to remember why I decided to develop this in the first place, the API is finally here!

## Production Host
:globe_with_meridians: [https://buffy-angel-api.up.railway.app/](https://buffy-angel-api.up.railway.app/)

## API

- [Buffy the Vampire Slayer](#buffy-the-vampire-slayer-endpoint)
- [Angel](#angel-endpoint)
- [Actors, Directors and Writers](#actors-directors-and-writers-endpoint)
## Buffy the Vampire Slayer Endpoint

### `GET /api/buffy`

Get all 144 episodes of Buffy the Vampire Slayer in the following JSON format:

> [https://buffy-angel-api.up.railway.app/api/buffy](https://buffy-angel-api.up.railway.app/api/buffy)

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

Returns an arrary with all Buffy the Vampire episodes in season `{seasonNumber}` e.g. `GET /api/buffy/season/2`:
> [https://buffy-angel-api.up.railway.app/api/buffy/season/2](https://buffy-angel-api.up.railway.app/api/buffy/season/2)

<details>
    <summary>Show full returned data :yellow_heart:</summary>

  
  ```
  [
    {
        "_id": "6464a6ea2b7ab8cc46a67b57",
        "episodeName": "when she was bad",
        "seasonNumber": 2,
        "episodeNumber": 1,
        "hasAired": true,
        "airDate": "september 15, 1997",
        "description": "buffy returns from summer vacation sporting an attitude and suffers from recurring nightmares involving the master. meanwhile, the anointed one and his followers plot their revenge.",
        "director": [
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
                "_id": "645e12169bf1e1a7235d3cb4",
                "name": "rob deshotel",
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BY2MwOGIyZGYtNzgxZC00N2Q5LTllYjItM2U4MTkwMDBjYzUyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_FMjpg_UX500_.jpg"
            },
            {
                "_id": "645e11d59bf1e1a7235d3cb2",
                "name": "dean batali",
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BY2MwOGIyZGYtNzgxZC00N2Q5LTllYjItM2U4MTkwMDBjYzUyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_FMjpg_UX500_.jpg"
            }
        ],
        "trivia": "the title is derived from a poem by henry wadsworth longfellow: 'and when she was good, she was very, very good. but when she was bad she was horrid.'",
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
                "_id": "645cc57e151db11d78896f94",
                "name": "anthony head",
                "characterPlayed": [
                    "Rupert Giles"
                ],
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTI3NDQ3NTMwNF5BMl5BanBnXkFtZTYwMzY4NjEz._V1_FMjpg_UX485_.jpg"
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
                "_id": "645debadc7ec73d3f9318a07",
                "name": "robia scott",
                "characterPlayed": [
                    "Jenny Calendar"
                ],
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BOTlmNGIxMmMtZGJlMC00ZGI2LThmNWItZjI5MmZkODE0ZTY5XkEyXkFqcGdeQXVyMTAxMDI4Nzgy._V1_FMjpg_UX329_.jpg"
            },
            {
                "_id": "645df917c7ec73d3f9318a41",
                "name": "dean butler",
                "characterPlayed": [
                    "Hank Summers"
                ],
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BN2IwZTQ4NDctZWQ5ZC00NzRjLTk5MmQtNTYxNjYyMDFlOTZlXkEyXkFqcGdeQXVyMTgxNjM5NQ@@._V1_FMjpg_UY720_.jpg"
            },
            {
                "_id": "645de9a8c7ec73d3f93189ff",
                "name": "armin shimerman",
                "characterPlayed": [
                    "Pricipal Snyder"
                ],
                "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTk0Mjc2NzMwN15BMl5BanBnXkFtZTcwODc4MzEwMg@@._V1_FMjpg_UX329_.jpg"
            }
        ],
        "episodeScreenshot": "https://m.media-amazon.com/images/M/MV5BZWJiMmI2ZDctMjUyYS00YjU2LWJmYjQtYjNmNDRlMGVlNGNmXkEyXkFqcGdeQXVyNTY3NTQ4NzY@._V1_FMjpg_UY720_.jpg",
        "imdbLink": "https://www.imdb.com/title/tt0533523/",
        "__v": 0
    }
  ]
  ```
  
 </details>
 
 ### `GET /api/buffy/season/{seasonNumber}/{episodeNumber}`

Returns an object of Buffy the Vampire season `{seasonNumber}` and episode `{episodeNumber}` e.g. `GET /api/buffy/season/3/9`:
> [https://buffy-angel-api.up.railway.app/api/buffy/season/3/9](https://buffy-angel-api.up.railway.app/api/buffy/season/3/9)


<details>
    <summary>Show full returned data :dizzy:</summary>
  
  ```
  [
  {
    "_id": "6465ec3d69a651c66f57137c",
    "episodeName": "the wish",
    "seasonNumber": 3,
    "episodeNumber": 9,
    "hasAired": true,
    "airDate": "december 08, 1998",
    "description": "cordelia's wish for a buffy-free sunnydale comes true, plunging her into a world where vampires have control of the town.",
    "director": [
      {
        "_id": "645dfdd2c7ec73d3f9318a59",
        "name": "david greenwalt",
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMjAzNzMyNTE5N15BMl5BanBnXkFtZTYwODg3MzA2._V1_FMjpg_UX267_.jpg"
      }
    ],
    "writer": [
      {
        "_id": "645dfb21c7ec73d3f9318a49",
        "name": "joss whedon",
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTg5MzQ0MDA4MF5BMl5BanBnXkFtZTcwNzUwOTk4OQ@@._V1_FMjpg_UY720_.jpg"
      },
      {
        "_id": "645e00a6c7ec73d3f9318a67",
        "name": "marti noxon",
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BODcwOTEwODc1NF5BMl5BanBnXkFtZTgwODk0OTQzMDE@._V1_FMjpg_UX262_.jpg"
      }
    ],
    "trivia": "the vampire dusting effect now starts to feature the vampire's skeleton as they turn to dust.",
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
        "_id": "645cca1650cb12352d89c459",
        "name": "seth green",
        "characterPlayed": [
          "Oz"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BYzFlMDJiZDMtMjA1OS00ZTY1LTgwNGMtNzdiYmRmNDkyNzQ3XkEyXkFqcGdeQXVyMTIzMjg4Mzgx._V1_FMjpg_UX630_.jpg"
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
        "_id": "645cc6f1151db11d78896f98",
        "name": "emma caulfield ford",
        "characterPlayed": [
          "Anya"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BZThmMTRjZjYtZmFlZi00ZmY3LThiY2YtMDg5NGIzNGRiMTA0XkEyXkFqcGdeQXVyMTQwNjI3MTM@._V1_FMjpg_UY720_.jpg"
      },
      {
        "_id": "645deb3fc7ec73d3f9318a05",
        "name": "mercedes mcnab",
        "characterPlayed": [
          "Harmony Kendall"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTI3NjA3NjE4Ml5BMl5BanBnXkFtZTYwNTYxNzAz._V1_FMjpg_UX450_.jpg"
      },
      {
        "_id": "645ccb4450cb12352d89c45d",
        "name": "danny strong",
        "characterPlayed": [
          "Jonathan Levinson"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BNDUxMDYxNTY5Nl5BMl5BanBnXkFtZTYwMjU0NDk3._V1_FMjpg_UX267_.jpg"
      }
    ],
    "episodeScreenshot": "https://m.media-amazon.com/images/M/MV5BNjhmMTQ0YjYtOTBkNS00ZTA5LWE3NzgtZDk1MWMyMzBkMTQyXkEyXkFqcGdeQXVyMjU3NzUyMTU@._V1_FMjpg_UX600_.jpg",
    "imdbLink": "https://www.imdb.com/title/tt0533510/",
    "__v": 0
  }
]
  ```
  </details>

 ### `GET /api/buffy/id={episodeId}`

Returns an object of Buffy the Vampire episode with id of `{episodeId}` e.g. `GET /api/buffy/id=4671d055f80e00da9e9dc0c`:
> [https://buffy-angel-api.up.railway.app/api/buffy/id=4671d055f80e00da9e9dc0c](https://buffy-angel-api.up.railway.app/api/buffy/id=4671d055f80e00da9e9dc0c)

<details>
   <summary>Show full returned data :yellow_heart:</summary>
  
  
```
  [
  {
    "_id": "64671d055f80e00da9e9dc0c",
    "episodeName": "pangs",
    "seasonNumber": 4,
    "episodeNumber": 8,
    "hasAired": true,
    "airDate": "november 23, 1999",
    "description": "on thanksgiving, buffy encounters the spirit of a native american warrior whose people were wiped out by settlers.",
    "director": [
      {
        "_id": "645dff22c7ec73d3f9318a5d",
        "name": "michael lange",
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMjA0NTY4MDA2MV5BMl5BanBnXkFtZTgwNTQwMTQxODE@._V1_FMjpg_UY720_.jpg"
      }
    ],
    "writer": [
      {
        "_id": "645dfb21c7ec73d3f9318a49",
        "name": "joss whedon",
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTg5MzQ0MDA4MF5BMl5BanBnXkFtZTcwNzUwOTk4OQ@@._V1_FMjpg_UY720_.jpg"
      },
      {
        "_id": "645e119d9bf1e1a7235d3cb0",
        "name": "jane espenson",
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMjQ2MDkyNDgyN15BMl5BanBnXkFtZTcwOTk0MDM0Nw@@._V1_FMjpg_UY721_.jpg"
      }
    ],
    "trivia": "the actual chumash people was entrenched along the california central coast - including around modern santa barbara, a probable real-life counterpart to sunnydale - and numbered as many as 20,000 people before contact with europeans. the tribe survives today as the santa ynez band of chumash, which has u.s. recognition as a native american tribe and controls a reservation and casino in santa ynez, california.",
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
        "_id": "645cc5fb151db11d78896f96",
        "name": "james masters",
        "characterPlayed": [
          "Spike"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BZmZkMDYyODgtOTBkYS00YjJiLWE3ZDctNjQ3YTkyNDhkN2FmXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_FMjpg_UX500_.jpg"
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
        "_id": "645cca9050cb12352d89c45b",
        "name": "marc blucas",
        "characterPlayed": [
          "Riley Finn"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMzA4MGMzMTAtMWIxOS00NTEyLTg0Y2EtNjgxYzI0NTg0OTM2XkEyXkFqcGdeQXVyMjkwNDI3MA@@._V1_FMjpg_UX1024_.jpg"
      },
      {
        "_id": "645deb3fc7ec73d3f9318a05",
        "name": "mercedes mcnab",
        "characterPlayed": [
          "Harmony Kendall"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTI3NjA3NjE4Ml5BMl5BanBnXkFtZTYwNTYxNzAz._V1_FMjpg_UX450_.jpg"
      },
      {
        "_id": "645cc6f1151db11d78896f98",
        "name": "emma caulfield ford",
        "characterPlayed": [
          "Anya"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BZThmMTRjZjYtZmFlZi00ZmY3LThiY2YtMDg5NGIzNGRiMTA0XkEyXkFqcGdeQXVyMTQwNjI3MTM@._V1_FMjpg_UY720_.jpg"
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
      }
    ],
    "episodeScreenshot": "https://m.media-amazon.com/images/M/MV5BODNmYjhjMzctY2JiMi00YjdiLTkzZGItOTZjOTlhNGUxMGE1XkEyXkFqcGdeQXVyNzQ3NDI4MjI@._V1_FMjpg_UX993_.jpg",
    "imdbLink": "https://www.imdb.com/title/tt0533469/",
    "__v": 0
  }
]
 ``` 
  
  </details>
  
  
  ## Angel Endpoint
  
  ### `GET /api/angel`

Get all 110 episodes of Angel in the following JSON format:

> [https://buffy-angel-api.up.railway.app/api/angel](https://buffy-angel-api.up.railway.app/api/angel)

<details>
  <summary>Show full returned data :dizzy:</summary>

  
 ``` [
    {
    "_id": "64699b8a370fbaa6481b27fb",
    "episodeName": "city of...",
    "seasonNumber": 1,
    "episodeNumber": 1,
    "hasAired": true,
    "airDate": "october 05, 1999",
    "description": "angel relocates to los angeles, where he encounters a stranger who experiences visions of those in need, and a woman who lives in fear of a vampire.",
    "director": [
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
        "_id": "645dfdd2c7ec73d3f9318a59",
        "name": "david greenwalt",
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMjAzNzMyNTE5N15BMl5BanBnXkFtZTYwODg3MzA2._V1_FMjpg_UX267_.jpg"
      }
    ],
    "trivia": "the vampire prosthetics (excepting angel's) were a newly-created prototype design for this episode, as the production team wanted to try a darker, scarier look. however, they were unhappy with the effect, and soon returned to buffy-style vamp-faces.",
    "episodeCast": [
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
        "_id": "645cc880151db11d78896f9e",
        "name": "charisma carpenter",
        "characterPlayed": [
          "Cordelia Chase"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BNGZiNjkzMjMtYWRlNC00MDNhLTk2MmEtOTg5ZDc2YjhhYmFmXkEyXkFqcGdeQXVyMTk5NjY5MDY@._V1_FMjpg_UX1170_.jpg"
      },
      {
        "_id": "645e1bf19bf1e1a7235d3ce6",
        "name": "glenn quinn",
        "characterPlayed": [
          "Allen Doyle"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTc2NDMwNjI4MV5BMl5BanBnXkFtZTYwNjkwOTQ2._V1_FMjpg_UX325_.jpg"
      },
      {
        "_id": "645e1a439bf1e1a7235d3ce0",
        "name": "christian kane",
        "characterPlayed": [
          "Lindsey McDonald"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTUxMzYzNDQ0MV5BMl5BanBnXkFtZTcwMjY5Mzk0Mw@@._V1_FMjpg_UX263_.jpg"
      }
    ],
    "episodeScreenshot": "https://m.media-amazon.com/images/M/MV5BMDk5Mjk5NDctNzg1Zi00ZjcxLWE2YjAtOWM5NmRhZTA1OTc3XkEyXkFqcGdeQXVyNTY3NTQ4NzY@._V1_FMjpg_UX425_.jpg",
    "imdbLink": "https://www.imdb.com/title/tt0512834/",
    "__v": 0
  }
    ]
```
</details>

### `GET /api/angel/season/{seasonNumber}`

Returns an arrary with all Angel episodes in season `{seasonNumber}` e.g. `GET /api/angel/season/5`:
> [https://buffy-angel-api.up.railway.app/api/angel/season/5](https://buffy-angel-api.up.railway.app/api/angel/season/5)

<details>
    <summary>Show full returned data :yellow_heart:</summary>

  
  ```
  [
    {
    "_id": "646b22fe2017e64a25df6804",
    "episodeName": "conviction",
    "seasonNumber": 5,
    "episodeNumber": 1,
    "hasAired": true,
    "airDate": "october 01, 2003",
    "description": "angel and the gang adjust to life at wolfram & hart, while angel lets loose the shocking contents of a package from sunnydale.",
    "director": [
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
        "_id": "645dfdd2c7ec73d3f9318a59",
        "name": "david greenwalt",
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMjAzNzMyNTE5N15BMl5BanBnXkFtZTYwODg3MzA2._V1_FMjpg_UX267_.jpg"
      }
    ],
    "trivia": "alexis denisof was diagnosed with bell's palsy just before filming of the final season commenced. during the shooting, joss whedon was careful to keep most of alexis' shots on his right profile, as the left side of his face was fairly immobile at the time.",
    "episodeCast": [
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
        "_id": "645cc5fb151db11d78896f96",
        "name": "james masters",
        "characterPlayed": [
          "Spike"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BZmZkMDYyODgtOTBkYS00YjJiLWE3ZDctNjQ3YTkyNDhkN2FmXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_FMjpg_UX500_.jpg"
      },
      {
        "_id": "645e18439bf1e1a7235d3cd6",
        "name": "j. august richards",
        "characterPlayed": [
          "Charles Gunn"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMjE4NTIwODkwNF5BMl5BanBnXkFtZTYwODkzNjEz._V1_FMjpg_UX485_.jpg"
      },
      {
        "_id": "645e18ef9bf1e1a7235d3cda",
        "name": "amy acker",
        "characterPlayed": [
          "Winifred Burkle",
          "Illyria"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTczNjg5Mzc0MV5BMl5BanBnXkFtZTcwODg0NTM2OQ@@._V1_FMjpg_UY720_.jpg"
      },
      {
        "_id": "645e18959bf1e1a7235d3cd8",
        "name": "andy hallett",
        "characterPlayed": [
          "Lorne"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTk5MzUzMDIxOV5BMl5BanBnXkFtZTcwNDQzODczMQ@@._V1_FMjpg_UX400_.jpg"
      },
      {
        "_id": "645defbcc7ec73d3f9318a19",
        "name": "alexis denisof",
        "characterPlayed": [
          "Wesley Wyndam-Pryce"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTcyMTg3MDU2NV5BMl5BanBnXkFtZTcwNjk0NTM2OQ@@._V1_FMjpg_UX600_.jpg"
      },
      {
        "_id": "645e1cb29bf1e1a7235d3cea",
        "name": "sarah thompson",
        "characterPlayed": [
          "Eve"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMGRiYjFhZjctYTlhYy00NGI3LTk1MTctNDNhMDJhZDA4YTQ5XkEyXkFqcGdeQXVyMDMzOTYyMQ@@._V1_FMjpg_UX600_.jpg"
      },
      {
        "_id": "645deb3fc7ec73d3f9318a05",
        "name": "mercedes mcnab",
        "characterPlayed": [
          "Harmony Kendall"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTI3NjA3NjE4Ml5BMl5BanBnXkFtZTYwNTYxNzAz._V1_FMjpg_UX450_.jpg"
      },
      {
        "_id": "645e201e9bf1e1a7235d3cf6",
        "name": "jonathan m. woodward",
        "characterPlayed": [
          "Knox",
          "Holden Webster"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMjA3Njg1NDUzM15BMl5BanBnXkFtZTYwNzU2OTky._V1_FMjpg_UX400_.jpg"
      }
    ],
    "episodeScreenshot": "https://m.media-amazon.com/images/M/MV5BNDI3OTBhYmUtY2NlMC00YzBmLTk2NzMtMzVmZGJiZTE2N2ZmXkEyXkFqcGdeQXVyNTA4NzExMDg@._V1_FMjpg_UX600_.jpg",
    "imdbLink": "https://www.imdb.com/title/tt0512835/",
    "__v": 0
  }
  ]
  ```
  
 </details>
 
 ### `GET /api/angel/season/{seasonNumber}/{episodeNumber}`

Returns an object of Angel season `{seasonNumber}` and episode `{episodeNumber}` e.g. `GET /api/angel/season/1/8`:
> [https://buffy-angel-api.up.railway.app/api/angel/season/1/8](https://buffy-angel-api.up.railway.app/api/angel/season/1/8)


<details>
    <summary>Show full returned data :dizzy:</summary>
  
  ```
  [
 {
    "_id": "6469a216370fbaa6481b2809",
    "episodeName": "i will remember you",
    "seasonNumber": 1,
    "episodeNumber": 8,
    "hasAired": true,
    "airDate": "november 23, 1999",
    "description": "angel must make a difficult decision regarding buffy when a demon's blood makes him mortal once more.",
    "director": [
      {
        "_id": "645dfc0ec7ec73d3f9318a4f",
        "name": "david grossman",
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BY2MwOGIyZGYtNzgxZC00N2Q5LTllYjItM2U4MTkwMDBjYzUyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_FMjpg_UX500_.jpg"
      }
    ],
    "writer": [
      {
        "_id": "645dfb21c7ec73d3f9318a49",
        "name": "joss whedon",
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTg5MzQ0MDA4MF5BMl5BanBnXkFtZTcwNzUwOTk4OQ@@._V1_FMjpg_UY720_.jpg"
      },
      {
        "_id": "645dfdd2c7ec73d3f9318a59",
        "name": "david greenwalt",
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMjAzNzMyNTE5N15BMl5BanBnXkFtZTYwODg3MzA2._V1_FMjpg_UX267_.jpg"
      },
      {
        "_id": "646330794f6963f73cbf7e72",
        "name": "jeannine renshaw",
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BODU0M2NjZjgtZmQ1Zi00OWIyLTg1ODctMTg4Njg0MmE5YzU4XkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_FMjpg_UX743_.jpg"
      }
    ],
    "trivia": "when buffy snarks at angel, 'i was really jonesing for another heartbreaking sewer talk,' she refers to events in the prom (1999), where angel breaks up with her while they are patrolling sunnydale sewers.",
    "episodeCast": [
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
        "_id": "645cc880151db11d78896f9e",
        "name": "charisma carpenter",
        "characterPlayed": [
          "Cordelia Chase"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BNGZiNjkzMjMtYWRlNC00MDNhLTk2MmEtOTg5ZDc2YjhhYmFmXkEyXkFqcGdeQXVyMTk5NjY5MDY@._V1_FMjpg_UX1170_.jpg"
      },
      {
        "_id": "645e1bf19bf1e1a7235d3ce6",
        "name": "glenn quinn",
        "characterPlayed": [
          "Allen Doyle"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTc2NDMwNjI4MV5BMl5BanBnXkFtZTYwNjkwOTQ2._V1_FMjpg_UX325_.jpg"
      },
      {
        "_id": "64631e934f6963f73cbf7e32",
        "name": "carey cannon",
        "characterPlayed": [
          "Female Oracle"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTYxNzEyOTgzM15BMl5BanBnXkFtZTgwNzM2Nzg0MjE@._V1_FMjpg_UX500_.jpg"
      },
      {
        "_id": "64631edf4f6963f73cbf7e34",
        "name": "randall slavin",
        "characterPlayed": [
          "Male Oracle"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BOGQzNmVhMDItZmVmMi00YjhiLThkMTktZjI3MjQ5YzQ4ZGM4XkEyXkFqcGdeQXVyOTQyNDk2Ng@@._V1_FMjpg_UX801_.jpg"
      },
      {
        "_id": "645cbd33d39c7d5df28f4ed8",
        "name": "sarah michelle gellar",
        "characterPlayed": [
          "Buffy Summers",
          "Buffy Bot",
          "Faith"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BNzA5MDA4MTEwOV5BMl5BanBnXkFtZTcwNzY2MjcyNw@@._V1_FMjpg_UY2048_.jpg"
      }
    ],
    "episodeScreenshot": "https://m.media-amazon.com/images/M/MV5BNWZiZmY5NjgtYWFhOS00ZGI0LWIyODAtMGNiMTEzMTIzYmFhXkEyXkFqcGdeQXVyNTY3NTQ4NzY@._V1_FMjpg_UX720_.jpg",
    "imdbLink": "https://www.imdb.com/title/tt0512863/",
    "__v": 0
  }
]
  ```
  </details>

 ### `GET /api/angel/id={episodeId}`

Returns an object of Angel episode with id of `{episodeId}` e.g. `GET /api/angel/id=46ae1972017e64a25df6786`:
> [https://buffy-angel-api.up.railway.app/api/angel/id=46ae1972017e64a25df6786](https://buffy-angel-api.up.railway.app/api/angel/id=46ae1972017e64a25df6786)

<details>
   <summary>Show full returned data :yellow_heart:</summary>
  
  
```
  [
 {
    "_id": "646ae1972017e64a25df6786",
    "episodeName": "dear boy",
    "seasonNumber": 2,
    "episodeNumber": 5,
    "hasAired": true,
    "airDate": "october 24, 2000",
    "description": "darla tries to drive angel over the edge in hopes of getting him to embrace his dark side.",
    "director": [
      {
        "_id": "645dfdd2c7ec73d3f9318a59",
        "name": "david greenwalt",
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMjAzNzMyNTE5N15BMl5BanBnXkFtZTYwODg3MzA2._V1_FMjpg_UX267_.jpg"
      }
    ],
    "writer": [
      {
        "_id": "645dfb21c7ec73d3f9318a49",
        "name": "joss whedon",
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTg5MzQ0MDA4MF5BMl5BanBnXkFtZTcwNzUwOTk4OQ@@._V1_FMjpg_UY720_.jpg"
      },
      {
        "_id": "645dfdd2c7ec73d3f9318a59",
        "name": "david greenwalt",
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMjAzNzMyNTE5N15BMl5BanBnXkFtZTYwODg3MzA2._V1_FMjpg_UX267_.jpg"
      },
      {
        "_id": "64632e144f6963f73cbf7e68",
        "name": "mere smith",
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BODU0M2NjZjgtZmQ1Zi00OWIyLTg1ODctMTg4Njg0MmE5YzU4XkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_FMjpg_UX743_.jpg"
      }
    ],
    "trivia": "cordelia says that angel is 248; he corrects her to 247. this indicates that angel is counting from the day he was sired (and not including the hundred years spent in acathla's hell dimension), in 1753 (he was already 26 years old at the time).",
    "episodeCast": [
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
        "_id": "645cc880151db11d78896f9e",
        "name": "charisma carpenter",
        "characterPlayed": [
          "Cordelia Chase"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BNGZiNjkzMjMtYWRlNC00MDNhLTk2MmEtOTg5ZDc2YjhhYmFmXkEyXkFqcGdeQXVyMTk5NjY5MDY@._V1_FMjpg_UX1170_.jpg"
      },
      {
        "_id": "645defbcc7ec73d3f9318a19",
        "name": "alexis denisof",
        "characterPlayed": [
          "Wesley Wyndam-Pryce"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTcyMTg3MDU2NV5BMl5BanBnXkFtZTcwNjk0NTM2OQ@@._V1_FMjpg_UX600_.jpg"
      },
      {
        "_id": "645e18439bf1e1a7235d3cd6",
        "name": "j. august richards",
        "characterPlayed": [
          "Charles Gunn"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMjE4NTIwODkwNF5BMl5BanBnXkFtZTYwODkzNjEz._V1_FMjpg_UX485_.jpg"
      },
      {
        "_id": "645e1ac79bf1e1a7235d3ce2",
        "name": "elisabeth rohm",
        "characterPlayed": [
          "Detective Kate Lockley"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BZDIyM2NlNGQtYTYwMi00NzYwLTg4NjItYWU3NGI4Y2UzZjcyXkEyXkFqcGdeQXVyMjUyNTQzNzk@._V1_FMjpg_UX600_.jpg"
      },
      {
        "_id": "645e1a439bf1e1a7235d3ce0",
        "name": "christian kane",
        "characterPlayed": [
          "Lindsey McDonald"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTUxMzYzNDQ0MV5BMl5BanBnXkFtZTcwMjY5Mzk0Mw@@._V1_FMjpg_UX263_.jpg"
      },
      {
        "_id": "645e18959bf1e1a7235d3cd8",
        "name": "andy hallett",
        "characterPlayed": [
          "Lorne"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BMTk5MzUzMDIxOV5BMl5BanBnXkFtZTcwNDQzODczMQ@@._V1_FMjpg_UX400_.jpg"
      },
      {
        "_id": "645dea4ac7ec73d3f9318a01",
        "name": "juliet landau",
        "characterPlayed": [
          "Drusilla"
        ],
        "profilePicture": "https://m.media-amazon.com/images/M/MV5BOTM0OTIyMTEyMF5BMl5BanBnXkFtZTcwMjE5MDI2Mw@@._V1_FMjpg_UY720_.jpg"
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
    "episodeScreenshot": "https://m.media-amazon.com/images/M/MV5BOTI2NDE4M2EtYThkMS00ZWNmLWE2ZmItOGViZjZmMGVmNGU4XkEyXkFqcGdeQXVyNTY3NTQ4NzY@._V1_FMjpg_UX502_.jpg",
    "imdbLink": "https://www.imdb.com/title/tt0512841/",
    "__v": 0
  }
]
 ``` 
  
  </details>
  

## Actors, Directors and Writers Endpoint

### `GET /api/actors`

Retrieves all actors that have appeared in 2 or more episodes of Buffy the Vampire Slayer and/or Angel.

> [https://buffy-angel-api.up.railway.app/api/actors](https://buffy-angel-api.up.railway.app/api/actors)


<details>
    <summary>Show full returned data :dizzy:</summary>
  
  ```
  [
{
    "_id": "645cbd33d39c7d5df28f4ed8",
    "name": "sarah michelle gellar",
    "bio": "emmy award-winning sarah michelle gellar was born on april 14, 1977 in new york city, the daughter of rosellen (greenfield), who taught at a nursery school, and arthur gellar, who worked in the garment industry. she is of russian jewish and hungarian jewish descent.eating in a local restaurant, sarah was discovered by an agent when she was four years old. soon after, she was making her first movie an invasion of privacy (1983). besides a long list of movies, she has also appeared in many tv commercials and on the stage. her breakthrough came with the television series swans crossing (1992). in 1997, she became known to the cinema audience when she appeared in two movies: i know what you did last summer (1997) and scream 2 (1997). but she is most commonly known for her title role in the long-running television series buffy the vampire slayer (1997). she also won an emmy award for her performance as kendall hart on the soap opera all my children (1970) sarah has since starred in many films, including simply irresistible (1999), cruel intentions (1999), and the live-action scooby-doo (2002) movies as the lovable daphne blake. she also provided her voice to several movies, including small soldiers (1998), happily n'ever after (2006) and tmnt (2007), starred in the box office hit the grudge (2004), and co-starred with robin williams and james wolk in the television series the crazy ones (2013).she resides in los angeles, california, with her husband, freddie prinze jr.. they have been married since 2002, and have two children.",
    "characterPlayed": [
      "Buffy Summers",
      "Buffy Bot",
      "Faith"
    ],
    "imdbProfile": "https://www.imdb.com/name/nm0001264/",
    "profilePicture": "https://m.media-amazon.com/images/M/MV5BNzA5MDA4MTEwOV5BMl5BanBnXkFtZTcwNzY2MjcyNw@@._V1_FMjpg_UY2048_.jpg",
    "type": [
      "actor"
    ],
    "__v": 0
  }
]
  ```
</details>
  
### `GET /api/directors`

Retrieves all directors that have direacted at least one episode of Buffy the Vampire Slayer or Angel.

> [https://buffy-angel-api.up.railway.app/api/directors](https://buffy-angel-api.up.railway.app/api/directors)

<details>
   <summary>Show full returned data :yellow_heart:</summary>
  
  
```
  [
 {
    "_id": "645dfc0ec7ec73d3f9318a4f",
    "name": "david grossman",
    "bio": "david grossman is known for desperate housewives (2004), buffy the vampire slayer (1997) and 12 monkeys (2015). he has been married to patricia bunch since july 14, 2013.",
    "characterPlayed": [
      "   "
    ],
    "imdbProfile": "https://www.imdb.com/name/nm0343622/",
    "profilePicture": "https://m.media-amazon.com/images/M/MV5BY2MwOGIyZGYtNzgxZC00N2Q5LTllYjItM2U4MTkwMDBjYzUyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_FMjpg_UX500_.jpg",
    "type": [
      "Director"
    ],
    "__v": 0
  }
]
 ``` 
  
  </details>
  
  ### `GET /api/writers`

Retrieves all writers that have written at least one episode of Buffy the Vampire Slayer or Angel.

> [https://buffy-angel-api.up.railway.app/api/writers](https://buffy-angel-api.up.railway.app/api/writers)

<details>
   <summary>Show full returned data :dizzy:</summary>
  
  
```
  [
 {
    "_id": "645e119d9bf1e1a7235d3cb0",
    "name": "jane espenson",
    "bio": "jane espenson was born on july 14, 1964 in ames, iowa, usa. she is a producer and writer, known for buffy the vampire slayer (1997), husbands (2011) and game of thrones (2011).",
    "characterPlayed": [
      "   "
    ],
    "imdbProfile": "https://www.imdb.com/name/nm0260870/",
    "profilePicture": "https://m.media-amazon.com/images/M/MV5BMjQ2MDkyNDgyN15BMl5BanBnXkFtZTcwOTk0MDM0Nw@@._V1_FMjpg_UY721_.jpg",
    "type": [
      "Writer"
    ],
    "__v": 0
  },
]
 ``` 
  
  </details>
## Author

API been developed by [Kat](https://github.com/Thatskat/) 🐱
