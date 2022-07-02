import "reflect-metadata";

//CONTAINER WITH ALL REPOSITORIES
import "../src/shared/container/index";
import express from "express";



import { allRoutes } from "./shared/infra/routes";

const server = express();

server.use(express.json());

//ALL ROUTES 
server.use(allRoutes);

server.listen(3022, () => {
    console.log("Server is listening on 3022!");
});