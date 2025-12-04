// Mobile Civic Issue Reporting App - JavaScript

// Application Data
let appData = {
  "currentUser": {
    "name": "Raj Singh",
    "email": "raj446@gmail.com", 
    "phone": "+91-93019-30492",
    "address": "123 Main Street, City Center",
    "avatar": "user-avatar.jpg",
    "issuesReported": 8,
    "issuesResolved": 5,
    "communityImpact": 87,
    "registrationDate": "2024-01-15",
    "preferences": {
      "notifications": true,
      "emailUpdates": true,
      "smsAlerts": false,
      "language": "English",
      "theme": "light"
    }
  },
  "userIssues": [
    {
      "id": "ISS-2024-001",
      "title": "Large pothole on Main Street",
      "category": "Roads",
      "priority": "High", 
      "status": "In Progress",
      "submittedDate": "2024-09-15",
      "location": "Main Street & 5th Avenue",
      "description": "Large pothole causing vehicle damage",
      "photos": ["pothole1.jpg", "pothole2.jpg"],
      "estimatedResolution": "2 days",
      "progress": 75,
      "updates": [
        {"date": "2024-09-15", "status": "Submitted", "message": "Report received and logged"},
        {"date": "2024-09-16", "status": "Under Review", "message": "Assessment team assigned"},
        {"date": "2024-09-17", "status": "In Progress", "message": "Work crew assigned, repair scheduled"}
      ]
    },
    {
      "id": "ISS-2024-002", 
      "title": "Streetlight not working",
      "category": "Utilities",
      "priority": "Medium",
      "status": "Resolved",
      "submittedDate": "2024-09-10",
      "location": "Park Avenue & 3rd Street", 
      "description": "Street light has been out for 3 days",
      "photos": ["streetlight1.jpg"],
      "estimatedResolution": "Completed",
      "progress": 100,
      "updates": [
        {"date": "2024-09-10", "status": "Submitted", "message": "Report received"},
        {"date": "2024-09-11", "status": "In Progress", "message": "Electrician dispatched"},
        {"date": "2024-09-12", "status": "Resolved", "message": "Light bulb replaced and tested"}
      ]
    },
    {
      "id": "ISS-2024-003",
      "title": "Overflowing trash bin", 
      "category": "Environment",
      "priority": "Low",
      "status": "Closed",
      "submittedDate": "2024-09-08",
      "location": "Central Park North Entrance",
      "description": "Trash bin overflowing, attracting pests",
      "photos": ["trash1.jpg"],
      "estimatedResolution": "Completed", 
      "progress": 100,
      "updates": [
        {"date": "2024-09-08", "status": "Submitted", "message": "Report received"},
        {"date": "2024-09-09", "status": "Resolved", "message": "Trash collected and bin cleaned"},
        {"date": "2024-09-12", "status": "Closed", "message": "Added to regular pickup schedule"}
      ]
    }
  ],
  "categories": [
    {"id": "roads", "name": "Roads & Transportation", "icon": "fas fa-road", "color": "#E74C3C", "count": 45, "description": "Road repairs, traffic issues"},
    {"id": "utilities", "name": "Utilities", "icon": "fas fa-bolt", "color": "#3498DB", "count": 32, "description": "Power, water, gas issues"}, 
    {"id": "environment", "name": "Environment", "icon": "fas fa-leaf", "color": "#27AE60", "count": 28, "description": "Waste, pollution, cleanliness"},
    {"id": "safety", "name": "Public Safety", "icon": "fas fa-shield-alt", "color": "#F39C12", "count": 25, "description": "Safety hazards, security"},
    {"id": "parks", "name": "Parks & Recreation", "icon": "fas fa-tree", "color": "#9B59B6", "count": 18, "description": "Parks, playgrounds, facilities"},
    {"id": "emergency", "name": "Emergency", "icon": "fas fa-exclamation-triangle", "color": "#E74C3C", "count": 8, "description": "Urgent safety issues"}
  ],
  "notifications": [
    {
      "id": 1,
      "title": "Issue Update - Pothole Repair", 
      "message": "Your reported pothole on Main Street is now being repaired",
      "type": "update",
      "timestamp": "2 hours ago",
      "read": false,
      "issueId": "ISS-2024-001"
    },
    {
      "id": 2,
      "title": "Issue Resolved - Streetlight Fixed",
      "message": "The streetlight on Park Avenue has been repaired", 
      "type": "resolved",
      "timestamp": "1 day ago", 
      "read": true,
      "issueId": "ISS-2024-002"
    },
    {
      "id": 3,
      "title": "Community Update",
      "message": "New waste collection schedule effective next week",
      "type": "announcement", 
      "timestamp": "3 days ago",
      "read": true,
      "issueId": null
    }
  ],
  "announcements": [
    {
      "id": 1,
      "title": "Road Maintenance Schedule",
      "message": "Planned road maintenance on Main Street from Sept 20-25",
      "date": "2024-09-18",
      "priority": "medium"
    },
    {
      "id": 2, 
      "title": "Water Supply Maintenance",
      "message": "Brief water supply interruption on Sept 22, 2-4 PM",
      "date": "2024-09-17",
      "priority": "high"
    }
  ]
};

