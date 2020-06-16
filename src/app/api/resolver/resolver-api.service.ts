/**
 * Copyright (c) 2014-2020 Taiga Agile LLC
 *
 * This source code is licensed under the terms of the
 * GNU Affero General Public License found in the LICENSE file in
 * the root directory of this source tree.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from '@/app/config.service';
import { ProjectResolver, IssueResolver, TaskResolver, MilestoneResolver, MultipleResolver, RefResolver } from './resolver.model';

@Injectable()
export class ResolverApiService {
  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  public get base() {
    return `${this.config.apiUrl}/resolver`;
  }

  public project(project: string) {
    return this.http.get<ProjectResolver>(`${this.base}?project=${project}`);
  }

  public userStory(project: string, us: number) {
    return this.http.get<ProjectResolver>(`${this.base}?project=${project}&us=${us}`);
  }

  public issue(project: string, issue: number) {
    return this.http.get<IssueResolver>(`${this.base}?project=${project}&issue=${issue}`);
  }

  public task(project: string, task: number) {
    return this.http.get<TaskResolver>(`${this.base}?project=${project}&task=${task}`);
  }

  public milestone(project: string, milestone: string) {
    return this.http.get<MilestoneResolver>(`${this.base}?project=${project}&milestone=${milestone}`);
  }

  public wikiPage(project: string, wikiPage: string) {
    return this.http.get<MilestoneResolver>(`${this.base}?project=${project}&wikipage=${wikiPage}`);
  }

  public multiple(project: string, task?: number, us?: number, wikiPage?: string) {
    let query = `${this.base}?project=${project}`;
    if (task) {
      query += `&task=${task}`;
    }
    if (us) {
      query += `&us=${us}`;
    }
    if (wikiPage) {
      query += `&wikipage=${wikiPage}`;
    }
    return this.http.get<MultipleResolver>(query);
  }

  public ref(project: string, ref: number) {
    return this.http.get<RefResolver>(`${this.base}?project=${project}&ref=${ref}`);
  }
}
