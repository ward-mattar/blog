---
id: 2702
title: "נגזרת מרוכבת, פונקציות אנליטיות ונוסחאות קושי-רימן"
date: 2013-08-12 20:12:34
layout: post
categories: 
  - אנליזה מתמטית
tags: 
  - אנליזה מרוכבת
  - נגזרת
  - נוסחאות קושי-רימן
---
המושג היסודי בחשבון דיפרנציאלי הוא מושג ה<strong>נגזרת</strong>. כבר הקדשתי לו <a href="http://www.gadial.net/2010/11/21/derivative/">פוסט</a>, אבל אחזור על הרעיון בקצרה: כאשר יש לנו פונקציה $latex f$, אנחנו מעוניינים למדוד את <strong>קצב השינוי</strong> שלה. המושג האינטואיטיבי שלנו הוא זה של <strong>שינוי ממוצע</strong> - מסתכלים על ההפרש בין ערכי הפונקציה בשתי נקודות שונות, ומחלקים אותו בהפרש שבין הנקודות הללו. אם המרחק בין ת"א וחיפה הוא 100 ק"מ, והמרחק בין השעה שבה יצאנו מת"א - 8:00 - לשעה שבה הגענו לחיפה - 10:00 - הוא 2 שעות, אז השינוי הממוצע של פונקציית המיקום שלנו (פונקציה שמקבלת נקודת זמן ומחזירה את המיקום שלנו באותה נקודת זמן) בין שתי הנקודות הללו של 8:00 ו-10:00 הוא $latex \frac{100}{2}=50$, כשהיחידות שבהן אנו מבצעים את המדידה הן ק"מ לשעה (במתמטיקה הפונקציות הן לרוב אבסטרקטיות - מקבלות מספרים חסרי יחידות ומחזירות מספרים חסרי יחידות - ולכן אנחנו לא מדברים על יחידות רוב הזמן). הבעיה בשינוי ממוצע שכזה היא בכך שהוא מתאר מה קרה לאורך פרק זמן ארוך כלשהו - הוא לא אומר לנו מה קרה בנקודת זמן מסויימת (כלומר, מה היינו רואים אם היינו מסתכלים במד המהירות בנקודת זמן כלשהי).

הדרך הנאיבית להתמודד עם הבעיה היא לומר - אוקיי, אז בואו נשתמש באותו תעלול שהשתמשנו בו עד כה. חישבנו את השינוי הממוצע בין ערך הפונקציה ב-$latex x$ ובין ערכה ב-$latex y$ על ידי הנוסחה $latex \frac{f\left(x\right)-f\left(y\right)}{x-y}$? יופי, בואו נציב $latex x=y$ ונראה מה נקבל. לרוע המזל, נקבל ביטוי מהצורה $latex \frac{0}{0}$ וביטוי כזה אינו מוגדר, ואין דרך טובה להגדיר אותו בצורה חד משמעית. אנחנו צריכים לנקוט בגישה קצת יותר חכמה כדי לחקור את $latex f$.

הפתרון הוא כזה: כדי לדעת מה קצב השינוי של הפונקציה $latex f$ בנקודה $latex x$, מוסיפים ל-$latex x$ ערך <strong>קטן מאוד אך לא אפס</strong> שאפשר לסמן ב-$latex dx$, ואז מחשבים את $latex \frac{f\left(x+dx\right)-f\left(x\right)}{dx}$. זה מה שניוטון ולייבניץ עשו. לרוע המזל, הפתרון הזה לא מוגדר עד הסוף מבחינה מתמטית - לא ברור מה בדיוק אומר מתמטית "קטן מאוד אך לא אפס", ואיך עובדים עם יצור כזה מבחינה טכנית - ניוטון ולייבניץ פשוט התייחסו אליו כאל אפס כשהיה נוח להם, ואל משהו שאינו אפס כשהיה נוח להם. אפשר לבצע פורמליזציה מתמטית של יצור כזה, אבל הגישה הסטנדרטית באנליזה היא שונה ומשתמשת במושג ה<strong>גבול</strong>. הרעיון הבסיסי הוא לקחת ערך מספרי קונקרטי $latex h$, לחשב את $latex \frac{f\left(x+h\right)-f\left(x\right)}{h}$, ואז לשאול את עצמנו לאיזה ערך הביטוי הזה <strong>שואף</strong> כאשר $latex h$ שואף לאפס. פורמלית וטכנית, מחשבים את הגבול $latex \lim_{h\to0}\frac{f\left(x+h\right)-f\left(x\right)}{h}$.

