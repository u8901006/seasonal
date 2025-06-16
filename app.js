// SAD Clinical Toolkit JavaScript

// Tab switching functionality
function switchTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all nav tabs
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected tab content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Add active class to clicked nav tab
    const selectedNavTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (selectedNavTab) {
        selectedNavTab.classList.add('active');
    }
}

// Initialize tab navigation
document.addEventListener('DOMContentLoaded', function() {
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
});

// Assessment Tool Calculators
function calculateSPAQ() {
    showCalculatorModal('SPAQ 季節模式評估問卷', spaqForm, calculateSPAQScore);
}

function calculateHAMD() {
    showCalculatorModal('HAM-D 漢密爾頓憂鬱量表', hamdForm, calculateHAMDScore);
}

function calculateMADRS() {
    showCalculatorModal('MADRS 蒙哥馬利憂鬱評定量表', madrsForm, calculateMADRSScore);
}

// SPAQ Form Structure
const spaqForm = `
    <div class="form-row">
        <label class="form-label">1. 在不同季節中，您在睡眠時間方面的變化程度：</label>
        <select class="form-control" name="sleep" required>
            <option value="">請選擇</option>
            <option value="0">無變化</option>
            <option value="1">輕微變化</option>
            <option value="2">中等變化</option>
            <option value="3">明顯變化</option>
            <option value="4">極度變化</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">2. 在不同季節中，您在社交活動方面的變化程度：</label>
        <select class="form-control" name="social" required>
            <option value="">請選擇</option>
            <option value="0">無變化</option>
            <option value="1">輕微變化</option>
            <option value="2">中等變化</option>
            <option value="3">明顯變化</option>
            <option value="4">極度變化</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">3. 在不同季節中，您在情緒方面的變化程度：</label>
        <select class="form-control" name="mood" required>
            <option value="">請選擇</option>
            <option value="0">無變化</option>
            <option value="1">輕微變化</option>
            <option value="2">中等變化</option>
            <option value="3">明顯變化</option>
            <option value="4">極度變化</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">4. 在不同季節中，您在體重方面的變化程度：</label>
        <select class="form-control" name="weight" required>
            <option value="">請選擇</option>
            <option value="0">無變化</option>
            <option value="1">輕微變化</option>
            <option value="2">中等變化</option>
            <option value="3">明顯變化</option>
            <option value="4">極度變化</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">5. 在不同季節中，您在食慾方面的變化程度：</label>
        <select class="form-control" name="appetite" required>
            <option value="">請選擇</option>
            <option value="0">無變化</option>
            <option value="1">輕微變化</option>
            <option value="2">中等變化</option>
            <option value="3">明顯變化</option>
            <option value="4">極度變化</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">6. 在不同季節中，您在精力水平方面的變化程度：</label>
        <select class="form-control" name="energy" required>
            <option value="">請選擇</option>
            <option value="0">無變化</option>
            <option value="1">輕微變化</option>
            <option value="2">中等變化</option>
            <option value="3">明顯變化</option>
            <option value="4">極度變化</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">季節性變化是否造成問題？</label>
        <select class="form-control" name="problem" required>
            <option value="">請選擇</option>
            <option value="0">無問題</option>
            <option value="1">輕微問題</option>
            <option value="2">中等問題</option>
            <option value="3">明顯問題</option>
            <option value="4">嚴重問題</option>
            <option value="5">致命問題</option>
        </select>
    </div>
`;

// HAM-D Form Structure (simplified version)
const hamdForm = `
    <div class="form-row">
        <label class="form-label">1. 憂鬱情緒：</label>
        <select class="form-control" name="mood" required>
            <option value="">請選擇</option>
            <option value="0">無</option>
            <option value="1">輕微</option>
            <option value="2">中等</option>
            <option value="3">嚴重</option>
            <option value="4">極嚴重</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">2. 罪惡感：</label>
        <select class="form-control" name="guilt" required>
            <option value="">請選擇</option>
            <option value="0">無</option>
            <option value="1">自責</option>
            <option value="2">罪惡感</option>
            <option value="3">責難妄想</option>
            <option value="4">指控性或懲罰性幻聽</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">3. 自殺：</label>
        <select class="form-control" name="suicide" required>
            <option value="">請選擇</option>
            <option value="0">無</option>
            <option value="1">覺得活著沒意思</option>
            <option value="2">希望死去或死亡念頭</option>
            <option value="3">自殺意念或手勢</option>
            <option value="4">自殺企圖</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">4. 入睡困難：</label>
        <select class="form-control" name="insomnia_early" required>
            <option value="">請選擇</option>
            <option value="0">無困難</option>
            <option value="1">偶爾難以入睡（超過30分鐘）</option>
            <option value="2">每晚難以入睡</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">5. 睡眠維持困難：</label>
        <select class="form-control" name="insomnia_middle" required>
            <option value="">請選擇</option>
            <option value="0">無困難</option>
            <option value="1">夜間不安，中途清醒</option>
            <option value="2">夜間醒來後難以再入睡</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">6. 早醒：</label>
        <select class="form-control" name="insomnia_late" required>
            <option value="">請選擇</option>
            <option value="0">無困難</option>
            <option value="1">早醒但能再入睡</option>
            <option value="2">無法再入睡</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">7. 工作和活動：</label>
        <select class="form-control" name="work" required>
            <option value="">請選擇</option>
            <option value="0">無困難</option>
            <option value="1">對活動感到無力、疲勞或虛弱</option>
            <option value="2">失去對活動的興趣</option>
            <option value="3">減少實際的活動時間</option>
            <option value="4">因病停止工作</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">8. 精神運動性遲滯：</label>
        <select class="form-control" name="retardation" required>
            <option value="">請選擇</option>
            <option value="0">言語和思考正常</option>
            <option value="1">在會談中輕微遲滯</option>
            <option value="2">會談中明顯遲滯</option>
            <option value="3">會談困難</option>
            <option value="4">完全僵硬</option>
        </select>
    </div>
`;

