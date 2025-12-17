// Global Variables
let questions = [];
let currentQuiz = null;
let userAnswers = {};
let quizzes = [];

// Dummy Data
const dummyQuizzes = [
    {
        "id": "quiz_1",
        "title": "General Knowledge Quiz",
        "description": "Test your general knowledge with these interesting questions!",
        "questions": [
            {
                "id": "question_1",
                "number": 1,
                "text": "What is the capital of France?",
                "type": "multiple-choice",
                "options": ["London", "Berlin", "Paris", "Madrid"],
                "correctAnswer": [2]
            },
            {
                "id": "question_2",
                "number": 2,
                "text": "Which planet is known as the Red Planet?",
                "type": "multiple-choice",
                "options": ["Venus", "Mars", "Jupiter", "Saturn"],
                "correctAnswer": [1]
            },
            {
                "id": "question_3",
                "number": 3,
                "text": "The Great Wall of China is visible from space.",
                "type": "true-false",
                "options": ["True", "False"],
                "correctAnswer": [1]
            },
            {
                "id": "question_4",
                "number": 4,
                "text": "Who painted the Mona Lisa?",
                "type": "multiple-choice",
                "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                "correctAnswer": [2]
            },
            {
                "id": "question_5",
                "number": 5,
                "text": "Which of the following are programming languages? (Select all that apply)",
                "type": "multiple-answer",
                "options": ["Python", "HTML", "Java", "CSS", "JavaScript"],
                "correctAnswer": [0, 2, 4]
            }
        ],
        "createdAt": "2025-11-26T10:00:00.000Z"
    },
    {
        "id": "quiz_2",
        "title": "JavaScript Basics",
        "description": "Test your knowledge of JavaScript fundamentals",
        "questions": [
            {
                "id": "question_6",
                "number": 1,
                "text": "Which keyword is used to declare a constant in JavaScript?",
                "type": "multiple-choice",
                "options": ["var", "let", "const", "constant"],
                "correctAnswer": [2]
            },
            {
                "id": "question_7",
                "number": 2,
                "text": "JavaScript is a compiled language.",
                "type": "true-false",
                "options": ["True", "False"],
                "correctAnswer": [1]
            },
            {
                "id": "question_8",
                "number": 3,
                "text": "What will 'typeof null' return in JavaScript?",
                "type": "multiple-choice",
                "options": ["null", "undefined", "object", "number"],
                "correctAnswer": [2]
            },
            {
                "id": "question_9",
                "number": 4,
                "text": "Which methods can be used to iterate over an array? (Select all that apply)",
                "type": "multiple-answer",
                "options": ["forEach()", "map()", "filter()", "concat()"],
                "correctAnswer": [0, 1, 2]
            }
        ],
        "createdAt": "2025-11-26T11:30:00.000Z"
    },
    {
        "id": "quiz_3",
        "title": "Science & Nature",
        "description": "Explore the wonders of science and nature",
        "questions": [
            {
                "id": "question_10",
                "number": 1,
                "text": "What is the chemical symbol for gold?",
                "type": "multiple-choice",
                "options": ["Go", "Gd", "Au", "Ag"],
                "correctAnswer": [2]
            },
            {
                "id": "question_11",
                "number": 2,
                "text": "How many bones are in the adult human body?",
                "type": "multiple-choice",
                "options": ["186", "206", "226", "246"],
                "correctAnswer": [1]
            },
            {
                "id": "question_12",
                "number": 3,
                "text": "Water boils at 100°C at sea level.",
                "type": "true-false",
                "options": ["True", "False"],
                "correctAnswer": [0]
            },
            {
                "id": "question_13",
                "number": 4,
                "text": "Which of these are renewable energy sources? (Select all that apply)",
                "type": "multiple-answer",
                "options": ["Solar", "Coal", "Wind", "Natural Gas", "Hydroelectric"],
                "correctAnswer": [0, 2, 4]
            },
            {
                "id": "question_14",
                "number": 5,
                "text": "What is the speed of light in vacuum?",
                "type": "multiple-choice",
                "options": ["300,000 km/s", "150,000 km/s", "450,000 km/s", "200,000 km/s"],
                "correctAnswer": [0]
            }
        ],
        "createdAt": "2025-11-26T14:00:00.000Z"
    },
    {
        "id": "quiz_4",
        "title": "World History",
        "description": "Journey through important historical events",
        "questions": [
            {
                "id": "question_15",
                "number": 1,
                "text": "In which year did World War II end?",
                "type": "multiple-choice",
                "options": ["1943", "1944", "1945", "1946"],
                "correctAnswer": [2]
            },
            {
                "id": "question_16",
                "number": 2,
                "text": "The Roman Empire fell in 476 AD.",
                "type": "true-false",
                "options": ["True", "False"],
                "correctAnswer": [0]
            },
            {
                "id": "question_17",
                "number": 3,
                "text": "Who was the first President of the United States?",
                "type": "multiple-choice",
                "options": ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
                "correctAnswer": [1]
            },
            {
                "id": "question_18",
                "number": 4,
                "text": "Which ancient civilizations built pyramids? (Select all that apply)",
                "type": "multiple-answer",
                "options": ["Egyptians", "Mayans", "Romans", "Aztecs"],
                "correctAnswer": [0, 1, 3]
            }
        ],
        "createdAt": "2025-11-26T16:00:00.000Z"
    },
    {
        "id": "quiz_5",
        "title": "Mathematics Challenge",
        "description": "Put your math skills to the test!",
        "questions": [
            {
                "id": "question_19",
                "number": 1,
                "text": "What is the square root of 144?",
                "type": "multiple-choice",
                "options": ["10", "11", "12", "13"],
                "correctAnswer": [2]
            },
            {
                "id": "question_20",
                "number": 2,
                "text": "Pi (π) is approximately equal to 3.14159.",
                "type": "true-false",
                "options": ["True", "False"],
                "correctAnswer": [0]
            },
            {
                "id": "question_21",
                "number": 3,
                "text": "What is 15% of 200?",
                "type": "multiple-choice",
                "options": ["25", "30", "35", "40"],
                "correctAnswer": [1]
            },
            {
                "id": "question_22",
                "number": 4,
                "text": "A prime number is divisible only by 1 and itself.",
                "type": "true-false",
                "options": ["True", "False"],
                "correctAnswer": [0]
            },
            {
                "id": "question_23",
                "number": 5,
                "text": "Which of these are prime numbers? (Select all that apply)",
                "type": "multiple-answer",
                "options": ["2", "4", "7", "9", "11"],
                "correctAnswer": [0, 2, 4]
            }
        ],
        "createdAt": "2025-11-26T18:00:00.000Z"
    }
];

