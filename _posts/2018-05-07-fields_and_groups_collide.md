---
id: 3622
title: "כשחבורות ושדות מתנגשים"
date: 2018-05-07 23:06:42
layout: post
categories: 
  - אלגברה מופשטת
tags: 
  - תורת גלואה
---
סדרת הפוסטים שלי על אלגברה מופשטת מתקרבת אל אחת מנקודות השיא שלה - <strong>המשפט היסודי של תורת גלואה</strong>. זה לא מה שנעשה היום. מה שנעשה היום הוא את כל עבודת ההכנה שנדרשת עד שמגיעים למשפט הזה, ובפרט תהיה לנו הוכחה אחת שהיא הלב הטכני של כל הסיפור. יהיה בסדר; זו הוכחה טכנית אבל יש לה את האלגנטיות שלה ואפשר "להרגיש" באמצעותה למה הדברים עובדים. את ההוכחה עצמה אשמור לסוף, כי בעזרת המשפט שהיא מוכיחה נוכל לעשות דברים מעניינים שחבל להתאפק איתם. בפרט, נבין הרבה יותר טוב מה זו בכלל <strong>הרחבת גלואה </strong>שהזכרנו בחטף בפוסט הקודם.
<h2>מחבורה לשדה ומשדה לחבורה</h2>
בואו נזכיר על מה דיברנו בפעם הקודמת: הייתה לנו הרחבת שדות {::nomarkdown}\(E/F\){:/nomarkdown} ודיברנו על {::nomarkdown}\(\text{Aut}\left(E/F\right)\){:/nomarkdown} - חבורת האוטומורפיזמים של {::nomarkdown}\(E\){:/nomarkdown} ש<strong>משמרים</strong> את {::nomarkdown}\(F\){:/nomarkdown}. כאן זה ש-{::nomarkdown}\(\sigma\in\text{Aut}\left(E/F\right)\){:/nomarkdown} "משמר" את {::nomarkdown}\(F\){:/nomarkdown} פירושו ש-{::nomarkdown}\(\sigma a=a\){:/nomarkdown} לכל {::nomarkdown}\(a\in F\){:/nomarkdown} (להבדיל ממושג חלש יותר, {::nomarkdown}\(\sigma\left(F\right)\subseteq F\){:/nomarkdown} שלא מונע מ-{::nomarkdown}\(\sigma\){:/nomarkdown} לשנות איברים של {::nomarkdown}\(F\){:/nomarkdown} אבל כן מונע ממנו להוציא דברים מגבולות {::nomarkdown}\(F\){:/nomarkdown}). אמרנו גם ש-{::nomarkdown}\(E/F\){:/nomarkdown} היא <strong>הרחבת גלואה</strong> אם {::nomarkdown}\(\left[E:F\right]=\left\|\text{Aut}\left(E/F\right)\right\|\){:/nomarkdown} ובמקרה הזה אני מסמן את {::nomarkdown}\(\text{Aut}\left(E/F\right)\){:/nomarkdown} גם בסימון הנוסף {::nomarkdown}\(\text{Gal}\left(E/F\right)\){:/nomarkdown}.

דיברנו על התהליך שבו אנחנו מפיקים חבורה מתוך הרחבה. ליתר דיוק, בהינתן {::nomarkdown}\(E\){:/nomarkdown}, אנחנו מפיקים תתי-חבורות של {::nomarkdown}\(\text{Aut}\left(E\right)\){:/nomarkdown} על ידי התבוננות על תתי-שדות של {::nomarkdown}\(E\){:/nomarkdown}. מה שאנחנו רוצים לדבר עליו עכשיו הוא התהליך ההפוך: בהינתן תת-חבורה {::nomarkdown}\(G\){:/nomarkdown} של {::nomarkdown}\(\text{Aut}\left(E\right)\){:/nomarkdown}, בואו נגדיר את {::nomarkdown}\(F\){:/nomarkdown} להיות השדה שתת-החבורה הזו משמרת. כלומר, {::nomarkdown}\(F\triangleq\left\{ a\in E\ \|\ \sigma a=a,\forall\sigma\in G\right\} \){:/nomarkdown} (קל להוכיח שזה אכן שדה; זה נובע מכך ש-{::nomarkdown}\(\sigma\){:/nomarkdown} הומומורפיזם של שדות). המשפט המרכזי לפוסט הזה, שאת ההוכחה שלו כאמור אני שומר לסוף הפוסט, הוא ש<strong>תמיד</strong> מתקיים {::nomarkdown}\(\left[E:F\right]=\left\|G\right\|\){:/nomarkdown}. ה"תמיד" הזה עשוי להיות מבלבל; הרי ראינו שלא כל הרחבה היא הרחבת גלואה, אבל הכיוון השני "תמיד" עובד. ובכן, הנקודה היא שלא מובטח לנו ש<strong>כל</strong> תת-שדה של {::nomarkdown}\(E\){:/nomarkdown} אכן יהיה בר הפקה בצורה שכזו; רק אם {::nomarkdown}\(E/F\){:/nomarkdown} היא גלואה זה יעבוד.

בואו נראה מה המסקנות מהמשפט שהצגתי. ראשית, בואו נראה ש-{::nomarkdown}\(\left\|\text{Aut}\left(E/F\right)\right\|\le\left[E:F\right]\){:/nomarkdown} תמיד, גם בהרחבה שאיננה גלואה. הרעיון הוא זה: אם {::nomarkdown}\(G=\text{Aut}\left(E/F\right)\){:/nomarkdown}, המשפט מבטיח לנו שמתקיים {::nomarkdown}\(\left\|G\right\|=\left[E:K\right]\){:/nomarkdown} כאשר {::nomarkdown}\(K\){:/nomarkdown} הוא השדה ש-{::nomarkdown}\(G\){:/nomarkdown} משמרת. מה השדה הזה? ברור לנו שהוא <strong>מכיל</strong> את {::nomarkdown}\(F\){:/nomarkdown}, מכיוון ש-{::nomarkdown}\(G=\text{Aut}\left(E/F\right)\){:/nomarkdown} ולכן על פי הגדרה משמרת את כל {::nomarkdown}\(F\){:/nomarkdown}, אבל זה לא אומר שאין <strong>עוד</strong> איברים ש-{::nomarkdown}\(G\){:/nomarkdown} משמרת. לכן באופן כללי {::nomarkdown}\(F\subseteq K\subseteq E\){:/nomarkdown} ולכן

{::nomarkdown}\(\left[E:F\right]=\left[E:K\right]\left[K:F\right]=\left\|G\right\|\left[K:F\right]\){:/nomarkdown} ומכאן ש-{::nomarkdown}\(\left\|\text{Aut}\left(E/F\right)\right\|=\frac{\left[E:F\right]}{\left[K:F\right]}\le\left[E:F\right]\){:/nomarkdown} כמו שרצינו.

שנית, בואו נראה שכל הרחבה שמתקבלת מ-{::nomarkdown}\(G\){:/nomarkdown} באופן שתיארתי היא <strong>כן</strong> הרחבת גלואה. כלומר: ניקח תת-חבורה {::nomarkdown}\(G\){:/nomarkdown} של {::nomarkdown}\(\text{Aut}\left(E\right)\){:/nomarkdown}, ונגדיר את {::nomarkdown}\(F\){:/nomarkdown} להיות השדה שהיא משמרת. אני טוען ש-{::nomarkdown}\(\text{Aut}\left(E/F\right)=G\){:/nomarkdown}. אני כבר יודע כיוון אחד: {::nomarkdown}\(G\){:/nomarkdown} בוודאי מוכלת ב-{::nomarkdown}\(\text{Aut}\left(E/F\right)\){:/nomarkdown}, כי היא חבורה של אוטומורפיזמים של {::nomarkdown}\(E\){:/nomarkdown} שמשמרים את {::nomarkdown}\(F\){:/nomarkdown}. השאלה היא למה אין אוטומורפיזמים כאלו גם מחוץ ל-{::nomarkdown}\(G\){:/nomarkdown}. הנימוק הוא מאוד פשוט:

{::nomarkdown}\(\left[E:F\right]=\left\|G\right\|\le\left\|\text{Aut}\left(E/F\right)\right\|\le\left[E:F\right]\){:/nomarkdown}

