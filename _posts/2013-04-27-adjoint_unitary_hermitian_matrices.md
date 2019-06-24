---
id: 2515
title: "מטריצות צמודות, הרמיטיות, אוניטריות"
date: 2013-04-27 18:43:39
layout: post
categories: 
  - אלגברה לינארית
tags: 
  - אלגברה לינארית
  - מטריצות אוניטריות
  - מטריצות הרמיטיות
  - מרחבי מכפלה פנימית
---
אולי התוצאה המעניינת ביותר באלגברה לינארית בסיסית היא הקשר שיש בין טרנספורמציות לינאריות $latex T:V\to V$ המוגדרות על מרחב וקטורי ממימד סופי $latex V$ ובין מטריצות. כזכור, מרגע שבו אנחנו קובעים בסיס $latex B$ ל-$latex V$, אוטומטית נובעת מכך התאמה חד-חד-ערכית ועל בין אוסף הטרנספורמציות הלינאריות $latex T:V\to V$ (לפעמים אכתוב "אופרטור לינארי" במקום; המילה "אופרטור" רומזת שמדובר על טרנספורמציה ממרחב לעצמו) ובין המטריצות מסדר $latex n\times n$ מעל אותו שדה כמו $latex V$, כאשר $latex n$ הוא מימד המרחב $latex V$. הרעיון בהתאמה הזו הוא שמתקיים השוויון $latex \left[T\right]_{B}\left[v\right]_{B}=\left[T\left(v\right)\right]_{B}$ - במילים, הכפלת המטריצה שמייצגת את האופרטור $latex T$ בוקטור הקואורדינטות שמייצג את הוקטור $latex v$ על פי הבסיס $latex B$ מחזירה את וקטור הקואורדינטות של $latex T\left(v\right)$ על פי $latex B$. עבור בסיסים שונים, ל-$latex T$ יהיו מטריצות מייצגות שונות, ואחד מהדברים שעוסקים בהם באלגברה לינארית הוא השאלה הבאה: בהינתן $latex T$, אילו בסיסים קיימים שבהם $latex \left[T\right]_{B}$ היא פשוטה במיוחד (למשל, אלכסונית)?

על כל זה <a href="http://www.gadial.net/2011/10/27/coordinates_transformations_matrices/">כבר דיברתי בעבר</a>. ההקשר הנוכחי שלנו הוא מרחבים וקטוריים עם מבנה נוסף - מרחבי מכפלה פנימית. בפרט, אנחנו רוצים להבין איך המושג של <strong>אופרטור צמוד</strong> בא לידי ביטוי במטריצות. <a href="http://www.gadial.net/2012/04/29/inner_product_space_adjoint/">כזכור</a>, אם $latex T$ הוא אופרטור אז קיים אופרטור יחיד $latex T^{*}$ כך שמתקיים $latex \left\langle T\left(v\right),u\right\rangle =\left\langle v,T^{*}\left(u\right)\right\rangle $ לכל $latex v,u\in V$. הוכחת הקיום של $latex T^{*}$ היא אמנם קונסטרוקטיבית, במובן זה שאפשר להבין ממנה איך למצוא את $latex T^{*}$, אבל בדרך עקיפה וסבוכה; יהיה הרבה יותר פשוט לקבוע בסיס כלשהו ולמצוא ל-$latex T^{*}$ מטריצה מייצגת על פי הבסיס הזה בהינתן המטריצה המייצגת של $latex T$. אלא שכפי שנראה בקרוב, כבר אי אפשר לקחת "סתם" בסיס - כדי שמציאת המטריצה של $latex T^{*}$ מתוך המטריצה של $latex T$ תהיה פשוטה, אנחנו צריכים לקחת בסיס <strong>אורתונורמלי</strong> למרחב. למזלנו מובטח לנו שתמיד יש כזה, אבל מציאה של בסיס כזה עשויה להיות כרוכה לפעמים בחישובים לא נעימים.

