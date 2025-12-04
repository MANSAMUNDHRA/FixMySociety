// Enhanced Civic Issue Management Admin Panel - JavaScript (Fixed Assignment Flow)

// Application Data with Enhanced Staff Management
let appData = {
  "categories": [
    {
      "id": "roads",
      "name": "Roads & Infrastructure", 
      "icon": "fas fa-road",
      "color": "#E74C3C",
      "description": "Road maintenance, construction, sidewalks, bridges",
      "staffCount": 3,
      "availableCount": 2
    },
    {
      "id": "utilities", 
      "name": "Utilities & Electrical",
      "icon": "fas fa-bolt", 
      "color": "#3498DB",
      "description": "Electrical systems, water, gas, streetlights",
      "staffCount": 3,
      "availableCount": 1
    },
    {
      "id": "environment",
      "name": "Environment & Sanitation",
      "icon": "fas fa-leaf",
      "color": "#27AE60", 
      "description": "Waste management, recycling, environmental issues",
      "staffCount": 2,
      "availableCount": 1
    },
    {
      "id": "safety",
      "name": "Public Safety & Emergency", 
      "icon": "fas fa-shield-alt",
      "color": "#F39C12",
      "description": "Emergency response, safety inspections, security",
      "staffCount": 2,
      "availableCount": 2
    },
    {
      "id": "parks",
      "name": "Parks & Recreation",
      "icon": "fas fa-tree",
      "color": "#9B59B6", 
      "description": "Park maintenance, recreational facilities, landscaping",
      "staffCount": 1,
      "availableCount": 1
    },
    {
      "id": "general",
      "name": "General Maintenance", 
      "icon": "fas fa-wrench",
      "color": "#95A5A6",
      "description": "General repairs, maintenance, multi-category support",
      "staffCount": 2,
      "availableCount": 2
    }
  ],
  "staff": [
    {
      "id": 1,
      "name": "John Smith", 
      "email": "john.smith@city.gov",
      "phone": "+1-555-0101",
      "avatar": "JS",
      "department": "Public Works",
      "role": "Senior Engineer", 
      "categories": ["roads", "general"],
      "primaryCategory": "roads",
      "availability": "Available",
      "currentAssignments": 0,
      "maxCapacity": 3,
      "performanceRating": 4.7,
      "completedIssues": 45,
      "avgResolutionTime": "2.3 days",
      "location": "Downtown District",
      "lastStatusChange": "2024-09-18 09:30",
      "assignmentHistory": [
        {"issueId": "ISS-2024-001", "assignedDate": "2024-09-15", "completedDate": "2024-09-17", "status": "Completed"},
        {"issueId": "ISS-2024-008", "assignedDate": "2024-09-10", "completedDate": "2024-09-12", "status": "Completed"}
      ]
    },
    {
      "id": 2,
      "name": "Mike Davis",
      "email": "mike.davis@city.gov", 
      "phone": "+1-555-0102",
      "avatar": "MD",
      "department": "Utilities",
      "role": "Senior Electrician",
      "categories": ["utilities", "general"],
      "primaryCategory": "utilities", 
      "availability": "On Assignment",
      "currentAssignments": 2,
      "maxCapacity": 3,
      "performanceRating": 4.9,
      "completedIssues": 52,
      "avgResolutionTime": "1.8 days",
      "location": "North District",
      "lastStatusChange": "2024-09-18 08:15",
      "currentIssues": ["ISS-2024-002", "ISS-2024-009"],
      "assignmentHistory": [
        {"issueId": "ISS-2024-002", "assignedDate": "2024-09-17", "status": "In Progress"},
        {"issueId": "ISS-2024-007", "assignedDate": "2024-09-14", "completedDate": "2024-09-16", "status": "Completed"}
      ]
    },
    {
      "id": 3,
      "name": "Sarah Connor",
      "email": "sarah.connor@city.gov",
      "phone": "+1-555-0103", 
      "avatar": "SC",
      "department": "Sanitation",
      "role": "Environmental Supervisor",
      "categories": ["environment"],
      "primaryCategory": "environment",
      "availability": "Busy",
      "currentAssignments": 3,
      "maxCapacity": 3,
      "performanceRating": 4.8,
      "completedIssues": 73,
      "avgResolutionTime": "1.2 days", 
      "location": "Central District",
      "lastStatusChange": "2024-09-17 16:45",
      "currentIssues": ["ISS-2024-003", "ISS-2024-005", "ISS-2024-011"],
      "assignmentHistory": [
        {"issueId": "ISS-2024-003", "assignedDate": "2024-09-16", "status": "In Progress"},
        {"issueId": "ISS-2024-013", "assignedDate": "2024-09-12", "completedDate": "2024-09-14", "status": "Completed"}
      ]
    },
    {
      "id": 4,
      "name": "Tom Anderson", 
      "email": "tom.anderson@city.gov",
      "phone": "+1-555-0104",
      "avatar": "TA", 
      "department": "Public Safety",
      "role": "Safety Inspector",
      "categories": ["safety", "general"],
      "primaryCategory": "safety",
      "availability": "Available", 
      "currentAssignments": 0,
      "maxCapacity": 2,
      "performanceRating": 4.9,
      "completedIssues": 38,
      "avgResolutionTime": "0.8 days",
      "location": "All Districts", 
      "lastStatusChange": "2024-09-18 10:20",
      "assignmentHistory": [
        {"issueId": "ISS-2024-006", "assignedDate": "2024-09-15", "completedDate": "2024-09-16", "status": "Completed"},
        {"issueId": "ISS-2024-012", "assignedDate": "2024-09-10", "completedDate": "2024-09-11", "status": "Completed"}
      ]
    },
    {
      "id": 5,
      "name": "Lisa Garcia",
      "email": "lisa.garcia@city.gov",
      "phone": "+1-555-0105", 
      "avatar": "LG",
      "department": "Parks & Recreation",
      "role": "Parks Maintenance Coordinator", 
      "categories": ["parks"],
      "primaryCategory": "parks",
      "availability": "Available",
      "currentAssignments": 0,
      "maxCapacity": 2, 
      "performanceRating": 4.5,
      "completedIssues": 29,
      "avgResolutionTime": "3.1 days",
      "location": "Park Districts",
      "lastStatusChange": "2024-09-18 07:45",
      "assignmentHistory": [
        {"issueId": "ISS-2024-010", "assignedDate": "2024-09-13", "completedDate": "2024-09-15", "status": "Completed"},
        {"issueId": "ISS-2024-014", "assignedDate": "2024-09-08", "completedDate": "2024-09-11", "status": "Completed"}
      ]
    },
    {
      "id": 6,
      "name": "Robert Chen",
      "email": "robert.chen@city.gov", 
      "phone": "+1-555-0106",
      "avatar": "RC",
      "department": "Public Works",
      "role": "Maintenance Technician",
      "categories": ["roads", "general", "utilities"],
      "primaryCategory": "general", 
      "availability": "Available",
      "currentAssignments": 0,
      "maxCapacity": 2,
      "performanceRating": 4.2,
      "completedIssues": 15,
      "avgResolutionTime": "3.2 days",
      "location": "South District",
      "lastStatusChange": "2024-09-18 09:00",
      "assignmentHistory": [
        {"issueId": "ISS-2024-015", "assignedDate": "2024-09-12", "completedDate": "2024-09-14", "status": "Completed"}
      ]
    },
    {
      "id": 7,
      "name": "Maria Rodriguez", 
      "email": "maria.rodriguez@city.gov",
      "phone": "+1-555-0107",
      "avatar": "MR",
      "department": "Utilities", 
      "role": "Water Systems Technician",
      "categories": ["utilities"],
      "primaryCategory": "utilities",
      "availability": "On Assignment",
      "currentAssignments": 2,
      "maxCapacity": 2,
      "performanceRating": 4.6, 
      "completedIssues": 41,
      "avgResolutionTime": "2.1 days",
      "location": "East District",
      "lastStatusChange": "2024-09-17 14:30",
      "currentIssues": ["ISS-2024-016", "ISS-2024-017"],
      "assignmentHistory": [
        {"issueId": "ISS-2024-016", "assignedDate": "2024-09-17", "status": "In Progress"},
        {"issueId": "ISS-2024-018", "assignedDate": "2024-09-14", "completedDate": "2024-09-16", "status": "Completed"}
      ]
    },
    {
      "id": 8,
      "name": "David Wilson",
      "email": "david.wilson@city.gov",
      "phone": "+1-555-0108",
      "avatar": "DW", 
      "department": "Emergency Services",
      "role": "Emergency Response Coordinator",
      "categories": ["safety"],
      "primaryCategory": "safety",
      "availability": "Available",
      "currentAssignments": 0,
      "maxCapacity": 1,
      "performanceRating": 4.8,
      "completedIssues": 22, 
      "avgResolutionTime": "0.5 days",
      "location": "All Districts",
      "lastStatusChange": "2024-09-18 08:00",
      "assignmentHistory": [
        {"issueId": "ISS-2024-019", "assignedDate": "2024-09-15", "completedDate": "2024-09-15", "status": "Completed"},
        {"issueId": "ISS-2024-020", "assignedDate": "2024-09-12", "completedDate": "2024-09-13", "status": "Completed"}
      ]
    },
    {
      "id": 9,
      "name": "Jennifer Park",
      "email": "jennifer.park@city.gov",
      "phone": "+1-555-0109", 
      "avatar": "JP",
      "department": "Environmental Services",
      "role": "Environmental Specialist",
      "categories": ["environment"],
      "primaryCategory": "environment",
      "availability": "Available",
      "currentAssignments": 0,
      "maxCapacity": 2,
      "performanceRating": 4.4,
      "completedIssues": 31,
      "avgResolutionTime": "2.8 days",
      "location": "West District", 
      "lastStatusChange": "2024-09-18 08:30",
      "assignmentHistory": [
        {"issueId": "ISS-2024-021", "assignedDate": "2024-09-13", "completedDate": "2024-09-15", "status": "Completed"}
      ]
    },
    {
      "id": 10,
      "name": "Carlos Martinez", 
      "email": "carlos.martinez@city.gov",
      "phone": "+1-555-0110",
      "avatar": "CM",
      "department": "Public Works",
      "role": "Infrastructure Specialist",
      "categories": ["roads", "utilities", "general"],
      "primaryCategory": "roads",
      "availability": "Available",
      "currentAssignments": 0, 
      "maxCapacity": 3,
      "performanceRating": 4.6,
      "completedIssues": 67,
      "avgResolutionTime": "2.0 days",
      "location": "Multiple Districts",
      "lastStatusChange": "2024-09-18 09:15",
      "assignmentHistory": [
        {"issueId": "ISS-2024-022", "assignedDate": "2024-09-14", "completedDate": "2024-09-16", "status": "Completed"},
        {"issueId": "ISS-2024-023", "assignedDate": "2024-09-11", "completedDate": "2024-09-13", "status": "Completed"}
      ]
    }
  ],
  "issues": [
    {"id": "ISS-2024-001", "category": "Roads", "priority": "High", "status": "Open", "title": "Large pothole on Main Street", "location": "Main Street & 5th Avenue", "submittedDate": "2024-09-18", "assignedTo": null, "citizenName": "Alice Johnson", "description": "Large pothole causing vehicle damage"},
    {"id": "ISS-2024-002", "category": "Utilities", "priority": "Medium", "status": "In Progress", "title": "Streetlight not working", "location": "Park Avenue & 3rd Street", "submittedDate": "2024-09-17", "assignedTo": "Mike Davis", "citizenName": "Bob Wilson", "description": "Street light has been out for 3 days"},
    {"id": "ISS-2024-003", "category": "Environment", "priority": "Low", "status": "In Progress", "title": "Overflowing trash bin", "location": "Central Park North Entrance", "submittedDate": "2024-09-16", "assignedTo": "Sarah Connor", "citizenName": "Charlie Brown", "description": "Trash bin overflowing, attracting pests"},
    {"id": "ISS-2024-004", "category": "Safety", "priority": "High", "status": "Open", "title": "Broken sidewalk", "location": "Elm Street & 2nd Avenue", "submittedDate": "2024-09-18", "assignedTo": null, "citizenName": "Diana Prince", "description": "Cracked sidewalk creating trip hazard"},
    {"id": "ISS-2024-005", "category": "Parks", "priority": "Medium", "status": "Open", "title": "Playground equipment damage", "location": "Riverside Park Playground", "submittedDate": "2024-09-17", "assignedTo": null, "citizenName": "Frank Miller", "description": "Swing set chain is broken, safety hazard for children"},
    {"id": "ISS-2024-006", "category": "Emergency", "priority": "High", "status": "Open", "title": "Tree blocking road", "location": "Oak Street", "submittedDate": "2024-09-18", "assignedTo": null, "citizenName": "Helen Troy", "description": "Large tree fell across road after storm"}
  ],
  "users": {
    "citizens": [
      {"id": 1, "name": "Alice Johnson", "email": "alice@email.com", "phone": "+1-555-0123", "registrationDate": "2024-01-15", "issuesReported": 3, "status": "Active"},
      {"id": 2, "name": "Bob Wilson", "email": "bob@email.com", "phone": "+1-555-0124", "registrationDate": "2024-02-20", "issuesReported": 7, "status": "Active"},
      {"id": 3, "name": "Charlie Brown", "email": "charlie@email.com", "phone": "+1-555-0125", "registrationDate": "2024-03-10", "issuesReported": 2, "status": "Active"},
      {"id": 4, "name": "Diana Prince", "email": "diana@email.com", "phone": "+1-555-0126", "registrationDate": "2024-04-05", "issuesReported": 5, "status": "Active"},
      {"id": 5, "name": "Frank Miller", "email": "frank@email.com", "phone": "+1-555-0127", "registrationDate": "2024-05-12", "issuesReported": 1, "status": "Active"}
    ]
  },
  "departments": [
    {"id": 1, "name": "Public Works", "staff": 15, "openIssues": 8, "avgResponseTime": "2.3 days", "resolutionRate": "87%"},
    {"id": 2, "name": "Utilities", "staff": 12, "openIssues": 5, "avgResponseTime": "1.8 days", "resolutionRate": "92%"},
    {"id": 3, "name": "Sanitation", "staff": 8, "openIssues": 3, "avgResponseTime": "1.2 days", "resolutionRate": "95%"},
    {"id": 4, "name": "Parks & Recreation", "staff": 10, "openIssues": 4, "avgResponseTime": "3.1 days", "resolutionRate": "89%"},
    {"id": 5, "name": "Public Safety", "staff": 6, "openIssues": 2, "avgResponseTime": "0.8 days", "resolutionRate": "98%"}
  ],
  "analytics": {
    "kpis": {
      "totalIssues": 156,
      "openIssues": 23,
      "closedIssues": 133,
      "urgentIssues": 5,
      "avgResolutionTime": "2.1 days",
      "responseTime": "4.2 hours",
      "resolutionRate": "89.2%",
      "citizenSatisfaction": "4.3/5"
    },
    "trends": {
      "last30Days": [12, 18, 15, 22, 19, 25, 30, 28, 24, 20, 16, 14, 18, 23, 27, 31, 29, 26, 22, 19, 15, 21, 24, 28, 32, 30, 26, 23, 20, 17],
      "categories": {"Roads": 45, "Utilities": 32, "Environment": 28, "Safety": 25, "Parks": 18, "Emergency": 8},
      "statusDistribution": {"Open": 23, "In Progress": 15, "Under Review": 12, "Resolved": 98, "Closed": 35}
    }
  },
  "notifications": [
    {"id": 1, "type": "System Alert", "title": "High Priority Issue Reported", "message": "New high priority road issue requires immediate attention", "timestamp": "2024-09-17 14:30", "read": false},
    {"id": 2, "type": "Issue Update", "title": "Issue ISS-2024-003 Resolved", "message": "Overflowing trash bin issue has been resolved", "timestamp": "2024-09-16 16:20", "read": true},
    {"id": 3, "type": "Performance Alert", "title": "SLA Warning", "message": "Public Works department approaching SLA threshold", "timestamp": "2024-09-16 10:15", "read": false},
    {"id": 4, "type": "User Message", "title": "Citizen Feedback", "message": "Positive feedback received for recent sidewalk repair", "timestamp": "2024-09-15 11:45", "read": true}
  ]
};