מושג הגבול מצריך הגדרה קפדנית בפני עצמו, וגם לו הקדשתי <a href="http://www.gadial.net/2010/10/03/limit_of_sequence/">פוסט</a>. בכל זאת צריך להזכיר את ההגדרה המדויקת: הפונקציה $latex f:\mathbb{R}\to\mathbb{R}$ מקיימת $latex \lim_{x\to x_{0}}f\left(x\right)=L$ אם לכל $latex \varepsilon&gt;0$ קיים $latex \delta&gt;0$ כך שאם $latex \left\|x-x_{0}\right\|&lt;\delta$ אז $latex \left\|f\left(x\right)-L\right\|&lt;\varepsilon$. ועכשיו אנחנו צריכים לעצור ולשאול את עצמנו - מה בהגדרה הזו דורש את היות $latex f$ פונקציה שמוגדרת על מספרים ממשיים? מה צריך לתקן כדי להיות מסוגלים להכליל את ההגדרה לפונקציות מעל מרחבים אחרים? התשובה היא פשוטה - הערך המוחלט.

הערך המוחלט משמש בהגדרת הגבול בתור מקרה פרטי של <strong>פונקצית מרחק</strong>, (או בשם אחר <strong>מטריקה</strong>). את המושג הזה אפשר להציג בצורה כללית מאוד: אם $latex A$ היא קבוצה, אז מטריקה היא כל פונקציה $latex d:A\times A\to\mathbb{R}$ כך ש-$latex d\left(x,y\right)=0$ אם ורק אם $latex x=y$, ו-$latex d\left(x,y\right)=d\left(y,x\right)$ לכל $latex x,y$, ו-$latex d\left(x,y\right)\le d\left(x,z\right)+d\left(y,z\right)$ לכל $latex x,y,z$. למה שלוש התכונות הללו דווקא? כי כשמסתכלים על מה שעושים בהוכחות שמערבות את מושג הגבול, אפשר לראות שאנחנו לא נזקקים לכל התכונות האפשריות של ערך מוחלט במהלך ההוכחה, ולעתים קרובות שלוש התכונות שציינתי מספיקות בהחלט כדי להשיג את אותן התוצאות.

לכן, השלב הראשון בהכללת מושג הנגזרת לפונקציות מרוכבות הוא הכללת מושג המרחק עבור מספרים מרוכבים. אבל זה קל - כבר ראינו איך מוגדר ערך מוחלט עבור מספרים מרוכבים: $latex \left\|a+bi\right\|=\sqrt{a^{2}+b^{2}}$. זו אותה מטריקה בדיוק כמו המטריקה על $latex \mathbb{R}^{2}$ שבה משתמשים כשרוצים להגדיר חשבון דיפרנציאלי על פונקציות מ- ואל $latex \mathbb{R}^{2}$. אז בעצם, מה ההבדל בין חשבון דיפרנציאלי של פונקציות $latex f:\mathbb{R}^{2}\to\mathbb{R}^{2}$ ובין פונקציות $latex f:\mathbb{C}\to\mathbb{C}$? נדבר על זה עוד מעט.

אז יש לנו מושג של גבול של פונקציה מרוכבת (ובדומה גם אפשר להגדיר גבול של סדרה מרוכבת, אבל אין לנו צורך בגבולות כאלו עדיין). מכאן ההגדרה של נגזרת מרוכבת נובעת כמעט מעצמה: אם $latex f:\mathbb{C}\to\mathbb{C}$ היא פונקציה מרוכבת ו-$latex z\in\mathbb{C}$ הוא מספר מרוכב כלשהו, אז אנו מגדירים $latex f^{\prime}\left(z_{0}\right)=\lim_{\Delta z\to0}\frac{f\left(z_{0}+\Delta z\right)-f\left(z_{0}\right)}{\Delta z}$. אם הגבול הזה קיים (ושונה מאינסוף), אומרים שהפונקציה <strong>גזירה</strong> בנקודה $latex z_{0}$. זה הכל. אין כאן שום דבר חדש למי שכבר מכיר חדו"א; אבל כפי שנראה בקרוב, אם $latex f:\mathbb{C}\to\mathbb{C}$ היא גזירה, ההשלכות של זה הן קיצוניות יותר מאשר עבור פונקציה ממשית.

רגע, השלכות? אילו השלכות יכולות להיות לכך שפונקציה היא גזירה? ובכן, משפט בסיסי אחד בחדו"א הוא שכל פונקציה גזירה היא גם רציפה בכל נקודה שבה היא גזירה (רציפות פירושה ש-$latex \lim_{x\to x_{0}}f\left(x\right)=f\left(x_{0}\right)$). המשפט הזה תקף גם עבור פונקציות מרוכבות, וכפי שנראה, ההוכחה "אדישה" לשאלה אם הפונקציה מרוכבת או לא, כל עוד מושג הגבול שלנו מתנהג באותו האופן.

