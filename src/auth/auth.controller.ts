import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth() {}

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    async googleAuthRedirect(@Req() req) {
        return {
            statusCode: 200,
            data: req.user,
        };
    }
 
    @Get('facebook')
    @UseGuards(AuthGuard('facebook'))
    async facebookLogin() {
    }
    
    @Get('facebook/callback')
    @UseGuards(AuthGuard('facebook'))
    async facebookLoginCallback(@Req() req) {
      return {
        message: 'Facebook login successful',
        user: req.user,
      };
    }
    
}




