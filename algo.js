const programs = {
  'BSAIS': {
    name: 'BS Accounting Information System',
    desc: 'Bridging the gap between accounting and technology.'
  },
  'BSA': {
    name: 'BS Accountancy',
    desc: 'Training the next generation of CPA leaders.'
  },
  'BSBA': {
    name: 'BS Business Administration',
    desc: 'Excellence in Marketing and Advertising management.'
  },
  'BSTM': {
    name: 'BS Tourism Management',
    desc: 'Leading the future of global travel and hospitality.'
  },
  'BSIT': {
    name: 'BS Information Technology',
    desc: 'Expertise in software, networking, and systems.'
  },
  'BSCS': {
    name: 'BS Computer Science',
    desc: 'Deep diving into algorithms and computational theory.'
  },
  'BSIS': {
    name: 'BS Information Systems',
    desc: 'Managing business processes through tech solutions.'
  },
  'BS Crim': {
    name: 'BS Criminology',
    desc: 'Dedication to law enforcement and public safety.'
  },
  'BSESS': {
    name: 'BS Exercise and Sports Science',
    desc: 'Advancing human performance and health.'
  },
  'BS Psych': {
    name: 'BS Psychology',
    desc: 'Understanding the human mind and behavior.'
  },
  'BMMA': {
    name: 'Bachelor of Multimedia Arts',
    desc: 'Mastering visual storytelling and digital design.'
  },
  'BACOMM': {
    name: 'BA Communication',
    desc: 'Powering media, broadcasting, and public relations.'
  },
  'BS Arch': {
    name: 'BS Architecture',
    desc: 'Designing sustainable and innovative spaces.'
  },
  'BSCpE': {
    name: 'BS Computer Engineering',
    desc: 'Integrating hardware and software systems.'
  },
  'BSCE': {
    name: 'BS Civil Engineering',
    desc: 'Building the foundations of modern infrastructure.'
  }
};

const organizations = {
  'ACES': {
    name: 'ACES',
    room: '306'
  },
  'ASC': {
    name: 'ASC',
    room: '412'
  },
  'ACIP': {
    name: 'ACIP',
    room: '411'
  },
  'Athletica': {
    name: 'Athletica Sciencia',
    room: '407'
  },
  'CommSoc': {
    name: 'Communication Society',
    room: '401'
  },
  'Creatives Council': {
    name: 'Creatives Council (Academic & Creative)',
    room: '301'
  },
  'CRIMSOC': {
    name: 'Criminology Society',
    room: '513'
  },
  'JPIA': {
    name: 'Junior Philippine Institute of Accountants',
    room: '404'
  },
  'MAG': {
    name: 'Marketing and Advertising Guild',
    room: '310'
  },
  'PICE': {
    name: 'Philippine Institute of Civil Engineers',
    room: '502'
  },
  'PsychSoc': {
    name: 'Psychology Society',
    room: '403'
  },
  'TSMS': {
    name: 'Tourism Student Movers’ Society',
    room: 'TM LAB'
  },
  'UAPSA': {
    name: 'United Architects of the Philippines Student Aux.',
    room: '410'
  },
  'SCSCouncil': {
    name: 'School of Computer Studies Council',
    room: '311'
  },
  'Artistique': {
    name: 'NU Laguna Artistique',
    room: '303'
  },
  'NUAG': {
    name: 'NU Alpha Gaming',
    room: 'AA LAB'
  },
  'NULC': {
    name: 'NU Literati Book Club',
    room: '402'
  },
  'NULM': {
    name: 'NU Laguna Mountaineers',
    room: '408'
  },
  'NULDT': {
    name: 'NU Laguna Dance Troupe',
    room: '205'
  },
  'NU-ENC': {
    name: 'Every Nation Campus (Faith & Leadership)',
    room: '307'
  },
  'NULBC': {
    name: 'NU Literati Book Club',
    room: '309'
  },
  'MSC-NUL': {
    name: 'Microsoft Student Community',
    room: '204'
  },
  'PEERS': {
    name: 'NU Laguna PEERS (Service & Advocacy)',
    room: '409'
  },
  'SiniKatha': {
    name: 'SiniKatha (Creative & Leadership)',
    room: '302'
  },
  'SineObscura': {
    name: 'Sine Obscura (Film/Media)',
    room: '203'
  },
  'Studio 53': {
    name: 'Studio 53',
    room: '304'
  },
  'RCY': {
    name: 'Red Cross Youth',
    room: '406'
  },
  'U-SERVE': {
    name: 'U-SERVE',
    room: '305'
  }
};