ההוכחה מתבססת על השוויון הבא: $latex f\left(z_{0}+\Delta z\right)=f\left(z_{0}\right)+\frac{f\left(z_{0}+\Delta z\right)-f\left(z_{0}\right)}{\Delta z}\cdot\Delta z$ - שהוא, כמובן, טריוויאלי. מה שמעניין הוא מה שקורה כאשר משאיפים את $latex \Delta z$ לאפס: מקבלים ש-

$latex \lim_{\Delta z\to0}f\left(z_{0}+\Delta z\right)=\lim_{\Delta z\to0}\left(f\left(z_{0}\right)+\frac{f\left(z_{0}+\Delta z\right)-f\left(z_{0}\right)}{\Delta z}\cdot\Delta z\right)=f\left(z_{0}\right)+f^{\prime}\left(z_{0}\right)\cdot0=f\left(z_{0}\right)$

כאשר השוויון האחרון נובע מכך ש-$latex \lim_{\Delta z\to0}\frac{f\left(z_{0}+\Delta z\right)-f\left(z_{0}\right)}{\Delta z}=f^{\prime}\left(z_{0}\right)$ וזה מספר מרוכב, ואילו $latex \lim_{\Delta z\to0}\Delta z=0$, וגבול של מכפלה של שני גבולות מתכנסים שווה למכפלה שלהם. רק כדי לשכנע אתכם סופית בכך שאין הבדל בין חדו"א רגיל ואנליזה מרוכבת בנקודה הזו, אני אחזור על איך מוכיחים את הטענה הזו. פורמלית אני רוצה להוכיח שאם $latex \lim_{z\to z_{0}}f\left(z\right)=a$ ו-$latex \lim_{z\to z_{0}}g\left(z\right)=b$ אז $latex \lim_{z\to z_{0}}f\left(z\right)g\left(z\right)=ab$. כלומר, אני רוצה להיות מסוגל לחסום בצורה טובה את הביטוי $latex \left\|f\left(z\right)g\left(z\right)-ab\right\|$. לשם כך, אני נוקט את התעלול הכי ישן בספר - מוסיף ומחסיר את אותו גורם, שאחרי טיפה משחקים אפשר לראות שכדאי שיהיה $latex bf\left(z\right)$ כדי שנוכל לקבל חסם שכולל את שני הגבולות שאנחנו יודעים עליהם:

$latex \left\|f\left(z\right)g\left(z\right)-ab\right\|=\left\|f\left(z\right)g\left(z\right)+bf\left(z\right)-bf\left(z\right)-ab\right\|=\left\|f\left(z\right)\left[g\left(z\right)-b\right]+b\left[f\left(z\right)-a\right]\right\|$

$latex \le\left\|f\left(z\right)\right\|\left\|g\left(z\right)-b\right\|+\left\|b\right\|\left\|f\left(z\right)-a\right\|$

עכשיו, יהא $latex \varepsilon&gt;0$ כלשהו. אנחנו רוצים למצוא $latex \delta$ כך שלכל $latex z$ שמקיים $latex \left\|z-z_{0}\right\|&lt;\delta$, מתקיים ש-$latex \left\|f\left(z\right)\right\|\left\|g\left(z\right)-b\right\|+\left\|b\right\|\left\|f\left(z\right)-a\right\|&lt;\varepsilon$. ראשית, מכיוון ש-$latex \lim_{z\to z_{0}}f\left(z\right)=a$ נובע מכך שקיים $latex \delta_{1}$ כך שאם $latex \left\|z-z_{0}\right\|&lt;\delta_{1}$ אז $latex \left\|f\left(z\right)-a\right\|&lt;\frac{\varepsilon}{2\left\|b\right\|}$, ולכן $latex \left\|b\right\|\left\|f\left(z\right)-a\right\|&lt;\frac{\varepsilon}{2}$.

שנית, קיים $latex \delta_{2}$ כך שאם $latex \left\|z-z_{0}\right\|&lt;\delta_{2}$ אז $latex \left\|f\left(z\right)-a\right\|&lt;1$, ולכן $latex \left\|f\left(z\right)\right\|&lt;1+a$. הויסה, רגע, רגע! איך עשיתי את זה? ובכן, תכונה כללית של ערך מוחלט: $latex \left\|x-y\right\|\ge\left\|x\right\|-\left\|y\right\|$. איך מוכיחים אותה? ובכן, $latex \left\|x\right\|=\left\|x-y+y\right\|\le\left\|x-y\right\|+\left\|y\right\|$. כל מה שאני מתבסס עליו הוא אי-שוויון המשולש (והטריק הרגיל של לחסר ולחבר את אותו הדבר).

