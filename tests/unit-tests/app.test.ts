import { GameData, GameDefinition } from "sc-number-game-base";
import { Core } from "sc-game-base";
import { getGameSettings } from "../../src/game-settings";
import { resultHelper } from "../../src/helpers";
import BaccaratContainerRegistry from "../../src/baccarat-balls-container-registry";
import appConfigs from "../../src/app-configs";

jest.mock("sc-game-base");
jest.mock("../../src/game-settings");
jest.mock("../../src/helpers");
jest.mock("../../src/baccarat-balls-container-registry");
jest.mock("sc-number-game-base");

describe("App", () => {
    let mockApp: jest.Mocked<Core.BaseGameApp>;

    beforeEach(() => {
        jest.clearAllMocks();
        mockApp = {
            run: jest.fn(),
            startGame: jest.fn(),
        } as any;
        (Core.BaseGameApp as jest.Mock).mockImplementation(() => mockApp);
    });

    describe("run", () => {
        it("should initialize game with correct settings and start the application", async () => {
            // Arrange
            const mockGameSettings = {
                durations: { wholeRound: 1000 },
                name: "TestGame",
            };
            const mockContainer = {};

            (getGameSettings as jest.Mock).mockReturnValue(mockGameSettings);
            (BaccaratContainerRegistry as jest.Mock).mockImplementation(() => ({
                register: jest.fn().mockReturnValue(mockContainer),
            }));

            // Act
            await require("../../src/app");

            // Assert
            expect(getGameSettings).toHaveBeenCalledWith(appConfigs.gameId);
            expect(GameDefinition).toHaveBeenCalledWith(
                mockGameSettings,
                resultHelper.generateResult,
                resultHelper.getSettlementResult,
                resultHelper.generateRawResultForHash,
                resultHelper.getProbabilities
            );
            expect(GameData).toHaveBeenCalledWith(mockGameSettings.durations.wholeRound);
            expect(Core.BaseGameApp).toHaveBeenCalledWith(mockGameSettings.name, appConfigs);
            expect(mockApp.run).toHaveBeenCalled();
            expect(mockApp.startGame).toHaveBeenCalledWith(mockContainer);
        });
    });
});
