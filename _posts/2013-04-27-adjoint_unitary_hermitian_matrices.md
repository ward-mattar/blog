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
אולי התוצאה המעניינת ביותר באלגברה לינארית בסיסית היא הקשר שיש בין טרנספורמציות לינאריות {::nomarkdown}\( T:V\to V\){:/nomarkdown} המוגדרות על מרחב וקטורי ממימד סופי {::nomarkdown}\( V\){:/nomarkdown} ובין מטריצות. כזכור, מרגע שבו אנחנו קובעים בסיס {::nomarkdown}\( B\){:/nomarkdown} ל-{::nomarkdown}\( V\){:/nomarkdown}, אוטומטית נובעת מכך התאמה חד-חד-ערכית ועל בין אוסף הטרנספורמציות הלינאריות {::nomarkdown}\( T:V\to V\){:/nomarkdown} (לפעמים אכתוב "אופרטור לינארי" במקום; המילה "אופרטור" רומזת שמדובר על טרנספורמציה ממרחב לעצמו) ובין המטריצות מסדר {::nomarkdown}\( n\times n\){:/nomarkdown} מעל אותו שדה כמו {::nomarkdown}\( V\){:/nomarkdown}, כאשר {::nomarkdown}\( n\){:/nomarkdown} הוא מימד המרחב {::nomarkdown}\( V\){:/nomarkdown}. הרעיון בהתאמה הזו הוא שמתקיים השוויון {::nomarkdown}\( \left[T\right]_{B}\left[v\right]_{B}=\left[T\left(v\right)\right]_{B}\){:/nomarkdown} - במילים, הכפלת המטריצה שמייצגת את האופרטור {::nomarkdown}\( T\){:/nomarkdown} בוקטור הקואורדינטות שמייצג את הוקטור {::nomarkdown}\( v\){:/nomarkdown} על פי הבסיס {::nomarkdown}\( B\){:/nomarkdown} מחזירה את וקטור הקואורדינטות של {::nomarkdown}\( T\left(v\right)\){:/nomarkdown} על פי {::nomarkdown}\( B\){:/nomarkdown}. עבור בסיסים שונים, ל-{::nomarkdown}\( T\){:/nomarkdown} יהיו מטריצות מייצגות שונות, ואחד מהדברים שעוסקים בהם באלגברה לינארית הוא השאלה הבאה: בהינתן {::nomarkdown}\( T\){:/nomarkdown}, אילו בסיסים קיימים שבהם {::nomarkdown}\( \left[T\right]_{B}\){:/nomarkdown} היא פשוטה במיוחד (למשל, אלכסונית)?

על כל זה <a href="http://www.gadial.net/2011/10/27/coordinates_transformations_matrices/">כבר דיברתי בעבר</a>. ההקשר הנוכחי שלנו הוא מרחבים וקטוריים עם מבנה נוסף - מרחבי מכפלה פנימית. בפרט, אנחנו רוצים להבין איך המושג של <strong>אופרטור צמוד</strong> בא לידי ביטוי במטריצות. <a href="http://www.gadial.net/2012/04/29/inner_product_space_adjoint/">כזכור</a>, אם {::nomarkdown}\( T\){:/nomarkdown} הוא אופרטור אז קיים אופרטור יחיד {::nomarkdown}\( T^{*}\){:/nomarkdown} כך שמתקיים {::nomarkdown}\( \left\langle T\left(v\right),u\right\rangle =\left\langle v,T^{*}\left(u\right)\right\rangle \){:/nomarkdown} לכל {::nomarkdown}\( v,u\in V\){:/nomarkdown}. הוכחת הקיום של {::nomarkdown}\( T^{*}\){:/nomarkdown} היא אמנם קונסטרוקטיבית, במובן זה שאפשר להבין ממנה איך למצוא את {::nomarkdown}\( T^{*}\){:/nomarkdown}, אבל בדרך עקיפה וסבוכה; יהיה הרבה יותר פשוט לקבוע בסיס כלשהו ולמצוא ל-{::nomarkdown}\( T^{*}\){:/nomarkdown} מטריצה מייצגת על פי הבסיס הזה בהינתן המטריצה המייצגת של {::nomarkdown}\( T\){:/nomarkdown}. אלא שכפי שנראה בקרוב, כבר אי אפשר לקחת "סתם" בסיס - כדי שמציאת המטריצה של {::nomarkdown}\( T^{*}\){:/nomarkdown} מתוך המטריצה של {::nomarkdown}\( T\){:/nomarkdown} תהיה פשוטה, אנחנו צריכים לקחת בסיס <strong>אורתונורמלי</strong> למרחב. למזלנו מובטח לנו שתמיד יש כזה, אבל מציאה של בסיס כזה עשויה להיות כרוכה לפעמים בחישובים לא נעימים.