כעת, קיים גם $latex \delta_{3}$ כך שאם $latex \left\|z-z_{0}\right\|&lt;\delta_{3}$ אז $latex \left\|g\left(z\right)-b\right\|&lt;\frac{\varepsilon}{2\left(1+a\right)}$, ולכן אם $latex \left\|z-z_{0}\right\|&lt;\min\left\{ \delta_{2},\delta_{3}\right\} $ מתקיים $latex \left\|f\left(z\right)\right\|\left\|g\left(z\right)-b\right\|&lt;\left(1+a\right)\frac{\varepsilon}{2\left(1+a\right)}=\frac{\varepsilon}{2}$. המסקנה הסופית: נגדיר $latex \delta=\min\left\{ \delta_{1},\delta_{2},\delta_{3}\right\} $ ונקבל שאם $latex \left\|z-z_{0}\right\|&lt;\delta$ אז

$latex \left\|f\left(z\right)\right\|\left\|g\left(z\right)-b\right\|+\left\|b\right\|\left\|f\left(z\right)-a\right\|&lt;\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon$

שימו לב בכמה מעט השתמשנו בהוכחה הזו.

חזרה לענייננו. הוכחנו שפונקציה גזירה היא גם רציפה; בואו נראה עוד כמה תכונות בסיסיות של נגזרות. תכונה נחמדה אחת של נגזרת היא שמדובר על אופרטור <strong>לינארי</strong> - זה אומר שאם $latex a,b\in\mathbb{C}$ ו-$latex f,g$ הן פונקציות מרוכבות, אז $latex \left[af+bg\right]^{\prime}=af^{\prime}+bg^{\prime}$ (למי שמכיר אלגברה לינארית - זה אומר שאופרטור הגזירה הוא טרנספורמציה לינארית, עבור מרחבים וקטוריים מתאימים של פונקציות). ההוכחה לזה נובעת מייד מתכונות של גבולות ושימוש בהגדרה של נגזרת ולא אכנס אליה. תחת זאת אציג את ההוכחה למשהו טיפה יותר מסובך - נוסחת הנגזרת של מכפלה, שזהה גם היא למקרה הממשי: $latex \left[fg\right]^{\prime}=f^{\prime}g+fg^{\prime}$. ההוכחה, כרגיל, מבוססת על לחבר ולהחסיר את אותו דבר:

$latex \left[fg\right]^{\prime}\left(z_{0}\right)=\lim_{\Delta z\to0}\frac{fg\left(z_{0}+\Delta z\right)-fg\left(z_{0}\right)}{\Delta z}=\lim_{\Delta z\to0}\frac{fg\left(z_{0}+\Delta z\right)+f\left(z_{0}+\Delta z\right)g\left(z_{0}\right)-f\left(z_{0}+\Delta z\right)g\left(z_{0}\right)-fg\left(z_{0}\right)}{\Delta z}$

$latex =\lim_{\Delta z\to0}\frac{f\left(z_{0}+\Delta z\right)\left[g\left(z_{0}+\Delta z\right)-g\left(z_{0}\right)\right]}{\Delta z}+\lim_{\Delta z\to0}\frac{g\left(z_{0}\right)\left[f\left(z_{0}+\Delta z\right)-f\left(z_{0}\right)\right]}{\Delta z}$

$latex =f\left(z_{0}\right)g^{\prime}\left(z_{0}\right)+g\left(z_{0}\right)f^{\prime}\left(z_{0}\right)$

הבנתם את הפרינציפ. זה מה שתמיד כיף בהכללות מתמטיות - האופן שבו חלק מההוכחות פשוט ממשיכות לעבוד למרות ששינינו לגמרי את "שדה המשחק" שלהן.

ומה עם גזירה של פונקציות קונקרטיות? ובכן, בינתיים מה שפשוט להציג הוא את הגזירה של פולינום. פולינום הוא ביטוי מהצורה $latex \sum a_{n}z^{n}$, ולכן אפשר להשתמש בלינאריות של הנגזרת כדי לקבל ש-$latex \left[\sum a_{n}z^{n}\right]^{\prime}=\sum a_{n}\left[z^{n}\right]^{\prime}$, כלומר די למצוא את הנגזרת של פונקציות מהצורה $latex f\left(z\right)=z^{n}$. פונקציות כאלו אפשר להציג אינדוקטיבית בתור $latex z^{n}=z^{n-1}\cdot z$ ואז לגזור עם כלל הגזירה של מכפלה. בשביל הבסיס נצטרך להבין את הנגזרת של $latex f\left(z\right)=z$, ואת זה אפשר לעשות ישירות מההגדרה:

$latex f^{\prime}\left(z_{0}\right)=\lim_{\Delta z\to0}\frac{f\left(z_{0}+\Delta z\right)-f\left(z_{0}\right)}{\Delta z}=\lim_{\Delta z\to0}\frac{z_{0}+\Delta z-z_{0}}{\Delta z}=\lim_{\Delta z\to0}1=1$

