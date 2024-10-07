

const students = [
    { code: '005', nameAR: 'سهاد حسيب حسين', nameEN: 'Suhad Haseeb Hussein', instructor: 'عبدالرحمن احمد', course: 'Types of anesthesia\\1' },
    { code: '009', nameAR: 'علي عادل قادر', nameEN: 'Ali Adel Qader', instructor: 'عبدالرحمن احمد', course: 'Types of anesthesia\\1' },
    { code: '011', nameAR: 'سفيان طارق فاضل', nameEN: 'Sufian tariq fadel', instructor: 'عبدالرحمن احمد', course: 'Types of anesthesia\\1' },
    { code: '012', nameAR: 'اسيل فلاح عبدالحسين', nameEN: 'Aseel falah abd AL Hassan', instructor: 'عبدالرحمن احمد', course: 'Types of anesthesia\\1' },
    { code: '022', nameAR: 'جنات موسى حسن', nameEN: 'Jannat Moussa Hassan', instructor: 'عبد الرحمن احمد', course: 'Types of anesthesia\\1' },
    { code: '023', nameAR: 'ملاك اورال مدحت', nameEN: 'Mlak oral midahat', instructor: 'عبد الرحمن احمد', course: 'Types of anesthesia\\1' },
    { code: '025', nameAR: 'مصطفى محمد حسن', nameEN: 'Mustafa Muhammed Hasan', instructor: 'عبدالرحمن احمد', course: 'Types of anesthesia\\1' },
    { code: '030', nameAR: 'ايلاف عصام محمد', nameEN: 'Elaf Esam Mohamed', instructor: 'عبدالرحمن احمد', course: 'Types of anesthesia\\1' },
    { code: '031', nameAR: 'مريم صلاح جهاد', nameEN: 'Mariam Salah Jihad', instructor: 'عبدالرحمن احمد', course: 'Types of anesthesia\\1' },
    { code: '034', nameAR: 'الاء عبدالقادر عبدالله', nameEN: 'Alaabdullqader abdullah', instructor: 'عبدالرحمن احمد', course: 'Types of anesthesia\\1' },
    { code: '035', nameAR: 'سيماء خليل حاجم', nameEN: 'Semaa Khalil Hajim', instructor: 'عبدالرحمن احمد', course: 'Types of anesthesia\\1' },
    { code: '041', nameAR: 'حنين وعد عز الدين', nameEN: 'Haneen Waad Ezzaldin', instructor: 'عبدالرحمن احمد', course: 'Types of anesthesia\\1' },
    { code: '044', nameAR: 'محمد عثمان احمد', nameEN: 'Mohammed osman Ahmed', instructor: 'عبدالرحمن', course: 'Types of anesthesia\\1' },
    { code: '045', nameAR: 'اسماء اوميد خورشيد', nameEN: 'Asmaa Omed Khorsheed', instructor: 'عبدالرحمن', course: 'Types of anesthesia\\1' },
    { code: '048', nameAR: 'مصطفى كمال عبدالمجيد', nameEN: 'Mustafa Kamal abdalmajed', instructor: 'عبدالرحمن', course: 'Types of anesthesia\\1' },
    { code: '049', nameAR: 'زينب احسان نوري', nameEN: 'Zainb ihsan nuri', instructor: 'عبدالرحمن', course: 'Skills in OP room\\1' },
    { code: '050', nameAR: 'احمد هادي حسن', nameEN: 'Ahmed hadi hassan', instructor: 'عبدالرحمن', course: 'Skills in OP room\\1' },
    { code: '051', nameAR: 'اسماء حسين احمد', nameEN: 'Asmaa hussein ahmed', instructor: 'عبدالرحمن', course: 'Skills in OP room\\1' },
    { code: '052', nameAR: 'زينب علي احمد', nameEN: 'Zainab Ali Ahmed', instructor: 'عبدالرحمن', course: 'Skills in OP room\\1' },
    { code: '053', nameAR: 'محمد كمال محي الدين', nameEN: 'Mohammed kmal mohialdin', instructor: 'عبدالرحمن', course: 'Skills in OP room\\1' },
    { code: '054', nameAR: 'سارة نوزاد عبدالله', nameEN: 'Sarah Nowzad abdullah', instructor: 'عبدالرحمن', course: 'Skills in OP room\\1' },
    { code: '055', nameAR: 'نبا محمد علي', nameEN: 'Nabaa mohammed ali', instructor: 'عبدالرحمن', course: 'Skills in OP room\\1' },
    { code: '056', nameAR: 'زينب فخرالدين محمد', nameEN: 'Zainab Fakhreldin mohammed', instructor: 'عبدالرحمن', course: 'Skills in OP room\\1' },
    { code: '057', nameAR: 'ملك ايوب يوسف', nameEN: '', instructor: 'عبدالرحمن', course: 'Skills in OP room\\1' },
    { code: '058', nameAR: 'يوسف سعد مجيب', nameEN: '', instructor: 'عبدالرحمن', course: 'Skills in OP room\\1' },
    { code: '059', nameAR: 'افان عدنان رشيد', nameEN: '', instructor: 'عبدالرحمن', course: 'Skills in OP room\\1' },
    { code: '060', nameAR: 'مصطفى اسماعيل بكر', nameEN: '', instructor: 'عبدالرحمن', course: 'Skills in OP room\\1' },
    { code: '065', nameAR: 'آمنة محمد مزاحم', nameEN: 'Amna Muhammad Muzahim', instructor: 'حذيفة', course: 'دورة الاسعافات الاولية' },
    { code: '066', nameAR: 'بيان مجاهد خظير', nameEN: 'Bayan mojahed kdaer', instructor: 'حذيفة', course: 'دورة الاسعافات الاولية' },
    { code: '068', nameAR: 'ايه عبدالرحيم محمد', nameEN: 'Aya Abdulrahim mohammed', instructor: 'حذيفة', course: 'دورة الاسعافات الاولية' },
    { code: '069', nameAR: 'محمد قاسم جبوري', nameEN: 'Mohammed Qasim Jabouri', instructor: 'حذيفة', course: 'دورة الاسعافات الاولية' },
    { code: '070', nameAR: 'حمد علي نجم', nameEN: 'Hamad Ali Najeim', instructor: 'حذيفة', course: 'دورة الاسعافات الاولية' },
    { code: '072', nameAR: 'طيبه طلال عبد العزيز', nameEN: 'Tiba Talal Abdulaziz', instructor: 'حذيفة', course: 'دورة الاسعافات الاولية' },
    { code: '074', nameAR: 'محمد نبيل كريم', nameEN: 'MOHAMMED NABEEL KAREEM', instructor: 'حذيفة', course: 'دورة الاسعافات الاولية' },
    { code: '075', nameAR: 'حفصه طاهر محمود', nameEN: 'Hafsa Taher Mahmood', instructor: 'حذيفة', course: 'دورة الاسعافات الاولية' },
    { code: '076', nameAR: 'أمينة برهان عزاوي', nameEN: 'Amena burhan azzawi', instructor: 'حذيفة', course: 'دورة الاسعافات الاولية' },
    { code: '077', nameAR: 'ضمياء صفاء حمد', nameEN: 'Damya Safaa Hamad', instructor: 'حذيفة', course: 'دورة الاسعافات الاولية' },
    { code: '078', nameAR: 'اية فاضل خليل', nameEN: 'Aya fadhel khalel', instructor: 'حذيفة', course: 'دورة الاسعافات الاولية' },
    { code: '080', nameAR: 'مودة مصطفى كامل', nameEN: 'mawadda mustafa kamil', instructor: 'حذيفة', course: 'دورة الاسعافات الاولية' },
    { code: '083', nameAR: 'نور باسم صباح', nameEN: 'Noor Basim sabah', instructor: 'حذيفة', course: 'دورة الاسعافات الاولية' },
    { code: '086', nameAR: 'غفران ثابت محمد', nameEN: 'Ghufran Thabet Mohammed', instructor: 'حذيفة', course: 'دورة الاسعافات الاولية' },
    { code: '087', nameAR: 'ايمان صباح نوري', nameEN: 'Eman sabah noori', instructor: 'عبدالرحمن احمد', course: 'كورس التخدير اسبوعين' },
    { code: '088', nameAR: 'هاجر فاضل شامل', nameEN: 'Hajir fadhil shamil', instructor: 'عبدالرحمن احمد', course: 'كورس التخدير اسبوعين' },
    { code: '089', nameAR: 'فاضل محمد حسن', nameEN: 'Fadhil mahmmed hassan', instructor: 'عبدالرحمن احمد', course: 'كورس التخدير اسبوعين' },
    { code: '090', nameAR: 'عباس عمر احمد', nameEN: 'Abbas omar ahmed', instructor: 'عبدالرحمن احمد', course: 'كورس التخدير اسبوعين' },
    { code: '091', nameAR: 'مرتضى محمد عسكر', nameEN: 'mortada mohmmed asker', instructor: 'عبدالرحمن احمد', course: 'كورس التخدير اسبوعين' },
    { code: '092', nameAR: 'بهيه محمد ظاهر', nameEN: 'Bahiya mohammed dahir', instructor: 'عبدالرحمن احمد', course: 'كورس التخدير اسبوعين' },
    { code: '093', nameAR: 'بلال احمد عبدالله', nameEN: 'Bilal Ahmed abdullah', instructor: 'عبدالرحمن احمد', course: 'كورس التخدير اسبوعين' },
    { code: '094', nameAR: 'هيثم حسين حمد', nameEN: 'Haitham Hussein Hamad', instructor: 'عبد الرحمن احمد', course: 'كورس التخدير اسبوعين' },
    { code: '095', nameAR: 'احمد محمد سامي', nameEN: 'Ahmed Muhammed Sami', instructor: 'اركان جلال', course: '' },
    { code: '096', nameAR: 'ملك صدام محمد', nameEN: 'Melek Sadam Muhammed', instructor: 'اركان جلال', course: '' },
    { code: '097', nameAR: 'قحطان عبداللطيف حسن', nameEN: 'Qahtan Abdul Latif Hassan', instructor: 'اركان جلال', course: '' },
    { code: '098', nameAR: 'زينب حسين عيسى', nameEN: 'Zainab Hussein Essa', instructor: 'اركان جلال', course: 'كورس الاشعة' },
    { code: '099', nameAR: 'سارة سعود ابراهيم', nameEN: 'Sarah Saud Ibrahim', instructor: 'اركان جلال', course: 'كورس الاشعة' },
    { code: '100', nameAR: 'عسل مظفر حسين', nameEN: 'Asal Muzaffar Hussian', instructor: 'اركان جلال', course: 'كورس الاشعة' },
    { code: '101', nameAR: 'ايناس عباس عبدالله', nameEN: 'Enas Abbas Abdullah', instructor: 'اركان جلال', course: 'كورس الاشعة و سيتي' },
    { code: '102', nameAR: 'ميديا غازي شكور', nameEN: 'MEDYA GHAZi SHAKOR', instructor: 'اركان جلال', course: 'كورس الاشعة' },
    { code: '103', nameAR: 'محمد نورالدين خسرو', nameEN: 'Mohammed Noorulden Khsrw', instructor: 'اركان جلال', course: 'كورس الاشعة وسيتي' },
    { code: '104', nameAR: 'عبد الرحمن عماد خليل', nameEN: 'Abdalrhman Emad Khalil', instructor: 'اركان جلال', course: 'كورس الاشعة' },
    { code: '105', nameAR: 'لارين كامران محمد', nameEN: 'Larin Kamaran Mohamed', instructor: 'اركان جلال', course: 'كورس الاشعة' },
    { code: '106', nameAR: 'طيف صباح محمود', nameEN: 'Taif Sabah Mahmoud', instructor: 'اركان جلال', course: 'كورس الاشعة' },
    { code: '107', nameAR: 'اسماء يلماز عبدالخالق', nameEN: 'Asmaa Yalmaz Abdulkhaleq', instructor: 'اركان جلال', course: 'كورس الاشعة' },
    { code: '108', nameAR: 'غسان حمد رشيد', nameEN: 'Hasan Hamad Rasheed', instructor: 'اركان جلال', course: 'كورس الاشعة' },
    { code: '109', nameAR: 'علي نجدت رشيد', nameEN: 'Ali Najdat Rashid', instructor: 'اركان جلال', course: 'كورس الاشعة' },
    { code: '110', nameAR: 'فدك ارجان كريم', nameEN: 'Fadak Arjan Kareem', instructor: 'اركان جلال', course: 'كورس الاشعة' },
    { code: '111', nameAR: 'فاطمة محمد مهدي', nameEN: 'Fatima mohamed mehdi', instructor: 'اركان جلال', course: 'كورس الاشعة' },
    { code: '112', nameAR: 'هارون رشيد عبدالرحمان', nameEN: 'Haroon Rasheed abdulrahman', instructor: 'اركان جلال', course: 'كورس الاشعة' },
    { code: '113', nameAR: 'ابراهيم عامر ابراهيم', nameEN: 'Ibrahim Amer Ibrahim', instructor: 'HUTHAIFA', course: 'FIRST AID' },
    { code: '114', nameAR: 'اطياف علي بدر', nameEN: 'Atyaf Ali badir', instructor: 'HUTHAIFA', course: 'FIRST AID' },
    { code: '115', nameAR: 'شهد عباس فاضل', nameEN: 'Shahad abbas fadil', instructor: 'HUTHAIFA', course: 'FIRST AID' },
    { code: '116', nameAR: 'شيماء عبدالرحمن سلوم', nameEN: 'Shimaa abd alrahman salom', instructor: 'HUTHAIFA', course: 'FIRST AID' },
    { code: '117', nameAR: 'ضيف الله شلال حبيب', nameEN: 'dhaif allah shallal habeeb', instructor: 'HUTHAIFA', course: 'FIRST AID' },
    { code: '118', nameAR: 'فاطمة عبدالله احمد', nameEN: 'fatema abdullah ahmed', instructor: 'HUTHAIFA', course: 'FIRST AID' },
    { code: '119', nameAR: 'شيماء خالد ابراهيم', nameEN: 'shimaa khalid ibrahim', instructor: 'HUTHAIFA', course: 'FIRST AID' },
    { code: '120', nameAR: 'اية مازن خضير', nameEN: 'aya mazin khadir', instructor: 'HUTHAIFA', course: 'FIRST AID' },
    { code: '121', nameAR: 'حمزة فوزي نجرس', nameEN: 'HAMZA FAWZI NAJRES', instructor: 'HUTHAIFA', course: 'FIRST AID' },
    { code: '122', nameAR: 'بكر محمد حسن جميل', nameEN: 'BAKER MOHAMMED HASSAN', instructor: 'HUTHAIFA', course: 'FIRST AID' },
    { code: '123', nameAR: 'مراد صلاح طاهر', nameEN: 'Murad Salah Taher Ali', instructor: 'اركان جلال', course: '' },
    { code: '124', nameAR: ' بناز نعمان هاوار', nameEN: 'Banaz Noaman Hawa', instructor: 'اركان جلال', course: '' }
];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultBox = document.getElementById('resultBox');

    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    function handleSearch() {
        const searchCode = searchInput.value.trim();
        const student = students.find(s => s.code === searchCode);

        if (student) {
            displaySuccess(student);
        } else {
            displayError();
        }
    }

    function displaySuccess(student) {
        resultBox.innerHTML = `
            <div class="success">
                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                    <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
                <span class="result-info">الشهادة موثقة ومعترف بها من قبل نقابة ذوي المهن الصحية </span>
                <p class="result-name">${student.nameAR}</p>
                <p class="result-info">${student.nameEN}</p>
                <p class="result-info">الأستاذ: ${student.instructor}</p>
                <p class="result-info">الدورة: ${student.course}</p>
            
            </div>
        `;
    }

    function displayError() {
        resultBox.innerHTML = `
            <div class="error">
                <svg class="xmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle class="xmark__circle" cx="26" cy="26" r="25" fill="none"/>
                    <path class="xmark__x" fill="none" d="M16 16 36 36 M36 16 16 36"/>
                </svg>
                <span class="result-name">غير مشترك في دورات نقابة ذوي المهن الصحية أو الشهادة مزورة وغير مقبولة</span>
                <a href="https://forms.gle/YTL8Lm4GUCnbDDei7" class="subscribe-btn" target="_blank">اشترك الآن</a>
            </div>
        `;
    }
});
