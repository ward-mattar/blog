---
id: 3596
title: "הרחבות אלגבריות, פשוטות, סופיות ומי יודע מה עוד"
date: 2018-04-09 22:22:05
layout: post
categories: 
  - אלגברה מופשטת
tags: 
  - הרחבת שדות
---
<h2>תזכורת</h2>
<a href="https://gadial.net/2018/04/03/field_extensions_intro/">בפוסט הקודם</a> שלי דיברתי על <strong>הרחבת שדות</strong>. בואו נחזור על עיקרי הדברים כדי שהפוסט הזה יעמוד עד כמה שניתן בזכות עצמו, ונוסיף עוד כמה הגדרות:

אם {::nomarkdown}\(F,E\){:/nomarkdown} הם שני שדות כך ש-{::nomarkdown}\(F\subseteq E\){:/nomarkdown} אז אומרים ש-{::nomarkdown}\(E\){:/nomarkdown} <strong>מרחיב</strong> את {::nomarkdown}\(F\){:/nomarkdown} ומסמנים את זה ב-{::nomarkdown}\(E/F\){:/nomarkdown}. קל לראות ש-{::nomarkdown}\(E\){:/nomarkdown} הוא <strong>מרחב וקטורי</strong> מעל {::nomarkdown}\(F\){:/nomarkdown} והמימד של המרחב הזה מסומן ב-{::nomarkdown}\(\left[E:F\right]\){:/nomarkdown}.

אני מחלק את האיברים ב-{::nomarkdown}\(E\){:/nomarkdown} לשני סוגים: איבר {::nomarkdown}\(\theta\in E\){:/nomarkdown} הוא <strong>אלגברי</strong> מעל {::nomarkdown}\(F\){:/nomarkdown} אם קיים פולינום {::nomarkdown}\(p\left(x\right)\in F\left[x\right]\){:/nomarkdown} כך ש-{::nomarkdown}\(p\left(\theta\right)=0\){:/nomarkdown}. אם {::nomarkdown}\(\theta\in E\){:/nomarkdown} הוא לא אלגברי, אני אומר שהוא <strong>טרנסנדנטי</strong>.

אם {::nomarkdown}\(\theta\in E\){:/nomarkdown} הוא איבר כלשהו (אלגברי <strong>או</strong> טרנסנדנטי), אני מסמן ב-{::nomarkdown}\(F\left(\theta\right)\){:/nomarkdown} את השדה הקטן ביותר שמכיל את {::nomarkdown}\(F\){:/nomarkdown} ואת {::nomarkdown}\(\theta\){:/nomarkdown}. הדרך המקובלת להוכיח שקיים שדה כזה היא לקחת את חיתוך כל תתי-השדות של {::nomarkdown}\(E\){:/nomarkdown} שמכילים את {::nomarkdown}\(F,\theta\){:/nomarkdown} (למשל, {::nomarkdown}\(E\){:/nomarkdown}); לא קשה להוכיח שחיתוך כלשהו של שדות הוא שדה ושהתוצאה היא השדה הקטן ביותר המבוקש.

עכשיו, הנה כמה מההגדרות המרכזיות על הרחבת שדות {::nomarkdown}\(E/F\){:/nomarkdown} כלשהי:
<ul>
 	<li>אני אומר ש-{::nomarkdown}\(E/F\){:/nomarkdown} <strong>סופית</strong> אם {::nomarkdown}\(\left[E:F\right]\){:/nomarkdown} סופי.</li>
 	<li>אני אומר ש-{::nomarkdown}\(E/F\){:/nomarkdown} <strong>אלגברית</strong> אם <strong>כל</strong> איבר של {::nomarkdown}\(E\){:/nomarkdown} הוא אלגברי מעל {::nomarkdown}\(F\){:/nomarkdown}.</li>
 	<li>אני אומר ש-{::nomarkdown}\(E/F\){:/nomarkdown} <strong>פשוטה</strong> אם {::nomarkdown}\(E=F\left(\theta\right)\){:/nomarkdown} עבור {::nomarkdown}\(\theta\in E\){:/nomarkdown} כלשהו; במקרה הזה אני גם אומר ש-{::nomarkdown}\(\theta\){:/nomarkdown} הוא <strong>איבר פרימיטיבי</strong> עבור ההרחבה {::nomarkdown}\(E/F\){:/nomarkdown}.</li>
</ul>
בואו נתחיל מלנסות להבין את הקשרים שיש בין שלוש התכונות הללו.
<h2>הרחבות סופיות, אלגבריות ופשוטות - מי נגד מי?</h2>
בפוסט הקודם ראינו שני עניינים שהם צדדים שונים של אותו המטבע:
<ul>
 	<li>אם {::nomarkdown}\(F\){:/nomarkdown} שדה ו-{::nomarkdown}\(p\left(x\right)\in F\left[x\right]\){:/nomarkdown} פולינום <strong>אי-פריק</strong> אז קיימת הרחבה {::nomarkdown}\(E/F\){:/nomarkdown} ואיבר {::nomarkdown}\(\theta\in E\){:/nomarkdown} כך ש-{::nomarkdown}\(p\left(\theta\right)=0\){:/nomarkdown} ו-{::nomarkdown}\(F\left(\theta\right)\cong F\left[x\right]/\left\langle p\left(x\right)\right\rangle \){:/nomarkdown}.</li>
 	<li>אם {::nomarkdown}\(E/F\){:/nomarkdown} הרחבת שדות ו-{::nomarkdown}\(\theta\in E\){:/nomarkdown} אלגברי מעל {::nomarkdown}\(F\){:/nomarkdown} אז קיים פולינום מתוקן <strong>יחיד </strong>מדרגה חיובית מינימלית, {::nomarkdown}\(m_{\theta,F}\left(x\right)\){:/nomarkdown}, כך ש-{::nomarkdown}\(m_{\theta,F}\left(\theta\right)=0\){:/nomarkdown}. הפולינום הזה נקרא <strong>הפולינום המינימלי </strong>של {::nomarkdown}\(\theta\){:/nomarkdown} מעל {::nomarkdown}\(F\){:/nomarkdown}, ומתקיים {::nomarkdown}\(F\left(\theta\right)\cong F\left[x\right]/\left\langle m_{F}\left(x\right)\right\rangle \){:/nomarkdown}.</li>
</ul>
ראינו גם שבמקרה שבו {::nomarkdown}\(\theta\){:/nomarkdown} אלגברי מעל {::nomarkdown}\(F\){:/nomarkdown}, אפשר לתאר את {::nomarkdown}\(F\left(\theta\right)\){:/nomarkdown} בתור {::nomarkdown}\(F\left(\theta\right)=\left\{ p\left(\theta\right)\ \|\ p\left(x\right)\in F\left[x\right]\right\} \){:/nomarkdown}, כלומר בתור כל הפולינומים ב-{::nomarkdown}\(\theta\){:/nomarkdown} עם מקדמים ב-{::nomarkdown}\(F\){:/nomarkdown}. אם נסמן {::nomarkdown}\(n=\deg m_{\theta,F}\left(x\right)\){:/nomarkdown} אז ניתן להסתפק רק בפולינומים ממעלה {::nomarkdown}\(n-1\){:/nomarkdown} לכל היותר; במילים אחרות, {::nomarkdown}\(F\left(\theta\right)\){:/nomarkdown} נפרש כמרחב וקטורי מעל {::nomarkdown}\(F\){:/nomarkdown} על ידי הקבוצה {::nomarkdown}\(\left\{ 1,\theta,\dots,\theta^{n-1}\right\} \){:/nomarkdown}.

