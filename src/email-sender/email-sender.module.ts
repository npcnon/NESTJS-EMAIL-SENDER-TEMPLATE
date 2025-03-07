import { Module } from '@nestjs/common';
import { EmailService } from './email-sender.service';
import { EmailController } from './email-sender.controller';

@Module({
  providers: [EmailService],
  controllers: [EmailController],
  exports: [EmailService],
})
export class EmailModule {}