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
המושג היסודי בחשבון דיפרנציאלי הוא מושג ה<strong>נגזרת</strong>. כבר הקדשתי לו <a href="http://www.gadial.net/2010/11/21/derivative/">פוסט</a>, אבל אחזור על הרעיון בקצרה: כאשר יש לנו פונקציה {::nomarkdown}\( f\){:/nomarkdown}, אנחנו מעוניינים למדוד את <strong>קצב השינוי</strong> שלה. המושג האינטואיטיבי שלנו הוא זה של <strong>שינוי ממוצע</strong> - מסתכלים על ההפרש בין ערכי הפונקציה בשתי נקודות שונות, ומחלקים אותו בהפרש שבין הנקודות הללו. אם המרחק בין ת"א וחיפה הוא 100 ק"מ, והמרחק בין השעה שבה יצאנו מת"א - 8:00 - לשעה שבה הגענו לחיפה - 10:00 - הוא 2 שעות, אז השינוי הממוצע של פונקציית המיקום שלנו (פונקציה שמקבלת נקודת זמן ומחזירה את המיקום שלנו באותה נקודת זמן) בין שתי הנקודות הללו של 8:00 ו-10:00 הוא {::nomarkdown}\( \frac{100}{2}=50\){:/nomarkdown}, כשהיחידות שבהן אנו מבצעים את המדידה הן ק"מ לשעה (במתמטיקה הפונקציות הן לרוב אבסטרקטיות - מקבלות מספרים חסרי יחידות ומחזירות מספרים חסרי יחידות - ולכן אנחנו לא מדברים על יחידות רוב הזמן). הבעיה בשינוי ממוצע שכזה היא בכך שהוא מתאר מה קרה לאורך פרק זמן ארוך כלשהו - הוא לא אומר לנו מה קרה בנקודת זמן מסויימת (כלומר, מה היינו רואים אם היינו מסתכלים במד המהירות בנקודת זמן כלשהי).

הדרך הנאיבית להתמודד עם הבעיה היא לומר - אוקיי, אז בואו נשתמש באותו תעלול שהשתמשנו בו עד כה. חישבנו את השינוי הממוצע בין ערך הפונקציה ב-{::nomarkdown}\( x\){:/nomarkdown} ובין ערכה ב-{::nomarkdown}\( y\){:/nomarkdown} על ידי הנוסחה {::nomarkdown}\( \frac{f\left(x\right)-f\left(y\right)}{x-y}\){:/nomarkdown}? יופי, בואו נציב {::nomarkdown}\( x=y\){:/nomarkdown} ונראה מה נקבל. לרוע המזל, נקבל ביטוי מהצורה {::nomarkdown}\( \frac{0}{0}\){:/nomarkdown} וביטוי כזה אינו מוגדר, ואין דרך טובה להגדיר אותו בצורה חד משמעית. אנחנו צריכים לנקוט בגישה קצת יותר חכמה כדי לחקור את {::nomarkdown}\( f\){:/nomarkdown}.

הפתרון הוא כזה: כדי לדעת מה קצב השינוי של הפונקציה {::nomarkdown}\( f\){:/nomarkdown} בנקודה {::nomarkdown}\( x\){:/nomarkdown}, מוסיפים ל-{::nomarkdown}\( x\){:/nomarkdown} ערך <strong>קטן מאוד אך לא אפס</strong> שאפשר לסמן ב-{::nomarkdown}\( dx\){:/nomarkdown}, ואז מחשבים את {::nomarkdown}\( \frac{f\left(x+dx\right)-f\left(x\right)}{dx}\){:/nomarkdown}. זה מה שניוטון ולייבניץ עשו. לרוע המזל, הפתרון הזה לא מוגדר עד הסוף מבחינה מתמטית - לא ברור מה בדיוק אומר מתמטית "קטן מאוד אך לא אפס", ואיך עובדים עם יצור כזה מבחינה טכנית - ניוטון ולייבניץ פשוט התייחסו אליו כאל אפס כשהיה נוח להם, ואל משהו שאינו אפס כשהיה נוח להם. אפשר לבצע פורמליזציה מתמטית של יצור כזה, אבל הגישה הסטנדרטית באנליזה היא שונה ומשתמשת במושג ה<strong>גבול</strong>. הרעיון הבסיסי הוא לקחת ערך מספרי קונקרטי {::nomarkdown}\( h\){:/nomarkdown}, לחשב את {::nomarkdown}\( \frac{f\left(x+h\right)-f\left(x\right)}{h}\){:/nomarkdown}, ואז לשאול את עצמנו לאיזה ערך הביטוי הזה <strong>שואף</strong> כאשר {::nomarkdown}\( h\){:/nomarkdown} שואף לאפס. פורמלית וטכנית, מחשבים את הגבול {::nomarkdown}\( \lim_{h\to0}\frac{f\left(x+h\right)-f\left(x\right)}{h}\){:/nomarkdown}.

מושג הגבול מצריך הגדרה קפדנית בפני עצמו, וגם לו הקדשתי <a href="http://www.gadial.net/2010/10/03/limit_of_sequence/">פוסט</a>. בכל זאת צריך להזכיר את ההגדרה המדויקת: הפונקציה {::nomarkdown}\( f:\mathbb{R}\to\mathbb{R}\){:/nomarkdown} מקיימת {::nomarkdown}\( \lim_{x\to x_{0}}f\left(x\right)=L\){:/nomarkdown} אם לכל {::nomarkdown}\( \varepsilon&gt;0\){:/nomarkdown} קיים {::nomarkdown}\( \delta&gt;0\){:/nomarkdown} כך שאם {::nomarkdown}\( \left\|x-x_{0}\right\|&lt;\delta\){:/nomarkdown} אז {::nomarkdown}\( \left\|f\left(x\right)-L\right\|&lt;\varepsilon\){:/nomarkdown}. ועכשיו אנחנו צריכים לעצור ולשאול את עצמנו - מה בהגדרה הזו דורש את היות {::nomarkdown}\( f\){:/nomarkdown} פונקציה שמוגדרת על מספרים ממשיים? מה צריך לתקן כדי להיות מסוגלים להכליל את ההגדרה לפונקציות מעל מרחבים אחרים? התשובה היא פשוטה - הערך המוחלט.

