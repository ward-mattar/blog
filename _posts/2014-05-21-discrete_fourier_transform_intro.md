---
id: 3104
title: "התמרת פורייה הבדידה - מה זה בכלל?"
date: 2014-05-21 22:40:48
layout: post
categories: 
  - אנליזה מתמטית
tags: 
  - התמרת פורייה
  - התמרת פורייה הבדידה
---
עד עכשיו ראינו שני סוגים של התמרות פורייה: אחת עבור פונקציות <strong>מחזוריות</strong> מעל הממשיים, כלומר פונקציות שמוגדרות מעל הקטע {::nomarkdown}\( \left[-\pi,\pi\right]\){:/nomarkdown} ואנחנו יכולים "להרחיב" אותן לכל {::nomarkdown}\( \mathbb{R}\){:/nomarkdown} באופן מחזורי; ופונקציות שהוגדרו מראש על כל {::nomarkdown}\( \mathbb{R}\){:/nomarkdown}. להתמרה במקרה הראשון קראנו "טורי פורייה" כי התוצאה המתקבלת היא פירוק של הפונקציה לסכום - טור - של פונקציות בסיס. במקרה השני קיבלנו התמרה שהיא בעצמה פונקציה ממשית. ההבדל בין המקרה הראשון והשני הוא שבמקרה הראשון ההתמרה יוצאת לנו פונקציה<strong> </strong>שמוגדרת על מרחב <strong>בדיד </strong>בזמן שבמקרה השני יוצאת לנו פונקציה על מרחב <strong>רציף</strong>.

מה זה בדיוק מרחב רציף ומה זה בדיוק מרחב בדיד קשה לומר בלי הגדרות נוספות וזה לא קריטי לנו כרגע, אבל אינטואיציה לא רעה לעומק ההבדל היא שמרחב בדיד הוא בן מניה - יש לו מספר "קטן יחסית" של איברים, בזמן ש-{::nomarkdown}\( \mathbb{R}\){:/nomarkdown} היא קבוצה לא בת מניה - יש בה "המון" איברים. ההבדל הזה גורם להבדלים טכניים ברורים - מעל מרחב בדיד יש משמעות לדיבור על טורים, מעל מרחב רציף התורה של טורים כבר לא עובדת וצריך לדבר על אינטגרלים במקום זה. גם בהסתברות יש לנו את התופעה הזו ואפשר לראות הבדל מובהק בין הסתברות על מרחב בדיד - שהיא פשוטה ונחמדה ואינטואיטיבית יחסית - ובין הסתברות על מרחב רציף שהיא מהומה שלמה. וכמובן, ייצוגים של פונקציות במחשב הם לרוב ייצוגים בדידים. אמנם, אפשר לאכסן במחשב במדויק פונקציה כמו {::nomarkdown}\( f\left(x\right)=x^{2}\){:/nomarkdown} גם אם היא מוגדרת מעל הממשיים, אבל עבור פונקציות כלליות, שנתונות לנו בעיקר בתור אוסף זוגות קלט-פלט, זה כבר לא אפשרי.

כל המבוא הזה בא לומר שהצעד המתבקש הבא אחרי מה שכבר ראינו הוא לדבר על התמרת פורייה עבור פונקציות שמוגדרות לא מעל {::nomarkdown}\( \mathbb{R}\){:/nomarkdown} אלא מעל {::nomarkdown}\( \mathbb{Z}\){:/nomarkdown}. כמקודם, אני רוצה לדבר על שני מקרים שונים - זה של פונקציות מחזוריות וזה של פונקציות לא מחזוריות. הראשונות יהיו מעניינות במיוחד כי הן ניתנות לתיאור על ידי סדרה <strong>סופית</strong> של מספרים - כלומר, כולן ניתנות לייצוג מדויק לחלוטין במחשב. לשתי ההתמרות הללו אקרא "התמרת פורייה הבדידה", למרות שלרוב מי שמשתמש בביטוי הזה מתכוון רק למקרה של פונקציות מחזוריות, והמקרה השני מכונה לעתים "התמרת פורייה בזמן בדיד" כדי להבדיל ביניהם.

נתחיל, כרגיל, מהתיאוריה הבסיסית; אבל אחר כך אעבור סוף סוף להמחשה של שימוש בסיסי כלשהו לכל העסק הזה, על ידי הכנסת מושג מורכב יותר שנקרא <strong>קונבולוציה</strong>. הייתי יכול להראות קונבולוציות כבר קודם, אבל אני חושב שההקשר שבו הכי קל לעכל אותם הוא ההקשר הבדיד ולכן התאפקתי עד כה.

בשלב הזה אנחנו כבר למודי קרבות עם התמרות פורייה ויודעים מה מצפה לנו - מה שקראתי לו משוואות סינתזה ואנליזה. משוואת אנליזה לוקחת פונקציה ו"מפרקת" אותה לרכיבים - כלומר, נותנת לנו את ההתמרה של הפונקציה. משוואת סינתזה לוקחת את הרכיבים ו"בונה מחדש" את הפונקציה - כלומר, נותנת לנו את ההתמרה ההפוכה של הפונקציה. ה"רכיבים" שלנו בהקשר של פורייה הן פונקציות טריגונומטריות - בפוסט הקודם עברתי להשתמש באקספוננט מרוכב במקום לכתוב במפורש סינוסים וקוסינוסים.

לצורך תזכורת, הנה משוואות האנליזה והסינתזה של פונקציות {::nomarkdown}\( f:\mathbb{R}\to\mathbb{C}\){:/nomarkdown} ו-{::nomarkdown}\( g:\left[-\pi,\pi\right]\to\mathbb{C}\){:/nomarkdown}:

