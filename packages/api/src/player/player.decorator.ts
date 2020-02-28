
import { createParamDecorator } from '@nestjs/common';

export const PlayerDecorator = createParamDecorator(
  (data, host) => host[2].req,
);
