---
description: Understand how Requests are represented in ProcessMaker.
---

# What Is Request Data?

## Overview

While ProcessMaker is a low-code, intelligent BPM platform for enterprises, our goal for ProcessMaker is to deliver simplicity, but to allow complexity. ProcessMaker is easy to use, and allows you to design customized processes and end-user experiences without understanding what [Request](../using-processmaker/requests/what-is-a-request.md) data is. However, understanding how Requests are represented in ProcessMaker takes your designing potential to the next level.

Before discussing the foundation for Request data, let's understand what Request data is. Each Request can be unique even though it was started from the same Process. Each Process is designed to determine business decisions based on information in each Request. Below are a few examples that may cause each Request to be unique:

* Different ProcessMaker users participate in each Request. Different ProcessMaker users may be authorized to start Requests for a Process \(called requesters\). Requests may even be started anonymously via a website or portal.
* Each of these Request participants enter unique information into each Request. Information is entered into a Request via a [Task](../using-processmaker/task-management/what-is-a-task.md). Each Task displays a [ProcessMaker Screen](../designing-processes/design-forms/what-is-a-form.md) that allows each Request participant to enter information, read information, and/or make business decisions such as approving or rejecting requests based on information entered in previous Tasks.
* Based on information entered into each Request, workflow routes differently. One Request for a Process may route to one [ProcessMaker user](../processmaker-administration/add-users/what-is-a-user.md), but route to a different user for another Request because of information entered into each Request. For example, in a purchase request Process, if the total amount for a purchase request in one Request is $500, but in a different Request that total amount is $10,000, then each Request may route to a different ProcessMaker user for approval based on business decisions designed in that Process on the total cost on items for purchase.
* [ProcessMaker Scripts](../designing-processes/scripts/what-is-a-script.md) that run during a Request may call external data sources, such as Application Program Interfaces \(APIs\), or run an application, and then return data that affect how each Request routes.
* Each Request may access information stored in a [ProcessMaker Collection](../collections/what-is-a-collection.md) that affects how each Request routes. Functioning similarly to a database, ProcessMaker Collections provide ease and flexibility to design custom data views for information storage and reporting without integrating into an organization's IT infrastructure.

As each Request routes, ProcessMaker accumulates data that represents and contains the information entered into each Request. As data accumulates for each Request, this data affects how each Request routes through the Process. Your ProcessMaker user account may allow you to [view and edit the accumulated Request data](../using-processmaker/requests/request-details/summary-for-completed-requests.md#editable-request-data).

Understanding how ProcessMaker represents Request data allows you to design more robust ProcessMaker assets, including but not limited to the following:

* Design Processes that route workflow in complex ways, such as [synchronizing parallel workflow](../designing-processes/process-design/model-your-process/process-modeling-element-descriptions.md#parallel-gateway) to one point in each Request so that Request participants may complete Tasks before determining further business decisions.
* Design how ProcessMaker Screens display information in Tasks, such as displaying options derived from that Request or a third-party data source in a multi-select [Select List control](../designing-processes/design-forms/screens-builder/control-descriptions/select-list-control-settings.md).
* Monitor when specific information is entered into a Task's ProcessMaker Screen, then run a ProcessMaker Script or [call an external data source](../designing-processes/data-connector-management/what-is-a-data-connector.md).
* Develop how ProcessMaker Scripts run in Requests, such as manipulating Request data and/or calling a third-party API based on Request data.
* Use Request data to change a ProcessMaker Collections and vice versa.

## Related Topics

{% page-ref page="what-is-a-request-variable.md" %}

{% page-ref page="../using-processmaker/requests/what-is-a-request.md" %}

{% page-ref page="what-is-json.md" %}

{% page-ref page="../using-processmaker/task-management/what-is-a-task.md" %}

{% page-ref page="../designing-processes/design-forms/what-is-a-form.md" %}

{% page-ref page="../designing-processes/scripts/what-is-a-script.md" %}