// Application State
let currentPage = 'home';
let currentStep = 1;
let reportFormData = {};
let currentFilters = { status: 'all' };
let isVoiceRecording = false;
let selectedPhotos = [];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

async function initializeApp() {
    // Show loading screen
    showLoadingScreen();
    
    // Simulate loading time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Load data from localStorage if available
    loadSavedData();
    
    // Initialize all components
    initializeNavigation();
    initializeSideMenu();
    initializeHomePage();
    initializeReportPage();
    initializeTrackPage();
    initializeProfilePage();
    initializeModals();
    initializeNotifications();
    
    // Hide loading screen and show app
    hideLoadingScreen();
    
    // Show home page by default
    showPage('home');
}

// Loading Screen
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.remove('hidden');
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const appContainer = document.getElementById('appContainer');
    
    if (loadingScreen && appContainer) {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            appContainer.style.display = 'flex';
        }, 500);
    }
}

// Data Management
function loadSavedData() {
    try {
        const savedData = localStorage.getItem('civicAppData');
        if (savedData) {
            const parsed = JSON.parse(savedData);
            appData = { ...appData, ...parsed };
        }
    } catch (error) {
        console.warn('Failed to load saved data:', error);
    }
}

function saveData() {
    try {
        localStorage.setItem('civicAppData', JSON.stringify(appData));
    } catch (error) {
        console.warn('Failed to save data:', error);
    }
}

function saveDraft(formData) {
    try {
        localStorage.setItem('civicAppDraft', JSON.stringify(formData));
        showToast('Draft saved successfully', 'success');
    } catch (error) {
        console.warn('Failed to save draft:', error);
        showToast('Failed to save draft', 'error');
    }
}

function loadDraft() {
    try {
        const draft = localStorage.getItem('civicAppDraft');
        return draft ? JSON.parse(draft) : null;
    } catch (error) {
        console.warn('Failed to load draft:', error);
        return null;
    }
}

function clearDraft() {
    try {
        localStorage.removeItem('civicAppDraft');
    } catch (error) {
        console.warn('Failed to clear draft:', error);
    }
}

// Navigation
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const page = item.dataset.page;
            if (page) {
                showPage(page);
            }
        });
    });
}

function showPage(pageId) {
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeNavItem = document.querySelector(`[data-page="${pageId}"]`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(`${pageId}Page`);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageId;
        
        // Update header title
        updateHeaderTitle(pageId);
        
        // Load page-specific content
        loadPageContent(pageId);
    }
}

function updateHeaderTitle(pageId) {
    const headerTitle = document.getElementById('headerTitle');
    const titles = {
        home: 'CityPortal',
        report: 'Report Issue',
        track: 'My Reports',
        profile: 'Profile'
    };
    
    if (headerTitle && titles[pageId]) {
        headerTitle.textContent = titles[pageId];
    }
}

function loadPageContent(pageId) {
    switch (pageId) {
        case 'home':
            loadHomePage();
            break;
        case 'track':
            loadTrackPage();
            break;
        case 'profile':
            loadProfilePage();
            break;
    }
}

// Side Menu
function initializeSideMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const sideMenuOverlay = document.getElementById('sideMenuOverlay');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            sideMenuOverlay.classList.add('active');
        });
    }
    
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', () => {
            sideMenuOverlay.classList.remove('active');
        });
    }
    
    if (sideMenuOverlay) {
        sideMenuOverlay.addEventListener('click', (e) => {
            if (e.target === sideMenuOverlay) {
                sideMenuOverlay.classList.remove('active');
            }
        });
    }
    
    // Menu item handlers
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const action = item.dataset.action;
            handleMenuAction(action);
            sideMenuOverlay.classList.remove('active');
        });
    });
}

function handleMenuAction(action) {
    switch (action) {
        case 'emergency':
            showToast('Calling emergency services...', 'info');
            break;
        case 'help':
            showToast('Opening help section...', 'info');
            break;
        case 'feedback':
            showToast('Opening feedback form...', 'info');
            break;
        case 'about':
            showToast('About CityPortal v2.1.0', 'info');
            break;
    }
}