אם כן, יהא $latex B=\left\{ b_{1},\dots,b_{n}\right\} $ בסיס אורתונורמלי ל-$latex V$ותהא $latex T$ טרנספורמציה כלשהי. נסמן $latex A=\left[T\right]_{B}$. איך נראית $latex A$? העמודה ה-$latex j$-ית של $latex A$ היא בעצם וקטור הקואורדינטות, לפי $latex B$, של $latex T\left(b_{j}\right)$ (למה? ובכן, צריך להוכיח את זה). עכשיו, עבור בסיסים אורתונורמליים אנחנו יודעים למצוא בקלות את הקואורדינטות של וקטור $latex v$ לפי הבסיס $latex B$: הקואורדינטה שמתאימה לאיבר הבסיס $latex b_{i}$ היא פשוט $latex \left\langle v,b_{i}\right\rangle $. לכן במקרה שלנו, $latex A_{ij}=\left\langle T\left(b_{j}\right),b_{i}\right\rangle $ (הכניסה בשורה ה-$latex i$ והעמודה ה-$latex j$ במטריצה היא המכפלה הפנימית $latex \left\langle T\left(b_{j}\right),b_{i}\right\rangle $).

באופן דומה, אם $latex A^{*}$ היא המטריצה המייצגת של $latex T^{*}$ אז יתקיים עבורה $latex A_{ij}^{*}=\left\langle T^{*}\left(b_{j}\right),b_{i}\right\rangle $. עכשיו אעשה תעלול קטן ופשוט אחליף את האינדקסים: $latex A_{ji}^{*}=\left\langle T^{*}\left(b_{i}\right),b_{j}\right\rangle $. כעת שימו לב לזה:

$latex A_{ij}=\left\langle T\left(b_{j}\right),b_{i}\right\rangle =\left\langle b_{j},T^{*}\left(b_{i}\right)\right\rangle =\overline{\left\langle T^{*}\left(b_{i}\right),b_{j}\right\rangle }=\overline{A_{ji}^{*}}$

מה הלך פה? השתמשתי במעברים פה בכך ש-$latex T^{*}$ צמודה ל-$latex T$, ובכך שמכפלה פנימית מקיימת <strong>הרמיטיות</strong> - אפשר להחליף את הסדר של שני המוכפלים, במחיר של הצמדה (במשמעות של "צמוד מרוכב") של הערך של המכפלה (כבר <a href="http://www.gadial.net/2012/02/06/inner_products_intro/">הסברתי בעבר</a> למה ההצמדה הזו הכרחית). הגענו למסקנה ש-$latex A^{*}$ מתקבלת מ-$latex A$ על ידי הצמדה (מרוכבת) ושחלוף של $latex A$ (הפיכת השורה ה-$latex i$ של $latex A$ לעמודה ה-$latex i$ של $latex A^{*}$). לדוגמה, אם

$latex A=\left[\begin{array}{cc}1 &amp; -3\\5-i &amp; i\end{array}\right]$

אז

$latex A^{*}=\left[\begin{array}{cc}1 &amp; 5+i\\-3 &amp; -i\end{array}\right]$

זה מוביל אותנו להגדרה - אם $latex A$ היא מטריצה ריבועית, אז $latex A^{*}$ היא המטריצה שמתקבלת משחלוף והצמדה של $latex A$ והיא נקראת <strong>המטריצה הצמודה</strong> של $latex A$. זה זמן טוב להזכיר עוד מטריצה שגם היא נקראת לפעמים "המטריצה הצמודה" והתנגשות השמות הזו היא אסון - מטריצה שקראתי לה <strong>המטריצה המצורפת</strong> ל-$latex A$, שמסומנת בתור $latex \mbox{adj}A$ ו<a href="http://www.gadial.net/2011/11/21/matrix_revolutions/">תיארתי בעבר</a> בבלוג.

עכשיו, דיברנו על אופרטורים צמודים לעצמם ועל אופרטורים אוניטריים, וההגדרות עוברות באופן חלק למטריצות: מטריצה שמקיימת $latex A^{*}=A$ נקראת <strong>מטריצה צמודה לעצמה</strong> או <strong>מטריצה הרמיטית</strong>, ואילו מטריצה שמקיימת $latex A^{-1}=A^{*}$ נקראת <strong>מטריצה אוניטרית</strong>. בואו ננסה להבין איך הן נראות.

