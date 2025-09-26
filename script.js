// Quiz data with questions for all three languages
const quizData = {
    python: [
        {
            question: "What is the output of: print(type([]))",
            options: ["<class 'list'>", "<class 'array'>", "<class 'tuple'>", "<class 'dict'>"],
            correct: 0,
            explanation: "[] creates a list in Python, so type([]) returns <class 'list'>"
        },
        {
            question: "Which of the following is used to create a function in Python?",
            options: ["function", "def", "create", "func"],
            correct: 1,
            explanation: "'def' is the keyword used to define functions in Python"
        },
        {
            question: "What does the 'len()' function return for the string 'Hello'?",
            options: ["4", "5", "6", "Error"],
            correct: 1,
            explanation: "len('Hello') returns 5 because the string has 5 characters"
        },
        {
            question: "Which operator is used for exponentiation in Python?",
            options: ["^", "**", "exp", "pow"],
            correct: 1,
            explanation: "** is the exponentiation operator in Python (e.g., 2**3 = 8)"
        },
        {
            question: "What is the correct way to import the entire math module?",
            options: ["import math", "from math import *", "include math", "using math"],
            correct: 0,
            explanation: "'import math' is the standard way to import the entire math module"
        },
        {
            question: "What does 'list[1:3]' return for list = [0,1,2,3,4]?",
            options: ["[1,2]", "[1,2,3]", "[0,1,2]", "[2,3]"],
            correct: 0,
            explanation: "Slicing [1:3] returns elements at index 1 and 2, which are [1,2]"
        },
        {
            question: "Which method is used to add an element to the end of a list?",
            options: ["add()", "append()", "insert()", "push()"],
            correct: 1,
            explanation: "append() method adds an element to the end of a list"
        },
        {
            question: "What is the output of: print('Python'[0])",
            options: ["P", "Py", "0", "Error"],
            correct: 0,
            explanation: "String indexing starts at 0, so 'Python'[0] returns 'P'"
        },
        {
            question: "Which keyword is used to handle exceptions in Python?",
            options: ["catch", "except", "handle", "error"],
            correct: 1,
            explanation: "'except' is used with try blocks to handle exceptions in Python"
        },
        {
            question: "What does the 'range(3)' function generate?",
            options: ["[1,2,3]", "[0,1,2]", "[0,1,2,3]", "[1,2]"],
            correct: 1,
            explanation: "range(3) generates numbers from 0 to 2 (excluding 3): [0,1,2]"
        }
    ],
    java: [
        {
            question: "Which of the following is the correct way to declare a main method in Java?",
            options: ["public static void main(String args)", "public static void main(String[] args)", "static public void main(String[] args)", "Both B and C"],
            correct: 3,
            explanation: "Both 'public static void main(String[] args)' and 'static public void main(String[] args)' are correct"
        },
        {
            question: "What is the size of an int in Java?",
            options: ["16 bits", "32 bits", "64 bits", "128 bits"],
            correct: 1,
            explanation: "An int in Java is always 32 bits (4 bytes)"
        },
        {
            question: "Which keyword is used to inherit a class in Java?",
            options: ["inherits", "extends", "implements", "super"],
            correct: 1,
            explanation: "'extends' keyword is used for class inheritance in Java"
        },
        {
            question: "What does the 'final' keyword prevent in Java?",
            options: ["Inheritance", "Method overriding", "Variable modification", "All of the above"],
            correct: 3,
            explanation: "'final' prevents inheritance (classes), overriding (methods), and modification (variables)"
        },
        {
            question: "Which collection class allows duplicate elements?",
            options: ["Set", "ArrayList", "HashSet", "TreeSet"],
            correct: 1,
            explanation: "ArrayList allows duplicate elements, while Set implementations don't"
        },
        {
            question: "What is the output of: System.out.println(5/2);",
            options: ["2.5", "2", "3", "Error"],
            correct: 1,
            explanation: "Integer division in Java truncates the decimal part, so 5/2 = 2"
        },
        {
            question: "Which access modifier makes a member accessible only within the same class?",
            options: ["public", "protected", "private", "default"],
            correct: 2,
            explanation: "'private' access modifier restricts access to the same class only"
        },
        {
            question: "What is the correct way to create an array in Java?",
            options: ["int arr[] = new int[5];", "int[] arr = new int[5];", "int arr[5];", "Both A and B"],
            correct: 3,
            explanation: "Both 'int arr[] = new int[5];' and 'int[] arr = new int[5];' are correct"
        },
        {
            question: "Which method is called when an object is created?",
            options: ["main()", "start()", "constructor", "init()"],
            correct: 2,
            explanation: "Constructor method is automatically called when an object is created"
        },
        {
            question: "What does 'static' mean in Java?",
            options: ["Cannot be changed", "Belongs to class, not instance", "Private access", "Final value"],
            correct: 1,
            explanation: "'static' means the member belongs to the class rather than any instance"
        }
    ],
    javascript: [
        {
            question: "What is the correct way to declare a variable in JavaScript (ES6)?",
            options: ["var x = 5;", "let x = 5;", "const x = 5;", "All of the above"],
            correct: 3,
            explanation: "var, let, and const are all valid ways to declare variables in JavaScript"
        },
        {
            question: "Which method is used to add elements to the end of an array?",
            options: ["push()", "add()", "append()", "insert()"],
            correct: 0,
            explanation: "push() method adds elements to the end of an array in JavaScript"
        },
        {
            question: "What does '===' operator do in JavaScript?",
            options: ["Assignment", "Equality without type conversion", "Equality with type conversion", "Not equal"],
            correct: 1,
            explanation: "'===' performs strict equality comparison without type conversion"
        },
        {
            question: "What is the output of: console.log(typeof null);",
            options: ["null", "undefined", "object", "boolean"],
            correct: 2,
            explanation: "typeof null returns 'object' in JavaScript (this is a known quirk)"
        },
        {
            question: "Which method is used to remove the last element from an array?",
            options: ["pop()", "shift()", "splice()", "delete()"],
            correct: 0,
            explanation: "pop() method removes and returns the last element of an array"
        },
        {
            question: "What is the correct way to write a JavaScript function?",
            options: ["function myFunc() {}", "myFunc() = function {}", "function = myFunc() {}", "def myFunc() {}"],
            correct: 0,
            explanation: "'function myFunc() {}' is the correct syntax for function declaration"
        },
        {
            question: "Which event occurs when a user clicks on an HTML element?",
            options: ["onchange", "onclick", "onmouseclick", "onselect"],
            correct: 1,
            explanation: "'onclick' event is triggered when a user clicks on an HTML element"
        },
        {
            question: "What does the 'isNaN()' function check for?",
            options: ["If value is null", "If value is not a number", "If value is negative", "If value is undefined"],
            correct: 1,
            explanation: "isNaN() function checks if a value is Not-a-Number (NaN)"
        },
        {
            question: "Which method converts a string to lowercase?",
            options: ["toLowerCase()", "lower()", "toLower()", "lowerCase()"],
            correct: 0,
            explanation: "toLowerCase() method converts a string to lowercase letters"
        },
        {
            question: "What is the output of: console.log(1 + '2' + 3);",
            options: ["6", "123", "15", "Error"],
            correct: 1,
            explanation: "1 + '2' becomes '12' (string concatenation), then + 3 becomes '123'"
        }
    ]
};

