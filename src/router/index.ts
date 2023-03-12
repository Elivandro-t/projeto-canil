import { Router} from "express";

import * as controlles from "../controls/pagescontroller";
import * as scearch_controlles from "../controls/searchcontrol"
 //rotas menus
const router = Router();
 router.get("/", controlles.home);
 router.get("/dogs", controlles.dogs);
 router.get("/cats", controlles.cats);
 router.get("/fishes", controlles.fishes);
 //fim rotas menus
//rotas pesquisas
 router.get("/search", scearch_controlles.search);

  export default router