אם כן, יהא {::nomarkdown}\( B=\left\{ b_{1},\dots,b_{n}\right\} \){:/nomarkdown} בסיס אורתונורמלי ל-{::nomarkdown}\( V\){:/nomarkdown}ותהא {::nomarkdown}\( T\){:/nomarkdown} טרנספורמציה כלשהי. נסמן {::nomarkdown}\( A=\left[T\right]_{B}\){:/nomarkdown}. איך נראית {::nomarkdown}\( A\){:/nomarkdown}? העמודה ה-{::nomarkdown}\( j\){:/nomarkdown}-ית של {::nomarkdown}\( A\){:/nomarkdown} היא בעצם וקטור הקואורדינטות, לפי {::nomarkdown}\( B\){:/nomarkdown}, של {::nomarkdown}\( T\left(b_{j}\right)\){:/nomarkdown} (למה? ובכן, צריך להוכיח את זה). עכשיו, עבור בסיסים אורתונורמליים אנחנו יודעים למצוא בקלות את הקואורדינטות של וקטור {::nomarkdown}\( v\){:/nomarkdown} לפי הבסיס {::nomarkdown}\( B\){:/nomarkdown}: הקואורדינטה שמתאימה לאיבר הבסיס {::nomarkdown}\( b_{i}\){:/nomarkdown} היא פשוט {::nomarkdown}\( \left\langle v,b_{i}\right\rangle \){:/nomarkdown}. לכן במקרה שלנו, {::nomarkdown}\( A_{ij}=\left\langle T\left(b_{j}\right),b_{i}\right\rangle \){:/nomarkdown} (הכניסה בשורה ה-{::nomarkdown}\( i\){:/nomarkdown} והעמודה ה-{::nomarkdown}\( j\){:/nomarkdown} במטריצה היא המכפלה הפנימית {::nomarkdown}\( \left\langle T\left(b_{j}\right),b_{i}\right\rangle \){:/nomarkdown}).

באופן דומה, אם {::nomarkdown}\( A^{*}\){:/nomarkdown} היא המטריצה המייצגת של {::nomarkdown}\( T^{*}\){:/nomarkdown} אז יתקיים עבורה {::nomarkdown}\( A_{ij}^{*}=\left\langle T^{*}\left(b_{j}\right),b_{i}\right\rangle \){:/nomarkdown}. עכשיו אעשה תעלול קטן ופשוט אחליף את האינדקסים: {::nomarkdown}\( A_{ji}^{*}=\left\langle T^{*}\left(b_{i}\right),b_{j}\right\rangle \){:/nomarkdown}. כעת שימו לב לזה:

{::nomarkdown}\( A_{ij}=\left\langle T\left(b_{j}\right),b_{i}\right\rangle =\left\langle b_{j},T^{*}\left(b_{i}\right)\right\rangle =\overline{\left\langle T^{*}\left(b_{i}\right),b_{j}\right\rangle }=\overline{A_{ji}^{*}}\){:/nomarkdown}