בתור התחלה, אם $latex A^{*}=A$ עבור מטריצה שכל הכניסות בה ממשיות, פירוש הדבר הוא שהמטריצה <strong>סימטרית</strong>. כי היא שווה לשחלוף של עצמה. עבור כניסות מרוכבות המצב קצת יותר מסובך. הנה דוגמה למטריצה הרמיטית:

$latex \left[\begin{array}{cc}1 &amp; -i\\i &amp; 1\end{array}\right]$

כמו שאתם רואים, היא לא בדיוק סימטרית. אם נפרק אותה לסכום של שתי מטריצות שאחת מהן כוללת את כל הרכיבים הממשיים והשניה את כל הרכיבים המדומים נקבל שהמטריצה הממשית היא סימטרית, בעוד שהמטריצה המדומה היא אנטי-סימטרית (מטריצה אנטי סימטרית היא מטריצה $latex A$ כך ש-$latex A^{t}=-A$). בפרט, האיברים על האלכסון הראשי של המטריצה שווים להצמדה של עצמם ולכן הם חייבים להיות מספרים ממשיים "טהורים". זה יהיה חשוב בהמשך.

בואו נעבור לדבר על מטריצות אוניטריות. ראשית כל אני רוצה להבין מה הדטרמיננטה של מטריצה כזו יכולה להיות. אם $latex A^{-1}=A^{*}$ אז $latex A\cdot A^{*}=I$ ולכן $latex 1=\left\|I\right\|=\left\|AA^{*}\right\|=\left\|A\right\|\left\|A^{*}\right\|$. ומהי $latex \left\|A^{*}\right\|$? תחושת הבטן היא ש-$latex \left\|A^{*}\right\|=\overline{\left\|A\right\|}$, כלומר הדטרמיננטה של הצמוד היא ההצמדה המרוכבת של הדטרמיננטה של $latex A$. לא קשה לראות את זה ישירות מההגדרה הפורמלית של דטרמיננטה, למשל בתור סכום של מכפלות. זכרו שלכל מספר מרוכב $latex z$ מתקיים $latex z\cdot\overline{z}=\left\|z\right\|^{2}$, ולכן המסקנה היא ש-$latex \left\|\det A\right\|^{2}=1$ (עברתי לסמן דטרמיננטה ב-$latex \det$ מסיבות ברורות). מכאן שהדטרמיננטה של $latex A$ חייבת להיות 1 בערכה המוחלט (מכיוון שהיא עשויה להיות מספר מרוכב זה עדיין נותן לה לא מעט אפשרויות).

עכשיו בואו נעבור לדבר על מקרה קונקרטי יותר. ראשית כל, הבה וניזכר באופן כללי מהי ההופכית של מטריצה מסדר $latex 2\times2$ כלשהי. אם

$latex A=\left[\begin{array}{cc}a &amp; b\\c &amp; d\end{array}\right]$

אז ההופכית שלה היא

$latex A^{-1}=\frac{1}{\left\|A\right\|}\left[\begin{array}{cc}d &amp; -b\\-c &amp; a\end{array}\right]$

לא מאמינים? פשוט תכפילו ותראו... הנוסחה הזו היא מקרה פרטי של המשפט לפיו $latex A^{-1}=\frac{\mbox{adj}A}{\left\|A\right\|}$ שהראיתי בעבר. עכשיו, באופן כללי מתקיים

$latex A^{*}=\left[\begin{array}{cc}\overline{a} &amp; \overline{c}\\\overline{b} &amp; \overline{d}\end{array}\right]$

כך שאם מתקיים $latex A^{-1}=A^{*}$ אנחנו יכולים להסיק את $latex c,d$ בתור פונקציות של $latex a,b$:

$latex c=-\left\|A\right\|\overline{b}$

$latex d=\left\|A\right\|\overline{a}$