ולכן בפרט {::nomarkdown}\(\left\|G\right\|=\left\|\text{Aut}\left(E/F\right)\right\|\){:/nomarkdown} . אינטואיטיבית, כל אוטומורפיזם של {::nomarkdown}\(E\){:/nomarkdown} שמשמר את {::nomarkdown}\(F\){:/nomarkdown} מכריח את המימד של {::nomarkdown}\(E\){:/nomarkdown} מעל {::nomarkdown}\(F\){:/nomarkdown} לגדול עוד ועוד; אבל המימד הזה חסום מלכתחילה על ידי הגודל של {::nomarkdown}\(G\){:/nomarkdown} ש"יצרה" את {::nomarkdown}\(F\){:/nomarkdown} מלכתחילה, על פי המשפט הקסום שאומר {::nomarkdown}\(\left[E:F\right]=\left\|G\right\|\){:/nomarkdown}. מכיוון שקיבלנו פה ש-{::nomarkdown}\(\left\|\text{Aut}\left(E/F\right)\right\|=\left[E:F\right]\){:/nomarkdown} המסקנה היא ש-{::nomarkdown}\(E/F\){:/nomarkdown} היא הרחבת גלואה.

העסק הזה מבלבל, אז הנה תמצית:
<ul>
 	<li>אם נתונה לנו הרחבה {::nomarkdown}\(E/F\){:/nomarkdown} ואנחנו מסיקים ממנה חבורת אוטומורפיזמים {::nomarkdown}\(G\){:/nomarkdown} של {::nomarkdown}\(E\){:/nomarkdown} שמשמרת את {::nomarkdown}\(F\){:/nomarkdown}, זה <strong>לא</strong> מבטיח ש-{::nomarkdown}\(E/F\){:/nomarkdown} גלואה.</li>
 	<li>אם נתונה לנו חבורת אוטומורפיזמים {::nomarkdown}\(G\){:/nomarkdown} של {::nomarkdown}\(E\){:/nomarkdown} ואנחנו מסיקים ממנה הרחבה {::nomarkdown}\(E/F\){:/nomarkdown} כאשר {::nomarkdown}\(F\){:/nomarkdown} השדה ש-{::nomarkdown}\(G\){:/nomarkdown} משמרת, זה <strong>כן</strong> מבטיח ש-{::nomarkdown}\(E/F\){:/nomarkdown} גלואה.</li>
</ul>
בפרט, הנקודה השניה נותנת לנו אפיון שקול חדש להרחבת גלואה: {::nomarkdown}\(E/F\){:/nomarkdown} היא הרחבת גלואה אם ורק אם קיימת תת-חבורה של {::nomarkdown}\(\text{Aut}\left(E\right)\){:/nomarkdown} ש-{::nomarkdown}\(F\){:/nomarkdown} הוא בדיוק השדה שהיא משמרת. אפשר אפילו לחדד את זה: {::nomarkdown}\(E/F\){:/nomarkdown} גלואה אם ורק אם השדה שאותו {::nomarkdown}\(\text{Aut}\left(E/F\right)\){:/nomarkdown} משמרת הוא {::nomarkdown}\(F\){:/nomarkdown}.

עכשיו, בואו נחזור למה ש<strong>עלול להיכשל</strong>. ראינו שייתכן שאני אקח הרחבה <strong>שאיננה גלואה</strong> {::nomarkdown}\(E/F\){:/nomarkdown}, אגדיר {::nomarkdown}\(G=\text{Aut}\left(E/F\right)\){:/nomarkdown}, ואז אנסה "להפוך" את התהליך ולהגדיר את השדה ש-{::nomarkdown}\(G\){:/nomarkdown} משמרת; באופן כללי אני עלול להיתקע עם שדה {::nomarkdown}\(F\subseteq K\subseteq E\){:/nomarkdown} כך ש-{::nomarkdown}\(F\ne K\){:/nomarkdown}. במילים אחרות, יוצא לנו ש-{::nomarkdown}\(\text{Aut}\left(E/F\right)=\text{Aut}\left(E/K\right)\){:/nomarkdown} למרות ש-{::nomarkdown}\(F\ne K\){:/nomarkdown}; ההתאמה שלוקחת תת-שדה של {::nomarkdown}\(E\){:/nomarkdown} ומחזירה חבורת אוטומורפיזמים איננה חד-חד-ערכית.

לעומת זאת, הכיוון ההפוך הוא <strong>כן</strong> חד-חד-ערכי. כלומר, אם {::nomarkdown}\(G_{1}\ne G_{2}\){:/nomarkdown} הן שתי תת-חבורות שונות של {::nomarkdown}\(\text{Aut}\left(E\right)\){:/nomarkdown} ואנחנו בונים את {::nomarkdown}\(F_{1},F_{2}\){:/nomarkdown} שהם השדות שהן משמרות, אז {::nomarkdown}\(F_{1}\ne F_{2}\){:/nomarkdown}. למה? כי בואו נניח ש-{::nomarkdown}\(F_{1}=F_{2}\){:/nomarkdown}. אז ממה שכבר ראינו: {::nomarkdown}\(G_{1}=\text{Aut}\left(E/F_{1}\right)=\text{Aut}\left(E/F_{2}\right)=G_{2}\){:/nomarkdown}.

החד-חד ערכיות הזו היא הבסיס למשפט היסודי של תורת גלואה.
<h2>הרחבת גלואה ושדות פיצול של פולינומים ספרביליים</h2>
עכשיו אני רוצה לעבור למשפט שהוא התכל'ס של "מה זו הרחבת גלואה" - הרחבת גלואה היא שדה פיצול של פולינום ספרבילי. כזכור, פולינום ספרבילי הוא כזה שאין לו שורש מרובה, כלומר אפשר לכתוב אותו בתור {::nomarkdown}\(\left(x-a_{1}\right)\left(x-a_{2}\right)\dots\left(x-a_{n}\right)\){:/nomarkdown} כאשר כל ה-{::nomarkdown}\(a_{i}\){:/nomarkdown}-ים שונים זה מזה - אלו הם ה<strong>שורשים</strong> של הפולינום. אז הרחבת גלואה היא מה שמתקבל כשלוקחים שדה, לוקחים פולינום תמים מעליו שהוא ספרבילי, ודוחפים לתוך השדה את <strong>כל</strong> השורשים שלו. בהכרח אלו יהיו כולם, ולא רק חלק; אם רק חלק מהשורשים התווספו לשדה, אז בהחלט ייתכן שלא יהיו לנו מספיק אוטומורפיזמים כדי שיתקיים הקריטריון של {::nomarkdown}\(\left\|\text{Aut}\left(E/F\right)\right\|=\left[E:F\right]\){:/nomarkdown}. בשלב הזה כל הטענה הזו נשמעת מאוד חשודה; אני חושב שלראות את ההוכחה שלה, שכוללת רגע מפיל אסימון אחד לפחות, היא הדבר הכי מועיל לאינטואיציה כאן.

החלק ה<strong>פחות חשוד</strong> הוא הטענה ששדה הפיצול של פולינום ספרבילי הוא הרחבת גלואה. אני אציג את ההוכחה הזו בנפנוף ידיים כדי לעזור להתמקד ברעיון שלה; אל תלמדו אותה מהפוסט הזה ישירות למבחן אלא קחו ספר ושימו לב לנקודות העדינות בניסוח שלו שהן חשובות כשרוצים להוכיח פורמלית עד הסוף.