הערך המוחלט משמש בהגדרת הגבול בתור מקרה פרטי של <strong>פונקצית מרחק</strong>, (או בשם אחר <strong>מטריקה</strong>). את המושג הזה אפשר להציג בצורה כללית מאוד: אם {::nomarkdown}\( A\){:/nomarkdown} היא קבוצה, אז מטריקה היא כל פונקציה {::nomarkdown}\( d:A\times A\to\mathbb{R}\){:/nomarkdown} כך ש-{::nomarkdown}\( d\left(x,y\right)=0\){:/nomarkdown} אם ורק אם {::nomarkdown}\( x=y\){:/nomarkdown}, ו-{::nomarkdown}\( d\left(x,y\right)=d\left(y,x\right)\){:/nomarkdown} לכל {::nomarkdown}\( x,y\){:/nomarkdown}, ו-{::nomarkdown}\( d\left(x,y\right)\le d\left(x,z\right)+d\left(y,z\right)\){:/nomarkdown} לכל {::nomarkdown}\( x,y,z\){:/nomarkdown}. למה שלוש התכונות הללו דווקא? כי כשמסתכלים על מה שעושים בהוכחות שמערבות את מושג הגבול, אפשר לראות שאנחנו לא נזקקים לכל התכונות האפשריות של ערך מוחלט במהלך ההוכחה, ולעתים קרובות שלוש התכונות שציינתי מספיקות בהחלט כדי להשיג את אותן התוצאות.

לכן, השלב הראשון בהכללת מושג הנגזרת לפונקציות מרוכבות הוא הכללת מושג המרחק עבור מספרים מרוכבים. אבל זה קל - כבר ראינו איך מוגדר ערך מוחלט עבור מספרים מרוכבים: {::nomarkdown}\( \left\|a+bi\right\|=\sqrt{a^{2}+b^{2}}\){:/nomarkdown}. זו אותה מטריקה בדיוק כמו המטריקה על {::nomarkdown}\( \mathbb{R}^{2}\){:/nomarkdown} שבה משתמשים כשרוצים להגדיר חשבון דיפרנציאלי על פונקציות מ- ואל {::nomarkdown}\( \mathbb{R}^{2}\){:/nomarkdown}. אז בעצם, מה ההבדל בין חשבון דיפרנציאלי של פונקציות {::nomarkdown}\( f:\mathbb{R}^{2}\to\mathbb{R}^{2}\){:/nomarkdown} ובין פונקציות {::nomarkdown}\( f:\mathbb{C}\to\mathbb{C}\){:/nomarkdown}? נדבר על זה עוד מעט.

אז יש לנו מושג של גבול של פונקציה מרוכבת (ובדומה גם אפשר להגדיר גבול של סדרה מרוכבת, אבל אין לנו צורך בגבולות כאלו עדיין). מכאן ההגדרה של נגזרת מרוכבת נובעת כמעט מעצמה: אם {::nomarkdown}\( f:\mathbb{C}\to\mathbb{C}\){:/nomarkdown} היא פונקציה מרוכבת ו-{::nomarkdown}\( z\in\mathbb{C}\){:/nomarkdown} הוא מספר מרוכב כלשהו, אז אנו מגדירים {::nomarkdown}\( f^{\prime}\left(z_{0}\right)=\lim_{\Delta z\to0}\frac{f\left(z_{0}+\Delta z\right)-f\left(z_{0}\right)}{\Delta z}\){:/nomarkdown}. אם הגבול הזה קיים (ושונה מאינסוף), אומרים שהפונקציה <strong>גזירה</strong> בנקודה {::nomarkdown}\( z_{0}\){:/nomarkdown}. זה הכל. אין כאן שום דבר חדש למי שכבר מכיר חדו"א; אבל כפי שנראה בקרוב, אם {::nomarkdown}\( f:\mathbb{C}\to\mathbb{C}\){:/nomarkdown} היא גזירה, ההשלכות של זה הן קיצוניות יותר מאשר עבור פונקציה ממשית.

רגע, השלכות? אילו השלכות יכולות להיות לכך שפונקציה היא גזירה? ובכן, משפט בסיסי אחד בחדו"א הוא שכל פונקציה גזירה היא גם רציפה בכל נקודה שבה היא גזירה (רציפות פירושה ש-{::nomarkdown}\( \lim_{x\to x_{0}}f\left(x\right)=f\left(x_{0}\right)\){:/nomarkdown}). המשפט הזה תקף גם עבור פונקציות מרוכבות, וכפי שנראה, ההוכחה "אדישה" לשאלה אם הפונקציה מרוכבת או לא, כל עוד מושג הגבול שלנו מתנהג באותו האופן.

ההוכחה מתבססת על השוויון הבא: {::nomarkdown}\( f\left(z_{0}+\Delta z\right)=f\left(z_{0}\right)+\frac{f\left(z_{0}+\Delta z\right)-f\left(z_{0}\right)}{\Delta z}\cdot\Delta z\){:/nomarkdown} - שהוא, כמובן, טריוויאלי. מה שמעניין הוא מה שקורה כאשר משאיפים את {::nomarkdown}\( \Delta z\){:/nomarkdown} לאפס: מקבלים ש-

