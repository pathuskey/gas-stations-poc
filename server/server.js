const express = require("express")
const fetch = require("node-fetch")
const cors = require("cors")

const apiPort = 4000
const app = express()

app.use(cors())

app.get("/", async (req, res) => {
  try {
    const url = `https://www.walmart.com/store/finder/electrode/api/stores?singleLineAddr=${req.query.zipCode}&distance=${req.query.distance}`

    const response = await fetch(url)
    const json = await response.json()

    const gasStations = json.payload.storesData.stores.filter((store) => {
      const storeWithGasStation = store.services.find(
        (service) => service.id === "17"
      )

      return storeWithGasStation ? true : false
    })

    if (gasStations && gasStations.length) {
      res.status(200).json({ success: true, data: gasStations })
    } else {
      res.status(404).json({ success: false, data: `Movie not found` })
    }
  } catch (err) {
    res.send(err)
  }
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