בואו ניקח {::nomarkdown}\(p\left(x\right)\in F\left[x\right]\){:/nomarkdown} שהוא ספרבילי ונגדיר את {::nomarkdown}\(E\){:/nomarkdown} להיות שדה הפיצול שלו. אם {::nomarkdown}\(E=F\){:/nomarkdown} אז סיימנו; {::nomarkdown}\(\left\|\text{Aut}\left(E/F\right)\right\|=\left[E:F\right]=1\){:/nomarkdown}. אחרת, משדה הפיצול הזה ניקח איבר {::nomarkdown}\(a\in E\){:/nomarkdown} כך ש-{::nomarkdown}\(a\notin F\){:/nomarkdown} והוא שורש של {::nomarkdown}\(p\){:/nomarkdown}: {::nomarkdown}\(p\left(x\right)=0\){:/nomarkdown}, ונסתכל על ההרחבה {::nomarkdown}\(F\left(a\right)\){:/nomarkdown}. אנחנו יודעים ש-{::nomarkdown}\(\left[E:F\right]=\left[E:F\left(a\right)\right]\left[F\left(a\right):F\right]\){:/nomarkdown}, ומכיוון ש-{::nomarkdown}\(a\notin F\){:/nomarkdown} אני יודע ש-{::nomarkdown}\(\left[F\left(a\right):F\right]&gt;1\){:/nomarkdown} כלומר {::nomarkdown}\(\left[E:F\right]&lt;\left[E:F\left(a\right)\right]\){:/nomarkdown} וזה נותן לנו איזה שהוא פתח להוכחה אינדוקטיבית.

אנחנו יודעים ש-{::nomarkdown}\(\left[F\left(a\right):F\right]\){:/nomarkdown} שווה למעלה של <strong>הפולינום המינימלי</strong> {::nomarkdown}\(m_{a,F}\left(x\right)\){:/nomarkdown} של {::nomarkdown}\(a\){:/nomarkdown} מעל השדה {::nomarkdown}\(F\){:/nomarkdown}; הפולינום הזה מחלק את {::nomarkdown}\(p\left(x\right)\){:/nomarkdown} שממנו התחלנו. זה פולינום שהמקדמים שלו כולם ב-{::nomarkdown}\(F\){:/nomarkdown} ולכן כל אוטומורפיזם ב-{::nomarkdown}\(\text{Aut}\left(E/F\right)\){:/nomarkdown} מבצע פרמוטציה על השורשים שלו.

כמה שורשים יש לפולינום הזה? באופן כללי, לפולינום מעל שדה יש <strong>לכל היותר</strong> מספר שורשים ששווה למעלה שלו; במקרה שבו הפולינום ספרבילי מספר השורשים הוא <strong>בדיוק</strong> המעלה שלו. הפולינום המינימלי הוא ספרבילי כי הוא מחלק פולינום ספרבילי, ולכן זה מתקיים עבורו. כלומר, כשאני בא להגדיר אוטומורפיזם כלשהו ב-{::nomarkdown}\(\text{Aut}\left(E/F\right)\){:/nomarkdown} ואני ניצב בפני השאלה "לאן להעביר את {::nomarkdown}\(a\){:/nomarkdown}?" יש לי בדיוק {::nomarkdown}\(\text{deg}m_{a,F}=\left[F\left(a\right):F\right]\){:/nomarkdown} בחירות אפשריות.

מכיוון שכל איבר ב-{::nomarkdown}\(F\left(a\right)\){:/nomarkdown} ניתן לכתיבה בעזרת אברי {::nomarkdown}\(F\){:/nomarkdown} ו-{::nomarkdown}\(a\){:/nomarkdown}, הרי שמרגע שביצעתי את הבחירה לאן להעביר את {::nomarkdown}\(a\){:/nomarkdown}, האוטומורפיזם שבניתי נקבע באופן יחיד על כל {::nomarkdown}\(F\left(a\right)\){:/nomarkdown}. עכשיו מגיע הרגע של נפנוף הידיים הפרוע: אני יכול להשתמש בהנחת האינדוקציה שלי (שלא ניסחתי במפורש כי כשננסה לנסח אותה במפורש נראה שהיא צריכה להיות קצת יותר מסובכת) כדי להראות ש-{::nomarkdown}\(\left\|\text{Aut}\left(E/F\left(a\right)\right)\right\|=\left[E:F\left(a\right)\right]\){:/nomarkdown}. אפשר לחשוב על אוטומורפיזם שכזה על {::nomarkdown}\(E\){:/nomarkdown} שמשמר את {::nomarkdown}\(F\left(a\right)\){:/nomarkdown} כאילו (נפנוף ידיים!) הוא ניתן להרחבה לאוטומורפיזם של {::nomarkdown}\(E\){:/nomarkdown} שמשמר רק את {::nomarkdown}\(F\){:/nomarkdown} על ידי כך שנגיד לאן {::nomarkdown}\(a\){:/nomarkdown} צריך לעבור, ואנחנו יודעים שאנחנו יכולים להעביר את {::nomarkdown}\(a\){:/nomarkdown} לכל שורש אחר של {::nomarkdown}\(m_{a,F}\){:/nomarkdown} מבלי (נפנוף ידיים!) שיווצרו עם זה בעיות; כלומר, לכל אוטומורפיזם ב-{::nomarkdown}\(\text{Aut}\left(E/F\left(a\right)\right)\){:/nomarkdown} יש לנו {::nomarkdown}\(\left[F\left(a\right):F\right]\){:/nomarkdown} דרכים שונות להרחיב אותו, ומכיוון ש-{::nomarkdown}\(\left\|\text{Aut}\left(E/F\left(a\right)\right)\right\|=\left[E:F\left(a\right)\right]\){:/nomarkdown} אני אקבל ש-{::nomarkdown}\(\left\|\text{Aut}\left(E/F\right)\right\|=\left[E:F\left(a\right)\right]\left[F\left(a\right):F\right]=\left[E:F\right]\){:/nomarkdown} כפי שרציתי.

ההוכחה הזו, אולי שמתם לב, קצת מנפנפת בידיים, אבל היא מציגה בדיוק את הסיבה שבגללה ההרחבה הופכת להיות גלואה: אפשר לחשוב על שדה פיצול בתור משהו שמתקבל באמצעות סדרה של הרחבות פשוטות. ה"קפיצה במימד של ההרחבה" שאני מקבל עם כל הרחבה פשוטה שכזו מתאימה בדיוק לחופש התמרון שיש לי כשאני בא להגדיר אוטומורפיזם וצריך להחליט מה לעשות עם האיבר שבאמצעותו הרחבתי את אותה הרחבה פשוטה. אי-ספרביליות מקלקלת את כל זה בכך שהיא מקטינה את חופש הבחירה הזה שלי (כי יש פחות שורשים לבחור מהם) למרות שהקפצה במימד של ההרחבה נותרת זהה (כי הקפיצה במימד של ההרחבה תמיד מתאימה למעלה של הפולינום המינימלי, גם אם הוא לא ספרבילי; זכרו שראינו בפוסט הקודם דוגמא מוזרה של פולינום אי פריק שאינו ספרבילי שדרשה מאיתנו ללכת לשדה אינסופי ממציין {::nomarkdown}\(p\){:/nomarkdown} ).

עכשיו בואו נעבור לדבר על הכיוון השני של המשפט, שהוא מוזר יותר: אם {::nomarkdown}\(E/F\){:/nomarkdown} הרחבת גלואה אז <strong>בודאות</strong> {::nomarkdown}\(E/F\){:/nomarkdown} היא שדה פיצול של פולינום ספרבילי. מה זה פה? מאיפה בכלל מתחילים? איך מוצאים את הפולינום הזה?

ובכן, האינטואיציה של <strong>זה</strong> היא דווקא די קלה. אם {::nomarkdown}\(E/F\){:/nomarkdown} היא הרחבת שדות סופית, אז אנחנו כבר יודעים ש-{::nomarkdown}\(E=F\left(a_{1},\dots,a_{n}\right)\){:/nomarkdown}; זה היה <a href="http://gadial.net/2018/04/09/simple_finite_algebraic_field_extensions/">אחד הדברים הראשונים שראינו</a> על הרחבת שדות. לכל {::nomarkdown}\(a_{i}\){:/nomarkdown} כזה, אני מסמן את הפולינום המינימלי שלו מעל {::nomarkdown}\(F\){:/nomarkdown} ב-{::nomarkdown}\(m_{a_{i},F}\left(x\right)\){:/nomarkdown}. אם אני אקח עכשיו את פולינום המכפלה {::nomarkdown}\(\prod_{i=1}^{n}m_{a_{i},F}\left(x\right)\){:/nomarkdown} אני אקבל פולינום יחיד ש-{::nomarkdown}\(a_{1},\dots,a_{n}\){:/nomarkdown} נמנים על השורשים שלו, ואז אני אקח את שדה הפיצול שלו ואקבל בין היתר את {::nomarkdown}\(a_{1},\dots,a_{n}\){:/nomarkdown} בפנים. אבל עם הרעיון הנחמד הזה יש שתי בעיות:
<ul>
 	<li>הפולינום שאקבל לא בהכרח יהיה ספרבילי.</li>
 	<li>לא ברור למה בשדה הפיצול שלו לא יהיו איברים <strong>נוספים</strong>, שאינם דווקא ב-{::nomarkdown}\(E\){:/nomarkdown}.</li>