// Quiz state variables
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timer;
let selectedCategory = 'all';
let userAnswers = [];
let categoryScores = { python: 0, java: 0, javascript: 0 };
let totalQuestions = { python: 0, java: 0, javascript: 0 };

// DOM elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const reviewScreen = document.getElementById('review-screen');

const categoryButtons = document.querySelectorAll('.category-btn');
const startQuizBtn = document.getElementById('start-quiz');
const nextQuestionBtn = document.getElementById('next-question');
const restartQuizBtn = document.getElementById('restart-quiz');
const reviewAnswersBtn = document.getElementById('review-answers');
const backToResultsBtn = document.getElementById('back-to-results');

const questionText = document.getElementById('question-text');
const questionCategory = document.getElementById('question-category');
const optionButtons = document.querySelectorAll('.option-btn');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const timeLeftSpan = document.getElementById('time-left');
const currentScoreSpan = document.getElementById('current-score');
const progressFill = document.querySelector('.progress-fill');
const timerCircle = document.querySelector('.timer-circle');

const finalScoreSpan = document.getElementById('final-score');
const totalScoreSpan = document.getElementById('total-score');
const percentageSpan = document.getElementById('percentage');
const performanceText = document.getElementById('performance-text');
const pythonScoreSpan = document.getElementById('python-score');
const javaScoreSpan = document.getElementById('java-score');
const javascriptScoreSpan = document.getElementById('javascript-score');

