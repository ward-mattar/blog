---
id: 3404
title: "בואו נפתור את הבגרות במתמטיקה! (חלק ב')"
date: 2017-01-24 13:12:46
layout: post
categories: 
  - כללי
tags: 
  - בגרות
  - מתמטיקה תיכונית
---
אני ממשיך את מה שעשיתי <a href="http://www.gadial.net/2016/12/28/bagrut_part_1/">בפוסט הקודם</a> - פותר בחינת בגרות במתמטיקה, והפעם את חלק ב' שלה. והפעם, כבונוס, אני מתאר שתי טעויות מביכות במיוחד שהיו לי בפתרונות ולא שמתי לב אליהן בזמן אמת!

הבגרות היא שאלון 317 של קיץ 2016.
<h1>שאלה 1</h1>
<a href="http://www.gadial.net/wp-content/uploads/2017/01/2-question1.png" rel="attachment wp-att-3405"><img class="aligncenter size-full wp-image-3405" src="http://www.gadial.net/wp-content/uploads/2017/01/2-question1.png" alt="2-question1" width="825" height="490" /></a>

אה, גאומטריה אנליטית. זה הולך להיות מעניין. מצד אחד, זה תחום חשוב ומועיל ואהבתי אותו בבית הספר ואני גם סוג של משתמש בו פה ושם בימינו. מצד שני, אני בטוח שאני לא שולט בכל מה שצריך בשביל לפתור מבחן בבית הספר (מעולם לא למדתי אליפסות, למשל). בואו נראה איך אסתדר.
<h1>סעיף א</h1>
יש לי בעיה כבר ברמת הטקסט הבסיסי: אין לי מושג מה זה "מדריך הפרבולה", אז אין לי מושג איך מוצאים את נקודת החיתוך שלו עם ציר {::nomarkdown}\( x\){:/nomarkdown}. אז אני מגגל ונזכר בהגדרות: פרבולה עם משוואה {::nomarkdown}\( y^{2}=2px\){:/nomarkdown} היא אוסף הנקודות שהמרחק שלהן מקו אנכי שנקרא "מדריך הפרבולה" ומנקודה על ציר {::nomarkdown}\( x\){:/nomarkdown} ("מוקד הפרבולה") שווים. ה-{::nomarkdown}\( p\){:/nomarkdown} שבנוסחת הפרבולה הוא המרחק בין המדריך והמוקד, והרעיון הוא שהפרבולה עוברת בראשית הצירים וברביעים 1 ו-4, כלומר המוקד נמצא ב-{::nomarkdown}\( \frac{p}{2}\){:/nomarkdown} ואילו המדריך עובר דרך {::nomarkdown}\( -\frac{p}{2}\){:/nomarkdown} ולכן המשוואה שלו היא {::nomarkdown}\( x=-\frac{p}{2}\){:/nomarkdown}. במילים אחרות, {::nomarkdown}\( A=\left(-\frac{p}{2},0\right)\){:/nomarkdown}.

עכשיו, איך אני מוצא משיק לפרבולה בנקודה כלשהי? בטח נתנו נוסחה של זה בדף הנוסחאות, אבל למה שלא אנסה להמציא מחדש בעצמי. שיפוע המשיק לפונקציה כלשהי בנקודה מסויימת הוא הנגזרת של הפונקציה באותה נקודה. כאן יש לנו פרבולה שהיא לא בדיוק פונקציה אלא הדבקה של שתי פונקציות: {::nomarkdown}\( y=\sqrt{2px}\){:/nomarkdown} ו-{::nomarkdown}\( y=-\sqrt{2px}\){:/nomarkdown}. אפשר לגזור אותן וכאלה, אבל אני מכיר רמאות טכנית - אפשר גם לגזור את {::nomarkdown}\( y^{2}=2px\){:/nomarkdown} בצורה סתומה, ומקבלים {::nomarkdown}\( 2y\cdot y^{\prime}=2p\){:/nomarkdown}, כלומר {::nomarkdown}\( y^{\prime}=\frac{p}{y}\){:/nomarkdown}. אפשר להציב במקום {::nomarkdown}\( y\){:/nomarkdown} את {::nomarkdown}\( \pm\sqrt{2px}\){:/nomarkdown} אבל אני חושד שכרגע עם {::nomarkdown}\( y\){:/nomarkdown} זה יהיה יותר מועיל לי. על טריקים כמו הגזירה הסתומה הזו אני אומר - ילדים, אל תנסו את זה בבית! יש הסבר מלא לתעלול הזה ויש לי <a href="http://www.gadial.net/2015/10/29/inverse_and_implicit_function/">פוסט בבלוג</a> עליו, אבל זה לא נושא שקל להבין.

עכשיו, נניח שיש לנו ישר שעובר דרך {::nomarkdown}\( \left(x_{0},y_{0}\right)\){:/nomarkdown} וגם דרך {::nomarkdown}\( A=\left(-\frac{p}{2},0\right)\){:/nomarkdown}. מה השיפוע שלו? באופן כללי השיפוע של ישר שעובר דרך {::nomarkdown}\( \left(x_{1},y_{1}\right)\){:/nomarkdown}ו-{::nomarkdown}\( \left(x_{2},y_{2}\right)\){:/nomarkdown} הוא {::nomarkdown}\( m=\frac{y_{2}-y_{1}}{x_{2}-x_{1}}\){:/nomarkdown}, ולכן כאן הוא יהיה {::nomarkdown}\( m=\frac{y_{0}}{x_{0}+\frac{p}{2}}\){:/nomarkdown}. יש לנו כבר ביטוי אחר לשיפוע שקיבלנו מתוך הגזירה של הפרבולה: {::nomarkdown}\( m=\frac{p}{y_{0}}\){:/nomarkdown}. נשווה את שני אלו ונקבל:

{::nomarkdown}\( \frac{p}{y_{0}}=\frac{y_{0}}{x_{0}+\frac{p}{2}}\){:/nomarkdown}

כלומר:

{::nomarkdown}\( y_{0}^{2}=p\left(x_{0}+\frac{p}{2}\right)\){:/nomarkdown}

עכשיו, אנחנו יודעים ש-{::nomarkdown}\( y_{0}^{2}=2px_{0}\){:/nomarkdown}, כלומר קיבלנו:

{::nomarkdown}\( 2px_{0}=p\left(x_{0}+\frac{p}{2}\right)\){:/nomarkdown}

ועל כן:

{::nomarkdown}\( 2px_{0}-px_{0}=\frac{p^{2}}{2}\){:/nomarkdown}

כלומר

{::nomarkdown}\( x_{0}=\frac{p}{2}\){:/nomarkdown}

הגענו לשוויון הזה מתוך משוואה שההנחות היחידות שלה היו שהישר שלנו משיק לפרבולה ועובר דרך {::nomarkdown}\( A\){:/nomarkdown}. ההנחות הללו הכריחו את קואורדינטת ה-{::nomarkdown}\( x\){:/nomarkdown} של נקודת ההשקה להיות {::nomarkdown}\( \frac{p}{2}\){:/nomarkdown}, וזה מסיים את הדבר הראשון שהיה צריך להראות.