כדי להשתכנע שזה עובד צריך להשתכנע בשני דברים: שאפשר לכתוב את {::nomarkdown}\(\theta^{n}\){:/nomarkdown} בתור צירוף לינארי של הוקטורים הללו (כך שאפשר להקטין את המעריך של כל חזקה חיובית של {::nomarkdown}\(\theta\){:/nomarkdown} עד שנקבל צירוף לינארי של חזקות מ-0 ועד {::nomarkdown}\(n-1\){:/nomarkdown}), ושאפשר לכתוב את {::nomarkdown}\(\theta^{-1}\){:/nomarkdown} בתור צירוף לינארי שכזה. אם נכתוב במפורש

{::nomarkdown}\(m_{\theta,F}\left(x\right)=a_{n}x^{n}+\dots+a_{1}x+a_{0}\){:/nomarkdown}

אז נקבל את המשוואה

{::nomarkdown}\(a_{n}\theta^{n}+\dots+a_{1}\theta+a_{0}=0\){:/nomarkdown}

שממנה ניתן לחלץ:

{::nomarkdown}\(\theta^{n}=-\frac{1}{a_{n}}\left(a_{n-1}\theta^{n-1}+\dots+a_{1}\theta+a_{0}\right)\){:/nomarkdown}

{::nomarkdown}\(\theta^{-1}=-\frac{1}{a_{0}}\left(a_{n}\theta^{n-1}+\dots+a_{2}\theta+a_{1}\right)\){:/nomarkdown}

אם {::nomarkdown}\(\theta\){:/nomarkdown} טרנסנדנטי מעל {::nomarkdown}\(F\){:/nomarkdown} אז התיאור הכי טוב שלנו ל-{::nomarkdown}\(F\left(\theta\right)\){:/nomarkdown} הוא בתור המרחב הוקטורי שנפרש על ידי {::nomarkdown}\(\left\{ \dots,\theta^{-2},\theta^{-1},1,\theta,\theta^{2},\dots\right\} \){:/nomarkdown} מעל {::nomarkdown}\(F\){:/nomarkdown}.

מסקנה אחת מהדיון הזה היא זו: אם {::nomarkdown}\(\theta\){:/nomarkdown} אלגברי מעל {::nomarkdown}\(F\){:/nomarkdown} עם פולינום מינימלי ממעלה {::nomarkdown}\(n\){:/nomarkdown}, אז {::nomarkdown}\(\left[F\left(\theta\right):F\right]=n\){:/nomarkdown}. גם הכיוון השני נכון כמעט באותה צורה: נניח ש-{::nomarkdown}\(\left[F\left(\theta\right):F\right]=n\){:/nomarkdown}, אז זה אומר שהקבוצה {::nomarkdown}\(\left\{ 1,\theta,\dots,\theta^{n-1},\theta\right\} \){:/nomarkdown} היא <strong>תלויה לינארית</strong> (יש בה {::nomarkdown}\(n+1\){:/nomarkdown} איברים של המרחב הוקטורי {::nomarkdown}\(F\left(\theta\right)\){:/nomarkdown} מעל {::nomarkdown}\(F\){:/nomarkdown}) והצירוף הלינארי שלה ששווה 0 יתן לנו פולינום שמאפס את {::nomarkdown}\(\theta\){:/nomarkdown} ויוכיח ש-{::nomarkdown}\(\theta\){:/nomarkdown} אלגברי.

אם כן, משפט ראשון שאפשר לצטט עוסק בקשר בין הרחבות פשוטות והרחבות סופיות:
<ul>
 	<li>הרחבה פשוטה {::nomarkdown}\(F\left(\theta\right)/F\){:/nomarkdown} היא סופית אם ורק אם {::nomarkdown}\(\theta\){:/nomarkdown} אלגברי מעל {::nomarkdown}\(F\){:/nomarkdown}.</li>
</ul>
או באופן שקול:
<ul>
 	<li>הרחבה פשוטה {::nomarkdown}\(F\left(\theta\right)/F\){:/nomarkdown} היא אינסופית אם ורק אם {::nomarkdown}\(\theta\){:/nomarkdown} טרנסנדנטי מעל {::nomarkdown}\(F\){:/nomarkdown}.</li>
</ul>
אם כן, ראינו שהרחבה פשוטה היא לפעמים סופית ולפעמים לא, אבל אנחנו יודעים בדיוק מה קורה בכל אחד מהמקרים. מה עם הכיוון השני? האם הרחבה סופית היא בהכרח פשוטה, או שאפשר לייצר הרחבות סופיות אחרות? אינטואיטיבית נראה לי מובן מאליו שאפשר לייצר הרחבות מתוחכמות שאי אפשר ליצור על ידי איבר בודד ועדיין לקבל מימד סופי מעל {::nomarkdown}\(F\){:/nomarkdown}, ולכן כל כך מפתיע (אותי) לגלות ש"כמעט תמיד" מתקיים שאם {::nomarkdown}\(E/F\){:/nomarkdown} הרחבה סופית אז היא גם פשוטה. התוצאה הזו נקראת <strong>משפט האיבר הפרימיטיבי</strong> והיא תצטרך לחכות להמשך כי הניסוח וההוכחה שלה דורשים מושגים שעדיין אין לנו. בכל זאת אצטט אותה:
<ul>
 	<li>אם {::nomarkdown}\(E/F\){:/nomarkdown} הרחבה סופית וספרבילית, אז {::nomarkdown}\(E/F\){:/nomarkdown} פשוטה.</li>
</ul>
אני לא יכול להסביר כרגע מה "ספרבילית" אומר, אבל מקרה פרטי של המשפט שלעיל הוא שאם {::nomarkdown}\(E/F\){:/nomarkdown} הרחבה סופית ו-{::nomarkdown}\(F\){:/nomarkdown} שדה ממציין 0 (כמו {::nomarkdown}\(\mathbb{Q}\){:/nomarkdown}) אז {::nomarkdown}\(E/F\){:/nomarkdown} תהיה פשוטה. כלומר, אם אנחנו רוצים למצוא הרחבה סופית שאינה פשוטה אנחנו נדחפים לשדות "מוזרים" עם מציין שונה מאפס, וגם שם המשפט יעבוד לפעמים.

מכך שכל הרחבה פשוטה עם איבר אלגברי היא סופית אפשר לקבל במהירות תוצאה נוספית:
<ul>
 	<li>אם {::nomarkdown}\(E/F\){:/nomarkdown} הרחבה סופית, אז היא הרחבה אלגברית.</li>
