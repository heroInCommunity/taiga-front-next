/**
 * Copyright (c) 2014-2020 Taiga Agile LLC
 *
 * This source code is licensed under the terms of the
 * GNU Affero General Public License found in the LICENSE file in
 * the root directory of this source tree.
 */

import { createHttpFactory, SpectatorHttp, HttpMethod } from '@ngneat/spectator';

import { ConfigService } from '@/app/config.service';
import { ConfigServiceMock } from '@/app/config.service.mock';
import { IssueStatusesApiService } from './issue-statuses-api.service';
import { IssueStatusMockFactory } from './issue-statuses.model.mock';

describe('IssueStatusesApiService', () => {
  const project = 1;

  let spectator: SpectatorHttp<IssueStatusesApiService>;
  const createHttp = createHttpFactory({
    service: IssueStatusesApiService,
    providers: [
      { provide: ConfigService, useValue: ConfigServiceMock },
    ],
  });

  beforeEach(() => spectator = createHttp());

  it('list', () => {
    spectator.service.list().subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/issue-statuses`, HttpMethod.GET);
  });

  it('list filtered by project', () => {
    const queryParams = {
      project: project.toString(),
    };

    spectator.service.list(project).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/issue-statuses?${new URLSearchParams(queryParams)}`, HttpMethod.GET);
  });

  it('get', () => {
    const id = 1;

    spectator.service.get(id).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/issue-statuses/${id}`, HttpMethod.GET);
  });

  it('create', () => {
    const data = {
      name: 'test',
      color: '#fabada',
      order: 1,
      is_closed: false,
      project: 1,
    };

    spectator.service.create(data).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/issue-statuses`, HttpMethod.POST);
  });

  it('put', () => {
    const id = 1;
    const data = IssueStatusMockFactory.build({id});

    spectator.service.put(id, data).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/issue-statuses/${id}`, HttpMethod.PUT);
  });

  it('patch', () => {
    const id = 1;
    const data = {
      color: '#fabada',
    };

    spectator.service.patch(id, data).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/issue-statuses/${id}`, HttpMethod.PATCH);
  });

  it('delete', () => {
    const id = 1;

    spectator.service.delete(id).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/issue-statuses/${id}`, HttpMethod.DELETE);
  });
});
