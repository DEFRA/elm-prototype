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

  "bare-soil": {
    "type": "Minimise bare soil",
    "outcome": "or the amount of time within a rotation that soil is bare, especially during the winter, to reduce impact of, and enhance resilience to, flooding",
    "unit": "hectares",
    "rate": "£331 per hectare",
    "amount": 0,
    "multiplier": 331
  },

  "bog-grazing": {
    "type": "Control grazing on bogs and peatlands",
    "outcome": "to maintain and enhance storage of carbon",
    "unit": "hectares",
    "rate": "£7 per hectare",
    "amount": 0,
    "multiplier": 7
  },

  "canopy-cover": {
    "type": "Encourage diversification of the stand and continuity of canopy cover",
    "outcome": "through natural regeneration of native species in semi-natural woodland to enhance resilience of the environment to climate change",
    "unit": "hectares",
    "rate": "£70 per hectare",
    "amount": 0,
    "multiplier": 70
  },

  "cover-crops": {
    "type": "Use cover crops",
    "outcome": "",
    "unit": "hectares",
    "rate": "£114 per hectare",
    "amount": 0,
    "multiplier": 114
  },

  "create-grassland": {
    "type": "Convert arable and intensive grassland to species rich grassland",
    "outcome": "",
    "unit": "hectares",
    "rate": "£267 per hectare",
    "amount": 0,
    "multiplier": 267
  },

  "deadwood": {
    "type": "Manage deadwood",
    "outcome": "remove diseased deadwood, leave other deadwood as habitat for invertebrates to maintain/enhance habitat condition to support characteristic species",
    "unit": "hectares",
    "rate": "£100 per hectare",
    "amount": 0,
    "multiplier": 100
  },

  "drinking-water": {
    "type": "Provide livestock drinking water",
    "outcome": "as alternative to drinking from watercourse to reduce deposition of sediment in sensitive water bodies",
    "unit": "troughs",
    "rate": "£220 per trough",
    "amount": 0,
    "multiplier": 220
  },

  "fencing": {
    "type": "Fence off rivers, streams, lakes and ponds from livestock",
    "outcome": "to prevent bank-side erosion, reduce nutrient input and faecal contamination",
    "unit": "metres",
    "rate": "£4 per metre",
    "amount": 0,
    "multiplier": 4
  },

  "flower-habitat": {
    "type": "Provide flower-rich habitat",
    "outcome": "",
    "unit": "hectares",
    "rate": "£511 per metre",
    "amount": 0,
    "multiplier": 511
  },

  "grass-strips": {
    "type": "Create, maintain and/or enhance contour grass strips",
    "outcome": "to reduce impact of, and enhance resilience to, flooding",
    "unit": "hectares",
    "rate": "£557 per hectare",
    "amount": 0,
    "multiplier": 557
  },

  "manure": {
    "type": "Avoid applying manure on land sloping to water body",
    "outcome": "to reduce concentrations of faecal bacteria in surface water bodies",
    "unit": "hectares",
    "rate": "£50 per hectare",
    "amount": 0,
    "multiplier": 50
  },

  "tree-belts": {
    "type": "Create, maintain and/or enhance hillside tree belts",
    "outcome": "",
    "unit": "trees",
    "rate": "£1.28 per tree",
    "amount": 0,
    "multiplier": 1.28
  },

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