// Application State
let currentPage = 'dashboard';
let currentFilters = {};
let sortConfig = { field: null, direction: 'asc' };
let currentPageIndex = 0;
let itemsPerPage = 10;
let charts = {};
let selectedCategory = null;
let selectedStaff = null;
let selectedIssue = null;
let availabilityFilterActive = false;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    initializeNavigation();
    initializeDashboard();
    initializeIssueManagement();
    initializeStaffManagement();
    initializeMapView();
    initializeAnalytics();
    initializeUserManagement();
    initializeDepartmentManagement();
    initializeNotifications();
    initializeReports();
    initializeSettings();
    initializeModals();
    initializeResponsive();
    
    // Show dashboard by default
    showPage('dashboard');
});

// Data Management
function loadData() {
    // Update category availability counts
    updateCategoryAvailabilityCounts();
}

function saveData() {
    try {
        localStorage.setItem('civicIssueData', JSON.stringify(appData));
    } catch (e) {
        console.warn('Failed to save data to localStorage');
    }
}

function updateCategoryAvailabilityCounts() {
    appData.categories.forEach(category => {
        const categoryStaff = appData.staff.filter(staff => 
            staff.categories.includes(category.id)
        );
        category.staffCount = categoryStaff.length;
        category.availableCount = categoryStaff.filter(staff => 
            staff.availability === 'Available'
        ).length;
    });
}

// Navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            if (page) {
                showPage(page);
            }
        });
    });
}

function showPage(pageId) {
    const validPages = ['dashboard', 'issues', 'staff', 'map', 'analytics', 'users', 'departments', 'notifications', 'reports', 'settings'];
    if (!validPages.includes(pageId)) {
        console.warn(`Invalid page ID: ${pageId}`);
        return;
    }

    // Hide all pages
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    } else {
        console.warn(`Page element not found: ${pageId}-page`);
        return;
    }
    
    // Add active class to corresponding nav link
    const targetLink = document.querySelector(`[data-page="${pageId}"]`);
    if (targetLink) {
        targetLink.classList.add('active');
    }
    
    currentPage = pageId;
    
    // Load page-specific content
    setTimeout(() => {
        switch (pageId) {
            case 'dashboard':
                loadDashboard();
                break;
            case 'issues':
                loadIssueManagement();
                break;
            case 'staff':
                loadStaffManagement();
                break;
            case 'map':
                loadMapView();
                break;
            case 'analytics':
                loadAnalytics();
                break;
            case 'users':
                loadUserManagement();
                break;
            case 'departments':
                loadDepartmentManagement();
                break;
            case 'notifications':
                loadNotifications();
                break;
            case 'reports':
                loadReports();
                break;
        }
    }, 100);
}

// Dashboard
function initializeDashboard() {
    const newIssueBtn = document.getElementById('newIssueBtn');
    if (newIssueBtn) {
        newIssueBtn.addEventListener('click', () => {
            showNewIssueModal();
        });
    }
    
    const generateReportBtn = document.getElementById('generateReportBtn');
    if (generateReportBtn) {
        generateReportBtn.addEventListener('click', () => {
            showToast('Generating report...', 'info');
            setTimeout(() => showToast('Report generated successfully!', 'success'), 2000);
        });
    }
}

function loadDashboard() {
    updateDashboardStats();
    loadRecentActivity();
    loadPriorityAlerts();
    loadTrendsChart();
}

function updateDashboardStats() {
    const stats = appData.analytics.kpis;
    const totalElement = document.getElementById('totalIssues');
    const openElement = document.getElementById('openIssues');
    const closedElement = document.getElementById('closedIssues');
    const avgElement = document.getElementById('avgResolutionTime');
    
    if (totalElement) totalElement.textContent = stats.totalIssues;
    if (openElement) openElement.textContent = stats.openIssues;
    if (closedElement) closedElement.textContent = stats.closedIssues;
    if (avgElement) avgElement.textContent = stats.avgResolutionTime;
}