מכיוון ש-$latex \left\|A\right\|=ad-bc$ אז בפרט נקבל $latex \left\|A\right\|=\left\|A\right\|a\overline{a}+\left\|A\right\|b\overline{b}=\left\|A\right\|\left(\left\|a\right\|^{2}+\left\|b\right\|^{2}\right)$, כלומר $latex \left\|a\right\|^{2}+\left\|b\right\|^{2}=1$.

כעת, אפשר לכתוב קונקרטית $latex \left\|A\right\|=e^{i\theta}$ עבור $latex 0\le\theta\le2\pi$ - זו דרך ההצגה הקוטבית של מספר מרוכב עם ערך מוחלט 1. לכן נקבל שמטריצה $latex A$ מסדר $latex 2\times2$ היא אוניטרית אם ורק אם היא מהצורה

$latex \left[\begin{array}{cc}a &amp; b\\-e^{i\theta}\overline{b} &amp; e^{i\theta}\overline{a}\end{array}\right]$

כך ש-$latex \left\|a\right\|^{2}+\left\|b\right\|^{2}=1$.

במקרה של מטריצה עם מקדמים ממשיים העסק הופך לפשוט מאוד: במקרה הזה $latex \overline{a}=a,\overline{b}=b$ ואילו $latex e^{i\theta}$ יכול להיות רק 1 או $latex -1$. לכן נקבל שיש בדיוק שני סוגים של מטריצות אוניטריות ממשיות:

$latex \left[\begin{array}{cc}a &amp; b\\-b &amp; a\end{array}\right]$

או

$latex \left[\begin{array}{cc}a &amp; b\\b &amp; -a\end{array}\right]$

בשני המקרים חייב להתקיים $latex a^{2}+b^{2}=1$.

עכשיו, כל מטריצה כזו מגדירה אופרטור לינארי על $latex \mathbb{R}^{2}$. מה האופרטורים הללו עושים? ראשית כל, השוויון הנחמד $latex a^{2}+b^{2}=1$ מזכיר לי את הזהות המתמטית $latex \sin^{2}\theta+\cos^{2}\theta=1$, אז בואו נסמן $latex a=\cos\theta$ ו-$latex b=-\sin\theta$ (שימו לב שצריך <strong>להוכיח</strong> שזה אפשרי - אשאיר זאת לכם). אז מטריצה מהסוג הראשון היא מהצורה

$latex \left[\begin{array}{cc}\cos\theta &amp; -\sin\theta\\\sin\theta &amp; \cos\theta\end{array}\right]$

יש סיכוי טוב שהמטריצה הזו מוכרת לכם, אבל במקרה שלא, בואו נבין מה המשמעות של כפל בה. מספיק להבין איך היא פועלת על אברי הבסיס הסטנדרטי:

$latex \left[\begin{array}{cc}\cos\theta &amp; -\sin\theta\\\sin\theta &amp; \cos\theta\end{array}\right]\left[\begin{array}{c}1\\0\end{array}\right]=\left[\begin{array}{c}\cos\theta\\\sin\theta\end{array}\right]$

$latex \left[\begin{array}{cc}\cos\theta &amp; -\sin\theta\\\sin\theta &amp; \cos\theta\end{array}\right]\left[\begin{array}{c}0\\1\end{array}\right]=\left[\begin{array}{c}-\sin\theta\\\cos\theta\end{array}\right]$

אני מתעצל לצייר את זה, אבל ציירו! השוויון הראשון אומר שהוקטור האופקי שפונה "ימינה" (לצד החיובי של ציר $latex x$) עובר לוקטור שיוצר זווית של $latex \theta$ <strong>מעל</strong> הכיוון החיובי של ציר $latex x$. הוקטור שפונה "למעלה" עובר לוקטור שיוצר זווית $latex \theta$ <strong>משמאל</strong> לכיוון החיובי של ציר $latex y$, ובסך הכל המטריצה <strong>מסובבת</strong> את שני הוקטורים הללו בזווית $latex \theta$ <strong>נגד כיוון השעון</strong>. מכיוון שהיא עושה זאת לוקטורים של בסיס כלשהו למרחב, זה מה שהיא עושה לכל וקטור - זוהי מטריצת סיבוב בזווית $latex \theta$ (ובחרתי את $latex a$ להיות $latex \cos\theta$ ואת $latex b$ להיות $latex -\sin\theta$ כדי לקבל סיבוב במובן שאנחנו רגילים אליו - אם הייתי בוחר, למשל $latex a=\sin\theta$ ו-$latex b=\cos\theta$ עדיין הייתי מקבל סיבוב, אבל חשבו מה תהיה הזווית ומה יהיה הכיוון של הסיבוב).

