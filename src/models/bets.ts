import mongoose from "mongoose";

const bet = {
    uid: { type: String, required: true },
    name: { type: String, required: true },

    player: { type: Number, default: 0 },
    banker: { type: Number, default: 0 },
    tie: { type: Number, default: 0 },

    betwin: { type: Number, default: 0 },
    time: { type: Date },
    odds: { type: Object },
    totalAmount: { type: Number, default: 0 },

    clientSeed: { type: String, default: "" },
    siteId: { type: String },
    freeBet: { type: Boolean, default: false },

    playerId: { type: String },
    operatorId: { type: String, required: false },
    roundId: { type: Number, default: 0, required: true },
    drawId: { type: Number, default: 0, required: true },
    paid: { type: Boolean, default: false },
};

export const getBetModel = (gameName: string) => {
    return mongoose.model(
        `${gameName.toLowerCase()}_bets`,
        new mongoose.Schema({
            ...bet,
            currency: { type: String },
            rate: { type: Number, required: true },
        })
    );
};

export const getTmpBetModel = (gameName: string) => {
    return mongoose.model(`${gameName}_tmpbets`, new mongoose.Schema(bet));
};
