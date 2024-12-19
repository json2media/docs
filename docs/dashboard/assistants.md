---
sidebar_position: 1
id: assistants
title: Assistants
last_update: 
    date: 2024-12-18
    author: Rahul Verma
tags:
  - assistants
  - dashboard
---

# Assistants

Create assistants effortlessly.

### **1. Overview**
The **Assistant Management** section allows users to:
- Create new assistants with specific configurations.
- Update existing assistants.
- View a paginated list of assistants.
- Delete assistants safely with confirmation.

**Features**:
- Seamless transitions between "Create" and "Update" modes.
- Metadata support for custom configurations.
- Pagination for large datasets.
- Confirmation modals for critical actions like deletion.

---

### **2. Creating an Assistant**

To create a new assistant:
1. Go to the **Assistants** section in the dashboard menu.
2. Click on **Create New Assistant** or navigate to the Assistant Details section.
3. Fill in the required fields in the form:
   - **Name**: Enter the name of the assistant (e.g., `Content Bot`).
   - **Description**: Provide a brief description of the assistant's purpose.
   - **Instructions**: Define how the assistant should behave.
   - **Temperature**: Set the randomness level for responses.
   - **Tools**:
     - Enable or disable tool usage.
     - Assign tools to the assistant.

4. Click **Create Assistant** to save.

**Form Example**:

| Field               | Description                                               | Example                                   |
|---------------------|-----------------------------------------------------------|-------------------------------------------|
| Name                | The assistant's name                                      | `Content Bot`                             |
| Description         | A brief explanation of the assistant's purpose            | `A bot designed for content generation.` |
| Instructions        | Guidelines for the assistant's behavior                   | `Respond concisely and professionally.`  |
| Temperature         | Randomness of responses (0 = deterministic, 1 = random)   | `0.7`                                     |
| Tools               | Assign tools the assistant can use                        | `Calendar, CRM`                           |

---

### **3. Updating an Assistant**

To update an assistant:
1. From the **Assistants List**, click on an assistant row.
2. The form pre-fills with the assistant's current configuration.
3. Modify any field as required:
   - Update metadata or tool assignments as needed.
4. Click **Update Assistant** to save changes.

**Switch to Create Mode**:
If you're editing an assistant and wish to create a new one:
- Click on **Create New Assistant**.

---

### **4. Listing Assistants**

The **Assistants List** displays all available assistants in a paginated table. Each row provides:
- **Assistant ID**: Unique identifier for the assistant.
- **Name**: The name of the assistant.
- **Actions**:
  - Copy the Assistant ID to the clipboard.
  - Delete the assistant.

**Example Table**:

| Assistant ID         | Name              | Actions          |
|----------------------|-------------------|------------------|
| `asst_1234`          | `Content Bot`    | Copy, Delete     |
| `asst_5678`          | `Support Bot`    | Copy, Delete     |

---

### **5. Deleting an Assistant**

To delete an assistant:
1. Click the **Delete** button in the row of the desired assistant.
2. A confirmation modal appears, asking for confirmation.
3. Click **Delete** to proceed or **Cancel** to abort.

**Warning**: Deleting an assistant removes all connected [routes](./routes).

---

### **7. Metadata Management**

Metadata allows you to define custom key-value pairs for assistants:
1. Add key-value pairs using the **Add Metadata** button.
2. Remove entries with the **Remove** button.

**Example**:

| Key                  | Value             |
|----------------------|-------------------|
| `department`         | `marketing`       |
| `language`           | `English`         |

---

### **8. Additional Features**

#### **Tool Management**
- Assign tools to assistants via the **Tools Multi-Select**.
- Tool choice modes:
  - `auto`: Automatically selects tools.
  - `none`: Disables tool usage.
  - Select a particular tool.

#### **Temperature Slider**
- Adjusts the assistant's response randomness interactively.