וכעת אפשר לנחש (אחרי שמנסים כמה מקרים פרטיים, או סתם לזכור מה קורה במספרים ממשיים) ש-$latex \left[z^{n}\right]^{\prime}=nz^{n-1}$, ולהוכיח את זה באינדוקציה:

$latex \left[z^{n}\right]^{\prime}=\left[z^{n-1}\right]^{\prime}z+z^{n-1}=\left(n-1\right)z^{n-2}\cdot z+z^{n-1}=nz^{n-1}$

טוב, מספיק עם זה. עד עכשיו כל מה שעשיתי הוא לקחת תוצאות מחדו"א במספרים ממשיים ולהגיד "היי, תראו, איזה מגניב, זה עובד גם כאן!". עד כאן. אני רוצה להראות משהו חדש - את <strong>משוואות קושי-רימן</strong>. נתחיל דווקא בלדבר על פונקציות ממשיות מהמרחב לעצמו, דהיינו $latex f:\mathbb{R}^{2}\to\mathbb{R}^{2}$. איך אפשר להגדיר נגזרת של פונקציה שכזו? אפשר לדבר על גבולות ב-$latex \mathbb{R}^{2}$ - כבר אמרנו שיש לנו על $latex \mathbb{R}^{2}$ את אותה מטריקה כמו ב-$latex \mathbb{C}$, אבל משהו אחר ישתבש. אם ננסה להגדיר $latex f^{\prime}\left(a_{0}\right)=\lim_{\Delta a\to0}\frac{f\left(a+\Delta a\right)-f\left(a\right)}{\Delta a}$ נקבל משהו שהוא ביטוי חסר משמעות, כי יש בו שבר שבו במונה ובמכנה יש איברים של $latex \mathbb{R}^{2}$, כלומר אנחנו מחלקים איבר של $latex \mathbb{R}^{2}$ באיבר אחר של $latex \mathbb{R}^{2}$. אבל על $latex \mathbb{R}^{2}$ אין לנו מושג של חילוק - $latex \mathbb{R}^{2}$ אינו <strong>שדה</strong>. אם אתם זוכרים, <a href="http://www.gadial.net/2013/07/21/complex_analysis_intro/">בפוסט הראשון</a> על פונקציות מרוכבות התייחסתי לנקודה הזו. המספרים המרוכבים הם כן שדה בזכות פעולת כפל "מתוחכמת" (שממנה נובעת פעולת החילוק). הנה הנקודה המדוייקת שבו האנליזה של $latex \mathbb{R}^{2}$ נפרדת מהאנליזה המרוכבת.

אבל מה כן עושים ב-$latex \mathbb{R}^{2}$? דרך אחת לתאר פונקציות כאלו היא בתור זוג פונקציות $latex u,v:\mathbb{R}^{2}\to\mathbb{R}$ שמקבלות כל אחת זוג ערכים ומחזירות ערך בודד: $latex f\left(x,y\right)=\left(u\left(x,y\right),v\left(x,y\right)\right)$. כעת אפשר לדבר על הנגזרות של כל פונקציה כזו בנפרד. אבל מה המשמעות של נגזרת של פונקציה בשני משתנים? חשבו על הפונקציה כאילו היא מתארת קווי גובה של הר - לכל נקודה במישור מותאם ה"גובה" שלה. אז נגזרת של הפונקציה היא <strong>שיפוע</strong> ההר בנקודה מסויימת; אבל הכרחי לשאול - שיפוע ביחס לאיזה כיוון? חשבו על שפת תהום, שבה בכיוון אחד יש לנו נפילה בכיוון אנכי ובכיוון אחר יש לנו משטח אופקי...

שני הכיוונים ה"נאיביים" הם אלו של ציר $latex x$ וציר $latex y$. עבורם פשוט נוהגים באופן הבא: "מקפיאים" את אחד המשתנים, וגוזרים לפי המשתנה השני. מה שמתקבל נקרא <strong>נגזרת חלקית</strong>. למשל:

$latex \frac{\partial u}{\partial x}\left(x,y\right)=\lim_{\Delta x\to0}\frac{u\left(x+\Delta x,y\right)-u\left(x,y\right)}{\Delta x}$

$latex \frac{\partial u}{\partial y}\left(x,y\right)=\lim_{\Delta y\to0}\frac{u\left(x,y+\Delta y\right)-u\left(x,y\right)}{\Delta y}$

כאשר כאן $latex a,b\in\mathbb{R}$. הסימון $latex \frac{\partial u}{\partial x}$ לתיאור נגזרת חלקית הוא וריאציה על הסימון $latex \frac{du}{dx}$ לתיאור נגזרת של פונקציה במשתנה יחיד (ה-$latex \partial$ הוא מין $latex d$ מסולסלת).

