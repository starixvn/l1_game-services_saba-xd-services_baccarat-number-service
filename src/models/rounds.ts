import mongoose from "mongoose";

export type DrawResult = {
    drawId: number;
    player: number;
    banker: number;
};
const resultSchema = new mongoose.Schema<DrawResult>(
    {
        drawId: { type: Number, required: true },
        player: { type: Number, required: true },
        banker: { type: Number, required: true },
        time: { type: Date, default: new Date() },
    },
    {
        _id: false,
    }
);

export type DrawSettlementResult = {
    drawId: number;
    player: boolean;
    banker: boolean;
    tie: boolean;
};
const settlementResultSchema = new mongoose.Schema<DrawSettlementResult>(
    {
        drawId: { type: Number, required: true },
        player: { type: Boolean, default: false },
        banker: { type: Boolean, default: false },
        tie: { type: Boolean, default: false },
    },
    { _id: false }
);

const Schema = new mongoose.Schema({
    id: { type: Number, required: true },
    result: { type: [resultSchema] },
    settlementResult: { type: [settlementResultSchema] },
    time: { type: Date, default: new Date() },
    exchangeRateId: { type: Number, required: true },
    drawId: { type: Number, required: true },
    ended: { type: Boolean, default: false },
});

export const getRoundModel = (gameName: string) => {
    return mongoose.model(`${gameName}_rounds`, Schema);
};
