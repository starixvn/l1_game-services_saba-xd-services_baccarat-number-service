import { getRoundModel } from "../../../src/models";

describe("Rounds Model", () => {
    describe("getRoundsModel", () => {
        it("should create unique model names for different games", () => {
            // Arrange
            const game1 = "baccaratnumber";
            const game2 = "speedbaccaratnumber";

            // Act
            const model1 = getRoundModel(game1);
            const model2 = getRoundModel(game2);
            // Assert
            expect(model1.modelName).toBe("baccaratnumber_rounds");
            expect(model2.modelName).toBe("speedbaccaratnumber_rounds");
        });
    });
});