// Load quizzes from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    loadQuizzes();
    // Auto-load dummy data if no quizzes exist
    if (quizzes.length === 0) {
        loadDummyDataAutomatic();
    }
    initializeApp();
    addLoadDummyDataButton();
});

// Initialize App
function initializeApp() {
    setupTabs();
    setupEventListeners();
    addInitialQuestion();
}

// Setup Tabs Navigation
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');

            // Refresh quiz list when switching to take quiz tab
            if (targetTab === 'take') {
                displayQuizzesList();
            }
        });
    });
}

// Setup Event Listeners
function setupEventListeners() {
    document.getElementById('addQuestionBtn').addEventListener('click', addQuestion);
    document.getElementById('saveQuizBtn').addEventListener('click', saveQuiz);
    document.getElementById('publishQuizBtn').addEventListener('click', publishQuiz);
    document.getElementById('submitQuizBtn').addEventListener('click', submitQuiz);
}

// Add Initial Question
function addInitialQuestion() {
    if (questions.length === 0) {
        addQuestion();
    }
}

// Add Question
function addQuestion() {
    const questionNumber = questions.length + 1;
    const questionId = `question_${Date.now()}`;

    const question = {
        id: questionId,
        number: questionNumber,
        text: '',
        type: 'multiple-choice',
        options: ['', '', '', ''],
        correctAnswer: []
    };

    questions.push(question);
    renderQuestions();
}

