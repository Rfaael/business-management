import express from "express";

declare global {
    namespace Express {
        interface Request {
            info?: Record<string, any>
            token?: Record<string, any>
        }
    }
}