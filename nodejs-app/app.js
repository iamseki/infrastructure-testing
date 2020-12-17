const express = require('express')

const app = express()

const fibo = (nth) => {
    let x = 0
    let y = 1

    for (let i = 0; i < nth; i++) {
        let tmp = y
        y += x
        x = tmp
    }

    return y
}

app.get("/hc", (_, res) => {
    console.log("[GET] on health check")
    return res.json({ status: "ok" })
})

app.get("/fibo/:nth", (req, res) => {
    const nth = req.params.nth
    const result = fibo(nth)

    console.log(`[GET] on fibo/${nth}`)
    return res.json({ fibo: result })
})

app.listen(9090, () => console.log("NodeJS Listen on port 9090"))