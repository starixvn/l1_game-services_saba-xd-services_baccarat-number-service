import { getGameSettings } from "../../src/game-settings";
import { BET_CHOICES } from "../../src/constants";

describe("Game Settings", () => {
    describe("getGameSettings", () => {
        // Test default settings separately
        describe("default settings", () => {
            it("should have consistent default settings across all games", () => {
                // Arrange
                const gameIds = [1008, 1009, 1010];

                // Act & Assert
                gameIds.forEach((gameId) => {
                    const settings = getGameSettings(gameId);
                    expect(settings.choices).toEqual(Object.values(BET_CHOICES));
                    expect(settings.choicesMapper).toEqual({ player: 1, banker: 2, tie: 3 });
                    expect(settings.hedgeBetGroups).toEqual([["player", "banker"]]);
                    expect(settings.numberOfTurnsPerRound).toBe(4);
                    expect(settings.numberOfRoundHistory).toBe(108);
                    expect(settings.historyPageSize).toBe(30);
                    expect(settings.provablyFair).toBe(true);
                });
            });
        });

        // Test game-specific settings separately
        describe("game-specific settings", () => {
            it("should return correct settings for Baccarat (1008)", () => {
                // Arrange & Act
                const settings = getGameSettings(1008);

                // Assert
                expect(settings).toMatchObject({
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
                });
            });

            it("should return correct settings for Speed Baccarat (1009)", () => {
                // Arrange & Act
                const settings = getGameSettings(1009);

                // Assert
                expect(settings).toMatchObject({
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
                });
            });

            it("should return correct settings for VIP Baccarat (1010)", () => {
                // Arrange & Act
                const settings = getGameSettings(1010);

                // Assert
                expect(settings).toMatchObject({
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
                });
            });
        });

        // Test bot settings separately
        describe("bot settings", () => {
            it("should have correct bot settings for all games", () => {
                // Arrange
                const gameIds = [1008, 1009, 1010];
                const expectedBotSettings = {
                    ratio: { mainBetOptions: 99, rareBetOptions: 1 },
                    mainBetOptions: ["player", "banker"],
                    rareBetOptions: ["tie"],
                };

                // Act & Assert
                gameIds.forEach((gameId) => {
                    const settings = getGameSettings(gameId);
                    expect(settings.botSettings).toEqual(expectedBotSettings);
                });
            });
        });

        // Test edge cases separately
        describe("edge cases", () => {
            it("should return undefined for non-existent game ID", () => {
                // Arrange & Act
                const settings = getGameSettings(9999);

                // Assert
                expect(settings).toBeUndefined();
            });

            it("should return undefined for negative game ID", () => {
                // Arrange & Act
                const settings = getGameSettings(-1);

                // Assert
                expect(settings).toBeUndefined();
            });

            it("should return undefined for zero game ID", () => {
                // Arrange & Act
                const settings = getGameSettings(0);

                // Assert
                expect(settings).toBeUndefined();
            });
        });
    });
});
