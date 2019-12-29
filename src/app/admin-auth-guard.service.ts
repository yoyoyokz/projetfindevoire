import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuard {

  constructor(private auth: AuthService, private userService: UserService) { }

 
}