</ul>
למה זה נכון? בואו ניקח {::nomarkdown}\(\theta\in E\){:/nomarkdown} כלשהו. אנחנו רוצים להראות שהוא אלגברי מעל {::nomarkdown}\(F\){:/nomarkdown}, וראינו כבר שזה שקול לכך ש-{::nomarkdown}\(\left[F\left(\theta\right):F\right]\){:/nomarkdown} סופית. כעת, {::nomarkdown}\(F\left(\theta\right)\){:/nomarkdown} הוא תת-מרחב וקטורי של {::nomarkdown}\(E\){:/nomarkdown}, כשחושבים על שני השדות הללו כמרחבים וקטוריים מעל {::nomarkdown}\(F\){:/nomarkdown}. המימד של תת-מרחב קטן או שווה למימד של המרחב כולו, ולכן אם {::nomarkdown}\(\left[E:F\right]\){:/nomarkdown} סופית, כך גם {::nomarkdown}\(\left[F\left(\theta\right):F\right]\){:/nomarkdown}.

מה עם הכיוון השני של המשפט הזה? ובכן:
<ul>
 	<li>זה <strong>לא נכון</strong> שאם {::nomarkdown}\(E/F\){:/nomarkdown} הרחבה אלגברית אז היא סופית.</li>
</ul>
האם אני יכול לתת דוגמא נגדית פשוטה לטענה הזו? לא בדיוק. אילו שדות אנחנו מכירים בשלב הזה? את {::nomarkdown}\(\mathbb{Q},\mathbb{R},\mathbb{C}\){:/nomarkdown} והרחבות פשוטות שלהם. כעת, {::nomarkdown}\(\left[\mathbb{C}:\mathbb{R}\right]=2\){:/nomarkdown} (כי הפולינום המינימלי של {::nomarkdown}\(i\){:/nomarkdown} הוא {::nomarkdown}\(x^{2}+1\){:/nomarkdown}) ובהמשך נראה ש-{::nomarkdown}\(\mathbb{C}\){:/nomarkdown} לא ניתן להרחבה אלגברית שתניב משהו חדש, אז זה לא המקום לחפש בו הרחבות אלגבריות אינסופיות. כמו כן, {::nomarkdown}\(\left[\mathbb{R}:\mathbb{Q}\right]\){:/nomarkdown} אינסופית אבל זו לא הרחבה אלגברית (כי למשל {::nomarkdown}\(\pi\){:/nomarkdown} לא אלגברי מעל {::nomarkdown}\(\mathbb{Q}\){:/nomarkdown}). אז מה כן אפשר לתת? בהמשך נראה שקיים יצור שנקרא <strong>הסגור האלגברי</strong> של {::nomarkdown}\(\mathbb{Q}\){:/nomarkdown}; היצור הזה (שהוא ממש לא {::nomarkdown}\(\mathbb{R}\){:/nomarkdown}) הוא הרחבה אלגברית של {::nomarkdown}\(\mathbb{Q}\){:/nomarkdown} אבל הוא יהיה רחוק מלהיות הרחבה סופית.

אפיון קצת יותר מחודד למהי הרחבה סופית אפשר למצוא במשפט הבא:
<ul>
 	<li>הרחבה {::nomarkdown}\(E/F\){:/nomarkdown} היא סופית אם ורק אם {::nomarkdown}\(E\){:/nomarkdown} מתקבל מ-{::nomarkdown}\(F\){:/nomarkdown} על ידי הוספת מספר <strong>סופי</strong> של איברים אלגבריים מעל {::nomarkdown}\(F\){:/nomarkdown}.</li>
</ul>
איך מוכיחים את זה? אנחנו עוד לא שם, אבל נהיה עוד מעט.

ראינו את הקשר בין "הרחבה פשוטה" ו"הרחבה סופית" ואת הקשר בין "הרחבה סופית" ו"הרחבה אלגברית". ומה על הקשר בין הרחבות אלגבריות ופשוטות? ובכן, צד אחד הוא נכון:
<ul>
 	<li>כל הרחבה פשוטה על ידי איבר אלגברי היא אלגברית.</li>
</ul>
אינטואיטיבית, זה בגלל שב-{::nomarkdown}\(F\left(\theta\right)\){:/nomarkdown} האיברים הם רק אברי {::nomarkdown}\(F\){:/nomarkdown} שאלגבריים באופן טריוויאלי (אם {::nomarkdown}\(a\in F\){:/nomarkdown} אז {::nomarkdown}\(x-a\){:/nomarkdown} הוא הפולינום המינימלי של {::nomarkdown}\(a\){:/nomarkdown} מעל {::nomarkdown}\(F\){:/nomarkdown}) ו-{::nomarkdown}\(\theta\){:/nomarkdown} אלגברי על פי ההנחה (כמובן שאם {::nomarkdown}\(\theta\){:/nomarkdown} היה טרנסנדנטי אז ההרחבה לא הייתה אלגברית). עדיין, יש פה משהו קצת לא ברור - למה אם {::nomarkdown}\(\theta\){:/nomarkdown} אלגברי זה אומר שגם כל החזקות שלו אלגבריות? וכל הפולינומים ב-{::nomarkdown}\(\theta\){:/nomarkdown} אלגבריים? למשל, למה {::nomarkdown}\(\theta^{7}+3\theta+2\){:/nomarkdown} אלגברי? השאלה הזו היא מקרה פרטי של שאלה כללית יותר: נניח ש-{::nomarkdown}\(\alpha,\beta\){:/nomarkdown} הם שני איברים אלגבריים מעל {::nomarkdown}\(F\){:/nomarkdown}. האם {::nomarkdown}\(\alpha+\beta\){:/nomarkdown} אלגברי? והאם {::nomarkdown}\(\alpha\beta\){:/nomarkdown} אלגברי? במילים אחרות, האם המספרים האלגבריים מעל {::nomarkdown}\(F\){:/nomarkdown} הם <strong>חוג</strong>? זה מטפל בפולינומים ב-{::nomarkdown}\(\theta\){:/nomarkdown} כי מהסגירות לכפל מקבלים גם ש-{::nomarkdown}\(\theta^{n}\){:/nomarkdown} אלגברי וגם ש-{::nomarkdown}\(a_{n}\theta^{n}\){:/nomarkdown} אלגברי עבור {::nomarkdown}\(a_{n}\in F\){:/nomarkdown} (כל איבר של {::nomarkdown}\(F\){:/nomarkdown} הוא אלגברי מעל {::nomarkdown}\(F\){:/nomarkdown}) ומהסגירות לחיבור מקבלים את הפולינום כולו.

ובכן, בהמשך נראה שהמשפט הזה נכון, ואפילו יותר מכך: אם {::nomarkdown}\(\alpha,\beta\){:/nomarkdown} אלגבריים מעל {::nomarkdown}\(F\){:/nomarkdown} כך גם {::nomarkdown}\(\alpha\pm\beta\){:/nomarkdown} ו-{::nomarkdown}\(\alpha\beta\){:/nomarkdown} ואם {::nomarkdown}\(\beta\ne0\){:/nomarkdown} אז גם {::nomarkdown}\(\frac{\alpha}{\beta}\){:/nomarkdown}; במילים אחרות, אם ניקח הרחבה {::nomarkdown}\(E/F\){:/nomarkdown}, אז אוסף כל האיברים ב-{::nomarkdown}\(E\){:/nomarkdown} שהם אלגבריים מעל {::nomarkdown}\(F\){:/nomarkdown} יהיה <strong>תת-שדה</strong> של {::nomarkdown}\(F\){:/nomarkdown}. יכול להיות מפתה לנסות להוכיח את המשפט הזה כבר עכשיו - זה מרגיש שאמורה להיות לו הוכחה קונסטרוקטיבית - ניקח פולינומים שמאפסים את {::nomarkdown}\(\alpha,\beta\){:/nomarkdown} ונבנה מהם איכשהו פולינום שמאפס את {::nomarkdown}\(\alpha+\beta\){:/nomarkdown}. אני לא אומר שאי אפשר לעשות את זה, אבל זה יהיה כרוך בקושי טכני; אני עוד מעט הולך להוכיח ממילא משפט שההוכחה שלו אכן תהיה כרוכה בקושי טכני, והטענה שלי תתקבל ממנו כמסקנה פשוטה יחסית, כך שאין סיבה לחזור על הקושי הטכני פעמיים.