<strong>אנליזה</strong>:

{::nomarkdown}\( \hat{f}\left(\omega\right)=\int_{-\infty}^{\infty}f\left(t\right)e^{-2\pi i\omega t}dt\){:/nomarkdown}

{::nomarkdown}\( \hat{g}\left(n\right)=\frac{1}{2\pi}\int_{-\pi}^{\pi}g\left(x\right)e^{-inx}dx\){:/nomarkdown}

<strong>סינתזה:</strong>

{::nomarkdown}\( f\left(t\right)=\int_{-\infty}^{\infty}\hat{f}\left(\omega\right)e^{2\pi i\omega t}d\omega\){:/nomarkdown}

{::nomarkdown}\( g\left(x\right)=\sum_{n=-\infty}^{\infty}\hat{g}\left(n\right)e^{inx}\){:/nomarkdown}

עכשיו בואו נעבור לדבר על פונקציות בדידות. ניקח פונקציה {::nomarkdown}\( f:\mathbb{Z}\to\mathbb{C}\){:/nomarkdown} ופונקציה {::nomarkdown}\( g:\mathbb{Z}_{N}\to\mathbb{C}\){:/nomarkdown} כאשר {::nomarkdown}\( N\){:/nomarkdown} הוא מספר טבעי חיובי כלשהו. {::nomarkdown}\( \mathbb{Z}_{N}=\left\{ 0,1,2,\dots,N-1\right\} \){:/nomarkdown} למי שתוהה מה פשר הסימון הזה ולא מכיר אותו.

בואו נתחיל מ-{::nomarkdown}\( f\){:/nomarkdown}. איך משוואת האנליזה שלה תיראה? האם הגיוני לכתוב {::nomarkdown}\( \hat{f}\left(\omega\right)=\int_{-\infty}^{\infty}f\left(t\right)e^{-2\pi i\omega t}dt\){:/nomarkdown} גם במקרה הזה? התשובה היא כמובן "לא", כי {::nomarkdown}\( f\left(t\right)\){:/nomarkdown} לא מוגדרת כמעט עבור אף ערך של {::nomarkdown}\( t\){:/nomarkdown}. אנחנו הולכים להצטמצם רק לערכים שבהם {::nomarkdown}\( f\){:/nomarkdown} מוגדרת, ולכן נעבור מאינטגרל לסכום:

{::nomarkdown}\( \hat{f}\left(\omega\right)=\sum_{n=-\infty}^{\infty}f\left(n\right)e^{-2\pi i\omega n}\){:/nomarkdown}

{::nomarkdown}\( \hat{f}\){:/nomarkdown} היא פונקציה ממשית - לכל מספר ממשי שנציב בה, יש הגיון מאחורי הערך שנקבל. אבל די קל לראות שזו תהיה פונקציה <strong>מחזורית</strong>: באופן כללי, {::nomarkdown}\( e^{2\pi ik}=1\){:/nomarkdown} לכל {::nomarkdown}\( k\){:/nomarkdown} שלם (זה מייצג {::nomarkdown}\( k\){:/nomarkdown} סיבובים נגד כיוון השעון על מעגל ברדיוס 1 כשנקודת ההתחלה שלנו היא הנקודה {::nomarkdown}\( \left(1,0\right)\){:/nomarkdown}), ולכן {::nomarkdown}\( e^{-2\pi i\left(\omega+k\right)n}=e^{-2\pi i\omega n}\cdot e^{-2\pi ikn}=e^{-2\pi i\omega n}\cdot\left(e^{2\pi ik}\right)^{-n}=e^{-2\pi i\omega n}\){:/nomarkdown}. זה כמובן לא מפתיע בכלל - ראינו שפונקציה מחזורית על {::nomarkdown}\( \mathbb{R}\){:/nomarkdown} עוברת לפונקציה על {::nomarkdown}\( \mathbb{Z}\){:/nomarkdown} על ידי התמרת פורייה, ושיש התמרה בכיוון ההפוך שמחזירה את הפונקציה על {::nomarkdown}\( \mathbb{Z}\){:/nomarkdown} להיות פונקציה מחזורית על {::nomarkdown}\( \mathbb{R}\){:/nomarkdown}; מה שאנחנו עושים כרגע הוא פשוט להתחיל מהפונקציה על {::nomarkdown}\( \mathbb{Z}\){:/nomarkdown}, אבל מה ההבדל?

התשובה היא שאין ממש הבדל - משוואות האנליזה והסינתזה יכולות להילקח מהמשוואות המתאימות עבור טורי פורייה, עם היפוך סימנים ותו לא:

<strong>אנליזה</strong>:

{::nomarkdown}\( \hat{f}\left(x\right)=\sum_{n=-\infty}^{\infty}f\left(n\right)e^{-inx}\){:/nomarkdown}

<strong>סינתזה:</strong>

{::nomarkdown}\( f\left(n\right)=\frac{1}{2\pi}\int_{-\pi}^{\pi}\hat{f}\left(x\right)e^{inx}dx\){:/nomarkdown}

