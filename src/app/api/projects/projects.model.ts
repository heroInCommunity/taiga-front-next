import { User } from '@/app/api/users/users.model';

export interface ProjectsListFilter {
  member?: number;
  members?: number[];
  is_looking_for_people?: boolean;
  is_featured?: boolean;
  is_backlog_activated?: boolean;
  is_kanban_activated?: boolean;
}

export enum ProjectsListOrderBy {
  membershipsUserOrder = 'memberships_user_order',
  totalFans = 'total_fans',
  totalFansLastWeek = 'total_fans_last_week',
  totalFansLastMonth = 'total_fans_last_month',
  totalFansLastYear = 'total_fans_last_year',
  totalActivity = 'total_activity',
  totalActivityLastWeek = 'total_activity_last_week',
  totalActivityLastMonth = 'total_activity_last_month',
  totalActivityLastYear = 'total_activity_last_year',
}

export enum Permissions {
  modifyTask = 'modify_task',
  modifyEpic = 'modify_epic',
  addTask = 'add_task',
  adminRoles = 'admin_roles',
  commentWikiPage = 'comment_wiki_page',
  viewProject = 'view_project',
  modifyProject = 'modify_project',
  modifyWikiPage = 'modify_wiki_page',
  adminProjectValues = 'admin_project_values',
  modifyUs = 'modify_us',
  viewEpics = 'view_epics',
  deleteProject = 'delete_project',
  modifyIssue = 'modify_issue',
  modifyWikiLink = 'modify_wiki_link',
  addIssue = 'add_issue',
  deleteMilestone = 'delete_milestone',
  removeMember = 'remove_member',
  deleteEpic = 'delete_epic',
  deleteWikiLink = 'delete_wiki_link',
  addEpic = 'add_epic',
  commentEpic = 'comment_epic',
  deleteTask = 'delete_task',
  commentTask = 'comment_task',
  commentIssue = 'comment_issue',
  viewIssues = 'view_issues',
  addUs = 'add_us',
  addMember = 'add_member',
  addWikiPage = 'add_wiki_page',
  deleteIssue = 'delete_issue',
  viewWikiPages = 'view_wiki_pages',
  viewMilestones = 'view_milestones',
  addMilestone = 'add_milestone',
  commentUs = 'comment_us',
  deleteWikiPage = 'delete_wiki_page',
  viewUs = 'view_us',
  modifyMilestone = 'modify_milestone',
  addWikiLink = 'add_wiki_link',
  deleteUs = 'delete_us',
  viewWikiLinks = 'view_wiki_links',
  viewTasks = 'view_tasks',
}

// todo
export interface ProjectListEntry extends Partial<Project> {
  anon_permissions: string[];
  blocked_code: null | string;
  created_date: string;
  creation_template: number;
  default_epic_status: number;
  default_issue_status: number;
  default_issue_type: number;
  default_points: number;
  default_priority: number;
  default_severity: number;
  default_task_status: number;
  default_us_status: number;
  description: string;
  i_am_admin: boolean;
  i_am_member: boolean;
  i_am_owner: boolean;
  id: 8;
  is_backlog_activated: boolean;
  is_contact_activated: boolean;
  is_epics_activated: boolean;
  is_fan: boolean;
  is_featured: boolean;
  is_issues_activated: boolean;
  is_kanban_activated: boolean;
  is_looking_for_people: boolean;
  is_private: boolean;
  is_watcher: boolean;
  is_wiki_activated: boolean;
  logo_big_url: null | string;
  logo_small_url: null | string;
  looking_for_people_note: string;
  members: number[];
  modified_date: string;
  my_homepage: false;
  my_permissions: Permissions[];
  name: string;
  notify_level: number;
  owner: Pick<User, 'big_photo' | 'full_name_display' | 'gravatar_id' | 'id' | 'is_active' | 'photo' | 'username'>;
  public_permissions: Permissions[];
  slug: string;
  tags: string[];
  tags_colors: Record<string, string>;
  total_activity: number;
  total_activity_last_month: number;
  total_activity_last_week: number;
  total_activity_last_year: number;
  total_closed_milestones: number;
  total_fans: number;
  total_fans_last_month: number;
  total_fans_last_week: number;
  total_fans_last_year: number;
  total_milestones: null | number;
  total_story_points: null | number;
  total_watchers: number;
  totals_updated_datetime: string;
  videoconferences: null | string;
  videoconferences_extra_data: null | string;
}