נסכם: ראינו שאם {::nomarkdown}\(\theta\){:/nomarkdown} אלגברי מעל {::nomarkdown}\(F\){:/nomarkdown} אז ההרחבה הפשוטה {::nomarkdown}\(F\left(\theta\right)\){:/nomarkdown} היא אלגברית. מה עם הכיוון השני? אם {::nomarkdown}\(E/F\){:/nomarkdown} הרחבה אלגברית, האם היא פשוטה? ובכן, לא. אם זו הרחבה אינסופית (ויש הרחבות אלגבריות אינסופיות) אז בוודאי שאינה פשוטה (ראינו קודם שכל הרחבה אלגברית פשוטה היא סופית). אם לעומת זאת ההרחבה סופית, אז משפט האיבר הפרימיטיבי שהזכרתי קודם נכנס לתמונה ומראה שבחלק מהמקרים (כאשר {::nomarkdown}\(E/F\){:/nomarkdown} הרחבה <strong>ספרבילית</strong>, מה שזה לא יהיה) אז {::nomarkdown}\(E/F\){:/nomarkdown} פשוטה.
<h2>בואו נרחיב על הרחבות</h2>
כל הדיון עד כה התייחס לסיטואציה הפשוטה יחסית של הרחבה בודדת {::nomarkdown}\(E/F\){:/nomarkdown}. הסיפור נעשה מעניין באמת כשיש לנו יותר מהרחבה אחת במשחק בו זמנית. המקרה המעניין הפשוט ביותר הוא זה שבו יש לנו <strong>שלושה</strong> שדות שכל אחד מרחיב את קודמו: הרחבות {::nomarkdown}\(E/F\){:/nomarkdown} ו-{::nomarkdown}\(K/E\){:/nomarkdown}. מכיוון ש-{::nomarkdown}\(F\subseteq E\subseteq K\){:/nomarkdown} הרי שגם יש לנו פה הרחבה {::nomarkdown}\(K/F\){:/nomarkdown}, ו-{::nomarkdown}\(E\){:/nomarkdown} הוא מעין "שדה ביניים" של ההרחבה {::nomarkdown}\(K/F\){:/nomarkdown} הזו. לדבר הזה אני אקרא לרוב <strong>מגדל של שדות</strong>.

השאלה הראשונה לטפל בה היא זו: אילו דברים מעניינים אפשר לומר על {::nomarkdown}\(K/F\){:/nomarkdown} אם אנחנו כבר יודעים דברים מעניינים על {::nomarkdown}\(E/F\){:/nomarkdown} ועל {::nomarkdown}\(K/E\){:/nomarkdown}? למשל, אם שתיהן סופיות, האם גם {::nomarkdown}\(K/F\){:/nomarkdown} סופית? לא רק שהתשובה היא "כן", אלא גם אנחנו יודעים בדיוק <strong>כמה</strong> היא סופית, וה<strong>כמה</strong> הזה יהיה שימושי בצורה בלתי רגילה. הנה המשפט:
<ul>
 	<li>אם {::nomarkdown}\(F\subseteq E\subseteq K\){:/nomarkdown} שדות אז {::nomarkdown}\(\left[K:F\right]=\left[K:E\right]\left[E:F\right]\){:/nomarkdown}</li>
</ul>
במילים: המימד של המרחב הוקטורי {::nomarkdown}\(K\){:/nomarkdown} מעל השדה {::nomarkdown}\(F\){:/nomarkdown} הוא מכפלת המימדים של המרחב הוקטורי {::nomarkdown}\(E\){:/nomarkdown} מעל {::nomarkdown}\(F\){:/nomarkdown} והמרחב הוקטורי {::nomarkdown}\(K\){:/nomarkdown} מעל {::nomarkdown}\(E\){:/nomarkdown}. שימו לב: יש לנו פה שני מרחבים וקטוריים שונים <strong>מעל שדות שונים</strong>. זו סיטואציה שונה ממה שקורה בדרך כלל באלגברה לינארית, שם קובעים את השדה מראש וכל הדיון מתנהל מעליו; פה יש לנו מראש אינטראקציה בין מרחבים שהם מעל שדות שונים וקשורים זה לזה.

ההוכחה של המשפט היא טכנית (זה המשפט הטכני שדיברתי עליו קודם) אבל די אינטואיטיבית. בואו ניקח בסיסים לשני המרחבים הוקטוריים שלנו: {::nomarkdown}\(\left\{ \alpha_{1},\dots,\alpha_{n}\right\} \){:/nomarkdown} יהיה בסיס למרחב הוקטורי {::nomarkdown}\(E\){:/nomarkdown} מעל {::nomarkdown}\(F\){:/nomarkdown}, ואילו {::nomarkdown}\(\left\{ \beta_{1},\dots,\beta_{m}\right\} \){:/nomarkdown} יהיה בסיס למרחב הוקטורי {::nomarkdown}\(K\){:/nomarkdown} מעל {::nomarkdown}\(E\){:/nomarkdown}. נראה מתבקש מאוד שהבסיס ל-{::nomarkdown}\(K\){:/nomarkdown} מעל {::nomarkdown}\(F\){:/nomarkdown} יהיה פשוט מורכב מכל המכפלות האפשריות: {::nomarkdown}\(B=\left\{ \alpha_{i}\beta_{j}\ \|\ 1\le i\le n,1\le j\le m\right\} \){:/nomarkdown}. זו קבוצה מגודל {::nomarkdown}\(mn=\left[K:E\right]\left[E:F\right]\){:/nomarkdown}, אז אם נוכיח שהיא אכן בסיס, סיימנו.

נתחיל מכך שהקבוצה שלנו אכן פורשת את {::nomarkdown}\(K\){:/nomarkdown} מעל {::nomarkdown}\(F\){:/nomarkdown}. ניקח {::nomarkdown}\(\theta\in K\){:/nomarkdown} כלשהו. אז מכיוון שה-{::nomarkdown}\(\beta\){:/nomarkdown}-ות הן בסיס ל-{::nomarkdown}\(K\){:/nomarkdown} מעל {::nomarkdown}\(E\){:/nomarkdown}, נקבל:

{::nomarkdown}\(\theta=\sum_{j=1}^{m}b_{j}\beta_{j}\){:/nomarkdown}

כך ש-{::nomarkdown}\(b_{1},\dots,b_{m}\in E\){:/nomarkdown} איברים כלשהם. כעת, כל אחד מהאיברים הללו ניתן לכתיבה בעצמו בתור צירוף לינארי של ה-{::nomarkdown}\(\alpha\){:/nomarkdown}-ות שמהוות בסיס ל-{::nomarkdown}\(E\){:/nomarkdown} מעל {::nomarkdown}\(F\){:/nomarkdown}, כך שנקבל:

{::nomarkdown}\(b_{j}=\sum_{i=1}^{n}a_{i}^{j}\alpha_{i}\){:/nomarkdown}

עבור {::nomarkdown}\(a_{i}^{j}\in F\){:/nomarkdown}-ים לכל {::nomarkdown}\(1\le i\le n,1\le j\le m\){:/nomarkdown}.

משתי המשוואות הללו ביחד מקבלים:

{::nomarkdown}\(\theta=\sum_{j=1}^{m}\left(\sum_{i=1}^{n}a_{i}^{j}\alpha_{i}\right)\beta_{j}=\sum_{i,j}a_{i}^{j}\left(\alpha_{i}\beta_{j}\right)\){:/nomarkdown}

וזה צירוף לינארי עם מקדמים מ-{::nomarkdown}\(F\){:/nomarkdown} של אברי הקבוצה {::nomarkdown}\(B\){:/nomarkdown} שלנו. מכאן שהיא אכן קבוצה פורשת.

נשאר עדיין להראות ש-{::nomarkdown}\(B\){:/nomarkdown} היא קבוצה בלתי תלויה לינארית; הדרך הפשוטה לעשות זאת היא לקחת צירוף לינארי של אבריה ששווה אפס ולהראות שכל מקדם בצירוף הוא אפס. אם כן, נניח ש-

{::nomarkdown}\(\sum_{i,j}a_{i}^{j}\left(\alpha_{i}\beta_{j}\right)=0\){:/nomarkdown}

אז בואו "נהפוך" את המשוואה הזו; נקבץ מקדמים של כל {::nomarkdown}\(\beta_{j}\){:/nomarkdown} ונקבל

{::nomarkdown}\(\sum_{j=1}^{m}\left(\sum_{i=1}^{n}a_{i}^{j}\alpha_{i}\right)\beta_{j}=0\){:/nomarkdown}

קיבלנו כאן צירוף לינארי של אברי <strong>בסיס</strong> של {::nomarkdown}\(K\){:/nomarkdown} מעל {::nomarkdown}\(E\){:/nomarkdown} ששווה אפס, לכן נקבל לכל {::nomarkdown}\(1\le j\le m\){:/nomarkdown} את המשוואה

{::nomarkdown}\(\sum_{i=1}^{n}a_{i}^{j}\alpha_{i}=0\){:/nomarkdown}

וזה צירוף לינארי של אברי <strong>בסיס</strong> של {::nomarkdown}\(E\){:/nomarkdown} מעל {::nomarkdown}\(F\){:/nomarkdown} ולכן {::nomarkdown}\(a_{i}^{j}=0\){:/nomarkdown} לכל {::nomarkdown}\(1\le i\le n\){:/nomarkdown} וכל {::nomarkdown}\(1\le j\le m\){:/nomarkdown}, וקיבלנו את מה שרצינו - הקבוצה {::nomarkdown}\(B\){:/nomarkdown} היא אכן בסיס ל-{::nomarkdown}\(K\){:/nomarkdown} מעל {::nomarkdown}\(F\){:/nomarkdown}. אין בהוכחה הזו שום דבר מתוחכם; סתם כתיבה טכנית בסגנון אלגברה לינארית.

לא סיימתי את ההוכחה עד הסוף, כי לא התייחסתי לאפשרות שאחת מההרחבות {::nomarkdown}\(E/F\){:/nomarkdown} או {::nomarkdown}\(K/E\){:/nomarkdown} היא <strong>אינסופית</strong>; במקרה זה גם {::nomarkdown}\(K/F\){:/nomarkdown} תהיה אינסופית (מה שמתאים לתיאור המשפט בתור מכפלה, אם מקבלים את המוסכמה {::nomarkdown}\(\infty\cdot a=\infty\){:/nomarkdown} וכדומה). אין כאן יותר מדי מה לומר: אם {::nomarkdown}\(K/E\){:/nomarkdown} היא אינסופית אז יש לנו קבוצה אינסופית של אברי {::nomarkdown}\(K\){:/nomarkdown} שהיא בלתי תלויה לינארית מעל {::nomarkdown}\(E\){:/nomarkdown}; מכאן שבוודאי שהיא תהיה בלתי תלויה לינארית גם מעל {::nomarkdown}\(F\){:/nomarkdown} (כי מעל {::nomarkdown}\(F\){:/nomarkdown} יש <strong>פחות </strong>צירופים לינאריים אפשריים שיכולים לקלקל את תכונת ה"בלתי תלויה לינארית" שלה) ולכן {::nomarkdown}\(K/F\){:/nomarkdown} אינסופית. אם לעומת זאת {::nomarkdown}\(E/F\){:/nomarkdown} אינסופית, אז קיימת קבוצה אינסופית של אברי {::nomarkdown}\(E\){:/nomarkdown} שהיא בלתי תלויה מעל {::nomarkdown}\(F\){:/nomarkdown}; <strong>אותה קבוצה בדיוק</strong> היא כמובן גם קבוצה של אברי {::nomarkdown}\(K\){:/nomarkdown} שהיא בלתי תלויה מעל {::nomarkdown}\(F\){:/nomarkdown}, ולכן שוב {::nomarkdown}\(K/F\){:/nomarkdown} אינסופית.

מכאן ואילך כל מה שיקרה בפוסט הזה יהיה תוצאה של המשפט שזה עתה הראיתי.

לפני שנטבע בים של משפטים כלליים, הנה דוגמא קטנה וחביבה שמראה כמה המשפט הזה יעיל.

בואו נסתכל על הפולינום {::nomarkdown}\(p\left(x\right)=x^{3}-3x-1\){:/nomarkdown} מעל {::nomarkdown}\(\mathbb{Q}\){:/nomarkdown}. אפשר לראות בעזרת "משפט הניחוש האינטליגנטי" שאין לפולינום הזה שורשים מעל {::nomarkdown}\(\mathbb{Q}\){:/nomarkdown} (פשוט בודקים את כל האפשרויות; המשפט מצביע על כולן, ויש מספר סופי מהן) ולכן, מכיוון שהוא ממעלה 3, הוא אי-פריק. יהא {::nomarkdown}\(\alpha\){:/nomarkdown} שורש שלו (בפוסט הקודם ראינו שקיים כזה) ונסתכל על השדה {::nomarkdown}\(\mathbb{Q}\left(\alpha\right)\){:/nomarkdown}. השאלה: האם {::nomarkdown}\(\sqrt{2}\in\mathbb{Q}\left(\alpha\right)\){:/nomarkdown}?

נסו רגע לחשוב איך אפשר להוכיח טענה כזו בלי כל מה שראינו בפוסט הזה. התשובה שלי: אין לי מושג. אני מניח שהייתי מנסה למצוא הצגה מפורשת ל-{::nomarkdown}\(\alpha\){:/nomarkdown} בעזרת נוסחת השורשים לפולינום ממעלה שלישית (אוי ווי לי) ואז... אה... אולי הייתי כופל... אה... אולי הייתי מסתכל על פולינום בזה... אה... בחיי שאין לי מושג, וכל מה שאני מנסה לחשוב עליו רק מפיל אותי לים טכני מזעזע.

