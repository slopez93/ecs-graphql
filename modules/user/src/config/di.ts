import { Container } from "inversify";


import { USER_SERVICE, UserService } from "../services/user.service";
import { AUTOMAPPER, AutoMapper } from "../shared/automapper";
import { AUTOMAPPER_PROFILE } from "../shared/automapper/AutomapperProfile";
import { UserProfile } from "../mappers/UserProfile";
import { USER_DB, UserDb } from "../db/UserDb";

const container = new Container();

container.bind<UserService>(USER_SERVICE).to(UserService);
container.bind<UserDb>(USER_DB).to(UserDb);

container.bind<AutoMapper>(AUTOMAPPER).to(AutoMapper);
container.bind<UserProfile>(AUTOMAPPER_PROFILE).to(UserProfile);

export default container;
