// 1. Data Definitions
const programs = {
    'BSAIS': { name: 'BS Accounting Information System', desc: 'Bridging the gap between accounting and technology.', },
    'BSA': { name: 'BS Accountancy', desc: 'Training the next generation of CPA leaders.' },
    'BSBA': { name: 'BS Business Administration', desc: 'Excellence in Marketing and Advertising management.' },
    'BSTM': { name: 'BS Tourism Management', desc: 'Leading the future of global travel and hospitality.' },
    'BSIT': { name: 'BS Information Technology', desc: 'Expertise in software, networking, and systems.' },
    'BSCS': { name: 'BS Computer Science', desc: 'Deep diving into algorithms and computational theory.' },
    'BSIS': { name: 'BS Information Systems', desc: 'Managing business processes through tech solutions.' },
    'BS Crim': { name: 'BS Criminology', desc: 'Dedication to law enforcement and public safety.' },
    'BSESS': { name: 'BS Exercise and Sports Science', desc: 'Advancing human performance and health.' },
    'BS Psych': { name: 'BS Psychology', desc: 'Understanding the human mind and behavior.' },
    'BMMA': { name: 'Bachelor of Multimedia Arts', desc: 'Mastering visual storytelling and digital design.' },
    'BACOMM': { name: 'BA Communication', desc: 'Powering media, broadcasting, and public relations.' },
    'BS Arch': { name: 'BS Architecture', desc: 'Designing sustainable and innovative spaces.' },
    'BSCpE': { name: 'BS Computer Engineering', desc: 'Integrating hardware and software systems.' },
    'BSCE': { name: 'BS Civil Engineering', desc: 'Building the foundations of modern infrastructure.' }
};

const organizations = {
    'ACES': { name: 'ACES', room: '306' },
    'ASC': { name: 'ASC', room: '412' },
    'ACIP': { name: 'ACIP', room: '411' },
    'Athletica': { name: 'Athletica Sciencia', room: '407' },
    'CommSoc': { name: 'Communication Society', room: '401' },
    'Creatives Council': { name: 'Creatives Council (Academic & Creative)', room: '301' },
    'CRIMSOC': { name: 'Criminology Society', room: '513' },
    'JPIA': { name: 'Junior Philippine Institute of Accountants', room: '404' },
    'MAG': { name: 'Marketing and Advertising Guild', room: '310' },
    'PICE': { name: 'Philippine Institute of Civil Engineers', room: '502' },
    'PsychSoc': { name: 'Psychology Society', room: '403' },
    'TSMS': { name: 'Tourism Student Movers’ Society', room: 'TM LAB' },
    'UAPSA': { name: 'United Architects of the Philippines Student Aux.', room: '410' },
    'SCSCouncil': { name: 'School of Computer Studies Council', room: '311' },
    'Artistique': { name: 'NU Laguna Artistique', room: '303' },
    'NUAG': { name: 'NU Alpha Gaming', room: 'AA LAB' },
    'NULC': { name: 'NU Literati Book Club', room: '402' },
    'NULM': { name: 'NU Laguna Mountaineers', room: '408' },
    'NULDT': { name: 'NU Laguna Dance Troupe', room: '205' },
    'NU-ENC': { name: 'Every Nation Campus (Faith & Leadership)', room: '307' },
    'NULBC': { name: 'NU Literati Book Club', room: '309' },
    'MSC-NUL': { name: 'Microsoft Student Community', room: '204' },
    'PEERS': { name: 'NU Laguna PEERS (Service & Advocacy)', room: '409' },
    'SiniKatha': { name: 'SiniKatha (Creative & Leadership)', room: '302' },
    'SineObscura': { name: 'Sine Obscura (Film/Media)', room: '203' },
    'Studio 53': { name: 'Studio 53', room: '304' },
    'RCY': { name: 'Red Cross Youth', room: '406' },
    'U-SERVE': { name: 'U-SERVE', room: '305' }
};