מה הלך פה? השתמשתי במעברים פה בכך ש-{::nomarkdown}\( T^{*}\){:/nomarkdown} צמודה ל-{::nomarkdown}\( T\){:/nomarkdown}, ובכך שמכפלה פנימית מקיימת <strong>הרמיטיות</strong> - אפשר להחליף את הסדר של שני המוכפלים, במחיר של הצמדה (במשמעות של "צמוד מרוכב") של הערך של המכפלה (כבר <a href="http://www.gadial.net/2012/02/06/inner_products_intro/">הסברתי בעבר</a> למה ההצמדה הזו הכרחית). הגענו למסקנה ש-{::nomarkdown}\( A^{*}\){:/nomarkdown} מתקבלת מ-{::nomarkdown}\( A\){:/nomarkdown} על ידי הצמדה (מרוכבת) ושחלוף של {::nomarkdown}\( A\){:/nomarkdown} (הפיכת השורה ה-{::nomarkdown}\( i\){:/nomarkdown} של {::nomarkdown}\( A\){:/nomarkdown} לעמודה ה-{::nomarkdown}\( i\){:/nomarkdown} של {::nomarkdown}\( A^{*}\){:/nomarkdown}). לדוגמה, אם

{::nomarkdown}\( A=\left[\begin{array}{cc}1 &amp; -3\\5-i &amp; i\end{array}\right]\){:/nomarkdown}

אז

{::nomarkdown}\( A^{*}=\left[\begin{array}{cc}1 &amp; 5+i\\-3 &amp; -i\end{array}\right]\){:/nomarkdown}

זה מוביל אותנו להגדרה - אם {::nomarkdown}\( A\){:/nomarkdown} היא מטריצה ריבועית, אז {::nomarkdown}\( A^{*}\){:/nomarkdown} היא המטריצה שמתקבלת משחלוף והצמדה של {::nomarkdown}\( A\){:/nomarkdown} והיא נקראת <strong>המטריצה הצמודה</strong> של {::nomarkdown}\( A\){:/nomarkdown}. זה זמן טוב להזכיר עוד מטריצה שגם היא נקראת לפעמים "המטריצה הצמודה" והתנגשות השמות הזו היא אסון - מטריצה שקראתי לה <strong>המטריצה המצורפת</strong> ל-{::nomarkdown}\( A\){:/nomarkdown}, שמסומנת בתור {::nomarkdown}\( \mbox{adj}A\){:/nomarkdown} ו<a href="http://www.gadial.net/2011/11/21/matrix_revolutions/">תיארתי בעבר</a> בבלוג.

עכשיו, דיברנו על אופרטורים צמודים לעצמם ועל אופרטורים אוניטריים, וההגדרות עוברות באופן חלק למטריצות: מטריצה שמקיימת {::nomarkdown}\( A^{*}=A\){:/nomarkdown} נקראת <strong>מטריצה צמודה לעצמה</strong> או <strong>מטריצה הרמיטית</strong>, ואילו מטריצה שמקיימת {::nomarkdown}\( A^{-1}=A^{*}\){:/nomarkdown} נקראת <strong>מטריצה אוניטרית</strong>. בואו ננסה להבין איך הן נראות.

בתור התחלה, אם {::nomarkdown}\( A^{*}=A\){:/nomarkdown} עבור מטריצה שכל הכניסות בה ממשיות, פירוש הדבר הוא שהמטריצה <strong>סימטרית</strong>. כי היא שווה לשחלוף של עצמה. עבור כניסות מרוכבות המצב קצת יותר מסובך. הנה דוגמה למטריצה הרמיטית:

{::nomarkdown}\( \left[\begin{array}{cc}1 &amp; -i\\i &amp; 1\end{array}\right]\){:/nomarkdown}