ועם מה שראינו?

ובכן, אם {::nomarkdown}\(\sqrt{2}\in\mathbb{Q}\left(\alpha\right)\){:/nomarkdown} אז קיבלנו מגדל של שדות: {::nomarkdown}\(\mathbb{Q}\subseteq\mathbb{Q}\left(\sqrt{2}\right)\subseteq\mathbb{Q}\left(\alpha\right)\){:/nomarkdown}. בפרט אנחנו צריכים לקבל ש-{::nomarkdown}\(\left[\mathbb{Q}\left(\sqrt{2}\right):\mathbb{Q}\right]\){:/nomarkdown} צריך לחלק את {::nomarkdown}\(\left[\mathbb{Q}\left(\alpha\right):\mathbb{Q}\right]\){:/nomarkdown}. אלא מה? הפולינום המינימלי של {::nomarkdown}\(\sqrt{2}\){:/nomarkdown} מעל {::nomarkdown}\(\mathbb{Q}\){:/nomarkdown} הוא {::nomarkdown}\(x^{2}-2\){:/nomarkdown} ולכן {::nomarkdown}\(\left[\mathbb{Q}\left(\sqrt{2}\right):\mathbb{Q}\right]=2\){:/nomarkdown}, ואילו הפולינום המינימלי של {::nomarkdown}\(\alpha\){:/nomarkdown} מעל {::nomarkdown}\(\mathbb{Q}\){:/nomarkdown} הוא {::nomarkdown}\(x^{3}-3x-1\){:/nomarkdown} ולכן {::nomarkdown}\(\left[\mathbb{Q}\left(\alpha\right):\mathbb{Q}\right]=3\){:/nomarkdown} אבל 2 לא מחלק את 3 - והופס, הסיפור נגמר. איכשהו הפכנו את השאלה המורכבת "האם ניתן להציג איבר באמצעות פעולות החיבור, החיסור, הכפל והחילוק של איברים אחרים" לשאלה הפשוטה "האם מספר טבעי אחד מחלק מספר טבעי אחר". לדבר הזה יש לי שם אחד ויחיד - <strong>קסם</strong>.
<h2>פשוט על פשוט, אלגברי על אלגברי</h2>
בואו ניקח הרחבה {::nomarkdown}\(E/F\){:/nomarkdown} ושני איברים {::nomarkdown}\(\alpha,\beta\in E\){:/nomarkdown}. קודם דיברנו על "הרחבה פשוטה" של {::nomarkdown}\(F\){:/nomarkdown} - השדה {::nomarkdown}\(F\left(\alpha\right)\){:/nomarkdown} שמתקבל מ"הוספת" {::nomarkdown}\(\alpha\){:/nomarkdown} ו"סגירה" ביחס לכך. פורמלית ההגדרה שלנו הייתה קצת שונה: הגדרנו את {::nomarkdown}\(F\left(\alpha\right)\){:/nomarkdown} בתור השדה הקטן ביותר שמכיל גם את {::nomarkdown}\(F\){:/nomarkdown} וגם את {::nomarkdown}\(\alpha\){:/nomarkdown}; הוכחנו ששדה כזה קיים כי הוא שווה לחיתוך כל השדות שמכילים את {::nomarkdown}\(F\){:/nomarkdown} ואת {::nomarkdown}\(\alpha\){:/nomarkdown} - חיתוך שלכל הפחות {::nomarkdown}\(E\){:/nomarkdown} עצמו משתתף בו ולכן הוא מוגדר היטב.

את אותו דבר בדיוק אפשר לעשות גם עבור שני איברים: להגדיר את {::nomarkdown}\(F\left(\alpha,\beta\right)\){:/nomarkdown} בתור השדה הקטן ביותר שמכיל את {::nomarkdown}\(\alpha,\beta\){:/nomarkdown} ואת {::nomarkdown}\(F\){:/nomarkdown}. השאלה שמייד קופצת באופן טבעי היא האם מתקיים {::nomarkdown}\(F\left(\alpha,\beta\right)=F\left(\alpha\right)\left(\beta\right)\){:/nomarkdown}. כלומר, האם השדה {::nomarkdown}\(F\left(\alpha,\beta\right)\){:/nomarkdown} שווה ממש לשדה שמתקבל על ידי כך שקודם מרחיבים את {::nomarkdown}\(F\){:/nomarkdown} בצורה פשוטה עם {::nomarkdown}\(\alpha\){:/nomarkdown} ואז את השדה שהתקבל מרחיבים בצורה פשוטה עם {::nomarkdown}\(\beta\){:/nomarkdown}.

התשובה חיובית. מצד אחד {::nomarkdown}\(F\left(\alpha\right)\left(\beta\right)\){:/nomarkdown} הוא שדה שמכיל גם את {::nomarkdown}\(F\){:/nomarkdown}, גם את {::nomarkdown}\(\alpha\){:/nomarkdown} וגם את {::nomarkdown}\(\beta\){:/nomarkdown} ולכן על פי ההגדרה {::nomarkdown}\(F\left(\alpha,\beta\right)\){:/nomarkdown} מוכל בו. מצד שני, {::nomarkdown}\(F\left(\alpha,\beta\right)\){:/nomarkdown} הוא שדה שמכיל את {::nomarkdown}\(F\){:/nomarkdown} ואת {::nomarkdown}\(\alpha\){:/nomarkdown} ולכן בפרט מכיל את כל {::nomarkdown}\(F\left(\alpha\right)\){:/nomarkdown}; על כן, הוא שדה שמכיל את כל {::nomarkdown}\(F\left(\alpha\right)\){:/nomarkdown} וגם את {::nomarkdown}\(\beta\){:/nomarkdown} ולכן מכיל גם את {::nomarkdown}\(F\left(\alpha\right)\left(\beta\right)\){:/nomarkdown}. קיבלנו ששני השדות אכן שווים; לא היה פה משהו מפתיע במיוחד.

אם זה עובד עם שני איברים, אין סיבה שלא יעבוד עם מספר סופי כלשהו של איברים (בואו לא נדבר על אינסוף איברים כרגע...). אם {::nomarkdown}\(\alpha_{1},\dots,\alpha_{n}\in E\){:/nomarkdown} אז {::nomarkdown}\(F\left(\alpha_{1},\dots,\alpha_{n}\right)\){:/nomarkdown} מוגדר בתור השדה הקטן ביותר שמכיל את {::nomarkdown}\(F\){:/nomarkdown} ואת האיברים {::nomarkdown}\(\alpha_{1},\dots,\alpha_{n}\){:/nomarkdown}, ויוצא שהוא שווה לסדרת ההרחבות הפשוטות {::nomarkdown}\(F\left(\alpha_{1}\right)\left(\alpha_{2}\right)\cdots\left(\alpha_{n}\right)\){:/nomarkdown}. פורמלית, אפשר לסמן {::nomarkdown}\(F_{0}=F\){:/nomarkdown} ו-{::nomarkdown}\(F_{k+1}=F_{k}\left(\alpha_{k+1}\right)\){:/nomarkdown}, ולקבל מגדל של שדות

