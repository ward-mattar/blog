---
id: 2363
title: "משפט השלמות של גדל, ההוכחה (חלק א')"
date: 2013-02-25 22:52:55
layout: post
categories: 
  - לוגיקה
tags: 
  - לוגיקה מסדר ראשון
  - משפט השלמות של גדל
---
ב<a href="http://www.gadial.net/2013/02/23/first_order_logic_proof_system/">פוסט הקודם</a> הצגתי מערכת הוכחה ללוגיקה מסדר ראשון, והפעם אני רוצה להתחיל את ההוכחה שהמערכת הזו היא שלמה ונאותה. למעשה, אני הולך לדלג על הוכחת הנאותות כי די כיסיתי אותה בפוסט הקודם - שכנעתי אתכם (אני מקווה) שהאקסיומות של המערכת הן אמיתות לוגיות, ושכללי ההיסק משמרים נביעה לוגית, ומכאן ההוכחה היא שגרתית. אם כן, החלק המעניין פה הוא הוכחת השלמות. משפט השלמות הוכח במקור על ידי קורט גדל בשנת 1930 ולכן הוא נקרא "משפט השלמות של גדל" (עם זאת, ההוכחה שאראה היא לא של גדל אלא של הנקין מ-1949); צריך כמובן להיזהר ולא לבלבל את זה עם משפטי אי השלמות של גדל שהוכחו ב-1931 ומדברים על סוג שונה של שלמות. משפטי אי השלמות מדברים על אי-שלמות של <strong>תורות</strong>: על כך שאם קבוצה של פסוקים $latex \Phi$ בלוגיקה מסדר ראשון מקיימת אי-אילו תכונות, אז קיים פסוק $latex \varphi$כך ש-$latex \Phi\not\vdash\varphi$ וגם $latex \Phi\not\vdash\neg\varphi$ - כלומר, $latex \Phi$ לא מוכיחה לא אותו ואת שלילתו. משפט השלמות מדבר על שלמות של <strong>מערכת ההוכחה</strong>, והוא אומר שאם $latex \Phi\models\varphi$ עבור $latex \Phi,\varphi$ כלשהם, אז $latex \Phi\vdash\varphi$ - כלומר, כל מה שנובע לוגית גם יכיח.

משטיפלנו בבלבול הזה אפשר לגשת לעבודה. בואו נתחיל בלהיזכר באופן שבו הוכחנו את משפט השלמות עבור תחשיב הפסוקים, כי הרעיון הבסיסי עדיין עובד גם כאן: הוכחנו טענה שנראית ממבט ראשון שונה לגמרי - שאם קבוצה $latex \Phi$ היא עקבית, אז קיים לה מודל, כאשר "עקבית" פירושו שהיא אינה מוכיחה דבר והיפוכו. הטענה הזו גוררת מיידית את משפט השלמות באופן הבא: נניח כי $latex \Phi\models\varphi$ ונניח בשלילה ש-$latex \Phi\cup\left\{ \neg\varphi\right\} $ עקבית, אז קיים ל-$latex \Phi\cup\left\{ \neg\varphi\right\} $ מודל $latex \mathcal{M}$, ובפרט $latex \mathcal{M}\models\Phi$ ולכן $latex \mathcal{M}\models\varphi$ (זו המשמעות של הטענה ש-$latex \varphi$ נובע לוגית מ-$latex \Phi$). מצד שני, $latex \mathcal{M}\models\neg\varphi$ וזו סתירה (בהינתן מודל ופסוק, ערך האמת של הפסוק נקבע בצורה יחידה והוא תמיד הפוך מזה של שלילתו). לכן נובע ש-$latex \Phi\cup\left\{ \neg\varphi\right\} $ אינה עקבית, ומכך נובע ש-$latex \Phi\vdash\varphi$. את השלב האחרון ("משפט ההוכחה בדרך השלילה") הוכחתי עבור תחשיב הפסוקים וההוכחה תקפה באותה מידה גם בלוגיקה מסדר ראשון, עד כדי נקודה קטנה אך מהותית: המשפט הזה מתבסס על מה שנקרא <strong>משפט הדדוקציה</strong>, וההוכחה של משפט הדדוקציה ללוגיקה מסדר ראשון דורשת עוד טיפה עבודה.