הדבר השני, כרגיל בבגרות, לא באמת נכון בלי הנחה נוספת שהיא אולטרה-קטנונית - ששתי נקודות ההשקה לפרבולות שונות, כלומר שהמשיקים שונים זה מזה. מן הסתם אני מניח את זה בלי להניד עפעף. מה זה אומר? זה אומר שנקודות ההשקה חייבות לקיים {::nomarkdown}\( y_{0}=\sqrt{2px_{0}}=p\){:/nomarkdown} עבור אחת מהן, ו-{::nomarkdown}\( y_{0}=-\sqrt{2px_{0}}=-p\){:/nomarkdown} עבור השניה. זה ישפיע על השיפועים של המשיקים הללו. כדי לראות שהם מאונכים זה לזה, צריך לכפול את השיפועים ולראות שהם שווים {::nomarkdown}\( -1\){:/nomarkdown}. רגע, מאיפה אני יודע את זה בכלל? נראה לי שזה זכרון עמום מימי התיכון שלי. למה שזה יהיה נכון? ובכן, מה זה "שיפוע" אצלנו? זה טנגנס הזווית שהישר יוצר עם ציר ה-{::nomarkdown}\( x\){:/nomarkdown} (את זה קל לי לזכור כי אני זוכר שב-{::nomarkdown}\( 90^{\circ}\){:/nomarkdown} השיפוע הוא "אינסוף"). גיגול זריז נותן לי את הנוסחה למכפלת טנגנסים וקל לראות בה שאם ההפרש בין שתי זוויות הוא {::nomarkdown}\( 90^{\circ}\){:/nomarkdown} אז מכפלת הטנגנסים תצא מינוס 1 (אלא אם השיפוע הוא "אינסוף") - לא אלאה אתכם בזה, ממילא זו אקסיומה שכזו בתיכון. בקיצור, אני רוצה לבדוק את ערך המכפלה {::nomarkdown}\( \frac{p}{p}\cdot\frac{p}{-p}\){:/nomarkdown} שכמובן שווה {::nomarkdown}\( -1\){:/nomarkdown}. קיבלתי את המבוקש. יאיי! לא חשבתי שאצליח.
<h1>סעיף ב'</h1>
עכשיו נותנים לנו גם מעגל עם מרכז בנקודה {::nomarkdown}\( M=\left(x_{M},0\right)\){:/nomarkdown} ומבקשים מאיתנו למצוא את המשוואה שלו - כלומר, צריך למצוא את {::nomarkdown}\( x_{M}\){:/nomarkdown} ואת הרדיוס. הנתון שלנו הוא שהמשיקים לפרבולה משיקים גם למעגל באותן נקודות. אז נראה לי שהגיע הזמן לכתוב במפורש מהן הנקודות. אמרו לנו ש-{::nomarkdown}\( p=2\){:/nomarkdown}, אז נקודות ההשקה הן

{::nomarkdown}\( K=\left(1,2\right),L=\left(1,-2\right)\){:/nomarkdown}.

יש לי שתי נקודות על המעגל. האם זה מספיק לי כדי למצוא את המשוואה שלו או שאצטרך להשתמש גם בכך שהמשיקים לפרבולה <strong>משיקים</strong> למעגל ולא סתם חותכים אותו? בואו ננסה קודם לעבוד עם מה שיש. כרגע משוואת המעגל היא {::nomarkdown}\( \left(x-x_{M}\right)^{2}+y^{2}=R^{2}\){:/nomarkdown}. מכיוון ש-{::nomarkdown}\( y\){:/nomarkdown} מופיע רק בריבוע, הצבה של {::nomarkdown}\( K\){:/nomarkdown} והצבה של {::nomarkdown}\( L\){:/nomarkdown} למשוואה הזו יתנו לי את אותו דבר בדיוק: {::nomarkdown}\( \left(1-x_{M}\right)^{2}+4=R^{2}\){:/nomarkdown}. זה לא מספיק טוב, צריך עוד משוואה.

אם כן, מהו השיפוע של משיק למעגל? נגזור שוב באופן סתום ונקבל {::nomarkdown}\( 2\left(x-x_{M}\right)+2yy^{\prime}=0\){:/nomarkdown}, כלומר {::nomarkdown}\( y^{\prime}=-\frac{x-x_{M}}{y}\){:/nomarkdown}. כבר ראינו שהשיפוע של הישרים שלנו הוא {::nomarkdown}\( 1,-1\){:/nomarkdown} ולכן בואו ננסה להציב אחד מהם:

{::nomarkdown}\( 1=-\frac{1-x_{M}}{2}\){:/nomarkdown}

וקיבלנו ש-{::nomarkdown}\( x_{M}=3\){:/nomarkdown}. נציב את זה במשוואה {::nomarkdown}\( \left(1-x_{M}\right)^{2}+4=R^{2}\){:/nomarkdown} ונקבל {::nomarkdown}\( R^{2}=8\){:/nomarkdown}. כלומר, משוואת המעגל היא {::nomarkdown}\( \left(x-3\right)^{2}+y^{2}=8\){:/nomarkdown}.
<h1>סעיף ג'</h1>
עכשיו מגיע עוד משהו שאין לי מושג איך עושים - משוואת מעגל שחסום במרובע. כרגיל, אני מעדיף לנסות להמציא מחדש את הגלגל במקום להסתכל בדף נוסחאות או משהו דומה. אני אומר - משוואת מעגל כללית היא {::nomarkdown}\( \left(x-x_{0}\right)^{2}+\left(y-y_{0}\right)^{2}=R^{2}\){:/nomarkdown}. גוזרים ומקבלים ש-{::nomarkdown}\( 2\left(x-x_{0}\right)+2\left(y-y_{0}\right)y^{\prime}=0\){:/nomarkdown}, כלומר ש-{::nomarkdown}\( y^{\prime}=-\frac{x-x_{0}}{y-y_{0}}\){:/nomarkdown} היא המשוואה לשיפוע המשיק שעובר דרך {::nomarkdown}\( \left(x,y\right)\){:/nomarkdown}. אם המעגל חסום במרובע זה נותן לי <strong>ארבעה</strong> משיקים שאני מכיר. בואו ננסה לעשות סדר ולכתוב הכל במפורש:

{::nomarkdown}\( A=\left(-1,0\right)\){:/nomarkdown}

{::nomarkdown}\( M=\left(3,0\right)\){:/nomarkdown}

{::nomarkdown}\( K=\left(1,2\right)\){:/nomarkdown}

{::nomarkdown}\( L=\left(1,-2\right)\){:/nomarkdown}

{::nomarkdown}\( \text{AK: }y=x+1\){:/nomarkdown}

{::nomarkdown}\( \text{KM: }y=-x+3\){:/nomarkdown}

{::nomarkdown}\( \text{ML: }y=x-3\){:/nomarkdown}

{::nomarkdown}\( \text{LA: }y=-x-1\){:/nomarkdown}

מהמשוואות ברור שזה לא סתם מרובע אלא מלבן, כי הצלעות ניצבות זו לזו. מדידת אורכי הצלעות מראה שזה ריבוע עם אורך צלע 2. האם זה עוזר לי איכשהו? סביר להניח שכן - הסימטריה גוררת שמרכז המעגל יהיה גם מרכז הריבוע. האם מותר לי להשתמש בשיקולי סימטריה שכאלו פה? בואו נניח שכן כי אין לי מושג איך לפתור אחרת. בעזרת סימטריה כל מה שאני צריך לעשות הוא למצוא את מרכז הריבוע. הדרך שנראית לי הכי בטוחה לעשות את זה היא למצוא את האלכסונים {::nomarkdown}\( \text{AM}\){:/nomarkdown} ו-{::nomarkdown}\( \text{KL}\){:/nomarkdown} ולבדוק מהי נקודת החיתוך שלהם. המשוואות שלהם הן {::nomarkdown}\( y=0\){:/nomarkdown} ו-{::nomarkdown}\( x=1\){:/nomarkdown}, כך שנקודת החיתוך היא פשוט ב-{::nomarkdown}\( \left(1,0\right)\){:/nomarkdown}. והרדיוס? מספיק לי לחשב את המרחק מ-{::nomarkdown}\( \left(1,0\right)\){:/nomarkdown} לאמצע של אחת מצלעות הריבוע, נאמר אל {::nomarkdown}\( \left(0,1\right)\){:/nomarkdown} שהוא אמצע הצלע {::nomarkdown}\( \text{AK}\){:/nomarkdown}. המרחק בבירור מקיים {::nomarkdown}\( R^{2}=2\){:/nomarkdown}, כך שמשוואת המעגל היא {::nomarkdown}\( \left(x-1\right)^{2}+y^{2}=2\){:/nomarkdown}.
<h1>מה דעתי על השאלה?</h1>
לטעמי זו שאלה טובה, אם מקבלים את זה שכדאי ללמוד גאומטריה אנליטית, ולדעתי כדאי ללמוד גאומטריה אנליטית. אבל קצת הפריע לי שאין לי מושג איך פותרים את ג' בדרך כללית, אם זה אפשרי בכלל. לא כי זה פוגם בשאלה עבורי, אלא כי אני לא בטוח מה תלמיד בית ספר עושה כשהוא צריך להתמודד עם שאלה כמו זו.
<h1>שאלה 2</h1>
<a href="http://www.gadial.net/wp-content/uploads/2017/01/2-question2.png" rel="attachment wp-att-3406"><img class="aligncenter size-full wp-image-3406" src="http://www.gadial.net/wp-content/uploads/2017/01/2-question2.png" alt="2-question2" width="864" height="293" /></a>

