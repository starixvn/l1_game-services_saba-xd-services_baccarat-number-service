import { GameData, GameDefinition } from "sc-number-game-base";
import appConfigs from "./app-configs";
import { getGameSettings } from "./game-settings";
import { resultHelper } from "./helpers";
import { Core } from "sc-game-base";
import BaccaratContainerRegistry from "./baccarat-balls-container-registry";

const run = async () => {
    const gameSettings = getGameSettings(appConfigs.gameId);
    const definition = new GameDefinition(
        gameSettings,
        resultHelper.generateResult,
        resultHelper.getSettlementResult,
        resultHelper.generateRawResultForHash,
        resultHelper.getProbabilities
    );

    const gameData = new GameData(gameSettings.durations.wholeRound);

    const container = new BaccaratContainerRegistry().register(appConfigs, definition, gameData);

    const app = new Core.BaseGameApp(gameSettings.name, appConfigs);

    await app.run();

    await app.startGame(container);
};

run();