מסתבר ששתי הנגזרות החלקיות הללו מספיקות לנו כדי למצוא את הנגזרת של הפונקציה בכל כיוון, אבל אני לא מדבר כאן על אנליזה ממשית אז נעזוב את זה לבינתיים. תחת זאת אני רוצה לשאול את השאלה - מה קורה כאשר מנסים לנתח פונקציה מרוכבת בגישת הנגזרות החלקיות הזו?

ובכן, תהא $latex f:\mathbb{C}\to\mathbb{C}$ פונקציה מרוכבת. אפשר להציג אותה בתור זוג של פונקציות ממשיות $latex u,v:\mathbb{R}^{2}\to\mathbb{R}$: $latex f\left(x+yi\right)=u\left(x,y\right)+iv\left(x,y\right)$. עכשיו, נרצה לחשב את הנגזרת של $latex f$ בנקודה $latex z=x+iy$ <strong>בשתי דרכים שונות</strong>. בואו נסתכל קודם כל על הגבול הבא:

$latex \lim_{\Delta x\to0}\frac{f\left(z+\Delta x\right)-f\left(z\right)}{\Delta x}$

כאשר $latex \Delta x\in\mathbb{R}$. הגבול הזה הוא מעין גרסה מצומצמת של הגבול ה"כללי", שבו מה ששואף לאפס יכול להיות מספר מרוכב כלשהו ולא רק מספר ממשי. אם הגבול ה"כללי" קיים, אז בפרט הגבול ה"פרטי" קיים ושווה לו (תרגיל קל למדי להוכחה - עבור אפסילון נתון זו אותה הדלתא!). מצד שני, אם נעבור להציג את $latex f$ בעזרת הפונקציות הממשיות, נקבל:

$latex f^{\prime}\left(z\right)=\lim_{\Delta x\to0}\frac{u\left(x+\Delta x,y\right)-u\left(x,y\right)}{\Delta x}+\lim_{\Delta x\to0}i\frac{v\left(x+\Delta x,y\right)-v\left(x,y\right)}{\Delta x}=\frac{\partial u}{\partial x}\left(x,y\right)+i\frac{\partial v}{\partial x}\left(x,y\right)$

עד כאן, מתבקש; אבל עכשיו בואו נחשב את הגבול לא לאורך ציר $latex x$ אלא לאורך ציר $latex y$: נחשב את הגבול

$latex \lim_{\Delta y\to0}\frac{f\left(z+i\Delta y\right)-f\left(z\right)}{i\Delta y}$

כאשר $latex \Delta y\in\mathbb{R}$.

תזכרו מה זה אומר לחלק ב-$latex i$: מכיוון ש-$latex i^{4}=1$ אז $latex \frac{1}{i}=i^{3}$, ומצד שני $latex i^{3}=i^{2}i=-i$. לכן לחלק ב-$latex i$ זה בעצם לכפול ב-$latex -i$. מכאן שנקבל:

נקבל:

$latex f^{\prime}\left(z\right)=\lim_{\Delta y\to0}\frac{u\left(x,y+\Delta y\right)-u\left(x,y\right)}{i\Delta y}+\lim_{\Delta x\to0}i\frac{v\left(x,y+\Delta y\right)-v\left(x,y\right)}{i\Delta y}=-i\frac{\partial u}{\partial y}\left(x,y\right)+\frac{\partial v}{\partial y}\left(x,y\right)$

כלומר, דווקא $latex u$ (החלק ה"ממשי") הוכפל בסופו של דבר ב-$latex -i$, ואילו $latex v$ בסוף יצא עם מקדם 1, בלי $latex i$ ובלי מינוס ובלי שום דבר.

עכשיו אפשר להשוות את שני הערכים שקיבלנו:

$latex \frac{\partial u}{\partial x}\left(x,y\right)+i\frac{\partial v}{\partial x}\left(x,y\right)=\frac{\partial v}{\partial y}\left(x,y\right)-i\frac{\partial u}{\partial y}\left(x,y\right)$

כשמשווים שני מספרים מרוכבים, הם שווים רק אם החלקים הממשיים והמדומים שלהם שווים, ולכן נקבל בעצם <strong>זוג</strong> של משוואות:

$latex \frac{\partial u}{\partial x}=\frac{\partial v}{\partial y}$

$latex \frac{\partial u}{\partial y}=-\frac{\partial v}{\partial x}$

שמתקיימות בכל נקודה שבה $latex f$ גזירה. המשוואות הללו נקראות <strong>משוואות קושי-רימן</strong>.

