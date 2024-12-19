---
sidebar_position: 7
id: api-keys
title: API Keys
last_update: 
    date: 2024-12-18
    author: Rahul Verma
tags:
  - api-keys
  - dashboard
---

# API Keys

This documentation provides an in-depth explanation of the **API Keys Menu** in the dashboard. It covers generating, managing, and deleting API keys efficiently, along with detailed instructions for activation, deactivation, and pagination.

---

## **1. Overview**

The **API Keys Menu** is designed to allow users to manage their API keys. This includes generating new keys, activating or deactivating existing keys, and securely managing sensitive key information.

The menu consists of:
- **API Keys Table**: Displays all keys with relevant details.
- **Pagination Controls**: Enables smooth navigation through large datasets.

---

## **2. Generating an API Key**

### **Steps to Generate a New API Key**
1. Navigate to the **API Keys Menu** via the dashboard.
2. Click the **Generate New API Key** button.
3. In the popup modal:
   - Provide a brief **Description** for the API key.
   - Set an **Expiry Date** (optional).
4. Click **Generate API Key**.
5. Copy the generated API key from the popup and store it in a secure location. 

:::note 
The API key is displayed only once.
:::

---

## **3. Managing API Keys**

The API keys table provides an overview of all API keys with the following columns:

| Column          | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **API Key**      | Obfuscated representation of the API key.                                 |
| **Description**  | Brief description provided during key creation.                           |
| **Expires**      | Expiry date of the API key (or "Never" if no expiry is set).               |
| **Actions**      | Options to activate/deactivate and delete the API key.                    |

### **Activating/Deactivating API Keys**

To toggle the activation state of an API key:
1. Locate the API key in the table.
2. Click the **Activate** or **Deactivate** button in the **Actions** column.
3. Confirm the action if prompted.
4. The button label and color will update based on the new state:
   - **Activate**: Green button for inactive keys.
   - **Deactivate**: Red button for active keys.

### **Deleting API Keys**

To delete an API key:
1. Click the **Delete** button in the **Actions** column for the specific key.
2. Confirm the action in the popup modal.
3. The key will be removed from the table.

---

## **4. Pagination**

### **Using Pagination Controls**

The pagination controls help navigate through multiple API keys:

- **Previous Button**: Navigates to the previous page. Disabled if no previous data exists.
- **Next Button**: Navigates to the next page. Disabled if no further data exists.

---

## **Additional Notes**

1. **Security Reminder**: Ensure that API keys are stored securely, as they are not retrievable after creation.
2. **Error Notifications**: All errors during API key operations (e.g., generation, activation, deletion) are displayed as notifications for better user experience.
3. **Tooltips**: Hover over the **Description** icon in the table for more details about each API key.