// MADRS Form Structure (simplified version)
const madrsForm = `
    <div class="form-row">
        <label class="form-label">1. 明顯的悲傷：</label>
        <select class="form-control" name="sadness" required>
            <option value="">請選擇</option>
            <option value="0">無悲傷</option>
            <option value="2">偶爾看起來沮喪，但能振作</option>
            <option value="4">看起來悲傷和不快樂大部分時間</option>
            <option value="6">看起來痛苦、絕望、沮喪所有時間</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">2. 內在緊張：</label>
        <select class="form-control" name="tension" required>
            <option value="">請選擇</option>
            <option value="0">平靜，僅內在緊張正常</option>
            <option value="2">偶爾感到煩躁和不安</option>
            <option value="4">持續的內在緊張或間歇性恐慌</option>
            <option value="6">無法控制的恐懼或痛苦</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">3. 睡眠減少：</label>
        <select class="form-control" name="sleep" required>
            <option value="">請選擇</option>
            <option value="0">睡眠如常</option>
            <option value="2">輕微難以入睡或睡眠略微減少</option>
            <option value="4">睡眠減少至少2小時</option>
            <option value="6">睡眠少於2-3小時</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">4. 食慾下降：</label>
        <select class="form-control" name="appetite" required>
            <option value="">請選擇</option>
            <option value="0">食慾正常或增加</option>
            <option value="2">食慾略微下降</option>
            <option value="4">無食慾，需要督促進食</option>
            <option value="6">需要勸說或用管餵食</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">5. 注意力困難：</label>
        <select class="form-control" name="concentration" required>
            <option value="">請選擇</option>
            <option value="0">無集中困難</option>
            <option value="2">偶爾難以集中思想</option>
            <option value="4">難以集中或持續注意</option>
            <option value="6">無法閱讀或交談</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">6. 無力感：</label>
        <select class="form-control" name="lassitude" required>
            <option value="">請選擇</option>
            <option value="0">幾乎沒有開始活動的困難</option>
            <option value="2">開始活動有困難</option>
            <option value="4">開始簡單日常活動有困難</option>
            <option value="6">完全無力，無法不幫助就做任何事</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">7. 無法感受：</label>
        <select class="form-control" name="inability_feel" required>
            <option value="">請選擇</option>
            <option value="0">正常興趣於周圍和其他人</option>
            <option value="2">減少享受興趣或活動的能力</option>
            <option value="4">缺乏感受興趣的能力</option>
            <option value="6">不愉快的感受體驗或完全缺乏感受</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">8. 悲觀思想：</label>
        <select class="form-control" name="pessimism" required>
            <option value="">請選擇</option>
            <option value="0">無悲觀思想</option>
            <option value="2">間歇懷疑性思考</option>
            <option value="4">持續悲觀思想</option>
            <option value="6">絕望或無助感</option>
        </select>
    </div>
    <div class="form-row">
        <label class="form-label">9. 自殺思想：</label>
        <select class="form-control" name="suicide" required>
            <option value="">請選擇</option>
            <option value="0">享受生活或順其自然</option>
            <option value="2">厭倦生活，僅對死亡有稍稍想法</option>
            <option value="4">自殺思想或考慮可能的死亡方法</option>
            <option value="6">明確的自殺計劃或有自殺意圖</option>
        </select>
    </div>
`;