{::nomarkdown}\( \lim_{\Delta z\to0}f\left(z_{0}+\Delta z\right)=\lim_{\Delta z\to0}\left(f\left(z_{0}\right)+\frac{f\left(z_{0}+\Delta z\right)-f\left(z_{0}\right)}{\Delta z}\cdot\Delta z\right)=f\left(z_{0}\right)+f^{\prime}\left(z_{0}\right)\cdot0=f\left(z_{0}\right)\){:/nomarkdown}

כאשר השוויון האחרון נובע מכך ש-{::nomarkdown}\( \lim_{\Delta z\to0}\frac{f\left(z_{0}+\Delta z\right)-f\left(z_{0}\right)}{\Delta z}=f^{\prime}\left(z_{0}\right)\){:/nomarkdown} וזה מספר מרוכב, ואילו {::nomarkdown}\( \lim_{\Delta z\to0}\Delta z=0\){:/nomarkdown}, וגבול של מכפלה של שני גבולות מתכנסים שווה למכפלה שלהם. רק כדי לשכנע אתכם סופית בכך שאין הבדל בין חדו"א רגיל ואנליזה מרוכבת בנקודה הזו, אני אחזור על איך מוכיחים את הטענה הזו. פורמלית אני רוצה להוכיח שאם {::nomarkdown}\( \lim_{z\to z_{0}}f\left(z\right)=a\){:/nomarkdown} ו-{::nomarkdown}\( \lim_{z\to z_{0}}g\left(z\right)=b\){:/nomarkdown} אז {::nomarkdown}\( \lim_{z\to z_{0}}f\left(z\right)g\left(z\right)=ab\){:/nomarkdown}. כלומר, אני רוצה להיות מסוגל לחסום בצורה טובה את הביטוי {::nomarkdown}\( \left\|f\left(z\right)g\left(z\right)-ab\right\|\){:/nomarkdown}. לשם כך, אני נוקט את התעלול הכי ישן בספר - מוסיף ומחסיר את אותו גורם, שאחרי טיפה משחקים אפשר לראות שכדאי שיהיה {::nomarkdown}\( bf\left(z\right)\){:/nomarkdown} כדי שנוכל לקבל חסם שכולל את שני הגבולות שאנחנו יודעים עליהם:

{::nomarkdown}\( \left\|f\left(z\right)g\left(z\right)-ab\right\|=\left\|f\left(z\right)g\left(z\right)+bf\left(z\right)-bf\left(z\right)-ab\right\|=\left\|f\left(z\right)\left[g\left(z\right)-b\right]+b\left[f\left(z\right)-a\right]\right\|\){:/nomarkdown}

{::nomarkdown}\( \le\left\|f\left(z\right)\right\|\left\|g\left(z\right)-b\right\|+\left\|b\right\|\left\|f\left(z\right)-a\right\|\){:/nomarkdown}

עכשיו, יהא {::nomarkdown}\( \varepsilon&gt;0\){:/nomarkdown} כלשהו. אנחנו רוצים למצוא {::nomarkdown}\( \delta\){:/nomarkdown} כך שלכל {::nomarkdown}\( z\){:/nomarkdown} שמקיים {::nomarkdown}\( \left\|z-z_{0}\right\|&lt;\delta\){:/nomarkdown}, מתקיים ש-{::nomarkdown}\( \left\|f\left(z\right)\right\|\left\|g\left(z\right)-b\right\|+\left\|b\right\|\left\|f\left(z\right)-a\right\|&lt;\varepsilon\){:/nomarkdown}. ראשית, מכיוון ש-{::nomarkdown}\( \lim_{z\to z_{0}}f\left(z\right)=a\){:/nomarkdown} נובע מכך שקיים {::nomarkdown}\( \delta_{1}\){:/nomarkdown} כך שאם {::nomarkdown}\( \left\|z-z_{0}\right\|&lt;\delta_{1}\){:/nomarkdown} אז {::nomarkdown}\( \left\|f\left(z\right)-a\right\|&lt;\frac{\varepsilon}{2\left\|b\right\|}\){:/nomarkdown}, ולכן {::nomarkdown}\( \left\|b\right\|\left\|f\left(z\right)-a\right\|&lt;\frac{\varepsilon}{2}\){:/nomarkdown}.

שנית, קיים {::nomarkdown}\( \delta_{2}\){:/nomarkdown} כך שאם {::nomarkdown}\( \left\|z-z_{0}\right\|&lt;\delta_{2}\){:/nomarkdown} אז {::nomarkdown}\( \left\|f\left(z\right)-a\right\|&lt;1\){:/nomarkdown}, ולכן {::nomarkdown}\( \left\|f\left(z\right)\right\|&lt;1+a\){:/nomarkdown}. הויסה, רגע, רגע! איך עשיתי את זה? ובכן, תכונה כללית של ערך מוחלט: {::nomarkdown}\( \left\|x-y\right\|\ge\left\|x\right\|-\left\|y\right\|\){:/nomarkdown}. איך מוכיחים אותה? ובכן, {::nomarkdown}\( \left\|x\right\|=\left\|x-y+y\right\|\le\left\|x-y\right\|+\left\|y\right\|\){:/nomarkdown}. כל מה שאני מתבסס עליו הוא אי-שוויון המשולש (והטריק הרגיל של לחסר ולחבר את אותו הדבר).

