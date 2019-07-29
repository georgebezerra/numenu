import { Application, Request, Response } from "express";
import TokenRoutes from "../modules/auth/auth";
import UserRoutes from "../modules/User/routes";
import ToolRoutes from "../modules/tools/routes";

class Routes {
  constructor() {}

  initRoutes(app: Application, auth: any): void {
    app.route("/api/users/all").all(auth.config().authenticate()).get(UserRoutes.index);
    app.route("/api/users/create").all(auth.config().authenticate()).post(UserRoutes.create);
    app.route("/api/users/:id").all(auth.config().authenticate()).get(UserRoutes.findOne);
    app.route("/api/users/:id/update").all(auth.config().authenticate()).put(UserRoutes.update);
    app.route("/api/users/:id/destroy").all(auth.config().authenticate()).delete(UserRoutes.destroy);
    app.route("/token").post(TokenRoutes.auth);

    app.route("/api/tool/all").get(ToolRoutes.index);
    app.route("/api/tool/create").post(ToolRoutes.create);
    app.route("/api/tool/:id").get(ToolRoutes.findOne);
    app.route("/api/tool/:id/update").put(ToolRoutes.update);
    app.route("/api/tool/:id/destroy").delete(ToolRoutes.destroy);
  }
}

export default new Routes();
