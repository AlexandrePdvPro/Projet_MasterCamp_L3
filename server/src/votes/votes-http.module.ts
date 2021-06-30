import { Module } from '@nestjs/common';
import { VotesService } from './votes.service';
import { VotesController } from './votes.controller';

@Module({
  imports: [VotesHttpModule],
  providers: [VotesService],
  controllers: [VotesController],
  exports: [VotesService],
})
export class VotesHttpModule {}