function loadRecentActivity() {
    const activityList = document.getElementById('activityList');
    if (!activityList) return;
    
    const activities = [
        { icon: 'fas fa-plus-circle', iconBg: 'var(--color-bg-1)', title: 'New issue reported', time: '5 minutes ago' },
        { icon: 'fas fa-check-circle', iconBg: 'var(--color-bg-3)', title: 'Issue ISS-2024-003 resolved', time: '2 hours ago' },
        { icon: 'fas fa-user-plus', iconBg: 'var(--color-bg-2)', title: 'Staff member assigned', time: '4 hours ago' },
        { icon: 'fas fa-exclamation-triangle', iconBg: 'var(--color-bg-4)', title: 'High priority issue assigned', time: '6 hours ago' },
        { icon: 'fas fa-comment', iconBg: 'var(--color-bg-5)', title: 'Citizen feedback received', time: '8 hours ago' }
    ];
    
    activityList.innerHTML = activities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon" style="background-color: ${activity.iconBg};">
                <i class="${activity.icon}"></i>
            </div>
            <div class="activity-content">
                <div class="activity-title">${activity.title}</div>
                <div class="activity-time">${activity.time}</div>
            </div>
        </div>
    `).join('');
}

function loadPriorityAlerts() {
    const alertList = document.getElementById('alertList');
    if (!alertList) return;
    
    const alerts = appData.issues.filter(issue => issue.priority === 'High' && issue.status === 'Open');
    
    alertList.innerHTML = alerts.map(alert => `
        <div class="alert-item">
            <div class="alert-icon" style="background-color: var(--color-bg-4);">
                <i class="fas fa-exclamation-triangle"></i>
            </div>
            <div class="alert-content">
                <div class="alert-title">${alert.title}</div>
                <div class="alert-description">${alert.location} - ${alert.category}</div>
            </div>
        </div>
    `).join('');
}

function loadTrendsChart() {
    const ctx = document.getElementById('trendsChart');
    if (!ctx) return;
    
    if (charts.trends) {
        charts.trends.destroy();
    }
    
    charts.trends = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: 30}, (_, i) => `Day ${i + 1}`),
            datasets: [{
                label: 'Issues Reported',
                data: appData.analytics.trends.last30Days,
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Staff Management
function initializeStaffManagement() {
    const availabilityFilterBtn = document.getElementById('availabilityFilterBtn');
    if (availabilityFilterBtn) {
        availabilityFilterBtn.addEventListener('click', toggleAvailabilityFilter);
    }
    
    const addStaffBtn = document.getElementById('addStaffBtn');
    if (addStaffBtn) {
        addStaffBtn.addEventListener('click', showAddStaffModal);
    }
    
    const backToCategoriesBtn = document.getElementById('backToCategoriesBtn');
    if (backToCategoriesBtn) {
        backToCategoriesBtn.addEventListener('click', showCategories);
    }
}

function loadStaffManagement() {
    showCategories();
    updateCategoryAvailabilityCounts();
}

function showCategories() {
    const categoriesContainer = document.getElementById('staffCategories');
    const listContainer = document.getElementById('staffListContainer');
    
    if (categoriesContainer) categoriesContainer.style.display = 'block';
    if (listContainer) listContainer.style.display = 'none';
    
    selectedCategory = null;
    loadStaffCategories();
}

function loadStaffCategories() {
    const categoriesGrid = document.querySelector('.categories-grid');
    if (!categoriesGrid) return;
    
    categoriesGrid.innerHTML = appData.categories.map(category => `
        <div class="category-card" onclick="selectCategory('${category.id}')">
            <div class="category-icon" style="background-color: ${category.color};">
                <i class="${category.icon}"></i>
            </div>
            <div class="category-info">
                <h3 class="category-name">${category.name}</h3>
                <p class="category-description">${category.description}</p>
                <div class="category-stats">
                    <div class="category-stat">
                        <div class="stat-number">${category.staffCount}</div>
                        <div class="stat-label">Total Staff</div>
                    </div>
                    <div class="category-stat">
                        <div class="stat-number available-count">${category.availableCount}</div>
                        <div class="stat-label">Available</div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function selectCategory(categoryId) {
    selectedCategory = categoryId;
    const category = appData.categories.find(c => c.id === categoryId);
    
    const categoriesContainer = document.getElementById('staffCategories');
    const listContainer = document.getElementById('staffListContainer');
    const categoryTitle = document.getElementById('selectedCategoryTitle');
    
    if (categoriesContainer) categoriesContainer.style.display = 'none';
    if (listContainer) listContainer.style.display = 'block';
    if (categoryTitle) categoryTitle.textContent = `Staff in ${category.name}`;
    
    loadStaffByCategory(categoryId);
    updateAvailabilitySummary(categoryId);
}

function loadStaffByCategory(categoryId) {
    const staffGrid = document.getElementById('staffGrid');
    if (!staffGrid) return;
    
    let categoryStaff = appData.staff.filter(staff => 
        staff.categories.includes(categoryId)
    );
    
    // Apply availability filter if active
    if (availabilityFilterActive) {
        categoryStaff = categoryStaff.filter(staff => staff.availability === 'Available');
    }
    
    staffGrid.innerHTML = categoryStaff.map(staff => createStaffCard(staff)).join('');
}

function createStaffCard(staff) {
    const availabilityClass = getAvailabilityClass(staff.availability);
    const currentAssignmentsList = staff.currentIssues ? staff.currentIssues.map(issueId => `
        <div class="assignment-item">Issue: ${issueId}</div>
    `).join('') : '';
    
    const stars = Array.from({length: 5}, (_, i) => 
        `<span class="star ${i < Math.floor(staff.performanceRating) ? '' : 'empty'}">★</span>`
    ).join('');
    
    const expertiseTags = staff.categories.map(cat => 
        `<span class="expertise-tag ${cat === staff.primaryCategory ? 'primary' : ''}">${getCategoryName(cat)}</span>`
    ).join('');
    
    return `
        <div class="staff-card">
            <div class="availability-badge ${availabilityClass}">
                ${staff.availability}
            </div>
            <div class="staff-header">
                <div class="staff-avatar">${staff.avatar}</div>
                <div class="staff-info">
                    <h4 class="staff-name">${staff.name}</h4>
                    <p class="staff-role">${staff.role}</p>
                </div>
            </div>
            
            <div class="staff-details">
                <div class="detail-row">
                    <span class="detail-label">Department:</span>
                    <span class="detail-value">${staff.department}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Email:</span>
                    <span class="detail-value">${staff.email}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Phone:</span>
                    <span class="detail-value">${staff.phone}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Location:</span>
                    <span class="detail-value">${staff.location}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Assignments:</span>
                    <span class="detail-value">${staff.currentAssignments}/${staff.maxCapacity}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Completed:</span>
                    <span class="detail-value">${staff.completedIssues}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Avg Resolution:</span>
                    <span class="detail-value">${staff.avgResolutionTime}</span>
                </div>
            </div>
            
            <div class="expertise-tags">
                ${expertiseTags}
            </div>
            
            <div class="performance-rating">
                <div class="stars">${stars}</div>
                <span class="rating-text">(${staff.performanceRating})</span>
            </div>
            
            ${staff.currentAssignments > 0 ? `
                <div class="current-assignments">
                    <div class="assignments-title">Current Assignments:</div>
                    ${currentAssignmentsList}
                </div>
            ` : ''}
            
            <div class="staff-actions">
                <button class="btn btn--outline btn--sm" onclick="viewStaffProfile(${staff.id})">
                    <i class="fas fa-eye"></i> View Profile
                </button>
                <button class="btn btn--secondary btn--sm" onclick="updateStaffStatus(${staff.id})">
                    <i class="fas fa-edit"></i> Update Status
                </button>
                <button class="btn btn--primary btn--sm" 
                        onclick="showIssueAssignmentModal(${staff.id})"
                        ${staff.availability !== 'Available' ? 'disabled' : ''}>
                    <i class="fas fa-plus"></i> Assign Issue
                </button>
            </div>
        </div>
    `;
}

function getAvailabilityClass(availability) {
    const classes = {
        'Available': 'badge-available',
        'Busy': 'badge-busy',
        'On Assignment': 'badge-on-assignment',
        'Off Duty': 'badge-off-duty'
    };
    return classes[availability] || 'badge-off-duty';
}

function getCategoryName(categoryId) {
    const category = appData.categories.find(c => c.id === categoryId);
    return category ? category.name.split(' ')[0] : categoryId;
}

function updateAvailabilitySummary(categoryId) {
    const summaryContainer = document.getElementById('availabilitySummary');
    if (!summaryContainer) return;
    
    const categoryStaff = appData.staff.filter(staff => 
        staff.categories.includes(categoryId)
    );
    
    const summary = {
        'Available': 0,
        'Busy': 0,
        'On Assignment': 0,
        'Off Duty': 0
    };
    
    categoryStaff.forEach(staff => {
        summary[staff.availability]++;
    });
    
    summaryContainer.innerHTML = Object.entries(summary).map(([status, count]) => `
        <div class="summary-item">
            <span class="summary-dot dot-${status.toLowerCase().replace(' ', '-')}"></span>
            <span>${count} ${status}</span>
        </div>
    `).join('');
}

function toggleAvailabilityFilter() {
    availabilityFilterActive = !availabilityFilterActive;
    const btn = document.getElementById('availabilityFilterBtn');
    
    if (btn) {
        if (availabilityFilterActive) {
            btn.classList.add('active');
            btn.innerHTML = '<i class="fas fa-check"></i> Available Only';
        } else {
            btn.classList.remove('active');
            btn.innerHTML = '<i class="fas fa-filter"></i> Available Only';
        }
    }
    
    if (selectedCategory) {
        loadStaffByCategory(selectedCategory);
    }
}

function viewStaffProfile(staffId) {
    const staff = appData.staff.find(s => s.id === staffId);
    if (!staff) return;
    
    showToast(`Viewing profile for ${staff.name}`, 'info');
}

function updateStaffStatus(staffId) {
    const staff = appData.staff.find(s => s.id === staffId);
    if (!staff) return;
    
    const statuses = ['Available', 'Busy', 'On Assignment', 'Off Duty'];
    const currentIndex = statuses.indexOf(staff.availability);
    const nextIndex = (currentIndex + 1) % statuses.length;
    
    staff.availability = statuses[nextIndex];
    staff.lastStatusChange = new Date().toISOString().slice(0, 16).replace('T', ' ');
    
    updateCategoryAvailabilityCounts();
    
    if (selectedCategory) {
        loadStaffByCategory(selectedCategory);
        updateAvailabilitySummary(selectedCategory);
    }
    
    saveData();
    showToast(`${staff.name}'s status updated to ${staff.availability}`, 'success');
}

function showIssueAssignmentModal(staffId) {
    const staff = appData.staff.find(s => s.id === staffId);
    if (!staff) return;
    
    selectedStaff = staff;
    
    const modalContent = document.getElementById('issueAssignmentContent');
    if (!modalContent) return;
    
    // Get available issues that match staff categories
    const availableIssues = appData.issues.filter(issue => 
        !issue.assignedTo && 
        staff.categories.some(cat => issueCategoryMatch(issue.category, cat))
    );
    
    modalContent.innerHTML = `
        <div class="modal-section">
            <h4>Assign Issue to ${staff.name}</h4>
            <p><strong>Categories:</strong> ${staff.categories.map(cat => getCategoryName(cat)).join(', ')}</p>
            <p><strong>Current Capacity:</strong> ${staff.currentAssignments}/${staff.maxCapacity}</p>
        </div>
        
        <div class="modal-section">
            <h5>Available Issues</h5>
            <div class="issue-selection-list">
                ${availableIssues.map(issue => `
                    <div class="selectable-issue-item" onclick="selectIssueForAssignment('${issue.id}')">
                        <input type="radio" name="selectedIssue" value="${issue.id}">
                        <div style="flex: 1;">
                            <div style="font-weight: 500;">${issue.title}</div>
                            <div style="font-size: 12px; color: var(--color-text-secondary);">
                                ${issue.id} • ${issue.category} • ${issue.priority} Priority
                            </div>
                            <div style="font-size: 12px; color: var(--color-text-secondary);">
                                ${issue.location}
                            </div>
                        </div>
                        <span class="priority-badge priority-${issue.priority.toLowerCase()}">${issue.priority}</span>
                    </div>
                `).join('')}
                ${availableIssues.length === 0 ? '<p>No available issues match this staff member\'s expertise.</p>' : ''}
            </div>
        </div>
    `;
    
    const confirmBtn = document.getElementById('confirmIssueAssignmentBtn');
    if (confirmBtn) {
        confirmBtn.onclick = confirmIssueAssignment;
    }
    
    showModal('issueAssignmentModal');
}

function selectIssueForAssignment(issueId) {
    selectedIssue = issueId;
    
    // Update selection visual
    document.querySelectorAll('.selectable-issue-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    event.currentTarget.classList.add('selected');
    event.currentTarget.querySelector('input[type="radio"]').checked = true;
}

function confirmIssueAssignment() {
    if (!selectedStaff || !selectedIssue) {
        showToast('Please select an issue to assign', 'warning');
        return;
    }
    
    const issue = appData.issues.find(i => i.id === selectedIssue);
    if (!issue) return;
    
    // Assign issue to staff
    issue.assignedTo = selectedStaff.name;
    issue.status = 'In Progress';
    
    // Update staff status
    selectedStaff.currentAssignments++;
    if (selectedStaff.currentAssignments >= selectedStaff.maxCapacity) {
        selectedStaff.availability = 'Busy';
    } else {
        selectedStaff.availability = 'On Assignment';
    }
    
    // Add to current issues
    if (!selectedStaff.currentIssues) {
        selectedStaff.currentIssues = [];
    }
    selectedStaff.currentIssues.push(selectedIssue);
    
    // Update assignment history
    selectedStaff.assignmentHistory.unshift({
        issueId: selectedIssue,
        assignedDate: new Date().toISOString().split('T')[0],
        status: 'In Progress'
    });
    
    updateCategoryAvailabilityCounts();
    saveData();
    
    closeModal();
    showToast(`Issue ${selectedIssue} assigned to ${selectedStaff.name}`, 'success');
    
    // Refresh current view
    if (selectedCategory) {
        loadStaffByCategory(selectedCategory);
        updateAvailabilitySummary(selectedCategory);
    }
    
    selectedStaff = null;
    selectedIssue = null;
}

function issueCategoryMatch(issueCategory, staffCategory) {
    const categoryMappings = {
        'Roads': ['roads', 'general'],
        'Utilities': ['utilities', 'general'],
        'Environment': ['environment'],
        'Safety': ['safety', 'general'],
        'Parks': ['parks'],
        'Emergency': ['safety', 'general']
    };
    
    const matchingCategories = categoryMappings[issueCategory] || [];
    return matchingCategories.includes(staffCategory);
}

function showAddStaffModal() {
    showToast('Add staff functionality would open staff creation form', 'info');
}

// Issue Management (Enhanced with Staff Assignment)
function initializeIssueManagement() {
    // Search functionality
    const searchInput = document.getElementById('searchIssues');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentFilters.search = e.target.value;
            loadIssueTable();
        });
    }
    
    // Filter functionality
    ['categoryFilter', 'priorityFilter', 'statusFilter'].forEach(filterId => {
        const filterElement = document.getElementById(filterId);
        if (filterElement) {
            filterElement.addEventListener('change', (e) => {
                const filterType = filterId.replace('Filter', '');
                currentFilters[filterType] = e.target.value;
                loadIssueTable();
            });
        }
    });
    
    // Clear filters
    const clearFiltersBtn = document.getElementById('clearFilters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            currentFilters = {};
            document.querySelectorAll('.filters-panel select, .filters-panel input').forEach(el => {
                el.value = '';
            });
            loadIssueTable();
        });
    }
    
    // Export functionality
    const exportBtn = document.getElementById('exportIssues');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportIssues);
    }
    
    // Add new issue
    const addIssueBtn = document.getElementById('addIssueBtn');
    if (addIssueBtn) {
        addIssueBtn.addEventListener('click', showNewIssueModal);
    }
}

