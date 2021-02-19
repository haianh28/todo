import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodoComponent,
    MenuComponent,
    FooterComponent,
  ], //Khai báo các component, directive, pile của module này
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],//Nạp các module khác mà module này cần
  providers: [],//Các dịch vụ, mà các component khác có thể sử dụng
  bootstrap: [AppComponent] // bootstrap định nghĩa component gốc của module
})
export class AppModule { }