משפט הדדוקציה אומר, כזכור, שאם $latex \Phi\cup\left\{ \alpha\right\} \vdash\beta$ אז $latex \Phi\vdash\alpha\to\beta$. בתחשיב הפסוקים ראינו כיצד להוכיח זאת במקרה שבו $latex \beta$ היא אקסיומה, הנחה מתוך $latex \Phi$, $latex \alpha$ בעצמה, או מתקבלת על ידי MP מפסוקים שעבורם אנו כבר יודעים שמשפט הדדוקציה נכון. עם זאת, בלוגיקה מסדר ראשון צריך גם להתייחס למקרה שבו $latex \beta$ מתקבלת מהפעלת GEN, כלומר $latex \beta=\forall x\gamma$ כאשר $latex \gamma$ כבר מקיימת את משפט הדדוקציה, כלומר $latex \Phi\vdash\alpha\to\gamma$.

אם כן, מה עושים? למרבה המזל, יש לנו תבנית אקסיומה שנבחרה בדיוק כדי להתמודד עם הסיטואציה הזו - תבנית אקסיומה מס' 5, $latex \forall x\left(\varphi\to\psi\right)\to\left(\varphi\to\forall x\psi\right)$. הדרישה של תבנית האקסיומה הזו היא ש-$latex x$ לא יהיה משתנה חופשי ב-$latex \varphi$. במקרה שלנו $latex \varphi$ הוא $latex \alpha$, והרי $latex \beta$ מתקבל על ידי הוכחה מ-$latex \Phi\cup\left\{ \alpha\right\} $ ודרשתי במפורש שאם GEN יופעל, אז זה יהיה רק עם משתנה שאינו מופיע חופשי ב-$latex \Phi\cup\left\{ \alpha\right\} $, ומכאן ש-$latex x$ אינו חופשי ב-$latex \alpha$. לכן אפשר לכתוב את ההוכחה הפורמלית הבאה:
<ol>
	<li>$latex \alpha\to\gamma$ (הנחה).</li>
	<li>$latex \forall x\left(\alpha\to\gamma\right)$ (GEN על 1 עם משתנה שאינו מופיע חופשי ב-$latex \Phi$)</li>
	<li>$latex \forall x\left(\alpha\to\gamma\right)\to\left(\alpha\to\forall x\gamma\right)$ (תבנית אקסיומה 5).</li>
	<li>$latex \alpha\to\forall x\gamma$ (MP על 2,3).</li>
</ol>
וקיבלנו בדיוק את $latex \alpha\to\beta$ כפי שרצינו. זה מסיים את ההעברה של המשפטים מתחשיב הפסוקים ללוגיקה מסדר ראשון ומאפשר לנו להתמקד בעיקר.

אם כן, מעתה היעד שלנו הוא להוכיח שלקבוצה עקבית $latex \Phi$ של פסוקים קיים מודל. בתחשיב הפסוקים "מודל" היה דבר פשוט למדי - השמה של ערכי אמת לכל המשתנים, וחסל. בלוגיקה מסדר ראשון מודל הוא עסק מסובך הרבה יותר - צריך להגדיר עולם שהוא קבוצה כלשהי של איברים, ולכל הסימנים במילון של $latex \Phi$ צריך להתאים יחסים, פונקציות וקבועים מתוך העולם. על פניו בכלל לא ברור <strong>מאיפה</strong> אנחנו הולכים להמציא את העולם הזה. כאן נכנס לתמונה התעלול הראשון: האיברים של העולם שלנו יהיו (בערך - אני משקר כאן כרגע) הקבועים של המילון של $latex \Phi$. אלא שזה נשמע על פניו מטופש - מה אם במילון אין בכלל קבועים?

ובכן, בתחשיב הפסוקים האופן שבו התמודדנו עם בעיית ה"ממש לא ברור לי מאיפה להתחיל" היה לקחת את קבוצת הפסוקים שלנו ו<strong>להרחיב</strong> אותה כך שנקבל קבוצה שבה יהיה לנו מעט מאוד חופש פעולה - קבוצה כזו שאם קיים לה מודל, אז די ברור לנו איך הוא <strong>חייב</strong> להיראות. צמצום חופש הבחירה עזר לנו מאוד. אותו הדבר יקרה גם כאן - אנחנו ניקח את $latex \Phi$ ונרחיב אותה, אבל גם ניקח אתצ $latex \tau$, המילון של $latex \Phi$, ונרחיב גם אותו על ידי הוספה של המון סימני קבועים. אחרי שנקבל את $latex \Phi$ המורחבת מעל המילון המורחב כבר יהיה די ברור איך המודל חייב להיראות, וכל מה שיישאר הוא לטפל בפרטים הטכניים.

