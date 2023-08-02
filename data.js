var APP_DATA = {
  "scenes": [
    {
      "id": "0-3",
      "name": "улица3",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.04096593512131008,
        "pitch": -0.0952799744850843,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09135699441200984,
          "pitch": -0.0195466966217559,
          "rotation": 0,
          "target": "1--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1--",
      "name": "у входа",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.04375512063977105,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2066474690172857,
          "pitch": 0.09699858734597022,
          "rotation": 0,
          "target": "2--"
        },
        {
          "yaw": -2.959968529711629,
          "pitch": 0.15065715536642976,
          "rotation": 0,
          "target": "0-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2--",
      "name": "у полок",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04549301994488886,
          "pitch": 0.0764360740530563,
          "rotation": 0,
          "target": "1--"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