const reviewList = document.getElementById('review-list');

// Initialize the quiz application
function initQuiz() {
    // Add event listeners
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', selectCategory);
    });

    startQuizBtn.addEventListener('click', startQuiz);
    nextQuestionBtn.addEventListener('click', nextQuestion);
    restartQuizBtn.addEventListener('click', restartQuiz);
    reviewAnswersBtn.addEventListener('click', showReviewScreen);
    backToResultsBtn.addEventListener('click', showResultsScreen);

    optionButtons.forEach(btn => {
        btn.addEventListener('click', selectOption);
    });

    // Set default category selection
    categoryButtons[0].classList.add('selected');
}

// Category selection handler
function selectCategory(e) {
    categoryButtons.forEach(btn => btn.classList.remove('selected'));
    e.target.classList.add('selected');
    selectedCategory = e.target.dataset.category;
}

// Start the quiz
function startQuiz() {
    // Prepare quiz questions based on selected category
    prepareQuiz();
    
    // Reset quiz state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    categoryScores = { python: 0, java: 0, javascript: 0 };
    
    // Update UI elements
    totalQuestionsSpan.textContent = currentQuiz.length;
    currentScoreSpan.textContent = score;
    
    // Show quiz screen and load first question
    showScreen('quiz');
    loadQuestion();
    startTimer();
}

// Prepare quiz questions based on selected category
function prepareQuiz() {
    currentQuiz = [];
    totalQuestions = { python: 0, java: 0, javascript: 0 };
    
    if (selectedCategory === 'all') {
        // Add all questions from all categories
        Object.keys(quizData).forEach(category => {
            quizData[category].forEach(question => {
                currentQuiz.push({
                    ...question,
                    category: category
                });
                totalQuestions[category]++;
            });
        });
    } else {
        // Add questions from selected category only
        quizData[selectedCategory].forEach(question => {
            currentQuiz.push({
                ...question,
                category: selectedCategory
            });
            totalQuestions[selectedCategory]++;
        });
    }
    
    // Shuffle questions for randomization
    shuffleArray(currentQuiz);
}

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Load current question
function loadQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    
    // Update question display
    questionText.textContent = question.question;
    questionCategory.textContent = question.category.charAt(0).toUpperCase() + question.category.slice(1);
    questionCategory.className = `category-tag ${question.category}`;
    
    // Update options
    optionButtons.forEach((btn, index) => {
        const optionText = btn.querySelector('.option-text');
        optionText.textContent = question.options[index];
        btn.classList.remove('selected', 'correct', 'incorrect');
        btn.disabled = false;
    });
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / currentQuiz.length) * 100;
    progressFill.style.width = `${progress}%`;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    
    // Reset timer
    timeLeft = 60;
    timeLeftSpan.textContent = timeLeft;
    timerCircle.classList.remove('warning');
    
    // Disable next button
    nextQuestionBtn.disabled = true;
}

// Start timer for current question
function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timeLeftSpan.textContent = timeLeft;
        
        // Add warning animation when time is low
        if (timeLeft <= 10) {
            timerCircle.classList.add('warning');
        }
        
        // Auto-advance when time runs out
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeUp();
        }
    }, 1000);
}

// Handle time up scenario
function handleTimeUp() {
    // Record no answer
    const question = currentQuiz[currentQuestionIndex];
    userAnswers.push({
        question: question.question,
        category: question.category,
        userAnswer: -1, // No answer selected
        correctAnswer: question.correct,
        explanation: question.explanation,
        options: question.options,
        isCorrect: false
    });
    
    // Show correct answer
    optionButtons[question.correct].classList.add('correct');
    
    // Disable all options
    optionButtons.forEach(btn => btn.disabled = true);
    
    // Enable next button
    nextQuestionBtn.disabled = false;
    
    // Auto-advance after 2 seconds
    setTimeout(() => {
        if (currentQuestionIndex < currentQuiz.length - 1) {
            nextQuestion();
        } else {
            finishQuiz();
        }
    }, 2000);
}