// Render Questions
function renderQuestions() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';

    questions.forEach((question, index) => {
        const questionCard = createQuestionCard(question, index);
        container.appendChild(questionCard);
    });
}

// Create Question Card
function createQuestionCard(question, index) {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.innerHTML = `
        <div class="question-header">
            <span class="question-number">Question ${index + 1}</span>
            <div style="display: flex; gap: 10px; align-items: center;">
                <select class="question-type" data-index="${index}">
                    <option value="multiple-choice" ${question.type === 'multiple-choice' ? 'selected' : ''}>Multiple Choice</option>
                    <option value="multiple-answer" ${question.type === 'multiple-answer' ? 'selected' : ''}>Multiple Answer</option>
                    <option value="true-false" ${question.type === 'true-false' ? 'selected' : ''}>True/False</option>
                </select>
                <button class="btn btn-danger" onclick="deleteQuestion(${index})">Delete</button>
            </div>
        </div>
        <input type="text" class="input-field" placeholder="Enter your question..." 
               value="${question.text}" data-index="${index}" data-field="text">
        <div class="options-container" id="options_${index}">
            ${renderOptions(question, index)}
        </div>
        ${question.type !== 'true-false' ? `<button class="add-option-btn" onclick="addOption(${index})">+ Add Option</button>` : ''}
    `;

    // Add event listeners
    card.querySelector('.question-type').addEventListener('change', (e) => {
        handleQuestionTypeChange(index, e.target.value);
    });

    card.querySelector('input[data-field="text"]').addEventListener('input', (e) => {
        questions[index].text = e.target.value;
    });

    return card;
}

// Render Options
function renderOptions(question, questionIndex) {
    if (question.type === 'true-false') {
        return `
            <div class="option-item">
                <input type="radio" name="correct_${questionIndex}" value="0" 
                       ${question.correctAnswer.includes(0) ? 'checked' : ''}
                       onchange="setCorrectAnswer(${questionIndex}, 0, 'single')">
                <label>True</label>
            </div>
            <div class="option-item">
                <input type="radio" name="correct_${questionIndex}" value="1" 
                       ${question.correctAnswer.includes(1) ? 'checked' : ''}
                       onchange="setCorrectAnswer(${questionIndex}, 1, 'single')">
                <label>False</label>
            </div>
        `;
    }

    const inputType = question.type === 'multiple-answer' ? 'checkbox' : 'radio';
    return question.options.map((option, optionIndex) => `
        <div class="option-item">
            <span class="option-label">Option ${optionIndex + 1}:</span>
            <input type="text" class="input-field" placeholder="Enter option..." 
                   value="${option}" 
                   onchange="updateOption(${questionIndex}, ${optionIndex}, this.value)">
            <input type="${inputType}" name="correct_${questionIndex}" value="${optionIndex}" 
                   ${question.correctAnswer.includes(optionIndex) ? 'checked' : ''}
                   onchange="setCorrectAnswer(${questionIndex}, ${optionIndex}, '${question.type}')">
            <span style="color: var(--success-color); font-size: 0.85rem;">Correct</span>
            ${question.options.length > 2 ? `<button class="btn btn-danger" onclick="removeOption(${questionIndex}, ${optionIndex})">×</button>` : ''}
        </div>
    `).join('');
}

// Handle Question Type Change
function handleQuestionTypeChange(index, newType) {
    questions[index].type = newType;
    questions[index].correctAnswer = [];

    if (newType === 'true-false') {
        questions[index].options = ['True', 'False'];
    } else if (questions[index].options.length < 2) {
        questions[index].options = ['', '', '', ''];
    }

    renderQuestions();
}

