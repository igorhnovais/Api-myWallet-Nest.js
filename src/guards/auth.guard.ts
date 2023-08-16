import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService) { }

  async canActivate(context: ExecutionContext) {

    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;
    console.log("token", authorization)
    try {
      const data = this.authService.checkToken((authorization ?? "").split(" ")[1]);
      console.log("data", data)
      const user = await this.userService.get(parseInt(data.sub));
      console.log('user', user)
      request.user = user; // middlewares
    } catch (error) {
      console.log(error);
      return false;
    }

    return true;
  }

}