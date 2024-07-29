const express = require("express");

const router = express.Router();

// const {welcome} = require("../../controllers/sayActions");

// router.get("/", welcome);

// const {browse, read } = require("../../controllers/programActions");
// const { browse, read } = require("../../controllers/categoryActions");

// router.get("/programs", browse);
// router.get("/programs/:id", read);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

// const itemsRouter = require("./items/router");

// router.use("/items", itemsRouter);

const programsRouter = require("./programs/router");

router.use("/programs", programsRouter);

const categoriesRouter = require("./categories/router");

router.use("/categories", categoriesRouter);

/* ************************************************************************* */

module.exports = router;