בשל כך, אני רוצה לקפוץ אל החלק היותר מעניין של הפוסט - המקרה שבו יש לנו פונקציה מחזורית על הטבעיים, {::nomarkdown}\( g:\mathbb{Z}_{N}\to\mathbb{C}\){:/nomarkdown}. במקרה הזה, אפשר לזהות את הפונקציה עם סדרת הערכים שהיא מחזירה - סדרה שאסמן {::nomarkdown}\( a_{0},a_{1},a_{2},\dots,a_{N-1}\){:/nomarkdown} (כלומר - {::nomarkdown}\( a_{k}=g\left(k\right)\){:/nomarkdown}). התמרת פורייה לוקחת את סדרת הערכים הזו ומחזירה, כרגיל, את המקדמים בפירוק שלה לרכיבים. וממי יורכבו הרכיבים הללו? הבה וניזכר מה קרה בטורי פורייה המקוריים - התחלנו מפונקציה מחזורית, ומצאנו פונקציות מחזוריות "קנוניות" שבעזרתן נבנה אותה. גם כאן אנו מתחילים מפונקציה {::nomarkdown}\( N\){:/nomarkdown}-מחזורית, ולכן רוצים פונקציות אקספוננט שהן {::nomarkdown}\( N\){:/nomarkdown}-מחזוריות (על קלטים שהם מספרים שלמים). לא קשה במיוחד לראות שאלו חייבות להיות פונקציות מהצורה {::nomarkdown}\( t\left(n\right)=e^{\frac{2\pi ik}{N}n}\){:/nomarkdown} כאשר {::nomarkdown}\( 0\le k&lt;N\){:/nomarkdown}. למה? כי בואו נניח ש-{::nomarkdown}\( t\left(n\right)=e^{isn}\){:/nomarkdown} היא פונקצית אקספוננט {::nomarkdown}\( N\){:/nomarkdown}-מחזורית, כלומר {::nomarkdown}\( e^{isn}=e^{is\left(n+N\right)}\){:/nomarkdown}, אז נקבל {::nomarkdown}\( e^{isN}=1\){:/nomarkdown}. עכשיו, למשוואה הזו יש פתרון רק אם {::nomarkdown}\( 2\pi\|sN\){:/nomarkdown}, כלומר רק אם קיים {::nomarkdown}\( k\){:/nomarkdown} כך ש-{::nomarkdown}\( 2\pi k=sN\){:/nomarkdown}, כלומר {::nomarkdown}\( s=\frac{2\pi k}{N}\){:/nomarkdown}, כנדרש.

עכשיו, התרגלנו לחשוב על האקספוננטים שלנו בתור סינוסים וקוסינוסים, אבל בהקשר הנוכחי שלנו יש לפונקציות {::nomarkdown}\( t\left(n\right)=e^{\frac{2\pi ik}{N}n}\){:/nomarkdown} משמעות נוספת - אלו הם <strong>שורשי היחידה</strong> מסדר {::nomarkdown}\( N\){:/nomarkdown}. תזכורת: מספר מרוכב {::nomarkdown}\( x\){:/nomarkdown} הוא שורש יחידה מסדר {::nomarkdown}\( N\){:/nomarkdown} אם {::nomarkdown}\( x^{N}=1\){:/nomarkdown} (במספרים הממשיים יש רק שני מספרים שחזקה שלהם יכולה לתת 1 - רק 1 עצמו ומינוס 1, ולכן זה מעניין רק בהקשר של מספרים מרוכבים). שורשי היחידה מסדר {::nomarkdown}\( N\){:/nomarkdown} הם <strong>חבורה כפלית</strong> - אם כופלים שניים מהם מקבלים שוב פעם שורש יחידה מסדר {::nomarkdown}\( N\){:/nomarkdown}. כמו כן, אם נסמן {::nomarkdown}\( \omega=e^{\frac{2\pi i}{N}}\){:/nomarkdown} (אין קשר בין הסימן {::nomarkdown}\( \omega\){:/nomarkdown} כאן לסימן שהשתמשנו בו קודם בשביל לתאר את המשתנה של "מרחב התדר" - זה פשוט אותו סימן שמשמש בהקשרים שונים) נקבל שורש יחידה מסדר {::nomarkdown}\( N\){:/nomarkdown} שחזקות שלו נותנות את כל יתר שורשי היחידה - כל שורשי היחידה מסדר {::nomarkdown}\( N\){:/nomarkdown} הם {::nomarkdown}\( \omega^{0},\omega^{1},\omega^{2},\omega^{3},\dots\omega^{N-1}\){:/nomarkdown}. לצורך פשטות נהוג לסמן {::nomarkdown}\( \omega_{k}=\omega^{k}\){:/nomarkdown} (למה? כי לעתים קרובות מעלים בחזקה כלשהי את ה-{::nomarkdown}\( \omega_{k}\){:/nomarkdown} ולא רוצים שהחזקה ה-{::nomarkdown}\( k\){:/nomarkdown}-ית "תתנגש" עם החזקה הנוספת).

אז אם לסכם - נתונה לנו סדרת מספרים מרוכבים {::nomarkdown}\( a_{0},a_{1},\dots,a_{N-1}\){:/nomarkdown}. אני רוצה לייצג אותה איכשהו בתור צירוף לינארי של הפונקציות {::nomarkdown}\( t_{k}\left(n\right)=\omega_{k}^{n}\){:/nomarkdown}. כלומר, אני רוצה למצוא מקדמים מרוכבים {::nomarkdown}\( b_{0},b_{1},\dots,b_{N-1}\){:/nomarkdown} כך שמתקיים:

{::nomarkdown}\( a_{n}=\sum_{k=0}^{N-1}b_{k}\omega_{k}^{n}\){:/nomarkdown}

זו משוואת הסינתזה שלנו - אחר כך אכתוב אותה בצורה הסטנדרטית של פונקציות, אבל לעת עתה בואו ננסה להבין מה משוואת האנליזה תהיה - כלומר, איך מוצאים את ה-{::nomarkdown}\( b\){:/nomarkdown}-ים. יש כמה דרכים לעשות זאת, כמובן, והחביבה עלי הולכת ישירות דרך אלגברה לינארית - אחרי ככלות הכל, מה שיש לנו פה הוא את המרחב הוקטור {::nomarkdown}\( \mathbb{C}^{N}\){:/nomarkdown} שהוא סוף-ממדי ולכן האלגברה הלינארית שלנו תהיה נחמדה וקלה. יחסית.