</ul>
הפתרון לשני אלו טמון במשפט המאוד מפתיע (לטעמי) הבא: אם {::nomarkdown}\(E/F\){:/nomarkdown} היא הרחבת גלואה ו-{::nomarkdown}\(p\left(x\right)\in F\left[x\right]\){:/nomarkdown} הוא פולינום <strong>אי פריק</strong> מעל {::nomarkdown}\(F\){:/nomarkdown} שיש לו שורש ב-{::nomarkdown}\(E\){:/nomarkdown}, אז קורים שני דברים:
<ol>
 	<li>{::nomarkdown}\(p\left(x\right)\){:/nomarkdown} ספרבילי.</li>
 	<li>{::nomarkdown}\(p\left(x\right)\){:/nomarkdown} מתפרק מעל {::nomarkdown}\(E\){:/nomarkdown} לגורמים לינאריים, כלומר <strong>כל</strong> השורשים של {::nomarkdown}\(p\left(x\right)\){:/nomarkdown} (ולא רק אחד) נמצאים ב-{::nomarkdown}\(E\){:/nomarkdown}.</li>
</ol>
זו אולי התכונה שהכי מבהירה לי, אינטואיטיבית, מה ה"כוח" של הרחבת גלואה - אם פולינום כלשהו מעל {::nomarkdown}\(F\){:/nomarkdown} שאין לו שורשים בכלל ב-{::nomarkdown}\(F\){:/nomarkdown} מחליט לעשות לנו טובה ולתת לנו איזה שורש מסכן אחד ב-{::nomarkdown}\(E\){:/nomarkdown}, אז זהו, המשחק נגמר - אוטומטית כולם יהיו ב-{::nomarkdown}\(E\){:/nomarkdown}. הרחבת גלואה היא כזו שמבטיחה לנו ש"לא יהיו חסרים שורשים לאף פולינום". והאופן שבו אני אוכיח את זה יפיל לכולנו (בתקווה) את האסימון בנוגע לשאלה <strong>למה </strong>הקסם הזה קורה.

בואו נסמן {::nomarkdown}\(G=\text{Gal}\left(E/F\right)\){:/nomarkdown}. ניקח {::nomarkdown}\(p\left(x\right)\in F\left[x\right]\){:/nomarkdown} שהוא אי-פריק מעל {::nomarkdown}\(F\){:/nomarkdown} אבל יש לו שורש {::nomarkdown}\(a\in E\){:/nomarkdown}, ועכשיו נפעיל על השורש הזה את כל האיברים של {::nomarkdown}\(G\){:/nomarkdown}, כלומר נסתכל על הקבוצה {::nomarkdown}\(\left\{ \sigma a\ \|\ \sigma\in G\right\} \){:/nomarkdown}. האיברים הללו נקראים <strong>צמודי הגלואה</strong> של {::nomarkdown}\(a\){:/nomarkdown}. זו קבוצה של איברים של {::nomarkdown}\(E\){:/nomarkdown} שכולם שורשים של {::nomarkdown}\(p\left(x\right)\){:/nomarkdown}; מן הסתם, מה שאנחנו מקווים להגיד הוא שאלו הם <strong>כל</strong> השורשים של {::nomarkdown}\(p\left(x\right)\){:/nomarkdown}. בואו נסמן את אברי הקבוצה הזו ב-{::nomarkdown}\(a_{1},a_{2},\dots,a_{k}\){:/nomarkdown} (כשאנחנו כותבים כל איבר של הקבוצה רק פעם אחת, אפילו אם הוא התקבל בכמה דרכים שונות).

עכשיו בואו נגדיר פולינום <strong>חדש</strong> שהוא ספרבילי ואלו בדיוק השורשים שלו:

{::nomarkdown}\(q\left(x\right)=\left(x-a_{1}\right)\left(x-a_{2}\right)\dots\left(x-a_{k}\right)\){:/nomarkdown}

אני טוען ש-{::nomarkdown}\(p\left(x\right)=q\left(x\right)\){:/nomarkdown}. אבל למה? כאן מגיע השפן שאני שולף מהכובע - המהות של המהות של הסיבה שבגללה תורת גלואה עובדת לדעתי - ואפשר לתמצת למשפט המחץ <strong>כי מקדמים של פולינום מתוקן ספרבילי הם פונקציות סימטריות בשורשים שלו</strong>.

בואו נסביר את זה.

אם יש לנו פולינום ממעלה שניה עם השורשים {::nomarkdown}\(a_{1},a_{2}\){:/nomarkdown} אז קל לבדוק, על ידי כך שפותחים סוגריים במפורש, ש-{::nomarkdown}\(\left(x-a_{1}\right)\left(x-a_{2}\right)=x^{2}-\left(a_{1}+a_{2}\right)+a_{1}a_{2}\){:/nomarkdown}. כלומר, המקדם החופשי הוא מכפלה של השורשים והמקדם שאחריו הוא סכום שלהם. זה נקרא <strong>נוסחאות וייטה</strong>, אבל אפשר להפעיל אותן בצורה דומה על פולינום ממעלה כלשהי, עם מספר כלשהו של שורשים. השורה התחתונה תהיה תמיד זהה: המקדם שאחרי המקדם המוביל הוא מינוס של סכום כל השורשים; המקדם שאחריו הוא סכום כל המכפלות של שני שורשים, זה שאחריו הוא מינוס הסכום של כל המכפלות של שלושה שורשים וכן הלאה. הנה דוגמא עבור פולינום ממעלה שלישית עם שורשים {::nomarkdown}\(a_{1},a_{2},a_{3}\){:/nomarkdown}:

{::nomarkdown}\(x^{3}-\left(a_{1}+a_{2}+a_{3}\right)+\left(a_{1}a_{2}+a_{1}a_{3}+a_{2}a_{3}\right)-a_{1}a_{2}a_{3}\){:/nomarkdown}

מה זו "פונקציה סימטרית"? {::nomarkdown}\(f\left(x_{1},\dots,x_{n}\right)\){:/nomarkdown} היא סימטרית אם לכל זוג אינדקסים {::nomarkdown}\(i\ne j\){:/nomarkdown}, והשמה לפונקציה, אם נחליף את הערכים שבמקומות {::nomarkdown}\(i,j\){:/nomarkdown} הפלט של הפונקציה לא ישתנה. כלומר, {::nomarkdown}\(f\left(a_{1},\dots,a_{i},\dots,a_{j},\dots,a_{n}\right)=f\left(a_{1},\dots,a_{j},\dots,a_{i},\dots,a_{n}\right)\){:/nomarkdown}. אם אפשר להחליף ערכים עבור <strong>זוג</strong> אינדקסים וששום דבר לא ישתנה, אפשר לעשות את זה כמה פעמים שרוצים, ומכיוון שכל תמורה ניתן להציג בתור הרכבה של חילופים של זוגות של איברים, נקבל שפונקציה סימטרית היא כזו שהפלט שלה נשאר קבוע תחת תמורות של אברי הקלט; במילים אחרות, הפלט תלוי רק בזהות של הקלטים, לא בסדר שלהם.