מי שעדיין לא משוכנע יכול לכתוב במפורש מה המטריצה עושה על וקטור כללי, אבל כזה שנכתב בצורה קוטבית, של רדיוס וזווית עם הכיוון החיובי של ציר $latex x$:

$latex \left[\begin{array}{cc}\cos\theta &amp; -\sin\theta\\\sin\theta &amp; \cos\theta\end{array}\right]\left[\begin{array}{c}r\cos t\\r\sin t\end{array}\right]=\left[\begin{array}{c}r\cos\theta\cos t-r\sin\theta\sin t\\r\sin\theta\cos t+r\sin t\cos\theta\end{array}\right]=\left[\begin{array}{c}r\cos\left(t+\theta\right)\\r\sin\left(t+\theta\right)\end{array}\right]$

כאשר המעבר האחרון נובע מהזהויות הטריגונומטריות הסטנדרטיות על סכום זוויות, וכעת אפשר לראות בבירור שהכפל במטריצה סובב את הוקטור בזווית של $latex \theta$.

אם כן, הבנו מה עושה <strong>כל</strong> מטריצה אוניטרית מהצורה $latex \left[\begin{array}{cc}a &amp; b\\-b &amp; a\end{array}\right]$. מה עם מטריצות מהצורה השניה? יש כמה דרכים להבין מה הן עושות, אבל בואו נתחיל מדרך שבה כדאי לנקוט תמיד עם מטריצות לא ברורות - ננסה ללכסן. המטריצה שלנו, כזכור, היא מהצורה

$latex \left[\begin{array}{cc}a &amp; b\\b &amp; -a\end{array}\right]$

כאשר $latex a^{2}+b^{2}=1$. הפולינום האופייני, אם כן, הוא

$latex \left(a-x\right)\left(-a-x\right)-b^{2}=x^{2}-a^{2}-b^{2}=x^{2}-1$

והשורשים שלו הם 1 ו-$latex -1$. מה אומר ערך עצמי 1? שיש תת-מרחב ממימד 1 - קו ישר העובר דרך הראשית - שהאופרטור <strong>מקבע</strong> - משאיר במקום ללא שינוי. ומה זה ערך עצמי $latex -1$? זהו קו ישר שהאופרטור מעביר כל נקודה בו אל הנגדי שלה - הנקודה האחרת על אותו קו שמרחקה מהראשית זהה. נסו לצייר את זה ותראו (אני מקווה) חיש קל שהאופרטור הזה הוא אופרטור של <strong>שיקוף</strong> ביחס לציר שהוא הישר שהאופרטור מקבע. בואו נמצא אותו על ידי כך שנמצא וקטור עצמי שמתאים לערך העצמי 1. לשם כך צריך לפתור את מערכת המשוואות הלינארית

$latex \left[\begin{array}{cc}a-1 &amp; b\\b &amp; -a-1\end{array}\right]\left[\begin{array}{c}x\\y\end{array}\right]=\left[\begin{array}{c}0\\0\end{array}\right]$

נניח ש-$latex b\ne0$ ונפתור אותה עם דירוג סטנדרטי, תוך שימוש בכך ש-$latex a^{2}+b^{2}=1$:

$latex \left[\begin{array}{cc}a-1 &amp; b\\b &amp; -a-1\end{array}\right]\to\left[\begin{array}{cc}-1 &amp; b+\frac{a\left(a+1\right)}{b}\\b &amp; -a-1\end{array}\right]\to\left[\begin{array}{cc}1 &amp; -\frac{1+a}{b}\\b &amp; -\left(1+a\right)\end{array}\right]\to\left[\begin{array}{cc}1 &amp; -\frac{1+a}{b}\\0 &amp; 0\end{array}\right]$

