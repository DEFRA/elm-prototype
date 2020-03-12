/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  "agroforestry": {
    "code": "A7",
    "type": "Use agroforestry to reduce the impact of flooding and drought, maintain carbon storage and reduce sediment in water bodies",
    "unit": "hectares",
    "rate": "£427 per hectare",
    "amount": 0,
    "multiplier": 427
  },

  "bare-soil": {
    "code": "FL1",
    "type": "Minimise bare soil to reduce flooding",
    "unit": "hectares",
    "rate": "£331 per hectare",
    "amount": 0,
    "multiplier": 331
  },

  "bog-grazing": {
    "code": "U1",
    "type": "Control grazing on bogs and peatlands to enhance carbon storage",
    "unit": "hectares",
    "rate": "£7 per hectare",
    "amount": 0,
    "multiplier": 7
  },

  "canopy-cover": {
    "code": "F1",
    "type": "Encourage diversification of the stand and continuity of canopy cover to enhance resilience to climate change",
    "unit": "hectares",
    "rate": "£70 per hectare",
    "amount": 0,
    "multiplier": 70
  },

  "cover-crops": {
    "code": "A5",
    "type": "Use cover crops to maintain carbon storage and reduce sediment in water bodies",
    "unit": "hectares",
    "rate": "£114 per hectare",
    "amount": 0,
    "multiplier": 114
  },

  "create-grassland": {
    "code": "A9",
    "type": "Create a species rich grassland to enhance habitats",
    "unit": "hectares",
    "rate": "£267 per hectare",
    "amount": 0,
    "multiplier": 267
  },

  "deadwood": {
    "code": "F2",
    "type": "Manage deadwood to improve habitats",
    "unit": "hectares",
    "rate": "£100 per hectare",
    "amount": 0,
    "multiplier": 100
  },

  "drinking-water": {
    "code": "U3",
    "type": "Provide drinking water for livestock to reduce the amount of sediment in water bodies",
    "unit": "troughs",
    "rate": "£220 per trough",
    "amount": 0,
    "multiplier": 220
  },

  "fencing": {
    "code": "U2",
    "type": "Fence off water sources from livestock to prevent erosion, nutrient input and contamination",
    "unit": "metres",
    "rate": "£4 per metre",
    "amount": 0,
    "multiplier": 4
  },

  "fertilisers": {
    "code": "A1",
    "type": "Use lower emission fertilisers to reduce ammonia and greenhouse gas emissions",
    "unit": "hectares",
    "rate": "£427 per hectare",
    "amount": 0,
    "multiplier": 427
  },

  "fertiliser-spreading": {
    "code": "A2",
    "type": "Use inorganic fertiliser spreading machinery to reduce ammonia emissions",
    "unit": "hectares",
    "rate": "£427 per hectare",
    "amount": 0,
    "multiplier": 427
  },

  "flower-habitat": {
    "code": "A10",
    "type": "Provide flower-rich habitat for pollinators",
    "unit": "hectares",
    "rate": "£511 per metre",
    "amount": 0,
    "multiplier": 511
  },

  "grass-strips": {
    "code": "FL2",
    "type": "Create or maintain contour grass strips to reduce flooding",
    "unit": "hectares",
    "rate": "£557 per hectare",
    "amount": 0,
    "multiplier": 557
  },

  "manure": {
    "code": "U4",
    "type": "Avoid applying manure on land sloping to a water body to reduce amount of faecal bacteria in the water",
    "unit": "hectares",
    "rate": "£50 per hectare",
    "amount": 0,
    "multiplier": 50
  },

  "no-till": {
    "code": "A3",
    "type": "Use no-till cultivation on agricultural lowland peatland soils to improve carbon storage",
    "unit": "hectares",
    "rate": "£427 per hectare",
    "amount": 0,
    "multiplier": 427
  },

  "nutrients": {
    "code": "A4",
    "type": "Reduce nutrient use to reduce catchment nutrient loads",
    "unit": "hectares",
    "rate": "£293 per hectare",
    "amount": 0,
    "multiplier": 293
  },

  "tree-belts": {
    "code": "A6",
    "type": "Create or maintain hill-slope tree shelter belts to reduce flooding",
    "unit": "tree(s)",
    "rate": "£1.28 per tree",
    "amount": 0,
    "multiplier": 1.28
  },

  "wind-erosion": {
    "code": "A8",
    "type": "Increase organic matter in soils to reduce wind erosion",
    "unit": "hectares",
    "rate": "£170 per hectare",
    "amount": 0,
    "multiplier": 170
  },


  "actions": [
    {
      "name": "agroforestry",
      "code": "A7",
      "type": "Use agroforestry to reduce the impact of flooding and drought, maintain carbon storage and reduce sediment in water bodies",
      "unit": "hectares",
      "rate": "£427 per hectare",
      "amount": 0,
      "multiplier": 427
    },
    {
      "name": "bare-soil",
      "code": "FL1",
      "type": "Minimise bare soil to reduce flooding",
      "unit": "hectares",
      "rate": "£331 per hectare",
      "amount": 0,
      "multiplier": 331
    },
    {
      "name": "bog-grazing",
      "code": "U1",
      "type": "Control grazing on bogs and peatlands to enhance carbon storage",
      "unit": "hectares",
      "rate": "£7 per hectare",
      "amount": 0,
      "multiplier": 7
    },
    {
      "name": "canopy-cover",
      "code": "F1",
      "type": "Encourage diversification of the stand and continuity of canopy cover to enhance resilience to climate change",
      "unit": "hectares",
      "rate": "£70 per hectare",
      "amount": 0,
      "multiplier": 70
    },
    {
      "name": "cover-crops",
      "code": "A5",
      "type": "Use cover crops to maintain carbon storage and reduce sediment in water bodies",
      "unit": "hectares",
      "rate": "£114 per hectare",
      "amount": 0,
      "multiplier": 114
    },
    {
      "name": "create-grassland",
      "code": "A9",
      "type": "Create a species rich grassland to enhance habitats",
      "unit": "hectares",
      "rate": "£267 per hectare",
      "amount": 0,
      "multiplier": 267
    },
    {
      "name": "deadwood",
      "code": "F2",
      "type": "Manage deadwood to improve habitats",
      "unit": "hectares",
      "rate": "£100 per hectare",
      "amount": 0,
      "multiplier": 100
    },
    {
      "name": "drinking-water",
      "code": "U3",
      "type": "Provide drinking water for livestock to reduce the amount of sediment in water bodies",
      "unit": "troughs",
      "rate": "£220 per trough",
      "amount": 0,
      "multiplier": 220
    },
    {
      "name": "fencing",
      "code": "U2",
      "type": "Fence off water sources from livestock to prevent erosion, nutrient input and contamination",
      "unit": "metres",
      "rate": "£4 per metre",
      "amount": 0,
      "multiplier": 4
    },
    {
      "name": "fertilisers",
      "code": "A1",
      "type": "Use lower emission fertilisers to reduce ammonia and greenhouse gas emissions",
      "unit": "hectares",
      "rate": "£427 per hectare",
      "amount": 0,
      "multiplier": 427
    },
    {
      "name": "fertiliser-spreading",
      "code": "A2",
      "type": "Use inorganic fertiliser spreading machinery to reduce ammonia emissions",
      "unit": "hectares",
      "rate": "£427 per hectare",
      "amount": 0,
      "multiplier": 427
    },
    {
      "name": "flower-habitat",
      "code": "A10",
      "type": "Provide flower-rich habitat for pollinators",
      "unit": "hectares",
      "rate": "£511 per metre",
      "amount": 0,
      "multiplier": 511
    },
    {
      "name": "grass-strips",
      "code": "FL2",
      "type": "Create or maintain contour grass strips to reduce flooding",
      "unit": "hectares",
      "rate": "£557 per hectare",
      "amount": 0,
      "multiplier": 557
    },
    {
      "name": "manure",
      "code": "U4",
      "type": "Avoid applying manure on land sloping to a water body to reduce amount of faecal bacteria in the water",
      "unit": "hectares",
      "rate": "£50 per hectare",
      "amount": 0,
      "multiplier": 50
    },
    {
      "name": "no-till",
      "code": "A3",
      "type": "Use no-till cultivation on agricultural lowland peatland soils to improve carbon storage",
      "unit": "hectares",
      "rate": "£427 per hectare",
      "amount": 0,
      "multiplier": 427
    },
    {
      "name": "nutrients",
      "code": "A4",
      "type": "Reduce nutrient use to reduce catchment nutrient loads",
      "unit": "hectares",
      "rate": "£293 per hectare",
      "amount": 0,
      "multiplier": 293
    },
    {
      "name": "tree-belts",
      "code": "A6",
      "type": "Create or maintain hill-slope tree shelter belts to reduce flooding",
      "unit": "tree(s)",
      "rate": "£1.28 per tree",
      "amount": 0,
      "multiplier": 1.28
    },
    {
      "name": "wind-erosion",
      "code": "A8",
      "type": "Increase organic matter in soils to reduce wind erosion",
      "unit": "hectares",
      "rate": "£170 per hectare",
      "amount": 0,
      "multiplier": 170
      }
  ],

  "actions": [
    {
      "agroforestry": {
        "code": "A7",
        "type": "Use agroforestry to reduce the impact of flooding and drought, maintain carbon storage and reduce sediment in water bodies",
        "unit": "hectares",
        "rate": "£427 per hectare",
        "amount": 0,
        "multiplier": 427
      }
    },
    {
      "name": "bare-soil",
      "code": "FL1",
      "type": "Minimise bare soil to reduce flooding",
      "unit": "hectares",
      "rate": "£331 per hectare",
      "amount": 0,
      "multiplier": 331
    },
    {
      "name": "bog-grazing",
      "code": "U1",
      "type": "Control grazing on bogs and peatlands to enhance carbon storage",
      "unit": "hectares",
      "rate": "£7 per hectare",
      "amount": 0,
      "multiplier": 7
    }
  ],

  "outcome": "all outcomes",

  "warning": "true",

  "agreement": "false",

  "goods": [
    {
      "id": "1",
      "type": "Restoration of forestry and woodland to lowland heathland",
      "species": "Ash",
      "area": "10.1 hectares",
      "value": "£1,858.40",
      "status": "Decision required",
      "issue": "Ash dieback"
    },
    {
      "id": "3",
      "type": "Nectar flower mix ",
      "species": "Mixed",
      "area": "0.8 hectares",
      "value": "£408.80"
    },
    {
      "id": "4",
      "type": "Management of rough grazing for birds",
      "area": "2.2 hectares",
      "value": "£193.60"
    }
  ],

  "applications": [
    {
      "client": "Willow Farm",
      "status": "Draft",
      "updated": "Today"
    },
    {
      "client": "New Spring Meadow",
      "status": "Submitted to client",
      "updated": "1 June 2019"
    },
    {
      "client": "Mossy Oak Farms",
      "status": "Complete",
      "updated": "18 Apr 2019"
    }
  ]

}