{::nomarkdown}\(F=F_{0}\subseteq F_{1}\subseteq\dots\subseteq F_{n}=F\left(\alpha_{1},\dots,\alpha_{n}\right)\){:/nomarkdown}

האם אפשר לומר משהו מעניין על {::nomarkdown}\(\left[F\left(\alpha_{1},\dots,\alpha_{n}\right):F\right]\){:/nomarkdown}? כן ולא. לא, במובן זה שאי אפשר לדעת במדויק מה המימד הזה יהיה, כי זה תלוי ביחסים בין האיברים שאיתם מרחיבים את {::nomarkdown}\(F\){:/nomarkdown} ולא רק בקשר שלהם ל-{::nomarkdown}\(F\){:/nomarkdown} עצמו, אבל עדיין אפשר לומר <strong>משהו</strong>. בואו נסמן {::nomarkdown}\(\left[F\left(\alpha_{k}\right):F\right]=m_{k}\){:/nomarkdown} - זו מעלת הפולינום המינימלי של {::nomarkdown}\(\alpha_{k}\){:/nomarkdown} מעל {::nomarkdown}\(F\){:/nomarkdown}. כעת, {::nomarkdown}\(F_{k}=F_{k-1}\left(\alpha_{k}\right)/F_{k-1}\){:/nomarkdown}, ולכן המימד של ההרחבה הזו שווה למעלת הפולינום המינימלי של {::nomarkdown}\(\alpha_{k}\){:/nomarkdown} מעל {::nomarkdown}\(F_{k-1}\){:/nomarkdown}. מכיוון ש-{::nomarkdown}\(F\subseteq F_{k-1}\){:/nomarkdown}, הפולינום המינימלי של {::nomarkdown}\(\alpha_{k}\){:/nomarkdown} יכול להיות רק <strong>קטן יותר</strong> מעל {::nomarkdown}\(F_{k-1}\){:/nomarkdown}, כי הוא יהיה חייב לחלק את מי שהיה הפולינום המינימלי של {::nomarkdown}\(\alpha_{k}\){:/nomarkdown} מעל {::nomarkdown}\(F\){:/nomarkdown}. לכן {::nomarkdown}\(\left[F_{k-1}\left(\alpha_{k}\right):F_{k-1}\right]\le m_{k}\){:/nomarkdown} ולכן נקבל:

{::nomarkdown}\(\left[F\left(\alpha_{1},\dots,\alpha_{n}\right):F\right]=\left[F_{n}:F_{n-1}\right]\cdots\left[F_{1}:F_{0}\right]\le m_{n}\cdots m_{1}\){:/nomarkdown}

כלומר, יש לנו חסם עליון על מה מימד ההרחבה הזה יכול להיות; לא ערך מדויק כמו קודם. למשל, אפשר להראות ש-{::nomarkdown}\(\left[\mathbb{Q}\left(\sqrt{2},\sqrt{3}\right):\mathbb{Q}\right]=4\){:/nomarkdown} אבל {::nomarkdown}\(\left[\mathbb{Q}\left(\sqrt{2},-\sqrt{2}\right):\mathbb{Q}\right]=2\){:/nomarkdown}; זה נובע מכך ש-{::nomarkdown}\(\sqrt{2},\sqrt{3}\){:/nomarkdown} הם איברים ש"לא קשורים אלגברית" אחד לשני, בעוד ש-{::nomarkdown}\(-\sqrt{2}\){:/nomarkdown} מתקבל מ-{::nomarkdown}\(\sqrt{2}\){:/nomarkdown} פשוט על ידי כפל באיבר מ-{::nomarkdown}\(\mathbb{Q}\){:/nomarkdown}.

נסכם: ראינו קודם שהרחבה פשוטה עם איבר אלגברי היא סופית; עכשיו אנחנו רואים משהו קצת יותר כללי:
<ul>
 	<li>הרחבה {::nomarkdown}\(F\left(\alpha_{1},\dots,\alpha_{n}\right)/F\){:/nomarkdown} הנוצרת על ידי מספר סופי של איברים אלגבריים היא סופית.</li>
</ul>
הטענה הפשוטה הזו גם נותנת לנו את מה שנראה מסובך למדי קודם: המשפט שאם {::nomarkdown}\(E/F\){:/nomarkdown} היא הרחבה ו-{::nomarkdown}\(\alpha,\beta\in E\){:/nomarkdown} הם אלגבריים מעל {::nomarkdown}\(F\){:/nomarkdown}, אז גם האיברים {::nomarkdown}\(\alpha\pm\beta\){:/nomarkdown}, {::nomarkdown}\(\alpha\beta\){:/nomarkdown} ועבור {::nomarkdown}\(\beta\ne0\){:/nomarkdown} גם {::nomarkdown}\(\frac{\alpha}{\beta}\){:/nomarkdown} הם כולם אלגבריים מעל {::nomarkdown}\(F\){:/nomarkdown}. זה נובע מכך שכל האיברים הללו הם בעצמם איברים של ההרחבה {::nomarkdown}\(F\left(\alpha,\beta\right)\){:/nomarkdown} שהיא סופית ולכן אלגברית.

ראינו את ההכללה של המשפט "כל הרחבה פשוטה היא סופית". כעת, ההיפוך של המשפט הזה - "כל הרחבה סופית היא פשוטה" - לא היה נכון, אם כי משפט האיבר הפרימיטיבי מראה שהוא כן נכון במקרים רבים; אבל עבור המשפט המורחב שכרגע הצגתי ההפך כן נכון:
<ul>
 	<li>אם הרחבה {::nomarkdown}\(E/F\){:/nomarkdown} היא סופית אז {::nomarkdown}\(E=F\left(\alpha_{1},\dots,\alpha_{n}\right)\){:/nomarkdown} עבור איברים {::nomarkdown}\(\alpha_{1},\dots,\alpha_{n}\){:/nomarkdown} אלגבריים מעל {::nomarkdown}\(F\){:/nomarkdown}.</li>
</ul>
כלומר, כל הרחבה סופית נוצרת על ידי <strong>מספר סופי</strong> של איברים אלגבריים. ההוכחה לכך היא פשוטה למדי: אם {::nomarkdown}\(E/F\){:/nomarkdown} היא סופית, זה אומר שקיים ל-{::nomarkdown}\(E\){:/nomarkdown} בסיס מעל {::nomarkdown}\(F\){:/nomarkdown}, נסמן את איבריו {::nomarkdown}\(\alpha_{1},\dots,\alpha_{n}\){:/nomarkdown}. מכיוון שכל איבר ב-{::nomarkdown}\(E\){:/nomarkdown} ניתן לכתיבה בתור צירוף לינארי של האיברים הללו עם מקדמים מתוך {::nomarkdown}\(F\){:/nomarkdown} ברור ש-{::nomarkdown}\(E\subseteq F\left(\alpha_{1},\dots,\alpha_{n}\right)\){:/nomarkdown}, אבל מצד שני מכיוון ש-{::nomarkdown}\(E\){:/nomarkdown} הוא מלכתחילה שדה שמכיל את {::nomarkdown}\(F\){:/nomarkdown} ואת האיברים {::nomarkdown}\(\alpha_{1},\dots,\alpha_{n}\){:/nomarkdown} אז {::nomarkdown}\(F\left(\alpha_{1},\dots,\alpha_{n}\right)\subseteq E\){:/nomarkdown} ובסך הכל קיבלנו {::nomarkdown}\(E=F\left(\alpha_{1},\dots,\alpha_{n}\right)\){:/nomarkdown}. רק נשאר להסביר למה כל {::nomarkdown}\(\alpha_{i}\){:/nomarkdown} שכזה הוא אלגברי, וזה נובע מיידית מכך שההרחבה סופית: אם נסתכל על המגדל {::nomarkdown}\(F\subseteq F\left(\alpha_{i}\right)\subseteq E\){:/nomarkdown} נקבל ש-{::nomarkdown}\(\left[F\left(\alpha_{i}\right):F\right]\){:/nomarkdown} מחלק את {::nomarkdown}\(\left[E:F\right]\){:/nomarkdown} ולכן {::nomarkdown}\(\left[F\left(\alpha_{i}\right):F\right]\){:/nomarkdown} סופי בעצמו, אבל ראינו כבר בתחילת הפוסט שהרחבה <strong>פשוטה </strong>היא סופית אם ורק אם {::nomarkdown}\(\alpha_{i}\){:/nomarkdown} אלגברי.

