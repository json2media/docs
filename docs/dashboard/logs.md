---
sidebar_position: 6
id: logs
title: Logs
last_update: 
    date: 2024-12-18
    author: Rahul Verma
tags:
  - logs
  - dashboard
---

# Logs

This documentation provides an in-depth explanation of the **Logs Menu** in the dashboard. It covers viewing, searching, and managing logs efficiently, with a focus on user-friendly navigation and functionality.

---

## **1. Overview**

The **Logs Menu** is designed to help users monitor system activities, view detailed logs, and analyze data based on various filters. The menu consists of:

- **Search Bar**: Allows users to filter logs by action, level, and date range.
- **Logs Table**: Displays the filtered logs in a structured format.
- **Pagination**: Enables navigation through large datasets efficiently.

---

## **2. Logs Search Bar**

### **Using the Search Bar**

The search bar provides intuitive options to filter logs based on specific criteria:

1. Enter a keyword in the **Search logs** field to filter by actions.
2. Select a **Log Level** (e.g., INFO, WARNING, ERROR, DEBUG) from the dropdown menu.
3. Set a **Start Date** and **End Date** to narrow the logs to a specific time range.
4. Click **Search** to apply the filters.

### **Search Parameters**

Below are the supported search parameters:

| Parameter      | Description                             | Example              |
|----------------|-----------------------------------------|----------------------|
| **Log Level**  | Filters logs by severity level.         | `INFO`, `ERROR`      |
| **Action**     | Filters logs by a specific action name. | `User Login`         |
| **Start Date** | Filters logs from this date onward.     | `2024-12-01`         |
| **End Date**   | Filters logs up to this date.           | `2024-12-15`         |

---

## **3. Logs Table**

The logs table displays the results of the applied filters in a structured format.

### **Understanding Table Columns**

Each log entry includes the following columns:

| Column         | Description                                         |
|----------------|-----------------------------------------------------|
| **Log Level**  | Indicates the severity of the log (INFO, ERROR, etc.). |
| **Action**     | The specific action or event associated with the log. |
| **Created At** | Timestamp when the log was generated.               |
| **Copy Log ID**| Button to copy the unique ID of the log.            |

#### **Log Level Indicators**

Log levels are color-coded for quick identification:
- **INFO**: Blue badge
- **WARNING**: Yellow badge
- **ERROR**: Red badge
- **DEBUG**: Gray badge

### **Copying Log IDs**

To copy a log's ID:
1. Click the **Copy Log ID** button in the respective row.
2. A success icon will replace the clipboard icon temporarily to confirm the action.

---

## **4. Pagination**

### **Using Pagination**

The pagination controls help navigate through large datasets:

1. **Previous Button**: Click to go to the previous page. Disabled if no previous data exists.
2. **Next Button**: Click to go to the next page. Disabled if no more data exists.

### **Pagination Data Handling**

Pagination relies on cursor-based navigation with the following parameters:
- **after**: Fetches data after the last item on the current page.
- **before**: Fetches data before the first item on the current page.