כמו שאתם רואים, היא לא בדיוק סימטרית. אם נפרק אותה לסכום של שתי מטריצות שאחת מהן כוללת את כל הרכיבים הממשיים והשניה את כל הרכיבים המדומים נקבל שהמטריצה הממשית היא סימטרית, בעוד שהמטריצה המדומה היא אנטי-סימטרית (מטריצה אנטי סימטרית היא מטריצה {::nomarkdown}\( A\){:/nomarkdown} כך ש-{::nomarkdown}\( A^{t}=-A\){:/nomarkdown}). בפרט, האיברים על האלכסון הראשי של המטריצה שווים להצמדה של עצמם ולכן הם חייבים להיות מספרים ממשיים "טהורים". זה יהיה חשוב בהמשך.

בואו נעבור לדבר על מטריצות אוניטריות. ראשית כל אני רוצה להבין מה הדטרמיננטה של מטריצה כזו יכולה להיות. אם {::nomarkdown}\( A^{-1}=A^{*}\){:/nomarkdown} אז {::nomarkdown}\( A\cdot A^{*}=I\){:/nomarkdown} ולכן {::nomarkdown}\( 1=\left\|I\right\|=\left\|AA^{*}\right\|=\left\|A\right\|\left\|A^{*}\right\|\){:/nomarkdown}. ומהי {::nomarkdown}\( \left\|A^{*}\right\|\){:/nomarkdown}? תחושת הבטן היא ש-{::nomarkdown}\( \left\|A^{*}\right\|=\overline{\left\|A\right\|}\){:/nomarkdown}, כלומר הדטרמיננטה של הצמוד היא ההצמדה המרוכבת של הדטרמיננטה של {::nomarkdown}\( A\){:/nomarkdown}. לא קשה לראות את זה ישירות מההגדרה הפורמלית של דטרמיננטה, למשל בתור סכום של מכפלות. זכרו שלכל מספר מרוכב {::nomarkdown}\( z\){:/nomarkdown} מתקיים {::nomarkdown}\( z\cdot\overline{z}=\left\|z\right\|^{2}\){:/nomarkdown}, ולכן המסקנה היא ש-{::nomarkdown}\( \left\|\det A\right\|^{2}=1\){:/nomarkdown} (עברתי לסמן דטרמיננטה ב-{::nomarkdown}\( \det\){:/nomarkdown} מסיבות ברורות). מכאן שהדטרמיננטה של {::nomarkdown}\( A\){:/nomarkdown} חייבת להיות 1 בערכה המוחלט (מכיוון שהיא עשויה להיות מספר מרוכב זה עדיין נותן לה לא מעט אפשרויות).

עכשיו בואו נעבור לדבר על מקרה קונקרטי יותר. ראשית כל, הבה וניזכר באופן כללי מהי ההופכית של מטריצה מסדר {::nomarkdown}\( 2\times2\){:/nomarkdown} כלשהי. אם

{::nomarkdown}\( A=\left[\begin{array}{cc}a &amp; b\\c &amp; d\end{array}\right]\){:/nomarkdown}

אז ההופכית שלה היא

{::nomarkdown}\( A^{-1}=\frac{1}{\left\|A\right\|}\left[\begin{array}{cc}d &amp; -b\\-c &amp; a\end{array}\right]\){:/nomarkdown}

לא מאמינים? פשוט תכפילו ותראו... הנוסחה הזו היא מקרה פרטי של המשפט לפיו {::nomarkdown}\( A^{-1}=\frac{\mbox{adj}A}{\left\|A\right\|}\){:/nomarkdown} שהראיתי בעבר. עכשיו, באופן כללי מתקיים

{::nomarkdown}\( A^{*}=\left[\begin{array}{cc}\overline{a} &amp; \overline{c}\\\overline{b} &amp; \overline{d}\end{array}\right]\){:/nomarkdown}

כך שאם מתקיים {::nomarkdown}\( A^{-1}=A^{*}\){:/nomarkdown} אנחנו יכולים להסיק את {::nomarkdown}\( c,d\){:/nomarkdown} בתור פונקציות של {::nomarkdown}\( a,b\){:/nomarkdown}:

{::nomarkdown}\( c=-\left\|A\right\|\overline{b}\){:/nomarkdown}

{::nomarkdown}\( d=\left\|A\right\|\overline{a}\){:/nomarkdown}

מכיוון ש-{::nomarkdown}\( \left\|A\right\|=ad-bc\){:/nomarkdown} אז בפרט נקבל {::nomarkdown}\( \left\|A\right\|=\left\|A\right\|a\overline{a}+\left\|A\right\|b\overline{b}=\left\|A\right\|\left(\left\|a\right\|^{2}+\left\|b\right\|^{2}\right)\){:/nomarkdown}, כלומר {::nomarkdown}\( \left\|a\right\|^{2}+\left\|b\right\|^{2}=1\){:/nomarkdown}.

כעת, אפשר לכתוב קונקרטית {::nomarkdown}\( \left\|A\right\|=e^{i\theta}\){:/nomarkdown} עבור {::nomarkdown}\( 0\le\theta\le2\pi\){:/nomarkdown} - זו דרך ההצגה הקוטבית של מספר מרוכב עם ערך מוחלט 1. לכן נקבל שמטריצה {::nomarkdown}\( A\){:/nomarkdown} מסדר {::nomarkdown}\( 2\times2\){:/nomarkdown} היא אוניטרית אם ורק אם היא מהצורה

{::nomarkdown}\( \left[\begin{array}{cc}a &amp; b\\-e^{i\theta}\overline{b} &amp; e^{i\theta}\overline{a}\end{array}\right]\){:/nomarkdown}

כך ש-{::nomarkdown}\( \left\|a\right\|^{2}+\left\|b\right\|^{2}=1\){:/nomarkdown}.

במקרה של מטריצה עם מקדמים ממשיים העסק הופך לפשוט מאוד: במקרה הזה {::nomarkdown}\( \overline{a}=a,\overline{b}=b\){:/nomarkdown} ואילו {::nomarkdown}\( e^{i\theta}\){:/nomarkdown} יכול להיות רק 1 או {::nomarkdown}\( -1\){:/nomarkdown}. לכן נקבל שיש בדיוק שני סוגים של מטריצות אוניטריות ממשיות:

{::nomarkdown}\( \left[\begin{array}{cc}a &amp; b\\-b &amp; a\end{array}\right]\){:/nomarkdown}

או

{::nomarkdown}\( \left[\begin{array}{cc}a &amp; b\\b &amp; -a\end{array}\right]\){:/nomarkdown}

בשני המקרים חייב להתקיים {::nomarkdown}\( a^{2}+b^{2}=1\){:/nomarkdown}.

עכשיו, כל מטריצה כזו מגדירה אופרטור לינארי על {::nomarkdown}\( \mathbb{R}^{2}\){:/nomarkdown}. מה האופרטורים הללו עושים? ראשית כל, השוויון הנחמד {::nomarkdown}\( a^{2}+b^{2}=1\){:/nomarkdown} מזכיר לי את הזהות המתמטית {::nomarkdown}\( \sin^{2}\theta+\cos^{2}\theta=1\){:/nomarkdown}, אז בואו נסמן {::nomarkdown}\( a=\cos\theta\){:/nomarkdown} ו-{::nomarkdown}\( b=-\sin\theta\){:/nomarkdown} (שימו לב שצריך <strong>להוכיח</strong> שזה אפשרי - אשאיר זאת לכם). אז מטריצה מהסוג הראשון היא מהצורה

{::nomarkdown}\( \left[\begin{array}{cc}\cos\theta &amp; -\sin\theta\\\sin\theta &amp; \cos\theta\end{array}\right]\){:/nomarkdown}

יש סיכוי טוב שהמטריצה הזו מוכרת לכם, אבל במקרה שלא, בואו נבין מה המשמעות של כפל בה. מספיק להבין איך היא פועלת על אברי הבסיס הסטנדרטי:

{::nomarkdown}\( \left[\begin{array}{cc}\cos\theta &amp; -\sin\theta\\\sin\theta &amp; \cos\theta\end{array}\right]\left[\begin{array}{c}1\\0\end{array}\right]=\left[\begin{array}{c}\cos\theta\\\sin\theta\end{array}\right]\){:/nomarkdown}

{::nomarkdown}\( \left[\begin{array}{cc}\cos\theta &amp; -\sin\theta\\\sin\theta &amp; \cos\theta\end{array}\right]\left[\begin{array}{c}0\\1\end{array}\right]=\left[\begin{array}{c}-\sin\theta\\\cos\theta\end{array}\right]\){:/nomarkdown}

אני מתעצל לצייר את זה, אבל ציירו! השוויון הראשון אומר שהוקטור האופקי שפונה "ימינה" (לצד החיובי של ציר {::nomarkdown}\( x\){:/nomarkdown}) עובר לוקטור שיוצר זווית של {::nomarkdown}\( \theta\){:/nomarkdown} <strong>מעל</strong> הכיוון החיובי של ציר {::nomarkdown}\( x\){:/nomarkdown}. הוקטור שפונה "למעלה" עובר לוקטור שיוצר זווית {::nomarkdown}\( \theta\){:/nomarkdown} <strong>משמאל</strong> לכיוון החיובי של ציר {::nomarkdown}\( y\){:/nomarkdown}, ובסך הכל המטריצה <strong>מסובבת</strong> את שני הוקטורים הללו בזווית {::nomarkdown}\( \theta\){:/nomarkdown} <strong>נגד כיוון השעון</strong>. מכיוון שהיא עושה זאת לוקטורים של בסיס כלשהו למרחב, זה מה שהיא עושה לכל וקטור - זוהי מטריצת סיבוב בזווית {::nomarkdown}\( \theta\){:/nomarkdown} (ובחרתי את {::nomarkdown}\( a\){:/nomarkdown} להיות {::nomarkdown}\( \cos\theta\){:/nomarkdown} ואת {::nomarkdown}\( b\){:/nomarkdown} להיות {::nomarkdown}\( -\sin\theta\){:/nomarkdown} כדי לקבל סיבוב במובן שאנחנו רגילים אליו - אם הייתי בוחר, למשל {::nomarkdown}\( a=\sin\theta\){:/nomarkdown} ו-{::nomarkdown}\( b=\cos\theta\){:/nomarkdown} עדיין הייתי מקבל סיבוב, אבל חשבו מה תהיה הזווית ומה יהיה הכיוון של הסיבוב).

מי שעדיין לא משוכנע יכול לכתוב במפורש מה המטריצה עושה על וקטור כללי, אבל כזה שנכתב בצורה קוטבית, של רדיוס וזווית עם הכיוון החיובי של ציר {::nomarkdown}\( x\){:/nomarkdown}:

{::nomarkdown}\( \left[\begin{array}{cc}\cos\theta &amp; -\sin\theta\\\sin\theta &amp; \cos\theta\end{array}\right]\left[\begin{array}{c}r\cos t\\r\sin t\end{array}\right]=\left[\begin{array}{c}r\cos\theta\cos t-r\sin\theta\sin t\\r\sin\theta\cos t+r\sin t\cos\theta\end{array}\right]=\left[\begin{array}{c}r\cos\left(t+\theta\right)\\r\sin\left(t+\theta\right)\end{array}\right]\){:/nomarkdown}

כאשר המעבר האחרון נובע מהזהויות הטריגונומטריות הסטנדרטיות על סכום זוויות, וכעת אפשר לראות בבירור שהכפל במטריצה סובב את הוקטור בזווית של {::nomarkdown}\( \theta\){:/nomarkdown}.