const questions = [

/* 1 */
{
  id: 1,
  question: "In a group, people usually rely on you to…",
  answers: [
    { text: "Guide decisions and keep things organized",
      weights: { 'SCSCouncil': 4, 'BSBA': 3, 'CRIMSOC': 2, 'UAPSA': 2 } },
    { text: "Listen, empathize, and support everyone",
      weights: { 'PsychSoc': 4, 'BS Psych': 4, 'PEERS': 2, 'NU-ENC': 2 } },
    { text: "Connect people and share opportunities",
      weights: { 'MSC-NUL': 4, 'CommSoc': 3, 'BACOMM': 2 } },
    { text: "Add creativity and fresh ideas",
      weights: { 'Artistique': 3, 'SiniKatha': 3, 'BMMA': 3 } }
  ]
},

/* 2 */
{
  id: 2,
  question: "Which activity sounds most fulfilling to you?",
  answers: [
    { text: "Helping others grow emotionally and mentally",
      weights: { 'PsychSoc': 4, 'BS Psych': 4, 'PEERS': 2 } },
    { text: "Leading a team toward a shared goal",
      weights: { 'SCSCouncil': 4, 'BSBA': 3, 'JPIA': 2 } },
    { text: "Meeting new people and building networks",
      weights: { 'MSC-NUL': 4, 'BACOMM': 3, 'NUAG': 2 } },
    { text: "Creating art, media, or performances",
      weights: { 'Artistique': 3, 'NULDT': 3, 'BMMA': 3 } }
  ]
},

/* 3 */
{
  id: 3,
  question: "When you consume media, you tend to focus on…",
  answers: [
    { text: "The emotions and psychology of the characters",
      weights: { 'PsychSoc': 4, 'BS Psych': 4, 'SineObscura': 2 } },
    { text: "The message and how it influences people",
      weights: { 'BACOMM': 3, 'CommSoc': 3, 'SineObscura': 4 } },
    { text: "The visuals, editing, and creative style",
      weights: { 'BMMA': 3, 'Artistique': 3, 'SineObscura': 4 } },
    { text: "The discipline and effort behind performances",
      weights: { 'NULDT': 3, 'Athletica': 3, 'BSESS': 3 } }
  ]
},

/* 4 */
{
  id: 4,
  question: "What kind of campus event excites you most?",
  answers: [
    { text: "Mental health talks or peer-support spaces",
      weights: { 'PsychSoc': 4, 'PEERS': 3, 'NU-ENC': 2 } },
    { text: "Leadership summits or student governance events",
      weights: { 'SCSCouncil': 4, 'BSBA': 3, 'PICE': 2 } },
    { text: "Industry talks, tech mixers, or networking nights",
      weights: { 'MSC-NUL': 4, 'BSIT': 3, 'BSCS': 2 } },
    { text: "Film screenings, exhibits, or creative showcases",
      weights: { 'SineObscura': 4, 'Artistique': 3, 'Creatives Council': 3 } }
  ]
},

/* 5 */
{
  id: 5,
  question: "How do you usually deal with stress?",
  answers: [
    { text: "By talking it through and reflecting",
      weights: { 'PsychSoc': 4, 'BS Psych': 4, 'NULBC': 2 } },
    { text: "By organizing tasks and taking control",
      weights: { 'SCSCouncil': 4, 'BSBA': 3, 'BSA': 2 } },
    { text: "By leaning on friends or mentors",
      weights: { 'MSC-NUL': 4, 'CommSoc': 3, 'NUAG': 2 } },
    { text: "By expressing it creatively or physically",
      weights: { 'SiniKatha': 3, 'NULDT': 3, 'Athletica': 3 } }
  ]
},

/* 6 */
{
  id: 6,
  question: "Which role sounds most like you in a project?",
  answers: [
    { text: "The emotional anchor of the group",
      weights: { 'PsychSoc': 4, 'PEERS': 3, 'BS Psych': 3 } },
    { text: "The planner who keeps everyone on track",
      weights: { 'SCSCouncil': 4, 'BSBA': 3, 'BSCE': 2 } },
    { text: "The connector who links teams together",
      weights: { 'MSC-NUL': 4, 'BACOMM': 3 } },
    { text: "The storyteller or documenter",
      weights: { 'SineObscura': 4, 'BMMA': 3, 'NULBC': 2 } }
  ]
},

/* 7 */
{
  id: 7,
  question: "What kind of impact matters most to you?",
  answers: [
    { text: "Improving people’s well-being",
      weights: { 'PsychSoc': 4, 'PEERS': 3, 'RedCross': 2 } },
    { text: "Strengthening leadership and accountability",
      weights: { 'SCSCouncil': 4, 'CRIMSOC': 3, 'BS Crim': 2 } },
    { text: "Creating opportunities through collaboration",
      weights: { 'MSC-NUL': 4, 'U-SERVE': 3 } },
    { text: "Shaping culture through stories and art",
      weights: { 'SineObscura': 4, 'SiniKatha': 3, 'Artistique': 2 } }
  ]
},

/* 8 */
{
  id: 8,
  question: "Which environment helps you thrive?",
  answers: [
    { text: "Safe spaces for open conversation",
      weights: { 'PsychSoc': 4, 'NULBC': 3, 'BS Psych': 3 } },
    { text: "Structured teams with clear leadership",
      weights: { 'SCSCouncil': 4, 'PICE': 3, 'UAPSA': 2 } },
    { text: "Social spaces full of collaboration",
      weights: { 'MSC-NUL': 4, 'CommSoc': 3 } },
    { text: "Creative studios or stages",
      weights: { 'Artistique': 3, 'NULDT': 3, 'BMMA': 3 } }
  ]
},

/* 9 */
{
  id: 9,
  question: "People often describe you as…",
  answers: [
    { text: "Understanding and compassionate",
      weights: { 'PsychSoc': 4, 'BS Psych': 4 } },
    { text: "Responsible and decisive",
      weights: { 'SCSCouncil': 4, 'BSBA': 3 } },
    { text: "Friendly and well-connected",
      weights: { 'MSC-NUL': 4, 'BACOMM': 3 } },
    { text: "Creative and expressive",
      weights: { 'Artistique': 3, 'SiniKatha': 3, 'SineObscura': 3 } }
  ]
},

/* 10 */
{
  id: 10,
  question: "What legacy would you like to leave in NU Laguna?",
  answers: [
    { text: "A campus that cares deeply for mental health",
      weights: { 'PsychSoc': 4, 'PEERS': 3, 'NU-ENC': 2 } },
    { text: "Strong student leadership and governance",
      weights: { 'SCSCouncil': 4, 'BSBA': 3, 'CRIMSOC': 2 } },
    { text: "A connected, opportunity-rich community",
      weights: { 'MSC-NUL': 4, 'U-SERVE': 3 } },
    { text: "A rich culture of art, film, and expression",
      weights: { 'SineObscura': 4, 'Artistique': 3, 'Creatives Council': 3 } }
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

    const programKeys = Object.keys(programScores);
    const orgKeys = Object.keys(orgScores);

    // Find top program
    const topProgramKey = programKeys.length
      ? programKeys.reduce((a, b) => (programScores[a] > programScores[b] ? a : b))
      : null;

    // Find top organization
    const topOrgKey = orgKeys.length
      ? orgKeys.reduce((a, b) => (orgScores[a] > orgScores[b] ? a : b))
      : null;

    return {
      program: topProgramKey ? programs[topProgramKey] : null,
      organization: topOrgKey ? organizations[topOrgKey] : null
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