כעת, קיים גם {::nomarkdown}\( \delta_{3}\){:/nomarkdown} כך שאם {::nomarkdown}\( \left\|z-z_{0}\right\|&lt;\delta_{3}\){:/nomarkdown} אז {::nomarkdown}\( \left\|g\left(z\right)-b\right\|&lt;\frac{\varepsilon}{2\left(1+a\right)}\){:/nomarkdown}, ולכן אם {::nomarkdown}\( \left\|z-z_{0}\right\|&lt;\min\left\{ \delta_{2},\delta_{3}\right\} \){:/nomarkdown} מתקיים {::nomarkdown}\( \left\|f\left(z\right)\right\|\left\|g\left(z\right)-b\right\|&lt;\left(1+a\right)\frac{\varepsilon}{2\left(1+a\right)}=\frac{\varepsilon}{2}\){:/nomarkdown}. המסקנה הסופית: נגדיר {::nomarkdown}\( \delta=\min\left\{ \delta_{1},\delta_{2},\delta_{3}\right\} \){:/nomarkdown} ונקבל שאם {::nomarkdown}\( \left\|z-z_{0}\right\|&lt;\delta\){:/nomarkdown} אז

{::nomarkdown}\( \left\|f\left(z\right)\right\|\left\|g\left(z\right)-b\right\|+\left\|b\right\|\left\|f\left(z\right)-a\right\|&lt;\frac{\varepsilon}{2}+\frac{\varepsilon}{2}=\varepsilon\){:/nomarkdown}

שימו לב בכמה מעט השתמשנו בהוכחה הזו.

חזרה לענייננו. הוכחנו שפונקציה גזירה היא גם רציפה; בואו נראה עוד כמה תכונות בסיסיות של נגזרות. תכונה נחמדה אחת של נגזרת היא שמדובר על אופרטור <strong>לינארי</strong> - זה אומר שאם {::nomarkdown}\( a,b\in\mathbb{C}\){:/nomarkdown} ו-{::nomarkdown}\( f,g\){:/nomarkdown} הן פונקציות מרוכבות, אז {::nomarkdown}\( \left[af+bg\right]^{\prime}=af^{\prime}+bg^{\prime}\){:/nomarkdown} (למי שמכיר אלגברה לינארית - זה אומר שאופרטור הגזירה הוא טרנספורמציה לינארית, עבור מרחבים וקטוריים מתאימים של פונקציות). ההוכחה לזה נובעת מייד מתכונות של גבולות ושימוש בהגדרה של נגזרת ולא אכנס אליה. תחת זאת אציג את ההוכחה למשהו טיפה יותר מסובך - נוסחת הנגזרת של מכפלה, שזהה גם היא למקרה הממשי: {::nomarkdown}\( \left[fg\right]^{\prime}=f^{\prime}g+fg^{\prime}\){:/nomarkdown}. ההוכחה, כרגיל, מבוססת על לחבר ולהחסיר את אותו דבר:

{::nomarkdown}\( \left[fg\right]^{\prime}\left(z_{0}\right)=\lim_{\Delta z\to0}\frac{fg\left(z_{0}+\Delta z\right)-fg\left(z_{0}\right)}{\Delta z}=\lim_{\Delta z\to0}\frac{fg\left(z_{0}+\Delta z\right)+f\left(z_{0}+\Delta z\right)g\left(z_{0}\right)-f\left(z_{0}+\Delta z\right)g\left(z_{0}\right)-fg\left(z_{0}\right)}{\Delta z}\){:/nomarkdown}

{::nomarkdown}\( =\lim_{\Delta z\to0}\frac{f\left(z_{0}+\Delta z\right)\left[g\left(z_{0}+\Delta z\right)-g\left(z_{0}\right)\right]}{\Delta z}+\lim_{\Delta z\to0}\frac{g\left(z_{0}\right)\left[f\left(z_{0}+\Delta z\right)-f\left(z_{0}\right)\right]}{\Delta z}\){:/nomarkdown}

{::nomarkdown}\( =f\left(z_{0}\right)g^{\prime}\left(z_{0}\right)+g\left(z_{0}\right)f^{\prime}\left(z_{0}\right)\){:/nomarkdown}

הבנתם את הפרינציפ. זה מה שתמיד כיף בהכללות מתמטיות - האופן שבו חלק מההוכחות פשוט ממשיכות לעבוד למרות ששינינו לגמרי את "שדה המשחק" שלהן.

ומה עם גזירה של פונקציות קונקרטיות? ובכן, בינתיים מה שפשוט להציג הוא את הגזירה של פולינום. פולינום הוא ביטוי מהצורה {::nomarkdown}\( \sum a_{n}z^{n}\){:/nomarkdown}, ולכן אפשר להשתמש בלינאריות של הנגזרת כדי לקבל ש-{::nomarkdown}\( \left[\sum a_{n}z^{n}\right]^{\prime}=\sum a_{n}\left[z^{n}\right]^{\prime}\){:/nomarkdown}, כלומר די למצוא את הנגזרת של פונקציות מהצורה {::nomarkdown}\( f\left(z\right)=z^{n}\){:/nomarkdown}. פונקציות כאלו אפשר להציג אינדוקטיבית בתור {::nomarkdown}\( z^{n}=z^{n-1}\cdot z\){:/nomarkdown} ואז לגזור עם כלל הגזירה של מכפלה. בשביל הבסיס נצטרך להבין את הנגזרת של {::nomarkdown}\( f\left(z\right)=z\){:/nomarkdown}, ואת זה אפשר לעשות ישירות מההגדרה:

{::nomarkdown}\( f^{\prime}\left(z_{0}\right)=\lim_{\Delta z\to0}\frac{f\left(z_{0}+\Delta z\right)-f\left(z_{0}\right)}{\Delta z}=\lim_{\Delta z\to0}\frac{z_{0}+\Delta z-z_{0}}{\Delta z}=\lim_{\Delta z\to0}1=1\){:/nomarkdown}

וכעת אפשר לנחש (אחרי שמנסים כמה מקרים פרטיים, או סתם לזכור מה קורה במספרים ממשיים) ש-{::nomarkdown}\( \left[z^{n}\right]^{\prime}=nz^{n-1}\){:/nomarkdown}, ולהוכיח את זה באינדוקציה:

