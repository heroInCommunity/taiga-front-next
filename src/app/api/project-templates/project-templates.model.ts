/**
 * Copyright (c) 2014-2020 Taiga Agile LLC
 *
 * This source code is licensed under the terms of the
 * GNU Affero General Public License found in the LICENSE file in
 * the root directory of this source tree.
 */


export interface ProjectTemplate {
  id: number;
  name: string;
  slug: string;
  description: string;
  created_date: string;
  modified_date: string;
  order: number;
  is_backlog_activated: boolean;
  is_contact_activated: boolean;
  is_epics_activated: boolean;
  is_issues_activated: boolean;
  is_kanban_activated: boolean;
  is_wiki_activated: boolean;
  videoconferences: string | null;
  videoconferences_extra_data: string;
  default_owner_role: string;
  roles: [];
  default_options: {
    epic_status: string;
    us_status: string;
    points: string;
    task_status: string;
    issue_status: string;
    issue_type: string;
    priority: string;
    severity: string;
  };
  epic_statuses: [];
  us_statuses: [];
  points: [];
  task_statuses: [];
  issue_statuses: [];
  issue_types: [];
  priorities: [];
  severities: [];
}