הא, שאלת וקטורים. הנה וידוי אפל: זו לא הפעם הראשונה שבה השתעשעתי במחשבה על כתיבת פוסט פתרון בגרות. בפעם הקודמת ניגשתי לבגרות אקראית, ניסיתי קודם כל לפתור את שאלת הוקטורים שלהם, כי "פחחח זה כמו אלגברה לינארית אני אוכל את זה בלי מלח", ואז לא הצלחתי לפתור אותה. בכלל. בואו נראה אם זה מה שיקרה גם הפעם...
<h1>סעיף א'</h1>
להודות על האמת? גם הפעם אין לי מושג איך <strong>אמורים</strong> לפתור את השאלה הזו. וקטורים זה לא נושא שלמדתי אי פעם בתיכון. אבל איך אני פותר את השאלה? ובכן, בנקודה שבה הישר משיק למעגל הרדיוס של המעגל מאונך אליו. בהינתן ישר ונקודה, האנך לישר הזה שעובר דרך הנקודה הוא <strong>המרחק</strong> של הנקודה מהישר - האורך של האנך הוא המינימלי מבין אורכי כל הקווים מהנקודה אל הישר. אז יש לנו פה בעיית מינימיזציה פשוטה. נגדיר פונקציה

{::nomarkdown}\( f\left(t\right)=\left\|B-O\right\|^{2}=\left\|\left(2+t,2+2t,t\right)-\left(0,0,0\right)\right\|=\left(2+t\right)^{2}+\left(2+2t\right)^{2}+t^{2}=6t^{2}+6t+8\){:/nomarkdown}

נגזור ונקבל {::nomarkdown}\( f^{\prime}\left(t\right)=6t+6\){:/nomarkdown}. נשווה לאפס ונקבל {::nomarkdown}\( t=-1\){:/nomarkdown}. לכן {::nomarkdown}\( B=\left(2-1,2-2,-1\right)=\left(1,0,-1\right)\){:/nomarkdown}.

זה היה מאוד קל, אבל השתמשתי פה בחדו"א; אני מנחש שבתיכון לומדים את הנוסחה למרחק נקודה מישר או משהו ומשתמשים בזה.
<h1>סעיף ב'</h1>
נתחיל בלנסות להבין איך בדיוק נראה המעגל. מה הרדיוס שלו? אנחנו יודעים ש-{::nomarkdown}\( B=\left(1,0,-1\right)\){:/nomarkdown} נמצאת על המעגל, כך שרדיוס המעגל הוא {::nomarkdown}\( \sqrt{1^{2}+0^{2}+\left(-1\right)^{2}}=\sqrt{2}\){:/nomarkdown}. אם נמצא את {::nomarkdown}\( A\){:/nomarkdown} ונראה שזה המרחק שלה מראשית הצירים, סיימנו. אבל איך עושים את זה? צריך למצוא את המישור {::nomarkdown}\( \pi\){:/nomarkdown} איכשהו. נתונים לנו שני ישרים במישור: {::nomarkdown}\( l_{1}\){:/nomarkdown} וגם הרדיוס של המעגל. המישור גם עובר דרך ראשית הצירים אז אין צורך להזיז אותו במיוחד (על ידי חיבור של נקודה שונה מאפס אל הצירוף הלינארי של שני הישרים הללו). כעת, את הישר {::nomarkdown}\( l_{1}\){:/nomarkdown} נזיז אל ראשית הצירים ונקבל את הוקטור {::nomarkdown}\( \left(1,2,1\right)\){:/nomarkdown}. הרדיוס מתואר על ידי הוקטור {::nomarkdown}\( \left(1,0,-1\right)\){:/nomarkdown} (שהוא בעצם הנקודה {::nomarkdown}\( B\){:/nomarkdown}). לכן משוואת המישור היא {::nomarkdown}\( \pi:t_{1}\left(1,2,1\right)+t_{2}\left(1,0,-1\right)\){:/nomarkdown}. אנחנו רוצים למצוא חיתוך בין זה ובין {::nomarkdown}\( \left(0,1,1\right)+s\left(2,-1,1\right)\){:/nomarkdown}. כלומר, יש לנו מערכת משוואות בשלושה נעלמים {::nomarkdown}\( \left(t_{1},t_{2},s\right)\){:/nomarkdown} ועם שלוש משוואות (עבור קואורדינטות {::nomarkdown}\( x,y,z\){:/nomarkdown}). אפשר לכתוב זאת כך: {::nomarkdown}\( t_{1}\left(1,2,1\right)+t_{2}\left(1,0,-1\right)=s\left(2,-1,1\right)+\left(0,1,1\right)\){:/nomarkdown} ואחרי העברת אגפים נקבל {::nomarkdown}\( t_{1}\left(1,2,1\right)+t_{2}\left(1,0,-1\right)+s\left(-2,1,-1\right)=\left(0,1,1\right)\){:/nomarkdown}.

ברשותכם אכתוב את זה כמטריצה:

{::nomarkdown}\( \left(\begin{array}{ccc}1 &amp; 1 &amp; -2\\2 &amp; 0 &amp; 1\\1 &amp; -1 &amp; -1\end{array}\right)\left(\begin{array}{c}t_{1}\\t_{2}\\s\end{array}\right)=\left(\begin{array}{c}0\\1\\1\end{array}\right)\){:/nomarkdown}

נחסיר את השורה הראשונה משתי האחרות (מהשניה, כשהראשונה מוכפלת פי 2) ונקבל

{::nomarkdown}\( \left(\begin{array}{ccc}1 &amp; 1 &amp; -2\\0 &amp; -2 &amp; 5\\0 &amp; -2 &amp; 1\end{array}\right)\left(\begin{array}{c}t_{1}\\t_{2}\\s\end{array}\right)=\left(\begin{array}{c}0\\1\\1\end{array}\right)\){:/nomarkdown}

עכשיו נשתמש בשורה השלישית כדי לאפס את הקואורדינטה השניה בשתי האחרות:

{::nomarkdown}\( \left(\begin{array}{ccc}1 &amp; 0 &amp; -\frac{3}{2}\\0 &amp; 0 &amp; 4\\0 &amp; 1 &amp; -\frac{1}{2}\end{array}\right)\left(\begin{array}{c}t_{1}\\t_{2}\\s\end{array}\right)=\left(\begin{array}{c}\frac{1}{2}\\0\\-\frac{1}{2}\end{array}\right)\){:/nomarkdown}

בגלל שקיבלנו 0 בעמודת התוצאה בשורה השניה אנחנו יכולים להשתולל איתה חופשי ולאפס את שאר השורות בקואורדינטה הזו בלי לשנות את התוצאה. נקבל:

{::nomarkdown}\( \left(\begin{array}{ccc}1 &amp; 0 &amp; 0\\0 &amp; 0 &amp; 1\\0 &amp; 1 &amp; 0\end{array}\right)\left(\begin{array}{c}t_{1}\\t_{2}\\s\end{array}\right)=\left(\begin{array}{c}\frac{1}{2}\\0\\-\frac{1}{2}\end{array}\right)\){:/nomarkdown}

הפתרון פה הוא חד משמעי: {::nomarkdown}\( t_{1}=\frac{1}{2},t_{2}=-\frac{1}{2}\){:/nomarkdown} ו-{::nomarkdown}\( s=0\){:/nomarkdown}. מה שנחמד הוא שקל לבדוק את הפתרון הזה במפורש על ידי הצבה:

{::nomarkdown}\( \frac{1}{2}\left(1,2,1\right)-\frac{1}{2}\left(1,0,-1\right)+0\left(-2,1,-1\right)=\left(\frac{1}{2}-\frac{1}{2},1-0,\frac{1}{2}+\frac{1}{2}\right)=\left(0,1,1\right)\){:/nomarkdown}, כמבוקש.

קיבלנו, אם כן, שנקודת החיתוך היא {::nomarkdown}\( A=\left(0,1,1\right)\){:/nomarkdown} עצמה. מכיוון ש-{::nomarkdown}\( \left\|\left(0,1,1\right)-\left(0,0,0\right)\right\|=\sqrt{2}\){:/nomarkdown} קיבלנו שהיא אכן על המעגל. נותר רק למצוא את השטח של המשולש {::nomarkdown}\( \text{AOB}\){:/nomarkdown}. וזו שאלה מעניינת בפני עצמה בשבילי - איך מוצאים שטח של משולש בתלת מימד כשנתונות לי רק הקואורדינטות של הקודקודים שלו? אני זוכר במעורפל שזה קשור למכפלה וקטורית (ליתר דיוק, אני זוכר שזו מכפלת אורכי הוקטורים בסינוס הזווית ביניהם ואני זוכר שהדבר הזה הוא מכפלה וקטורית), ובדיקה זריזה מעלה שאכן כך הדבר - מכפילים וקטורית שתי צלעות של המשולש, לוקחים את גודל הוקטור שהתקבל, מחלקים ב-2. אויש, אני שונא מכפלות וקטורית. טוב, בואו נעשה את זה, אני זוכר את "שיטת הדטרמיננטה" לחישוב:

{::nomarkdown}\( \left\|\begin{array}{ccc}\hat{x} &amp; \hat{y} &amp; \hat{z}\\1 &amp; 0 &amp; -1\\0 &amp; 1 &amp; 1\end{array}\right\|=1\cdot\hat{x}-1\cdot\hat{y}+1\cdot\hat{z}\){:/nomarkdown}

ולכן קיבלנו שטח של {::nomarkdown}\( \frac{\sqrt{1^{2}+1^{2}+1^{2}}}{2}=\frac{\sqrt{3}}{2}\){:/nomarkdown}.
<h1>מה דעתי על השאלה?</h1>
בכל הנושא הזה של וקטורים יש לי תחושה ש"עוברים ליד" אלגברה לינארית אבל לא באמת נוגעים בה - לא באמת יצא לי לפתור תרגילים כמו זה אי פעם. מצד שני, אלגברה לינארית מופשטת יותר זה משהו שכנראה אי אפשר ללמד בבית הספר, ואילו החומר הזה נראה לי אפילו שימושי למי שהולכים לתחומים יותר פיזיקליים/הנדסיים באופיים. קשה לי להתלונן.
<h1>שאלה 3</h1>
<img class="aligncenter size-full wp-image-3407" src="http://www.gadial.net/wp-content/uploads/2017/01/2-question3.png" alt="2-question3" width="928" height="559" />
<h1>סעיף א'</h1>
נתון לנו מספר מרוכב מחריד, אבל מן הסתם אפשר לפשט אותו. אני לא זוכר מתי לאחרונה כתבתי {::nomarkdown}\( \text{CIS}\){:/nomarkdown} ואין לי כוונה להתחיל עכשיו - אשתמש בסימון הסטנדרטי יותר במתמטיקה, {::nomarkdown}\( e^{i\theta}=\cos\theta+i\sin\theta\){:/nomarkdown}. בסימון הזה המונה הוא {::nomarkdown}\( e^{i\left(\pi/9\right)}\){:/nomarkdown} ואילו המכנה הוא... אה, יש מינוס ליד הסינוס. זה אומר שלוקחים מינוס של כל הזווית, כלומר המכנה הוא {::nomarkdown}\( e^{-i\left(\pi/12\right)}\){:/nomarkdown}. עכשיו קל לבצע העלאה בחזקה - פשוט כופלים את המעריך של האקספוננט בחזקה הזו, כמו בחוקי חזקות רגילים, וגם חלוקה מתבצעת בדרך דומה:

{::nomarkdown}\( z=\frac{\left(e^{i\frac{\pi}{9}}\right)^{3}}{\left(e^{-i\frac{\pi}{12}}\right)^{2}}=\frac{e^{i\frac{\pi}{3}}}{e^{-i\frac{\pi}{6}}}=e^{i\left(\frac{\pi}{3}+\frac{\pi}{6}\right)}=e^{i\frac{\pi}{2}}\){:/nomarkdown}

כעת, {::nomarkdown}\( \left\|z\right\|=1\){:/nomarkdown} (כי ה-{::nomarkdown}\( e\){:/nomarkdown} בחזקת {::nomarkdown}\( i\){:/nomarkdown}-משהו לא מוכפל בשום מספר ממשי שונה מ-1) ואילו הארגומנט של {::nomarkdown}\( z\){:/nomarkdown} הוא {::nomarkdown}\( \frac{\pi}{2}\){:/nomarkdown}.

קל לחשב את החזקה {::nomarkdown}\( z^{n}\){:/nomarkdown} כעת: {::nomarkdown}\( z^{n}=e^{i\frac{n\pi}{2}}\){:/nomarkdown}. כדי לקבל מספר מדומה טהור, הארגומנט מודולו {::nomarkdown}\( 2\pi\){:/nomarkdown} צריך להיות {::nomarkdown}\( \frac{\pi}{2}\){:/nomarkdown} או {::nomarkdown}\( \frac{3\pi}{2}\){:/nomarkdown} (אני זוכר את זה גאומטרית - צריך שהסיבוב של המספר המרוכב ביחס לציר {::nomarkdown}\( x\){:/nomarkdown} יהיה של 90 מעלות או 270 מעלות, כך שנחים על ציר {::nomarkdown}\( y\){:/nomarkdown}). כלומר, {::nomarkdown}\( n\equiv1,3\left(\text{mod }4\right)\){:/nomarkdown}, או בסימון שאולי יותר אוהבים בתיכון - {::nomarkdown}\( n=1+4k\){:/nomarkdown} או {::nomarkdown}\( n=3+4k\){:/nomarkdown} (למעשה, זו דרך מסורבלת לומר ש-{::nomarkdown}\( n\){:/nomarkdown} אי זוגי, אבל זה מה שקפץ לי לראש ולא ניסיתי לפשט).
<h1>סעיף ב'</h1>
ממבט חטוף על המקום הגאומטרי אין לי מושג קלוש מה הוא. אז בואו ננסה לפשט. אני זוכר את הנוסחאות החביבות הבאות: {::nomarkdown}\( z+\overline{z}=2\text{Re}z\){:/nomarkdown} ו-{::nomarkdown}\( z-\overline{z}=2\text{Im}z\){:/nomarkdown}. אם כן, אפשר לכתוב את המקום הגאומטרי גם בתור {::nomarkdown}\( \left\|\text{Re}z-m\text{Im}z\right\|=20\){:/nomarkdown}.

רגע, לא, פסק זמן.