// Handle option selection
function selectOption(e) {
    const selectedIndex = parseInt(e.currentTarget.dataset.option);
    const question = currentQuiz[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    
    // Stop timer
    clearInterval(timer);
    
    // Update score
    if (isCorrect) {
        score++;
        categoryScores[question.category]++;
        currentScoreSpan.textContent = score;
    }
    
    // Record user answer
    userAnswers.push({
        question: question.question,
        category: question.category,
        userAnswer: selectedIndex,
        correctAnswer: question.correct,
        explanation: question.explanation,
        options: question.options,
        isCorrect: isCorrect
    });
    
    // Show visual feedback
    optionButtons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    // Enable next button
    nextQuestionBtn.disabled = false;
}

// Move to next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuiz.length) {
        loadQuestion();
        startTimer();
    } else {
        finishQuiz();
    }
}

// Finish quiz and show results
function finishQuiz() {
    clearInterval(timer);
    calculateResults();
    showResultsScreen();
}

// Calculate and display results
function calculateResults() {
    const totalQuestions = currentQuiz.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Update result displays
    finalScoreSpan.textContent = score;
    totalScoreSpan.textContent = totalQuestions;
    percentageSpan.textContent = `${percentage}%`;
    
    // Update category scores
    if (selectedCategory === 'all') {
        pythonScoreSpan.textContent = `${categoryScores.python}/${totalQuestions.python}`;
        javaScoreSpan.textContent = `${categoryScores.java}/${totalQuestions.java}`;
        javascriptScoreSpan.textContent = `${categoryScores.javascript}/${totalQuestions.javascript}`;
    } else {
        // Hide category breakdown for single category quizzes
        document.querySelector('.performance-breakdown').style.display = 'none';
    }
    
    // Set performance message
    let message = '';
    if (percentage >= 90) {
        message = 'Outstanding! You have excellent knowledge of programming concepts! 🌟';
    } else if (percentage >= 80) {
        message = 'Great job! You have a solid understanding of programming fundamentals! 👏';
    } else if (percentage >= 70) {
        message = 'Good work! Keep practicing to improve your programming skills! 💪';
    } else if (percentage >= 60) {
        message = 'Not bad! Review the concepts and try again to improve your score! 📚';
    } else {
        message = 'Keep learning! Practice more and you\'ll see improvement soon! 🚀';
    }
    
    performanceText.textContent = message;
}

// Show review screen with detailed answers
function showReviewScreen() {
    reviewList.innerHTML = '';
    
    userAnswers.forEach((answer, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
        
        const userAnswerText = answer.userAnswer === -1 ? 'No answer selected' : answer.options[answer.userAnswer];
        const correctAnswerText = answer.options[answer.correctAnswer];
        
        reviewItem.innerHTML = `
            <div class="review-question">
                <strong>Question ${index + 1}:</strong> ${answer.question}
            </div>
            <div class="review-details">
                <div class="review-answer">
                    <strong>Your Answer:</strong> 
                    <span class="${answer.isCorrect ? 'correct-answer' : 'incorrect-answer'}">${userAnswerText}</span>
                </div>
                <div class="review-answer">
                    <strong>Correct Answer:</strong> 
                    <span class="correct-answer">${correctAnswerText}</span>
                </div>
                <div class="review-answer">
                    <strong>Explanation:</strong> ${answer.explanation}
                </div>
            </div>
        `;
        
        reviewList.appendChild(reviewItem);
    });
    
    showScreen('review');
}

// Restart quiz
function restartQuiz() {
    // Reset all states
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 60;
    userAnswers = [];
    categoryScores = { python: 0, java: 0, javascript: 0 };
    
    // Clear timer
    clearInterval(timer);
    
    // Show welcome screen
    showScreen('welcome');
    
    // Reset category breakdown display
    document.querySelector('.performance-breakdown').style.display = 'block';
}

// Show specific screen
function showScreen(screenName) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show selected screen
    switch (screenName) {
        case 'welcome':
            welcomeScreen.classList.add('active');
            break;
        case 'quiz':
            quizScreen.classList.add('active');
            break;
        case 'results':
            resultsScreen.classList.add('active');
            break;
        case 'review':
            reviewScreen.classList.add('active');
            break;
    }
}

