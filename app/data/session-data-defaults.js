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
