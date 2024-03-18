import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class AppController {
  constructor() {}

  @Get()
  healthCheck(): string {
    return 'Never better';
  }
}