קל לראות שמקדמי הפולינום שלנו הם פונקציות סימטריות שכאלו בשורשים. מה שאומר שאם אנחנו מפעילים תמורה {::nomarkdown}\(\sigma\){:/nomarkdown} כלשהי על השורשים, זה לא משנה את המקדמים של הפולינום. מה זה אומר? שלכל {::nomarkdown}\(\sigma\in\text{Gal}\left(E/F\right)\){:/nomarkdown}, המקדמים של {::nomarkdown}\(q\left(x\right)\){:/nomarkdown} משתמרים על ידי {::nomarkdown}\(\sigma\){:/nomarkdown}. אבל מה המשמעות של זה ש-{::nomarkdown}\(E/F\){:/nomarkdown} היא הרחבת גלואה? שאם איבר כלשהו משתמר על ידי <strong>כל</strong> האיברים של {::nomarkdown}\(\text{Gal}\left(E/F\right)\){:/nomarkdown}, זה אומר שהוא שייך ל-{::nomarkdown}\(F\){:/nomarkdown}. לכן <strong>כל</strong> המקדמים של {::nomarkdown}\(q\left(x\right)\){:/nomarkdown} שייכים ל-{::nomarkdown}\(F\){:/nomarkdown} ולכן {::nomarkdown}\(q\left(x\right)\in F\left[x\right]\){:/nomarkdown}.

עכשיו, מה קורה? {::nomarkdown}\(p\left(x\right)\){:/nomarkdown} היה פולינום אי-פריק, אבל מצד שני כל שורש של {::nomarkdown}\(q\left(x\right)\){:/nomarkdown} הוא גם שורש שלו, ולכן {::nomarkdown}\(q\left(x\right)\){:/nomarkdown} מחלק אותו בלי שארית, מה שמכריח את {::nomarkdown}\(q\left(x\right)=p\left(x\right)\){:/nomarkdown}. קיבלנו ש-{::nomarkdown}\(p\left(x\right)\){:/nomarkdown} הוא פולינום ספרבילי (כי בנינו את {::nomarkdown}\(q\left(x\right)\){:/nomarkdown} להיות ספרבילי) שכל השורשים שלו הם ב-{::nomarkdown}\(E\){:/nomarkdown} (כי בנינו את {::nomarkdown}\(q\left(x\right)\){:/nomarkdown} רק מהשורשים של {::nomarkdown}\(p\left(x\right)\){:/nomarkdown} שהיו שייכים ל-{::nomarkdown}\(E\){:/nomarkdown}). זה מסיים את הטענה המרכזית שלי כאן.

אם כן, ראינו שאם {::nomarkdown}\(E/F\){:/nomarkdown} גלואה ו-{::nomarkdown}\(p\left(x\right)\in F\left[x\right]\){:/nomarkdown} אי-פריק מעל {::nomarkdown}\(F\){:/nomarkdown} ועם שורש אחד ב-{::nomarkdown}\(E\){:/nomarkdown} אז כל השורשים שלו ב-{::nomarkdown}\(E\){:/nomarkdown} והוא ספרבילי. עם הידע הזה בואו נחזור לכך ש-{::nomarkdown}\(E=F\left(a_{1},\dots,a_{n}\right)\){:/nomarkdown} ואני רוצה להציג את {::nomarkdown}\(E\){:/nomarkdown} כשדה פיצול של פולינום ספרבילי מעל {::nomarkdown}\(F\){:/nomarkdown}. אני לוקח את הפולינומים המינימליים {::nomarkdown}\(m_{a_{i},F}\left(x\right)\){:/nomarkdown} של היוצרים של {::nomarkdown}\(E\){:/nomarkdown}. הם אי-פריקים מעל {::nomarkdown}\(F\){:/nomarkdown} כי פולינום מינימלי הוא תמיד אי-פריק. כמו כן, יש להם שורש ב-{::nomarkdown}\(E\){:/nomarkdown} כי לכל {::nomarkdown}\(i\){:/nomarkdown} אנחנו יודעים ש-{::nomarkdown}\(a_{i}\in E\){:/nomarkdown} הוא שורש של {::nomarkdown}\(m_{F,a_{i}}\){:/nomarkdown} (זו המהות של הפולינום הזה). לכן כל השורשים של הפולינום המינימלי הזה שייכים ל-{::nomarkdown}\(E\){:/nomarkdown}. לכן אם נגדיר פולינום שהוא המכפלה של כל הפולינומים המינימליים הללו, שדה הפיצול שלו יהיה בדיוק {::nomarkdown}\(E\){:/nomarkdown}.

הבעיה היחידה שנותרה היא שהמכפלה הזו לאו דווקא תהיה ספרבילית. מכיוון שכל הפולינומים המינימליים ספרביליים (כי כאמור - ראינו שאי פריק מעל {::nomarkdown}\(F\){:/nomarkdown} ובעל שורש ב-{::nomarkdown}\(E\){:/nomarkdown} גורר ספרבילי) הדרך היחידה שבה המכפלה לא תהיה ספרבילית היא אם יש שני פולינומים מינימליים שיש להם שורש משותף. אבל ראינו לפני רגע איך שורש אחד <strong>כלשהו</strong> של הפולינומים הללו קובע אותם במפורש (בהינתן השורש הזה, הפולינום שהוא קובע הוא זה ששורשיו הם בדיוק צמודי הגלואה של השורש). לכן אם יש לשני פולינומים מינימליים שורש משותף הם זהים, ואפשר פשוט לא לקחת אחד מהם למכפלה. בצורה הזו מובטח שנקבל פולינום ספרבילי ששדה הפיצול שלו הוא {::nomarkdown}\(E\){:/nomarkdown}.

ראינו פה שתי תכונות חדשות ומעניינות של פולינומים אי-פריקים בהרחבת גלואה. התכונות הללו הן מוטביציה לשתי הגדרות של תכונות כלליות של הרחבות:
<ul>
 	<li>הרחבה {::nomarkdown}\(E/F\){:/nomarkdown} היא <strong>נורמלית</strong> אם לכל פולינום אי-פריק {::nomarkdown}\(p\left(x\right)\in F\left[x\right]\){:/nomarkdown} או שאין לו שורש ב-{::nomarkdown}\(E\){:/nomarkdown}, או שכל השורשים שלו הם ב-{::nomarkdown}\(E\){:/nomarkdown}.</li>
 	<li>הרחבה {::nomarkdown}\(E/F\){:/nomarkdown} היא <strong>ספרבילית</strong> אם לכל {::nomarkdown}\(a\in E\){:/nomarkdown}, הפולינום המינימלי של {::nomarkdown}\(a\){:/nomarkdown} מעל {::nomarkdown}\(F\){:/nomarkdown} הוא ספרבילי.</li>
</ul>
ראינו זה עתה שהרחבת גלואה היא נורמלית וספרבילית - אלו התכונות שניצלנו כדי להוכיח שהרחבת גלואה היא שדה פיצול של פולינום ספרבילי. אם כן, יש לנו שרשרת של גרירות: "גלואה" גורר "נורמלית וספרבילית" וזה גורר "שדה פיצול של פולינום ספרבילי" שגורר, כפי שראינו קודם, "גלואה". לכן כל אלו שקולים. נוסיף לזה את הטענה שראינו קודם על השדה ש-{::nomarkdown}\(\text{Aut}\left(E/F\right)\){:/nomarkdown} משמרת, וקיבלנו ארבע הגדרות שקולות ל"מתי {::nomarkdown}\(E/F\){:/nomarkdown} היא הרחבת גלואה"
<ol>
 	<li>אם {::nomarkdown}\(\left[E:F\right]=\left\|\text{Aut}\left(E/F\right)\right\|\){:/nomarkdown}.</li>
 	<li>אם השדה ש-{::nomarkdown}\(\text{Aut}\left(E/F\right)\){:/nomarkdown} משמרת הוא {::nomarkdown}\(F\){:/nomarkdown}.</li>
 	<li>אם {::nomarkdown}\(E/F\){:/nomarkdown} הרחבה נורמלית וספרבילית.</li>
 	<li>אם {::nomarkdown}\(E\){:/nomarkdown} הוא שדה פיצול של פולינום ספרבילי מעל {::nomarkdown}\(F\){:/nomarkdown}.</li>