לכתוב {::nomarkdown}\( \left\|\text{Re}z-m\text{Im}z\right\|=20\){:/nomarkdown} זה <strong>שגוי לגמרי</strong> ואני עשיתי את הטעות הזו בכל זאת ופתרתי את התרגיל על פי זה וקיבלתי פתרון <strong>שגוי</strong>. אחסוך מכם את הפתרון הזה. יש לנו כאן דוגמה קלאסית לפאשלת חוסר תשומת לב של "כן, ברור שאני יודע את זה". איפה טעיתי? הנוסחה {::nomarkdown}\( z-\overline{z}=2\text{Im}z\){:/nomarkdown} לא נכונה; מה שנכון הוא {::nomarkdown}\( z-\overline{z}=2i\cdot\text{Im}z\){:/nomarkdown}. כלומר, זה מוכפל ב-{::nomarkdown}\( i\){:/nomarkdown}, מה שמשנה לגמרי את ההמשך. אוי ווי. בכל מה שקרה אחרי הטעות הזו לא פקפקתי בכלל במה שכתבתי ולא היה לי איך לבדוק את עצמי. פשוט פאשלה מביכה.

אוקיי, עכשיו משעליתי על הטעות בדיעבד, מה הפתרון הנכון? ובכן, חזרה אל הנוסחה שהגענו אליה: {::nomarkdown}\( \left\|\text{Re}z-mi\cdot\text{Im}z\right\|=20\){:/nomarkdown}. בואו נחשוב על {::nomarkdown}\( z\){:/nomarkdown} בתור נקודה ב-{::nomarkdown}\( \mathbb{R}^{2}\){:/nomarkdown}, כלומר במקום לכתוב {::nomarkdown}\( z=x+iy\){:/nomarkdown} נכתוב {::nomarkdown}\( \left(x,y\right)\){:/nomarkdown}. אז הנוסחה היא {::nomarkdown}\( \left\|x-miy\right\|=20\){:/nomarkdown}, ועל פי נוסחת הערך המוחלט של מרוכבים זה אומר {::nomarkdown}\( x^{2}+\left(my\right)^{2}=400\){:/nomarkdown}. זה נראה כמו משוואת מעגל מוזרה - בפועל אני יודע שזו משוואת אליפסה, אבל גם שדרך ההצגה הזו היא לא דרך ההצגה ה"סטנדרטית" של משוואת אליפסה. הייתי צריך להזכיר לעצמי (על ידי גיגול) שהמשוואה של אליפסה שהצירים שלה נמצאים על צירי {::nomarkdown}\( x,y\){:/nomarkdown} היא {::nomarkdown}\( \frac{x^{2}}{a^{2}}+\frac{y^{2}}{b^{2}}=1\){:/nomarkdown} כאשר {::nomarkdown}\( a,b\){:/nomarkdown} הם פרמטרים של האליפסה: נקודות החיתוך של האליפסה עם הצירים הן בדיוק {::nomarkdown}\( \pm\left(a,0\right)\){:/nomarkdown} ו-{::nomarkdown}\( \pm\left(0,b\right)\){:/nomarkdown}. במקרה הנוכחי, אם כן, נחלק ב-{::nomarkdown}\( 20^{2}\){:/nomarkdown} את שני האגפים ונקבל {::nomarkdown}\( \frac{x^{2}}{20^{2}}+\frac{y^{2}}{\left(20m^{-1}\right)^{2}}=1\){:/nomarkdown}, דהיינו אצלנו {::nomarkdown}\( a=20\){:/nomarkdown} ו-{::nomarkdown}\( b=\frac{20}{m}\){:/nomarkdown}.

מה שמבקשים מאיתנו כעת הוא למצוא את {::nomarkdown}\( a,b\){:/nomarkdown} בהינתן שהנקודה {::nomarkdown}\( \left(12,8\right)\){:/nomarkdown} נמצאת על האליפסה. בפועל אני צריך למצוא את {::nomarkdown}\( m\){:/nomarkdown} כך שיותר קל לי לחזור למשוואה {::nomarkdown}\( x^{2}+\left(my\right)^{2}=400\){:/nomarkdown}. נציב את {::nomarkdown}\( x,y\){:/nomarkdown} ונקבל {::nomarkdown}\( 144+64m^{2}=400\){:/nomarkdown}, כלומר {::nomarkdown}\( 9+4m^{2}=25\){:/nomarkdown} (עשיתי את החישובים בראש! הא!), כלומר {::nomarkdown}\( m^{2}=4\){:/nomarkdown}, כלומר {::nomarkdown}\( m=2\){:/nomarkdown} (לא ייתכן ש-{::nomarkdown}\( m=-2\){:/nomarkdown} כי אמרו לנו במפורש שהוא חיובי). מכאן ש-{::nomarkdown}\( a=20,b=10\){:/nomarkdown} ולכן נקודות החיתוך הן {::nomarkdown}\( \left(20,0\right),\left(-20,0\right),\left(0,10\right),\left(0,-10\right)\){:/nomarkdown}.
<h1>מה דעתי על השאלה?</h1>
האמת, לא משהו. וזה לא קשור לכך שבסעיף ב' טעיתי באופן מזעזע ומביך! נשבע!

הבעיה בשאלה הזו היא שהיא כמעט לא עוסקת במספרים מרוכבים. טוב, בסעיף א' צריך להבין את ההצגה הקוטבית של מספרים מרוכבים וכפועל יוצא מכך את כללי ההעלאה בחזקה והחילוק, אבל בסעיף ב' כל מה שצריך לדעת הוא את ההגדרה של ערך מוחלט ואת הנוסחאות הללו לסכום והפרש עם הצמוד (כפי שראינו, גם אני לא באמת זכרתי אותן...). מעבר לכך רוב סעיף ב' הוא בכלל שאלה נוספת בגאומטריה אנליטית (באופן חוקי מותר להם לעשות את זה ; הפרק כולו עוסק בגאומטריה אנליטית ומרוכבים, אין התחייבות לשאלה אחת על זה ושאלה אחרת על ההוא).

מצד שני, אולי זה בעצם בסדר? על מה בדיוק אפשר לשאול כשמדובר על מספרים מרוכבים מעבר לרמת ההגדרות הבסיסיות? משפט אינטגרל קושי? ואני כן חושב שכדאי לראות מספרים מרוכבים בבית הספר כדי להיות מודעים לקיום היצורים הללו. אז יש סיכוי טוב שאני מתלונן על כלום.
<h1>שאלה 4</h1>
<a href="http://www.gadial.net/wp-content/uploads/2017/01/2-question4.png" rel="attachment wp-att-3408"><img class="aligncenter size-full wp-image-3408" src="http://www.gadial.net/wp-content/uploads/2017/01/2-question4.png" alt="2-question4" width="937" height="533" /></a>

הא. שוב חדו"א. אף פעם לא הבנתי למה יש שני סוגי חדו"א בבגרות. כאילו, מה כבר ההבדל הגדול בין שניהם?
<h1>סעיף א'</h1>
כבר התחלה טובה - אין לי מושג איך מוצאים את נקודות החיתוך עם הצירים של {::nomarkdown}\( f\left(x\right)=9^{x}-2\cdot3^{x}-3\){:/nomarkdown}. טוב, שניה, בואו לא נתייאש כל כך מהר. מה שמייד קופץ לי לעיניים הוא ש-{::nomarkdown}\( 9=3^{2}\){:/nomarkdown} כך שאפשר לכתוב {::nomarkdown}\( f\left(x\right)=\left(3^{x}\right)^{2}-2\cdot3^{x}-3\){:/nomarkdown}. קיבלנו פה משוואה ריבועית במשתנה {::nomarkdown}\( t=3^{x}\){:/nomarkdown}, כלומר {::nomarkdown}\( t^{2}-2t-3=0\){:/nomarkdown}. את זה קל לי לפתור ולקבל {::nomarkdown}\( t_{1,2}=\frac{2\pm\sqrt{4+12}}{2}=\frac{2\pm4}{2}=1\pm2=3,-1\){:/nomarkdown}. עבור{::nomarkdown}\( 3^{x}=3\){:/nomarkdown} הפתרון הוא כמובן {::nomarkdown}\( x=1\){:/nomarkdown}; ואילו למשואוה {::nomarkdown}\( 3^{x}=-1\){:/nomarkdown} אין פתרון. לכן יש נקודת חיתוך יחידה עם הצירים: {::nomarkdown}\( x=1\){:/nomarkdown}.

