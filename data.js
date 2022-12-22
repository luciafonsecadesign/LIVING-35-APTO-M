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
        "yaw": -0.11759149530770685,
        "pitch": 0.19302182084389408,
        "fov": 1.4411046624168176
      },
      "linkHotspots": [
        {
          "yaw": 0.765190736741669,
          "pitch": 0.35053075590303706,
          "rotation": 0.7853981633974483,
          "target": "2-cama"
        },
        {
          "yaw": 0.0455130180300074,
          "pitch": 0.24236496625551673,
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
        "yaw": 0.5148035584227753,
        "pitch": 0.31799905689117125,
        "fov": 1.4436873923031792
      },
      "linkHotspots": [
        {
          "yaw": -2.0658443019213877,
          "pitch": 0.18226907306880058,
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
        "yaw": -0.1668922661315193,
        "pitch": 0.4526821248712878,
        "fov": 1.4436873923031792
      },
      "linkHotspots": [
        {
          "yaw": -2.8858557626313743,
          "pitch": 0.1605279863984208,
          "rotation": 11.780972450961727,
          "target": "0-entrada-y-cocina"
        },
        {
          "yaw": -1.9535206841353627,
          "pitch": 0.14066202821306284,
          "rotation": 0.7853981633974483,
          "target": "1-bao"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Apartamento M",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
