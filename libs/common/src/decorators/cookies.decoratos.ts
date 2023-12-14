import {ExecutionContext, createParamDecorator} from "@nestjs/common";

export const Cookie = createParamDecorator((key: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();

  return key && key in request.cookies ? request.cookies[key] : request.cookies;
});
