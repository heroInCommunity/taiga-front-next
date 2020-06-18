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
import { MilestoneApiService } from '../api/milestones/milestones-api.service';
import { Milestone } from '../api/milestones/milestones.model';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
})
export class PlaygroundComponent implements OnInit {
  stats$!: Observable<Stats>;
  projectId$!: Observable<ProjectResolver>;
  milestones$!: Observable<Milestone[]>;

  constructor(
    private readonly statsApiService: StatsApiService,
    private readonly resolverApiService: ResolverApiService,
    private readonly milestoneApiService: MilestoneApiService
  ) {
    this.stats$ = this.statsApiService.getDiscover();
    this.projectId$ = this.resolverApiService.project('taiga5');
  }

  public initData() {
    this.projectId$.subscribe((projectResolver) => {
      this.milestones$ = this.milestoneApiService.list(projectResolver.project);
    });
  }

  ngOnInit(): void {
    this.initData();
  }

}
