/**
 * Copyright (c) 2014-2020 Taiga Agile LLC
 *
 * This source code is licensed under the terms of the
 * GNU Affero General Public License found in the LICENSE file in
 * the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { StatsApiService } from '@/app/api/stats/stats-api.service';
import { Stats } from '@/app/api/stats/stats.model';
import { ResolverApiService } from '@/app/api/resolver/resolver-api.service';
import { ProjectResolver } from '@/app/api/resolver/resolver.model';
import { ProjectsApiService } from '@/app/api/projects/projects-api.service';
import { ProjectsListOrderBy } from '@/app/api/projects/projects.model';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
})
export class PlaygroundComponent implements OnInit {
  stats$!: Observable<Stats>;
  projectId$!: Observable<ProjectResolver>;

  constructor(
    private readonly statsApiService: StatsApiService,
    private readonly resolverApiService: ResolverApiService,
    private readonly projectsApiService: ProjectsApiService
  ) {
    this.stats$ = this.statsApiService.getDiscover();
    this.projectId$ = this.resolverApiService.project('taiga5');
  }

  ngOnInit(): void {}

  public listProjects() {
    this.projectsApiService.list({
      is_backlog_activated: true,
    }, ProjectsListOrderBy.totalActivityLastMonth).subscribe(console.log);
  }

}
