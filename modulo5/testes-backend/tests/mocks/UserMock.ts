import { User, USER_ROLES } from "../../src/model/User";

export const userMock = new User(
    "id_user_1",
    "user1",
    "user1@gmail.com",
    "user1password",
    USER_ROLES.NORMAL
)

export const userAdminMock = new User(
    "id_mock_admin",
    "astrodev",
    "astrodev@gmail.com",
    "user2password",
    USER_ROLES.ADMIN
) 