// Update Option
function updateOption(questionIndex, optionIndex, value) {
    questions[questionIndex].options[optionIndex] = value;
}

// Add Option
function addOption(questionIndex) {
    questions[questionIndex].options.push('');
    renderQuestions();
}

// Remove Option
function removeOption(questionIndex, optionIndex) {
    if (questions[questionIndex].options.length > 2) {
        questions[questionIndex].options.splice(optionIndex, 1);
        // Update correct answers
        const correctAnswers = questions[questionIndex].correctAnswer;
        questions[questionIndex].correctAnswer = correctAnswers
            .filter(ans => ans !== optionIndex)
            .map(ans => ans > optionIndex ? ans - 1 : ans);
        renderQuestions();
    }
}

// Set Correct Answer
function setCorrectAnswer(questionIndex, optionIndex, type) {
    optionIndex = parseInt(optionIndex);
    if (type === 'multiple-answer') {
        const currentAnswers = questions[questionIndex].correctAnswer;
        const answerIndex = currentAnswers.indexOf(optionIndex);
        if (answerIndex > -1) {
            currentAnswers.splice(answerIndex, 1);
        } else {
            currentAnswers.push(optionIndex);
        }
    } else {
        questions[questionIndex].correctAnswer = [optionIndex];
    }
}

// Delete Question
function deleteQuestion(index) {
    if (confirm('Are you sure you want to delete this question?')) {
        questions.splice(index, 1);
        // Renumber remaining questions
        questions.forEach((q, i) => {
            q.number = i + 1;
        });
        renderQuestions();
    }
}

// Save Quiz
function saveQuiz() {
    const title = document.getElementById('quizTitle').value.trim();
    const description = document.getElementById('quizDescription').value.trim();

    if (!title) {
        alert('Please enter a quiz title!');
        return;
    }

    if (questions.length === 0) {
        alert('Please add at least one question!');
        return;
    }

    // Validate questions
    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        if (!q.text.trim()) {
            alert(`Please enter text for question ${i + 1}!`);
            return;
        }
        if (q.type !== 'true-false') {
            const hasEmptyOption = q.options.some(opt => !opt.trim());
            if (hasEmptyOption) {
                alert(`Please fill all options for question ${i + 1}!`);
                return;
            }
        }
        if (q.correctAnswer.length === 0) {
            alert(`Please select correct answer for question ${i + 1}!`);
            return;
        }
    }

    const quiz = {
        id: `quiz_${Date.now()}`,
        title,
        description,
        questions: JSON.parse(JSON.stringify(questions)),
        createdAt: new Date().toISOString()
    };

    quizzes.push(quiz);
    saveQuizzes();

    alert('Quiz saved successfully!');
    resetQuizBuilder();
}

// Publish Quiz
function publishQuiz() {
    saveQuiz();
    // Switch to take quiz tab
    document.querySelector('[data-tab="take"]').click();
}

// Reset Quiz Builder
function resetQuizBuilder() {
    document.getElementById('quizTitle').value = '';
    document.getElementById('quizDescription').value = '';
    questions = [];
    renderQuestions();
    addInitialQuestion();
}

// Save Quizzes to LocalStorage
function saveQuizzes() {
    localStorage.setItem('quizzes', JSON.stringify(quizzes));
}

// Load Quizzes from LocalStorage
function loadQuizzes() {
    const savedQuizzes = localStorage.getItem('quizzes');
    if (savedQuizzes) {
        quizzes = JSON.parse(savedQuizzes);
    }
}

// Display Quizzes List
function displayQuizzesList() {
    const listContainer = document.getElementById('quizzesList');
    
    if (quizzes.length === 0) {
        listContainer.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 20px;">No quizzes available. Create one first!</p>';
        return;
    }

    listContainer.innerHTML = quizzes.map(quiz => `
        <div class="quiz-item" onclick="selectQuiz('${quiz.id}')">
            <h4>${quiz.title}</h4>
            <p>${quiz.questions.length} questions</p>
            ${quiz.description ? `<p style="margin-top: 8px;">${quiz.description}</p>` : ''}
        </div>
    `).join('');
}