// Show results screen
function showResultsScreen() {
    showScreen('results');
}

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (quizScreen.classList.contains('active')) {
        // Allow A, B, C, D key selection
        if (e.key.toLowerCase() >= 'a' && e.key.toLowerCase() <= 'd') {
            const optionIndex = e.key.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
            if (optionIndex < optionButtons.length && !optionButtons[optionIndex].disabled) {
                optionButtons[optionIndex].click();
            }
        }
        
        // Allow Enter for next question
        if (e.key === 'Enter' && !nextQuestionBtn.disabled) {
            nextQuestionBtn.click();
        }
    }
});

// Prevent accidental page refresh during quiz
window.addEventListener('beforeunload', (e) => {
    if (quizScreen.classList.contains('active')) {
        e.preventDefault();
        e.returnValue = 'Are you sure you want to leave? Your quiz progress will be lost.';
    }
});

// Initialize quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', initQuiz);

// Add smooth scrolling for better UX
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Call smooth scroll on screen changes
const originalShowScreen = showScreen;
showScreen = function(screenName) {
    originalShowScreen(screenName);
    smoothScrollToTop();
};

// Add sound effects (optional - can be enabled by uncommenting)
/*
function playSound(type) {
    const audio = new Audio();
    switch (type) {
        case 'correct':
            audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+L';
            break;
        case 'incorrect':
            audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+L';
            break;
        case 'timeup':
            audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+L';
            break;
    }
    audio.play().catch(() => {}); // Ignore audio play errors
}
*/

// Add analytics tracking (optional - for educational purposes)
function trackQuizEvent(eventName, data = {}) {
    // This would integrate with analytics services like Google Analytics
    console.log(`Quiz Event: ${eventName}`, data);
}

// Track quiz completion
const originalFinishQuiz = finishQuiz;
finishQuiz = function() {
    originalFinishQuiz();
    trackQuizEvent('quiz_completed', {
        category: selectedCategory,
        score: score,
        totalQuestions: currentQuiz.length,
        percentage: Math.round((score / currentQuiz.length) * 100)
    });
};

// Performance optimization: Preload next question
function preloadNextQuestion() {
    if (currentQuestionIndex + 1 < currentQuiz.length) {
        // Preload any resources needed for the next question
        // This is a placeholder for future enhancements
    }
}

// Add accessibility improvements
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Enhance option selection with accessibility
const originalSelectOption = selectOption;
selectOption = function(e) {
    originalSelectOption(e);
    const question = currentQuiz[currentQuestionIndex];
    const selectedIndex = parseInt(e.currentTarget.dataset.option);
    const isCorrect = selectedIndex === question.correct;
    
    const message = isCorrect ? 
        'Correct answer selected!' : 
        `Incorrect. The correct answer is ${question.options[question.correct]}`;
    
    announceToScreenReader(message);
};

// Add mobile-specific optimizations
function isMobileDevice() {
    return window.innerWidth <= 768;
}

// Optimize touch interactions for mobile
if (isMobileDevice()) {
    optionButtons.forEach(btn => {
        btn.addEventListener('touchstart', function(e) {
            this.style.transform = 'scale(0.95)';
        });
        
        btn.addEventListener('touchend', function(e) {
            this.style.transform = '';
        });
    });
}

// Add quiz statistics
let quizStats = {
    totalQuizzesTaken: 0,
    averageScore: 0,
    bestScore: 0,
    totalTimeSpent: 0
};

// Load stats from localStorage (if available)
function loadQuizStats() {
    const savedStats = localStorage.getItem('quizStats');
    if (savedStats) {
        quizStats = JSON.parse(savedStats);
    }
}

// Save stats to localStorage
function saveQuizStats() {
    localStorage.setItem('quizStats', JSON.stringify(quizStats));
}

// Update stats after quiz completion
function updateQuizStats(score, totalQuestions, timeSpent) {
    quizStats.totalQuizzesTaken++;
    quizStats.totalTimeSpent += timeSpent;
    
    const currentPercentage = Math.round((score / totalQuestions) * 100);
    quizStats.averageScore = Math.round(
        ((quizStats.averageScore * (quizStats.totalQuizzesTaken - 1)) + currentPercentage) / quizStats.totalQuizzesTaken
    );
    
    if (currentPercentage > quizStats.bestScore) {
        quizStats.bestScore = currentPercentage;
    }
    
    saveQuizStats();
}

// Initialize stats on load
loadQuizStats();