עכשיו לאסימפטוטה אופקית. מה זו אסימפטוטה אופקית? אני מניח שהכוונה לקו האופקי ({::nomarkdown}\( y=c\){:/nomarkdown} עבור {::nomarkdown}\( c\){:/nomarkdown} כלשהו) שהפונקציה שואפת אליו כש-{::nomarkdown}\( x\){:/nomarkdown} שואף לאינסוף או מינוס אינסוף. כש-{::nomarkdown}\( x\){:/nomarkdown} שואף לאינסוף בבירור הפונקציה שואפת לאינסוף, אבל כשהוא שואף למינוס אינסוף אז {::nomarkdown}\( 9^{x}\to0\){:/nomarkdown} וגם {::nomarkdown}\( 3^{x}\to0\){:/nomarkdown} ולכן נקבל שאיפה ל-{::nomarkdown}\( -3\){:/nomarkdown}. כלומר, {::nomarkdown}\( y=-3\){:/nomarkdown} הוא האסימפטוטה.

בשביל נקודות קיצון צריך לגזור. העניין הוא שאני לא זוכר איך גוזרים פונקציה מעריכית. אני זוכר ש-{::nomarkdown}\( \left(e^{x}\right)^{\prime}=e^{x}\){:/nomarkdown}, אבל לא מה קורה כשהבסיס הוא {::nomarkdown}\( a\){:/nomarkdown}. טוב, אני משקר, אני כן זוכר במעורפל שכופלים ב-{::nomarkdown}\( \ln a\){:/nomarkdown} אבל אני לא בטוח בזה. אפשר לבדוק בדף נוסחאות ואפשר לפתח את זה מחדש. אני יודע ש-{::nomarkdown}\( e^{\ln a}=a\){:/nomarkdown} כי זו ההגדרה של {::nomarkdown}\( \ln\){:/nomarkdown} פחות או יותר (האמת שמבחינתי ההגדרה של {::nomarkdown}\( \ln x\){:/nomarkdown} היא משהו מפלצתי עם אינטגרלים אבל נעזוב את זה). לכן {::nomarkdown}\( a^{x}=\left(e^{\ln a}\right)^{x}=e^{x\ln a}\){:/nomarkdown} ומכאן ברור ש-{::nomarkdown}\( \left(a^{x}\right)^{\prime}=\left(e^{x\ln a}\right)^{\prime}=\ln a\cdot\left(e^{x\ln a}\right)=a^{x}\ln a\){:/nomarkdown}. יופי, אז בואו נגזור:

{::nomarkdown}\( f^{\prime}\left(x\right)=2\cdot3^{x}\cdot3^{x}\cdot\ln3-2\cdot3^{x}\cdot\ln3=2\ln3\left(\left(3^{x}\right)^{2}-3^{x}\right)\){:/nomarkdown}

שוב אסמן {::nomarkdown}\( t=3^{x}\){:/nomarkdown} ואקבל שהנגזרת מתאפסת אם {::nomarkdown}\( t^{2}=t\){:/nomarkdown}, כלומר כש-{::nomarkdown}\( t=0\){:/nomarkdown} (לא הולך לקרות עבור {::nomarkdown}\( t=3^{x}\){:/nomarkdown}) או אם {::nomarkdown}\( t=1\){:/nomarkdown}, מה שקורה כש-{::nomarkdown}\( x=0\){:/nomarkdown}. אז {::nomarkdown}\( 0\){:/nomarkdown} היא נקודת קיצון, אבל האם מינימום או מקסימום? לפני שאני מחשב נגזרת שניה וכאלה בואו נחשוב רגע - כאשר {::nomarkdown}\( x\){:/nomarkdown} הולך וגדל גם הפונקציה הולכת וגדלה. לכן אם כבר יש פה נקודת קיצון היא תהיה נקודת מינימום. כש-{::nomarkdown}\( x=0\){:/nomarkdown} הערך של הפונקציה הוא {::nomarkdown}\( 1-2-3=-4\){:/nomarkdown} וכשאיקס שואף למינסוף אינסוף הפונקציה שואפת ל-{::nomarkdown}\( -3\){:/nomarkdown}, כך שגם זה עוזר לי לראות שיש פה מינימום. והנגזרת השניה? היא {::nomarkdown}\( 2\ln3\left(2\ln3\cdot\left(3^{x}\right)^{2}-\ln3\cdot3^{x}\right)=2\ln^{2}3\left(2\left(3^{x}\right)^{2}-3^{x}\right)\){:/nomarkdown} ולכן כשנציב {::nomarkdown}\( x=0\){:/nomarkdown} נקבל משהו חיובי - מתאים לכך שזו נקודת מינימום. שימו לב שהנגזרת השניה מתאפסת כאשר {::nomarkdown}\( 2t^{2}=t\){:/nomarkdown}, כלומר ב-{::nomarkdown}\( t=0\){:/nomarkdown} (שלא יכול לקרות, כזכור) או ב-{::nomarkdown}\( t=\frac{1}{2}\){:/nomarkdown}, כלומר {::nomarkdown}\( 3^{x}=\frac{1}{2}\){:/nomarkdown}, כלומר ב-{::nomarkdown}\( x=\log_{3}\frac{1}{2}\){:/nomarkdown}. זה לא כל כך מעניין מה המספר המדויק הזה פרט לכך שהוא שלילי. בנקודה הזו יקרה לגרף הפונקציה דבר מוזר - היא תעבור מקמירות לקעירות. זה משהו הכרחי- כי השאיפה של הפונקציה לאסימפטוטה כשאיקס שואף למינוס אינסוף מכריח אותה להיות קעורה, בזמן שהשאיפה של הפונקציה לאינסוף כשאיקס שואף לאינסוף מכריחה אותה להיות קמורה. כך שמעבר מקעירות לקמירות חייב להתקיים. הנקודה שמעניינת אותי הוא שהמעבר הזה לא מתקיים ב-{::nomarkdown}\( x=0\){:/nomarkdown} אלא לפניו.

נשאר לצייר סקיצה. בסקיצה אני מתחשב בדברים הבאים: א) נקודת המינימום ב) האסימפטוטה ג) נקודת החיתוך עם ציר {::nomarkdown}\( y\){:/nomarkdown} ב-{::nomarkdown}\( x=1\){:/nomarkdown} ד) כל הדיון שניהלתי למעלה על קמירות וקעירות. הנה הסקיצה:

<a href="http://www.gadial.net/wp-content/uploads/2017/01/sketch4.png" rel="attachment wp-att-3411"><img class="aligncenter size-full wp-image-3411" src="http://www.gadial.net/wp-content/uploads/2017/01/sketch4.png" alt="sketch4" width="343" height="311" /></a>
<h1>סעיף ב'</h1>
הייתה לי טעות מטופשת במיוחד בסעיף הזה - חישבתי בהתחלה את השטח הלא נכון. במקום לחשב את השטח שמוגבל על ידי גרף הפונקציה <strong>מתחת</strong> לאסימפטוטה, חישבתי את זה ש<strong>מעל</strong> האסימפטוטה. זו אשמתי המלאה - קריאה לא נכונה של התיאור שלהם את השטח שאמורים לחשב. זו כבר טעות מפגרת שניה שלי במבחן. האם זה אומר שאני פותר אותו בשעות מאוחרות מדי? האם בזמן אמת הייתי עושה את אותן טעויות? לא יודע.