// Calculator modal functionality
function showCalculatorModal(title, formHTML, calculateFunction) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('calculatorModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'calculatorModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2 id="modalTitle">${title}</h2>
                    <span class="close">&times;</span>
                </div>
                <form id="calculatorForm" class="calculator-form">
                    ${formHTML}
                    <button type="submit" class="btn btn--primary">計算分數</button>
                </form>
                <div id="resultDisplay" class="result-display" style="display: none;">
                    <div class="result-score" id="scoreResult"></div>
                    <div class="result-interpretation" id="interpretationResult"></div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Add event listeners
        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    } else {
        // Update existing modal
        modal.querySelector('#modalTitle').textContent = title;
        modal.querySelector('#calculatorForm').innerHTML = formHTML + '<button type="submit" class="btn btn--primary">計算分數</button>';
        modal.querySelector('#resultDisplay').style.display = 'none';
    }

    // Add form submit listener
    const form = modal.querySelector('#calculatorForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateFunction(form);
    });

    modal.style.display = 'block';
}

// Calculation functions
function calculateSPAQScore(form) {
    const formData = new FormData(form);
    const sleep = parseInt(formData.get('sleep')) || 0;
    const social = parseInt(formData.get('social')) || 0;
    const mood = parseInt(formData.get('mood')) || 0;
    const weight = parseInt(formData.get('weight')) || 0;
    const appetite = parseInt(formData.get('appetite')) || 0;
    const energy = parseInt(formData.get('energy')) || 0;
    const problem = parseInt(formData.get('problem')) || 0;

    const gss = sleep + social + mood + weight + appetite + energy;
    
    let interpretation = '';
    let severityClass = '';
    
    if (gss >= 11 && problem >= 2) {
        interpretation = '符合季節性情感障礙(SAD)診斷標準。建議進一步專業評估。';
        severityClass = 'severity-severe';
    } else if (gss >= 7) {
        interpretation = '有季節性變化模式，但未達診斷標準。建議監測症狀變化。';
        severityClass = 'severity-moderate';
    } else {
        interpretation = '季節性變化輕微，無明顯季節性情感障礙跡象。';
        severityClass = 'severity-mild';
    }

    displayResult(`GSS 總分: ${gss}/24`, interpretation, severityClass);
}

function calculateHAMDScore(form) {
    const formData = new FormData(form);
    let totalScore = 0;
    
    for (let [key, value] of formData.entries()) {
        totalScore += parseInt(value) || 0;
    }

    let interpretation = '';
    let severityClass = '';
    
    if (totalScore >= 19) {
        interpretation = '重度憂鬱症狀。需要立即專業治療。';
        severityClass = 'severity-severe';
    } else if (totalScore >= 14) {
        interpretation = '中度憂鬱症狀。建議專業評估和治療。';
        severityClass = 'severity-moderate';
    } else if (totalScore >= 8) {
        interpretation = '輕度憂鬱症狀。建議持續監測。';
        severityClass = 'severity-mild';
    } else {
        interpretation = '無明顯憂鬱症狀。';
        severityClass = 'severity-mild';
    }

    displayResult(`HAM-D 總分: ${totalScore}`, interpretation, severityClass);
}

function calculateMADRSScore(form) {
    const formData = new FormData(form);
    let totalScore = 0;
    
    for (let [key, value] of formData.entries()) {
        totalScore += parseInt(value) || 0;
    }

    let interpretation = '';
    let severityClass = '';
    
    if (totalScore >= 35) {
        interpretation = '重度憂鬱症狀。需要密集治療和監測。';
        severityClass = 'severity-severe';
    } else if (totalScore >= 20) {
        interpretation = '中度憂鬱症狀。建議積極治療介入。';
        severityClass = 'severity-moderate';
    } else if (totalScore >= 7) {
        interpretation = '輕度憂鬱症狀。建議定期評估。';
        severityClass = 'severity-mild';
    } else {
        interpretation = '無明顯憂鬱症狀。';
        severityClass = 'severity-mild';
    }

    displayResult(`MADRS 總分: ${totalScore}/60`, interpretation, severityClass);
}

function displayResult(score, interpretation, severityClass) {
    const resultDisplay = document.getElementById('resultDisplay');
    const scoreResult = document.getElementById('scoreResult');
    const interpretationResult = document.getElementById('interpretationResult');
    
    scoreResult.textContent = score;
    scoreResult.className = `result-score ${severityClass}`;
    interpretationResult.innerHTML = `<p><strong>結果解釋：</strong></p><p>${interpretation}</p>`;
    
    resultDisplay.style.display = 'block';
}

