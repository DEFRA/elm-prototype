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
    "group": "arable",
    "description": "Use agroforestry to reduce the impact of flooding and drought, maintain carbon storage and reduce sediment in water bodies",
    "unit": "hectares",
    "rate": "£427 per hectare",
    "amount": 0,
    "multiplier": 427
  },

  "bare-soil": {
    "code": "FL1",
    "description": "Minimise bare soil to reduce flooding",
    "unit": "hectares",
    "rate": "£331 per hectare",
    "amount": 0,
    "multiplier": 331
  },

  "bog-grazing": {
    "code": "U1",
    "description": "Control grazing on bogs and peatlands to enhance carbon storage",
    "unit": "hectares",
    "rate": "£7 per hectare",
    "amount": 0,
    "multiplier": 7
  },

  "canopy-cover": {
    "code": "F1",
    "description": "Encourage diversification of the stand and continuity of canopy cover to enhance resilience to climate change",
    "unit": "hectares",
    "rate": "£70 per hectare",
    "amount": 0,
    "multiplier": 70
  },

  "cover-crops": {
    "code": "A5",
    "group": "arable",
    "description": "Use cover crops to maintain carbon storage and reduce sediment in water bodies",
    "unit": "hectares",
    "rate": "£114 per hectare",
    "amount": 0,
    "multiplier": 114
  },

  "create-grassland": {
    "code": "A9",
    "group": "arable",
    "description": "Create a species-rich grassland to enhance habitats",
    "unit": "hectares",
    "rate": "£267 per hectare",
    "amount": 0,
    "multiplier": 267
  },

  "deadwood": {
    "code": "F2",
    "description": "Manage deadwood to improve habitats",
    "unit": "hectares",
    "rate": "£100 per hectare",
    "amount": 0,
    "multiplier": 100
  },

  "drinking-water": {
    "code": "U3",
    "description": "Provide drinking water for livestock to reduce the amount of sediment in water bodies",
    "unit": "troughs",
    "rate": "£220 per trough",
    "amount": 0,
    "multiplier": 220
  },

  "fencing": {
    "code": "U2",
    "description": "Fence off water sources from livestock to prevent erosion, nutrient input and contamination",
    "unit": "metres",
    "rate": "£4 per metre",
    "amount": 0,
    "multiplier": 4
  },

  "fertilisers": {
    "code": "A1",
    "group": "arable",
    "description": "Use lower emission fertilisers to reduce ammonia and greenhouse gas emissions",
    "unit": "hectares",
    "rate": "£427 per hectare",
    "amount": 0,
    "multiplier": 427
  },

  "fertiliser-spreading": {
    "code": "A2",
    "group": "arable",
    "description": "Use inorganic fertiliser spreading machinery to reduce ammonia emissions",
    "unit": "hectares",
    "rate": "£427 per hectare",
    "amount": 0,
    "multiplier": 427
  },

  "flower-habitat": {
    "code": "A10",
    "group": "arable",
    "description": "Provide flower-rich habitat for pollinators",
    "unit": "hectares",
    "rate": "£511 per metre",
    "amount": 0,
    "multiplier": 511
  },

  "grass-strips": {
    "code": "FL2",
    "description": "Create or maintain contour grass strips to reduce flooding",
    "unit": "hectares",
    "rate": "£557 per hectare",
    "amount": 0,
    "multiplier": 557
  },

  "manure": {
    "code": "U4",
    "description": "Avoid applying manure on land sloping to a water body to reduce amount of faecal bacteria in the water",
    "selected": false,
    "unit": "hectares",
    "rate": "£50 per hectare",
    "amount": 0,
    "multiplier": 50
  },

  "no-till": {
    "code": "A3",
    "group": "arable",
    "description": "Use no-till cultivation on agricultural lowland peatland soils to improve carbon storage",
    "unit": "hectares",
    "rate": "£427 per hectare",
    "amount": 0,
    "multiplier": 427
  },

  "nutrients": {
    "code": "A4",
    "group": "arable",
    "description": "Reduce nutrient use to reduce catchment nutrient loads",
    "unit": "hectares",
    "rate": "£293 per hectare",
    "amount": 0,
    "multiplier": 293
  },

  "tree-belts": {
    "code": "A6",
    "group": "arable",
    "description": "Create or maintain hillslope tree shelter belts to reduce flooding",
    "unit": "tree(s)",
    "rate": "£1.28 per tree",
    "amount": 0,
    "multiplier": 1.28
  },

  "wind-erosion": {
    "code": "A8",
    "group": "arable",
    "description": "Increase organic matter in soils to reduce wind erosion",
    "unit": "hectares",
    "rate": "£170 per hectare",
    "amount": 0,
    "multiplier": 170
  },

  "options": [
    {
      "name": "agroforestry",
      "code": "A7",
      "type": "package",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "description": "Use agroforestry for reducing the impact of, and enhanced resilience to, flooding and drought, to maintain and enhance carbon storage, and reducing deposition of sediment in sensitive water bodies",
      "actions": [
        "Use agroforestry to improve resilience to flooding and drought",
        "Use agroforestry to maintain and enhance carbon storage",
        "Use agroforestry to reduce deposition of sediment in sensitive water bodies"
      ]
    },
    {
      "name": "bare-soil",
      "code": "FL1",
      "type": "option",
      "farmtype": "Mixed",
      "landtype": "Flood risk",
      "region": "All",
      "description": "Minimise the amount of bare soil or the amount of time within a rotation that soil is bare, especially during the winter, to reduce impact of, and enhance resilience to, flooding",
      "actions": [
        "Minimise bare soil"
      ]
    },
    {
      "name": "bog-grazing",
      "code": "U1",
      "type": "package",
      "farmtype": "Mixed",
      "landtype": "Uplands",
      "region": "North West",
      "description": "Use controlled grazing on bogs and peatlands to maintain and enhance storage of carbon",
      "actions": [
        "Moorland management",
        "Moorland management - Vegetation supplement",
        "Shepherding supplement",
        "Management of Reedbed",
        "Creation of Reedbed",
        "Management of Fen",
        "Creation of Fen",
        "Management of Bog",
        "Wetland Grazing supplement",
        "Upland livestock exclusion supplement",
        "Management of rough grazing for birds",
        "Raised water level supplement",
        "Management of lowland heathland",
        "Cattle grazing supplement"
      ]
    },
    {
      "name": "canopy-cover",
      "code": "F1",
      "type": "option",
      "farmtype": "Mixed",
      "landtype": "Woodland",
      "region": "All",
      "description": "Encourage diversification of the stand and continuity of canopy cover through natural regeneration of native species in semi-natural woodland to enhance resilience of the environment to climate change",
      "actions": [
        "Encourage stand and continuity of canopy"
      ]
    },
    {
      "name": "cover-crops",
      "code": "A5",
      "type": "standard",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "description": "Use cover crops throughout the rotation to maintain carbon storage and reduce deposition of sediment in sensitive water bodies",
      "actions": [
        "Winter cover crops"
      ]
    },
    {
      "name": "create-grassland",
      "code": "A9",
      "type": "package",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "description": "Convert arable and intensive grassland to species rich grassland, and/or unfertilised and ungrazed grass to reduce concentrations of ammonia in the atmosphere, and to maintain/enhance habitats to support characteristic species",
      "actions": [
        "Arable reversion to grassland with low fertiliser input",
        "Creation of species-rich grassland"
      ]
    },
    {
      "name": "deadwood",
      "code": "F2",
      "type": "standard",
      "farmtype": "Mixed",
      "landtype": "Woodland",
      "region": "All",
      "description": "Manage deadwood (e.g. remove diseased deadwood, leave other deadwood as habitat for invertebrates) to maintain/enhance habitat condition to support characteristic species",
      "actions": [
        "Maintain deadwood"
      ]
    },
    {
      "name": "drinking-water",
      "code": "U3",
      "type": "package",
      "farmtype": "Livestock",
      "landtype": "Uplands",
      "region": "North West",
      "description": "Provide livestock drinking water as alternative to drinking from watercourse to reduce deposition of sediment in sensitive water bodies",
      "actions": [
        "Pasture pumps and associated pipework",
        "Ram pumps and associated pipework",
        "Livestock troughs",
        "Pipework associated with livestock troughs"
      ]
    },
    {
      "name": "fencing",
      "code": "U2",
      "type": "package",
      "farmtype": "Livestock",
      "landtype": "Uplands",
      "region": "North West",
      "description": "Fence off rivers, streams, lakes and ponds from livestock to prevent bankside erosion, reduce nutrient input and faecal contamination",
      "actions": [
        "Fencing",
        "Sheep netting"
      ]
    },
    {
      "name": "fertilisers",
      "code": "A1",
      "type": "standard",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "description": "Replace inorganic urea-based fertilisers with lower emissions alternatives to reduce concentrations of ammonia in the atmosphere, and to reduce agricultural GHG emissions",
      "actions": [
        "Use lower emission fertilisers"
      ]
    },
    {
      "name": "fertiliser-spreading",
      "code": "A2",
      "type": "option",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "description": "Switch to precision inorganic fertiliser spreading machinery to reduce concentrations of ammonia in the atmosphere",
      "actions": [
        "Spread inorganic fertiliser with precision"
      ]
    },
    {
      "name": "flower-habitat",
      "code": "A10",
      "type": "option",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "description": "Provide flower-rich habitat for wild pollinators",
      "actions": [
        "Provide flower-rich habitat"
      ]
    },
    {
      "name": "grass-strips",
      "code": "FL2",
      "type": "option",
      "farmtype": "Mixed",
      "landtype": "Flood risk",
      "region": "All",
      "description": "Create, maintain and/or enhance contour grass strips to reduce impact of, and enhance resilience to, flooding",
      "actions": [
        "Create, maintain, or enhance grass strips"
      ]
    },
    {
      "name": "manure",
      "code": "U4",
      "type": "standard",
      "farmtype": "Livestock",
      "landtype": "Uplands",
      "region": "North West",
      "description": "Avoid applying manure on land sloping to water body to reduce concentrations of faecal bacteria in surface water bodies",
      "actions": [
        "Avoid applying manure on land sloping to water"
      ]
    },
    {
      "name": "no-till",
      "code": "A3",
      "type": "package",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "description": "Use no-till cultivation on agricultural lowland peatland soils to maintain and enhance carbon storage",
      "actions": [
        "Use no-till cultivation to maintain carbon storage",
        "Use no-till cultivation to enhance carbon storage"
      ]
    },
    {
      "name": "nutrients",
      "code": "A4",
      "type": "package",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "description": "Whole farm reduction in nutrient use / nutrient cap to reduce catchment nutrient loads",
      "actions": [
        "4m to 6m buffer strip on cultivated land",
        "4m to 6m buffer strip on intensive grassland",
        "In-field grass strips",
        "12m to 24m watercourse buffer strip on cultivated land",
        "Enhanced management of maize crops",
        "Winter cover crops",
        "Arable reversion to grassland with low fertiliser input",
        "Management of intensive grassland adjacent to a watercourse",
        "Seasonal livestock removal on intensive grassland",
        "Seasonal livestock removal on grassland in SDAs next to streams, rivers and lakes",
        "Riparian management strip",
        "Making space for water",
        "Very low nitrogen inputs to groundwaters",
        "Nil fertiliser supplement",
        "Flood mitigation on arable reversion to grassland",
        "Flood mitigation on permanent grassland"
      ]
    },
    {
      "name": "tree-belts",
      "code": "A6",
      "type": "option",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "description": "Create, maintain and/or enhance tree shelter belts on hill-slopes to reduce impact of, and enhance resilience to, flooding",
      "actions": [
        "Create, maintain, enhance hillside tree belts"
      ]
    },
    {
      "name": "wind-erosion",
      "code": "A8",
      "type": "standard",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "description": "Increase organic matter content of soils to reduce wind erosion of soil for reduced concentrations of fine particulate matter, and to reduce deposition of sediment in sensitive water bodies",
      "actions": [
        "4m to 6m buffer strip on cultivated land",
        "4m to 6m buffer strip on intensive grassland",
        "In-field grass strips",
        "12m to 24m watercourse buffer strip on cultivated land",
        "Winter cover crops"
      ]
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