בואו נפתור את השאלה הנכונה. מה שאנחנו רוצים הוא לחשב את <strong>מינוס</strong> האינטגרל מ-{::nomarkdown}\( x=0\){:/nomarkdown} ועד ל-{::nomarkdown}\( x\){:/nomarkdown} שהוא נקודת החיתוך של הפונקציה עם האסימפטוטה (הקו האדום אצלי). אם כן, צריך להתחיל מלשאול את עצמנו מהי נקודת החיתוך הזו. כלומר מתי {::nomarkdown}\( f\left(x\right)=-3\){:/nomarkdown}, כלומר מתי {::nomarkdown}\( \left(3^{x}\right)^{2}-2\cdot3^{x}-3=-3\){:/nomarkdown}, כלומר מתי {::nomarkdown}\( t^{2}=2t\){:/nomarkdown}. כרגיל, {::nomarkdown}\( t=0\){:/nomarkdown} נפסל ולכן נקבל {::nomarkdown}\( t=2\){:/nomarkdown}, כלומר {::nomarkdown}\( 3^{x}=2\){:/nomarkdown}, כלומר {::nomarkdown}\( x=\log_{3}2\){:/nomarkdown}. בנקודה הזו {::nomarkdown}\( 9^{x}=4\){:/nomarkdown} ואילו {::nomarkdown}\( 3^{x}=2\){:/nomarkdown} וזה אכן מסתדר.

עכשיו, שימו לב שהאינטגרל הזה ייתן לי <strong>יותר מדי</strong> שטח, כי האינטגרל מודד את השטח שכלוא בין גרף הפונקציה לבין ציר {::nomarkdown}\( x\){:/nomarkdown}. כאן אני צריך למדוד את השטח שכלוא בין גרף הפונקציה ובין האסימפטוטה. יש שתי דרכים לעשות זאת: אפשר לחשב את האינטגרל הרגיל ואז להחסיר את שטח המלבן שספרתי "בטעות", ואפשר פשוט "להרים" את הפונקציה על ידי כך שאחשב את האינטגרל של {::nomarkdown}\( f\left(x\right)+3=9^{x}-2\cdot3^{x}\){:/nomarkdown}, חישוב שיהיה לי יותר פשוט. תדמיינו שאני לוקח את גרף הפונקציה כולה ודוחף אותו למעלה, יחד עם קו האסימפטוטה והכל, כדי להבין למה זה יעבוד.

אם כן, האינטגרל שלי הוא:

{::nomarkdown}\( \int_{0}^{\log_{3}2}\left(9^{x}-2\cdot3^{x}\right)dx=\left[\frac{9^{x}}{\ln9}-\frac{2\cdot3^{x}}{\ln3}\right]_{0}^{\log_{3}2}=\){:/nomarkdown}

{::nomarkdown}\( =\left(\frac{4}{2\ln3}-\frac{2\cdot2}{\ln3}\right)-\left(\frac{1}{2\ln3}-\frac{2}{\ln3}\right)\){:/nomarkdown}

{::nomarkdown}\( =\left(-\frac{4}{2\ln3}\right)-\left(-\frac{3}{2\ln3}\right)\){:/nomarkdown}

{::nomarkdown}\( =-\frac{1}{2\ln3}\){:/nomarkdown}

ולכן הפתרון, שהוא כאמור מינוס האינטגרל הזה, הוא {::nomarkdown}\( \frac{1}{2\ln3}\){:/nomarkdown}
<h1>סעיף ג'</h1>
כאן עושים התחכמות ומרימים את {::nomarkdown}\( f\){:/nomarkdown} עוד קצת. מה שצריך להבין פה הוא שכשמרימים את הפונקציה {::nomarkdown}\( f\){:/nomarkdown} זה לא משנה את השטח שכלוא בינה, בין ציר {::nomarkdown}\( y\){:/nomarkdown} ובין הקו הישר של האסימפטוטה, אחרי שאנחנו מרימים גם את הקו הישר הזה. מה שעשיתי בסעיף הקודם היה להרים את הקו של האסימפטוטה כך שינוח על ציר {::nomarkdown}\( x\){:/nomarkdown}; בסעיף הזה הם מרימים אותו עוד קצת, כך שהוא הופך להיות הישר {::nomarkdown}\( y=1\){:/nomarkdown}. השטח לא משתנה כתוצאה מכך, ולכן הערך של {::nomarkdown}\( k\){:/nomarkdown} הוא {::nomarkdown}\( 1\){:/nomarkdown}.
<h1>מה דעתי על השאלה?</h1>
זו שאלת חדו"א סטנדרטית. כאמור, לא ברור לי מה ההבדל המהותי בינה לבין שאלות החדו"א בחלק א' של המבחן, ואני לא מבין למה צריך כל כך הרבה חדו"א. אז בחלק א' הפונקציות היו טריגונומטריות וכאן הן אקספוננטים. למי אכפת?
<h1>שאלה 5</h1>
<a href="http://www.gadial.net/wp-content/uploads/2017/01/2-question5.png" rel="attachment wp-att-3409"><img class="aligncenter size-full wp-image-3409" src="http://www.gadial.net/wp-content/uploads/2017/01/2-question5.png" alt="2-question5" width="688" height="805" /></a>

השאלה הזו מזכירה לי במבט ראשון את השאלה ההיא מחלק א' שאהבתי. בואו נקווה שזה לא יתגלה בתור דמיון שטחי נטו.
<h1>סעיף א'</h1>
טוב, יש המון מה לקרוא ועד שאני מסיים אני כבר לא זוכר כלום, אבל אני מאוד מתרשם לטובה מכך שבמקום לומר "קעורה" ו"קמורה" הם אומרים "קעורה כלפי מטה" ומוסיפים {::nomarkdown}\( \cap\){:/nomarkdown} ו"קעורה כלפי מעלה" ומוסיפים {::nomarkdown}\( \cup\){:/nomarkdown}. ככה באמת קשה להתבלבל (הטרמינולוגיה שאני מכיר היא לומר "קעורה" בשביל "קעורה כלפי מטה" ו"קמורה" בשביל "קעורה כלפי מעלה"; אני זוכר את זה כי אני זוכר ש"קעורה" אמור להיות כמו קערה, רק הפוך. אני בעיקר זוכר את ה"הפוך" הזה כי הוא מרגיז נורא).

מה שמבקשים ממני הוא למצוא את שיעורי ה-{::nomarkdown}\( x\){:/nomarkdown} של נקודות הקיצון של <strong>הנגזרת</strong> של {::nomarkdown}\( f\){:/nomarkdown} (כי את נקודות הקיצון של {::nomarkdown}\( f\){:/nomarkdown} נתנו לי במפורש). נקודת קיצון של {::nomarkdown}\( f^{\prime}\){:/nomarkdown} היא נקודה שבה הפונקציה מפסיקה להיות עולה ומתחילה להיות יורדת, או ההפך. זה בא לידי ביטוי בגרף של {::nomarkdown}\( f\){:/nomarkdown} במעבר מקמירות לקעירות: אם {::nomarkdown}\( f^{\prime}\){:/nomarkdown} היא פונקציה עולה בתחום מסויים, אז {::nomarkdown}\( f\){:/nomarkdown} היא קמורה באותו התחום, ואילו אם {::nomarkdown}\( f^{\prime}\){:/nomarkdown} היא יורדת אז {::nomarkdown}\( f\){:/nomarkdown} היא קעורה.

