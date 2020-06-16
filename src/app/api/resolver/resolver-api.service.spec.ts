/**
 * Copyright (c) 2014-2020 Taiga Agile LLC
 *
 * This source code is licensed under the terms of the
 * GNU Affero General Public License found in the LICENSE file in
 * the root directory of this source tree.
 */

import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator';
import { ConfigService } from '@/app/config.service';
import { ConfigServiceMock } from '@/app/config.service.mock';
import { ResolverApiService } from './resolver-api.service';

import * as faker from 'faker';

describe('ResolverApiService', () => {
  let spectator: SpectatorHttp<ResolverApiService>;
  const createHttp = createHttpFactory({
    service: ResolverApiService,
    providers: [
      {
        provide: ConfigService,
        useValue: ConfigServiceMock,
      },
    ],
  });

  beforeEach(() => spectator = createHttp());

  const project = 'project-0';
  const us = faker.random.number();
  const issue = faker.random.number();
  const task = faker.random.number();
  const milestone = faker.hacker.adjective();
  const wikiPage = faker.hacker.verb();

  it('Resolver by project', () => {
    spectator.service.project(project).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/resolver?project=${project}`, HttpMethod.GET);
  });

  it('Resolver by userStory', () => {
    spectator.service.userStory(project, us).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/resolver?project=${project}&us=${us}`, HttpMethod.GET);
  });

  it('Resolver by issue', () => {
    spectator.service.issue(project, issue).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/resolver?project=${project}&issue=${issue}`, HttpMethod.GET);
  });

  it('Resolver by task', () => {
    spectator.service.task(project, task).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/resolver?project=${project}&task=${task}`, HttpMethod.GET);
  });

  it('Resolver by milestone', () => {
    spectator.service.milestone(project, milestone).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/resolver?project=${project}&milestone=${milestone}`, HttpMethod.GET);
  });

  it('Resolver by wikiPage', () => {
    spectator.service.wikiPage(project, wikiPage).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/resolver?project=${project}&wikipage=${wikiPage}`, HttpMethod.GET);
  });

  it('Resolver by multiple, only one parameter', () => {
    spectator.service.multiple(project, task).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/resolver?project=${project}&task=${task}`, HttpMethod.GET);
  });

  it('Resolver by multiple, many parameters', () => {
    spectator.service.multiple(project, task, us).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/resolver?project=${project}&task=${task}&us=${us}`, HttpMethod.GET);
  });

  it('Resolver by Reference', () => {
    spectator.service.ref(project, us).subscribe();
    spectator.expectOne(`${ConfigServiceMock.apiUrl}/resolver?project=${project}&ref=${us}`, HttpMethod.GET);
  });
});
