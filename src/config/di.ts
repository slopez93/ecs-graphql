import { Container } from "inversify";

import { FOODS_DB, FoodsDb } from "../modules/foods/db/FoodsDb";
import { FoodsProfile } from "../modules/foods/mappers/FoodsProfile";
import { FOODS_SERVICE, FoodsService } from "../modules/foods/services";
import { AUTOMAPPER, AutoMapper } from "../shared/automapper";
import { AUTOMAPPER_PROFILE } from "../shared/automapper/AutomapperProfile";

const container = new Container();

container.bind<FoodsService>(FOODS_SERVICE).to(FoodsService);
container.bind<FoodsDb>(FOODS_DB).to(FoodsDb);

container.bind<AutoMapper>(AUTOMAPPER).to(AutoMapper);
container.bind<FoodsProfile>(AUTOMAPPER_PROFILE).to(FoodsProfile);

export default container;
