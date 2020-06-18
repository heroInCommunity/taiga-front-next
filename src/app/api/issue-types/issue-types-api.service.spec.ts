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
import { IssueTypesApiService } from './issue-types-api.service';
import { IssueTypeMockFactory } from './issue-types.model.mock';

describe('IssueTypesApiService', () => {
  const project = 1;

  let spectator: SpectatorHttp<IssueTypesApiService>;
  const createHttp = createHttpFactory({
    service: IssueTypesApiService,
    providers: [
      { provide: ConfigService, useValue: ConfigServiceMock },
    ],
  });

  beforeEach(() => spectator = createHttp());

  it('list', () => {
    spectator.service.list().subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/issue-types`, HttpMethod.GET);
  });

  it('list filtered by project', () => {
    const queryParams = {
      project: project.toString(),
    };

    spectator.service.list(project).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/issue-types?${new URLSearchParams(queryParams)}`, HttpMethod.GET);
  });

  it('get', () => {
    const id = 1;

    spectator.service.get(id).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/issue-types/${id}`, HttpMethod.GET);
  });

  it('create', () => {
    const data = {
      name: 'test',
      color: '#fabada',
      order: 1,
      project: 1,
    };

    spectator.service.create(data).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/issue-types`, HttpMethod.POST);
  });

  it('put', () => {
    const id = 1;
    const data = IssueTypeMockFactory.build({id});

    spectator.service.put(id, data).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/issue-types/${id}`, HttpMethod.PUT);
  });

  it('patch', () => {
    const id = 1;
    const data = {
      color: '#fabada',
    };

    spectator.service.patch(id, data).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/issue-types/${id}`, HttpMethod.PATCH);
  });

  it('delete', () => {
    const id = 1;

    spectator.service.delete(id).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/issue-types/${id}`, HttpMethod.DELETE);
  });
});