אם אסמן ב-{::nomarkdown}\( \overline{a}\){:/nomarkdown} את הוקטור {::nomarkdown}\( \overline{a}=\left(a_{0},a_{1},\dots,a_{N-1}\right)\){:/nomarkdown} ובדומה אסמן גם את הוקטור {::nomarkdown}\( \overline{b}\){:/nomarkdown}, אז נשים לב שמשוואות הסינתזה הן דרך לכתוב {::nomarkdown}\( \overline{a}=W\cdot\overline{b}\){:/nomarkdown} כאשר {::nomarkdown}\( W\){:/nomarkdown} היא מטריצה שמקודדת בתוכה את כל חזקות שורשי היחידה מסדר {::nomarkdown}\( N\){:/nomarkdown}, בצורה הבאה: {::nomarkdown}\( W_{nk}=\omega_{k}^{n}\){:/nomarkdown}. קונקרטית, הנה איך שהיא נראית:

{::nomarkdown}\( W=\left[\begin{array}{ccccc}1 &amp; 1 &amp; 1 &amp; \cdots &amp; 1\\1 &amp; \omega &amp; \omega_{2} &amp; \cdots &amp; \omega_{N-1}\\1 &amp; \omega^{2} &amp; \omega_{2}^{2} &amp; \dots &amp; \omega_{N-1}^{2}\\\vdots &amp; \vdots &amp; \vdots &amp; &amp; \vdots\\1 &amp; \omega^{N-1} &amp; \omega_{2}^{N-1} &amp; \cdots &amp; \omega_{N-1}^{N-1}\end{array}\right]\){:/nomarkdown}

מה קורה כאן? כל עמודה מכילה את כל החזקות של אחד משורשי היחידה מסדר {::nomarkdown}\( N\){:/nomarkdown}, החל מ-1 הטריוויאלי, עבור ב-{::nomarkdown}\( \omega\){:/nomarkdown} וכלה בכל החזקות של {::nomarkdown}\( \omega\){:/nomarkdown} עד {::nomarkdown}\( \omega_{N-1}\){:/nomarkdown}. מטריצות כאלו הן מספיק מעניינות כדי לזכות לשם מיוחד משל עצמן - <strong>מטריצות ונדרמונדה</strong>, אם כי לרוב השם הזה מיועד למטריצות שבהן החזקות של האיברים הם <strong>בשורות</strong> ולא בעמודות. המבנה הכללי של מטריצת ונדרמונדה מסדר {::nomarkdown}\( N\times N\){:/nomarkdown} על האיברים {::nomarkdown}\( \alpha_{1},\dots,\alpha_{N}\){:/nomarkdown} הוא זה:

{::nomarkdown}\( V\left(\alpha_{1},\dots,\alpha_{N}\right)=\left[\begin{array}{cccc}\alpha_{1}^{0} &amp; \alpha_{1}^{1} &amp; \cdots &amp; \alpha_{1}^{N-1}\\\alpha_{2}^{0} &amp; \alpha_{2}^{1} &amp; \dots &amp; \alpha_{2}^{N-1}\\\vdots &amp; \vdots &amp; &amp; \vdots\\\alpha_{N-1}^{0} &amp; \alpha_{N-1}^{1} &amp; \cdots &amp; \alpha_{N-1}^{N-1}\end{array}\right]\){:/nomarkdown}

אם נחשוב על זה לרגע נשים לב לכך ש-{::nomarkdown}\( W\){:/nomarkdown} היא סימטרית, ולכן היא גם מטריצת ונדרמונדה במובן הרגיל של ההגדרה, אבל זה לא יהיה חשוב לנו כל כך כרגע.

מה שאנחנו רוצים לעשות הוא למצוא את ההופכית של {::nomarkdown}\( W\){:/nomarkdown}, כדי לפתור את המשוואה {::nomarkdown}\( \overline{a}=W\cdot\overline{b}\){:/nomarkdown} - נוכל להסיק ש-{::nomarkdown}\( \overline{b}=W^{-1}\cdot\overline{a}\){:/nomarkdown}, והנה קיבלנו דרך מעשית לחשב את התמרת פורייה הבדידה. להפוך את {::nomarkdown}\( W\){:/nomarkdown} זה סיפור מעניין - אמנם, יש נוסחה כללית להופכית של מטריצת ונדרמונדה אבל היא לא טריוויאלית, וכך גם להשתמש בשיטות הסטנדרטיות למציאת הופכית של מטריצה. הכי טוב אם פשוט אצליח לנחש את ההגדרה של {::nomarkdown}\( W^{-1}\){:/nomarkdown} מהשמיים ואוכיח שהיא עובדת. מה הניחוש הכי טוב שלנו? ובכן, אנחנו מחפשים מטריצה שמקודדת משוואת אנליזה - משוואה שנותנת את {::nomarkdown}\( b_{n}\){:/nomarkdown} בתור סכום כלשהו של {::nomarkdown}\( a_{n}\){:/nomarkdown}. אפשר להתפלל שהמשוואה הזו תהיה דומה באופיה למשוואות של המקרה הרציף, לנסות, ולראות מה קורה.

אם משוואת הסינתזה של התמרת פורייה הבדידה היא זו:

{::nomarkdown}\( g\left(n\right)=\sum_{k=0}^{N-1}\hat{g}\left(k\right)e^{\frac{2\pi ikn}{N}}\){:/nomarkdown}

אז אפשר לנחש שמשוואת האנליזה תהיה זו:

{::nomarkdown}\( \hat{g}\left(n\right)=\sum_{k=0}^{N-1}g\left(k\right)e^{-\frac{2\pi ikn}{N}}\){:/nomarkdown}

זה רק ניחוש, ותכף נראה שהוא לא מדויק (צריך גם לכפול בקבוע כלשהו, כמו ה-{::nomarkdown}\( \frac{1}{2\pi}\){:/nomarkdown} של המשוואה עבור טורי פורייה) אבל הוא למעשה לא רע בכלל. כדי לפשט עניינים נחזור לסמן {::nomarkdown}\( \omega_{k}^{n}=e^{\frac{i\pi kn}{N}}\){:/nomarkdown}, והמינוס הזה מטופל על ידי מעבר לצמוד המרוכב: {::nomarkdown}\( e^{-\frac{i\pi kn}{N}}=\overline{\omega_{k}^{n}}\){:/nomarkdown}. אם כן, המועמד שלנו להיות ההופכי של {::nomarkdown}\( W\){:/nomarkdown} היא המטריצה {::nomarkdown}\( W^{*}\){:/nomarkdown} - המטריצה הצמודה של {::nomarkdown}\( W\){:/nomarkdown}, שמתקבלת על ידי שחלוף (שלא משנה כלום) והצמדה. עכשיו, כדי לפשט נוסחאות עם הצמוד, בואו נחשוב שניה על דרך יותר פשוטה לסמן אותו: {::nomarkdown}\( \omega\cdot\overline{\omega}=\left\|\omega\right\|^{2}=1\){:/nomarkdown} ולכן {::nomarkdown}\( \overline{\omega}=\omega^{-1}\){:/nomarkdown} (למעשה, אפשר לראות את זה מיידית מההגדרה). לכן באופן כללי {::nomarkdown}\( \overline{\omega_{k}^{n}}=\omega_{k}^{-n}\){:/nomarkdown}.

כעת, הבה ונתבונן ב-{::nomarkdown}\( \left(WW^{*}\right)_{nk}\){:/nomarkdown}:

{::nomarkdown}\( \left(WW^{*}\right)_{nk}=\sum_{i=0}^{N-1}W_{ni}W_{ik}^{*}=\sum_{i=0}^{N-1}\omega_{i}^{n}\overline{\omega_{i}^{k}}=\sum_{i=0}^{N-1}\omega_{i}^{n-k}\){:/nomarkdown}

כאשר {::nomarkdown}\( n=k\){:/nomarkdown} נקבל {::nomarkdown}\( \omega_{i}^{n-k}=1\){:/nomarkdown} ולכן {::nomarkdown}\( \sum_{i=0}^{N-1}\omega_{i}^{n-k}=N\){:/nomarkdown}. לעומת זאת, המקרה שבו {::nomarkdown}\( n\ne k\){:/nomarkdown} מעניין יותר. אם לשאוב אינטואיציה ממה שקרה בטורי פורייה, אנחנו מצפים שהסכום יצא 0 במקרה הזה - אבל למה? ובכן, שימו לב לכך ש-{::nomarkdown}\( \sum_{i=0}^{N-1}\omega_{i}^{n-k}=\sum_{i=0}^{N-1}\omega_{n-k}^{i}\){:/nomarkdown}, כלומר אפשר לחשוב על הסכום הזה בתור <strong>טור גאומטרי</strong> - סכום חזקות של שורש יחידה כלשהו מסדר {::nomarkdown}\( N\){:/nomarkdown}. לטור גאומטרי יש באופן כללי נוסחה פשוטה: {::nomarkdown}\( \sum_{i=0}^{t}a^{i}=\frac{a^{t+1}-1}{a-1}\){:/nomarkdown}, ולכן במקרה שלנו נקבל {::nomarkdown}\( \sum_{i=0}^{N-1}\omega_{n-k}^{i}=\frac{\omega_{n-k}^{N}-1}{\omega_{n-k}-1}=0\){:/nomarkdown} - האיבר במונה מתאפס כי {::nomarkdown}\( \omega_{n-k}^{N}=1\){:/nomarkdown} (זו המשמעות של להיות שורש יחידה מסדר {::nomarkdown}\( N\){:/nomarkdown}).

לסיכום, {::nomarkdown}\( WW^{*}=NI\){:/nomarkdown}, כלומר זו מטריצה סקלרית שיש בה {::nomarkdown}\( N\){:/nomarkdown} באלכסון הראשי ו-0 בכל מקום אחר. זה אומר שאפשר להפוך את {::nomarkdown}\( W\){:/nomarkdown} למטריצה אוניטרית על ידי נרמול - חלוקה ב-{::nomarkdown}\( \sqrt{N}\){:/nomarkdown} - אבל לא נזדקק לזה. די לנו במסקנה: {::nomarkdown}\( W^{-1}=\frac{1}{N}W^{*}\){:/nomarkdown}. זה נותן לנו את משוואת האנלזיה שחיפשנו:

{::nomarkdown}\( b_{n}=\frac{1}{N}\sum_{k=0}^{N-1}a_{k}\omega_{k}^{-n}\){:/nomarkdown}

