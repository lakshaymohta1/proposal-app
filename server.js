const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

/* LOCAL RUN */
if (require.main === module) {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`❤️ Server running on http://localhost:${PORT}`);
    });
}

/* VERCEL */
module.exports = app;
