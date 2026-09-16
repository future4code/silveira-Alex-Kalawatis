import { UserBusiness } from "../src/business/UserBusiness";
import { UserDatabase } from "../src/data/UserDatabase";
import { HashMockGenerator } from "./mocks/hashGeneratorMock";
import { IdGeneratorMock } from "./mocks/idGeneratorMock";
import { TokenGeneratorMock } from "./mocks/tokenGeneratorMock";
import { UserDatabaseMock } from "./mocks/userDatabaseMock";

const userBusinessMock = new UserBusiness(
    new IdGeneratorMock(),
    new HashMockGenerator(),
    new TokenGeneratorMock(),
    new UserDatabaseMock() as UserDatabase
)

    describe("getUserById", () => {
        // (a)
        test("Should catch error when id is not registered", async () => {
            expect.assertions(2)

            try {
                await userBusinessMock.getUserById("abc")
            } catch (error:any) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Usuario nao encontrado")
            }
        })

        // (b)
        test("Should return respective user when id is registered", async () => {
            expect.assertions(2)

            try {
                const getUserById = jest.fn(
                    (id: string) => userBusinessMock.getUserById(id)
                )

                const result = await getUserById("id_mock_admin")

                expect(getUserById).toHaveBeenCalledWith("id_mock_admin")
                expect(result).toEqual({
                    id: "id_mock_admin",
                    name: "astrodev",
                    email: "astrodev@gmail.com",
                    role: "ADMIN",
                })
            } catch (error:any) {
                console.log(error.message)
            }
        })
    })