export interface CustomAttribute {
  created_date: string;
  description: string;
  extra: null | string;
  id: number;
  modified_date: string;
  name: string;
  order: number;
  project_id: number;
  type: 'text' | 'multiline' | 'richtext' | 'date' | 'url' | 'dropdown' | 'checkbox' | 'number';
}

export interface Project {
  anon_permissions: string[];
  blocked_code: null | string;
  created_date: string;
  creation_template: number;
  default_epic_status: number;
  default_issue_status: number;
  default_issue_type: number;
  default_points: number;
  default_priority: number;
  default_severity: number;
  default_task_status: number;
  default_us_status: number;
  description: string;
  epic_custom_attributes: CustomAttribute[];
  epic_statuses: {
    color: string;
    id: number;
    is_closed: boolean;
    name: string;
    order: number;
    project_id: number;
    slug: string;
  };
  epics_csv_uuid: null | string;
  i_am_admin: boolean;
  i_am_member: boolean;
  i_am_owner: boolean;
  id: number;
  is_backlog_activated: boolean;
  is_contact_activated: boolean;
  is_epics_activated: boolean;
  is_fan: boolean;
  is_featured: boolean;
  is_issues_activated: boolean;
  is_kanban_activated: boolean;
  is_looking_for_people: boolean;
  is_out_of_owner_limits: boolean;
  is_private: boolean;
  is_private_extra_info: {
      can_be_updated: boolean;
      reason: null | string;
  },
  is_watcher: boolean;
  is_wiki_activated: boolean;
  issue_custom_attributes: CustomAttribute[];
  issue_duedates: {
    by_default: boolean;
    color: string;
    days_to_due: null | string,
    id: number;
    name: string;
    order: number;
    project_id: number;
  }[];
  issue_statuses: {
    color: string;
    id: number;
    is_closed: boolean;
    name: string;
    order: number;
    project_id: number;
    slug: string;
  }[];
  issue_types: {
    color: string;
    id: number;
    name: string;
    order: number;
    project_id: number;
  }[];
  issues_csv_uuid: null | string;
  logo_big_url: string;
  logo_small_url: string;
  looking_for_people_note: string;
  max_memberships: null | number;
  members: {
    role: number;
    role_name: string;
  } & Pick<User,
      'color' |
      'full_name' |
      'full_name_display' |
      'gravatar_id' |
      'id' |
      'is_active' |
      'photo' |
      'username'>;
  milestones:{
    closed: boolean;
    id: number;
    name: string;
    slug: string;
  }[];
  modified_date: string;
  my_homepage: number;
  my_permissions: Permissions[],
  name: string;
  notify_level: number;
  owner: Pick<User,
    'big_photo' |
    'full_name_display' |
    'gravatar_id' |
    'id' |
    'is_active' |
    'photo' |
    'username'>;
  points: {
    id: number;
    name: string;
    order: number;
    project_id: number;
    value: null | number;
  }[],
  priorities: {
    color: string;
    id: number;
    name: string;
    order: number;
    project_id: number;
  }[],
  public_permissions: Permissions[];
  roles: [
      {
          computable: true,
          id: 1,
          name: UX,
          order: 10,
          permissions: [
              add_issue,
              modify_issue,
              delete_issue,
              view_issues,
              add_milestone,
              modify_milestone,
              delete_milestone,
              view_milestones,
              view_project,
              add_task,
              modify_task,
              delete_task,
              view_tasks,
              add_us,
              modify_us,
              delete_us,
              view_us,
              add_wiki_page,
              modify_wiki_page,
              delete_wiki_page,
              view_wiki_pages,
              add_wiki_link,
              delete_wiki_link,
              view_wiki_links,
              view_epics,
              add_epic,
              modify_epic,
              delete_epic,
              comment_epic,
              comment_us,
              comment_task,
              comment_issue,
              comment_wiki_page
          ],
          project_id: 1,
          slug: ux
      },
      {
          computable: true,
          id: 2,
          name: Design,
          order: 20,
          permissions: [
              add_issue,
              modify_issue,
              delete_issue,
              view_issues,
              add_milestone,
              modify_milestone,
              delete_milestone,
              view_milestones,
              view_project,
              add_task,
              modify_task,
              delete_task,
              view_tasks,
              add_us,
              modify_us,
              delete_us,
              view_us,
              add_wiki_page,
              modify_wiki_page,
              delete_wiki_page,
              view_wiki_pages,
              add_wiki_link,
              delete_wiki_link,
              view_wiki_links,
              view_epics,
              add_epic,
              modify_epic,
              delete_epic,
              comment_epic,
              comment_us,
              comment_task,
              comment_issue,
              comment_wiki_page
          ],
          project_id: 1,
          slug: design
      },
      {
          computable: true,
          id: 3,
          name: Front,
          order: 30,
          permissions: [
              add_issue,
              modify_issue,
              delete_issue,
              view_issues,
              add_milestone,
              modify_milestone,
              delete_milestone,
              view_milestones,
              view_project,
              add_task,
              modify_task,
              delete_task,
              view_tasks,
              add_us,
              modify_us,
              delete_us,
              view_us,
              add_wiki_page,
              modify_wiki_page,
              delete_wiki_page,
              view_wiki_pages,
              add_wiki_link,
              delete_wiki_link,
              view_wiki_links,
              view_epics,
              add_epic,
              modify_epic,
              delete_epic,
              comment_epic,
              comment_us,
              comment_task,
              comment_issue,
              comment_wiki_page
          ],
          project_id: 1,
          slug: front
      },
      {
          computable: true,
          id: 4,
          name: Back,
          order: 40,
          permissions: [
              add_issue,
              modify_issue,
              delete_issue,
              view_issues,
              add_milestone,
              modify_milestone,
              delete_milestone,
              view_milestones,
              view_project,
              add_task,
              modify_task,
              delete_task,
              view_tasks,
              add_us,
              modify_us,
              delete_us,
              view_us,
              add_wiki_page,
              modify_wiki_page,
              delete_wiki_page,
              view_wiki_pages,
              add_wiki_link,
              delete_wiki_link,
              view_wiki_links,
              view_epics,
              add_epic,
              modify_epic,
              delete_epic,
              comment_epic,
              comment_us,
              comment_task,
              comment_issue,
              comment_wiki_page
          ],
          project_id: 1,
          slug: back
      },
      {
          computable: false,
          id: 5,
          name: Product Owner,
          order: 50,
          permissions: [
              add_issue,
              modify_issue,
              delete_issue,
              view_issues,
              add_milestone,
              modify_milestone,
              delete_milestone,
              view_milestones,
              view_project,
              add_task,
              modify_task,
              delete_task,
              view_tasks,
              add_us,
              modify_us,
              delete_us,
              view_us,
              add_wiki_page,
              modify_wiki_page,
              delete_wiki_page,
              view_wiki_pages,
              add_wiki_link,
              delete_wiki_link,
              view_wiki_links,
              view_epics,
              add_epic,
              modify_epic,
              delete_epic,
              comment_epic,
              comment_us,
              comment_task,
              comment_issue,
              comment_wiki_page
          ],
          project_id: 1,
          slug: product-owner
      },
      {
          computable: false,
          id: 6,
          name: Stakeholder,
          order: 60,
          permissions: [
              add_issue,
              modify_issue,
              delete_issue,
              view_issues,
              view_milestones,
              view_project,
              view_tasks,
              view_us,
              modify_wiki_page,
              view_wiki_pages,
              add_wiki_link,
              delete_wiki_link,
              view_wiki_links,
              view_epics,
              comment_epic,
              comment_us,
              comment_task,
              comment_issue,
              comment_wiki_page
          ],
          project_id: 1,
          slug: stakeholder
      }
  ],
  severities: [
      {
          color: #0000FF,
          id: 3,
          name: Normal,
          order: 3,
          project_id: 1
      },
      {
          color: #FFA500,
          id: 4,
          name: Important,
          order: 4,
          project_id: 1
      },
      {
          color: #CC0000,
          id: 5,
          name: Critical,
          order: 5,
          project_id: 1
      },
      {
          color: #669933,
          id: 2,
          name: Minor,
          order: 5,
          project_id: 1
      },
      {
          color: #AAAAAA,
          id: 36,
          name: New severity,
          order: 8,
          project_id: 1
      },
      {
          color: #666666,
          id: 1,
          name: Patch name,
          order: 10,
          project_id: 1
      },
      {
          color: #999999,
          id: 37,
          name: New severity name,
          order: 10,
          project_id: 1
      }
  ],
  slug: project-0,
  tags: [],
  tags_colors: {},
  task_custom_attributes: [
      {
          created_date: 2019-04-10T10:34:12.603273+00:00,
          description: debitis dolorum soluta mollitia aliquid sapiente nesciunt molestias cum deserunt corporis officiis,
          extra: null,
          id: 5,
          modified_date: 2019-04-10T10:34:12.60329+00:00,
          name: soluta,
          order: 1,
          project_id: 1,
          type: richtext
      },
      {
          created_date: 2019-04-10T10:34:12.601896+00:00,
          description: totam autem aut fuga odit,
          extra: null,
          id: 4,
          modified_date: 2019-04-10T10:34:12.601912+00:00,
          name: unde,
          order: 1,
          project_id: 1,
          type: text
      },
      {
          created_date: 2019-04-10T10:34:12.600663+00:00,
          description: aliquid laboriosam soluta libero quo fugit molestiae impedit officia at,
          extra: null,
          id: 3,
          modified_date: 2019-04-10T10:34:12.60068+00:00,
          name: libero,
          order: 1,
          project_id: 1,
          type: date
      },
      {
          created_date: 2019-04-10T10:34:12.59941+00:00,
          description: laudantium totam dolorem minima nemo quaerat voluptate aliquam autem quasi distinctio inventore,
          extra: null,
          id: 2,
          modified_date: 2019-04-10T10:34:12.599427+00:00,
          name: esse omnis soluta,
          order: 1,
          project_id: 1,
          type: richtext
      },
      {
          created_date: 2019-04-10T10:34:12.597033+00:00,
          description: a sequi saepe quibusdam culpa optio accusantium minima obcaecati,
          extra: null,
          id: 1,
          modified_date: 2019-04-10T10:34:12.597055+00:00,
          name: obcaecati quasi impedit,
          order: 1,
          project_id: 1,
          type: dropdown
      }
  ],
  task_duedates: [
      {
          by_default: true,
          color: #9dce0a,
          days_to_due: null,
          id: 1,
          name: Default,
          order: 1,
          project_id: 1
      },
      {
          by_default: false,
          color: #ff9900,
          days_to_due: 14,
          id: 2,
          name: Due soon,
          order: 2,
          project_id: 1
      },
      {
          by_default: false,
          color: #ff8a84,
          days_to_due: 0,
          id: 3,
          name: Past due,
          order: 3,
          project_id: 1
      }
  ],
  task_statuses: [
      {
          color: #ffcc00,
          id: 3,
          is_closed: true,
          name: Ready for test,
          order: 3,
          project_id: 1,
          slug: ready-for-test
      },
      {
          color: #669900,
          id: 4,
          is_closed: true,
          name: Closed,
          order: 4,
          project_id: 1,
          slug: closed
      },
      {
          color: #ff9900,
          id: 2,
          is_closed: false,
          name: In progress,
          order: 5,
          project_id: 1,
          slug: in-progress
      },
      {
          color: #999999,
          id: 5,
          is_closed: false,
          name: Needs Info,
          order: 5,
          project_id: 1,
          slug: needs-info
      },
      {
          color: #AAAAAA,
          id: 36,
          is_closed: true,
          name: New status,
          order: 8,
          project_id: 1,
          slug: new-status
      },
      {
          color: #999999,
          id: 1,
          is_closed: false,
          name: Patch status name,
          order: 10,
          project_id: 1,
          slug: patch-status-name
      },
      {
          color: #999999,
          id: 37,
          is_closed: false,
          name: New status name,
          order: 10,
          project_id: 1,
          slug: new-status-name
      }
  ],
  tasks_csv_uuid: null,
  total_activity: 211,
  total_activity_last_month: 211,
  total_activity_last_week: 211,
  total_activity_last_year: 211,
  total_closed_milestones: 0,
  total_fans: 8,
  total_fans_last_month: 8,
  total_fans_last_week: 8,
  total_fans_last_year: 8,
  total_memberships: 16,
  total_milestones: 6,
  total_story_points: 567.0,
  total_watchers: 14,
  totals_updated_datetime: 2019-04-10T10:47:03.960Z,
  transfer_token: 5:1hEAhg:pVIAXcLLOMEuw94ko7t2Y8BVzd8,
  us_duedates: [
      {
          by_default: true,
          color: #9dce0a,
          days_to_due: null,
          id: 1,
          name: Default,
          order: 1,
          project_id: 1
      },
      {
          by_default: false,
          color: #ff9900,
          days_to_due: 14,
          id: 2,
          name: Due soon,
          order: 2,
          project_id: 1
      },
      {
          by_default: false,
          color: #ff8a84,
          days_to_due: 0,
          id: 3,
          name: Past due,
          order: 3,
          project_id: 1
      }
  ],
  us_statuses: [
      {
          color: #999999,
          id: 1,
          is_archived: false,
          is_closed: false,
          name: New,
          order: 1,
          project_id: 1,
          slug: new,
          wip_limit: null
      },
      {
          color: #ff8a84,
          id: 2,
          is_archived: false,
          is_closed: false,
          name: Ready,
          order: 2,
          project_id: 1,
          slug: ready,
          wip_limit: null
      },
      {
          color: #ff9900,
          id: 3,
          is_archived: false,
          is_closed: false,
          name: In progress,
          order: 3,
          project_id: 1,
          slug: in-progress,
          wip_limit: null
      },
      {
          color: #fcc000,
          id: 4,
          is_archived: false,
          is_closed: false,
          name: Ready for test,
          order: 4,
          project_id: 1,
          slug: ready-for-test,
          wip_limit: null
      },
      {
          color: #669900,
          id: 5,
          is_archived: false,
          is_closed: true,
          name: Done,
          order: 5,
          project_id: 1,
          slug: done,
          wip_limit: null
      },
      {
          color: #5c3566,
          id: 6,
          is_archived: true,
          is_closed: true,
          name: Archived,
          order: 6,
          project_id: 1,
          slug: archived,
          wip_limit: null
      }
  ],
  userstories_csv_uuid: null,
  userstory_custom_attributes: [
      {
          created_date: 2019-04-10T10:34:12.595392+00:00,
          description: necessitatibus velit aliquam exercitationem debitis laboriosam,
          extra: null,
          id: 5,
          modified_date: 2019-04-10T10:34:12.595408+00:00,
          name: pariatur,
          order: 1,
          project_id: 1,
          type: date
      },
      {
          created_date: 2019-04-10T10:34:12.594125+00:00,
          description: vitae error dignissimos ipsa minus nostrum,
          extra: null,
          id: 4,
          modified_date: 2019-04-10T10:34:12.594141+00:00,
          name: eveniet,
          order: 1,
          project_id: 1,
          type: richtext
      },
      {
          created_date: 2019-04-10T10:34:12.592731+00:00,
          description: ex a nihil porro placeat,
          extra: null,
          id: 3,
          modified_date: 2019-04-10T10:34:12.592747+00:00,
          name: obcaecati quaerat,
          order: 1,
          project_id: 1,
          type: checkbox
      },
      {
          created_date: 2019-04-10T10:34:12.591471+00:00,
          description: inventore ab iusto optio tempora hic,
          extra: null,
          id: 2,
          modified_date: 2019-04-10T10:34:12.591488+00:00,
          name: facilis temporibus,
          order: 5,
          project_id: 1,
          type: url
      },
      {
          created_date: 2019-04-10T10:44:12.96406+00:00,
          description: Duration in minutes,
          extra: null,
          id: 26,
          modified_date: 2019-04-10T10:44:12.967118+00:00,
          name: Duration 2,
          order: 8,
          project_id: 1,
          type: text
      },
      {
          created_date: 2019-04-10T10:34:12.589298+00:00,
          description: vel omnis culpa quisquam nulla,
          extra: null,
          id: 1,
          modified_date: 2019-04-10T10:44:12.874928+00:00,
          name: Duration 1,
          order: 10,
          project_id: 1,
          type: richtext
      },
      {
          created_date: 2019-04-10T10:44:13.048269+00:00,
          description: ,
          extra: null,
          id: 27,
          modified_date: 2019-04-10T10:44:13.051518+00:00,
          name: Duration 3,
          order: 1554893053034,
          project_id: 1,
          type: text
      }
  ],
  videoconferences: null,
  videoconferences_extra_data: null
}