מה שנרצה לעשות הוא להרחיב את אוסף הקבועים של $latex \tau$ ואת $latex \Phi$ כך שהם יקיימו את התכונה הבאה: ש-$latex \Phi$ המורחבת תוכל להוכיח שלכל נוסחה $latex \varphi\left(x\right)$ עם משתנה חופשי יחיד $latex x$, אם $latex \exists x\varphi\left(x\right)$ מתקיים אז קיים קבוע ש"מוכיח" את זה, כלומר יש קבוע $latex c$ כך ש-$latex \varphi\left(c\right)$ מתקיים. פורמלית אנו אומרים שקבוצת סימני קבועים $latex C$ היא קבוצת <strong>עדים</strong> עבור $latex \Phi$ אם לכל נוסחה $latex \varphi\left(x\right)$ עם משתנה חופשי יחיד קיים $latex c\in C$ כך שמתקיים

$latex \Phi\vdash\exists x\varphi\left(x\right)\to\varphi\left(c\right)$

כאן $latex \varphi\left(c\right)$ פירושו מה שמקבלים כאשר מציבים ב-$latex \varphi$ את הקבוע $latex c$ במקום $latex x$.

אז כמו בתחשיב הפסוקים, יש לנו שני שלבים: שלב ההרחבה של $latex \Phi$ ו-$latex \tau$, ושלב ההוכחה שלתורה המורחבת יש מודל. מכיוון שמודל לתורה המורחבת מעל המילון המורחב הוא עדיין מודל גם לתורה המקורית מעל המילון המקורי, זה יסיים את ההוכחה.

למרות שמבחינה מעשית שלב ההרחבה קודם לשלב בניית המודל, אני מעדיף לבצע אותם בסדר הפוך, מכיוון ששלב ההרחבה בעייתי יותר טכנית מסיבות שאתאר בהמשך, והרעיון היפה המרכזי בהוכחה נמצא בשלב בניית המודל. אם כן, אני מניח כרגע שנתונה לי תורה (קבוצת פסוקים עקבית) $latex \Phi$ מעל מילון $latex \tau$ כך שמתקיימות שתי התכונות הבאות:
<ol>
	<li>$latex \Phi$ עקבית מקסימלית, במובן זה שהוספת כל פסוק ל-$latex \Phi$ יהפוך את $latex \Phi$ ללא-עקבית.</li>
	<li>קיימת קבוצת עדים $latex C$ עבור $latex \Phi$, כלומר לכל נוסחה $latex \varphi\left(x\right)$ עם משתנה חופשי יחיד $latex x$ קיים קבוע $latex c\in C$ כך ש-$latex \Phi\vdash\exists x\varphi\left(x\right)\to\varphi\left(c\right)$.</li>
</ol>
בואו נבנה ל-$latex \Phi$ מודל $latex \mathcal{M}$. מודל כולל <strong>עולם</strong> שהוא קבוצה של איברים, ו<strong>פרשנויות</strong> לסימני היחס, הפונקציות והקבועים של $latex \tau$. הרעיון האינטואיטיבי הוא לעשות את הדבר הבא: להגדיר את העולם להיות שווה לקבוצת הקבועים של $latex \tau$, כלומר לקחת את האובייקט ה<strong>סינטקטי</strong> של סימני קבועים, ולהגדיר את המודל <strong>באמצעותו</strong>. אחר כך, בהינתן סימן יחס $latex R\left(x,y\right)$ (נניח לצורך הדוגמה שהוא דו-מקומי) להגדיר יחס $latex R^{\mathcal{M}}\left(x,y\right)$ במודל על ידי כך שלכל שני איברים $latex c,d$ של העולם, $latex \left(c,d\right)\in R^{\mathcal{M}}$ אם ורק אם הפסוק $latex R\left(c,d\right)$ יכיח מתוך $latex \Phi$. זה הרעיון, והוא פשוט ומבריק ויפהפה. כמובן שהפרטים הטכניים קצת מסתבכים עכשיו.

ההוכחה מתפצלת כאן למעשה לשתי אפשרויות, בהתאם לשאלה אם הגדרנו לוגיקה מסדר ראשון עם סימן השוויון או בלעדיו. אני בחרתי להגדיר עם; כפי שנראה, זה גורם לנו לאי-אלו קשיים, אבל אסביר בהמשך אילו קשיים היו נוצרים אם הייתי בוחר לעבוד בלעדיו (זה היה מוביל לבניית מודל שמרגיש לי מלאכותי יותר).