נקודות המעבר בין קמירות לקעירות הן בדיוק {::nomarkdown}\( x=-2\){:/nomarkdown}, {::nomarkdown}\( x=2\){:/nomarkdown} ו-{::nomarkdown}\( x=5\){:/nomarkdown}. ב-{::nomarkdown}\( x=-2\){:/nomarkdown} וב-{::nomarkdown}\( x=5\){:/nomarkdown} הפונקציה עוברת מקעירות לקמירות, ולכן אלו נקודות שבהן {::nomarkdown}\( f^{\prime}\){:/nomarkdown} עוברת מירידה לעלייה, כלומר אלו נקודות <strong>מינימום</strong>, ואילו ב-{::nomarkdown}\( x=2\){:/nomarkdown} הפונקציה עוברת מקמירות לקעירות ולכן זו נקודת <strong>מקסימום</strong> של {::nomarkdown}\( f^{\prime}\){:/nomarkdown}.
<h1>סעיף ב'</h1>
מכיוון ש-{::nomarkdown}\( \ln\left(x\right)\){:/nomarkdown} מוגדרת רק עבור {::nomarkdown}\( x&gt;0\){:/nomarkdown} מקבלים שתחום ההגדרה של {::nomarkdown}\( g\left(x\right)=\ln\left(f\left(x\right)\right)\){:/nomarkdown} הוא {::nomarkdown}\( x&lt;-2\){:/nomarkdown} ו-{::nomarkdown}\( x&gt;2\){:/nomarkdown}. ומתי תהיה אסימפטוטה אנכית? אסימפטוטה אנכית פירושה שהפונקציה שואפת לאינסוף או למינוס אינסוף כאשר {::nomarkdown}\( x\){:/nomarkdown} שואף <strong>לנקודה</strong> (ולא לאינסוף). כאן זה יקרה בדיוק עבור {::nomarkdown}\( x=-2\){:/nomarkdown} ועבור {::nomarkdown}\( x=2\){:/nomarkdown} (בשניהם השאיפה היא למינוס אינסוף כי {::nomarkdown}\( f\left(x\right)\){:/nomarkdown} שואפת לאפס בנקודות הללו).

נותר לדבר על נקודות קיצון. מכיוון ש-{::nomarkdown}\( \ln x\){:/nomarkdown} היא פונקציה מונוטונית עולה, הרי ש-{::nomarkdown}\( \ln\left(f\left(x\right)\right)\){:/nomarkdown} תחלוק את אותן נקודות קיצון עם {::nomarkdown}\( f\left(x\right)\){:/nomarkdown}. בתחום ההגדרה של {::nomarkdown}\( g\left(x\right)\){:/nomarkdown} נמצאת רק נקודת הקיצון של {::nomarkdown}\( x=4\){:/nomarkdown}, שבה מתקיים {::nomarkdown}\( f\left(4\right)=3e\){:/nomarkdown} ולכן {::nomarkdown}\( g\left(4\right)=\ln\left(3e\right)=1+\ln3\){:/nomarkdown}. זוהי נקודת מקסימום עבור {::nomarkdown}\( f\left(x\right)\){:/nomarkdown} ולכן גם עבור {::nomarkdown}\( g\left(x\right)\){:/nomarkdown} זוהי נקודת מקסימום.

לסיום, נותר לצייר את הגרף של {::nomarkdown}\( g\){:/nomarkdown}. אומרים לנו משהו על האסימפטוטה האופקית שלה וזה נראה לי מיותר כי את כל זה אפשר לדעת ממה שאמרו לנו על האסימפטוטה האופקית של {::nomarkdown}\( f\){:/nomarkdown}.

בשרטוט אני מתחשב בדברים הבאים: א) תחום ההגדרה ב) האסימפטוטות האנכיות שמצאתי ג) האסימפטוטה האופקית המדוברת ד) נקודת המקסימום ב-{::nomarkdown}\( x=4\){:/nomarkdown} ה) העובדה שהפונקציה עולה ויורדת כמו {::nomarkdown}\( f\){:/nomarkdown}.

<a href="http://www.gadial.net/wp-content/uploads/2017/01/sketch5.png" rel="attachment wp-att-3410"><img class="aligncenter size-full wp-image-3410" src="http://www.gadial.net/wp-content/uploads/2017/01/sketch5.png" alt="sketch5" width="321" height="342" /></a>

<strong>מה דעתי על השאלה?</strong>

שוב, שאלת חדו"א סטנדרטית. דומה לזו של חלק א'. נחמדה. לא משהו מיוחד.

<strong>אז מה למדנו מכל זה?</strong>

תמה ונשלמה הבגרות. ראשית, איך הלך לי? יחסית סביר, בהתחשב בכך שלא התכוננתי למבחן, ובכך שלא פתרתי בתנאי מבחן כך שהריכוז שלי היה נמוך ודילגתי מעל שלבים וכדומה. אלו התירוצים שמצדיקים את העובדה שהמון דברים לא זכרתי, והיו לי גם שגיאות מזעזעות. יש כמה שאלות שפתרתי על סמך הידע הקיים שלי למרות שכנראה בבית הספר לומדים דרכים אחרות להתמודד איתם, אבל בהרבה מקרים לא הרגשתי שהידע שלי מסייע במיוחד. אין גם ספק בכך שכמעט כל השאלות היו "לא כיפיות" - לא הזכירו לי את הדברים שאותי אישית מעניינים במתמטיקה. זו לא בדיוק ביקורת על הבגרות כי אני חושב שבגרות על מה שמעניין אותי הייתה מסתיימת באסון עבור התלמידים.

ייתכן שאתם מצפים לאיזה סיכום מעמיק שבו אשטח את התובנות שלי על שיטת הלימוד בבתי הספר וכיצד יש לשנותה מן היסוד. אבל אני בוודאי לא אעשה שום דבר מוזר שכזה. אני מעדיף להסתכל על הדברים החיוביים פה, ויש כמה: ראשית, המבחן הרגיש לי <strong>הוגן</strong> בהחלט - לא שאלות שמטרתן להכשיל או להקשות בכוונה. הרוב היה סטנדרטי ודורש בעיקר היכרות טובה עם החומר ושליטה בו - שזה מה שאמור לקרות בבגרות. שנית, לא מעט שאלות נראו לי עוסקות בנושאים <strong>חשובים</strong>, כאלו שלא הייתי מוותר עליהם. עיקר התמיהה שלי מופנה לכיוון חדו"א, שאני מרגיש שיש הרבה יותר מדי ממנו במבחן.

דבר אחד שאיני יודע כלל, כי לא בדקתי זאת, הוא מה ההבדלים בין המבחנים הללו ובין המבחנים של תלמידי 3 ו-4 יחידות. על פניו אני לא מרגיש שהיה במבחן הזה משהו "מיוחד" ולכן לא בטוח שאני מבין את כל הקמפיינים של השנה שעברה שמטרתם לעודד 5 יחידות לימוד במתמטיקה בתור סוג של כרטיס כניסה לחיים ליקום ובכלל. אני רוצה לנצל את סיום הפוסט הזה כדי להפנות מסר פשוט לתלמידים, בתור מישהו שיש לו קצת נסיון עם מתמטיקה ואוהב אותה: מתמטיקה תיכונית היא לא סוף הסיפור וגם לא עיקר הסיפור. גם אם אתם עושים עכשיו 3 או 4 יחידות. גם אם אתם לא מבינים את החומר. גם אם המתמטיקה שאתם לומדים משעממת או מעצבנת אתכם, אל תראו בזה סוף הסיפור. אל תתנו לזה לסגור לכם את הדלת בפרצוף. אל תתנו לזה לגרום לכם לוותר על דברים בעתיד באופן אוטומטי. מתמטיקה אוניברסיטאית (גם כזו שנלמדת בפני עצמה וגם כזו שנלמדת על מנת לשמש את הסטודנטים בתחומים אחרים) היא אמנם קשה ותובענית, אבל היא גם מתגמלת יותר, וגם אופי הקשיים בה הוא שונה מהותית. אני לא מציע לכולכם לרוץ ללמוד מתמטיקה או אפילו להתעניין בה, אבל אם אתם מגיעים להחלטה בעניין, אני מקווה שהחוויות שלכם מהתיכון לא יהיו הגורם המכריע.
