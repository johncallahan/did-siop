import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { LibDidSiopModule } from '@app/lib-did-siop';
import { SiopController } from './siop.controller';
import { SiopService } from './siop.service';
import { SiopProcessor } from './siop.processor';

@Module({
  imports: [
    LibDidSiopModule,
    BullModule.registerQueue({
      name: 'siop',
    }, {
      name: 'siopError',
    })
  ],
  controllers: [SiopController],
  providers: [SiopService, SiopProcessor],
})
export class SiopModule {}