</ol>
<h2>הוכחת המשפט ה"קשה"</h2>
חזרה אל החוב שלי מתחילת הפוסט. כזכור, אני רוצה להוכיח שאם {::nomarkdown}\(E\){:/nomarkdown} שדה ו-{::nomarkdown}\(G\){:/nomarkdown} תת-חבורה של {::nomarkdown}\(\text{Aut}\left(E\right)\){:/nomarkdown} ואני מגדיר את {::nomarkdown}\(F\){:/nomarkdown} להיות השדה ש-{::nomarkdown}\(G\){:/nomarkdown} משמרת, אז {::nomarkdown}\(\left[E:F\right]=\left\|G\right\|\){:/nomarkdown}. את ההוכחה אפשר לחלק לשני חלקים ששניהם דומים באופיים: מניחים ש-{::nomarkdown}\(\left[E:F\right]\){:/nomarkdown} גדול או קטן מ-{::nomarkdown}\(\left\|G\right\|\){:/nomarkdown}, ובכל אחד מהמקרים הללו משתמשים באלגברה לינארית בסיסית ובתכונות הנחמדות של אוטומורפיזמים כדי ליצור איבר שהוא "טוב מכדי להתקיים". התכונה הרלוונטית לי מאלגברה לינארית היא זו: אם יש לי מערכת הומוגנית של {::nomarkdown}\(k\){:/nomarkdown} משוואות לינאריות ב-{::nomarkdown}\(n\){:/nomarkdown} נעלמים כך ש-{::nomarkdown}\(k&lt;n\){:/nomarkdown}, אז תמיד קיים לה פתרון לא טריוויאלי ("מערכת הומוגנית" היא מערכת מהצורה {::nomarkdown}\(Ax=0\){:/nomarkdown}, ו"פתרון לא טריוויאלי" הוא כזה שבו לא כל המשתנים מקבלים 0).

עוד תכונה שאזדקק לה היא שאוטומורפיזמים של {::nomarkdown}\(E\){:/nomarkdown} הם <strong>בלתי תלויים לינארית</strong> מעל {::nomarkdown}\(E\){:/nomarkdown}. למה אני מתכוון? אם {::nomarkdown}\(\sigma_{1},\dots,\sigma_{n}\){:/nomarkdown} הם אוטומורפיזמים כלשהם של {::nomarkdown}\(E\){:/nomarkdown} אז לא קיים צירוף לינארי לא טריוויאלי שלהם שהוא פונקציית האפס, כלומר אם {::nomarkdown}\(a_{1}\sigma_{1}\left(x\right)+\dots+a_{n}\sigma_{n}\left(x\right)=0\){:/nomarkdown} לכל {::nomarkdown}\(x\in E\){:/nomarkdown}, אז {::nomarkdown}\(a_{1}=\dots=a_{n}\){:/nomarkdown}.

כדי להוכיח את התכונה הזו נניח בשלילה שיש צירוף לינארי לא טריוויאלי שכזה. בלי הגבלת הכלליות אפשר להניח ש-{::nomarkdown}\(a_{1},\dots,a_{m}\){:/nomarkdown} הם המקדמים ששונים מאפס ופשוט לשכוח מהאחרים. יותר מכך - אפשר להניח ש-{::nomarkdown}\(m\){:/nomarkdown} הוא המספר המינימלי שעבורו קיים צירוף לינארי לא טריוויאלי שכזה, וש-{::nomarkdown}\(m&gt;1\){:/nomarkdown} (כי {::nomarkdown}\(a_{1}\sigma_{1}\){:/nomarkdown} הוא אוטומורפיזם ולכן בוודאי שלא פונקציית האפס). התעלול עכשיו יהיה לייצר צירוף לינארי לא טריוויאלי מתאפס <strong>קטן יותר</strong>. אני אקח את

{::nomarkdown}\(a_{1}\sigma_{1}\left(x\right)+\dots+a_{m}\sigma_{m}\left(x\right)=0\){:/nomarkdown}

ועכשיו אני רוצה "למחוק" מהצירוף הזה את {::nomarkdown}\(\sigma_{m}\){:/nomarkdown} תוך שאני משאיר לכל הפחות את {::nomarkdown}\(\sigma_{1}\){:/nomarkdown}. לשם כך אני צריך איכשהו להבדיל בין שני אלו; מכיוון שהם פונקציות, אז העובדה שהם שונים מעידה על כך שקיים לפחות {::nomarkdown}\(x_{0}\){:/nomarkdown} אחד כך ש-{::nomarkdown}\(\sigma_{1}\left(x_{0}\right)\ne\sigma_{m}\left(x_{0}\right)\){:/nomarkdown}. בהכרח {::nomarkdown}\(x_{0}\ne0\){:/nomarkdown} אחרת שניהם היו מחזירים עליו 0. אם הצירוף הלינארי שלעיל נכון לכל {::nomarkdown}\(x\in E\){:/nomarkdown}, הוא נכון בפרט עבור {::nomarkdown}\(x_{0}\cdot y\){:/nomarkdown} כאשר {::nomarkdown}\(y\in E\){:/nomarkdown} איבר כלשהו. לכן אפשר לכתוב:

{::nomarkdown}\(a_{1}\sigma_{1}\left(x_{0}y\right)+\dots+a_{m}\sigma_{m}\left(x_{0}y\right)=0\){:/nomarkdown}

ותוך שימוש בכך שה-{::nomarkdown}\(\sigma\){:/nomarkdown}-ות הן הומומורפיזמים:

{::nomarkdown}\(a_{1}\sigma_{1}\left(x_{0}\right)\sigma_{1}\left(y\right)+\dots+a_{m}\sigma_{m}\left(x_{0}\right)\sigma_{m}\left(y\right)=0\){:/nomarkdown}

עכשיו ניקח את המשוואה שהתחלנו ממנה, ונכפול את כולה ב-{::nomarkdown}\(\sigma_{m}\left(x_{0}\right)\){:/nomarkdown}. נקבל:

{::nomarkdown}\(a_{1}\sigma_{m}\left(x_{0}\right)\sigma_{1}\left(y\right)+\dots+a_{m}\sigma_{m}\left(x_{0}\right)\sigma_{m}\left(y\right)=0\){:/nomarkdown}

ועכשיו נחסר את המשוואה הזו שקיבלנו מהמשוואה שקיבלנו לפני רגע. נקבל:

{::nomarkdown}\(a_{1}\left(\sigma_{1}\left(x_{0}\right)-\sigma_{m}\left(x_{0}\right)\right)\sigma_{1}\left(y\right)+\dots+a_{m-1}\left(\sigma_{m-1}\left(x_{0}\right)-\sigma_{m}\left(x_{0}\right)\right)\sigma_{m-1}\left(y\right)=0\){:/nomarkdown}

מה קיבלנו פה? צירוף לינארי של {::nomarkdown}\(m-1\){:/nomarkdown} איברים לכל היותר ששווה גם הוא אפס לכל {::nomarkdown}\(y\in E\){:/nomarkdown}. לא כל המקדמים של הצירוף הזה הם אפס, כי {::nomarkdown}\(a_{1}\left(\sigma_{1}\left(x_{0}\right)-\sigma_{m}\left(x_{0}\right)\right)\ne0\){:/nomarkdown}. זו סתירה להנחה שלנו ש-{::nomarkdown}\(m\){:/nomarkdown} היה מינימלי, מה שמוכיח שכל ה-{::nomarkdown}\(\sigma\){:/nomarkdown}-ות הן בלתי תלויות לינארית מעל {::nomarkdown}\(E\){:/nomarkdown}.

עכשיו, משאני מצוייד בידע הזה, אפשר סוף סוף להוכיח ש-{::nomarkdown}\(\left[E:F\right]=\left\|G\right\|\){:/nomarkdown}. נסמן {::nomarkdown}\(\left\|G\right\|=n\){:/nomarkdown} (כלומר {::nomarkdown}\(G=\left\{ \sigma_{1},\sigma_{2},\dots,\sigma_{n}\right\} \){:/nomarkdown}), ונטפל בנפרד במקרים של {::nomarkdown}\(\left[E:F\right]&lt;n\){:/nomarkdown} ו-{::nomarkdown}\(\left[E:F\right]&gt;n\){:/nomarkdown}. נתחיל מהראשון. במקרה הראשון, אסמן {::nomarkdown}\(k=\left[E:F\right]\){:/nomarkdown} וניקח בסיס {::nomarkdown}\(a_{1},\dots,a_{k}\in E\){:/nomarkdown} ל-{::nomarkdown}\(E\){:/nomarkdown} מעל {::nomarkdown}\(F\){:/nomarkdown}. עכשיו אשתמש בדברים הללו כדי ליצור מערכת משוואות לינארית הומוגנית של {::nomarkdown}\(k\){:/nomarkdown} משוואות ב-{::nomarkdown}\(n\){:/nomarkdown} נעלמים - ומכיוון ש-{::nomarkdown}\(k&lt;n\){:/nomarkdown} אז כפי שאמרתי לעיל, יהיה לה פתרון לא טריוויאלי:

