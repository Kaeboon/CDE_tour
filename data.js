var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.28537790875490465,
        "pitch": 0.04272037349752722,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.02890433804274295,
          "pitch": -0.28136071740460267,
          "rotation": 7.0685834705770345,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7499109165832589,
          "pitch": -0.0601931538538345,
          "title": "Faculty of Engineering",
          "text": "Welcome to the Faculty of Engineering"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.14116960216478347,
        "pitch": -0.2611748236217295,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6436299853631642,
          "pitch": -0.15664510624507066,
          "rotation": 10.210176124166829,
          "target": "0-along-engineering-drive-1"
        },
        {
          "yaw": 0.14464078987180784,
          "pitch": -0.005709881709780262,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2227669158203227,
          "pitch": -0.400829685500117,
          "title": "Auditorium Building",
          "text": "Engineers gathered here"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.26175354110338134,
        "pitch": 0.0907898238031759,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0973104715156463,
          "pitch": -0.08325283521796756,
          "rotation": 3.9269908169872414,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.20087524280740965,
          "pitch": 0.20811760307718608,
          "title": "Engineering Auditorium",
          "text": "Place for coffee and study"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
