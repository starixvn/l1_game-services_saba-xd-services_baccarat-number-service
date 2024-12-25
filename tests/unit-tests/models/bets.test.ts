import { getBetModel, getTmpBetModel } from "../../../src/models";

describe("Bets Model", () => {
    describe("getBetModel", () => {
        it("should create unique model names for different games", () => {
            // Arrange
            const game1 = "baccaratnumber";
            const game2 = "speedbaccaratnumber";

            // Act
            const model1 = getBetModel(game1);
            const model2 = getBetModel(game2);
            // Assert
            expect(model1.modelName).toBe("baccaratnumber_bets");
            expect(model2.modelName).toBe("speedbaccaratnumber_bets");
        });
    });

    describe("getTmpBetModel", () => {
        it("should create unique model names for different games", () => {
            // Arrange
            const game1 = "baccaratnumber";
            const game2 = "speedbaccaratnumber";

            // Act
            const model1 = getTmpBetModel(game1);
            const model2 = getTmpBetModel(game2);
            // Assert
            expect(model1.modelName).toBe("baccaratnumber_tmpbets");
            expect(model2.modelName).toBe("speedbaccaratnumber_tmpbets");
        });
    });
});
