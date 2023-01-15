import { Controller, Get } from '@nestjs/common';

//@Host()
@Controller({ host: 'admin.example.com' })
export class HostController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}