{::nomarkdown}\( \left[z^{n}\right]^{\prime}=\left[z^{n-1}\right]^{\prime}z+z^{n-1}=\left(n-1\right)z^{n-2}\cdot z+z^{n-1}=nz^{n-1}\){:/nomarkdown}

טוב, מספיק עם זה. עד עכשיו כל מה שעשיתי הוא לקחת תוצאות מחדו"א במספרים ממשיים ולהגיד "היי, תראו, איזה מגניב, זה עובד גם כאן!". עד כאן. אני רוצה להראות משהו חדש - את <strong>משוואות קושי-רימן</strong>. נתחיל דווקא בלדבר על פונקציות ממשיות מהמרחב לעצמו, דהיינו {::nomarkdown}\( f:\mathbb{R}^{2}\to\mathbb{R}^{2}\){:/nomarkdown}. איך אפשר להגדיר נגזרת של פונקציה שכזו? אפשר לדבר על גבולות ב-{::nomarkdown}\( \mathbb{R}^{2}\){:/nomarkdown} - כבר אמרנו שיש לנו על {::nomarkdown}\( \mathbb{R}^{2}\){:/nomarkdown} את אותה מטריקה כמו ב-{::nomarkdown}\( \mathbb{C}\){:/nomarkdown}, אבל משהו אחר ישתבש. אם ננסה להגדיר {::nomarkdown}\( f^{\prime}\left(a_{0}\right)=\lim_{\Delta a\to0}\frac{f\left(a+\Delta a\right)-f\left(a\right)}{\Delta a}\){:/nomarkdown} נקבל משהו שהוא ביטוי חסר משמעות, כי יש בו שבר שבו במונה ובמכנה יש איברים של {::nomarkdown}\( \mathbb{R}^{2}\){:/nomarkdown}, כלומר אנחנו מחלקים איבר של {::nomarkdown}\( \mathbb{R}^{2}\){:/nomarkdown} באיבר אחר של {::nomarkdown}\( \mathbb{R}^{2}\){:/nomarkdown}. אבל על {::nomarkdown}\( \mathbb{R}^{2}\){:/nomarkdown} אין לנו מושג של חילוק - {::nomarkdown}\( \mathbb{R}^{2}\){:/nomarkdown} אינו <strong>שדה</strong>. אם אתם זוכרים, <a href="http://www.gadial.net/2013/07/21/complex_analysis_intro/">בפוסט הראשון</a> על פונקציות מרוכבות התייחסתי לנקודה הזו. המספרים המרוכבים הם כן שדה בזכות פעולת כפל "מתוחכמת" (שממנה נובעת פעולת החילוק). הנה הנקודה המדוייקת שבו האנליזה של {::nomarkdown}\( \mathbb{R}^{2}\){:/nomarkdown} נפרדת מהאנליזה המרוכבת.

אבל מה כן עושים ב-{::nomarkdown}\( \mathbb{R}^{2}\){:/nomarkdown}? דרך אחת לתאר פונקציות כאלו היא בתור זוג פונקציות {::nomarkdown}\( u,v:\mathbb{R}^{2}\to\mathbb{R}\){:/nomarkdown} שמקבלות כל אחת זוג ערכים ומחזירות ערך בודד: {::nomarkdown}\( f\left(x,y\right)=\left(u\left(x,y\right),v\left(x,y\right)\right)\){:/nomarkdown}. כעת אפשר לדבר על הנגזרות של כל פונקציה כזו בנפרד. אבל מה המשמעות של נגזרת של פונקציה בשני משתנים? חשבו על הפונקציה כאילו היא מתארת קווי גובה של הר - לכל נקודה במישור מותאם ה"גובה" שלה. אז נגזרת של הפונקציה היא <strong>שיפוע</strong> ההר בנקודה מסויימת; אבל הכרחי לשאול - שיפוע ביחס לאיזה כיוון? חשבו על שפת תהום, שבה בכיוון אחד יש לנו נפילה בכיוון אנכי ובכיוון אחר יש לנו משטח אופקי...

שני הכיוונים ה"נאיביים" הם אלו של ציר {::nomarkdown}\( x\){:/nomarkdown} וציר {::nomarkdown}\( y\){:/nomarkdown}. עבורם פשוט נוהגים באופן הבא: "מקפיאים" את אחד המשתנים, וגוזרים לפי המשתנה השני. מה שמתקבל נקרא <strong>נגזרת חלקית</strong>. למשל:

{::nomarkdown}\( \frac{\partial u}{\partial x}\left(x,y\right)=\lim_{\Delta x\to0}\frac{u\left(x+\Delta x,y\right)-u\left(x,y\right)}{\Delta x}\){:/nomarkdown}

{::nomarkdown}\( \frac{\partial u}{\partial y}\left(x,y\right)=\lim_{\Delta y\to0}\frac{u\left(x,y+\Delta y\right)-u\left(x,y\right)}{\Delta y}\){:/nomarkdown}

כאשר כאן {::nomarkdown}\( a,b\in\mathbb{R}\){:/nomarkdown}. הסימון {::nomarkdown}\( \frac{\partial u}{\partial x}\){:/nomarkdown} לתיאור נגזרת חלקית הוא וריאציה על הסימון {::nomarkdown}\( \frac{du}{dx}\){:/nomarkdown} לתיאור נגזרת של פונקציה במשתנה יחיד (ה-{::nomarkdown}\( \partial\){:/nomarkdown} הוא מין {::nomarkdown}\( d\){:/nomarkdown} מסולסלת).

מסתבר ששתי הנגזרות החלקיות הללו מספיקות לנו כדי למצוא את הנגזרת של הפונקציה בכל כיוון, אבל אני לא מדבר כאן על אנליזה ממשית אז נעזוב את זה לבינתיים. תחת זאת אני רוצה לשאול את השאלה - מה קורה כאשר מנסים לנתח פונקציה מרוכבת בגישת הנגזרות החלקיות הזו?

