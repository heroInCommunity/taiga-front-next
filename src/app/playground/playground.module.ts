/**
 * Copyright (c) 2014-2020 Taiga Agile LLC
 *
 * This source code is licensed under the terms of the
 * GNU Affero General Public License found in the LICENSE file in
 * the root directory of this source tree.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent } from './playground.component';
import { StatsApiModule } from '@/app/api/stats/stats-api.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { ResolverApiModule } from '@/app/api/resolver/resolver-api.module';
import { SearchApiModule } from '../api/search/search-api.module';
import { UserStorageApiModule } from '@/app/api/user-storage/user-storage-api.module';
import { MembershipsInvitationsApiModule } from '../api/memberships-invitations/memberships-invitations-api.module';

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [
    CommonModule,
    PlaygroundRoutingModule,
    StatsApiModule,
    ResolverApiModule,
    UserStorageApiModule,
    MembershipsInvitationsApiModule,
    ReactiveComponentModule,
    SearchApiModule,
  ],
})
export class PlaygroundModule { }