// Home Page
function initializeHomePage() {
    const quickReportBtn = document.getElementById('quickReportBtn');
    if (quickReportBtn) {
        quickReportBtn.addEventListener('click', () => {
            showPage('report');
        });
    }
}

function loadHomePage() {
    loadCategoryGrid();
    loadRecentActivity();
    loadCommunityUpdates();
    updateNotificationBadge();
}

function loadCategoryGrid() {
    const categoryGrid = document.getElementById('categoryGrid');
    if (!categoryGrid) return;
    
    categoryGrid.innerHTML = appData.categories.slice(0, 6).map(category => `
        <div class="category-card" data-category="${category.id}">
            <div class="category-icon" style="color: ${category.color};">
                <i class="${category.icon}"></i>
            </div>
            <div class="category-name">${category.name.split(' & ')[0]}</div>
            <div class="category-count">${category.count} reports</div>
        </div>
    `).join('');
    
    // Add click handlers
    categoryGrid.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const categoryId = card.dataset.category;
            const category = appData.categories.find(c => c.id === categoryId);
            if (category) {
                reportFormData.selectedCategory = category;
                showPage('report');
                setTimeout(() => {
                    selectCategoryInForm(category);
                }, 100);
            }
        });
    });
}

function loadRecentActivity() {
    const activityList = document.getElementById('recentActivityList');
    if (!activityList) return;
    
    const recentIssues = appData.userIssues.slice(0, 3);
    
    activityList.innerHTML = recentIssues.map(issue => `
        <div class="activity-item" data-issue-id="${issue.id}">
            <div class="activity-icon" style="background-color: ${getCategoryColor(issue.category)};">
                <i class="${getCategoryIcon(issue.category)}"></i>
            </div>
            <div class="activity-content">
                <div class="activity-title">${issue.title}</div>
                <div class="activity-meta">
                    <span class="issue-status ${issue.status.toLowerCase().replace(/\s+/g, '-')}">${issue.status}</span>
                    <span>${formatDate(issue.submittedDate)}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click handlers
    activityList.querySelectorAll('.activity-item').forEach(item => {
        item.addEventListener('click', () => {
            const issueId = item.dataset.issueId;
            showIssueDetail(issueId);
        });
    });
}

function loadCommunityUpdates() {
    const updatesList = document.getElementById('communityUpdatesList');
    if (!updatesList) return;
    
    updatesList.innerHTML = appData.announcements.map(announcement => `
        <div class="update-item">
            <div class="update-icon" style="background-color: ${announcement.priority === 'high' ? '#E74C3C' : '#3498DB'};">
                <i class="fas fa-bullhorn"></i>
            </div>
            <div class="update-content">
                <div class="update-title">${announcement.title}</div>
                <div class="update-meta">
                    <span>${announcement.message}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Report Page
function initializeReportPage() {
    initializeFormSteps();
    initializeStep1();
    initializeStep2();
    initializeStep3();
    initializeStep4();
}

function initializeFormSteps() {
    // Navigation buttons
    document.getElementById('cancelReportBtn')?.addEventListener('click', cancelReport);
    document.getElementById('step1NextBtn')?.addEventListener('click', () => nextStep(1));
    document.getElementById('step2PrevBtn')?.addEventListener('click', () => prevStep(2));
    document.getElementById('step2NextBtn')?.addEventListener('click', () => nextStep(2));
    document.getElementById('step3PrevBtn')?.addEventListener('click', () => prevStep(3));
    document.getElementById('step3NextBtn')?.addEventListener('click', () => nextStep(3));
    document.getElementById('step4PrevBtn')?.addEventListener('click', () => prevStep(4));
    document.getElementById('saveDraftBtn')?.addEventListener('click', saveReportDraft);
    document.getElementById('submitReportBtn')?.addEventListener('click', submitReport);
}

function initializeStep1() {
    const categorySelectionGrid = document.getElementById('categorySelectionGrid');
    if (!categorySelectionGrid) return;
    
    categorySelectionGrid.innerHTML = appData.categories.map(category => `
        <div class="category-selection-card" data-category-id="${category.id}">
            <div class="category-selection-icon" style="background-color: ${category.color};">
                <i class="${category.icon}"></i>
            </div>
            <div class="category-selection-name">${category.name}</div>
            <div class="category-selection-description">${category.description}</div>
        </div>
    `).join('');
    
    // Add selection handlers
    categorySelectionGrid.querySelectorAll('.category-selection-card').forEach(card => {
        card.addEventListener('click', () => {
            selectCategory(card);
        });
    });
}

function selectCategory(cardElement) {
    // Remove previous selection
    document.querySelectorAll('.category-selection-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selection
    cardElement.classList.add('selected');
    
    const categoryId = cardElement.dataset.categoryId;
    const category = appData.categories.find(c => c.id === categoryId);
    
    if (category) {
        reportFormData.selectedCategory = category;
        document.getElementById('step1NextBtn').disabled = false;
    }
}

function selectCategoryInForm(category) {
    const card = document.querySelector(`[data-category-id="${category.id}"]`);
    if (card) {
        selectCategory(card);
    }
}

function initializeStep2() {
    const issueTitle = document.getElementById('issueTitle');
    const issueDescription = document.getElementById('issueDescription');
    const charCount = document.getElementById('charCount');
    const voiceRecordBtn = document.getElementById('voiceRecordBtn');
    
    // Character counter
    if (issueDescription && charCount) {
        issueDescription.addEventListener('input', () => {
            const count = issueDescription.value.length;
            charCount.textContent = count;
            
            if (count > 500) {
                charCount.style.color = '#E74C3C';
                issueDescription.value = issueDescription.value.substring(0, 500);
                charCount.textContent = 500;
            } else {
                charCount.style.color = 'var(--color-text-secondary)';
            }
        });
    }
    
    // Voice recording
    if (voiceRecordBtn) {
        voiceRecordBtn.addEventListener('click', toggleVoiceRecording);
    }
    
    // Priority selection
    document.querySelectorAll('input[name="priority"]').forEach(radio => {
        radio.addEventListener('change', () => {
            reportFormData.priority = radio.value;
        });
    });
}

function toggleVoiceRecording() {
    const voiceBtn = document.getElementById('voiceRecordBtn');
    const voiceWaveform = document.getElementById('voiceWaveform');
    
    if (!isVoiceRecording) {
        // Start recording
        isVoiceRecording = true;
        voiceBtn.classList.add('recording');
        voiceBtn.innerHTML = '<i class="fas fa-stop"></i><span>Stop Recording</span>';
        voiceWaveform.style.display = 'flex';
        showToast('Voice recording started', 'info');
        
        // Simulate recording duration
        setTimeout(() => {
            if (isVoiceRecording) {
                toggleVoiceRecording();
            }
        }, 10000); // Auto-stop after 10 seconds
    } else {
        // Stop recording
        isVoiceRecording = false;
        voiceBtn.classList.remove('recording');
        voiceBtn.innerHTML = '<i class="fas fa-microphone"></i><span>Record Voice Note</span>';
        voiceWaveform.style.display = 'none';
        reportFormData.hasVoiceNote = true;
        showToast('Voice recording saved', 'success');
    }
}

function initializeStep3() {
    const detectLocationBtn = document.getElementById('detectLocationBtn');
    const manualLocation = document.getElementById('manualLocation');
    const takePotoBtn = document.getElementById('takePotoBtn');
    const choosePhotoBtn = document.getElementById('choosePhotoBtn');
    
    if (detectLocationBtn) {
        detectLocationBtn.addEventListener('click', detectLocation);
    }
    
    if (manualLocation) {
        manualLocation.addEventListener('input', () => {
            reportFormData.location = manualLocation.value;
        });
    }
    
    if (takePotoBtn) {
        takePotoBtn.addEventListener('click', () => simulatePhotoCapture('camera'));
    }
    
    if (choosePhotoBtn) {
        choosePhotoBtn.addEventListener('click', () => simulatePhotoCapture('gallery'));
    }
}

function detectLocation() {
    const detectBtn = document.getElementById('detectLocationBtn');
    const locationAccuracy = document.getElementById('locationAccuracy');
    const manualLocation = document.getElementById('manualLocation');
    
    detectBtn.disabled = true;
    detectBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Detecting...</span>';
    
    // Simulate GPS detection
    setTimeout(() => {
        const mockLocation = "123 Main Street, City Center";
        manualLocation.value = mockLocation;
        reportFormData.location = mockLocation;
        reportFormData.coordinates = { lat: 40.7128, lng: -74.0060 };
        
        detectBtn.disabled = false;
        detectBtn.innerHTML = '<i class="fas fa-location-arrow"></i><span>Use Current Location</span>';
        locationAccuracy.style.display = 'flex';
        
        showToast('Location detected successfully', 'success');
    }, 2000);
}

function simulatePhotoCapture(source) {
    if (selectedPhotos.length >= 5) {
        showToast('Maximum 5 photos allowed', 'warning');
        return;
    }
    
    showToast(`${source === 'camera' ? 'Taking' : 'Selecting'} photo...`, 'info');
    
    setTimeout(() => {
        const photoId = `photo_${Date.now()}`;
        const photo = {
            id: photoId,
            name: `photo_${selectedPhotos.length + 1}.jpg`,
            source: source
        };
        
        selectedPhotos.push(photo);
        updatePhotoPreview();
        showToast('Photo added successfully', 'success');
    }, 1000);
}

function updatePhotoPreview() {
    const photoGrid = document.getElementById('photoPreviewGrid');
    if (!photoGrid) return;
    
    photoGrid.innerHTML = selectedPhotos.map(photo => `
        <div class="photo-preview">
            <div class="photo-preview-placeholder">
                <i class="fas fa-image"></i>
            </div>
            <button class="photo-remove" onclick="removePhoto('${photo.id}')">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
}

function removePhoto(photoId) {
    selectedPhotos = selectedPhotos.filter(photo => photo.id !== photoId);
    updatePhotoPreview();
    showToast('Photo removed', 'info');
}

function initializeStep4() {
    // Contact preferences will be handled in the step navigation
}

function nextStep(currentStepNum) {
    if (validateStep(currentStepNum)) {
        collectStepData(currentStepNum);
        showStep(currentStepNum + 1);
        updateProgress(currentStepNum + 1);
    }
}

function prevStep(currentStepNum) {
    showStep(currentStepNum - 1);
    updateProgress(currentStepNum - 1);
}

function validateStep(stepNum) {
    switch (stepNum) {
        case 1:
            if (!reportFormData.selectedCategory) {
                showToast('Please select a category', 'warning');
                return false;
            }
            return true;
        case 2:
            const title = document.getElementById('issueTitle').value.trim();
            const description = document.getElementById('issueDescription').value.trim();
            const priority = document.querySelector('input[name="priority"]:checked');
            
            if (!title) {
                showToast('Please enter issue title', 'warning');
                return false;
            }
            if (!description) {
                showToast('Please enter issue description', 'warning');
                return false;
            }
            if (!priority) {
                showToast('Please select priority level', 'warning');
                return false;
            }
            return true;
        case 3:
            if (!reportFormData.location) {
                showToast('Please provide location information', 'warning');
                return false;
            }
            return true;
        case 4:
            const acceptTerms = document.getElementById('acceptTerms').checked;
            if (!acceptTerms) {
                showToast('Please accept terms and conditions', 'warning');
                return false;
            }
            return true;
        default:
            return true;
    }
}

function collectStepData(stepNum) {
    switch (stepNum) {
        case 2:
            reportFormData.title = document.getElementById('issueTitle').value.trim();
            reportFormData.description = document.getElementById('issueDescription').value.trim();
            reportFormData.priority = document.querySelector('input[name="priority"]:checked').value;
            reportFormData.anonymous = document.getElementById('anonymousReport').checked;
            break;
        case 3:
            reportFormData.photos = [...selectedPhotos];
            break;
        case 4:
            const contactMethods = [];
            document.querySelectorAll('input[name="contact"]:checked').forEach(cb => {
                contactMethods.push(cb.value);
            });
            reportFormData.contactMethods = contactMethods;
            break;
    }
    
    // Update review section if on step 4
    if (stepNum === 3) {
        updateReviewSection();
    }
}

function showStep(stepNum) {
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });
    
    const targetStep = document.getElementById(`step${stepNum}`);
    if (targetStep) {
        targetStep.classList.add('active');
        currentStep = stepNum;
    }
}

function updateProgress(stepNum) {
    const progressFill = document.getElementById('progressFill');
    const steps = document.querySelectorAll('.step');
    
    // Update progress bar
    if (progressFill) {
        const progressPercent = ((stepNum - 1) / 3) * 100;
        progressFill.style.width = `${progressPercent}%`;
    }
    
    // Update step indicators
    steps.forEach((step, index) => {
        const stepIndex = index + 1;
        step.classList.remove('active', 'completed');
        
        if (stepIndex === stepNum) {
            step.classList.add('active');
        } else if (stepIndex < stepNum) {
            step.classList.add('completed');
        }
    });
}

function updateReviewSection() {
    document.getElementById('reviewCategory').textContent = reportFormData.selectedCategory?.name || '-';
    document.getElementById('reviewTitle').textContent = reportFormData.title || '-';
    document.getElementById('reviewPriority').textContent = reportFormData.priority || '-';
    document.getElementById('reviewDescription').textContent = reportFormData.description || '-';
    document.getElementById('reviewLocation').textContent = reportFormData.location || '-';
    
    const reviewPhotos = document.getElementById('reviewPhotos');
    if (selectedPhotos.length > 0) {
        reviewPhotos.textContent = `${selectedPhotos.length} photo(s) attached`;
    } else {
        reviewPhotos.textContent = 'No photos attached';
    }
}

function cancelReport() {
    showConfirmModal(
        'Cancel Report?',
        'Are you sure you want to cancel? All entered data will be lost.',
        () => {
            resetReportForm();
            showPage('home');
        }
    );
}

function saveReportDraft() {
    collectStepData(currentStep);
    saveDraft(reportFormData);
}

function submitReport() {
    collectStepData(4);
    
    // Create new issue
    const newIssue = {
        id: `ISS-2024-${String(appData.userIssues.length + 4).padStart(3, '0')}`,
        title: reportFormData.title,
        category: reportFormData.selectedCategory.name,
        priority: reportFormData.priority,
        status: 'Open',
        submittedDate: new Date().toISOString().split('T')[0],
        location: reportFormData.location,
        description: reportFormData.description,
        photos: reportFormData.photos.map(p => p.name),
        estimatedResolution: 'TBD',
        progress: 0,
        updates: [
            {
                date: new Date().toISOString().split('T')[0],
                status: 'Submitted',
                message: 'Report received and logged'
            }
        ]
    };
    
    // Add to user issues
    appData.userIssues.unshift(newIssue);
    appData.currentUser.issuesReported += 1;
    
    // Save data
    saveData();
    clearDraft();
    
    // Reset form
    resetReportForm();
    
    // Show success and navigate
    showToast('Report submitted successfully!', 'success');
    setTimeout(() => {
        showPage('track');
    }, 2000);
}

function resetReportForm() {
    reportFormData = {};
    selectedPhotos = [];
    currentStep = 1;
    
    // Reset form elements
    document.getElementById('issueTitle').value = '';
    document.getElementById('issueDescription').value = '';
    document.getElementById('charCount').textContent = '0';
    document.getElementById('manualLocation').value = '';
    document.getElementById('acceptTerms').checked = false;
    document.getElementById('anonymousReport').checked = false;
    
    // Reset priority selection
    document.querySelectorAll('input[name="priority"]').forEach(radio => {
        radio.checked = false;
    });
    
    // Reset category selection
    document.querySelectorAll('.category-selection-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Reset steps
    showStep(1);
    updateProgress(1);
    updatePhotoPreview();
    
    document.getElementById('step1NextBtn').disabled = true;
    document.getElementById('locationAccuracy').style.display = 'none';
}

// Track Page
function initializeTrackPage() {
    const filterToggleBtn = document.getElementById('filterToggleBtn');
    const filterPanel = document.getElementById('filterPanel');
    const searchInput = document.getElementById('searchIssues');
    
    if (filterToggleBtn && filterPanel) {
        filterToggleBtn.addEventListener('click', () => {
            filterPanel.classList.toggle('active');
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentFilters.search = e.target.value;
            filterIssues();
        });
    }
    
    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            
            const filter = e.target.dataset.filter;
            currentFilters.status = filter;
            filterIssues();
        });
    });
}

function loadTrackPage() {
    displayIssues(appData.userIssues);
}

function displayIssues(issues) {
    const issuesList = document.getElementById('issuesList');
    const emptyState = document.getElementById('emptyState');
    
    if (!issuesList || !emptyState) return;
    
    if (issues.length === 0) {
        issuesList.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }
    
    issuesList.style.display = 'block';
    emptyState.style.display = 'none';
    
    issuesList.innerHTML = issues.map(issue => `
        <div class="issue-card" data-issue-id="${issue.id}">
            <div class="issue-header">
                <div class="issue-id">${issue.id}</div>
                <div class="issue-status ${issue.status.toLowerCase().replace(/\s+/g, '-')}">${issue.status}</div>
            </div>
            <div class="issue-title">${issue.title}</div>
            <div class="issue-meta">
                <div class="issue-meta-item">
                    <i class="${getCategoryIcon(issue.category)}"></i>
                    <span>${issue.category}</span>
                </div>
                <div class="issue-meta-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${issue.location}</span>
                </div>
                <div class="issue-meta-item">
                    <i class="fas fa-calendar"></i>
                    <span>${formatDate(issue.submittedDate)}</span>
                </div>
            </div>
            ${issue.status !== 'Closed' ? `
                <div class="issue-progress">
                    <div class="progress-label">Progress: ${issue.progress}%</div>
                    <div class="progress-bar-small">
                        <div class="progress-fill-small" style="width: ${issue.progress}%"></div>
                    </div>
                </div>
            ` : ''}
        </div>
    `).join('');
    
    // Add click handlers
    issuesList.querySelectorAll('.issue-card').forEach(card => {
        card.addEventListener('click', () => {
            const issueId = card.dataset.issueId;
            showIssueDetail(issueId);
        });
    });
}

function filterIssues() {
    let filteredIssues = [...appData.userIssues];
    
    // Filter by status
    if (currentFilters.status !== 'all') {
        filteredIssues = filteredIssues.filter(issue => 
            issue.status === currentFilters.status
        );
    }
    
    // Filter by search
    if (currentFilters.search) {
        const search = currentFilters.search.toLowerCase();
        filteredIssues = filteredIssues.filter(issue => 
            issue.title.toLowerCase().includes(search) ||
            issue.description.toLowerCase().includes(search) ||
            issue.location.toLowerCase().includes(search) ||
            issue.category.toLowerCase().includes(search)
        );
    }
    
    displayIssues(filteredIssues);
}

function showIssueDetail(issueId) {
    const issue = appData.userIssues.find(i => i.id === issueId);
    if (!issue) return;
    
    const modalContent = document.getElementById('issueDetailContent');
    if (!modalContent) return;
    
    modalContent.innerHTML = `
        <div class="issue-detail-header">
            <div class="issue-detail-id">${issue.id}</div>
            <div class="issue-status ${issue.status.toLowerCase().replace(/\s+/g, '-')}">${issue.status}</div>
        </div>
        
        <div class="issue-detail-section">
            <h4>${issue.title}</h4>
            <p><strong>Category:</strong> ${issue.category}</p>
            <p><strong>Priority:</strong> ${issue.priority}</p>
            <p><strong>Location:</strong> ${issue.location}</p>
            <p><strong>Submitted:</strong> ${formatDate(issue.submittedDate)}</p>
            <p><strong>Description:</strong></p>
            <p>${issue.description}</p>
        </div>
        
        ${issue.photos.length > 0 ? `
            <div class="issue-detail-section">
                <h4>Photos</h4>
                <div class="issue-photos">
                    ${issue.photos.map(photo => `
                        <div class="issue-photo">
                            <i class="fas fa-image"></i>
                            <span>${photo}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}
        
        <div class="issue-detail-section">
            <h4>Progress Timeline</h4>
            <div class="timeline">
                ${issue.updates.map(update => `
                    <div class="timeline-item">
                        <div class="timeline-date">${formatDate(update.date)}</div>
                        <div class="timeline-status">${update.status}</div>
                        <div class="timeline-message">${update.message}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        ${issue.status !== 'Closed' ? `
            <div class="issue-detail-section">
                <div class="progress-section">
                    <h4>Current Progress</h4>
                    <div class="progress-bar-large">
                        <div class="progress-fill-large" style="width: ${issue.progress}%"></div>
                    </div>
                    <div class="progress-text">${issue.progress}% Complete</div>
                </div>
            </div>
        ` : ''}
    `;
    
    showModal('issueDetailModal');
}

// Profile Page
function initializeProfilePage() {
    const editPersonalBtn = document.getElementById('editPersonalBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const themeSelect = document.getElementById('themeSelect');
    
    if (editPersonalBtn) {
        editPersonalBtn.addEventListener('click', () => {
            showToast('Edit profile functionality', 'info');
        });
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            showConfirmModal(
                'Logout?',
                'Are you sure you want to logout?',
                () => {
                    showToast('Logging out...', 'info');
                    setTimeout(() => {
                        location.reload();
                    }, 1000);
                }
            );
        });
    }
    
    if (themeSelect) {
        themeSelect.value = appData.currentUser.preferences.theme;
        themeSelect.addEventListener('change', (e) => {
            const theme = e.target.value;
            setTheme(theme);
            appData.currentUser.preferences.theme = theme;
            saveData();
        });
    }
    
    // Toggle switches
    document.querySelectorAll('.toggle-switch input[type="checkbox"]').forEach(toggle => {
        toggle.addEventListener('change', (e) => {
            const prefName = e.target.id;
            const value = e.target.checked;
            
            switch (prefName) {
                case 'pushNotifications':
                    appData.currentUser.preferences.notifications = value;
                    break;
                case 'emailUpdates':
                    appData.currentUser.preferences.emailUpdates = value;
                    break;
                case 'smsAlerts':
                    appData.currentUser.preferences.smsAlerts = value;
                    break;
            }
            
            saveData();
            showToast(`${prefName} ${value ? 'enabled' : 'disabled'}`, 'success');
        });
    });
}

function loadProfilePage() {
    // Load user preferences
    document.getElementById('pushNotifications').checked = appData.currentUser.preferences.notifications;
    document.getElementById('emailUpdates').checked = appData.currentUser.preferences.emailUpdates;
    document.getElementById('smsAlerts').checked = appData.currentUser.preferences.smsAlerts;
}

function setTheme(theme) {
    if (theme === 'auto') {
        document.documentElement.removeAttribute('data-color-scheme');
    } else {
        document.documentElement.setAttribute('data-color-scheme', theme);
    }
}

// Modal Management
function initializeModals() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalCloses = document.querySelectorAll('.modal-close');
    const closeDetailBtn = document.getElementById('closeDetailBtn');
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                hideModal();
            }
        });
    }
    
    modalCloses.forEach(closeBtn => {
        closeBtn.addEventListener('click', hideModal);
    });
    
    if (closeDetailBtn) {
        closeDetailBtn.addEventListener('click', hideModal);
    }
    
    // Confirmation modal buttons
    document.getElementById('confirmCancelBtn')?.addEventListener('click', hideModal);
}