משוואות קושי רימן מראות שאם אנחנו רוצים לבנות פונקציה מרוכבת גזירה, אי אפשר סתם לקחת שתי פונקציות $latex u,v$ ולחבר אותן ביחד, אפילו אם שתיהן גזירות בעצמן (כלומר, אם יש להן נגזרות חלקיות). הפונקציות הללו חייבות לקיים קשר כלשהו בין הנגזרות החלקיות שלהן כדי שהפונקציה המרוכבת שתתקבל מהן תהיה גזירה (ואם הייתי רוצה לקלל, הייתי קורא לקשר הזה "משוואה דיפרנציאלית חלקית"). אבל הקשר הזה בין שתי הפונקציות גם מצביע על עוד תכונה שכל פונקציה לבדה חייבת לקיים - בואו ניקח את $latex u$ ונגזור את הנגזרות החלקיות שלה שוב (צריך להסביר למה שהנגזרות החלקיות יהיו גזירות שוב - בינתיים בואו רק תניחו שזה קורה). נקבל:

$latex \frac{\partial^{2}u}{\partial x^{2}}=\frac{\partial v}{\partial x\partial y}$

$latex \frac{\partial^{2}u}{\partial y^{2}}=-\frac{\partial v}{\partial y\partial x}$

$latex \frac{\partial v}{\partial x\partial y}$ הוא מה שמקבלים כשגוזרים את $latex v$ קודם על פי $latex x$ ואז על פי $latex y$ ו-$latex \frac{\partial v}{\partial y\partial x}$ הוא מה שקורה כשגוזרים על פי הסדר ההפוך. יש משפט באנליזה שמראה שאם הנגזרות ה"מעורבות" הללו רציפות אז הן שוות, כלומר $latex \frac{\partial v}{\partial y\partial x}=\frac{\partial v}{\partial x\partial y}$; המסקנה היא שבמקרה שלנו $latex \frac{\partial^{2}u}{\partial x^{2}}+\frac{\partial^{2}u}{\partial y^{2}}=0$. בניסוח אחר, $latex u$ היא פונקציה שמתאפסת על ידי אופרטור ה<strong>לפליסאן</strong>, $latex \Delta=\frac{\partial^{2}}{\partial x^{2}}+\frac{\partial^{2}}{\partial y^{2}}$. לפונקציות כאלו יש שם מיוחד - פונקציות <strong>הרמוניות</strong>. אני לא נכנס עכשיו לפרטים של מה זה בדיוק אומר; אני רק רוצה שנקבל תחושה של איך שמשוואות קושי רימן מצביעות על כך שלא כל פונקציה מהרחוב יכולה להשתתף בפרוייקט הכביר והנשגב של בניית פונקציה מרוכבת גזירה: יש תנאים לא טריוויאליים שצריכים להתקיים.

עכשיו אני רוצה להכניס לתמונה מושג שעד כה החבאתי - <strong>פונקציה אנליטית</strong>. למשמעות המלאה של המושג הזה נגיע רק בהמשך, אז בינתיים אתן הגדרה יבשה למדי - אם $latex D$ היא קבוצה פתוחה במישור המרוכב - מה שאקרא לו גם "תחום" - אז פונקציה מרוכבת $latex f:D\to\mathbb{C}$ היא <strong>אנליטית</strong> אם היא גזירה בכל נקודה של $latex D$ (אם תחום ההגדרה של $latex f$ רחב יותר אפשר להצטמצמם רק ל-$latex D$ ולומר ש-"$latex f$ אנליטית על $latex D$"). שימו לב שאנליטיות היא לא תכונה נקודתית - היא תכונה שמתארת את התנהגות הפונקציה בתוך קבוצה פתוחה. מה זו קבוצה פתוחה? בהקשר של המישור המרוכב, זוהי קבוצה שכל נקודה בה היא נקודה פנימית של הקבוצה: לכל $latex z_{0}\in D$ קיים $latex r&gt;0$ ממשי כך שאם $latex \left\|z-z_{0}\right\|&lt;r$ אז $latex z\in D$ (ציורית, כל נקודה $latex z_{0}$ בקבוצה ניתן להקיף בעיגול קטן שכולו מוכל בקבוצה). למה חשוב לנו ש-$latex D$ תהיה פתוחה? נראה זאת בהמשך; אנליטיות של פונקציה נותנת לנו "קצת יותר" מאשר גזירות בלבד.

עכשיו אני רוצה לתאר בנפנוף ידיים את הכיוון השני של המשפט על נוסחאות קושי-רימן: לא רק שמדובר על תנאי <strong>הכרחי</strong> עבור פונקציות כדי שיוכלו להרכיב פונקציה אנליטית, זה גם תנאי <strong>מספיק</strong>: אם $latex u,v$ הן בעלות נגזרות חלקיות רציפות שמקיימות את משוואות קושי רימן על תחום $latex D$ כלשהו, אז $latex u+iv$ היא פונקציה אנליטית.