function loadIssueManagement() {
    loadIssueTable();
}

function loadIssueTable() {
    const tbody = document.getElementById('issuesTableBody');
    if (!tbody) return;
    
    let filteredIssues = [...appData.issues];
    
    // Apply filters
    if (currentFilters.search) {
        const search = currentFilters.search.toLowerCase();
        filteredIssues = filteredIssues.filter(issue => 
            Object.values(issue).some(value => 
                value && value.toString().toLowerCase().includes(search)
            )
        );
    }
    
    ['category', 'priority', 'status'].forEach(field => {
        if (currentFilters[field]) {
            filteredIssues = filteredIssues.filter(issue => issue[field] === currentFilters[field]);
        }
    });
    
    // Apply sorting
    if (sortConfig.field) {
        filteredIssues.sort((a, b) => {
            const aVal = a[sortConfig.field] || '';
            const bVal = b[sortConfig.field] || '';
            const result = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
            return sortConfig.direction === 'desc' ? -result : result;
        });
    }
    
    // Pagination
    const startIndex = currentPageIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedIssues = filteredIssues.slice(startIndex, endIndex);
    
    tbody.innerHTML = paginatedIssues.map(issue => `
        <tr>
            <td><input type="checkbox" class="issue-checkbox" value="${issue.id}"></td>
            <td>${issue.id}</td>
            <td>${issue.category}</td>
            <td><span class="priority-badge priority-${issue.priority.toLowerCase()}">${issue.priority}</span></td>
            <td><span class="status-badge status-${issue.status.toLowerCase().replace(/\s+/g, '-')}">${issue.status}</span></td>
            <td>${issue.location}</td>
            <td>${issue.submittedDate}</td>
            <td>${issue.assignedTo || 'Unassigned'}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn--outline btn-icon" onclick="viewIssue('${issue.id}')" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn btn--secondary btn-icon" onclick="editIssue('${issue.id}')" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn--primary btn-icon" onclick="assignStaff('${issue.id}')" title="Assign Staff">
                        <i class="fas fa-user-plus"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
    
    // Update pagination info
    const paginationInfo = document.getElementById('paginationInfo');
    if (paginationInfo) {
        const start = startIndex + 1;
        const end = Math.min(endIndex, filteredIssues.length);
        paginationInfo.textContent = `Showing ${start}-${end} of ${filteredIssues.length} items`;
    }
    
    // Add sorting to table headers
    setTimeout(() => {
        document.querySelectorAll('.sortable').forEach(header => {
            const existingListener = header.getAttribute('data-listener');
            if (!existingListener) {
                header.setAttribute('data-listener', 'true');
                header.addEventListener('click', () => {
                    const field = header.dataset.sort;
                    if (sortConfig.field === field) {
                        sortConfig.direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
                    } else {
                        sortConfig.field = field;
                        sortConfig.direction = 'asc';
                    }
                    
                    // Update sort indicators
                    document.querySelectorAll('.sortable').forEach(h => {
                        h.classList.remove('sort-asc', 'sort-desc');
                    });
                    header.classList.add(`sort-${sortConfig.direction}`);
                    
                    loadIssueTable();
                });
            }
        });
    }, 100);
}

// Fixed function name to match the onclick in HTML
function assignStaff(issueId) {
    const issue = appData.issues.find(i => i.id === issueId);
    if (!issue) return;
    
    selectedIssue = issue;
    
    const modalContent = document.getElementById('staffAssignmentContent');
    if (!modalContent) return;
    
    // Get relevant staff based on issue category
    const relevantStaff = appData.staff.filter(staff => 
        issueCategoryMatch(issue.category, staff.primaryCategory) ||
        staff.categories.some(cat => issueCategoryMatch(issue.category, cat))
    );
    
    // Group staff by categories
    const categories = [...new Set(relevantStaff.flatMap(staff => staff.categories))];
    const categoryTabs = categories.map(catId => {
        const category = appData.categories.find(c => c.id === catId);
        return category ? { id: catId, name: category.name } : null;
    }).filter(Boolean);
    
    modalContent.innerHTML = `
        <div class="modal-section">
            <h4>Assign Staff to Issue: ${issue.id}</h4>
            <p><strong>Category:</strong> ${issue.category} • <strong>Priority:</strong> ${issue.priority}</p>
            <p><strong>Location:</strong> ${issue.location}</p>
            <p><strong>Description:</strong> ${issue.description}</p>
        </div>
        
        <div class="staff-assignment-tabs">
            ${categoryTabs.map(cat => `
                <button class="assignment-tab" data-category="${cat.id}" onclick="switchAssignmentTab('${cat.id}')">
                    ${cat.name}
                </button>
            `).join('')}
        </div>
        
        <div class="staff-selection-container">
            ${categoryTabs.map(cat => `
                <div class="assignment-tab-content" id="assignment-tab-${cat.id}" style="display: none;">
                    <div class="staff-selection-grid">
                        ${relevantStaff.filter(staff => staff.categories.includes(cat.id)).map(staff => `
                            <div class="selectable-staff-card ${staff.availability !== 'Available' ? 'unavailable' : ''}" 
                                 onclick="selectStaffForAssignment(${staff.id})"
                                 ${staff.availability !== 'Available' ? 'title="Staff not available"' : ''}>
                                <div class="staff-header">
                                    <div class="staff-avatar">${staff.avatar}</div>
                                    <div class="staff-info">
                                        <h5 class="staff-name">${staff.name}</h5>
                                        <p class="staff-role">${staff.role}</p>
                                    </div>
                                </div>
                                <div class="availability-badge ${getAvailabilityClass(staff.availability)}">
                                    ${staff.availability}
                                </div>
                                <div style="margin-top: 8px; font-size: 12px;">
                                    <div>Assignments: ${staff.currentAssignments}/${staff.maxCapacity}</div>
                                    <div>Rating: ${staff.performanceRating}/5</div>
                                    <div>Location: ${staff.location}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Show first tab by default
    if (categoryTabs.length > 0) {
        setTimeout(() => switchAssignmentTab(categoryTabs[0].id), 100);
    }
    
    const confirmBtn = document.getElementById('confirmAssignmentBtn');
    if (confirmBtn) {
        confirmBtn.onclick = confirmStaffAssignment;
    }
    
    showModal('staffAssignmentModal');
}

function switchAssignmentTab(categoryId) {
    // Update tab buttons
    document.querySelectorAll('.assignment-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    const activeTab = document.querySelector(`[data-category="${categoryId}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    // Show/hide tab content
    document.querySelectorAll('.assignment-tab-content').forEach(content => {
        content.style.display = 'none';
    });
    const targetContent = document.getElementById(`assignment-tab-${categoryId}`);
    if (targetContent) {
        targetContent.style.display = 'block';
    }
}

function selectStaffForAssignment(staffId) {
    const staff = appData.staff.find(s => s.id === staffId);
    if (!staff || staff.availability !== 'Available') return;
    
    selectedStaff = staff;
    
    // Update selection visual
    document.querySelectorAll('.selectable-staff-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    event.currentTarget.classList.add('selected');
}

function confirmStaffAssignment() {
    if (!selectedStaff || !selectedIssue) {
        showToast('Please select a staff member', 'warning');
        return;
    }
    
    // Assign issue to staff
    selectedIssue.assignedTo = selectedStaff.name;
    selectedIssue.status = 'In Progress';
    
    // Update staff status
    selectedStaff.currentAssignments++;
    if (selectedStaff.currentAssignments >= selectedStaff.maxCapacity) {
        selectedStaff.availability = 'Busy';
    } else {
        selectedStaff.availability = 'On Assignment';
    }
    
    // Add to current issues
    if (!selectedStaff.currentIssues) {
        selectedStaff.currentIssues = [];
    }
    selectedStaff.currentIssues.push(selectedIssue.id);
    
    // Update assignment history
    selectedStaff.assignmentHistory.unshift({
        issueId: selectedIssue.id,
        assignedDate: new Date().toISOString().split('T')[0],
        status: 'In Progress'
    });
    
    updateCategoryAvailabilityCounts();
    saveData();
    
    closeModal();
    showToast(`Issue ${selectedIssue.id} assigned to ${selectedStaff.name}`, 'success');
    
    // Refresh issue table
    loadIssueTable();
    
    selectedStaff = null;
    selectedIssue = null;
}

function viewIssue(issueId) {
    const issue = appData.issues.find(i => i.id === issueId);
    if (!issue) return;
    
    const modalContent = document.getElementById('issueDetailContent');
    if (modalContent) {
        modalContent.innerHTML = `
            <div class="issue-detail-grid">
                <div class="issue-info">
                    <h4>Issue Information</h4>
                    <div class="info-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div class="info-item">
                            <label><strong>Issue ID:</strong></label>
                            <span>${issue.id}</span>
                        </div>
                        <div class="info-item">
                            <label><strong>Category:</strong></label>
                            <span>${issue.category}</span>
                        </div>
                        <div class="info-item">
                            <label><strong>Priority:</strong></label>
                            <span class="priority-badge priority-${issue.priority.toLowerCase()}">${issue.priority}</span>
                        </div>
                        <div class="info-item">
                            <label><strong>Status:</strong></label>
                            <span class="status-badge status-${issue.status.toLowerCase().replace(/\s+/g, '-')}">${issue.status}</span>
                        </div>
                        <div class="info-item">
                            <label><strong>Location:</strong></label>
                            <span>${issue.location}</span>
                        </div>
                        <div class="info-item">
                            <label><strong>Submitted:</strong></label>
                            <span>${issue.submittedDate}</span>
                        </div>
                        <div class="info-item">
                            <label><strong>Assigned To:</strong></label>
                            <span>${issue.assignedTo || 'Unassigned'}</span>
                        </div>
                        <div class="info-item">
                            <label><strong>Citizen:</strong></label>
                            <span>${issue.citizenName}</span>
                        </div>
                    </div>
                    
                    <h4>Description</h4>
                    <p>${issue.description}</p>
                </div>
            </div>
        `;
        
        showModal('issueDetailModal');
    }
}

function editIssue(issueId) {
    showToast('Edit functionality would open edit form', 'info');
}

function exportIssues() {
    showToast('Exporting issues to CSV...', 'info');
    setTimeout(() => showToast('Issues exported successfully!', 'success'), 1500);
}

function showNewIssueModal() {
    const modalContent = document.getElementById('genericModalContent');
    if (modalContent) {
        modalContent.innerHTML = `
            <form id="newIssueForm">
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label">Title</label>
                        <input type="text" class="form-control" name="title" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Category</label>
                        <select class="form-control" name="category" required>
                            <option value="">Select Category</option>
                            <option value="Roads">Roads</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Environment">Environment</option>
                            <option value="Safety">Safety</option>
                            <option value="Parks">Parks</option>
                            <option value="Emergency">Emergency</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Priority</label>
                        <select class="form-control" name="priority" required>
                            <option value="">Select Priority</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Location</label>
                        <input type="text" class="form-control" name="location" required>
                    </div>
                    <div class="form-group" style="grid-column: 1 / -1;">
                        <label class="form-label">Description</label>
                        <textarea class="form-control" name="description" rows="3" required></textarea>
                    </div>
                </div>
            </form>
        `;
        
        const modalTitle = document.getElementById('genericModalTitle');
        const modalAction = document.getElementById('genericModalAction');
        
        if (modalTitle) modalTitle.textContent = 'New Issue';
        if (modalAction) {
            modalAction.textContent = 'Create Issue';
            modalAction.onclick = createNewIssue;
        }
        
        showModal('genericModal');
    }
}

function createNewIssue() {
    const form = document.getElementById('newIssueForm');
    if (form) {
        const formData = new FormData(form);
        
        const newIssue = {
            id: `ISS-2024-${String(appData.issues.length + 1).padStart(3, '0')}`,
            title: formData.get('title'),
            category: formData.get('category'),
            priority: formData.get('priority'),
            location: formData.get('location'),
            description: formData.get('description'),
            status: 'Open',
            submittedDate: new Date().toISOString().split('T')[0],
            assignedTo: null,
            citizenName: 'Admin Created'
        };
        
        appData.issues.push(newIssue);
        saveData();
        loadIssueTable();
        closeModal();
        showToast('Issue created successfully!', 'success');
    }
}

// Map View, Analytics, User Management, etc. (keeping existing functionality)
function initializeMapView() {
    const toggleHeatMapBtn = document.getElementById('toggleHeatMap');
    const resetMapViewBtn = document.getElementById('resetMapView');
    
    if (toggleHeatMapBtn) {
        toggleHeatMapBtn.addEventListener('click', toggleHeatMap);
    }
    
    if (resetMapViewBtn) {
        resetMapViewBtn.addEventListener('click', resetMapView);
    }
}

function loadMapView() {
    generateMapGrid();
    setupMapFilters();
}

function generateMapGrid() {
    const mapGrid = document.getElementById('mapGrid');
    if (!mapGrid) return;
    
    mapGrid.innerHTML = '';
    
    for (let i = 0; i < 80; i++) {
        const cell = document.createElement('div');
        cell.className = 'map-cell';
        cell.dataset.index = i;
        
        if (i < appData.issues.length) {
            const issue = appData.issues[i % appData.issues.length];
            const marker = document.createElement('div');
            marker.className = `map-marker marker-${issue.category.toLowerCase()}`;
            marker.dataset.issueId = issue.id;
            marker.addEventListener('click', (e) => {
                e.stopPropagation();
                showMapIssueDetails(issue.id);
            });
            cell.appendChild(marker);
        }
        
        mapGrid.appendChild(cell);
    }
}

function showMapIssueDetails(issueId) {
    const issue = appData.issues.find(i => i.id === issueId);
    if (!issue) return;
    
    const detailsPanel = document.getElementById('mapIssueDetails');
    if (detailsPanel) {
        detailsPanel.innerHTML = `
            <h4>${issue.title}</h4>
            <p><strong>ID:</strong> ${issue.id}</p>
            <p><strong>Category:</strong> ${issue.category}</p>
            <p><strong>Priority:</strong> <span class="priority-badge priority-${issue.priority.toLowerCase()}">${issue.priority}</span></p>
            <p><strong>Status:</strong> <span class="status-badge status-${issue.status.toLowerCase().replace(/\s+/g, '-')}">${issue.status}</span></p>
            <p><strong>Location:</strong> ${issue.location}</p>
            <p><strong>Assigned To:</strong> ${issue.assignedTo || 'Unassigned'}</p>
            <div style="margin-top: 16px;">
                <button class="btn btn--primary btn--sm" onclick="viewIssue('${issue.id}')">View Details</button>
                ${!issue.assignedTo ? `<button class="btn btn--secondary btn--sm" onclick="assignStaff('${issue.id}')">Assign Staff</button>` : ''}
            </div>
        `;
    }
}

function setupMapFilters() {
    const categoryFilters = document.getElementById('mapCategoryFilters');
    const priorityFilters = document.getElementById('mapPriorityFilters');
    
    if (categoryFilters) {
        categoryFilters.addEventListener('change', filterMapMarkers);
    }
    if (priorityFilters) {
        priorityFilters.addEventListener('change', filterMapMarkers);
    }
}

function filterMapMarkers() {
    const checkedCategories = Array.from(document.querySelectorAll('#mapCategoryFilters input:checked')).map(cb => cb.value);
    const checkedPriorities = Array.from(document.querySelectorAll('#mapPriorityFilters input:checked')).map(cb => cb.value);
    
    document.querySelectorAll('.map-marker').forEach(marker => {
        const issueId = marker.dataset.issueId;
        const issue = appData.issues.find(i => i.id === issueId);
        
        if (issue && checkedCategories.includes(issue.category) && checkedPriorities.includes(issue.priority)) {
            marker.style.display = 'block';
        } else {
            marker.style.display = 'none';
        }
    });
}

function toggleHeatMap() {
    showToast('Heat map view toggled', 'info');
}

function resetMapView() {
    generateMapGrid();
    showToast('Map view reset', 'info');
}

// Analytics
function initializeAnalytics() {
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    
    if (startDateInput) {
        startDateInput.addEventListener('change', updateAnalytics);
    }
    if (endDateInput) {
        endDateInput.addEventListener('change', updateAnalytics);
    }
}

function loadAnalytics() {
    setTimeout(() => {
        loadCategoryChart();
        loadStatusChart();
        loadDepartmentChart();
    }, 200);
}

function loadCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;
    
    if (charts.category) {
        charts.category.destroy();
    }
    
    const categories = appData.analytics.trends.categories;
    
    charts.category = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(categories),
            datasets: [{
                label: 'Issues',
                data: Object.values(categories),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function loadStatusChart() {
    const ctx = document.getElementById('statusChart');
    if (!ctx) return;
    
    if (charts.status) {
        charts.status.destroy();
    }
    
    const statusData = appData.analytics.trends.statusDistribution;
    
    charts.status = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(statusData),
            datasets: [{
                data: Object.values(statusData),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function loadDepartmentChart() {
    const ctx = document.getElementById('departmentChart');
    if (!ctx) return;
    
    if (charts.department) {
        charts.department.destroy();
    }
    
    const departments = appData.departments;
    
    charts.department = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: departments.map(d => d.name),
            datasets: [
                {
                    label: 'Open Issues',
                    data: departments.map(d => d.openIssues),
                    backgroundColor: '#1FB8CD'
                },
                {
                    label: 'Staff',
                    data: departments.map(d => d.staff),
                    backgroundColor: '#FFC185'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function updateAnalytics() {
    showToast('Analytics updated for selected date range', 'info');
}

// User Management
function initializeUserManagement() {
    document.querySelectorAll('.tabs .tab-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const tabId = e.target.dataset.tab;
            if (tabId) {
                switchTab(tabId);
            }
        });
    });
    
    const addUserBtn = document.getElementById('addUserBtn');
    if (addUserBtn) {
        addUserBtn.addEventListener('click', showAddUserModal);
    }
}

function loadUserManagement() {
    loadCitizensTable();
    loadStaffUsersTable();
}

function switchTab(tabId) {
    // Remove active class from all tab buttons and content
    document.querySelectorAll('.tabs .tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('#users-page .tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to selected tab and content
    const targetButton = document.querySelector(`.tabs [data-tab="${tabId}"]`);
    const targetContent = document.getElementById(`${tabId}-tab`);
    
    if (targetButton) targetButton.classList.add('active');
    if (targetContent) targetContent.classList.add('active');
}

function loadCitizensTable() {
    const tbody = document.getElementById('citizensTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = appData.users.citizens.map(citizen => `
        <tr>
            <td>${citizen.name}</td>
            <td>${citizen.email}</td>
            <td>${citizen.phone}</td>
            <td>${citizen.registrationDate}</td>
            <td>${citizen.issuesReported}</td>
            <td><span class="status status--success">${citizen.status}</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn--outline btn-icon" onclick="viewUser('citizen', ${citizen.id})" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn btn--secondary btn-icon" onclick="editUser('citizen', ${citizen.id})" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function loadStaffUsersTable() {
    const tbody = document.getElementById('staffUsersTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = appData.staff.map(staff => `
        <tr>
            <td>${staff.name}</td>
            <td>${staff.email}</td>
            <td>${staff.department}</td>
            <td>${staff.role}</td>
            <td>${staff.lastStatusChange}</td>
            <td><span class="status status--success">Active</span></td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn--outline btn-icon" onclick="viewUser('staff', ${staff.id})" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn btn--secondary btn-icon" onclick="editUser('staff', ${staff.id})" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function viewUser(userType, userId) {
    showToast(`Viewing ${userType} user details`, 'info');
}

function editUser(userType, userId) {
    showToast(`Editing ${userType} user`, 'info');
}

function showAddUserModal() {
    showToast('Add user functionality would open user creation form', 'info');
}

// Department Management
function initializeDepartmentManagement() {
    const addDepartmentBtn = document.getElementById('addDepartmentBtn');
    if (addDepartmentBtn) {
        addDepartmentBtn.addEventListener('click', showAddDepartmentModal);
    }
}

function loadDepartmentManagement() {
    const grid = document.getElementById('departmentsGrid');
    if (!grid) return;
    
    grid.innerHTML = appData.departments.map(dept => `
        <div class="department-card">
            <div class="department-header">
                <h3 class="department-name">${dept.name}</h3>
                <button class="btn btn--outline btn--sm" onclick="editDepartment(${dept.id})">
                    <i class="fas fa-edit"></i>
                </button>
            </div>
            <div class="department-stats">
                <div class="stat-item">
                    <div class="stat-value">${dept.staff}</div>
                    <div class="stat-label">Staff Members</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${dept.openIssues}</div>
                    <div class="stat-label">Open Issues</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${dept.avgResponseTime}</div>
                    <div class="stat-label">Avg Response</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${dept.resolutionRate}</div>
                    <div class="stat-label">Resolution Rate</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${dept.resolutionRate}"></div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function editDepartment(deptId) {
    showToast('Edit department functionality', 'info');
}

function showAddDepartmentModal() {
    showToast('Add department functionality would open department creation form', 'info');
}

// Notifications
function initializeNotifications() {
    const composeBtn = document.getElementById('composeMessageBtn');
    const markAllReadBtn = document.getElementById('markAllReadBtn');
    
    if (composeBtn) {
        composeBtn.addEventListener('click', showComposeModal);
    }
    
    if (markAllReadBtn) {
        markAllReadBtn.addEventListener('click', markAllNotificationsRead);
    }
    
    document.querySelectorAll('.notification-filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.dataset.filter;
            filterNotifications(filter);
            
            // Update active filter button
            document.querySelectorAll('.notification-filters .filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
}

function loadNotifications() {
    displayNotifications(appData.notifications);
    updateNotificationCount();
}

function displayNotifications(notifications) {
    const list = document.getElementById('notificationsList');
    if (!list) return;
    
    list.innerHTML = notifications.map(notif => `
        <div class="notification-item ${notif.read ? '' : 'unread'}" onclick="markNotificationRead(${notif.id})">
            <div class="notification-header">
                <span class="notification-type">${notif.type}</span>
                <span class="notification-time">${notif.timestamp}</span>
            </div>
            <div class="notification-title">${notif.title}</div>
            <div class="notification-message">${notif.message}</div>
        </div>
    `).join('');
}

function filterNotifications(filter) {
    const notifications = filter === 'all' 
        ? appData.notifications 
        : appData.notifications.filter(n => n.type === filter);
    
    displayNotifications(notifications);
}

function markNotificationRead(notifId) {
    const notification = appData.notifications.find(n => n.id === notifId);
    if (notification && !notification.read) {
        notification.read = true;
        saveData();
        loadNotifications();
    }
}

function markAllNotificationsRead() {
    appData.notifications.forEach(n => n.read = true);
    saveData();
    loadNotifications();
    showToast('All notifications marked as read', 'success');
}

function updateNotificationCount() {
    const unreadCount = appData.notifications.filter(n => !n.read).length;
    const badge = document.getElementById('notificationCount');
    if (badge) {
        badge.textContent = unreadCount;
        badge.style.display = unreadCount > 0 ? 'block' : 'none';
    }
}

function showComposeModal() {
    showToast('Compose message functionality', 'info');
}

// Reports
function initializeReports() {
    document.querySelectorAll('.template-card').forEach(card => {
        const button = card.querySelector('button');
        if (button) {
            button.addEventListener('click', (e) => {
                const template = card.dataset.template;
                generateReport(template);
            });
        }
    });
}

function loadReports() {
    loadReportHistory();
}

function loadReportHistory() {
    const historyList = document.getElementById('reportHistory');
    if (!historyList) return;
    
    const reports = [
        { name: 'Daily Summary - Sept 18', date: '2024-09-18' },
        { name: 'Weekly Performance - Week 37', date: '2024-09-16' },
        { name: 'Staff Performance - Sept', date: '2024-09-15' },
        { name: 'Monthly Analytics - August', date: '2024-09-01' }
    ];
    
    historyList.innerHTML = reports.map(report => `
        <div class="history-item">
            <div>
                <div class="history-name">${report.name}</div>
                <div class="history-date">${report.date}</div>
            </div>
            <button class="btn btn--outline btn--sm">Download</button>
        </div>
    `).join('');
}

function generateReport(template) {
    showToast(`Generating ${template} report...`, 'info');
    setTimeout(() => {
        showToast(`${template.charAt(0).toUpperCase() + template.slice(1)} report generated successfully!`, 'success');
        loadReportHistory();
    }, 2000);
}

// Settings
function initializeSettings() {
    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) {
        themeSelect.addEventListener('change', (e) => {
            setTheme(e.target.value);
        });
    }
    
    document.querySelectorAll('.settings-tabs .tab-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tabId = e.target.dataset.tab;
            switchSettingsTab(tabId);
        });
    });
    
    document.querySelectorAll('.settings-content .btn--primary').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tabContent = e.target.closest('.tab-content');
            const tabId = tabContent ? tabContent.id : 'unknown';
            saveSettings(tabId);
        });
    });
}

function switchSettingsTab(tabId) {
    document.querySelectorAll('.settings-tabs .tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.settings-content .tab-content').forEach(content => content.classList.remove('active'));
    
    const targetButton = document.querySelector(`.settings-tabs [data-tab="${tabId}"]`);
    const targetContent = document.getElementById(`${tabId}-settings`);
    
    if (targetButton) targetButton.classList.add('active');
    if (targetContent) targetContent.classList.add('active');
}

function setTheme(theme) {
    if (theme === 'auto') {
        document.documentElement.removeAttribute('data-color-scheme');
    } else {
        document.documentElement.setAttribute('data-color-scheme', theme);
    }
    
    localStorage.setItem('theme', theme);
    showToast(`Theme changed to ${theme}`, 'success');
}

function saveSettings(tabId) {
    const settingsType = tabId.replace('-settings', '');
    showToast(`${settingsType.charAt(0).toUpperCase() + settingsType.slice(1)} settings saved successfully!`, 'success');
}

// Modal Management
function initializeModals() {
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function showModal(modalId) {
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById(modalId);
    
    if (overlay && modal) {
        document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
        modal.style.display = 'block';
        overlay.classList.add('active');
        
        const focusableElements = modal.querySelectorAll('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
        }, 300);
    }
    
    // Reset selections
    selectedStaff = null;
    selectedIssue = null;
}

// Toast Notifications
function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    toast.innerHTML = `
        <div>
            <i class="fas ${getToastIcon(type)}"></i>
        </div>
        <div style="flex: 1;">
            ${message}
        </div>
        <button onclick="this.parentElement.remove()" style="background: none; border: none; cursor: pointer; color: inherit;">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

function getToastIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    return icons[type] || icons.info;
}

// Responsive Design
function initializeResponsive() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
        
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                    sidebar.classList.remove('active');
                }
            }
        });
    }
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && sidebar) {
            sidebar.classList.remove('active');
        }
    });
}

// Load saved theme on page load
(function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme !== 'auto') {
        document.documentElement.setAttribute('data-color-scheme', savedTheme);
    }
})();

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function formatTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

// Export functions for global access
window.viewIssue = viewIssue;
window.editIssue = editIssue;
window.assignStaff = assignStaff;
window.selectCategory = selectCategory;
window.viewStaffProfile = viewStaffProfile;
window.updateStaffStatus = updateStaffStatus;
window.showIssueAssignmentModal = showIssueAssignmentModal;
window.selectStaffForAssignment = selectStaffForAssignment;
window.selectIssueForAssignment = selectIssueForAssignment;
window.switchAssignmentTab = switchAssignmentTab;
window.viewUser = viewUser;
window.editUser = editUser;
window.editDepartment = editDepartment;
window.markNotificationRead = markNotificationRead;
window.showModal = showModal;
window.closeModal = closeModal;