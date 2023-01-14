import { PartialType } from '@nestjs/mapped-types';
import { CreateToDoDto } from './create-to-do.dto';

export class UpdateToDoDto extends PartialType(CreateToDoDto) {}
