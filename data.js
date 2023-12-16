var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2912303410484718,
          "pitch": 0.2701586877778617,
          "rotation": 0.7853981633974483,
          "target": "1-cama"
        },
        {
          "yaw": 0.5060208954996241,
          "pitch": 0.09903152520503866,
          "rotation": 5.497787143782138,
          "target": "2-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cama",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9089986815190993,
          "pitch": 0.13502274824508298,
          "rotation": 5.497787143782138,
          "target": "0-entrada"
        },
        {
          "yaw": -1.470231497407486,
          "pitch": 0.10192463814767727,
          "rotation": 0.7853981633974483,
          "target": "2-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bao",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6726986530703947,
          "pitch": 0.058426177533345225,
          "rotation": 5.497787143782138,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "LIVIONG 35 - M",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