אז נניח שאנחנו עובדים בלוגיקה עם סימן השוויון. הנה הבעיה - הביטו לרגע בפסוק $latex c=d$ כאשר $latex c,d$ הם שני איברים של $latex C$. נניח שהוא יכיח מתוך $latex \Phi$ (וזה בהחלט יכול לקרות). פירוש הדבר הוא ש<strong>אסור</strong> לנו להגדיר את $latex c,d$ בתור איברים שונים בעולם של $latex \mathcal{M}$, כי אז הפסוק $latex c=d$ לא יהיה ספיק במודל הזה (ומכיוון שמערכת ההוכחה שלנו נאותה, ינבע מכך ש-$latex \mathcal{M}$ אינו מודל של $latex \Phi$). הבעיה הזו מכריחה אותנו להגדיר את העולם של $latex \mathcal{M}$ באופן קצת יותר מחוכם. מה שנעשה הוא להגדיר <strong>יחס שקילות</strong> על אברי $latex C$, כך ש-$latex c\equiv d$ אם ורק אם $latex \Phi\vdash c=d$. כלומר, אנחנו אומרים שכל הקבועים של $latex C$ ש-$latex \Phi$ "מוכיחה שהם שווים" יהיו שקולים האחד לשני.

צריך להוכיח שהיחס הזה הוא אכן יחס שקילות. לצורך כך נצטרך להוכיח דברים על יחס השוויון, אז בואו ניזכר באקסיומות שהיו קשורות אליו והכנסנו למערכת ההוכחה שלנו:
<ol>
	<li>$latex x=x$</li>
	<li>$latex x=y\to t=s$ כאשר $latex s$ מתקבל מ-$latex t$ על ידי החלפת מופע אחד או יותר של $latex x$ ב-$latex y$.</li>
	<li>$latex x=y\to\left[\varphi\to\psi\right]$ כאשר $latex \psi$ מתקבל מ-$latex \varphi$ על ידי החלפת מופע אחד או יותר של $latex x$ ב-$latex y$.</li>
