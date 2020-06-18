import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '@/app/config.service';
import { ProjectListEntry, ProjectsListFilter, ProjectsListOrderBy } from './projects.model';
import { UtilsService } from '@/app/commons/utils/utils-service.service';

@Injectable()
export class ProjectsApiService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  public get base() {
    return `${this.config.apiUrl}/projects`;
  }

  public list(filters: ProjectsListFilter = {}, orderBy?: ProjectsListOrderBy) {
    const params = UtilsService.buildQueryParams({
      ...filters,
      order_by: orderBy,
    });

    return this.http.get<ProjectListEntry>(this.base, {
      params,
    });
  }

  public create<T>(data: Record<string, string>) {
    return this.http.post<UserStorage<T>>(this.base, data);
  }
}
