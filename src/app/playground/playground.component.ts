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
import { SearchApiService } from '../api/search/search-api.service';
import { UserStorageApiService } from '@/app/api/user-storage/user-storage-api.service';
import { MembershipsInvitationsApiService } from '@/app/api/memberships-invitations/memberships-invitations-api.service';
import { Membership } from '@/app/api/memberships-invitations/memberships-invitations.model';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
})
export class PlaygroundComponent implements OnInit {
  stats$!: Observable<Stats>;
  projectId$!: Observable<ProjectResolver>;
  members$!: Observable<Membership[]>;

  constructor(
    private readonly statsApiService: StatsApiService,
    private readonly resolverApiService: ResolverApiService,
    private readonly userStorageApiService: UserStorageApiService,
    private readonly searchApiService: SearchApiService,
    private readonly membershipsInvitationsApiService: MembershipsInvitationsApiService
  ) {
    this.stats$ = this.statsApiService.getDiscover();
    this.projectId$ = this.resolverApiService.project('taiga5');
  }

  querySearch() {
    this.searchApiService.search('1', 'Ability').subscribe(console.log);
  }

  public listMembers() {
    this.projectId$.subscribe((projectResolver) => {
      this.members$ = this.membershipsInvitationsApiService.list(projectResolver.project);
    });
  }

  ngOnInit(): void {
    this.listMembers();
  }

  public listUserStorage() {
    this.userStorageApiService.list().subscribe(console.log);
  }

}
