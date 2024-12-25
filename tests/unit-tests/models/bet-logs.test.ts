import { getBetLogModel } from "../../../src/models/bet-logs";

describe("BetLogs Model", () => {
    describe("getBetLogModel", () => {
        it("should create unique model names for different games", () => {
            // Arrange
            const game1 = "baccaratnumber";
            const game2 = "speedbaccaratnumber";

            // Act
            const model1 = getBetLogModel(game1);
            const model2 = getBetLogModel(game2);

            // Assert
            expect(model1.modelName).toBe("baccaratnumber_betlogs");
            expect(model2.modelName).toBe("speedbaccaratnumber_betlogs");
        });
    });
});
