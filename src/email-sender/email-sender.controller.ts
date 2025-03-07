import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email-sender.service';

class SendEmailDto {
  to: string;
  subject: string;
  html: string;
}

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() sendEmailDto: SendEmailDto) {
    return this.emailService.sendEmail(
      sendEmailDto.to,
      sendEmailDto.subject,
      sendEmailDto.html,
    );
  }
}