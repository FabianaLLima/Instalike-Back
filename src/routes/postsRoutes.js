import express from "express";
import { listraPosts } from "../controllers/postsController.js";

 const routes = (app) => {
    app.use(express.json())
    app.get("/posts", listraPosts);
}

export default routes;