function showModal(modalId) {
    const modalOverlay = document.getElementById('modalOverlay');
    const modal = document.getElementById(modalId);
    
    if (modalOverlay && modal) {
        document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
        modal.style.display = 'block';
        modalOverlay.classList.add('active');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
}

function hideModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        setTimeout(() => {
            document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
        }, 300);
    }
}

function showConfirmModal(title, message, onConfirm) {
    document.getElementById('confirmTitle').textContent = title;
    document.getElementById('confirmMessage').textContent = message;
    
    const confirmBtn = document.getElementById('confirmActionBtn');
    confirmBtn.onclick = () => {
        hideModal();
        if (onConfirm) onConfirm();
    };
    
    showModal('confirmModal');
}

// Notifications
function initializeNotifications() {
    const notificationBtn = document.getElementById('notificationBtn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', () => {
            showToast('Notifications panel would open here', 'info');
        });
    }
    
    updateNotificationBadge();
}

function updateNotificationBadge() {
    const badge = document.getElementById('notificationBadge');
    const unreadCount = appData.notifications.filter(n => !n.read).length;
    
    if (badge) {
        badge.textContent = unreadCount;
        badge.style.display = unreadCount > 0 ? 'block' : 'none';
    }
}

// Toast Notifications
function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="fas ${icons[type] || icons.info}"></i>
        </div>
        <div class="toast-content">${message}</div>
        <button class="toast-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(toast);
    
    // Trigger show animation
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Auto remove
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentElement) {
                toast.remove();
            }
        }, 300);
    }, duration);
}

