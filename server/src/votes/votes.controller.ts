import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { VotesService } from './votes.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('votes')
export class VotesController {
  constructor(private votesService: VotesService) {}

  @UseGuards(JwtAuthGuard)
  @Get('get/votes')
  getAll() {
    return this.votesService.findAll();
  }
}
