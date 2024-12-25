import { asClass, asValue, AwilixContainer } from "awilix";
import { getBetLogModel, getBetModel, getResultModel, getRoundModel, getTmpBetModel } from "./models/index";
import { ContainerRegistry } from "sc-number-game-base";
import { InGameConsumer, RoundResultConsumer, SettleGameRoundConsumer } from "./event-consumers";
import { RunningRoundInfoPublisher, GameStatusPublisher } from "./event-publishers";
import { GameDefinition, GameData } from "sc-game-base/src/core";

export default class BaccaratBallsContainerRegistry extends ContainerRegistry {
    register(appConfigs: any, definition: GameDefinition, gameData: GameData): AwilixContainer<any> {
        super.register(appConfigs, definition, gameData);
        this.registerRepositories(definition.name);
        return this.container;
    }

    registerRepositories(gameName: string) {
        const name = gameName.toLowerCase();
        const rounds = getRoundModel(name);
        const bets = getBetModel(name);
        const tmpBets = getTmpBetModel(name);
        const betLogs = getBetLogModel(name);
        const results = getResultModel(name);
        this.container.register({
            roundsRepository: asValue(rounds),
            betsRepository: asValue(bets),
            tempBetsRepository: asValue(tmpBets),
            betLogsRepository: asValue(betLogs),
            resultsRepository: asValue(results),
        });
    }

    registerConsumers(): void {
        super.registerConsumers();
        this.container.register({
            inGameConsumer: asClass(InGameConsumer).singleton(),
            roundResultConsumer: asClass(RoundResultConsumer).singleton(),
            settleGameRoundConsumer: asClass(SettleGameRoundConsumer).singleton().proxy(),
        });
    }

    registerPublishers() {
        super.registerPublishers();

        this.container.register({
            runningRoundInfoPublisher: asClass(RunningRoundInfoPublisher).singleton(),
            gameStatusPublisher: asClass(GameStatusPublisher).singleton(),
        });
    }
}
