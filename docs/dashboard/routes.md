---
sidebar_position: 3
id: routes
title: Routes
last_update: 
    date: 2024-12-18
    author: Rahul Verma
tags:
  - routes
  - dashboard
---

# Routes

This documentation provides an in-depth explanation of the Routes Menu functionality in the dashboard. It covers creating, updating, listing, and managing routes, along with handling assistant-to-model connections efficiently.

---

## **1. Overview**

The **Routes Menu** is designed to manage the connections between assistants and models, allowing you to define routing logic based on metadata conditions. It consists of two main sections:

1. **Route Details**: For creating or updating routes.
2. **Routes List**: For viewing and managing existing routes.

---

## **2. Route Details**

### **Creating a Route**
To create a new route:
1. Navigate to the **Route Details** section via the menu.
2. Fill out the required fields in the form:
   - Route Name
   - Select an Assistant
   - Select a Model
3. Optionally, add metadata conditions to define routing logic.
4. Click **Create Route** to save.

### **Updating a Route**
To update an existing route:
1. From the **Routes List**, click on the route you want to update.
2. The form will prefill with the route's existing data.
3. Modify any field as needed.
4. Click **Update Route** to save changes.

### **Route Configuration Fields**
Below is a detailed explanation of each field:

| Field                  | Description                                            | Example                                      |
|------------------------|--------------------------------------------------------|----------------------------------------------|
| **Route Name**         | A descriptive name for the route.                     | `Content Generation Route`                   |
| **Assistant**          | The assistant associated with this route.             | `Content Bot`                                |
| **Model**              | The model used by the assistant in this route.        | `OpenAI GPT-4`                               |
| **Metadata Conditions**| Conditions to trigger this route based on metadata.   | Key: `language`, Value: `en`                 |

### **Using Metadata Conditions**
Metadata conditions define when a route should be activated. For example, you can create a condition that routes all English language requests to a specific model.

#### **Adding Metadata Conditions**
1. Click **+ Add Metadata Condition**.
2. Enter a key-value pair to define the condition.
3. Repeat for additional conditions as needed.

#### **Removing Metadata Conditions**
1. Click the **-** button next to the condition you want to remove.

---

## **3. Routes List**

### **Viewing Routes**
The **Routes List** displays all available routes in a paginated table. Each row includes:
- **Name**: The display name of the route.
- **Route ID**: The unique identifier for the route.
- **Assistant ID**: The assistant associated with the route.
- **Model ID**: The model linked to the route.
- **Created At**: The timestamp of when the route was created.
- **Actions**: Options to activate/deactivate, delete, or copy route information.

### **Activating/Deactivating Routes**
To toggle a route's status:
1. Use the toggle switch in the **Actions** column.
2. Confirm the action in the modal.
3. The route will be activated or deactivated as per your selection.

### **Deleting a Route**
To delete a route:
1. Click the **Delete Route** button in the route's row.
2. Confirm the action in the modal.
3. The route will be removed from the list.

### **Pagination**
For large datasets, use the pagination controls at the bottom:
- **Previous**: Navigate to the previous page.
- **Next**: Navigate to the next page.