לסיום סדרת המשפטים הארוכה הזו נדבר על החור היחיד שנשאר פה: הרחבה אלגברית של הרחבה אלגברית. אני אוכיח שאם {::nomarkdown}\(E/F\){:/nomarkdown} אלגברית ו-{::nomarkdown}\(K/E\){:/nomarkdown} אלגברית אז גם {::nomarkdown}\(K/F\){:/nomarkdown} אלגברית. כשלמדתי את הנושא הזה, המשפט הזה הפיל אותי בכל פעם מחדש; פשוט לא הצלחתי לזכור איך מוכיחים אותו. גם עכשיו אני לא זוכר. אני אומר לעצמי - המממ, ניקח {::nomarkdown}\(\alpha\in K\){:/nomarkdown}. אני צריך למצוא פולינום מעל {::nomarkdown}\(F\){:/nomarkdown} שמאפס אותו, אבל אין לי שום דבר כזה כרגע; מה שאני כן יודע הוא ש-{::nomarkdown}\(K/E\){:/nomarkdown} אלגברית, אז קיים פולינום {::nomarkdown}\(p\left(x\right)=a_{n}x^{n}+\dots+a_{1}x+a_{0}\){:/nomarkdown} כך ש-{::nomarkdown}\(p\left(\alpha\right)=0\){:/nomarkdown}, ו-{::nomarkdown}\(a_{0},\dots,a_{n}\in E\){:/nomarkdown}. עכשיו... אה... אני אמיר את המקדמים במשהו מעל {::nomarkdown}\(F\){:/nomarkdown}... אה... כי הם אלגבריים... קיימים להם פולינומים... משהו משהו.... אה...

הבנתם את הרעיון. אין לי מושג. ושוב, זה לא במקרה. תורת השדות עושה <strong>קסמים</strong>, ומי שלא מכיר את הקסמים מנסה ללכת בדרך הישירה ונתקע עם הראש בקיר. צריך לאמץ חשיבה קצת שונה כדי להתמודד עם הבעיות שתורת השדות מציבה, וזה בדיוק סוד הכוח שלה והסיבה שהיא פתרה בעיות שהיו פתוחות מאות ואלפי שנים.

אז מה עושים? פשוט מאוד. האובייקט המרכזי בתורת השדות הוא הרחבות, אז בואו נייצר לעצמנו את ההרחבה הרלוונטית: נתבונן על {::nomarkdown}\(F\left(\alpha,a_{0},\dots,a_{n}\right)\){:/nomarkdown} - ההרחבה של {::nomarkdown}\(F\){:/nomarkdown} שמתקבלת מכך שמוסיפים ל-{::nomarkdown}\(F\){:/nomarkdown} את האיבר {::nomarkdown}\(\alpha\){:/nomarkdown} שאנחנו רוצים להוכיח שהוא אלגברי מעל {::nomarkdown}\(F\){:/nomarkdown}, ובנוסף את המקדמים של הפולינום שמאפס אותו מעל {::nomarkdown}\(K\){:/nomarkdown}. עכשיו יש לנו מגדל של הרחבות:

{::nomarkdown}\(F\subseteq F\left(a_{0},\dots,a_{n}\right)\subseteq F\left(\alpha,a_{0},\dots,a_{n}\right)\){:/nomarkdown}

ההרחבה {::nomarkdown}\(F\left(a_{0},\dots,a_{n}\right)/F\){:/nomarkdown} נוצרת על ידי מספר סופי של איברים <strong>אלגבריים</strong> מעל {::nomarkdown}\(F\){:/nomarkdown}, ולכן כפי שראינו קודם, היא סופית.

ההרחבה {::nomarkdown}\(F\left(\alpha,a_{0},\dots,a_{n}\right)/F\left(a_{0},\dots,a_{n}\right)\){:/nomarkdown} היא הרחבה <strong>פשוטה</strong> שנוצרת על ידי הוספת {::nomarkdown}\(\alpha\){:/nomarkdown} לשדה {::nomarkdown}\(F\left(a_{0},\dots,a_{n}\right)\){:/nomarkdown}. הנקודה היא ש-{::nomarkdown}\(\alpha\){:/nomarkdown} הוא אלגברי מעל השדה הזה, כי כך בדיוק בנינו את השדה הזה! השדה {::nomarkdown}\(F\left(a_{0},\dots,a_{n}\right)\){:/nomarkdown} הוא בדיוק "{::nomarkdown}\(F\){:/nomarkdown} ובנוסף לכך האיברים הספציפיים מתוך {::nomarkdown}\(E\){:/nomarkdown} שנדרשים לנו כדי לקבל ש-{::nomarkdown}\(\alpha\){:/nomarkdown} אלגברי". אם כן, גם ההרחבה הזו סופית, ולכן מהמשפט על המימד של מגדל הרחבות, אנחנו מקבלים שגם ההרחבה {::nomarkdown}\(F\left(\alpha,a_{0},\dots,a_{n}\right)/F\){:/nomarkdown} סופית, והרחבה סופית היא אלגברית, ומכאן שבפרט {::nomarkdown}\(\alpha\){:/nomarkdown} אלגברי מעל {::nomarkdown}\(F\){:/nomarkdown}. שימו לב: בשום שלב לא הראיתי "בבת אחת" ש-{::nomarkdown}\(K/F\){:/nomarkdown} אלגברית; לקחתי איבר בודד של {::nomarkdown}\(K\){:/nomarkdown} והראיתי, בעזרת הרחבות שהיו תפורות סביב האיבר הזה, שהאיבר הוא אלגברי; זה מספיק.

זה מסיים את משפטי הבסיס שרציתי להראות, ואנחנו יכולים לעצור ולנשום אוויר וליהנות קצת עם האופן שבו המשפט {::nomarkdown}\(\left[K:F\right]=\left[K:E\right]\left[E:F\right]\){:/nomarkdown} פותר כמעט לבדו את תעלומת הבניות בסרגל ומחוגה של היוונים; מכיוון שזה נושא שעומד לא רע בפני עצמו, אני אשמור את כולו לפוסט הבא.