מכאן נקבל שכל פתרון של המשוואה הוא מהצורה $latex \left(\frac{1+a}{b}t,t\right)$. אם נבחר, לצורך נוחות, $latex t=b$ נקבל את היוצר $latex \left(1+a,b\right)$. בדקו ישירות כדי לראות שהוא אכן וקטור עצמי!

אם תחזרו ל<a href="http://www.gadial.net/2011/11/29/eigenvalues_intro/">אחד הפוסטים המוקדמים</a> שלי על אלגברה לינארית תראו שכבר חישבנו פעם במפורש את המטריצה עבור אופרטור שיקוף, אבל הגענו לתוצאה שנראית מפחידה בהרבה. מטריצת השיקוף דרך ציר שנפרש על ידי $latex \left(x,y\right)$ הייתה

$latex \frac{1}{x^{2}+y^{2}}\left[\begin{array}{cc}x^{2}-y^{2} &amp; 2xy\\2xy &amp; y^{2}-x^{2}\end{array}\right]$

ומה שראינו עכשיו הוא שאם $latex \left(x-1\right)^{2}+y^{2}=1$ אז המטריצה שמתקבלת היא מהצורה

$latex \left[\begin{array}{cc}x-1 &amp; y\\y &amp; 1-x\end{array}\right]$

שהיא נחמדה יותר, אבל לא תמיד $latex \left(x-1\right)^{2}+y^{2}=1$ ולא פשוט למצוא $latex \left(x,y\right)$ שמקיימים את זה אם נתון לנו הישר שאנו רוצים לשקף דרכו.

בואו ננסה להבין את האופרטור הזה בצורה נוספת, כפי שעשינו עבור סיבוב - לכתוב הכל בצורה טריגונומטרית ולראות מה מקבלים:

$latex \left[\begin{array}{cc}\cos\theta &amp; \sin\theta\\\sin\theta &amp; -\cos\theta\end{array}\right]\left[\begin{array}{c}r\cos t\\r\sin t\end{array}\right]=\left[\begin{array}{c}r\cos\theta\cos t+r\sin\theta\sin t\\r\sin\theta\cos t-r\sin t\cos\theta\end{array}\right]=\left[\begin{array}{c}r\cos\left(\theta-t\right)\\r\sin\left(\theta-t\right)\end{array}\right]$

זה מזכיר סיבוב, אבל זה לא סיבוב בגלל שהזווית של הוקטור המקורי, $latex t$, הפכה למינוס $latex t$. קצת חשבון מראה שעבור $latex t=\frac{\theta}{2}$ נקבל נקודות שבת של האופרטור, ולכן הפעולה שהאופרטור מבצע היא שיקוף ביחס לציר שהזווית שלו עם הכיוון החיובי של ציר $latex x$ היא $latex \frac{\theta}{2}$.

כל החישובים הללו מראים את שלל הדרכים שבהן ניתן להגיע למסקנה הבאה: האופרטורים הלינאריים היחידים על $latex \mathbb{R}^{2}$ שמשמרים זווית ואורך הם סיבובים ושיקופים. זו לא תוצאה מובנת מאליה, ולדעתי זה יפה למדי איך שאפשר להגיע אליה בהתבסס על מה שאנחנו כבר יודעים על טרנספורמציות אוניטריות וקצת חשבונות.

אחרי שסיימנו עם המשחקים והדוגמאות מגיעה מאליה השאלה - מה הלאה? מה האתגר האמיתי שלנו? התשובה היא שהגיע הזמן לנסות להבין איך המושג של לכסינות של מטריצות משתלב עם מרחבי מכפלה פנימית, ובניסוח קונקרטי - בהינתן אופרטור לינארי מעל מרחב מכפלה פנימית, מתי קיים למרחב בסיס <strong>אורתונורמלי</strong> שבו האופרטור מיוצג על ידי מטריצה ריבועית, כלומר מתי קיים למרחב בסיס אורתונורמלי שמורכב כולו מוקטורים עצמיים של האופרטור? בשאלה הזו נעסוק בפוסט הבא בנושא.
