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

  "forestry-standard": {
    "multiplier": 247
  },

  "arable-standard": {
    "multiplier": 220
  },

  "upland-standard": {
    "multiplier": 187
  },

  "firstname": "John",
  "lastname": "Smith",
  "email": "johnsmith1950@gmail.com",
  "address1": "Willow Farm",
  "address2": "Richmond",
  "address3": "North Yorks",
  "postcode": "DL10 4AT",

  "businessemail": "johnsmith1950@gmail.com",
  "businessaddress1": "Willow Farm",
  "businessaddress2": "Richmond",
  "businessaddress3": "North Yorks",
  "businesspostcode": "DL10 4AT",

  "holding-size": 130,
  
  "SSSI-present": "None",
  "SSSI-advisory": "Part or all of your holding is designated as a site of special scientific interest (SSSI). If you are unsure what your responsibilities are, contact Natural England.",

  "scheduled-monument-present": "None",
  "scheduled-monument-advisory": "You have a scheduled monument within your holding. If you are unsure what your responsibilities are, contact Natural England.",

  "fertilisers": {
    "code": "A1",
    "description": "Use lower emission fertilisers to reduce ammonia and greenhouse gas emissions",
    "unit": "hectares",
    "rate": "£427 per hectare",
    "amount": 0,
    "multiplier": 427
  },

  "fertiliser-spreading": {
    "code": "A2",
    "description": "Use inorganic fertiliser spreading machinery to reduce ammonia emissions",
    "unit": "hectares",
    "rate": "£427 per hectare",
    "amount": 0,
    "multiplier": 427
  },

  "no-till": {
    "code": "A3",
    "description": "Use no-till cultivation on agricultural lowland peatland soils to improve carbon storage",
    "unit": "hectares",
    "rate": "£427 per hectare",
    "amount": 0,
    "multiplier": 427
  },

  "nutrients": {
    "code": "A4",
    "description": "Reduce nutrient use to reduce catchment nutrient loads",
    "unit": "hectares",
    "rate": "£293 per hectare",
    "amount": 0,
    "multiplier": 293,
    "actions": {
      "4m to 6m buffer strip on cultivated land": {
        "unit": "hectares",
        "rate": "£353 per hectare",
        "multiplier": 353
      },
      "4m to 6m buffer strip on intensive grassland": {
        "unit": "hectares",
        "rate": "£170 per hectare",
        "multiplier": 170
      },
      "In-field grass strips": {
        "unit": "hectares",
        "rate": "£557 per hectare",
        "multiplier": 557
      },
      "12m to 24m watercourse buffer strip on cultivated land": {
        "unit": "hectares",
        "rate": "£512 per hectare",
        "multiplier": 512
      },
      "Enhanced management of maize crops": {
        "unit": "hectares",
        "rate": "£133 per hectare",
        "multiplier": 133
      },
      "Winter cover crops": {
        "unit": "hectares",
        "rate": "£114 per hectare",
        "multiplier": 114
      },
      "Arable reversion to grassland with low fertiliser input": {
        "unit": "hectares",
        "rate": "£311 per hectare",
        "multiplier": 311
      },
      "Management of intensive grassland adjacent to a watercourse": {
        "unit": "hectares",
        "rate": "£202 per hectare",
        "multiplier": 202
      },
      "Seasonal livestock removal on intensive grassland": {
        "unit": "hectares",
        "rate": "£88 per hectare",
        "multiplier": 88
      },
      "Seasonal livestock removal on grassland in SDAs next to streams, rivers and lakes": {
        "unit": "hectares",
        "rate": "£36 per hectare",
        "multiplier": 36
      },
      "Riparian management strip": {
        "unit": "hectares",
        "rate": "£440 per hectare",
        "multiplier": 440
      },
      "Making space for water": {
        "unit": "hectares",
        "rate": "£640 per hectare",
        "multiplier": 640
      },
      "Very low nitrogen inputs to groundwaters": {
        "unit": "hectares",
        "rate": "£251 per hectare",
        "multiplier": 251
      },
      "Nil fertiliser supplement": {
        "unit": "hectares",
        "rate": "£131 per hectare",
        "multiplier": 131
      },
      "Flood mitigation on arable reversion to grassland": {
        "unit": "hectares",
        "rate": "£488 per hectare",
        "multiplier": 488
      },
      "Flood mitigation on permanent grassland": {
        "unit": "hectares",
        "rate": "£256 per hectare",
        "multiplier": 256
      }
    }
  },

  "cover-crops": {
    "code": "A5",
    "description": "Use cover crops to maintain carbon storage and reduce sediment in water bodies",
    "unit": "hectares",
    "rate": "£114 per hectare",
    "amount": 0,
    "multiplier": 114
  },

  "tree-belts": {
    "code": "A6",
    "description": "Create or maintain hillslope tree shelter belts to reduce flooding",
    "unit": "tree(s)",
    "rate": "£1.28 per tree",
    "amount": 0,
    "multiplier": 1.28
  },

  "agroforestry": {
    "code": "A7",
    "description": "Use agroforestry to reduce the impact of flooding and drought, maintain carbon storage and reduce sediment in water bodies",
    "unit": "hectares",
    "rate": "£427 per hectare",
    "amount": 0,
    "multiplier": 427
  },

  "wind-erosion": {
    "code": "A8",
    "description": "Increase organic matter in soils to reduce wind erosion",
    "unit": "hectares",
    "rate": "£170 per hectare",
    "amount": 0,
    "multiplier": 170
  },

  "create-grassland": {
    "code": "A9",
    "description": "Create a species-rich grassland to enhance habitats",
    "unit": "hectares",
    "rate": "£267 per hectare",
    "amount": 0,
    "multiplier": 267,
    "actions": {
      "Arable reversion to grassland with low fertiliser input": {
        "unit": "hectares",
        "rate": "£311 per hectare",
        "multiplier": 311
      },
      "Creation of species-rich grassland": {
        "unit": "hectares",
        "rate": "£267 per hectare",
        "multiplier": 267
      }
    }
  },

  "flower-habitat": {
    "code": "A10",
    "description": "Provide flower-rich habitat for pollinators",
    "unit": "hectares",
    "rate": "£511 per hectare",
    "amount": 0,
    "multiplier": 511,
    "actions": {
      "Create flower-rich margins and plots": {
        "unit": "hectares",
        "rate": "£511 per hectare",
        "multiplier": 511
      },
      "Create pollen and nectar plots": {
        "unit": "hectares",
        "rate": "£511 per hectare",
        "multiplier": 511
      }
    }
  },

  "low-input-cereal": {
    "code": "A21",
    "description": "Create harvested low input cereal - An open-structured cereal crop provides summer foraging sites for declining and localised farmland birds and habitat for brown hare, rare arable plants and pollinator species, such as bees and beneficial insects",
    "unit": "hectares",
    "rate": "£266 per hectare",
    "amount": 0,
    "multiplier": 266,
  },

  "unharvested-cereal": {
    "code": "A22",
    "description": "Create an unharvested cereal headland - Provides an important food source for farmland birds throughout the year and insects in the summer, and provides both grain and seeding arable plants in winter",
    "unit": "hectares",
    "rate": "£640 per hectare",
    "amount": 0,
    "multiplier": 640,
  },

  "beetle-bank": {
    "code": "A23",
    "description": "Provide a beetle bank, a raised, uncut, grassy strip which provides overwintering habitat for large numbers of predatory insects and spiders",
    "unit": "hectares",
    "rate": "£573 per hectare",
    "amount": 0,
    "multiplier": 573,
  },

  "cultivated-plots": {
    "code": "A24",
    "description": "Create and manage uncropped cultivated areas for arable plants on your land",
    "unit": "hectares",
    "rate": "£532 per hectare",
    "amount": 0,
    "multiplier": 532,
  },

  "grassy-strips": {
    "code": "A25",
    "description": "Create and manage grassy strips on your arable land, maintained as permanent vegetation",
    "unit": "hectares",
    "rate": "£557 per hectare",
    "amount": 0,
    "multiplier": 557,
  },

  "nesting-plots": {
    "code": "A26",
    "description": "Create fallow plots for ground nesting birds within arable crops",
    "unit": "hectares",
    "rate": "£524 per hectare",
    "amount": 0,
    "multiplier": 524,
  },

  "winter-bird-food": {
    "code": "A27",
    "description": "Winter bird food plots - help to successfully grow winter bird food plots on arable land and provide a range of winter food sources to feed as many farmland birds for as long as possible through winter",
    "unit": "hectares",
    "rate": "£640 per hectare",
    "amount": 0,
    "multiplier": 640,
  },

  "winter-supplementary": {
    "code": "A28",
    "description": "Provide feed for farmland birds - winter supplementary feeding is about how to provide supplementary food for farmland birds in winter",
    "unit": "hectares",
    "rate": "£494 per hectare",
    "amount": 0,
    "multiplier": 494,
  },

  "bog-grazing": {
    "code": "U1",
    "description": "Control grazing on bogs and peatlands to enhance carbon storage",
    "unit": "hectares",
    "rate": "£7 per hectare",
    "amount": 0,
    "multiplier": 7,
    "actions": {
      "Moorland management": {
        "unit": "hectares",
        "rate": "£43 per hectare",
        "multiplier": 43
      },
      "Moorland management - Vegetation supplement": {
        "unit": "hectares",
        "rate": "£10 per hectare",
        "multiplier": 10
      },
      "Shepherding supplement": {
        "unit": "hectares",
        "rate": "£7 per hectare",
        "multiplier": 7
      },
      "Management of Reedbed": {
        "unit": "hectares",
        "rate": "£78 per hectare",
        "multiplier": 78
      },
      "Creation of Reedbed": {
        "unit": "hectares",
        "rate": "£323 per hectare",
        "multiplier": 323
      },
      "Management of Fen": {
        "unit": "hectares",
        "rate": "£39 per hectare",
        "multiplier": 39
      },
      "Creation of Fen": {
        "unit": "hectares",
        "rate": "£446 per hectare",
        "multiplier": 446
      },
      "Management of Bog": {
        "unit": "hectares",
        "rate": "£164 per hectare",
        "multiplier": 164
      },
      "Wetland Grazing supplement": {
        "unit": "hectares",
        "rate": "£304 per hectare",
        "multiplier": 304
      },
      "Upland livestock exclusion supplement": {
        "unit": "hectares",
        "rate": "£16 per hectare",
        "multiplier": 16
      },
      "Management of rough grazing for birds": {
        "unit": "hectares",
        "rate": "£88 per hectare",
        "multiplier": 88
      },
      "Raised water level supplement": {
        "unit": "hectares",
        "rate": "£127 per hectare",
        "multiplier": 127
      },
      "Management of lowland heathland": {
        "unit": "hectares",
        "rate": "£274 per hectare",
        "multiplier": 274
      },
      "Cattle grazing supplement": {
        "unit": "hectares",
        "rate": "£45 per hectare",
        "multiplier": 45
      }
    }
  },

  "fencing": {
    "code": "U2",
    "description": "Fence off water sources from livestock to prevent erosion, nutrient input and contamination",
    "unit": "metres",
    "rate": "£4 per metre",
    "amount": 0,
    "multiplier": 4,
    "actions": {
      "Fencing": {
        "unit": "metres",
        "rate": "£4 per metre",
        "multiplier": 4
      },
      "Sheep netting": {
        "unit": "metres",
        "rate": "£4.90 per metre",
        "multiplier": 4.9
      }
    }
  },

  "drinking-water": {
    "code": "U3",
    "description": "Provide drinking water for livestock to reduce the amount of sediment in water bodies",
    "unit": "troughs",
    "rate": "£220 per trough",
    "amount": 0,
    "multiplier": 220,
    "actions": {
      "Pasture pumps and associated pipework": {
        "unit": "pumps",
        "rate": "£220 per pump",
        "multiplier": 220
      },
      "Ram pumps and associated pipework": {
        "unit": "pumps",
        "rate": "£1480 per pump",
        "multiplier": 1480
      },
      "Livestock troughs": {
        "unit": "troughs",
        "rate": "£110 per trough",
        "multiplier": 110
      },
      "Pipework associated with livestock troughs": {
        "unit": "metres",
        "rate": "£2.65 per metre",
        "multiplier": 2.65
      }
    }
  },

  "manure": {
    "code": "U4",
    "description": "Avoid applying manure on land sloping to a water body to reduce amount of faecal bacteria in the water",
    "unit": "hectares",
    "rate": "£50 per hectare",
    "amount": 0,
    "multiplier": 50
  },

  "chalk-limestone-grasslands": {
    "code": "U17",
    "description": "Manage chalk and limestone grassland in the lowlands - by maintaining this habitat this rare grassland and the species it supports to survive and thrive",
    "unit": "hectares",
    "rate": "£182 per hectare",
    "amount": 0,
    "multiplier": 182,
  },

  "purple-moor-grass": {
    "code": "U18",
    "description": "Manage purple moor-grass and rush pasture - by maintaining this habitat the rare grassland and the species it supports survive and thrive",
    "unit": "hectares",
    "rate": "£264 per hectare",
    "amount": 0,
    "multiplier": 264,
  },

  "calcareous-grassland": {
    "code": "U19",
    "description": "Manage upland calcareous grassland - manage rough grazing or moorland on limestone in Northern England",
    "unit": "hectares",
    "rate": "£39 per hectare",
    "amount": 0,
    "multiplier": 39,
  },

  "bare-soil": {
    "code": "FL1",
    "description": "Minimise bare soil to reduce flooding",
    "unit": "hectares",
    "rate": "£331 per hectare",
    "amount": 0,
    "multiplier": 331
  },

  "grass-strips": {
    "code": "FL2",
    "description": "Create or maintain contour grass strips to reduce flooding",
    "unit": "hectares",
    "rate": "£557 per hectare",
    "amount": 0,
    "multiplier": 557
  },

  "canopy-cover": {
    "code": "F1",
    "description": "Encourage diversification of the stand and continuity of canopy cover to enhance resilience to climate change",
    "unit": "hectares",
    "rate": "£70 per hectare",
    "amount": 0,
    "multiplier": 70
  },

  "deadwood": {
    "code": "F2",
    "description": "Manage deadwood to improve habitats",
    "unit": "hectares",
    "rate": "£100 per hectare",
    "amount": 0,
    "multiplier": 100
  },

  "options-v3": [{
      "name": "fertilisers",
      "code": "A1",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "unit": "hectares",
      "rate": "£427 per hectare",
      "multiplier": 427,
      "description": "Replace inorganic urea-based fertilisers with lower emissions alternatives to reduce concentrations of ammonia in the atmosphere, and to reduce agricultural GHG emissions",
      "snippet": "",
      "guidance": "/prototype-guidance/draft-guidance-full/use-lower-emission-fertilisers-reduce-ammonia-greenhouse-gasses",
      "outcome": "Reduced concentrations of ammonia in the atmosphere",
    },
    {
      "name": "fertiliser-spreading",
      "code": "A2",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "unit": "hectares",
      "rate": "£427 per hectare",
      "multiplier": 427,
      "description": "Switch to precision inorganic fertiliser spreading machinery to reduce concentrations of ammonia in the atmosphere",
      "snippet": "",
      "guidance": "#",
      "outcome": "Reduced impact of agrochemicals on natural, semi-natural and other priority terrestrial and aquatic habitats and on declining species",
    },
    {
      "name": "no-till",
      "code": "A3",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "unit": "hectares",
      "rate": "£427 per hectare",
      "multiplier": 427,
      "description": "Use no-till cultivation on agricultural lowland peatland soils to maintain and enhance carbon storage",
      "snippet": "",
      "guidance": "#",
      "outcome": "Reduced concentrations of fine particulate matter (PM2.5 & PM10) in the atmosphere",
    },
    {
      "name": "nutrients",
      "code": "A4",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "unit": "hectares",
      "rate": "£293 per hectare",
      "multiplier": 293,
      "description": "Whole farm reduction in nutrient use / nutrient cap to reduce catchment nutrient loads",
      "snippet": "",
      "guidance": "#",
      "outcome": "Reduced concentrations of ammonia in the atmosphere",
    },
    {
      "name": "cover-crops",
      "code": "A5",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "unit": "hectares",
      "rate": "£114 per hectare",
      "multiplier": 114,
      "description": "Use cover crops throughout the rotation to maintain carbon storage and reduce deposition of sediment in sensitive water bodies",
      "snippet": "",
      "guidance": "/prototype-guidance/draft-guidance-full/cover-crops-maintain-carbon-storage-reduce-sediment-water-bodies",
      "outcome": "Reduced concentrations of nitrate and phosphate from harmful levels in wetlands, surface water bodies and groundwaters",
    },
    {
      "name": "tree-belts",
      "code": "A6",
      "farmtype": "Mixed",
      "landtype": "Woodland",
      "region": "South East",
      "unit": "tree(s)",
      "rate": "£1.28 per tree",
      "multiplier": 1.28,
      "description": "Create, maintain and/or enhance tree shelter belts on hill-slopes to reduce impact of, and enhance resilience to, flooding",
      "snippet": "",
      "guidance": "/prototype-guidance/draft-guidance-full/create-maintain-hill-slope-tree-shelter-belts",
      "outcome": "Reduced impact of and enhanced resilience to flooding",
    },
    {
      "name": "agroforestry",
      "code": "A7",
      "farmtype": "Mixed",
      "landtype": "Woodland",
      "region": "South East",
      "unit": "hectares",
      "rate": "£427 per hectare",
      "multiplier": 427,
      "description": "Use agroforestry for reducing the impact of, and enhanced resilience to, flooding and drought, to maintain and enhance carbon storage, and reducing deposition of sediment in sensitive water bodies",
      "snippet": "",
      "guidance": "#",
      "outcome": "Reduced impact of and enhanced resilience to flooding",
    },
    {
      "name": "wind-erosion",
      "code": "A8",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "unit": "hectares",
      "rate": "£170 per hectare",
      "multiplier": 170,
      "description": "Increase organic matter content of soils to reduce wind erosion of soil for reduced concentrations of fine particulate matter, and to reduce deposition of sediment in sensitive water bodies",
      "snippet": "",
      "guidance": "/prototype-guidance/draft-guidance-full/increase-organic-matter-soils-reduce-wind-erosion",
      "outcome": "Reduced concentrations of ammonia in the atmosphere",
    },
    {
      "name": "create-grassland",
      "code": "A9",
      "farmtype": "Mixed",
      "landtype": "Uplands",
      "region": "South East",
      "unit": "hectares",
      "rate": "£267 per hectare",
      "multiplier": 267,
      "description": "Convert arable and intensive grassland to species rich grassland, and/or unfertilised and ungrazed grass to reduce concentrations of ammonia in the atmosphere, and to maintain/enhance habitats to support characteristic species",
      "snippet": "This may require you to prepare your site for seeding, sow appropriate seeds, encourage natural regeneration and control undesirable plants.",
      "guidance": "/prototype-guidance/draft-guidance-full/create-or-restore-species-rich-grassland",
      "outcome": "Maintained and enhanced condition and quality of natural, semi-natural or other priority habitats, so they are able to support their characteristic species and species functions",
    },
    {
      "name": "flower-habitat",
      "code": "A10",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "unit": "hectares",
      "rate": "£511 per hectare",
      "multiplier": 511,
      "description": "Provide flower-rich habitat for wild pollinators",
      "snippet": "",
      "guidance": "/prototype-guidance/draft-guidance-full/create-flower-rich-margins-and-plots",
      "outcome": "Reduced concentrations of nitrate and phosphate from harmful levels in wetlands, surface water bodies and groundwaters",
    },
    {
      "name": "low-input-cereal",
      "code": "A21",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "unit": "hectares",
      "rate": "£266 per hectare",
      "multiplier": 266,
      "description": "Create harvested low input cereal - An open-structured cereal crop provides summer foraging sites for declining and localised farmland birds and habitat for brown hare, rare arable plants and pollinator species, such as bees and beneficial insects",
      "snippet": "",
      "guidance": "#",
      "outcome": "Reduced impact of agrochemicals on natural, semi-natural and other priority terrestrial and aquatic habitats and on declining species",
    },
    {
      "name": "unharvested-cereal",
      "code": "A22",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "unit": "hectares",
      "rate": "£640 per hectare",
      "multiplier": 640,
      "description": "Create an unharvested cereal headland - Provides an important food source for farmland birds throughout the year and insects in the summer, and provides both grain and seeding arable plants in winter",
      "snippet": "",
      "guidance": "#",
      "outcome": "Reduced impact of agrochemicals on natural, semi-natural and other priority terrestrial and aquatic habitats and on declining species",
    },
    {
      "name": "beetle-bank",
      "code": "A23",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "unit": "hectares",
      "rate": "£573 per hectare",
      "multiplier": 573,
      "description": "Provide a beetle bank, a raised, uncut, grassy strip which provides overwintering habitat for large numbers of predatory insects and spiders",
      "snippet": "",
      "guidance": "#",
      "outcome": "Reduced impact of agrochemicals on natural, semi-natural and other priority terrestrial and aquatic habitats and on declining species",
    },
    {
      "name": "cultivated-plots",
      "code": "A24",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "unit": "hectares",
      "rate": "£532 per hectare",
      "multiplier": 532,
      "description": "Create and manage uncropped cultivated areas for arable plants on your land",
      "snippet": "",
      "guidance": "#",
      "outcome": "Reduced concentrations of nitrate and phosphate from harmful levels in wetlands, surface water bodies and groundwaters",
    },
    {
      "name": "grassy-strips",
      "code": "A25",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "unit": "hectares",
      "rate": "£557 per hectare",
      "multiplier": 557,
      "description": "Create and manage grassy strips on your arable land, maintained as permanent vegetation",
      "snippet": "",
      "guidance": "#",
      "outcome": "Reduced load of sediment in sensitive water bodies, wetlands and coastal systems",
    },
    {
      "name": "nesting-plots",
      "code": "A26",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "unit": "hectares",
      "rate": "£524 per hectare",
      "multiplier": 524,
      "description": "Create plots for ground nesting birds to create fallow plots for ground nesting birds within arable crops",
      "snippet": "",
      "guidance": "#",
      "outcome": "Improved status of declining terrestrial and aquatic or water dependent species that are either mobile across multiple habitats or require targeted interventions",
    },
    {
      "name": "winter-bird-food",
      "code": "A27",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "unit": "hectares",
      "rate": "£640 per hectare",
      "multiplier": 640,
      "description": "Provide feed for farmland birds - winter bird food plots help to successfully grow winter bird food plots on arable land and provide a range of winter food sources and feed as many farmland birds for as long as possible through winter",
      "snippet": "",
      "guidance": "#",
      "outcome": "Improved status of declining terrestrial and aquatic or water dependent species that are either mobile across multiple habitats or require targeted interventions",
    },
    {
      "name": "winter-supplementary",
      "code": "A28",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "unit": "hectares",
      "rate": "£494 per hectare",
      "multiplier": 494,
      "description": "Provide feed for farmland birds - winter supplementary feeding is about how to provide supplementary food for farmland birds in winter",
      "snippet": "",
      "guidance": "#",
      "outcome": "Reduced impact of agrochemicals on natural, semi-natural and other priority terrestrial and aquatic habitats and on declining species",
    },
    {
      "name": "bog-grazing",
      "code": "U1",
      "farmtype": "Mixed",
      "landtype": "Uplands",
      "region": "North West",
      "unit": "hectares",
      "rate": "£7 per hectare",
      "multiplier": 7,
      "description": "Use controlled grazing on bogs and peatlands to maintain and enhance storage of carbon",
      "snippet": "",
      "guidance": "#",
      "outcome": "Maintained and enhanced storage of carbon",
    },
    {
      "name": "fencing",
      "code": "U2",
      "farmtype": "Livestock",
      "landtype": "Uplands",
      "region": "North West",
      "unit": "metres",
      "rate": "£4 per metre",
      "multiplier": 4,
      "description": "Fence off rivers, streams, lakes and ponds from livestock to prevent bankside erosion, reduce nutrient input and faecal contamination",
      "snippet": "",
      "guidance": "/prototype-guidance/draft-guidance-full/fence-water-sources-livestock-prevent-erosion-contamination",
      "outcome": "Reduced concentrations of faecal bacteria in surface water bodies, groundwaters, wetlands and coastal systems",
    },
    {
      "name": "drinking-water",
      "code": "U3",
      "farmtype": "Livestock",
      "landtype": "Uplands",
      "region": "North West",
      "unit": "troughs",
      "rate": "£220 per trough",
      "multiplier": 220,
      "description": "Provide livestock drinking water as alternative to drinking from watercourse to reduce deposition of sediment in sensitive water bodies",
      "snippet": "",
      "guidance": "/prototype-guidance/draft-guidance-full/provide-drinking-water-livestock-reduce-sediment-water",
      "outcome": "Reduced concentrations of nitrate and phosphate from harmful levels in wetlands, surface water bodies and groundwaters",
    },
    {
      "name": "manure",
      "code": "U4",
      "farmtype": "Livestock",
      "landtype": "Uplands",
      "region": "North West",
      "unit": "hectares",
      "rate": "£50 per hectare",
      "multiplier": 50,
      "description": "Avoid applying manure on land sloping to water body to reduce concentrations of faecal bacteria in surface water bodies",
      "snippet": "",
      "guidance": "#",
      "outcome": "Reduced concentrations of faecal bacteria in surface water bodies, groundwaters, wetlands and coastal systems",
    },
    {
      "name": "chalk-limestone-grasslands",
      "code": "U17",
      "farmtype": "Livestock",
      "landtype": "Uplands",
      "region": "North West",
      "unit": "hectares",
      "rate": "£182 per hectare",
      "multiplier": 182,
      "description": "Manage chalk and limestone grassland in the lowlands, by maintaining this habitat this rare grassland and the species it supports to survive and thrive",
      "snippet": "",
      "guidance": "#",
      "outcome": "Reduced impact of agrochemicals on natural, semi-natural and other priority terrestrial and aquatic habitats and on declining species",
    },
    {
      "name": "purple-moor-grass",
      "code": "U18",
      "farmtype": "Livestock",
      "landtype": "Uplands",
      "region": "North West",
      "unit": "hectares",
      "rate": "£264 per hectare",
      "multiplier": 264,
      "description": "Manage purple moor-grass and rush pasture, by maintaining this habitat the rare grassland and the species it supports survive and thrive",
      "snippet": "",
      "guidance": "#",
      "outcome": "Reduced impact of agrochemicals on natural, semi-natural and other priority terrestrial and aquatic habitats and on declining species",
    },
    {
      "name": "calcareous-grassland",
      "code": "U19",
      "farmtype": "Livestock",
      "landtype": "Uplands",
      "region": "North West",
      "unit": "hectares",
      "rate": "£39 per hectare",
      "multiplier": 39,
      "description": "Manage upland calcareous grassland,  manage rough grazing or moorland on limestone in Northern England",
      "snippet": "",
      "guidance": "#",
      "outcome": "Conserved and enhanced landscape character",
    },
    {
      "name": "bare-soil",
      "code": "FL1",
      "farmtype": "Mixed",
      "landtype": "Flood risk",
      "region": "England",
      "unit": "hectares",
      "rate": "£331 per hectare",
      "multiplier": 331,
      "description": "Minimise the amount of bare soil or the amount of time within a rotation that soil is bare, especially during the winter, to reduce impact of, and enhance resilience to, flooding",
      "snippet": "",
      "guidance": "#",
      "outcome": "Reduced impact of and enhanced resilience to flooding",
    },
    {
      "name": "grass-strips",
      "code": "FL2",
      "farmtype": "Mixed",
      "landtype": "Flood risk",
      "region": "England",
      "unit": "hectares",
      "rate": "£557 per hectare",
      "multiplier": 557,
      "description": "Create, maintain and/or enhance contour grass strips to reduce impact of, and enhance resilience to, flooding",
      "snippet": "",
      "guidance": "#",
      "outcome": "Reduced impact of and enhanced resilience to flooding",
    },
    {
      "name": "canopy-cover",
      "code": "F1",
      "farmtype": "Mixed",
      "landtype": "Woodland",
      "region": "England",
      "unit": "hectares",
      "rate": "£70 per hectare",
      "multiplier": 70,
      "description": "Encourage diversification of the stand and continuity of canopy cover through natural regeneration of native species in semi-natural woodland to enhance resilience of the environment to climate change",
      "snippet": "",
      "guidance": "#",
      "outcome": "Conserved and enhanced landscape character",
    },
    {
      "name": "deadwood",
      "code": "F2",
      "farmtype": "Mixed",
      "landtype": "Woodland",
      "region": "England",
      "unit": "hectares",
      "rate": "£100 per hectare",
      "amount": 0,
      "multiplier": 100,
      "description": "Manage deadwood (e.g. remove diseased deadwood, leave other deadwood as habitat for invertebrates) to maintain/enhance habitat condition to support characteristic species",
      "snippet": "",
      "guidance": "#",
      "outcome": "Maintained and enhanced storage of carbon",
    },
  ],


  "options": [{
      "name": "agroforestry",
      "code": "A7",
      "type": "standard",
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
      "region": "England",
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
      "region": "England",
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
      "farmtype": "Mixed",
      "landtype": "Uplands",
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
      "region": "England",
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
      "type": "package",
      "farmtype": "Arable",
      "landtype": "Arable land",
      "region": "South East",
      "description": "Provide flower-rich habitat for wild pollinators",
      "actions": [
        "Create flower-rich margins and plots",
        "Create pollen and nectar plots"
      ]
    },
    {
      "name": "grass-strips",
      "code": "FL2",
      "type": "option",
      "farmtype": "Mixed",
      "landtype": "Flood risk",
      "region": "England",
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
      "type": "option",
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

  "goods": [{
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

  "applications": [{
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
