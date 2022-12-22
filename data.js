var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada-y-cocina",
      "name": "Entrada y Cocina",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.12351560860267874,
        "pitch": 0.16725612982993887,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.8037670841369984,
          "pitch": 0.3102348539533395,
          "rotation": 0.7853981633974483,
          "target": "2-cama"
        },
        {
          "yaw": 0.02917094492979011,
          "pitch": 0.198229448844355,
          "rotation": 5.497787143782138,
          "target": "1-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bao",
      "name": "Baño",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.18632419184306315,
        "pitch": 0.352891742595709,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.703562547314391,
          "pitch": 0.06173273977495519,
          "rotation": 5.497787143782138,
          "target": "0-entrada-y-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cama",
      "name": "Cama",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.35577865521423924,
        "pitch": 0.31061852682702984,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.6305065560288874,
          "pitch": 0.2222881108550201,
          "rotation": 0.7853981633974483,
          "target": "1-bao"
        },
        {
          "yaw": -2.968697013275696,
          "pitch": 0.24559853685590127,
          "rotation": 0,
          "target": "0-entrada-y-cocina"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "LIVING 35 Apto M",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
