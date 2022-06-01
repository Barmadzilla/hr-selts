export default function (req, res, next) {
    const haveOld = req.url.includes("posts");
    if (haveOld) {
        let newUrl = req.url.replace("posts", "postitused");
        console.log("Do redirect to:", newUrl);
        res.writeHead(301, { Location: newUrl });
        res.end();
    } else {
        next();
    }
}
