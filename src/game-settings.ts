import { BET_CHOICES } from "./constants";

const defaultSettings = {
    choices: Object.values(BET_CHOICES),
    choicesMapper: { player: 1, banker: 2, tie: 3 },
    hedgeBetGroups: [["player", "banker"]],
    numberOfTurnsPerRound: 4,
    numberOfRoundHistory: 108,
    historyPageSize: 30,
    provablyFair: true,
    botSettings: {
        ratio: { mainBetOptions: 99, rareBetOptions: 1 },
        mainBetOptions: ["player", "banker"],
        rareBetOptions: ["tie"],
    },
};

const gamesSettings: Record<number, any> = {
    1008: {
        id: 1008,
        name: "BaccaratNumber",
        durations: {
            wholeRound: 92,
            placingBets: 15,
            lockingBet: 3,
            showingResult: 3,
            wholeTurn: 22,
            startingRound: 4,
        },
        ...defaultSettings,
    },
    1009: {
        id: 1009,
        name: "SpeedBaccaratNumber",
        durations: {
            wholeRound: 80,
            placingBets: 12,
            lockingBet: 3,
            showingResult: 3,
            wholeTurn: 19,
            startingRound: 4,
        },
        ...defaultSettings,
    },
    1010: {
        id: 1010,
        name: "VipBaccaratNumber",
        durations: {
            wholeRound: 92,
            placingBets: 15,
            lockingBet: 3,
            showingResult: 3,
            wholeTurn: 22,
            startingRound: 4,
        },
        ...defaultSettings,
    },
};

export const getGameSettings = (gameId: number) => {
    return gamesSettings[gameId];
};
