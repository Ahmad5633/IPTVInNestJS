import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { LoginAuthModule } from './login/auth.module';
import { GenreModule } from  './genre/genre.module';
import { SeriesModule } from  './series/series.module';
import { GenreSeriesModule } from  './genreSeries/genreSeries.module';
import { StreamModule } from  './stream/stream.module';
import { EpisodeModule } from  './episode/episode.module';
import { SeasonModule } from  './season/season.module';
import { FileUploadModule } from './file/fileupload.module';
import { FileModule } from './file/file.module';
import { ForgetPasswordModule } from './resetPassword/forget-password.module';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { PassportModule } from '@nestjs/passport';
@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/nestjs_IPTV'),
        UserModule,
        LoginAuthModule,
        GenreModule,
        SeriesModule,
        GenreSeriesModule,
        StreamModule,
        EpisodeModule,
        SeasonModule,
        FileUploadModule,
        FileModule,
        ForgetPasswordModule,
        AuthModule,
        EventsModule,
        PassportModule.register({ session: false }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
