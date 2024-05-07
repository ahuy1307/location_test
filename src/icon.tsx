export const FolderIcon = ({className}: { className?: string }) => {
    return <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                height="20px"
                width="20px" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"></path>
    </svg>


}

export const LocationIcon = ({className}: { className?: string }) => {
    return <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        <path fill="none" d="M0 0h24v24H0z"/>
    </svg>

}

export const DownIcon = ({className}: { className?: string}) => {
    return <svg  className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
        <path
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
    </svg>
}


export const UpIcon = ({className}: { className?: string}) => {
    return <svg  className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em"
                width="1em" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path>
    </svg>
}

export const initData = [
    {
        "label": "Company HQ",
        "id": 100,
        "is_area": true,
        "is_remote": false,
        "locations": [
            {
                "label": "Peterborough Plant 1 ",
                "id": 101,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant 2",
                "id": 102,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant 3",
                "id": 103,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant 4",
                "id": 104,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant 5",
                "id": 105,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant 6",
                "id": 106,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant 7",
                "id": 107,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant 8",
                "id": 108,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Rexdale -LMPMG Hd Office&Plant",
                "id": 109,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Upfield Toronto",
                "id": 110,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Remote Canada",
                "id": 111,
                "is_area": true,
                "is_remote": true,
                "locations": [
                    {
                        "label": "Anjou Sales Office",
                        "id": 112,
                        "is_area": false,
                        "is_remote": true,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Calgary Sales Office",
                        "id": 113,
                        "is_area": false,
                        "is_remote": true,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Ontario Sales Office",
                        "id": 114,
                        "is_area": false,
                        "is_remote": true,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Quebec Sales Office",
                        "id": 115,
                        "is_area": false,
                        "is_remote": true,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Rexdale Plant",
                        "id": 116,
                        "is_area": false,
                        "is_remote": false,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Simcoe -Simcoe Plant - GHP",
                        "id": 117,
                        "is_area": false,
                        "is_remote": false,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Toronto -Corp Headquarters",
                        "id": 118,
                        "is_area": false,
                        "is_remote": false,
                        "locations": [

                        ]
                    },
                    {
                        "label": "British Columbia Sales Office",
                        "id": 119,
                        "is_area": false,
                        "is_remote": false,
                        "locations": [

                        ]
                    }
                ]
            }
        ]
    },
    {
        "label": "Company HQ",
        "id": 200,
        "is_area": true,
        "is_remote": false,
        "locations": [
            {
                "label": "Peterborough Plant",
                "id": 201,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant",
                "id": 202,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant",
                "id": 203,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant",
                "id": 204,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant",
                "id": 205,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant",
                "id": 206,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant",
                "id": 207,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant",
                "id": 208,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant",
                "id": 209,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant",
                "id": 210,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Rexdale -LMPMG Hd Office&Plant",
                "id": 211,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Upfield Toronto",
                "id": 212,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Remote Canada",
                "id": 213,
                "is_area": true,
                "is_remote": true,
                "locations": [
                    {
                        "label": "Peterborough Plant",
                        "id": 214,
                        "is_area": false,
                        "is_remote": false,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Peterborough Plant",
                        "id": 215,
                        "is_area": false,
                        "is_remote": false,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Peterborough Plant",
                        "id": 216,
                        "is_area": false,
                        "is_remote": false,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Peterborough Plant",
                        "id": 217,
                        "is_area": false,
                        "is_remote": false,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Calgary Sales Office",
                        "id": 218,
                        "is_area": false,
                        "is_remote": true,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Ontario Sales Office",
                        "id": 219,
                        "is_area": false,
                        "is_remote": true,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Quebec Sales Office",
                        "id": 220,
                        "is_area": false,
                        "is_remote": true,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Rexdale Plant",
                        "id": 221,
                        "is_area": false,
                        "is_remote": false,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Simcoe -Simcoe Plant - GHP",
                        "id": 222,
                        "is_area": false,
                        "is_remote": false,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Toronto -Corp Headquarters",
                        "id": 223,
                        "is_area": false,
                        "is_remote": false,
                        "locations": [

                        ]
                    },
                    {
                        "label": "British Columbia Sales Office",
                        "id": 224,
                        "is_area": false,
                        "is_remote": false,
                        "locations": [

                        ]
                    }
                ]
            }
        ]
    },
    {
        "label": "Company HQ",
        "id": 300,
        "is_area": true,
        "is_remote": false,
        "locations": [
            {
                "label": "Peterborough Plant",
                "id": 301,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant",
                "id": 302,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant",
                "id": 303,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant",
                "id": 304,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant",
                "id": 305,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant",
                "id": 306,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant",
                "id": 307,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Peterborough Plant",
                "id": 308,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Rexdale -LMPMG Hd Office&Plant",
                "id": 309,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Upfield Toronto",
                "id": 310,
                "is_area": false,
                "is_remote": false,
                "locations": [

                ]
            },
            {
                "label": "Remote Canada",
                "id": 311,
                "is_area": true,
                "is_remote": true,
                "locations": [
                    {
                        "label": "Anjou Sales Office",
                        "id": 312,
                        "is_area": false,
                        "is_remote": true,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Calgary Sales Office",
                        "id": 313,
                        "is_area": false,
                        "is_remote": true,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Ontario Sales Office",
                        "id": 314,
                        "is_area": false,
                        "is_remote": true,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Quebec Sales Office",
                        "id": 315,
                        "is_area": false,
                        "is_remote": true,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Rexdale Plant",
                        "id": 316,
                        "is_area": false,
                        "is_remote": false,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Simcoe -Simcoe Plant - GHP",
                        "id": 317,
                        "is_area": false,
                        "is_remote": false,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Toronto -Corp Headquarters",
                        "id": 318,
                        "is_area": false,
                        "is_remote": false,
                        "locations": [

                        ]
                    },
                    {
                        "label": "British Columbia Sales Office",
                        "id": 319,
                        "is_area": false,
                        "is_remote": false,
                        "locations": [

                        ]
                    }
                ]
            }
        ]
    },
    {
        "label": "Canada",
        "id": 400,
        "is_area": true,
        "is_remote": true,
        "locations": [
            {
                "label": "Location 1",
                "id": 411,
                "is_area": true,
                "is_remote": true,
                "locations": [
                    {
                        "label": "Location 2",
                        "id": 412,
                        "is_area": false,
                        "is_remote": true,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Location 3",
                        "id": 413,
                        "is_area": false,
                        "is_remote": true,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Location 4",
                        "id": 414,
                        "is_area": false,
                        "is_remote": true,
                        "locations": [

                        ]
                    },
                    {
                        "label": "Location 5",
                        "id": 415,
                        "is_area": false,
                        "is_remote": true,
                        "locations": [

                        ]
                    }
                ]
            },
            {
                "label": "Location 2",
                "id": 416,
                "is_area": false,
                "is_remote": true,
                "locations": [

                ]
            },
            {
                "label": "Location 3",
                "id": 417,
                "is_area": true,
                "is_remote": true,
                "locations": [
                    {
                        "label": "Location 4",
                        "id": 418,
                        "is_area": false,
                        "is_remote": true,
                        "locations": [

                        ]
                    }
                ]
            }
        ]
    }
]