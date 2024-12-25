import mongoose from "mongoose";
import { Models } from "sc-number-game-base/dist";

export const getResultModel = (gameName: string) => {
    return mongoose.model(`${gameName}_results`, Models.ResultSchema);
};
