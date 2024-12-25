import { getResultModel } from "../../../src/models";

describe("Results Model", () => {
    describe("getResultsModel", () => {
        it("should create unique model names for different games", () => {
            // Arrange
            const game1 = "baccaratnumber";
            const game2 = "speedbaccaratnumber";

            // Act
            const model1 = getResultModel(game1);
            const model2 = getResultModel(game2);
            // Assert
            expect(model1.modelName).toBe("baccaratnumber_results");
            expect(model2.modelName).toBe("speedbaccaratnumber_results");
        });
    });
});