אם כן, הבנו מה עושה <strong>כל</strong> מטריצה אוניטרית מהצורה {::nomarkdown}\( \left[\begin{array}{cc}a &amp; b\\-b &amp; a\end{array}\right]\){:/nomarkdown}. מה עם מטריצות מהצורה השניה? יש כמה דרכים להבין מה הן עושות, אבל בואו נתחיל מדרך שבה כדאי לנקוט תמיד עם מטריצות לא ברורות - ננסה ללכסן. המטריצה שלנו, כזכור, היא מהצורה

{::nomarkdown}\( \left[\begin{array}{cc}a &amp; b\\b &amp; -a\end{array}\right]\){:/nomarkdown}

כאשר {::nomarkdown}\( a^{2}+b^{2}=1\){:/nomarkdown}. הפולינום האופייני, אם כן, הוא

{::nomarkdown}\( \left(a-x\right)\left(-a-x\right)-b^{2}=x^{2}-a^{2}-b^{2}=x^{2}-1\){:/nomarkdown}

והשורשים שלו הם 1 ו-{::nomarkdown}\( -1\){:/nomarkdown}. מה אומר ערך עצמי 1? שיש תת-מרחב ממימד 1 - קו ישר העובר דרך הראשית - שהאופרטור <strong>מקבע</strong> - משאיר במקום ללא שינוי. ומה זה ערך עצמי {::nomarkdown}\( -1\){:/nomarkdown}? זהו קו ישר שהאופרטור מעביר כל נקודה בו אל הנגדי שלה - הנקודה האחרת על אותו קו שמרחקה מהראשית זהה. נסו לצייר את זה ותראו (אני מקווה) חיש קל שהאופרטור הזה הוא אופרטור של <strong>שיקוף</strong> ביחס לציר שהוא הישר שהאופרטור מקבע. בואו נמצא אותו על ידי כך שנמצא וקטור עצמי שמתאים לערך העצמי 1. לשם כך צריך לפתור את מערכת המשוואות הלינארית

{::nomarkdown}\( \left[\begin{array}{cc}a-1 &amp; b\\b &amp; -a-1\end{array}\right]\left[\begin{array}{c}x\\y\end{array}\right]=\left[\begin{array}{c}0\\0\end{array}\right]\){:/nomarkdown}

נניח ש-{::nomarkdown}\( b\ne0\){:/nomarkdown} ונפתור אותה עם דירוג סטנדרטי, תוך שימוש בכך ש-{::nomarkdown}\( a^{2}+b^{2}=1\){:/nomarkdown}:

{::nomarkdown}\( \left[\begin{array}{cc}a-1 &amp; b\\b &amp; -a-1\end{array}\right]\to\left[\begin{array}{cc}-1 &amp; b+\frac{a\left(a+1\right)}{b}\\b &amp; -a-1\end{array}\right]\to\left[\begin{array}{cc}1 &amp; -\frac{1+a}{b}\\b &amp; -\left(1+a\right)\end{array}\right]\to\left[\begin{array}{cc}1 &amp; -\frac{1+a}{b}\\0 &amp; 0\end{array}\right]\){:/nomarkdown}

מכאן נקבל שכל פתרון של המשוואה הוא מהצורה {::nomarkdown}\( \left(\frac{1+a}{b}t,t\right)\){:/nomarkdown}. אם נבחר, לצורך נוחות, {::nomarkdown}\( t=b\){:/nomarkdown} נקבל את היוצר {::nomarkdown}\( \left(1+a,b\right)\){:/nomarkdown}. בדקו ישירות כדי לראות שהוא אכן וקטור עצמי!

אם תחזרו ל<a href="http://www.gadial.net/2011/11/29/eigenvalues_intro/">אחד הפוסטים המוקדמים</a> שלי על אלגברה לינארית תראו שכבר חישבנו פעם במפורש את המטריצה עבור אופרטור שיקוף, אבל הגענו לתוצאה שנראית מפחידה בהרבה. מטריצת השיקוף דרך ציר שנפרש על ידי {::nomarkdown}\( \left(x,y\right)\){:/nomarkdown} הייתה