המשוואות הללו נותנות לנו אלגוריתם פרקטי לגמרי לחישוב התמרת פורייה הבדידה, גם במחשב, אבל זה לא סוף הסיפור. אם רוצים להשתמש בהתמרה בשביל דברים כמו זה שאראה עוד מעט, רצוי שתהיה דרך מהירה <strong>עוד יותר</strong> לחשב אותה - ומה שיפה הוא שדרך כזו קיימת, פחות או יותר עוד מזמנו של גאוס, לפני פורייה בכלל. שיטות חישוב מהירות של התמרת פורייה הבדידה נקראות, באופן הולם למדי, "התמרת פורייה מהירה" (Fast Fourier Transform, או FFT בקיצור) ואני אראה את השיטה הידועה ביותר בפוסט נפרד.

בפוסט הקודם הראיתי שיש קשר בין התמרת פורייה של פונקציות ממשיות כלליות ובין התמרת פורייה של פונקציות ממשיות מחזוריות ("טורי פורייה"), שבא לידי ביטוי ב<strong>דיאגרמה קומוטטיבית</strong>:

{::nomarkdown}\( \begin{array}{ccc}f &amp; \leftrightarrow &amp; \hat{f}\\\downarrow &amp; &amp; \downarrow\\g &amp; \leftrightarrow &amp; \hat{g}\end{array}\){:/nomarkdown}

כאשר המעבר מ-{::nomarkdown}\( f\){:/nomarkdown} אל {::nomarkdown}\( g\){:/nomarkdown} התבצע על ידי פעולה של <strong>סכימה</strong> (שלקחה פונקציה כללית והפכה אותה למחזורית) והמעבר מ-{::nomarkdown}\( \hat{f}\){:/nomarkdown} אל {::nomarkdown}\( \hat{g}\){:/nomarkdown} התבצע על ידי <strong>דגימה</strong> (שלקחה פונקציה על מרחב רציף והפכה אותה לפונקציה על מרחב בדיד). בצורה לא מפתיעה במיוחד, אותה דיאגרמה (עם אותן פעולות, עד כדי הפרמטרים שלהן שעשויים להיות שונים) מתאימה גם להתמרות שראינו הפעם - התמרה של פונקציה "כללית" על {::nomarkdown}\( \mathbb{Z}\){:/nomarkdown} והתמרה של פונקציה מחזורית על {::nomarkdown}\( \mathbb{Z}\){:/nomarkdown}. אז יש לנו עוד עותק של הדיאגרמה

{::nomarkdown}\( \begin{array}{ccc}u &amp; \leftrightarrow &amp; \hat{u}\\\downarrow &amp; &amp; \downarrow\\v &amp; \leftrightarrow &amp; \hat{v}\end{array}\){:/nomarkdown}

עכשיו, די בבירור יש לנו מעברים מהפונקציות {::nomarkdown}\( f\){:/nomarkdown} אל {::nomarkdown}\( u\){:/nomarkdown} ומ-{::nomarkdown}\( g\){:/nomarkdown} אל {::nomarkdown}\( v\){:/nomarkdown} על ידי דגימה (הסבירו לעצמכם למה!) ומ-{::nomarkdown}\( \hat{f}\){:/nomarkdown} אל {::nomarkdown}\( \hat{u}\){:/nomarkdown} ומ-{::nomarkdown}\( \hat{g}\){:/nomarkdown} אל {::nomarkdown}\( \hat{v}\){:/nomarkdown} על ידי סכימה (עם פרמטרים ספציפיים שונים לכל סכימה). אז אנחנו מקבלים דיאגרמה קומוטטיבית דמויית קוביה, שהדיאגרמה הראשונה שהראיתי היא הפאה העליונה שלה, והדיאגרמה השניה היא הפאה התחתונה שלה. נסו לצייר אותן!

כעת, בואו נעבור להדגמה הפשוטה ביותר שאני יכול לחשוב עליה על שימוש יעיל להתמרת פורייה הבדידה (ולהתמרות פורייה באופן כללי). בשביל זה אני צריך את מושג ה<strong>קונבולוציה</strong> שלדעתי הכי קל להסביר דרך המושג של כפל פולינומים.

בואו נסתכל לרגע על המכפלה הבאה של שני פולינומים ממעלה שנייה: {::nomarkdown}\( \left(a_{2}x^{2}+a_{1}x+a_{0}\right)\left(b_{2}x^{2}+b_{1}x+b_{0}\right)\){:/nomarkdown}. אני הולך לפתוח את המכפלה ולכתוב את כל האיברים לא כי בא לי לעשות חשבון אלא כי זה יהיה סופר-חשוב להמשך לראות מה קורה כאן. תנסו לעקוב אחרי מה שעשיתי ולבצע את החישוב בראש בעצמכם (הכי טוב אם תעשו את זה על נייר - אבל נו טוב, אני לא מצפה שמישהו יתחיל לכתוב באמצע קריאת פוסט). מה שאני מקבל הוא זה:

{::nomarkdown}\( a_{2}b_{2}x^{4}+\left(a_{1}b_{2}+a_{2}b_{1}\right)x^{3}+\left(a_{0}b_{2}+a_{1}b_{1}+a_{2}b_{0}\right)x^{2}+\left(a_{0}b_{1}+a_{1}b_{0}\right)x+a_{0}b_{0}\){:/nomarkdown}