{::nomarkdown}\(\sigma_{1}\left(a_{1}\right)x_{1}+\dots+\sigma_{n}\left(a_{1}\right)x_{n}=0\){:/nomarkdown}

{::nomarkdown}\(\vdots\){:/nomarkdown}

{::nomarkdown}\(\sigma_{1}\left(a_{k}\right)x_{1}+\dots+\sigma_{n}\left(a_{k}\right)x_{n}=0\){:/nomarkdown}

בואו נסמן את הפתרון הזה ב-{::nomarkdown}\(\beta_{1},\dots,\beta_{n}\in E\){:/nomarkdown}. אני ארצה להוכיח שמתקיים {::nomarkdown}\(\beta_{1}\sigma_{1}+\dots+\beta_{n}\sigma_{n}=0\){:/nomarkdown}, מה שעומד בסתירה לכך שראינו שאוטומורפיזמים הם בלתי תלויים לינארית.

כדי להראות את השוויון הזה, אני צריך איכשהו להראות ש-

{::nomarkdown}\(\beta_{1}\sigma_{1}\left(\alpha\right)+\dots+\beta_{n}\sigma_{n}\left(\alpha\right)=0\){:/nomarkdown}

<strong>לכל</strong> {::nomarkdown}\(\alpha\in E\){:/nomarkdown}. כרגע יש לי את השוויון הזה, אבל לא לכל {::nomarkdown}\(\alpha\){:/nomarkdown} אלא רק לאיברים {::nomarkdown}\(a_{1},\dots,a_{n}\){:/nomarkdown}. מצד אחד, זה לא מספיק; מצד שני, אלו לא איברים שרירותיים של {::nomarkdown}\(E\){:/nomarkdown} אלא <strong>בסיס</strong> ל-{::nomarkdown}\(E\){:/nomarkdown}, מה שאומר שאני יכול לכתוב

{::nomarkdown}\(\alpha=\lambda_{1}a_{1}+\dots+\lambda_{k}a_{k}\){:/nomarkdown}

עבור {::nomarkdown}\(\lambda_{1},\dots,\lambda_{k}\in F\){:/nomarkdown}. כאן נכנס לתמונה הקלף המנצח שלי: המקדמים הללו לא סתם שייכים ל-{::nomarkdown}\(E\){:/nomarkdown} אלא ל-{::nomarkdown}\(F\){:/nomarkdown}. מי זה {::nomarkdown}\(F\){:/nomarkdown}? אולי הלכנו לאיבוד בסבך המשוואות, אבל {::nomarkdown}\(F\){:/nomarkdown} <strong>הוגדר</strong> בתור מה שכל אברי החבורה {::nomarkdown}\(G\){:/nomarkdown} משמרים. כלומר, {::nomarkdown}\(\sigma_{i}\left(\lambda_{j}\right)=\lambda_{j}\){:/nomarkdown} לכל {::nomarkdown}\(1\le i\le n\){:/nomarkdown} ו-{::nomarkdown}\(1\le j\le k\){:/nomarkdown}.

על כן, אם אכפול את המשוואה הראשונה ב-{::nomarkdown}\(\lambda_{1}\){:/nomarkdown}, את השניה ב-{::nomarkdown}\(\lambda_{2}\){:/nomarkdown} וכן הלאה, אני אקבל:

{::nomarkdown}\(\sigma_{1}\left(\lambda_{1}a_{1}\right)\beta_{1}+\dots+\sigma_{n}\left(\lambda_{1}a_{1}\right)\beta_{n}=0\){:/nomarkdown}

{::nomarkdown}\(\vdots\){:/nomarkdown}

{::nomarkdown}\(\sigma_{1}\left(\lambda_{k}a_{k}\right)\beta_{1}+\dots+\sigma_{n}\left(\lambda_{k}a_{k}\right)\beta_{n}=0\){:/nomarkdown}

ועכשיו נחבר את כל המשוואות יחד, ונקבל את {::nomarkdown}\(\beta_{1}\sigma_{1}\left(\alpha\right)+\dots+\beta_{n}\sigma_{n}\left(\alpha\right)=0\){:/nomarkdown} שלנו. הגענו לסתירה עבור המקרה {::nomarkdown}\(\left[E:F\right]&lt;n\){:/nomarkdown}, תוך שאנו מסתמכים חזק על כך ש-{::nomarkdown}\(F\){:/nomarkdown} הוא השדה ש-{::nomarkdown}\(G\){:/nomarkdown} משמרת וש-{::nomarkdown}\(G\){:/nomarkdown} היא קבוצת אוטומורפיזמים. עם זאת, שימו לב ש<strong>לא</strong> השתמשתי עדיין בכלל בכך ש-{::nomarkdown}\(G\){:/nomarkdown} חבורה.

אם כן, קדימה אל המקרה {::nomarkdown}\(\left[E:F\right]&gt;n\){:/nomarkdown} שאיתו נסיים!

במקרה הזה פחות חשוב לנו מה המימד המדויק {::nomarkdown}\(\left[E:F\right]\){:/nomarkdown} אלא רק שאנחנו מסוגלים למצוא {::nomarkdown}\(n+1\){:/nomarkdown} איברים של {::nomarkdown}\(E\){:/nomarkdown} שהם בלתי תלויים לינארית מעל {::nomarkdown}\(F\){:/nomarkdown}. נסמן אותם {::nomarkdown}\(a_{1},\dots,a_{n+1}\){:/nomarkdown}. נבנה עכשיו מערכת של {::nomarkdown}\(n\){:/nomarkdown} משוואות ב-{::nomarkdown}\(n+1\){:/nomarkdown} נעלמים, בצורה טיפה שונה ממה שהיה קודם:

{::nomarkdown}\(\sigma_{1}\left(a_{1}\right)x_{1}+\dots+\sigma_{1}\left(a_{n+1}\right)x_{n+1}\){:/nomarkdown}

{::nomarkdown}\(\vdots\){:/nomarkdown}

{::nomarkdown}\(\sigma_{n}\left(a_{1}\right)x_{1}+\dots+\sigma_{n}\left(a_{n+1}\right)x_{n+1}\){:/nomarkdown}

קודם כל משוואה הוקדשה ל<strong>איבר בסיס</strong> אחד; הפעם כל משוואה מוקדשת ל<strong>אוטומורפיזם</strong> אחד. כמקודם, המסקנה היא אותה מסקנה: יש לנו {::nomarkdown}\(\beta_{1},\dots,\beta_{n+1}\){:/nomarkdown} מעל {::nomarkdown}\(E\){:/nomarkdown} שהם פתרון לא טריוויאלי של המשוואה. אבל מה הסתירה שננסה להגיע אליה עכשיו?

כמו שהיה במקרה של אי-התלות של האוטומורפיזמים, גם כאן אני רוצה להגיע לסתירה מסוג "נתחיל עם צירוף לינארי עם מספר מינימלי של מקדמים שונה מאפס, ואז נקטין את מספר המקדמים באחד". כאן המקדמים הם ה-{::nomarkdown}\(\beta\){:/nomarkdown}-ים. לא סתם ניקח פתרון אקראי של המשוואה, אלא נבחר אותו בחוכמה כך שמספר ה-{::nomarkdown}\(\beta\){:/nomarkdown}-ים השונים מאפס בפתרון הוא מינימלי. אפשר גם להניח שה-{::nomarkdown}\(\beta\){:/nomarkdown}-ים השונים מאפס הם {::nomarkdown}\(\beta_{1},\dots,\beta_{k}\){:/nomarkdown} (אולי צריך למספר מחדש איברים בשביל זה). וחוץ מזה, אפשר גם לחלק את כל המשוואות ב-{::nomarkdown}\(\beta_{k}\){:/nomarkdown}, אז אפשר להניח ש-{::nomarkdown}\(\beta_{k}=1\){:/nomarkdown}. <strong>וחוץ מזה</strong> (תאמינו לי שהכל הכרחי) אני גם יודע בודאות שאחד מה-{::nomarkdown}\(\beta\){:/nomarkdown}-ים לא שייך ל-{::nomarkdown}\(F\){:/nomarkdown}. קחו שניה ותנסו לחשוב למה. אסביר בשורה הבאה.