ובכן, תהא {::nomarkdown}\( f:\mathbb{C}\to\mathbb{C}\){:/nomarkdown} פונקציה מרוכבת. אפשר להציג אותה בתור זוג של פונקציות ממשיות {::nomarkdown}\( u,v:\mathbb{R}^{2}\to\mathbb{R}\){:/nomarkdown}: {::nomarkdown}\( f\left(x+yi\right)=u\left(x,y\right)+iv\left(x,y\right)\){:/nomarkdown}. עכשיו, נרצה לחשב את הנגזרת של {::nomarkdown}\( f\){:/nomarkdown} בנקודה {::nomarkdown}\( z=x+iy\){:/nomarkdown} <strong>בשתי דרכים שונות</strong>. בואו נסתכל קודם כל על הגבול הבא:

{::nomarkdown}\( \lim_{\Delta x\to0}\frac{f\left(z+\Delta x\right)-f\left(z\right)}{\Delta x}\){:/nomarkdown}

כאשר {::nomarkdown}\( \Delta x\in\mathbb{R}\){:/nomarkdown}. הגבול הזה הוא מעין גרסה מצומצמת של הגבול ה"כללי", שבו מה ששואף לאפס יכול להיות מספר מרוכב כלשהו ולא רק מספר ממשי. אם הגבול ה"כללי" קיים, אז בפרט הגבול ה"פרטי" קיים ושווה לו (תרגיל קל למדי להוכחה - עבור אפסילון נתון זו אותה הדלתא!). מצד שני, אם נעבור להציג את {::nomarkdown}\( f\){:/nomarkdown} בעזרת הפונקציות הממשיות, נקבל:

{::nomarkdown}\( f^{\prime}\left(z\right)=\lim_{\Delta x\to0}\frac{u\left(x+\Delta x,y\right)-u\left(x,y\right)}{\Delta x}+\lim_{\Delta x\to0}i\frac{v\left(x+\Delta x,y\right)-v\left(x,y\right)}{\Delta x}=\frac{\partial u}{\partial x}\left(x,y\right)+i\frac{\partial v}{\partial x}\left(x,y\right)\){:/nomarkdown}

עד כאן, מתבקש; אבל עכשיו בואו נחשב את הגבול לא לאורך ציר {::nomarkdown}\( x\){:/nomarkdown} אלא לאורך ציר {::nomarkdown}\( y\){:/nomarkdown}: נחשב את הגבול

{::nomarkdown}\( \lim_{\Delta y\to0}\frac{f\left(z+i\Delta y\right)-f\left(z\right)}{i\Delta y}\){:/nomarkdown}

כאשר {::nomarkdown}\( \Delta y\in\mathbb{R}\){:/nomarkdown}.

תזכרו מה זה אומר לחלק ב-{::nomarkdown}\( i\){:/nomarkdown}: מכיוון ש-{::nomarkdown}\( i^{4}=1\){:/nomarkdown} אז {::nomarkdown}\( \frac{1}{i}=i^{3}\){:/nomarkdown}, ומצד שני {::nomarkdown}\( i^{3}=i^{2}i=-i\){:/nomarkdown}. לכן לחלק ב-{::nomarkdown}\( i\){:/nomarkdown} זה בעצם לכפול ב-{::nomarkdown}\( -i\){:/nomarkdown}. מכאן שנקבל:

נקבל:

{::nomarkdown}\( f^{\prime}\left(z\right)=\lim_{\Delta y\to0}\frac{u\left(x,y+\Delta y\right)-u\left(x,y\right)}{i\Delta y}+\lim_{\Delta x\to0}i\frac{v\left(x,y+\Delta y\right)-v\left(x,y\right)}{i\Delta y}=-i\frac{\partial u}{\partial y}\left(x,y\right)+\frac{\partial v}{\partial y}\left(x,y\right)\){:/nomarkdown}

כלומר, דווקא {::nomarkdown}\( u\){:/nomarkdown} (החלק ה"ממשי") הוכפל בסופו של דבר ב-{::nomarkdown}\( -i\){:/nomarkdown}, ואילו {::nomarkdown}\( v\){:/nomarkdown} בסוף יצא עם מקדם 1, בלי {::nomarkdown}\( i\){:/nomarkdown} ובלי מינוס ובלי שום דבר.

עכשיו אפשר להשוות את שני הערכים שקיבלנו:

{::nomarkdown}\( \frac{\partial u}{\partial x}\left(x,y\right)+i\frac{\partial v}{\partial x}\left(x,y\right)=\frac{\partial v}{\partial y}\left(x,y\right)-i\frac{\partial u}{\partial y}\left(x,y\right)\){:/nomarkdown}

כשמשווים שני מספרים מרוכבים, הם שווים רק אם החלקים הממשיים והמדומים שלהם שווים, ולכן נקבל בעצם <strong>זוג</strong> של משוואות:

{::nomarkdown}\( \frac{\partial u}{\partial x}=\frac{\partial v}{\partial y}\){:/nomarkdown}

{::nomarkdown}\( \frac{\partial u}{\partial y}=-\frac{\partial v}{\partial x}\){:/nomarkdown}

שמתקיימות בכל נקודה שבה {::nomarkdown}\( f\){:/nomarkdown} גזירה. המשוואות הללו נקראות <strong>משוואות קושי-רימן</strong>.

