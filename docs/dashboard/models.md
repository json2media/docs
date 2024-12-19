---
sidebar_position: 2
id: models
title: Models
last_update: 
    date: 2024-12-18
    author: Rahul Verma
tags:
  - models
  - dashboard
---

# Models

This documentation provides a detailed overview of the **Models Menu** functionality in the dashboard, including the **Model Details** and **Models List** sections. It outlines how to create, update, list, and manage models effectively.

---

## **1. Overview**

The **Models Menu** allows you to manage models used by the system. It consists of two main components:
1. **Model Details**: For creating or updating a model's configuration.
2. **Models List**: For viewing, testing, and managing all available models.

---

## **2. Model Details**

### **Creating a Model**
To create a new model:
1. Navigate to the **Model Details** section via the menu.
2. Fill out the required fields in the form:
   - Model Name
   - API URL
   - Model Name in API
   - API Key
   - Temperature
   - Max Output Tokens
3. Enable optional features such as:
   - **Supports Streaming**
   - **Supports Tool Call**
   - **Set as Default Model**
4. Click **Create Model** to save.

### **Updating a Model**
To update an existing model:
1. From the **Models List**, click on the model you want to update.
2. The form will prefill with the model's existing data.
3. Modify any field as needed.
4. Click **Update Model** to save changes.

### **Model Configuration Fields**
Below is a detailed explanation of each field:

| Field                  | Description                                            | Example                                   |
|------------------------|--------------------------------------------------------|-------------------------------------------|
| **Model Name**         | The display name for the model.                        | `OpenAI GPT-4`                            |
| **API URL**            | The endpoint used to access the model's API.           | `https://api.openai.com/v1/chat/completions`        |
| **Model Name in API**  | The identifier for the model in the API.               | `gpt-4o-mini`                                   |
| **API Key**            | The authentication key for the model's API.            | `sk-abc123...`                            |
| **Temperature**        | Controls the randomness of responses (0-1).            | `0.7`                                     |
| **Max Output Tokens**  | The maximum number of tokens in the response.          | `1024`                                    |
| **Supports Streaming** | Enables streaming of responses.                       | Checked                                   |
| **Supports Tool Call** | Allows the model to call tools if needed.              | Checked                                   |
| **Set as Default**     | Marks the model as the default for all new assistants. | Checked                                   |

### **Using Predefined Models**
You can select a predefined model to quickly populate the form fields:
1. Use the **Predefined Models Dropdown** to select a model.
2. The form will auto-fill with the model's details.
3. Modify any fields as needed before saving.

---

## **3. Models List**

### **Viewing Models**
The **Models List** displays all available models in a paginated table. Each row includes:
- **Name**: The display name of the model.
- **Model ID**: The unique identifier for the model.
- **Created At**: The timestamp of when the model was created.
- **Actions**: Options to test, delete, or set the model as default.

### **Setting a Default Model**
To set a model as the default:
1. Click the **Set as Default** button in the model's row.
2. Confirm the action in the modal.
3. The model will be marked as the default.

### **Testing a Model**
To test a model's configuration:
1. Click the **Test Model** button in the model's row.
2. A success or failure notification will display based on the test results.

### **Deleting a Model**
To delete a model:
1. Click the **Delete Model** button in the model's row.
2. Confirm the action in the modal.
3. The model will be removed from the list.

### **Pagination**
For large datasets, use the pagination controls at the bottom:
- **Previous**: Navigate to the previous page.
- **Next**: Navigate to the next page.

