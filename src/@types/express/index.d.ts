import express from "express";

declare global {
    namespace Express {
        interface Request {
            info?: Record<string, any>
            token?: Record<string, any>
            id?: Record<string, any>
        }
    }
}