// Print functionality
function printTool(toolName) {
    let printContent = '';
    switch(toolName) {
        case 'spaq':
            printContent = `
                <h2>SPAQ 季節模式評估問卷</h2>
                <p><strong>用途：</strong>季節性情感障礙篩檢</p>
                <p><strong>施測時間：</strong>5-10分鐘</p>
                <p><strong>計分範圍：</strong>GSS: 0-24分</p>
                <p><strong>診斷標準：</strong>SAD: GSS≥11+問題≥2</p>
                <p><strong>信效度：</strong>α=0.80-0.90, 敏感性94%</p>
                <hr>
                <p>請評估您在不同季節中的變化程度（0=無變化，4=極度變化）：</p>
                <ol>
                    <li>睡眠時間變化： ___</li>
                    <li>社交活動變化： ___</li>
                    <li>情緒變化： ___</li>
                    <li>體重變化： ___</li>
                    <li>食慾變化： ___</li>
                    <li>精力水平變化： ___</li>
                </ol>
                <p>季節性變化是否造成問題（0-5分）： ___</p>
                <p><strong>GSS總分：</strong> ___/24</p>
            `;
            break;
        case 'hamd':
            printContent = `
                <h2>HAM-D 漢密爾頓憂鬱量表</h2>
                <p><strong>用途：</strong>憂鬱症狀嚴重度評估</p>
                <p><strong>施測時間：</strong>15-20分鐘</p>
                <p><strong>嚴重度分級：</strong>輕度8-13分，中度14-18分，重度≥19分</p>
                <hr>
                <p>評估項目（請專業人員評分）：</p>
                <ol>
                    <li>憂鬱情緒 (0-4): ___</li>
                    <li>罪惡感 (0-4): ___</li>
                    <li>自殺 (0-4): ___</li>
                    <li>入睡困難 (0-2): ___</li>
                    <li>睡眠維持困難 (0-2): ___</li>
                    <li>早醒 (0-2): ___</li>
                    <li>工作和活動 (0-4): ___</li>
                    <li>精神運動性遲滯 (0-4): ___</li>
                </ol>
                <p><strong>總分：</strong> ___</p>
            `;
            break;
        case 'madrs':
            printContent = `
                <h2>MADRS 蒙哥馬利憂鬱評定量表</h2>
                <p><strong>用途：</strong>憂鬱症狀變化監測</p>
                <p><strong>施測時間：</strong>10-15分鐘</p>
                <p><strong>嚴重度分級：</strong>輕度7-19分，中度20-34分，重度≥35分</p>
                <hr>
                <p>評估項目（0-6分制）：</p>
                <ol>
                    <li>明顯的悲傷: ___</li>
                    <li>內在緊張: ___</li>
                    <li>睡眠減少: ___</li>
                    <li>食慾下降: ___</li>
                    <li>注意力困難: ___</li>
                    <li>無力感: ___</li>
                    <li>無法感受: ___</li>
                    <li>悲觀思想: ___</li>
                    <li>自殺思想: ___</li>
                </ol>
                <p><strong>總分：</strong> ___/60</p>
            `;
            break;
    }
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>列印 - ${toolName.toUpperCase()}</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h2 { color: #2180ad; }
                hr { margin: 20px 0; }
                ol, ul { margin-left: 20px; }
                li { margin-bottom: 8px; }
                p { margin-bottom: 10px; }
            </style>
        </head>
        <body>
            ${printContent}
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling behavior
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key closes modal
    if (e.key === 'Escape') {
        const modal = document.getElementById('calculatorModal');
        if (modal && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    }
    
    // Tab navigation through tabs
    if (e.key === 'Tab' && e.ctrlKey) {
        e.preventDefault();
        const tabs = document.querySelectorAll('.nav-tab');
        const activeTab = document.querySelector('.nav-tab.active');
        const currentIndex = Array.from(tabs).indexOf(activeTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        const nextTab = tabs[nextIndex];
        const tabName = nextTab.getAttribute('data-tab');
        switchTab(tabName);
    }
});

// Initialize tooltips and help text
function initializeHelpSystem() {
    // Add help tooltips to form elements
    const helpTexts = {
        'spaq': '季節模式評估問卷用於篩檢季節性情感障礙',
        'hamd': '漢密爾頓憂鬱量表是評估憂鬱症狀嚴重度的標準工具',
        'madrs': '蒙哥馬利憂鬱評定量表特別適用於監測症狀變化'
    };
    
    // Add help functionality here if needed
}

// Export data functionality (for clinical records)
function exportAssessmentData(toolName, score, interpretation) {
    const data = {
        tool: toolName,
        date: new Date().toISOString().split('T')[0],
        score: score,
        interpretation: interpretation,
        timestamp: new Date().toISOString()
    };
    
    const csvContent = `工具,日期,分數,解釋,時間戳\n${data.tool},${data.date},${data.score},"${data.interpretation}",${data.timestamp}`;
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${toolName}_assessment_${data.date}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeHelpSystem();
    
    // Add any additional initialization here
    console.log('SAD Clinical Toolkit initialized successfully');
});