const questions = [{
        id: 1,
        question: "In a group project, what is your go-to role?",
        answers: [
            { text: "Leading the team and managing the timeline", weights: { 'BSBA': 4, 'BSCE': 3, 'CRIMSOC': 3, 'BMMA': 2, 'BSIT': 2 } },
            { text: "Designing the visuals and presentation", weights: { 'BMMA': 3, 'BACOMM': 3, 'SiniKatha': 3, 'Artistique': 2, 'BSESS': 2, 'Creatives Council': 3 } },
            { text: "Developing the technical solution or logic", weights: { 'BSIT': 4, 'BSCS': 4, 'BSCpE': 3, 'MSC': 3, 'BSIS': 2 } },
            { text: "Ensuring everyone feels heard and supported", weights: { 'BS Psych': 4, 'PEERS': 3, 'RedCross': 3, 'BSESS': 2, 'ENC': 2 } }
        ]
    },
    {
        id: 2,
        question: "How do you prefer to spend your free time?",
        answers: [
            { text: "Exploring the outdoors or playing sports", weights: { 'BSESS': 4, 'Mountaineers': 4, 'DanceTroupe': 3, 'Athletica': 3 } },
            { text: "Gaming or building something on my computer", weights: { 'BSCS': 4, 'BSIT': 4, 'AlphaGaming': 3, 'MSC': 3 } },
            { text: "Volunteering for a community cause", weights: { 'BS Crim': 3, 'RedCross': 4, 'ENC': 3, 'PEERS': 3 } },
            { text: "Reading a book or watching a classic film", weights: { 'BACOMM': 3, 'Literati': 4, 'SineObscura': 3, 'BMMA': 2, 'Creatives Council': 2 } }
        ]
    },
    {
        id: 3,
        question: "What kind of problems do you enjoy solving most?",
        answers: [
            { text: "Technical bugs and algorithmic puzzles", weights: { 'BSCS': 4, 'BSIS': 3, 'SCSCouncil': 3, 'BSCpE': 3 } },
            { text: "Financial discrepancies and data tracking", weights: { 'BSA': 4, 'BSAIS': 4, 'JPIA': 3, 'BSBA': 2 } },
            { text: "Social issues and community conflicts", weights: { 'BS Psych': 4, 'BS Crim': 3, 'RedCross': 3, 'PEERS': 3 } },
            { text: "Structural designs and spatial layouts", weights: { 'BS Arch': 4, 'BSCE': 3, 'UAPSA': 3, 'ACI': 3 } }
        ]
    },
    {
        id: 4,
        question: "If you were to start a business, what would it be?",
        answers: [
            { text: "A creative agency for branding and ads", weights: { 'BMMA': 3, 'BSBA': 3, 'MarketingGuild': 4, 'BACOMM': 3, 'Creatives Council': 3 } },
            { text: "A tech startup building mobile apps", weights: { 'BSIT': 4, 'BSCS': 4, 'MSC': 3, 'SCSCouncil': 2 } },
            { text: "A travel agency or boutique hotel", weights: { 'BSTM': 4, 'TMS': 4, 'BSBA': 2 } },
            { text: "A non-profit for mental health awareness", weights: { 'BS Psych': 4, 'PEERS': 4, 'RedCross': 3 } }
        ]
    },
    {
        id: 5,
        question: "What is your 'vibe' when it comes to communication?",
        answers: [
            { text: "I prefer visual storytelling (videos/art)", weights: { 'BMMA': 3, 'SineObscura': 4, 'Artistique': 2, 'Creatives Council': 3 } },
            { text: "I love public speaking and debating", weights: { 'BACOMM': 4, 'CommSoc': 4, 'BSBA': 2 } },
            { text: "I express myself through dance or movement", weights: { 'BSESS': 3, 'DanceTroupe': 4, 'Athletica': 3 } },
            { text: "I’m all about writing and deep discussions", weights: { 'BACOMM': 3, 'Literati': 4, 'SHS': 2 } }
        ]
    },
    {
        id: 6,
        question: "Which high school subject did you find easiest?",
        answers: [
            { text: "Mathematics and Physics", weights: { 'BSCE': 4, 'BSCpE': 4, 'BSA': 3, 'PICE': 3 } },
            { text: "ICT and Computer Research", weights: { 'BSIT': 4, 'BSCS': 4, 'MSC': 3 } },
            { text: "Humanities and Social Sciences", weights: { 'BS Psych': 4, 'BS Crim': 3, 'ENC': 3, 'BACOMM': 2, 'Creatives Council': 2 } },
            { text: "Media Arts and Design", weights: { 'BMMA': 4, 'BS Arch': 3, 'SiniKatha': 3, 'Artistique': 2 } }
        ]
    },
    {
        id: 7,
        question: "How do you handle a stressful situation?",
        answers: [
            { text: "I analyze the data to find a logical fix", weights: { 'BSA': 4, 'BSIS': 3, 'JPIA': 3, 'BSCS': 2 } },
            { text: "I take charge and delegate tasks", weights: { 'Arch Council': 3, 'BSBA': 3, 'BSCpE': 2 } },
            { text: "I use it as fuel for my creative work", weights: { 'Artistique': 2, 'SiniKatha': 3, 'BMMA': 2, 'Creatives Council': 3 } },
            { text: "I seek guidance and pray for clarity", weights: { 'ENC': 4, 'PEERS': 3, 'RedCross': 3 } }
        ]
    },
    {
        id: 8,
        question: "What kind of legacy do you want to leave?",
        answers: [
            { text: "Building safe and sustainable cities", weights: { 'BS Arch': 4, 'BSCE': 3, 'UAPSA': 3, 'PICE': 3 } },
            { text: "Creating a more just and safe society", weights: { 'BS Crim': 4, 'CRIMSOC': 4, 'RedCross': 3, 'PEERS': 2 } },
            { text: "Innovating the way we use technology", weights: { 'BSIT': 4, 'BSCS': 4, 'MSC': 3, 'BSCpE': 2 } },
            { text: "Managing world-class brands or events", weights: { 'BSBA': 4, 'BSTM': 3, 'MarketingGuild': 3, 'BMMA': 2, 'Creatives Council': 2 } }
        ]
    },
    {
        id: 9,
        question: "Choose a tool for your 'dream workshop':",
        answers: [
            { text: "A high-end camera and drawing tablet", weights: { 'BMMA': 3, 'CommSoc': 3, 'SiniKatha': 3, 'Artistique': 2, 'Creatives Council': 3 } },
            { text: "A powerful server and coding IDE", weights: { 'BSCS': 4, 'BSIT': 4, 'MSC': 3, 'BSCpE': 3 } },
            { text: "A calculator and ledger software", weights: { 'BSA': 4, 'BSAIS': 4, 'JPIA': 3, 'BSBA': 2 } },
            { text: "A first-aid kit and outdoor gear", weights: { 'RedCross': 4, 'Mountaineers': 4, 'BSESS': 3, 'PEERS': 2 } }
        ]
    },
    {
        id: 10,
        question: "What draws you to NU Laguna?",
        answers: [
            { text: "The spirit of community and service", weights: { 'PEERS': 4, 'SCSCouncil': 3, 'ENC': 3, 'RedCross': 2 } },
            { text: "The cutting-edge tech and innovation", weights: { 'MSC': 4, 'BSCS': 3, 'BSCpE': 3, 'BSIT': 3 } },
            { text: "The vibrant arts and culture scene", weights: { 'Artistique': 2, 'DanceTroupe': 3, 'SineObscura': 3, 'BMMA': 3, 'Creatives Council': 3 } },
            { text: "The excellence in professional training", weights: { 'BSA': 3, 'BSBA': 3, 'JPIA': 3, 'MarketingGuild': 3 } }
        ]
    }
];