מכיוון ש-{::nomarkdown}\(G\){:/nomarkdown} חבורה, היא כוללת את אוטומורפיזם הזהות. אז אחת מהמשוואות שראינו היא פשוט המשוואה {::nomarkdown}\(a_{1}\beta_{1}+\dots+a_{n+1}\beta_{n+1}=0\){:/nomarkdown}. אם כל ה-{::nomarkdown}\(\beta\){:/nomarkdown}-ים היו שייכים ל-{::nomarkdown}\(F\){:/nomarkdown}, אז היינו מקבלים צירוף לינארי לא טריוויאלי של האיברים הבלתי תלויים לינארית {::nomarkdown}\(a_{1},\dots,a_{n+1}\){:/nomarkdown}. המסקנה אם כן היא ש-{::nomarkdown}\(\beta\){:/nomarkdown} כלשהו אינו ב-{::nomarkdown}\(F\){:/nomarkdown}, וזה הדבר המרכזי שנשחק עליו. את ה-{::nomarkdown}\(\beta\){:/nomarkdown} בר המזל נסמן ב-{::nomarkdown}\(\beta_{1}\){:/nomarkdown} - שוב, אפשר למספר מחדש כדי להבטיח את זה.

וכעת, לאקשן.

כל משוואה לעיל הוקדשה לאוטומורפיזם אחר. אחרי שנציב את ה-{::nomarkdown}\(\beta\){:/nomarkdown}-ים, נקבל משוואות שנראות ככה:

{::nomarkdown}\(\sigma_{i}\left(a_{1}\right)\beta_{1}+\dots+\sigma_{i}\left(a_{k-1}\right)\beta_{k-1}+\sigma_{i}\left(a_{k}\right)=0\){:/nomarkdown}

מכיוון ש-{::nomarkdown}\(\beta_{1}\notin F\){:/nomarkdown} הרי ש<strong>בהכרח </strong>קיים {::nomarkdown}\(\sigma\in G\){:/nomarkdown} כך ש-{::nomarkdown}\(\sigma\left(\beta_{1}\right)\ne\beta_{1}\){:/nomarkdown}. אם לא היה קיים {::nomarkdown}\(\sigma\){:/nomarkdown} כזה, אז היינו מקבלים {::nomarkdown}\(\beta_{1}\in F\){:/nomarkdown}. מה נעשה עם {::nomarkdown}\(\sigma\){:/nomarkdown}? פשוט מאוד - נפעיל אותו על כל אחת מהמשוואות, ונשתמש בכך שהוא אוטומורפיזם כדי לקבל

{::nomarkdown}\(\sigma\sigma_{i}\left(a_{1}\right)\sigma\left(\beta_{1}\right)+\dots+\sigma\sigma_{i}\left(a_{k-1}\right)\sigma\left(\beta_{k-1}\right)+\sigma\sigma_{i}\left(a_{k}\right)=0\){:/nomarkdown}

מה קיבלנו פה? קודם הייתה לנו משוואה שאמרה "הנה צירוף לינארי של הפעלת האוטומורפיזם {::nomarkdown}\(\sigma_{i}\){:/nomarkdown} על האיברים {::nomarkdown}\(a_{1},\dots,a_{k}\){:/nomarkdown} ששווה אפס". עכשיו קיבלנו משוואה שאומרת "הנה צירוף לינארי <strong>עם מקדמים אחרים</strong> של הפעלת האוטומורפיזם {::nomarkdown}\(\sigma\sigma_{i}\){:/nomarkdown} על האיברים {::nomarkdown}\(a_{1},\dots,a_{k}\){:/nomarkdown} ששווה אפס". כאן נכנסת לתמונה העובדה ש-{::nomarkdown}\(G\){:/nomarkdown} היא <strong>חבורה</strong>. בחבורה, כפל באיבר כלשהו של כל אברי החבורה בסך הכל מבצע תמורה שלהם. כלומר, {::nomarkdown}\(\left\{ \sigma_{1},\dots,\sigma_{n}\right\} \){:/nomarkdown} היא אותה קבוצה בדיוק כמו {::nomarkdown}\(\left\{ \sigma\sigma_{1},\dots,\sigma\sigma_{n}\right\} \){:/nomarkdown}. מכאן שלכל {::nomarkdown}\(\sigma_{i}\){:/nomarkdown}, קיבלנו בסופו של דבר את המשוואה

{::nomarkdown}\(\sigma_{i}\left(a_{1}\right)\sigma\left(\beta_{1}\right)+\dots+\sigma_{i}\left(a_{k-1}\right)\sigma\left(\beta_{k-1}\right)+\sigma_{i}\left(a_{k}\right)=0\){:/nomarkdown}

נפחית מהמשוואה הזו את המשוואה של {::nomarkdown}\(\sigma_{i}\){:/nomarkdown} שהייתה לנו קודם, כלומר את

{::nomarkdown}\(\sigma_{i}\left(a_{1}\right)\beta_{1}+\dots+\sigma_{i}\left(a_{k-1}\right)\beta_{k-1}+\sigma_{i}\left(a_{k}\right)=0\){:/nomarkdown}

ונקבל:

{::nomarkdown}\(\sigma_{i}\left(a_{1}\right)\left(\beta_{1}-\sigma\left(\beta_{1}\right)\right)+\dots+\sigma_{i}\left(a_{k-1}\right)\left(\beta_{k-1}-\sigma\left(\beta_{k-1}\right)\right)=0\){:/nomarkdown}

שימו לב שהחיסור <strong>העלים את האיבר האחרון</strong> בסכום; זאת מכיוון שהאיבר האחרון הזה היה עבור {::nomarkdown}\(\beta_{k}=1\){:/nomarkdown}, וזה איבר ש-{::nomarkdown}\(\sigma\){:/nomarkdown} <strong>בודאות כן משמרת</strong>. באותו אופן, בחרנו את {::nomarkdown}\(\sigma\){:/nomarkdown} מלכתחילה כדי ש- {::nomarkdown}\(\beta_{1}\){:/nomarkdown} יהיה איבר ש-{::nomarkdown}\(\sigma\){:/nomarkdown} <strong>בודאות לא משמרת</strong>, ולכן {::nomarkdown}\(\beta_{1}\ne\sigma\left(\beta_{1}\right)\){:/nomarkdown}, כלומר {::nomarkdown}\(\beta_{1}-\sigma\left(\beta_{1}\right)\ne0\){:/nomarkdown}, כלומר המקדם הראשון בצירוף הלינארי שקיבלנו אינו אפס.

מה קרה? קיבלנו <strong>פתרון חדש</strong> למערכת המשוואות שממנה התחלנו. פתרון שבו יש רק {::nomarkdown}\(k-1\){:/nomarkdown} איברים שונים מאפס, בסתירה להנחה שלנו ש-{::nomarkdown}\(k\){:/nomarkdown} הוא המספר המינימלי של איברים שונים מאפס בפתרון לא טריוויאלי <strong>כלשהו</strong> למערכת המשוואות הזו. זה מסיים את ההוכחה.

האם זה היה טכני? כן, במידה מסויימת.

האם זה היה קשה? כן, במידה מסויימת, אם כי כל המעברים פה פשוטים למדי.

האם זה עוזר לנו להבין <strong>למה </strong>תורת גלואה עובדת? כן, במידה מסויימת: כל המרכיבים החשובים של תורת גלואה (בסיס של שדה אחד מעל אחר, חבורת אוטומורפיזמים, שימור של השדה הקטן) באים כאן לידי ביטוי. לכן אני חושב שלמרות שההוכחה היא טכנית למדי, היא עדיין אלגנטית ויפה מאוד, ויש חשיבות גדולה ל"להרגיש אותה בידיים" כדי להבין מה בעצם הולך בתורת גלואה.