// Utility Functions
function getCategoryIcon(categoryName) {
    const category = appData.categories.find(c => 
        c.name.toLowerCase().includes(categoryName.toLowerCase())
    );
    return category ? category.icon : 'fas fa-circle';
}

function getCategoryColor(categoryName) {
    const category = appData.categories.find(c => 
        c.name.toLowerCase().includes(categoryName.toLowerCase())
    );
    return category ? category.color : '#3498DB';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
        return 'Today';
    } else if (diffDays === 2) {
        return 'Yesterday';
    } else if (diffDays <= 7) {
        return `${diffDays - 1} days ago`;
    } else {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }
}

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const overlay = document.getElementById('modalOverlay');
        if (overlay && overlay.classList.contains('active')) {
            hideModal();
        }
        
        const sideMenu = document.getElementById('sideMenuOverlay');
        if (sideMenu && sideMenu.classList.contains('active')) {
            sideMenu.classList.remove('active');
        }
    }
});

// Handle browser back button
window.addEventListener('popstate', (e) => {
    if (currentPage !== 'home') {
        showPage('home');
    }
});

// Service Worker registration (for offline functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(() => {
            console.log('Service Worker registered');
        }).catch(() => {
            console.log('Service Worker registration failed');
        });
    });
}

// Handle online/offline status
window.addEventListener('online', () => {
    showToast('Connection restored', 'success');
});

window.addEventListener('offline', () => {
    showToast('Working offline', 'info');
});

// Auto-save draft every 30 seconds when reporting
setInterval(() => {
    if (currentPage === 'report' && Object.keys(reportFormData).length > 0) {
        saveDraft(reportFormData);
    }
}, 30000);

// Global functions for inline event handlers
window.removePhoto = removePhoto;