לפתוח את הכל ידנית זה סיפור לא כיפי, ולכן מה שעושה המתמטיקאי אחרי שהוא מקבל את הנוסחה הזו הוא להביט בה ולנסות להבין מה התבנית שיש כאן - מה ההגיון הכללי מאחורי הנוסחה. אני מקבל סכום של חזקות של {::nomarkdown}\( x\){:/nomarkdown} עם מקדמים שנבנים איכשהו מהמקדמים של הפולינומים שהכפלתי, אבל על פי איזו חוקיות? בואו נסתכל לרגע על המקדם הכי מסובך, זה של {::nomarkdown}\( x^{2}\){:/nomarkdown}. כשאנחנו כופלים את הביטוי {::nomarkdown}\( \left(a_{2}x^{2}+a_{1}x+a_{0}\right)\left(b_{2}x^{2}+b_{1}x+b_{0}\right)\){:/nomarkdown} אנחנו בעצם בוחרים איבר מהסוגריים השמאליים ואיבר מהסוגריים הימניים, כופלים אותם, וסוכמים את כל המכפלות שמתקבלות כך. כל מכפלה כזו ש-{::nomarkdown}\( x^{2}\){:/nomarkdown} מופיע בה עם מקדם קבוע כלשהו תתרום את המקדם הזה למקדם של {::nomarkdown}\( x^{2}\){:/nomarkdown} בתוצאה הסופית. כך שנשאלת השאלה - באילו דרכים אפשר לבחור איבר מהסוגריים השמאליים ואיבר מהסוגריים הימניים ולכפול אותם כדי לקבל משהו קבוע כפול {::nomarkdown}\( x^{2}\){:/nomarkdown}?

ובכן, זה פשוט מאוד: צריך לבחור מהסוגריים איברים שסכום חזקות ה-{::nomarkdown}\( x\){:/nomarkdown} שלהם שווה ל-2. כלומר, {::nomarkdown}\( a_{2}x^{2}\cdot b_{0}x^{0}\){:/nomarkdown} (כי {::nomarkdown}\( 2+0=2\){:/nomarkdown}) ו-{::nomarkdown}\( a_{1}x^{1}\cdot b_{1}x^{1}\){:/nomarkdown} ו-{::nomarkdown}\( a_{0}x^{0}\cdot b_{2}x^{2}\){:/nomarkdown}. זה נותן לנו בדיוק את המקדם של {::nomarkdown}\( x^{2}\){:/nomarkdown} שראינו כאן.

ומה קורה באופן הכי כללי שרק אפשר? בואו ניקח שני פולינומים {::nomarkdown}\( \sum_{k=0}^{t}a_{k}x^{k}\){:/nomarkdown} ו-{::nomarkdown}\( \sum_{k=0}^{t}b_{k}x^{k}\){:/nomarkdown} (חלק מהמקדמים עלולים להיות 0 ואין עם זה בעיה) ונכפול אותם: נקבל פולינום {::nomarkdown}\( \sum_{k=0}^{r}c_{k}x^{k}\){:/nomarkdown} שמקיים באופן כללי:

{::nomarkdown}\( c_{n}=\sum_{k=0}^{n}a_{k}b_{n-k}\){:/nomarkdown}

כלומר - {::nomarkdown}\( c_{n}\){:/nomarkdown} הוא סכום שבו מכפילים את כל ה-{::nomarkdown}\( a_{k}\){:/nomarkdown}-ים עד {::nomarkdown}\( a_{n}\){:/nomarkdown} ב-{::nomarkdown}\( b\){:/nomarkdown}-ים, אבל ב-{::nomarkdown}\( b\){:/nomarkdown}-ים שבאים בסדר <strong>הפוך - </strong>מתחילים ב-{::nomarkdown}\( b_{n}\){:/nomarkdown} ומגיעים עד ל-{::nomarkdown}\( b_{0}\){:/nomarkdown}. שימו לב שהמשכי שתי הסדרות (האיברים שאחרי האיברים במקום ה-{::nomarkdown}\( n\){:/nomarkdown}) בכלל לא רלוונטיים.

סדרת ה-{::nomarkdown}\( c_{n}\){:/nomarkdown}-ים הזו היא בדיוק מה שנקרא <strong>קונבולוציה</strong> של הסדרות {::nomarkdown}\( a_{n},b_{n}\){:/nomarkdown}. בואו נגדיר את זה פורמלית: אם {::nomarkdown}\( a_{0},a_{1},a_{2},\dots\){:/nomarkdown} ו-{::nomarkdown}\( b_{0},b_{1},b_{2},\dots\){:/nomarkdown} הן סדרות (שיכולות להיות אינסופיות, אין עם זה בעיה) אז הקונבולוציה שלהן היא סדרה {::nomarkdown}\( c_{0},c_{1},c_{2},\dots\){:/nomarkdown} שמוגדרת על ידי הנוסחה שכבר נתתי: {::nomarkdown}\( c_{n}=\sum_{k=0}^{n}a_{k}b_{n-k}\){:/nomarkdown}.

אני מאוד אוהב להציג את העניין הזה בצורה ציורית. בואו נכתוב את אברי הסדרה {::nomarkdown}\( a_{n}\){:/nomarkdown}, ומעליהם נכתוב את אברי הסדרה {::nomarkdown}\( b_{n}\){:/nomarkdown} אבל בסדר הפוך, כך שנקודת ה"חיבור" היחידה שלהם היא באיברים עם אינדקס 0:

{::nomarkdown}\( \begin{array}{ccccccc}\cdots &amp; b_{2} &amp; b_{1} &amp; b_{0}\\ &amp; &amp; &amp; a_{0} &amp; a_{1} &amp; a_{2} &amp; \cdots\end{array}\){:/nomarkdown}

חשבו על המקומות שנותרו ריקים בתור 0-ים.