משוואות קושי רימן מראות שאם אנחנו רוצים לבנות פונקציה מרוכבת גזירה, אי אפשר סתם לקחת שתי פונקציות {::nomarkdown}\( u,v\){:/nomarkdown} ולחבר אותן ביחד, אפילו אם שתיהן גזירות בעצמן (כלומר, אם יש להן נגזרות חלקיות). הפונקציות הללו חייבות לקיים קשר כלשהו בין הנגזרות החלקיות שלהן כדי שהפונקציה המרוכבת שתתקבל מהן תהיה גזירה (ואם הייתי רוצה לקלל, הייתי קורא לקשר הזה "משוואה דיפרנציאלית חלקית"). אבל הקשר הזה בין שתי הפונקציות גם מצביע על עוד תכונה שכל פונקציה לבדה חייבת לקיים - בואו ניקח את {::nomarkdown}\( u\){:/nomarkdown} ונגזור את הנגזרות החלקיות שלה שוב (צריך להסביר למה שהנגזרות החלקיות יהיו גזירות שוב - בינתיים בואו רק תניחו שזה קורה). נקבל:

{::nomarkdown}\( \frac{\partial^{2}u}{\partial x^{2}}=\frac{\partial v}{\partial x\partial y}\){:/nomarkdown}

{::nomarkdown}\( \frac{\partial^{2}u}{\partial y^{2}}=-\frac{\partial v}{\partial y\partial x}\){:/nomarkdown}

{::nomarkdown}\( \frac{\partial v}{\partial x\partial y}\){:/nomarkdown} הוא מה שמקבלים כשגוזרים את {::nomarkdown}\( v\){:/nomarkdown} קודם על פי {::nomarkdown}\( x\){:/nomarkdown} ואז על פי {::nomarkdown}\( y\){:/nomarkdown} ו-{::nomarkdown}\( \frac{\partial v}{\partial y\partial x}\){:/nomarkdown} הוא מה שקורה כשגוזרים על פי הסדר ההפוך. יש משפט באנליזה שמראה שאם הנגזרות ה"מעורבות" הללו רציפות אז הן שוות, כלומר {::nomarkdown}\( \frac{\partial v}{\partial y\partial x}=\frac{\partial v}{\partial x\partial y}\){:/nomarkdown}; המסקנה היא שבמקרה שלנו {::nomarkdown}\( \frac{\partial^{2}u}{\partial x^{2}}+\frac{\partial^{2}u}{\partial y^{2}}=0\){:/nomarkdown}. בניסוח אחר, {::nomarkdown}\( u\){:/nomarkdown} היא פונקציה שמתאפסת על ידי אופרטור ה<strong>לפליסאן</strong>, {::nomarkdown}\( \Delta=\frac{\partial^{2}}{\partial x^{2}}+\frac{\partial^{2}}{\partial y^{2}}\){:/nomarkdown}. לפונקציות כאלו יש שם מיוחד - פונקציות <strong>הרמוניות</strong>. אני לא נכנס עכשיו לפרטים של מה זה בדיוק אומר; אני רק רוצה שנקבל תחושה של איך שמשוואות קושי רימן מצביעות על כך שלא כל פונקציה מהרחוב יכולה להשתתף בפרוייקט הכביר והנשגב של בניית פונקציה מרוכבת גזירה: יש תנאים לא טריוויאליים שצריכים להתקיים.

עכשיו אני רוצה להכניס לתמונה מושג שעד כה החבאתי - <strong>פונקציה אנליטית</strong>. למשמעות המלאה של המושג הזה נגיע רק בהמשך, אז בינתיים אתן הגדרה יבשה למדי - אם {::nomarkdown}\( D\){:/nomarkdown} היא קבוצה פתוחה במישור המרוכב - מה שאקרא לו גם "תחום" - אז פונקציה מרוכבת {::nomarkdown}\( f:D\to\mathbb{C}\){:/nomarkdown} היא <strong>אנליטית</strong> אם היא גזירה בכל נקודה של {::nomarkdown}\( D\){:/nomarkdown} (אם תחום ההגדרה של {::nomarkdown}\( f\){:/nomarkdown} רחב יותר אפשר להצטמצמם רק ל-{::nomarkdown}\( D\){:/nomarkdown} ולומר ש-"{::nomarkdown}\( f\){:/nomarkdown} אנליטית על {::nomarkdown}\( D\){:/nomarkdown}"). שימו לב שאנליטיות היא לא תכונה נקודתית - היא תכונה שמתארת את התנהגות הפונקציה בתוך קבוצה פתוחה. מה זו קבוצה פתוחה? בהקשר של המישור המרוכב, זוהי קבוצה שכל נקודה בה היא נקודה פנימית של הקבוצה: לכל {::nomarkdown}\( z_{0}\in D\){:/nomarkdown} קיים {::nomarkdown}\( r&gt;0\){:/nomarkdown} ממשי כך שאם {::nomarkdown}\( \left\|z-z_{0}\right\|&lt;r\){:/nomarkdown} אז {::nomarkdown}\( z\in D\){:/nomarkdown} (ציורית, כל נקודה {::nomarkdown}\( z_{0}\){:/nomarkdown} בקבוצה ניתן להקיף בעיגול קטן שכולו מוכל בקבוצה). למה חשוב לנו ש-{::nomarkdown}\( D\){:/nomarkdown} תהיה פתוחה? נראה זאת בהמשך; אנליטיות של פונקציה נותנת לנו "קצת יותר" מאשר גזירות בלבד.

עכשיו אני רוצה לתאר בנפנוף ידיים את הכיוון השני של המשפט על נוסחאות קושי-רימן: לא רק שמדובר על תנאי <strong>הכרחי</strong> עבור פונקציות כדי שיוכלו להרכיב פונקציה אנליטית, זה גם תנאי <strong>מספיק</strong>: אם {::nomarkdown}\( u,v\){:/nomarkdown} הן בעלות נגזרות חלקיות רציפות שמקיימות את משוואות קושי רימן על תחום {::nomarkdown}\( D\){:/nomarkdown} כלשהו, אז {::nomarkdown}\( u+iv\){:/nomarkdown} היא פונקציה אנליטית.