// 3. The Recommendation Algorithm
function calculateResults(userAnswers) {
    let programScores = {};
    let orgScores = {};

    userAnswers.forEach(answer => {
        for (const [key, weight] of Object.entries(answer.weights)) {
            // Check if key is a Program or an Org
            if (programs[key]) {
                programScores[key] = (programScores[key] || 0) + weight;
            } else if (organizations[key]) {
                orgScores[key] = (orgScores[key] || 0) + weight;
            }
        }
    });

    // Find top program
    const topProgramKey = Object.keys(programScores).reduce((a, b) =>
        programScores[a] > programScores[b] ? a : b
    );

    // Find top organization
    const topOrgKey = Object.keys(orgScores).reduce((a, b) =>
        orgScores[a] > orgScores[b] ? a : b
    );

    return {
        program: programs[topProgramKey],
        organization: organizations[topOrgKey]
    };
}

// App State
let currentQuestion = 0;
let scores = {
    'BSAIS': 0,
    'BSA': 0,
    'BSBA': 0,
    'BSTM': 0,
    'BSIT': 0,
    'BSCS': 0,
    'BSIS': 0,
    'BS Crim': 0,
    'BSESS': 0,
    'BS Psych': 0,
    'BMMA': 0,
    'BACOMM': 0,
    'BS Arch': 0,
    'BSCpE': 0,
    'BSCE': 0,
    'SiniKatha': 0,
    'Creatives Council': 0,
    /* 'Council of Leaders' removed */
    'Artistique': 0,
    'Arch Council': 0,
    'MSC': 0,
    'PEERS': 0,
    'Athletica': 0,
    'PsychSoc': 0,
    'JPIA': 0,
    'CommSoc': 0,
    'TMS': 0,
    'Literati': 0,
    'AlphaGaming': 0,
    'DanceTroupe': 0,
    'SCSCouncil': 0,
    'SineObscura': 0,
    'MarketingGuild': 0,
    'Mountaineers': 0,
    'CRIMSOC': 0,
    'SHS': 0,
    'PICE': 0,
    'RedCross': 0,
    'ACES': 0,
    'ACI': 0,
    'UAPSA': 0,
    'ENC': 0
};
let quizComplete = false;
let userAnswers = [];

