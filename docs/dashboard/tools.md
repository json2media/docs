---
sidebar_position: 4
id: tools
title: Tools
last_update:
    date: 2024-12-18
    author: Rahul Verma
tags:
  - tools
  - dashboard
---

# Tools

This documentation provides a comprehensive guide to the **Tools Menu** functionality in the dashboard. It covers creating, updating, listing, and managing tools efficiently.

---

## **1. Overview**

The **Tools Menu** allows you to define, update, and manage tools that can be used by assistants. Tools are defined using JSON schemas, offering flexibility and precision in tool configuration.

The menu consists of two main sections:

1. **Tool Details**: For creating or updating tool configurations.
2. **Tools List**: For viewing and managing existing tools.

---

## **2. Tool Details**

### **Creating a Tool**

To create a new tool:

1. Navigate to the **Tool Details** section via the menu.
2. Fill out the required fields in the form:
   - Tool Definition (JSON Schema)
   - Is Active (checkbox)
3. Click **Create Tool** to save.

### **Updating a Tool**

To update an existing tool:

1. From the **Tools List**, click on the tool you want to update.
2. The form will prefill with the tool’s existing data.
3. Modify any field as needed.
4. Click **Update Tool** to save changes.

### **Tool Configuration Fields**

Below is a detailed explanation of the main configuration fields:

| Field                 | Description                                                  | Example                                   |
|-----------------------|--------------------------------------------------------------|-------------------------------------------|
| **Tool Definition**   | JSON schema defining the tool's functionality and parameters. | `{ "name": "Translate", "parameters": {} }` |
| **Is Active**         | Indicates if the tool is active and available for use.       | Checked                                   |

### **Using the JSON Editor**

The JSON editor provides an interactive environment for defining the tool's schema:

- Syntax Highlighting: Easily identify errors.
- Auto-complete: Suggests possible schema elements.
- Folding: Collapse nested sections for better readability.
- Validation: Ensures the JSON schema is valid before submission.

#### **Example JSON Schema**

```json
{
  "name": "Weather Info",
  "description": "Provides weather information based on location.",
  "parameters": {
    "location": {
      "type": "string",
      "description": "The location for weather information."
    },
    "unit": {
      "type": "string",
      "enum": ["metric", "imperial"],
      "description": "The unit for temperature."
    }
  }
}
```

---

## **3. Tools List**

### **Viewing Tools**

The **Tools List** displays all available tools in a paginated table. Each row includes:

- **Tool ID**: The unique identifier for the tool.
- **Name**: The display name of the tool.
- **Actions**: Options to delete or copy the tool information.

### **Deleting a Tool**

To delete a tool:

1. Click the **Delete Tool** button in the tool’s row.
2. Confirm the action in the modal.
3. The tool will be removed from the list.

### **Pagination**

For large datasets, use the pagination controls at the bottom:

- **Previous**: Navigate to the previous page.
- **Next**: Navigate to the next page.
