const employees = [
    {
      "id": 101,
      "email": "staff1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Prepare Report",
          "taskDescription": "Create weekly performance report.",
          "taskDate": "2025-01-10",
          "category": "Reporting",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Client Follow-Up",
          "taskDescription": "Call pending clients for updates.",
          "taskDate": "2025-01-11",
          "category": "Communication",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Fix Bugs",
          "taskDescription": "Resolve reported system errors.",
          "taskDate": "2025-01-12",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "taskTitle": "Team Meeting",
          "taskDescription": "Discuss weekly targets.",
          "taskDate": "2025-01-13",
          "category": "Management",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Data Update",
          "taskDescription": "Update CRM database.",
          "taskDate": "2025-01-14",
          "category": "Data Entry",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 102,
      "email": "staff2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Inventory Check",
          "taskDescription": "Verify stock availability.",
          "taskDate": "2025-01-09",
          "category": "Inventory",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Email Response",
          "taskDescription": "Reply to customer inquiries.",
          "taskDate": "2025-01-10",
          "category": "Support",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Training Session",
          "taskDescription": "Attend skill development workshop.",
          "taskDate": "2025-01-11",
          "category": "Training",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Update Dashboard",
          "taskDescription": "Modify analytics dashboard.",
          "taskDate": "2025-01-12",
          "category": "Analytics",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Error Logs Review",
          "taskDescription": "Analyse server logs for issues.",
          "taskDate": "2025-01-13",
          "category": "Technical",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 103,
      "email": "staff3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Daily Attendance",
          "taskDescription": "Mark and verify attendance.",
          "taskDate": "2025-01-10",
          "category": "HR",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "System Backup",
          "taskDescription": "Perform daily system backups.",
          "taskDate": "2025-01-11",
          "category": "IT",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Code Review",
          "taskDescription": "Review junior developer code.",
          "taskDate": "2025-01-12",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Security Scan",
          "taskDescription": "Run vulnerability scan.",
          "taskDate": "2025-01-13",
          "category": "Security",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "File Organization",
          "taskDescription": "Reorganize project files.",
          "taskDate": "2025-01-14",
          "category": "Management",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 104,
      "email": "staff4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Testing Module",
          "taskDescription": "Perform QA testing.",
          "taskDate": "2025-01-09",
          "category": "Testing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Documentation",
          "taskDescription": "Update project documentation.",
          "taskDate": "2025-01-10",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "taskTitle": "Bug Fix",
          "taskDescription": "Fix UI layout issue.",
          "taskDate": "2025-01-11",
          "category": "UI/UX",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Deployment",
          "taskDescription": "Deploy new version to server.",
          "taskDate": "2025-01-12",
          "category": "DevOps",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Client Report",
          "taskDescription": "Prepare project update.",
          "taskDate": "2025-01-13",
          "category": "Reporting",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 105,
      "email": "staff5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Social Media",
          "taskDescription": "Plan weekly social posts.",
          "taskDate": "2025-01-10",
          "category": "Marketing",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Ad Campaign",
          "taskDescription": "Review advertisement results.",
          "taskDate": "2025-01-11",
          "category": "Marketing",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Research",
          "taskDescription": "Market competitor research.",
          "taskDate": "2025-01-12",
          "category": "Research",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "taskTitle": "Team Sync",
          "taskDescription": "Join weekly team sync.",
          "taskDate": "2025-01-13",
          "category": "Management",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Poster Design",
          "taskDescription": "Design event poster.",
          "taskDate": "2025-01-14",
          "category": "Design",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    }
  ];


export const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    return {employees,admin}
}
