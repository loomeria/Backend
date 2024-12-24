import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import {AuthGuard} from "@nestjs/passport";

@Injectable()
export class GoogleAuthGuard extends AuthGuard('google'){

}