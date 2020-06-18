import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptorModule } from '@/app/commons/auth-interceptor/auth-interceptor.module';
import { ProjectsApiService } from './projects-api.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    AuthInterceptorModule,
  ],
  providers: [
    ProjectsApiService,
  ]
})
export class ProjectsApiModule { }