עכשיו נכפול כל איבר בשורה העליונה באיבר שבדיוק מתחתיו בשורה התחתונה, ונסכום הכל. די ברור שכל הכפולות פרט למספר סופי יהיו 0 כך שהסכום הוא בעצם סופי, ולכן מוגדר היטב, וגם קל לראות שהוא פשוט יהיה {::nomarkdown}\( a_{0}b_{0}\){:/nomarkdown}. עד כאן, כתיבה מסובכת לדבר פשוט, אבל הנה האופן שבו אני מקבל את האיבר הבא בסכום: אקח את סדרת ה-{::nomarkdown}\( b\){:/nomarkdown}-ים שבשורה העליונה ואזיז אותה צעד אחד ימינה:

{::nomarkdown}\( \begin{array}{ccccccc}\cdots &amp; b_{3} &amp; b_{2} &amp; b_{1} &amp; b_{0}\\ &amp; &amp; &amp; a_{0} &amp; a_{1} &amp; a_{2} &amp; \cdots\end{array}\){:/nomarkdown}

כעת הכפלה של כל זוג איברים וסכום של כולם תניב לי את {::nomarkdown}\( a_{0}b_{1}+a_{1}b_{0}\){:/nomarkdown}, וכן הלאה וכן הלאה. {::nomarkdown}\( c_{n}\){:/nomarkdown} יתקבל אחרי שאזיז את ה-{::nomarkdown}\( b\){:/nomarkdown}-ים למעלה {::nomarkdown}\( n\){:/nomarkdown} צעדים ימינה, אכפול ואסכום. התיאור הציורי הזה נותן לי אישית אינטואיציה טובה לגבי "מה הולך כאן בכלל".

כמובן שההגדרה של קונבולוציה היא יותר כללית מאשר "רק" עבור סדרות. הנה הגדרה דומה עבור פונקציות {::nomarkdown}\( f:\mathbb{R}\to\mathbb{C}\){:/nomarkdown}, כאשר אני משתמש בסימן {::nomarkdown}\( *\){:/nomarkdown} כדי לסמן קונבולוציה: {::nomarkdown}\( \left(f*g\right)\left(t\right)=\int_{-\infty}^{\infty}f\left(x\right)g\left(t-x\right)dx\){:/nomarkdown}. אפשר גם לתת הגדרה כללית יותר שמתאימה לכל הקשר שבו אפשר לדבר על התמרת פורייה, אבל לא אכנס לכך כרגע.

כפי שכבר הבנו מהמקרה של פולינומים, קונבולוציה היא לא פעולה טריוויאלית לחישוב. מצד שני, כפי שכבר הבנו מהמקרה של פולינומים, קונבולוציה היא משהו שצץ באופן טבעי במתמטיקה, בין אם אנחנו מדברים על התמרת פורייה ובין אם לאו. ולכן הקשר של התמרת פורייה לקונבולוציות הוא לא טריוויאלי ומעניין. ומה הקשר הזה? פשוט מאוד: ההתמרה של קונבולוציה היא מכפלת ההתמרות. בנוסחה, אם {::nomarkdown}\( f,g\){:/nomarkdown} הן פונקציות ואם אני מסמן ב-{::nomarkdown}\( \mathcal{F}\left[f\right],\mathcal{F}\left[g\right]\){:/nomarkdown} את התמרות הפורייה שלהן (וזו יכולה להיות כל אחת משלושת סוגי ההתמרות שכבר ראינו, וזה עובד גם להתמרות פורייה בהקשרים אחרים שלא ראינו), אז {::nomarkdown}\( \mathcal{F}\left[f*g\right]=\mathcal{F}\left[f\right]\cdot\mathcal{F}\left[g\right]\){:/nomarkdown}.

בפרט, אם אנחנו יודעים גם לחשב את ההתמרה ההפוכה, {::nomarkdown}\( \mathcal{F}^{-1}\){:/nomarkdown}, זה נותן לנו שיטה פשוטה לחשב קונבולוציות: {::nomarkdown}\( f*g=\mathcal{F}^{-1}\left[\mathcal{F}\left[f\right]\cdot\mathcal{F}\left[g\right]\right]\){:/nomarkdown}. עוברים ל"מישור התדר", מבצעים את הכפל שם, ואז חוזרים למשתנה המקורי. נראה מוכר? באלגברה לינארית עושים את זה כל הזמן - אם יש לנו פעולה מסובכת בבסיס הנוכחי שלנו (למשל, העלאה בחזקה גבוהה של איזה אופרטור) אז עוברים לבסיס אחר, נוח יותר, מבצעים את החישוב שם, ואז חוזרים לבסיס המקורי. במובן מסויים זו בדיוק המהות של התמרות פורייה - מעבר לבסיס נוח יותר לצרכים מסויימים.

לא סתם התחלתי מדוגמת הפולינומים. התעלול הזה של ההתמרות נותן לנו אלגוריתם יעיל לכפל פולינומים - יותר יעיל מאשר פשוט לבצע חישוב. זה לא קריטי לפולינומים קטנים, אבל תחשבו על פולינומים עם אלפי מקדמים (או יותר!). כמובן, זה דורש שההתמרות יתבצעו בעזרת FFT, כך שהאלגוריתם שמבצע את הכפל המהיר הזה הוא לא טריוויאלי - אבל <strong>עושים את זה בפועל כי זה עובד טוב</strong> (למעשה, משתמשים בהתמרת פורייה מהירה גם כדי לחשב כפל של מספרים רגילים עם כמות גדולה של ספרות - עשרות אלפים).

היישום הזה של התמרות פורייה הוא חימום. הוא רק קצה הקרחון. הסיבה העיקרית שאני כותב את הפוסטים הללו היא כדי שאוכל בעתיד להציג שימושים בלי לדאוג לכך שלא הצגתי את הרקע. אבל מה כדאי להראות? שאלה מצויינת, ואתם מוזמנים להשאיר הצעות בתגובות.