ההוכחה לא מסובכת, אבל מתבססת על עוד משהו באנליזה "רגילה" שלא הראיתי אף פעם - פיתוח טיילור של פונקציה בשני משתנים. בקצרה, אפשר לכתוב את הערך של $latex u$ אחרי שמזיזים טיפה את הערכים שלה ביחס לנקודה $latex \left(x,y\right)$ נתונה על ידי הערך שלה ב-$latex \left(x,y\right)$, הערכים של הנגזרות החלקיות הראשונות שלה ב-$latex \left(x,y\right)$, ועוד שארית "קטנה". זה מתואר על ידי הנוסחה המזעזעת הבאה:

$latex u\left(x+\Delta x,y+\Delta y\right)=u\left(x,y\right)+\frac{\partial u}{\partial x}\left(x,y\right)\Delta x+\frac{\partial u}{\partial y}\left(x,y\right)\Delta y+R\left(\Delta x,\Delta y\right)$

כאשר $latex R\left(\Delta x,\Delta y\right)$ היא "קטנה", במובן זה שאם נסמן $latex \Delta z=\Delta x+i\Delta y$ נקבל ש-$latex \lim_{\Delta z\to0}\frac{R\left(\Delta x,\Delta y\right)}{\left\|\Delta z\right\|}=0$. באותו אופן אפשר לכתוב עבור $latex v$:

$latex v\left(x+\Delta x,y+\Delta y\right)=v\left(x,y\right)+\frac{\partial v}{\partial x}\left(x,y\right)\Delta x+\frac{\partial v}{\partial y}\left(x,y\right)\Delta y+S\left(\Delta x,\Delta y\right)$

ועכשיו, אם נכתוב את $latex f\left(z+\Delta z\right)=u\left(x+\Delta x,y+\Delta y\right)+iv\left(x+\Delta x,y+\Delta y\right)$ במפורש על פי הנוסחאות שלמעלה <strong>ונשתמש בנוסחאות קושי רימן</strong>, העסק המזוויע הזה יצטמצם למשהו שדי קל להבין:

$latex f\left(z+\Delta z\right)=f\left(z\right)+\left(\frac{\partial u}{\partial x}\left(x,y\right)+i\frac{\partial v}{\partial x}\left(x,y\right)\right)\Delta z+R\left(\Delta z\right)+iS\left(\Delta z\right)$

עכשיו קחו את האיבר הראשון באגף ימין, חסרו אותו משני האגפים, חלקו אותם ב-$latex \Delta z$, והופס:

$latex \frac{f\left(z+\Delta z\right)-f\left(z\right)}{\Delta z}=\left(\frac{\partial u}{\partial x}\left(x,y\right)+i\frac{\partial v}{\partial x}\left(x,y\right)\right)+\frac{R\left(\Delta z\right)+iS\left(\Delta z\right)}{\Delta z}$

ואחרי השאפת $latex \Delta z$ לאפס נישאר עם $latex f^{\prime}\left(z\right)=\frac{\partial u}{\partial x}\left(x,y\right)+i\frac{\partial v}{\partial x}\left(x,y\right)$ . קיבלנו ש-$latex f$ גזירה וגם מצאנו נוסחה לנגזרת שלה.

בואו נראה דוגמה קלילה לסיום, כי בלי זה באמת אי אפשר. כזכור, הגדרנו את פונקצית האקספוננט (על התחום $latex \mathbb{C}$) באופן הבא: $latex e^{x+iy}=e^{x}\cos y+ie^{x}\sin y$. כלומר, $latex u\left(x,y\right)=e^{x}\cos y$ ו-$latex u\left(x,y\right)=e^{x}\sin y$ במקרה שלנו. בואו נחשב את הנגזרות החלקיות:

$latex \frac{\partial u}{\partial x}=e^{x}\cos y$

$latex \frac{\partial u}{\partial y}=-e^{x}\sin y$

$latex \frac{\partial v}{\partial x}=e^{x}\sin y$

$latex \frac{\partial v}{\partial y}=e^{x}\cos y$

ובבירור משוואות קושי רימן אכן מתקיימות. במובן מסויים פונקציית האקספוננט גם מקיימת את המשוואות הללו בצורה "טבעית" מאוד לטעמי, אבל לא אנסה לשכנע אתכם בכך.

לסיכום, משוואות קושי-רימן הן הצצה ראשונה לאופן שבו תכונות כמו גזירות הן בעלות רמת סיבוכיות נוספת לעומת מה שקורה בפונקציות ממשיות, אבל זה רק החימום - תאמינו לי שבהמשך הולכים לקרות דברים מוזרים הרבה יותר.