// Utility Functions
function getTopProgram() {
    const programScores = {};
    Object.keys(programs).forEach(prog => {
        programScores[prog] = scores[prog] || 0;
    });
    return Object.keys(programScores).reduce((a, b) =>
        programScores[a] > programScores[b] ? a : b
    );
}

function getTopPrograms() {
    const programScores = {};
    Object.keys(programs).forEach(prog => {
        programScores[prog] = scores[prog] || 0;
    });
    return Object.keys(programScores)
        .sort((a, b) => programScores[b] - programScores[a])
        .slice(0, 3);
}

function getTopOrgs() {
    const orgScores = {};
    Object.keys(organizations).forEach(org => {
        orgScores[org] = scores[org] || 0;
    });
    return Object.keys(orgScores)
        .sort((a, b) => orgScores[b] - orgScores[a])
        .slice(0, 3);
}

function getTopOrg() {
    const orgScores = {};
    Object.keys(organizations).forEach(org => {
        orgScores[org] = scores[org] || 0;
    });
    return Object.keys(orgScores).reduce((a, b) =>
        orgScores[a] > orgScores[b] ? a : b
    );
}

function handleAnswerClick(weights) {
    Object.keys(weights).forEach(key => {
        scores[key] = (scores[key] || 0) + weights[key];
    });
    userAnswers.push({ weights });

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        quizComplete = true;
        renderResults();
    }
}

function restartQuiz() {
    currentQuestion = 0;
    scores = {};
    Object.keys(programs).forEach(prog => { scores[prog] = 0; });
    Object.keys(organizations).forEach(org => { scores[org] = 0; });
    userAnswers = [];
    quizComplete = false;
    renderQuestion();
}