</ol>
בואו נתחיל. ראשית, אם $latex c\in C$ כלשהו צריך להראות ש-$latex \Phi\vdash c=c$. הנה הוכחה פורמלית:
<ol>
	<li>$latex x=x$ (אקסיומת שוויון מס' 1)</li>
	<li>$latex x=x\to c=c$ (אקסיומת שוויון מס' 2 עם $latex t=s=c$)</li>
	<li>$latex c=c$ (MP על 1,2).</li>
</ol>
עכשיו, אם $latex c,d\in C$ הם איברים כלשהם כך ש-$latex \Phi\vdash c=d$ צריך להוכיח שגם $latex \Phi\vdash d=c$:
<ol>
	<li>$latex x=y\to\left(x=x\to y=x\right)$ (אקסיומת שוויון מס' 3 עם $latex \varphi=\left(x=x\right)$ ו-$latex \psi=\left(y=x\right)$).</li>
	<li>$latex \forall x\forall y\left(x=y\right)\to\left(x=x\to y=x\right)$ (Gen על 1).</li>
	<li>$latex \left[\forall x\forall y\left(x=y\right)\to\left(x=x\to y=x\right)\right]\to\left[\left(c=d\right)\to\left(c=c\to d=c\right)\right]$ (תבנית אקסיומה 4)</li>
	<li>$latex c=d\to\left(c=c\to d=c\right)$ (MP על 2,3).</li>
	<li>$latex c=d$ (יכיח מ-$latex \Phi$).</li>
	<li>$latex c=c\to d=c$ (MP על 4,5).</li>
	<li>$latex c=c$ (יכיח מ-$latex \Phi$).</li>
	<li>$latex d=c$ (MP על 6,7).</li>
</ol>
זה היה מבעית למדי, מה שמעלה את החשש שהוכחת טרנזיטיביות תהיה גרועה עוד יותר. נניח ש-$latex c,d,e\in C$ מקיימים $latex \Phi\vdash c=d$ וגם $latex \Phi\vdash d=e$, אז צריך להוכיח ש-$latex \Phi\vdash c=e$. כפי שאולי הבנתם מההוכחה הקודמת, מספיק להוכיח ש-$latex x=y\to\left(y=z\to x=z\right)$ כדי לסיים, אבל זו הרי בדיוק אקסיומת שוויון מס' 3 עם $latex \varphi=\left(x=z\right)$ ו-$latex \psi=\left(y=z\right)$, כך שאחסוך מכם את המשך ההוכחה המפלצתית. זה מוכיח לנו שהיחס שהגדרתי לעיל הוא אכן יחס שקילות, ולכן אפשר לדבר על <strong>מחלקות השקילות</strong> שלו. כזכור, אם $latex c\in C$ הוא איבר כלשהו, אז מסמנים $latex \left[c\right]=\left\{ d\in C\ |\ c\equiv d\right\} $. הקבוצה $latex \left[c\right]$ נקראת <strong>מחלקת השקילות</strong> של $latex c$ ולא קשה לראות ש-$latex C$ מתפרקת לאיחוד זר של מחלקות שקילות של איברים בה.

כעת אפשר להתחיל את הגדרת המודל $latex \mathcal{M}$. ראשית נגדיר את העולם שלו: $latex D^{\mathcal{M}}=\left\{ \left[c\right]\ |\ c\in C\right\} $. כעת נותר לתת פרשנויות לסימני היחס, הקבועים והפונקציות.

נתחיל מסימני היחס. יהא $latex R\left(x_{1},\dots,x_{n}\right)\in\tau$ סימן יחס $latex n$-מקומי. נגדיר יחס $latex R^{\mathcal{M}}\subseteq\left(D^{\mathcal{M}}\right)^{n}$ באופן הבא: לכל $latex c_{1},\dots,c_{n}\in C$, $latex \left(\left[c_{1}\right],\dots,\left[c_{n}\right]\right)\in R^{\mathcal{M}}$ אם ורק אם $latex \Phi\vdash R\left(c_{1},\dots,c_{n}\right)$. זו הגדרה שנראית הגיונית, אבל כמו כל הגדרה שמערבת מחלקות שקילות, יש סכנה שהיא <strong>לא מוגדרת היטב</strong>. למה הכוונה? ייתכן שיש $latex d_{1},\dots,d_{n}\in C$ כך ש-$latex \left[c_{i}\right]=\left[d_{i}\right]$ (כלומר, מחלקת השקילות של $latex c_{i}$ ו-$latex d_{i}$ זהות, לכל $latex 1\le i\le n$) ועם זאת $latex \Phi\vdash R\left(c_{1},\dots,c_{n}\right)$ אבל $latex \Phi\not\vdash R\left(d_{1},\dots,d_{n}\right)$, מה שאומר שההחלטה אם $latex \left(\left[c_{1}\right],\dots,\left[c_{n}\right]\right)\in R^{\mathcal{M}}$ אינה תלויה במחלקות השקילות בלבד אלא ממש ב<strong>נציגים</strong> שאנחנו בוחרים להן, ואסור לנו לעשות את זה - אנחנו חייבים לקבוע באופן חד משמעי עבור כל מחלקת שקילות מה יקרה איתה.

במקרה שלנו אין בעיה אמיתית שכזו. נניח ש-$latex \Phi\vdash R\left(c_{1},\dots,c_{n}\right)$ וכמו כן ש-$latex c_{1}\equiv d_{1}$, כלומר $latex \Phi\vdash c_{1}=d_{1}$. אז מהאקסיומה $latex x=y\to R\left(x,c_{2},\dots,c_{n}\right)=R\left(y,c_{2},\dots,c_{n}\right)$ אפשר לקבל חיש קל ש-$latex \Phi\vdash R\left(d_{1},\dots,c_{n}\right)$ וכך להחליף בהדרגתיות את כל ה-$latex c$-ים ב-$latex d$-ים. עם זאת, חשוב היה לי להדגיש שזו נקודה שיש לשים לב אליה במהלך ההגדרה, וזה חלק מהסיבוך הנוסף שנגרם לנו מכך שהלוגיקה מסדר ראשון שלנו כוללת שוויון.

נעבור לקבועים. מפתה להגיד שלכל סימן קבוע $latex c\in\tau$, נגדיר את הפרשנות שלו להיות $latex c^{\mathcal{M}}=\left[c\right]$, וזה אכן הרעיון הכללי, אבל זה <strong>לא מספיק</strong>. הבעיה היא שאולי יש סימני קבועים שבכלל לא שייכים ל-$latex C$. הפואנטה היא שגם במקרה זה, הפרשנות שנותנים לסימנים הללו <strong>חייבת</strong> להיות זהה לפרשנות שנותנים לפחות לאחד מהקבועים. למה? או, זו הזדמנות לראות את עניין ה"$latex C$ היא קבוצת עדים" בפעולה.

נניח ש-$latex d\in\tau$ הוא סימן קבוע כלשהו. אז אנחנו יודעים שהפסוק הבא הוא אמת לוגית: $latex \exists x\left(x=d\right)$. עכשיו, $latex \Phi$ היא קבוצה עקבית מקסימלית, מה שאומר (ואת זה אנחנו יודעים עוד מתחשיב הפסוקים) שלכל פסוק היא מוכיחה אותו או את שלילתו (אחרת היה אפשר להוסיף את הפסוק אליה ולקבל קבוצה גדולה יותר שעדיין עקבית). בגלל נאותות מערכת ההוכחה לא ייתכן שהיא תוכיח דבר שהוא סתירה לוגית, ולכן $latex \Phi\vdash\exists x\left(x=d\right)$, ומכיוון ש-$latex C$ היא קבוצת עדים, אז קיים $latex c\in C$ כך ש-$latex \Phi\vdash\exists x\left(x=d\right)\to\left(c=d\right)$, ומשילוב שני אלו נקבל ש-$latex \Phi\vdash c=d$, וקיבלנו את מה שצריכה להיות הפרשנות של $latex d$: $latex d^{\mathcal{M}}=\left[c\right]$. גם כאן, התהליך היה מוגדר היטב: אם במקום $latex c$ היינו מוצאים עד אחר, היינו מקבלים גם עבורו שהוא שווה ל-$latex d$ ומהטרנזיטיביות שכבר ראינו של השוויון היינו מקבלים ש-$latex \Phi$ מוכיחה את הפסוק שאומר ששני העדים שווים ולכן מחלקת השקילות שלהם שווה.

בפונקציות מטפלים באופן דומה. אם $latex f\left(x_{1},\dots,x_{n}\right)\in\tau$ הוא סימן פונקציה $latex n$ מקומי, ואנחנו צריכים להגדיר את $latex f^{\mathcal{M}}\left(\left[c_{1}\right],\dots,\left[c_{n}\right]\right)$ אז נתבונן בפסוק $latex \exists x\left(f\left(c_{1},\dots,c_{n}\right)=x\right)$, ניקח עד $latex c$ עבורו ונגדיר $latex f^{\mathcal{M}}\left(\left[c_{1}\right],\dots,\left[c_{n}\right]\right)=\left[c\right]$. גם פה צריך להוכיח שהכל מוגדר היטב אבל נדמה לי שכבר הבנתם את הרעיון. זה מסיים את הגדרת המודל $latex \mathcal{M}$.

כמובן שהגדרת המודל היא רק חלק מהעבודה, עכשיו צריך גם להוכיח שהמודל "עובד", כלומר שהוא מספק כל פסוק ב-$latex \Phi$. איך נראים פסוקים באופן כללי? ובכן, פסוק הוא נוסחה שאין בה משתנים חופשיים. אז אפשר להתחיל מנוסחאות שאין בהן משתנים בכלל - כל שמות העצם שמופיעים בהן מורכבים רק מקבועים וסימני פונקציות. פסוק בסיסי מסוג זה חייב לכלול יחס (שם עצם לבדו אינו פסוק; פסוק מורכב מיחסים על שמות עצם, שמעורבבים האחד עם השני עם קשרים וכמתים). אז ראשית כל יש לנו פסוקים מהצורה

$latex t_{1}=t_{2}\in\Phi$

כאשר $latex t_{1},t_{2}$ שמות עצם שאינם כוללים משתנים. אנחנו רוצים לחשב את הערך של שני שמות העצם הללו במודל ולראות שהוא זהה. לא ממש ברור איך לעשות את זה באופן ישיר, אבל קל לעשות את זה באופן עקיף: נסתכל על הפסוק $latex \exists x\left(t_{1}=x\right)$ ונקבל, כרגיל, שיש $latex c\in C$ כך ש-$latex t_{1}=c\in\Phi$. בדומה נקבל ש-$latex t_{2}=d\in\Phi$ עבור $latex d\in C$ כלשהו, וכבר ראינו שאפשר להוכיח טרנזיטיביות, כלומר ש-$latex c=d\in\Phi$ ולכן $latex \left[c\right]=\left[d\right]$ וזהו הערך שהמודל מעניק לשני שמות העצם $latex t_{1},t_{2}$ כך שבמקרה הזה טיפלנו.

כעת, הסוג הנוסף של פסוק בסיסי הוא פסוק מהצורה

$latex R\left(t_{1},\dots,t_{n}\right)\in\Phi$

כאשר $latex R$ סימן יחס כלשהו ו-$latex t_{1},\dots,t_{n}$ שמות עצם כלשהם שאינם כוללים משתנים. כמקודם, מוצאים $latex c_{1},\dots,c_{n}$ כך ש-$latex t_{i}=c_{i}\in\Phi$ ומכאן נוכל להוכיח ש-$latex R\left(c_{1},\dots,c_{n}\right)\in\Phi$, מה שיגרור ש-$latex \left(\left[c_{1}\right],\dots,\left[c_{n}\right]\right)\in R^{\mathcal{M}}$, מה שמסיים את המקרה הזה. כדאי לשים לב שבגלל ש-$latex \Phi$ עקבית מקסימלית הרי שבשני המקרים הוכחנו יותר מאשר את מה שרצינו - הוכחנו גם שאם $latex t_{1}=t_{2}\notin\Phi$ אז הערכים שהמודל מעניק לשמות העצם הללו שונים (אחרת אפשר היה להוסיף את $latex t_{1}=t_{2}$ ל-$latex \Phi$ מבלי לפגוע בעקביות) וכך גם עבור ה-$latex R$-ים. זה יועיל לנו בהמשך.

כעת אפשר להמשיך באינדוקציה על מבנה יתר הפסוקים הקיימים. לכל פסוק $latex \varphi$ נרצה להראות ש-$latex \mathcal{M}\models\varphi$ אם ורק אם $latex \varphi\in\Phi$. נתחיל עם פסוקים מהצורה $latex \neg\varphi$ כאשר $latex \varphi$ הוא פסוק שעליו כבר הוכחנו את הטענה. אז מכיוון ש-$latex \Phi$ עקבית מקסימלית, $latex \neg\varphi\in\Phi$ אם ורק אם $latex \varphi\notin\Phi$ אם ורק אם $latex \mathcal{M}\not\models\varphi$, אם ורק אם $latex \mathcal{M}\models\varphi$. זה היה קל.

עבור פסוק מהצורה $latex \varphi\to\psi$ הנימוק ארוך יותר אבל לא באמת מסובך יותר. מכיוון שלמשהו כמו $latex \varphi\to\psi$ יש רק השמה לא מספקת אחת, יהיה קל יותר להוכיח ש-$latex \varphi\to\psi\notin\Phi$ אם ורק אם $latex \mathcal{M}\models\varphi$ וגם $latex \mathcal{M}\not\models\psi$. אם כן, $latex \varphi\to\psi\notin\Phi$ אם ורק אם $latex \neg\left(\varphi\to\psi\right)\in\Phi$. כעת, תעלול: הבה ונסתכל על הפסוקים $latex \neg\left(\varphi\to\psi\right)\to\varphi$ ו-$latex \neg\left(\varphi\to\psi\right)\to\neg\psi$. בדיקה ישירה תראה לנו שהם טאוטולוגיות, ולכן יכיחים מ-$latex \Phi$ בלי הנחות כלל, רק על ידי אקסיומות 1-3 ו-MP. לכן נקבל ש-$latex \Phi\vdash\varphi$ ו-$latex \Phi\vdash\neg\psi$, מה שקורה אם ורק אם $latex \mathcal{M}\models\varphi$ וגם $latex \mathcal{M}\not\models\psi$, כנדרש.

מה נותרו? כמתים. יהיה יותר פשוט רעיונית לטפל ב-$latex \exists$; הטיפול ב-$latex \forall$ יהיה זהה מכיוון ש-$latex \exists x\varphi\left(x\right)$ שקול לפסוק $latex \neg\forall x\neg\varphi\left(x\right)$.

אם כן, נוכיח ש-$latex \exists x\varphi\left(x\right)\in\Phi$ אם ורק אם $latex \mathcal{M}\models\exists x\varphi\left(x\right)$. הבעיה היא ש-$latex \varphi\left(x\right)$ הוא לא פסוק, כי $latex x$ חופשי בו, ולכן אי אפשר להשתמש עליו בהנחת האינדוקציה והכל קורס, <strong>אלמלא</strong> היה לנו את התכונה המוזרה והכל כך לא ברורה במבט ראשון של "עד להוכחה". בגלל ש-$latex C$ היא קבוצת עדים, אז קיים קבוע $latex c$ כך ש-$latex \Phi\vdash\exists x\varphi\left(x\right)\to\varphi\left(c\right)$, ולכן $latex \varphi\left(c\right)\in\Phi$ ו-$latex \varphi\left(c\right)$ הוא פסוק כך שהנחת האינדוקציה פועלת עליו, ו-$latex \mathcal{M}\models\varphi\left(c\right)$, כלומר $latex \mathcal{M}\models\exists x\varphi\left(x\right)$ (פורמלית: אם $latex z$ היא השמה כלשהי, אז $latex \mathcal{M}\models_{z\left[x\leftarrow\left[c\right]\right]}\varphi\left(x\right)$ ולכן $latex \mathcal{M}\models_{z}\exists x\varphi\left(x\right)$). הטיעון עובד באותו האופן בכיוון השני עד שמגיעים לכך ש-$latex \varphi\left(c\right)\in\Phi$ ורוצים להסיק מכך ש-$latex \exists x\varphi\left(x\right)\in\Phi$; את זה עושים באמצעות הפסוק $latex \varphi\left(c\right)\to\exists x\varphi\left(x\right)$ שיכיח מ-$latex \Phi$. אם אתם תוהים למה הוא יכיח, הנה הוכחה פורמלית:
<ol>
	<li>$latex \forall x\neg\varphi\left(x\right)\to\neg\varphi\left(c\right)$ (תבנית אקסיומה 4).</li>
	<li>$latex \left[\forall x\neg\varphi\left(x\right)\to\neg\varphi\left(c\right)\right]\to\left[\neg\neg\varphi\left(c\right)\to\neg\forall x\neg\varphi\left(x\right)\right]$ (תבנית אקסיומה 3).</li>
	<li>$latex \neg\neg\varphi\left(c\right)\to\neg\forall x\neg\varphi\left(x\right)$ (MP על 1,2).</li>
	<li>$latex \neg\neg\varphi\left(c\right)\to\exists x\varphi\left(x\right)$ (סתם שינוי סימון שיהיה קריא).</li>
	<li>$latex \left[\neg\neg\varphi\left(c\right)\to\exists x\varphi\left(x\right)\right]\to\left[\varphi\left(c\right)\to\exists x\varphi\left(x\right)\right]$ (טאוטולוגיה של תחשיב הפסוקים: $latex \left(\neg\neg A\to B\right)\to\left(A\to B\right)$).</li>
	<li>$latex \varphi\left(c\right)\to\exists x\varphi\left(x\right)$ (MP על 4,5).</li>
</ol>
וזה <strong>מסיים את ההוכחה</strong>! רק שכמובן, זה לא מסיים את הוכחת משפט השלמות של גדל; זה מסיים את ההוכחה לכך שאם יש לנו תורה $latex \Phi$ שהיא עקבית מקסימלית וקיימת לה קבוצת עדים, אז יש לה מודל. עוד נשאר לנו להוכיח שכל תורה עקבית אפשר להרחיב לתורה שכזו, ואת זה נעשה בפוסט הבא.

כעת אפשר לחשוב על האופן שבו ההוכחה מתקלקלת (או הופכת לפשוטה יותר) אם שוויון הוא לא חלק מהלוגיקה שלנו. כדאי להעיר שאנחנו <strong>רוצים</strong> שוויון בלוגיקה שלנו מהרבה סיבות ולכן גם אם הוספת שוויון רק מקשה עלינו חבל לוותר עליו. עדיין, מבחינה רעיונית אולי פשוט יותר להציג קודם כל את ההוכחה עבור לוגיקה ללא שוויון כדי להימנע מיחסי שקילות ואקשן שכזה; מצד שני, במקרה הזה לא מספיק לבנות את המודל מתוך הקבועים של $latex C$ - <strong>כל שם עצם</strong> של השפה שלנו יהיה חייב להיות איבר בעולם של המודל. לי זה מרגיש מעט יותר מלאכותי, כאמור, אבל כל אחד ואיך שנוח לו. גם כך וגם כך הרעיון הזה, של בניה של המודל (האובייקט הסמנטי) מתוך השפה עצמה (האובייקט הסינטקטי) הוא אחד מהרעיונות החביבים עלי במתמטיקה.
