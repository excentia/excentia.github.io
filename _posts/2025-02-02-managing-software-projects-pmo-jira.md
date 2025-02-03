---
layout: post
title: 'Jira, beyond software project management'
description: My point of view on Jira for project management and comment on a PMO proposal
date: '2025-02-02T08:00:00Z'
author: Hugo Mora
categories:

- atlassian
- jira


cover: img/posts/2025-02-02-managing-software-projects-pmo-jira.png

---

<img width="100%" src="img/posts/2025-02-02-managing-software-projects-pmo-jira.png" alt="WorkDay Control for Jira Cloud">

When Jira is mentioned, many people automatically associate it with **software project management**. However, this tool goes far beyond technological development and has become a powerful solution for managing any type of project, regardless of the industry.

<h2>Jira as a Project Management Platform</h2>

Jira is a flexible project management system based on **customizable workflows, visual boards, and advanced reports**. Its structure allows it to adapt to multiple methodologies, such as **Agile, Kanban, or more traditional** approaches like the Waterfall model. This versatility makes it an ideal tool for planning, executing, and tracking projects in any field.

<h2>The role of the Project Management Office (PMO) in Jira</h2>

The Project Management Office (PMO) centralizes project management in many organizations, **optimizing resources and ensuring** the achievement of strategic objectives. Jira facilitates this task by improving work visibility and decision-making through real-time dashboards and reports.

The key Jira functions for the PMO include:

- **Portfolio management**: Boards to visualize multiple projects. <br>

- **Workflow automation**: Automatic rules to standardize processes. <br>

- **Reports and metrics**: Custom dashboards with key performance indicators (KPIs). <br>


<h2>Our proposal for Project Management</h2>

We propose the creation of an **issue type called 'Project'** which operates with a workflow that precisely follows the stages a project goes through within the organization. Additionally, it will contain all the necessary project information in the form of **custom fields, always with the goal of leveraging the data**. In other words, dropdown fields will be used whenever possible for categorization.

One of these custom fields should be the operational project in which the work is being carried out. This field links the world of project management with the 'day-to-day' project operations.

But all the information matter, the possible fields to use or add would be:

- Project manager (user) <br>

- Start and end date (for timeline experience) <br>

- Priority <br>

- Customer <br>


Comments would create a 'tale' about the project life, quite important to decontextualized users. 

Also, think of subtasks of this project element as your project phases if you need them. There’s **no limit** with this project metadata because Jira supports it…

The 'Project' entity will facilitate high-level management, and with the new Atlassian Jira business project features, we will be able to visualize this information in modern cards, lists without losing context, or the highly requested Gantt charts.

<img width="100%" src="/img/atlassian-products\project-management-jira-pmo.png" alt="Project Management Jira PMO">

<h2>Reports Used by a PMO</h2>

With the "PMO Assessment and Reports for Jira" app we can create accounts in order to get operation information about these projects, and links to these accounts can be set up on each one of the project instances.

You can try this application that we have developed for free through [this link](https://marketplace.atlassian.com/apps/1228554/pmo-assessment-and-reports-for-jira?tab=overview){:target="_blank"}.

<h3>Conclusion</h3>

Our intention is that this project entity become the pivot of all project management, allowing project managers to have a common place to record everything that happened in a project and management to filter projects at risk