// Select Quiz
function selectQuiz(quizId) {
    currentQuiz = quizzes.find(q => q.id === quizId);
    userAnswers = {};

    // Update UI
    document.querySelectorAll('.quiz-item').forEach(item => item.classList.remove('selected'));
    event.target.closest('.quiz-item').classList.add('selected');

    displayQuizTitle();
    displayQuizQuestions();
    document.getElementById('submitQuizBtn').style.display = 'block';
}

// Display Quiz Title
function displayQuizTitle() {
    document.getElementById('displayQuizTitle').textContent = currentQuiz.title;
    document.getElementById('displayQuizDescription').textContent = currentQuiz.description || '';
}

// Display Quiz Questions
function displayQuizQuestions() {
    const container = document.getElementById('quizQuestions');
    
    container.innerHTML = currentQuiz.questions.map((question, index) => `
        <div class="quiz-question">
            <h3>Question ${index + 1}: ${question.text}</h3>
            <div>
                ${question.options.map((option, optionIndex) => {
                    const inputType = question.type === 'multiple-answer' ? 'checkbox' : 'radio';
                    const inputName = `answer_${index}`;
                    return `
                        <div class="quiz-option">
                            <input type="${inputType}" 
                                   name="${inputName}" 
                                   value="${optionIndex}" 
                                   id="q${index}_opt${optionIndex}"
                                   onchange="recordAnswer(${index}, ${optionIndex}, '${question.type}')">
                            <label for="q${index}_opt${optionIndex}">${option}</label>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `).join('');
}

// Record Answer
function recordAnswer(questionIndex, optionIndex, type) {
    optionIndex = parseInt(optionIndex);
    
    if (type === 'multiple-answer') {
        if (!userAnswers[questionIndex]) {
            userAnswers[questionIndex] = [];
        }
        const answerArray = userAnswers[questionIndex];
        const index = answerArray.indexOf(optionIndex);
        if (index > -1) {
            answerArray.splice(index, 1);
        } else {
            answerArray.push(optionIndex);
        }
    } else {
        userAnswers[questionIndex] = [optionIndex];
    }
}

// Submit Quiz
function submitQuiz() {
    if (!currentQuiz) {
        alert('Please select a quiz first!');
        return;
    }

    // Check if all questions are answered
    const unansweredQuestions = [];
    for (let i = 0; i < currentQuiz.questions.length; i++) {
        if (!userAnswers[i] || userAnswers[i].length === 0) {
            unansweredQuestions.push(i + 1);
        }
    }

    if (unansweredQuestions.length > 0) {
        const confirmSubmit = confirm(
            `You haven't answered question(s) ${unansweredQuestions.join(', ')}. Submit anyway?`
        );
        if (!confirmSubmit) return;
    }

    calculateResults();
}

// Calculate Results
function calculateResults() {
    let correctCount = 0;
    const results = [];

    currentQuiz.questions.forEach((question, index) => {
        const userAnswer = userAnswers[index] || [];
        const correctAnswer = question.correctAnswer;
        
        // Sort arrays for comparison
        const userAnswerSorted = [...userAnswer].sort((a, b) => a - b);
        const correctAnswerSorted = [...correctAnswer].sort((a, b) => a - b);
        
        const isCorrect = JSON.stringify(userAnswerSorted) === JSON.stringify(correctAnswerSorted);
        
        if (isCorrect) correctCount++;

        results.push({
            question: question.text,
            userAnswer: userAnswer.map(i => question.options[i]).join(', ') || 'Not answered',
            correctAnswer: correctAnswer.map(i => question.options[i]).join(', '),
            isCorrect
        });
    });

    const percentage = Math.round((correctCount / currentQuiz.questions.length) * 100);

    displayResults(correctCount, currentQuiz.questions.length, percentage, results);
    
    // Switch to results tab
    document.querySelector('[data-tab="results"]').click();
}