ההוכחה לא מסובכת, אבל מתבססת על עוד משהו באנליזה "רגילה" שלא הראיתי אף פעם - פיתוח טיילור של פונקציה בשני משתנים. בקצרה, אפשר לכתוב את הערך של {::nomarkdown}\( u\){:/nomarkdown} אחרי שמזיזים טיפה את הערכים שלה ביחס לנקודה {::nomarkdown}\( \left(x,y\right)\){:/nomarkdown} נתונה על ידי הערך שלה ב-{::nomarkdown}\( \left(x,y\right)\){:/nomarkdown}, הערכים של הנגזרות החלקיות הראשונות שלה ב-{::nomarkdown}\( \left(x,y\right)\){:/nomarkdown}, ועוד שארית "קטנה". זה מתואר על ידי הנוסחה המזעזעת הבאה:

{::nomarkdown}\( u\left(x+\Delta x,y+\Delta y\right)=u\left(x,y\right)+\frac{\partial u}{\partial x}\left(x,y\right)\Delta x+\frac{\partial u}{\partial y}\left(x,y\right)\Delta y+R\left(\Delta x,\Delta y\right)\){:/nomarkdown}

כאשר {::nomarkdown}\( R\left(\Delta x,\Delta y\right)\){:/nomarkdown} היא "קטנה", במובן זה שאם נסמן {::nomarkdown}\( \Delta z=\Delta x+i\Delta y\){:/nomarkdown} נקבל ש-{::nomarkdown}\( \lim_{\Delta z\to0}\frac{R\left(\Delta x,\Delta y\right)}{\left\|\Delta z\right\|}=0\){:/nomarkdown}. באותו אופן אפשר לכתוב עבור {::nomarkdown}\( v\){:/nomarkdown}:

{::nomarkdown}\( v\left(x+\Delta x,y+\Delta y\right)=v\left(x,y\right)+\frac{\partial v}{\partial x}\left(x,y\right)\Delta x+\frac{\partial v}{\partial y}\left(x,y\right)\Delta y+S\left(\Delta x,\Delta y\right)\){:/nomarkdown}

ועכשיו, אם נכתוב את {::nomarkdown}\( f\left(z+\Delta z\right)=u\left(x+\Delta x,y+\Delta y\right)+iv\left(x+\Delta x,y+\Delta y\right)\){:/nomarkdown} במפורש על פי הנוסחאות שלמעלה <strong>ונשתמש בנוסחאות קושי רימן</strong>, העסק המזוויע הזה יצטמצם למשהו שדי קל להבין:

{::nomarkdown}\( f\left(z+\Delta z\right)=f\left(z\right)+\left(\frac{\partial u}{\partial x}\left(x,y\right)+i\frac{\partial v}{\partial x}\left(x,y\right)\right)\Delta z+R\left(\Delta z\right)+iS\left(\Delta z\right)\){:/nomarkdown}

עכשיו קחו את האיבר הראשון באגף ימין, חסרו אותו משני האגפים, חלקו אותם ב-{::nomarkdown}\( \Delta z\){:/nomarkdown}, והופס:

{::nomarkdown}\( \frac{f\left(z+\Delta z\right)-f\left(z\right)}{\Delta z}=\left(\frac{\partial u}{\partial x}\left(x,y\right)+i\frac{\partial v}{\partial x}\left(x,y\right)\right)+\frac{R\left(\Delta z\right)+iS\left(\Delta z\right)}{\Delta z}\){:/nomarkdown}

ואחרי השאפת {::nomarkdown}\( \Delta z\){:/nomarkdown} לאפס נישאר עם {::nomarkdown}\( f^{\prime}\left(z\right)=\frac{\partial u}{\partial x}\left(x,y\right)+i\frac{\partial v}{\partial x}\left(x,y\right)\){:/nomarkdown} . קיבלנו ש-{::nomarkdown}\( f\){:/nomarkdown} גזירה וגם מצאנו נוסחה לנגזרת שלה.

בואו נראה דוגמה קלילה לסיום, כי בלי זה באמת אי אפשר. כזכור, הגדרנו את פונקצית האקספוננט (על התחום {::nomarkdown}\( \mathbb{C}\){:/nomarkdown}) באופן הבא: {::nomarkdown}\( e^{x+iy}=e^{x}\cos y+ie^{x}\sin y\){:/nomarkdown}. כלומר, {::nomarkdown}\( u\left(x,y\right)=e^{x}\cos y\){:/nomarkdown} ו-{::nomarkdown}\( u\left(x,y\right)=e^{x}\sin y\){:/nomarkdown} במקרה שלנו. בואו נחשב את הנגזרות החלקיות:

{::nomarkdown}\( \frac{\partial u}{\partial x}=e^{x}\cos y\){:/nomarkdown}

{::nomarkdown}\( \frac{\partial u}{\partial y}=-e^{x}\sin y\){:/nomarkdown}

{::nomarkdown}\( \frac{\partial v}{\partial x}=e^{x}\sin y\){:/nomarkdown}

{::nomarkdown}\( \frac{\partial v}{\partial y}=e^{x}\cos y\){:/nomarkdown}

ובבירור משוואות קושי רימן אכן מתקיימות. במובן מסויים פונקציית האקספוננט גם מקיימת את המשוואות הללו בצורה "טבעית" מאוד לטעמי, אבל לא אנסה לשכנע אתכם בכך.

לסיכום, משוואות קושי-רימן הן הצצה ראשונה לאופן שבו תכונות כמו גזירות הן בעלות רמת סיבוכיות נוספת לעומת מה שקורה בפונקציות ממשיות, אבל זה רק החימום - תאמינו לי שבהמשך הולכים לקרות דברים מוזרים הרבה יותר.
