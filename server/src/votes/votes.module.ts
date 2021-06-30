import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vote } from './entity/vote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vote])],
  exports: [TypeOrmModule],
})
export class VotesModule {}