// Display Results
function displayResults(correctCount, totalQuestions, percentage, results) {
    const container = document.getElementById('resultsDisplay');
    
    let gradeMessage = '';
    let gradeColor = '';
    
    if (percentage >= 90) {
        gradeMessage = '🎉 Excellent! Outstanding performance!';
        gradeColor = 'var(--success-color)';
    } else if (percentage >= 75) {
        gradeMessage = '👏 Great job! Well done!';
        gradeColor = 'var(--success-color)';
    } else if (percentage >= 60) {
        gradeMessage = '👍 Good effort! Keep practicing!';
        gradeColor = 'var(--warning-color)';
    } else {
        gradeMessage = '📚 Keep studying! You can do better!';
        gradeColor = 'var(--danger-color)';
    }

    container.innerHTML = `
        <div class="score-card">
            <h2>${currentQuiz.title}</h2>
            <div class="score-percentage">${percentage}%</div>
            <p style="font-size: 1.3rem; margin-bottom: 10px;">${correctCount} out of ${totalQuestions} correct</p>
            <p style="font-size: 1.2rem; color: ${gradeColor}; font-weight: 600;">${gradeMessage}</p>
        </div>
        
        <div class="answers-review">
            <h3 style="margin-bottom: 20px; font-size: 1.5rem;">Answer Review:</h3>
            ${results.map((result, index) => `
                <div class="answer-item ${result.isCorrect ? 'correct' : 'incorrect'}">
                    <h4>Question ${index + 1}: ${result.question}</h4>
                    <p><span class="answer-label">Your Answer:</span> ${result.userAnswer}</p>
                    <p><span class="answer-label">Correct Answer:</span> ${result.correctAnswer}</p>
                    <p style="font-weight: 600; color: ${result.isCorrect ? 'var(--success-color)' : 'var(--danger-color)'};">
                        ${result.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </p>
                </div>
            `).join('')}
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
            <button class="btn btn-primary" onclick="retakeQuiz()">Retake Quiz</button>
            <button class="btn btn-secondary" onclick="backToQuizList()">Back to Quiz List</button>
        </div>
    `;
}

// Retake Quiz
function retakeQuiz() {
    userAnswers = {};
    document.querySelector('[data-tab="take"]').click();
    if (currentQuiz) {
        displayQuizQuestions();
    }
}

// Back to Quiz List
function backToQuizList() {
    currentQuiz = null;
    userAnswers = {};
    document.getElementById('quizQuestions').innerHTML = '';
    document.getElementById('submitQuizBtn').style.display = 'none';
    document.querySelectorAll('.quiz-item').forEach(item => item.classList.remove('selected'));
    document.querySelector('[data-tab="take"]').click();
}

// Add Load Dummy Data Button
function addLoadDummyDataButton() {
    const actionButtons = document.querySelector('.action-buttons');
    const loadDataBtn = document.createElement('button');
    loadDataBtn.className = 'btn btn-secondary';
    loadDataBtn.textContent = '📥 Load Sample Quizzes';
    loadDataBtn.id = 'loadDummyDataBtn';
    loadDataBtn.addEventListener('click', loadDummyData);
    actionButtons.appendChild(loadDataBtn);
}

// Load Dummy Data
function loadDummyData() {
    if (confirm(`This will load ${dummyQuizzes.length} sample quizzes. Do you want to continue?`)) {
        quizzes = JSON.parse(JSON.stringify(dummyQuizzes));
        saveQuizzes();
        alert('Sample quizzes loaded successfully! Switch to "Take Quiz" tab to see them.');
        displayQuizzesList();
    }
}

// Load Dummy Data Automatically (without confirmation)
function loadDummyDataAutomatic() {
    quizzes = JSON.parse(JSON.stringify(dummyQuizzes));
    saveQuizzes();
    console.log('Sample quizzes loaded automatically!');
}
