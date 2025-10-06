import express from "express";

const router = express.Router();

router.post('/', (req, res) => {

    const {lan, lat} = req.body;

    try {

        console.log(lan, lat);
        res.send("Successful");
    } catch (err) {
        console.log(err);
    }

});

export default router