{::nomarkdown}\( \frac{1}{x^{2}+y^{2}}\left[\begin{array}{cc}x^{2}-y^{2} &amp; 2xy\\2xy &amp; y^{2}-x^{2}\end{array}\right]\){:/nomarkdown}

ומה שראינו עכשיו הוא שאם {::nomarkdown}\( \left(x-1\right)^{2}+y^{2}=1\){:/nomarkdown} אז המטריצה שמתקבלת היא מהצורה

{::nomarkdown}\( \left[\begin{array}{cc}x-1 &amp; y\\y &amp; 1-x\end{array}\right]\){:/nomarkdown}

שהיא נחמדה יותר, אבל לא תמיד {::nomarkdown}\( \left(x-1\right)^{2}+y^{2}=1\){:/nomarkdown} ולא פשוט למצוא {::nomarkdown}\( \left(x,y\right)\){:/nomarkdown} שמקיימים את זה אם נתון לנו הישר שאנו רוצים לשקף דרכו.

בואו ננסה להבין את האופרטור הזה בצורה נוספת, כפי שעשינו עבור סיבוב - לכתוב הכל בצורה טריגונומטרית ולראות מה מקבלים:

{::nomarkdown}\( \left[\begin{array}{cc}\cos\theta &amp; \sin\theta\\\sin\theta &amp; -\cos\theta\end{array}\right]\left[\begin{array}{c}r\cos t\\r\sin t\end{array}\right]=\left[\begin{array}{c}r\cos\theta\cos t+r\sin\theta\sin t\\r\sin\theta\cos t-r\sin t\cos\theta\end{array}\right]=\left[\begin{array}{c}r\cos\left(\theta-t\right)\\r\sin\left(\theta-t\right)\end{array}\right]\){:/nomarkdown}

זה מזכיר סיבוב, אבל זה לא סיבוב בגלל שהזווית של הוקטור המקורי, {::nomarkdown}\( t\){:/nomarkdown}, הפכה למינוס {::nomarkdown}\( t\){:/nomarkdown}. קצת חשבון מראה שעבור {::nomarkdown}\( t=\frac{\theta}{2}\){:/nomarkdown} נקבל נקודות שבת של האופרטור, ולכן הפעולה שהאופרטור מבצע היא שיקוף ביחס לציר שהזווית שלו עם הכיוון החיובי של ציר {::nomarkdown}\( x\){:/nomarkdown} היא {::nomarkdown}\( \frac{\theta}{2}\){:/nomarkdown}.

כל החישובים הללו מראים את שלל הדרכים שבהן ניתן להגיע למסקנה הבאה: האופרטורים הלינאריים היחידים על {::nomarkdown}\( \mathbb{R}^{2}\){:/nomarkdown} שמשמרים זווית ואורך הם סיבובים ושיקופים. זו לא תוצאה מובנת מאליה, ולדעתי זה יפה למדי איך שאפשר להגיע אליה בהתבסס על מה שאנחנו כבר יודעים על טרנספורמציות אוניטריות וקצת חשבונות.

אחרי שסיימנו עם המשחקים והדוגמאות מגיעה מאליה השאלה - מה הלאה? מה האתגר האמיתי שלנו? התשובה היא שהגיע הזמן לנסות להבין איך המושג של לכסינות של מטריצות משתלב עם מרחבי מכפלה פנימית, ובניסוח קונקרטי - בהינתן אופרטור לינארי מעל מרחב מכפלה פנימית, מתי קיים למרחב בסיס <strong>אורתונורמלי</strong> שבו האופרטור מיוצג על ידי מטריצה ריבועית, כלומר מתי קיים למרחב בסיס אורתונורמלי שמורכב כולו מוקטורים עצמיים של האופרטור? בשאלה הזו נעסוק בפוסט הבא בנושא.