function renderQuestion() {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    const html = `
                <div class="w-full fade-in">
                    <!-- Progress Bar -->
                    <div class="mb-8">
                        <div class="flex justify-between items-center mb-2">
                            <p class="text-white/90 text-sm">Question ${currentQuestion + 1} of ${questions.length}</p>
                            <p class="text-nu-gold text-sm font-semibold" id="progressText">${Math.round(progress)}%</p>
                        </div>
                        <div class="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                            <div class="progress-fill bg-nu-gold h-full rounded-full" id="progressBar" style="width: 0%; transition: width 0.6s ease-out;"></div>
                        </div>
                    </div>

                    <!-- Question Card -->
                    <div class="bg-nu-navy rounded-2xl shadow-2xl p-8 w-full question-slide">
                        <h2 class="text-2xl font-bold text-white mb-6 leading-tight">${question.question}</h2>

                        <div class="space-y-3">
                            ${question.answers.map((answer, index) => {
                                const weightsStr = JSON.stringify(answer.weights).replace(/"/g, '&quot;');
                                return `
                                <button
                                    class="btn-answer w-full text-left p-4 bg-white/10 border border-white/30 hover-nu-gold rounded-lg text-white transition-all duration-200"
                                    onclick='handleAnswerClick(${weightsStr})'>
                                    <div class="flex items-start">
                                        <span class="inline-block w-6 h-6 rounded-full border-2 border-nu-gold mr-3 mt-0.5 flex-shrink-0"></span>
                                        <span class="flex-1">${answer.text}</span>
                                    </div>
                                </button>
                            `;
                            }).join('')}
                        </div>

                        <p class="text-white/60 text-xs mt-8 text-center">Select one answer to continue</p>
                    </div>

                    <!-- Footer -->
                    <div class="mt-12 text-center">
                        <p class="text-white/70 text-sm">NU Laguna Open Day 2026</p>
                        <p class="text-nu-gold text-xs mt-1">WayFinder Quiz</p>
                    </div>
                </div>
            `;

    document.getElementById('app').innerHTML = html;
    
    // Trigger progress bar animation after DOM renders
    requestAnimationFrame(() => {
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
    });
}

function renderResults() {
    const topOrgKeys = getTopOrgs();
    const topProgramKey = getTopProgram();
    const programInfo = programs[topProgramKey];

    const html = `
                <div class="w-full fade-in">
                    <div class="bg-nu-navy rounded-2xl shadow-2xl p-8 w-full">
                        <h1 class="text-3xl font-bold text-nu-gold text-center mb-8">Top 3 Organization Matches 🎯</h1>
                        <p class="text-white/80 text-center mb-6 font-semibold">We invite you to visit all the booths on the second floor. Make sure to have your <span class="text-nu-gold">passport stamped</span> at each booth to earn raffle entries!</p>

                        <!-- Top 3 Organizations -->
                        <div class="space-y-4 mb-8">
                            ${topOrgKeys.map((orgKey, index) => {
                                const orgData = organizations[orgKey];
                                const orgName = (typeof orgData === 'object') ? (orgData.name || orgData.label || orgKey) : (orgData || orgKey);
                                const orgRoom = (typeof orgData === 'object') ? (orgData.room || '') : '';
                                const medals = ['🥇', '🥈', '🥉'];
                                return `
                                <div class="bg-white/10 backdrop-blur rounded-xl p-5 border border-nu-gold/30">
                                    <div class="flex items-start gap-3">
                                        <span class="text-2xl">${medals[index]}</span>
                                        <div class="flex-1">
                                            <h3 class="text-lg font-bold text-nu-gold mb-1">${orgName}</h3>
                                            <p class="text-white/90 text-sm">${orgRoom ? 'Room: ' + orgRoom : ''}</p>
                                        </div>
                                    </div>
                                </div>
                                `;
                            }).join('')}
                        </div>

                        <!-- Recommended Program (secondary) -->
                        <div class="bg-white/10 backdrop-blur rounded-xl p-6 mb-8 border border-nu-gold/30">
                            <p class="text-white/80 text-xs uppercase tracking-widest mb-2 font-semibold">Suggested Program (optional)</p>
                            <h3 class="text-2xl font-bold text-nu-gold mb-2">${programInfo ? programInfo.name : '—'}</h3>
                            <p class="text-white/90 text-sm leading-relaxed">${programInfo ? programInfo.desc : 'No program match available.'}</p>
                        </div>

                        <!-- Action Buttons (Restart only) -->
                        <div class="flex">
                            <button
                                onclick="restartQuiz()"
                                class="w-full btn-answer bg-white/10 border-2 border-nu-gold hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200">
                                🔄 Restart Quiz
                            </button>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div class="mt-12 text-center">
                        <p class="text-white/70 text-sm">NU Laguna Open Day 2026</p>
                        <p class="text-nu-gold text-xs mt-1">WayFinder Quiz</p>
                    </div>
                </div>
            `;

    document.getElementById('app').innerHTML = html;
}

// Initialize the app
renderQuestion();