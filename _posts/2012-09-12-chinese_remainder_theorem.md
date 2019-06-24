---
id: 2182
title: "משפט השאריות הסיני"
date: 2012-09-12 18:18:18
layout: post
categories: 
  - אלגברה מופשטת
  - תורת המספרים
tags: 
  - משפט השאריות הסיני
---
בית הספר "הר סיני" החליט להתעלל בשכבת כיתה י' שלו ולארגן מהם קבוצות למשחק כדור זה או אחר. ראשית לקח בית הספר את כלל תלמידי השכבה והחל לחלק אותם לקבוצות כדורגל (11 שחקנים בקבוצה) אבל לרוע המזל התברר שנותר תלמיד אחד בלי קבוצה. טוב, אז בית הספר מיהר לחלק אותם לקבוצות כדורסל (5 שחקנים בקבוצה), אבל שוב נותר בחוץ תלמיד אחד. טוב, אז בית הספר ניסה עכשיו לחלק אותם לקבוצות בייסבול (9 שחקנים בקבוצה), אבל <strong>שוב</strong> נשאר בחוץ בדיוק תלמיד אחד. ידוע שיש בשכבה לא יותר מ-1000 תלמידים, ומספר התלמידים הוא זוגי - כמה תלמידים יש בשכבה?

את החידה המטופשת הזו המצאתי כרגע, בלי לבצע חישובים כמעט בכלל. זה מעניין, כי יש יומרנות כלשהי בכך שאני מציג אותה - אני בעצם טוען שלחידה הזו <strong>יש פתרון</strong>, למרות שאני עצמי לא יודע מהו כרגע. אם כן, מהו הפתרון? איך מוצאים אותו? מדוע מובטח שהוא קיים? אלו השאלות שעליהן עונה <strong>משפט השאריות הסיני</strong>.

לפני שנגיע אליו, בואו ננסה לפתור את החידה בצורה נאיבית. לצורך העניין נסמן את מספר התלמידים בשכבה ב-{::nomarkdown}\( x\){:/nomarkdown}. כעת, אמרו לנו שכאשר מנסים לחלק את {::nomarkdown}\( x\){:/nomarkdown} ב-11, נשארים עם שארית 1. במתמטיקה יש סימון קומפקטי שבא לתאר את התופעה הזו: {::nomarkdown}\( x\equiv1\left(\mbox{mod 11}\right)\){:/nomarkdown}, שיש לקרוא כ"{::nomarkdown}\( x\){:/nomarkdown} שקול ל-1 מודולו 11". באופן כללי, {::nomarkdown}\( a\equiv b\left(\mbox{mod }n\right)\){:/nomarkdown} פירושו שהשארית שמקבלים כאשר מחלקים את {::nomarkdown}\( a\){:/nomarkdown} ב-{::nomarkdown}\( n\){:/nomarkdown} שווה לשארית שמקבלים כשמחלקים את {::nomarkdown}\( b\){:/nomarkdown} ב-{::nomarkdown}\( n\){:/nomarkdown} (למשל, {::nomarkdown}\( 13\equiv31\left(\mbox{mod 6}\right)\){:/nomarkdown}). אפשר לראות בלי יותר מדי עבודה שהטענה "{::nomarkdown}\( a\){:/nomarkdown} ו-{::nomarkdown}\( b\){:/nomarkdown} מחזירים אותה שארית בחלוקה ב-{::nomarkdown}\( n\){:/nomarkdown}" שקולה לטענה "{::nomarkdown}\( a-b\){:/nomarkdown} מתחלק ב-{::nomarkdown}\( n\){:/nomarkdown}" ולרוב את התנאי השני קל יותר לבדוק (וזו גם ההגדרה היותר מקובלת של הסימון של שקילות מודולו).

אני עצל למדי ולכן במקום לכתוב {::nomarkdown}\( x\equiv1\left(\mbox{mod 11}\right)\){:/nomarkdown} (מה שהוא, כאמור, הסימון הסטנדרטי) אכתוב {::nomarkdown}\( x\equiv_{11}1\){:/nomarkdown} (שהוא פחות סטנדרטי אבל פה ושם משתמשים בו) ובאופן כללי אכתוב {::nomarkdown}\( a\equiv_{n}b\){:/nomarkdown} ואסמוך עליכם שתבינו למה אני מתכוון.

תכונה חשובה ביותר של משוואות מודולריות, שאשתמש בה הרבה בהמשך, היא שחוקי החיבור והכפל מתקיימים עבורן. כלומר, אם {::nomarkdown}\( a\equiv_{n}x\){:/nomarkdown} ו-{::nomarkdown}\( b\equiv_{n}y\){:/nomarkdown} אז
<ol>
	<li>{::nomarkdown}\( a+b\equiv_{n}x+y\){:/nomarkdown}</li>
	<li>{::nomarkdown}\( a\cdot b\equiv_{n}x\cdot y\){:/nomarkdown}</li>
</ol>
זה תרגיל נחמד להוכיח את הטענות הללו (עבור 2 צריך לחשוב טיפה). נסו לעשות זאת! (המשוואות נכונות גם עבור מספר סופי כלשהו של מחוברים - את זה מוכיחים באינדוקציה).

כעת אפשר לנסח את החידה שלעיל בלשון קצת יותר מתמטית: מהו {::nomarkdown}\( 1\le x\le1000\){:/nomarkdown} המקיים:

{::nomarkdown}\( x\equiv_{11}1\){:/nomarkdown}

{::nomarkdown}\( x\equiv_{5}1\){:/nomarkdown}

{::nomarkdown}\( x\equiv_{9}1\){:/nomarkdown}

{::nomarkdown}\( x\equiv_{2}0\){:/nomarkdown} (זו בעצם הדרישה "מספר התלמידים זוגי" - שהכנסתי כדי למנוע את הפתרון המטופש של "בשכבה יש תלמיד אחד").

וכמובן, איך למצוא אותו?

במילים אחרות, מבקשים מאיתנו לפתור <strong>מערכת משוואות מודולריות</strong>. למצוא {::nomarkdown}\( x\){:/nomarkdown} שפותר את כל המשוואות "בו זמנית", אם קיים כזה. איך עושים את זה?

הדרך הנאיבית היא זו: אם {::nomarkdown}\( x\equiv_{11}1\){:/nomarkdown} זה אומר ש-{::nomarkdown}\( x\){:/nomarkdown} יכול להיות אחד מבין המספרים הבאים: {::nomarkdown}\( 1,12,23,34,\dots\){:/nomarkdown} - הבנתם את הרעיון, מתחילים מ-1 ובכל פעם מוסיפים 11. כעת, אם {::nomarkdown}\( x\equiv_{5}1\){:/nomarkdown} הוא יכול להיות אחד מבין המספרים הבאים: {::nomarkdown}\( 1,6,11,16,\dots\){:/nomarkdown} וכן הלאה. בסופו של דבר נקבל ארבע קבוצות של מספרים, אחת לכל משוואה; ואז כל מה שצריך לעשות יהיה לחפש איבר שמופיע בכולן בו זמנית. רק מה, חיפוש כזה הוא דבר לא יעיל במיוחד. אפילו מאוד לא יעיל, ואילו אנחנו רוצים פתרון שהוא <strong>מהיר</strong>. זה אולי לא נראה כך כרגע, אבל פתרון משוואות מודולריות שכאלו הוא הלחם והחמאה של תורת המספרים האלגוריתמית, במובן זה שצריך לפתור משוואות מודולריות לעתים קרובות <strong>כחלק</strong> מאלגוריתם מסובך יותר.

אציג את מה שמשפט השאריות הסיני עושה קודם כל עבור המקרה הפרטי של החידה שלנו, ואז נראה איך זה מוכלל לפתרון של כל מערכת משוואות מודולרית. הרעיון הבסיסי הוא זה: נניח שהצלחתי באופן קסום כלשהו למצוא ארבעה מספרים {::nomarkdown}\( a,b,c,d\){:/nomarkdown} שמקיימים את התכונות הבאות:
<ol>
	<li>{::nomarkdown}\( a\equiv_{11}1\){:/nomarkdown} וכמו כן {::nomarkdown}\( a\){:/nomarkdown} מתחלק ב-{::nomarkdown}\( 5,9,2\){:/nomarkdown}.</li>
	<li>{::nomarkdown}\( b\equiv_{5}1\){:/nomarkdown} וכמו כן {::nomarkdown}\( b\){:/nomarkdown} מתחלק ב-{::nomarkdown}\( 11,9,2\){:/nomarkdown}.</li>
	<li>{::nomarkdown}\( c\equiv_{9}1\){:/nomarkdown} וכמו כן {::nomarkdown}\( c\){:/nomarkdown} מתחלק ב-{::nomarkdown}\( 11,5,2\){:/nomarkdown}.</li>
	<li>{::nomarkdown}\( d\equiv_{2}0\){:/nomarkdown} וכמו כן {::nomarkdown}\( d\){:/nomarkdown} מתחלק ב-{::nomarkdown}\( 11,5,9\){:/nomarkdown} (ההפרדה כאן בין 2 ושאר המספרים אולי נראית מלאכותית אבל יש לה מטרה).</li>
</ol>
אני טוען שאם מצאתי את המספרים הללו, כמעט סיימתי: אני אגדיר {::nomarkdown}\( x=a+b+c+d\){:/nomarkdown} ואקבל מספר שמקיים את כל ארבעת המשוואות המודולריות שלעיל. למה? כי בואו נשאל את עצמו, למשל, מהו {::nomarkdown}\( x\){:/nomarkdown} מודולו 11. על פי חוקי החשבון המודולרי:

{::nomarkdown}\( x\equiv_{11}a+b+c+d\equiv_{11}1+0+0+0\equiv_{11}1\){:/nomarkdown}

מה בעצם קרה כשלקחנו את המשוואה מודולו 11? הגורמים של {::nomarkdown}\( b,c,d\){:/nomarkdown} התפוגגו ואינם עוד, כי כולם התחלקו ב-11. האיבר היחיד שלא התחלק ב-11 היה {::nomarkdown}\( a\){:/nomarkdown}, ועבורו ידענו ספציפית שהוא מחזיר 1 מודולו 11. באותו האופן נקבל את התוצאה שאנחנו רוצים גם כשניקח את {::nomarkdown}\( x\){:/nomarkdown} מודולו {::nomarkdown}\( 5,9\){:/nomarkdown} או 2.

האם סיימנו? לא בהכרח, כי ייתכן ש-{::nomarkdown}\( x\){:/nomarkdown} יהיה גדול מ-1000. במקרה הזה פשוט נחלק אותו ב-{::nomarkdown}\( 11\cdot5\cdot9\cdot2=990\){:/nomarkdown} וניקח את השארית (שתהיה מספר בין 1 ל-990). למה זה עובד? ובכן, כי אם {::nomarkdown}\( x\equiv_{990}y\){:/nomarkdown}, אז בפרט גם {::nomarkdown}\( x\equiv_{11}y\){:/nomarkdown} וכך גם עבור {::nomarkdown}\( 5,9,2\){:/nomarkdown}. למה? באופן כללי, אם {::nomarkdown}\( x\equiv_{n}y\){:/nomarkdown}, ויש לנו מספר {::nomarkdown}\( k\){:/nomarkdown} שמחלק את {::nomarkdown}\( n\){:/nomarkdown}, אז מכיוון ש-{::nomarkdown}\( n\){:/nomarkdown} מחלק את {::nomarkdown}\( x-y\){:/nomarkdown} גם {::nomarkdown}\( k\){:/nomarkdown} מחלק את {::nomarkdown}\( x-y\){:/nomarkdown} (חלוקה היא יחס <strong>טרנזיטיבי</strong>). למי שחייב לראות את זה בעיניים הנה הוכחה קונקרטית: אם {::nomarkdown}\( n\){:/nomarkdown} מחלק את {::nomarkdown}\( x-y\){:/nomarkdown} זה אומר ש-{::nomarkdown}\( x-y=\alpha\cdot n\){:/nomarkdown}. עבור {::nomarkdown}\( \alpha\){:/nomarkdown} שלם כלשהו. אם {::nomarkdown}\( k\){:/nomarkdown} מחלק את {::nomarkdown}\( n\){:/nomarkdown} זה אומר ש-{::nomarkdown}\( n=k\beta\){:/nomarkdown} עבור {::nomarkdown}\( \beta\){:/nomarkdown} שלם כלשהו. על כן, {::nomarkdown}\( x-y=\alpha\cdot\beta\cdot k\){:/nomarkdown} ולכן {::nomarkdown}\( k\){:/nomarkdown} מחלק את {::nomarkdown}\( x-y\){:/nomarkdown}.

יפה, אם כן, סיימנו לפתור את החידה, פרט לכך שעדיין אין לנו מושג איך למצוא את {::nomarkdown}\( a,b,c,d\){:/nomarkdown} המדוברים.

עכשיו אני אעשה להטוט קטן שמטרתו למצוא את {::nomarkdown}\( a\){:/nomarkdown}. ייתכן שלא תבינו מאיפה הלהטוט הזה מגיע, ובצדק; זה לב-לבו של הרעיון של משפט השאריות הסיני. העיקר כאן הוא להבין <strong>למה</strong> הלהטוט עובד.

אני לוקח את 990 - המכפלה של ארבעת המספרים שמשתתפים במשוואות המודולריות בתור "מה שמחלקים בו" - מה שאקרא לו מעכשיו <strong>המודולוסים</strong>. אני רוצה למצוא את {::nomarkdown}\( a\){:/nomarkdown} ש"עובד" עבור המודולוס 11; אני אתחיל בכך שאחלק את 990 ב-11 ואקבל 90. כעת, 90 ו-11 הם <strong>מספרים זרים</strong>, כלומר אין להם אף מחלק משותף; זה מבטיח שאפשר למצוא מספר {::nomarkdown}\( y\){:/nomarkdown} בעל התכונה {::nomarkdown}\( 90\cdot y\equiv_{11}1\){:/nomarkdown}. איך מוצאים כזה? בהמשך. לעת עתה אגלה לכם שבמקרה שלנו, {::nomarkdown}\( y=6\){:/nomarkdown}. אם כן, מהו {::nomarkdown}\( 90\cdot y\){:/nomarkdown}? חישוב קצר מראה לנו שזהו {::nomarkdown}\( 540=49\cdot11+1\){:/nomarkdown}. אני טוען שאם כן, {::nomarkdown}\( a=540\){:/nomarkdown} הוא המספר שאנחנו מחפשים. ראינו לפני רגע שהוא מקיים {::nomarkdown}\( 540\equiv_{11}1\){:/nomarkdown}. למה הוא מתחלק ב-{::nomarkdown}\( 5,9,2\){:/nomarkdown}? ובכן, כי הגדרנו אותו בתור מכפלה של 90 בעוד משהו, ו-90 הוא בדיוק המכפלה של {::nomarkdown}\( 5,9,2\){:/nomarkdown} ולכן ברור שמתחלק בכולם.

באותו האופן נטפל גם ב-{::nomarkdown}\( b\){:/nomarkdown}: נתחיל מ-990, נחלק אותו ב-5, נקבל 198, נשים לב לכך ש-{::nomarkdown}\( 396=198\cdot2\){:/nomarkdown} מחזיר שארית 1 בחלוקה ב-5, ולכן {::nomarkdown}\( b=396\){:/nomarkdown} הוא המספר שאנחנו רוצים. גם {::nomarkdown}\( c\){:/nomarkdown} מטופל באותו האופן: מתחילים מ-990, מחלקים ב-9, מקבלים 110, שמים לב לכך ש-{::nomarkdown}\( 550=110\cdot5\){:/nomarkdown} מחזיר שארית 1 בחלוקה ב-9 ולכן {::nomarkdown}\( c=550\){:/nomarkdown}.

ומה עם {::nomarkdown}\( d\){:/nomarkdown}? כמקודם, 990 חלקי 2 זה 495, אבל הפעם אנחנו רוצים לא 1 מודולו 2 אלא 0. טוב, אז כאן אפשר "לרמות" ופשוט לבחור {::nomarkdown}\( d=0\){:/nomarkdown}. בהמשך נראה שזו לא באמת רמאות אלא מה שבכל מקרה אמורים לעשות.

בסך הכל נקבל {::nomarkdown}\( x=540+396+550+0=1486\){:/nomarkdown}. זה יצא גדול יותר מ-990, אז כאמור - מחלקים ב-990 ולוקחים את השארית, כלומר {::nomarkdown}\( x=496\){:/nomarkdown} הוא הפתרון שאנחנו מחפשים. אתם מוזמנים לעשות את החישוב ולראות שזה עובד.

בואו נסבך קצת את החידה. נניח שהיינו רוצים שישאר לא ילד אחד מודולו 11, אלא <strong>בדיוק</strong> שבעה? איך הפתרון היה משתנה אז? ובכן, לא בהרבה: {::nomarkdown}\( b,c,d\){:/nomarkdown} שלנו הם עדיין בסדר. רק צריך למצוא {::nomarkdown}\( a\){:/nomarkdown} כך ש-{::nomarkdown}\( a\equiv_{11}7\){:/nomarkdown} ועדיין מתחלק ב-2,9,5.

עכשיו, ראינו כבר ש-{::nomarkdown}\( 540\equiv_{11}1\){:/nomarkdown}. לכן, אם נכפול את שני האגפים ב-7, נקבל {::nomarkdown}\( 540\cdot7\equiv_{11}7\){:/nomarkdown}, וברור ש-{::nomarkdown}\( 540\cdot7\){:/nomarkdown} מתחלק ב-{::nomarkdown}\( 5,9,2\){:/nomarkdown} (כי 540 התחלק בהם). לכן {::nomarkdown}\( a=540\cdot7=3780\){:/nomarkdown} הוא המספר שאנו רוצים. נקבל ש-{::nomarkdown}\( a+b+c+d=4726\){:/nomarkdown}, ואחרי חלוקה ב-990 והוצאת שארית נקבל 766 תלמידים בשכבה. אתם מוזמנים לבדוק שהמספר הזה עובד טוב.

יפה. סיימנו עם הדוגמה, ואני רוצה לעבור למקרה הכללי. עם זאת, לפני כן אני רוצה לתת דוגמה אחרת שממחישה ש<strong>לא תמיד</strong> יש פתרון לכל מערכת משוואות מודולרית. הנה מערכת כזו לדוגמה:

{::nomarkdown}\( x\equiv_{4}3\){:/nomarkdown}

{::nomarkdown}\( x\equiv_{8}6\){:/nomarkdown}

למערכת הזו אין שום סיכוי שיהיה פתרון. למה? כי אם {::nomarkdown}\( x-6\){:/nomarkdown} מתחלק ב-8, אז הוא בפרט מתחלק ב-4, כלומר {::nomarkdown}\( x\equiv_{4}6\equiv_{4}2\){:/nomarkdown}, אבל זה עומד בסתירה לכך ש-{::nomarkdown}\( x\equiv_{4}3\){:/nomarkdown} - הרי איקס לא יכול להחזיר גם שארית 2 וגם שארית 3 בחלוקה ב-4!

התחושה היא שהבעיה במערכת הזו היא ששתי המשוואות היו <strong>תלויות זו בזו</strong> במידה מסויימת בגלל ש-4 חילק את 8. אולי אם נאסור על אחד מהמודולוסים לחלק את השני לא יהיו לנו בעיות? לרוע המזל לא, כפי שמראה הדוגמה הבאה:

{::nomarkdown}\( x\equiv_{6}3\){:/nomarkdown}

{::nomarkdown}\( x\equiv_{15}7\){:/nomarkdown}

כאן המודולוסים בוודאי לא מחלקים אחד את השני. מצד שני, 3 מחלק את שניהם! המשוואה הראשונה גוררת ש-{::nomarkdown}\( x\equiv_{3}0\){:/nomarkdown} והשני גוררת ש-{::nomarkdown}\( x\equiv_{3}1\){:/nomarkdown}, ושוב קיבלנו סתירה. במילים אחרות, עלולה להיות לנו בעיה אם יש שני מודולוסים שיש מספר שמחלק את שניהם גם יחד. מספרים שלמים שהמספר הגדול ביורת שמחלק את שניהם גם יחד הוא 1 נקראים <strong>זרים</strong>; התקווה היא שאם כל המודולוסים הם זרים זה לזה (כלומר, לכל זוג מודולוסים, אין לו מחלק משותף שגדול מ-1) אז כל מערכת משוואות עם אותם מודולוסים תהיה פתירה. התקווה הזו התגשמה: בואו ננסח את משפט השאריות הסיני באופן מדויק.

אם כן, יהיו מספרים שלמים {::nomarkdown}\( m_{1},m_{2},\dots,m_{k}\){:/nomarkdown} שכולם זרים בזוגות (לכל זוג {::nomarkdown}\( m_{i},m_{j}\){:/nomarkdown}, המחלק המשותף הגדול ביותר שלהם הוא 1). בנוסף, יהיו גם מספרים שלמים {::nomarkdown}\( a_{1},\dots,a_{k}\){:/nomarkdown} <strong>כלשהם</strong>. נסמן {::nomarkdown}\( m=m_{1}m_{2}\cdots m_{k}\){:/nomarkdown} (המכפלה של כל המודולסים). אז משפט השאריות הסיני אומר שלמערכת המשוואות הבאה:

{::nomarkdown}\( x\equiv_{m_{1}}a_{1}\){:/nomarkdown}

{::nomarkdown}\( \vdots\){:/nomarkdown}

{::nomarkdown}\( x\equiv_{m_{k}}a_{k}\){:/nomarkdown}

יש פתרון בתחום {::nomarkdown}\( 0\le x&lt;m\){:/nomarkdown} והפתרון הזה הוא <strong>יחיד</strong> בתחום הזה (ולכן קבוצת כל הפתרונות למשוואה היא הקבוצה {::nomarkdown}\( \left\{ x+tm\ \|\ t\in\mathbb{Z}\right\} \){:/nomarkdown}, אבל זה פחות חשוב).

ההוכחה של המשפט הכללי דומה לפתרון של המקרה הפרטי. קודם כל נוכיח שבכלל יש פתרון, כי זה העיקר. לכל {::nomarkdown}\( i\){:/nomarkdown}, נגדיר {::nomarkdown}\( n_{i}=\frac{m}{m_{i}}\){:/nomarkdown}, כלומר המכפלה של כל המודולוסים חוץ מ-{::nomarkdown}\( m_{i}\){:/nomarkdown}. כעת, {::nomarkdown}\( m_{i}\){:/nomarkdown} ו-{::nomarkdown}\( n_{i}\){:/nomarkdown} הם זרים (כי {::nomarkdown}\( m_{i}\){:/nomarkdown} זר לכל הגורמים של {::nomarkdown}\( n_{i}\){:/nomarkdown}). מכאן נובע (לזה אתייחס בהמשך) שקיים מספר {::nomarkdown}\( d_{i}\){:/nomarkdown} כך ש-{::nomarkdown}\( n_{i}d_{i}\equiv_{m_{i}}1\){:/nomarkdown}. בואו לצורך נוחות בלבד נסמן {::nomarkdown}\( e_{i}=n_{i}d_{i}\){:/nomarkdown}. שימו לב ש-{::nomarkdown}\( e_{i}\){:/nomarkdown} מקיים את התכונה הבאה:

{::nomarkdown}\( e_{i}\equiv_{m_{j}}\delta_{ij}\){:/nomarkdown}, כאשר {::nomarkdown}\( \delta_{ij}\){:/nomarkdown} הוא <strong>הדלתא של קרונקר</strong>:

{::nomarkdown}\( \delta_{ij}=\begin{cases}1 &amp; i=j\\0 &amp; i\ne j\end{cases}\){:/nomarkdown}

כעת, נגדיר את הפתרון למערכת המשוואות: {::nomarkdown}\( x=a_{1}e_{1}+a_{2}e_{2}+\dots+a_{k}e_{k}\){:/nomarkdown} (מודולו {::nomarkdown}\( m\){:/nomarkdown}). כדי לראות שזה הפתרון המבוקש נשים לב לכך ש-{::nomarkdown}\( x\equiv_{m_{i}}a_{1}\delta_{1i}+\dots+a_{k}\delta_{ik}=a_{i}\){:/nomarkdown}, כנדרש.

לאלו מכם שמכירים קצת אלגברה לינארית העסק הזה כנראה נראה מאוד מוכר - {::nomarkdown}\( x\){:/nomarkdown} הוא צירוף לינארי של איזה משהו מוזר שנראה כמו בסיס אורתונורמלי, אבל הוא לא באמת בסיס כי אין פה מרחב וקטורי. זו בדיוק האנלוגיה שאני רוצה שתהיה לכם בראש; המתמטיקה עמוסה בסיטואציות כאלו שבהן יש לנו שני דברים שהם מאוד-דומים-אבל-לא-בדיוק-אותו-דבר.

זה מוכיח שהפתרון קיים. בשביל יחידות, נניח ש-{::nomarkdown}\( x,y\){:/nomarkdown} הם שני פתרונות למערכת המשוואות. אז לכל {::nomarkdown}\( i\){:/nomarkdown} מתקיים {::nomarkdown}\( x-y\equiv_{m_{i}}a_{i}-a_{i}\equiv_{m_{i}}0\){:/nomarkdown}, כלומר {::nomarkdown}\( m_{i}\){:/nomarkdown} מחלק את {::nomarkdown}\( x-y\){:/nomarkdown} לכל {::nomarkdown}\( i\){:/nomarkdown}. עכשיו, אם מספרים זרים מחלקים מספר כלשהו, גם המכפלה של כולם מחלקת את אותו מספר, ולכן נקבל ש-{::nomarkdown}\( m\){:/nomarkdown} מחלק את {::nomarkdown}\( x-y\){:/nomarkdown}, כלומר {::nomarkdown}\( x\equiv_{m}y\){:/nomarkdown}, וסיימנו את הוכחת המשפט.

מה שחסר לי עדיין הוא הטענה הבאה, שעזרה לי למצוא את ה-{::nomarkdown}\( d_{i}\){:/nomarkdown}-ים: אם {::nomarkdown}\( a,n\){:/nomarkdown} הם מספרים זרים אז קיים {::nomarkdown}\( x\){:/nomarkdown} כך ש-{::nomarkdown}\( ax\equiv_{n}1\){:/nomarkdown}. הסיבה שהמתנתי עם הטענה הזו היא שזוהי טענה בסיסית עוד יותר בתורת המספרים שמשתמשים גם בה בכל מקום אפשרי בערך, ומדברים עליה בהקשרים רחבים הרבה יותר ממשפט השאריות הסיני. בבסיסה, הטענה הזו נובעת ממה שמכונה <strong>האלגוריתם האוקלידי</strong> שהקדשתי לו <a href="http://www.gadial.net/2011/09/12/euclidean_algorithm_and_rings/">פוסט כאן</a>. האלגוריתם הזה מאפשר, בהינתן שני מספרים שלמים {::nomarkdown}\( a,b\){:/nomarkdown} שהמחלק המשותף הגדול ביותר שלהם הוא {::nomarkdown}\( d\){:/nomarkdown}, למצוא שני מספרים שלמים {::nomarkdown}\( x,y\){:/nomarkdown} כך ש-{::nomarkdown}\( ax+by=d\){:/nomarkdown}; במקרה שלנו, שבו {::nomarkdown}\( a,n\){:/nomarkdown} הם זרים, נקבל שיש {::nomarkdown}\( x,y\){:/nomarkdown} כך ש-{::nomarkdown}\( ax+ny=1\){:/nomarkdown}, וכשניקח את המשוואה הזו מודולו {::nomarkdown}\( n\){:/nomarkdown} נקבל {::nomarkdown}\( ax\equiv_{n}1\){:/nomarkdown}. במילים אחרות, מציאת ה-{::nomarkdown}\( d_{i}\){:/nomarkdown}-ים המדוברת היא בסך הכל הפעלה של האלגוריתם האוקלידי (שהוא אלגוריתם <strong>מאוד</strong> מהיר).

שימו לב לעוד אבחנה מעניינת: ה-{::nomarkdown}\( e_{i}\){:/nomarkdown}-ים שצצו בהוכחת המשפט <strong>אינם</strong> תלויים ב-{::nomarkdown}\( a_{i}\){:/nomarkdown}-ים, אלא רק במודולוסים {::nomarkdown}\( m_{i}\){:/nomarkdown}. זה אומר שאפשר לחשב אותם פעם אחת ולשמור בצד, ומרגע זה ואיך אפשר לפתור ביעילות כל מערכת משוואות מודולו {::nomarkdown}\( m_{1},\dots,m_{k}\){:/nomarkdown} (לכל בחירה של {::nomarkdown}\( a_{1},\dots,a_{k}\){:/nomarkdown}) בזמן קצר ביותר, בלי שיהיה צורך להפעיל שוב את האלגוריתם האוקלידי. (רק צריך לחשב את {::nomarkdown}\( a_{1}e_{1}+a_{2}e_{2}+\dots+a_{k}e_{k}\){:/nomarkdown}, כלומר לבצע פעולה אחת של מכפלה סקלרית - וזה <strong>ממש ממש מהיר</strong>).

אם לחזור לחידה שבתחילת הפוסט, עכשיו ברור מה עשיתי שם - ראשית חשבתי על משחקי שבהם מספרי השחקנים הם מספרים זרים זה לזה (11 ו-5 באו מאליהם; כדי שיהיה מעניין הכנסתי גם את 9 לעניין). הבעיה הייתה שהחידה עם המודולוסים הללו הייתה בעלת הפתרון הלא מעניין "1" ולכן הכנסתי גם את 2 לתמונה. מכיוון שהמכפלה של כל המודולוסים יצאה 990, אמרתי שאין בשכבה יותר מ-1,000 תלמידים, כי היה מובטח לי שיש פתרון שקטן מ-990.

האם סיימנו? כן ולא. מה שהצגתי כרגע הוא הגרסה של המשפט כפי שהמתמטיקאים הסינים שהוכיחו אותו הכירו. אבל יש למשפט גם ניסוחים מודרניים יותר, שדורשים היכרות עם אלגברה קצת יותר מתקדמת ממה שדיברתי עליו בפוסט. המשך הפוסט יהיה מיועד, אם כן, למי שמכירים את המושגים הללו.

נתחיל מהחוג {::nomarkdown}\( \mathbb{Z}_{n}\){:/nomarkdown} - השלמים מ-0 עד {::nomarkdown}\( n-1\){:/nomarkdown} עם חיבור וכפל מודולו {::nomarkdown}\( n\){:/nomarkdown}. זה בעצם המבנה האלגברי ש"עוטף" את החשבון המודולרי שדיברתי עליו קודם. את משפט השאריות הסיני אפשר לנסח מחדש בתור משפט על ה<strong>מבנה</strong> של {::nomarkdown}\( \mathbb{Z}_{n}\){:/nomarkdown}. אם {::nomarkdown}\( n=m_{1}\cdot m_{2}\cdots m_{k}\){:/nomarkdown} כאשר כל ה-{::nomarkdown}\( m_{i}\){:/nomarkdown}-ים זרים זה לזה, אז משפט השאריות הסיני אומר ש-{::nomarkdown}\( \mathbb{Z}_{n}\cong\mathbb{Z}_{m_{1}}\times\dots\times\mathbb{Z}_{m_{k}}\){:/nomarkdown}, כלומר {::nomarkdown}\( \mathbb{Z}_{n}\){:/nomarkdown} איזומורפי למכפלה הקרטזית של ה-{::nomarkdown}\( \mathbb{Z}_{m_{i}}\){:/nomarkdown}-ים. אם אתם לא מכירים את המושגים הללו, לצערי תתקשו להבין את הניסוח הזה, אבל אלו לא מושגים מורכבים עד כדי כך.

ההוכחה של המשפט היא קונסטרוקטיבית - אפשר להציג את האיזומורפיזם ישירות. באופן לא מפתיע, האיזומורפיזם הוא פשוט {::nomarkdown}\( a\mapsto\left(a_{1},\dots,a_{k}\right)\){:/nomarkdown} כאשר {::nomarkdown}\( a_{i}=a\mbox{ mod }m_{i}\){:/nomarkdown}. לא קשה להראות שזה אכן הומומורפיזם; עיקר העבודה היא להראות שהוא חח"ע ועל, אבל זה בדיוק מה שמשפט השאריות הסיני נותן לנו: הוא אומר שלכל {::nomarkdown}\( \left(a_{1},\dots,a_{k}\right)\){:/nomarkdown} אפשר למצוא {::nomarkdown}\( a\){:/nomarkdown} שמתמפה אליו (זה הפתרון למערכת המשוואות המודולרית שמוגדרת עבור {::nomarkdown}\( \left(a_{1},\dots,a_{k}\right)\){:/nomarkdown}), והוא אומר לנו שהפתרון הזה הוא יחיד, כלומר שאם שני איברים מתמפים לאותו {::nomarkdown}\( \left(a_{1},\dots,a_{k}\right)\){:/nomarkdown} הם חייבים להיות זהים. זה סוף הסיפור.

אבל אתם מכירים מתמטיקאים. אם הכללנו משהו וההכללה עובדת טוב, למה לא להכליל עוד? כרגע המשפט מנוסח רק על החוגים {::nomarkdown}\( \mathbb{Z}_{n}\){:/nomarkdown}, אבל למה לא לקחת את זה צעד אחד קדימה?

עד כה זירת המשחק שלנו הייתה {::nomarkdown}\( \mathbb{Z}\){:/nomarkdown}, המספרים השלמים. ההכללה הטבעית של {::nomarkdown}\( \mathbb{Z}\){:/nomarkdown} היא חוג קומוטטיבי עם יחידה {::nomarkdown}\( R\){:/nomarkdown}. כעת, מה היחס בין {::nomarkdown}\( \mathbb{Z}_{n}\){:/nomarkdown} ובין {::nomarkdown}\( \mathbb{Z}\){:/nomarkdown}? פשוט מאוד - {::nomarkdown}\( \mathbb{Z}_{n}\){:/nomarkdown} הוא <strong>חוג מנה</strong> של {::nomarkdown}\( \mathbb{Z}\){:/nomarkdown} שמתקבל על ידי חלוקה באידאל {::nomarkdown}\( n\mathbb{Z}=\left\{ na\ \|\ a\in\mathbb{Z}\right\} \){:/nomarkdown} (כלומר, {::nomarkdown}\( \mathbb{Z}_{n}=\mathbb{Z}/n\mathbb{Z}\){:/nomarkdown}). אם כן, יהיו {::nomarkdown}\( A_{1},\dots,A_{k}\){:/nomarkdown} אידאלים ב-{::nomarkdown}\( R\){:/nomarkdown} (תתי-חוגים שבולעים ביחס לפעולת הכפל, כלומר {::nomarkdown}\( ar\in A\){:/nomarkdown} לכל {::nomarkdown}\( a\in A\){:/nomarkdown} ו-{::nomarkdown}\( r\in R\){:/nomarkdown}), והאנלוגים של {::nomarkdown}\( \mathbb{Z}_{m_{i}}\){:/nomarkdown} יהיו חוגי המנה {::nomarkdown}\( R/A_{i}\){:/nomarkdown}.

אנו נזקקים לאנלוג לתכונת ה-"ה-{::nomarkdown}\( m_{i}\){:/nomarkdown}-ים זרים בזוגות". אין משמעות לאמירה כמו "ה-{::nomarkdown}\( A_{i}\){:/nomarkdown}-ים זרים בזוגות" כי "זר" דורש מושג של חלוקה שלא קיים באידאלים באופן כללי. לכן אולי כדאי לנסות ולהיזכר <strong>למה</strong> היה לנו צורך שה-{::nomarkdown}\( m_{i}\){:/nomarkdown}-ים יהיו זרים בזוגות ולהכליל את התכונה הזו לחוגים. הצורך היה כדי שנוכל להשתמש בטענה המתמטית ההיא על כך שאם {::nomarkdown}\( a,b\){:/nomarkdown} זרים אז קיימים {::nomarkdown}\( x,y\){:/nomarkdown} כך ש-{::nomarkdown}\( ax+by=1\){:/nomarkdown}. כשזה מנוסח בלשון ה-{::nomarkdown}\( \mathbb{Z}_{n}\){:/nomarkdown}-ים, זו בעצם הטענה שאם {::nomarkdown}\( a,b\){:/nomarkdown} זרים אז {::nomarkdown}\( a\mathbb{Z}+b\mathbb{Z}=\mathbb{Z}\){:/nomarkdown}, כשחיבור אידאלים הוא במובן הטבעי המתבקש - איברי הסכום של האידאלים הם סכומים של איבר מהאידאל הראשון ואיבר מהאידאל השני.

את התכונה הזו נכליל: נאמר ששני אידאלים של {::nomarkdown}\( R\){:/nomarkdown}, {::nomarkdown}\( A,B\){:/nomarkdown} הם <strong>קו-מקסימליים</strong> אם {::nomarkdown}\( A+B=R\){:/nomarkdown} (אני לא בטוח אם יש שם טוב יותר בעברית; באנגלית comaximal הוא שם מצויין שכן "זרים בזוגות" הוא coprime, וב-{::nomarkdown}\( \mathbb{Z}\){:/nomarkdown} אידאל ראשוני הוא בפרט אידאל מקסימלי).

עכשיו, איך {::nomarkdown}\( \mathbb{Z}_{n}\){:/nomarkdown} קשור ל-{::nomarkdown}\( \mathbb{Z}_{m_{i}}\){:/nomarkdown}-ים במשפט המקורי? בכך ש-{::nomarkdown}\( n\){:/nomarkdown} הוא המכפלה של כל ה-{::nomarkdown}\( m_{i}\){:/nomarkdown}-ים. צריך למצוא אנלוג גם לזה, ולמרבה המזל אחד כזה מגיע באופן טבעי (שלא יפתיע אף אחד שמכיר את האופן שבו אידאלים מכלילים, רעיונית, מספרים שלמים; דיברתי על זה <a href="http://www.gadial.net/2011/08/21/algebraic_number_theory_intro_2/">בעבר בבלוג</a>). המושג המתאים הוא מכפלה של אידאלים, שמוגדרת באופן שהוא אולי קצת קשה לעיכול ממבט ראשון: המכפלה {::nomarkdown}\( A_{1}A_{2}\cdots A_{k}\){:/nomarkdown} מוגדרת בתור קבוצת כל הסכומים הסופיים של מכפלות מהצורה {::nomarkdown}\( a_{1}\cdots a_{k}\){:/nomarkdown} כאשר {::nomarkdown}\( a_{i}\in A_{k}\){:/nomarkdown}. תרגיל טוב כדי לעכל את ההגדרה הזו היא להוכיח לעצמכם ש-{::nomarkdown}\( m_{1}\mathbb{Z}\cdots m_{k}\mathbb{Z}=n\mathbb{Z}\){:/nomarkdown}.

כעת אפשר לנסח את משפט השאריות הסיני בניסוח האלגברי הכללי שלו:

אם {::nomarkdown}\( R\){:/nomarkdown} הוא חוג קומוטטיבי עם יחידה ו-{::nomarkdown}\( A_{1},\dots,A_{k}\){:/nomarkdown} הם אידאלים ב-{::nomarkdown}\( R\){:/nomarkdown} שהם קו-מקסימליים בזוגות, אז {::nomarkdown}\( R/A_{1}\cdots A_{k}\cong R/A_{1}\times\dots\times R/A_{k}\){:/nomarkdown}.

ההוכחה, שלא במפתיע, היא בעצם אותה הוכחה שכבר ראינו, פרט לכך שאפשר קצת לפשט אותה בגלל המסגרת הכללית של תורת החוגים, אבל גם צריך לעבוד טיפה כדי להוכיח דברים שעבור שלמים אני מניח כמעט כמובנים מאליהם. הדבר המרכזי שאני צריך לעשות הוא להוכיח שאם {::nomarkdown}\( A_{1},\dots,A_{k}\){:/nomarkdown} הם קו-מקסימליים בזוגות, אז לכל {::nomarkdown}\( i\){:/nomarkdown}, {::nomarkdown}\( A_{i}\){:/nomarkdown} ו-{::nomarkdown}\( \prod_{j\ne i}A_{j}\){:/nomarkdown} (כלומר, האדיאל שהוא מכפלת כל האידאלים {::nomarkdown}\( A_{1},\dots,A_{k}\){:/nomarkdown} פרט ל-{::nomarkdown}\( A_{i}\){:/nomarkdown}) הם קו-מקסימליים בזוגות. כדי להוכיח את זה מספיק להוכיח טענה פשוטה קצת יותר: אם {::nomarkdown}\( A,B,C\){:/nomarkdown} הם אידאליים קו-מקסימליים בזוגות, אז {::nomarkdown}\( A\){:/nomarkdown} ו-{::nomarkdown}\( BC\){:/nomarkdown} קו-מקסימליים; אחרי שהוכחתי את זה אפשר להוכיח את הטענה הכללית באינדוקציה (בכל פעם {::nomarkdown}\( B\){:/nomarkdown} יהיה מכפלה של כמה אידאלים ו-{::nomarkdown}\( C\){:/nomarkdown} יהיה אידאל חדש שרוצים לצרף למכפלה).

מכיוון שאנחנו בחוג עם יחידה, די להראות שקיימים {::nomarkdown}\( a\in A\){:/nomarkdown} ו-{::nomarkdown}\( b\in B\){:/nomarkdown}, {::nomarkdown}\( c\in C\){:/nomarkdown} כך ש-{::nomarkdown}\( a+bc=1\){:/nomarkdown} כדי להוכיח ש-{::nomarkdown}\( A\){:/nomarkdown} ו-{::nomarkdown}\( BC\){:/nomarkdown} הם קו-מקסימליים. מתוך ההנחה שלנו, אנחנו יודעים שמתקיים {::nomarkdown}\( a_{1}+b=1\){:/nomarkdown} ו-{::nomarkdown}\( a_{2}+c=1\){:/nomarkdown} עבור {::nomarkdown}\( a_{1},a_{2}\in A\){:/nomarkdown} ו-{::nomarkdown}\( b\in B\){:/nomarkdown}, {::nomarkdown}\( c\in C\){:/nomarkdown} כלשהם; נכפול אותם ונקבל {::nomarkdown}\( a_{1}a_{2}+a_{1}c+a_{2}b+bc=1\){:/nomarkdown}, וסכום שלושת האיברים הראשונים הוא איבר ב-{::nomarkdown}\( A\){:/nomarkdown} (במילים אחרות, {::nomarkdown}\( a=a_{1}a_{2}+a_{1}c+a_{2}b\){:/nomarkdown}), כך שסיימנו.

כעת נעבור להוכחת משפט השאריות הסיני עצמו. מספיק להוכיח קיום של הומומורפיזם על {::nomarkdown}\( R\to R/A_{1}\times\dots\times R/A_{k}\){:/nomarkdown} שהגרעין שלו הוא {::nomarkdown}\( A_{1}\cdots A_{k}\){:/nomarkdown} והתוצאה תנבע ממשפט האיזומורפיזם הראשון לחוגים. ההומומורפיזם, שלא במפתיע, יהיה {::nomarkdown}\( r\mapsto\left(r+A_{1},\cdots,r+A_{k}\right)\){:/nomarkdown}. אם {::nomarkdown}\( r\){:/nomarkdown} התמפה ל-{::nomarkdown}\( 0\){:/nomarkdown}, אז {::nomarkdown}\( r\in A_{i}\){:/nomarkdown} לכל {::nomarkdown}\( i\){:/nomarkdown}, כלומר {::nomarkdown}\( r\in A_{1}\cap\cdots\cap A_{k}\){:/nomarkdown}, ומכאן קל לראות שהגרעין הוא {::nomarkdown}\( A_{1}\cap\cdots\cap A_{k}\){:/nomarkdown} (ברור שכל איבר של {::nomarkdown}\( A_{1}\cap\cdots\cap A_{k}\){:/nomarkdown} יתמפה לאפס).

כעת, {::nomarkdown}\( A_{1}\cap\cdots\cap A_{k}=A_{1}\cdots A_{k}\){:/nomarkdown} במקרה הנוכחי, שבו כל זוג {::nomarkdown}\( A_{i}\){:/nomarkdown}-ים הם קו-מקסימליים; זה האנלוג של העובדה עבור מספרים שלמים ש-{::nomarkdown}\( \mbox{lcm}\){:/nomarkdown} (כפולה משותפת מינימלית) של מספרים שלמים שווה למכפלה שלהם אם כולם זרים. בכיוון אחד, כל איבר של {::nomarkdown}\( A_{1}\cdots A_{k}\){:/nomarkdown} בוודאי שייך לכל אחד מהאידאלים, בשל תכונת הבליעה שלהם (מי שמורכב ממכפלה של איבר ב-{::nomarkdown}\( A_{i}\){:/nomarkdown} ועוד דברים על בטוח יהיה ב-{::nomarkdown}\( A_{i}\){:/nomarkdown}, וגם סכומים של איברים כאלו). בכיוון השני בואו ניקח איבר {::nomarkdown}\( c\in A_{1}\cap\cdots\cap A_{k}\){:/nomarkdown} ונוכיח ש-{::nomarkdown}\( c\in A_{1}\cdots A_{k}\){:/nomarkdown}.

כעת, {::nomarkdown}\( A_{1}\){:/nomarkdown} ו-{::nomarkdown}\( A_{2}A_{3}\cdots A_{k}\){:/nomarkdown} הם קו-מקסימליים, כך שקיימים {::nomarkdown}\( a\in A_{1}\){:/nomarkdown} ו-{::nomarkdown}\( b\in A_{2}A_{3}\cdots A_{k}\){:/nomarkdown} כך ש-{::nomarkdown}\( 1=a+b\){:/nomarkdown}. נכפול את שני האגפים ב-{::nomarkdown}\( c\){:/nomarkdown} ונקבל {::nomarkdown}\( c=ca+cb\){:/nomarkdown}. ברור לנו ש-{::nomarkdown}\( cb\in A_{1}\cdots A_{k}\){:/nomarkdown} כי הוא מכפלה של איבר מ-{::nomarkdown}\( A_{1}\){:/nomarkdown} ({::nomarkdown}\( c\){:/nomarkdown}) עם איבר מ-{::nomarkdown}\( A_{2}\cdots A_{k}\){:/nomarkdown} ({::nomarkdown}\( b\){:/nomarkdown}), לכן נותר להוכיח ש-{::nomarkdown}\( ca\in A_{1}\cdots A_{k}\){:/nomarkdown}, ולצורך כך מספיק להראות ש-{::nomarkdown}\( c\in A_{2}\cdots A_{k}\){:/nomarkdown}, כלומר צמצמנו את הבעיה ממכפלה של {::nomarkdown}\( k\){:/nomarkdown} איברים למכפלה של {::nomarkdown}\( k-1\){:/nomarkdown} איברים וניתן להמשיך לעשות זאת עד אשר נגיע לאידאל בודד שעבורו הטענה טריוויאלית.

כל מה שנותר לעשות הוא להראות שההומומורפיזם שהגדרתי לעיל הוא באמת הומומורפיזם (אוותר על התענוג, זה לא קשה) ושהוא על. להוכיח שהוא על זה <strong>בדיוק</strong>, אבל בדיוק כמו במשפט ה"קלאסי": לכל {::nomarkdown}\( A_{i}\){:/nomarkdown}, אנחנו יודעים שהוא קו-מקסימלי עם {::nomarkdown}\( B=\prod_{j\ne i}A_{j}\){:/nomarkdown} (אני משתמש כאן ב-{::nomarkdown}\( B\){:/nomarkdown} לצורכי נוחות בלבד). אז קיימים {::nomarkdown}\( x_{i}\in A_{i},e_{i}\in B\){:/nomarkdown} כך ש-{::nomarkdown}\( x_{i}+e_{i}=1\){:/nomarkdown}, או בלשון קוסטים, {::nomarkdown}\( e_{i}+A_{i}=1+A_{i}\){:/nomarkdown}.

כעת, יהא וקטור {::nomarkdown}\( \left(a_{1}+A_{1},\dots,a_{k}+A_{k}\right)\){:/nomarkdown} של קוסטים. נגדיר {::nomarkdown}\( r=a_{1}e_{1}+\dots+a_{k}e_{k}\){:/nomarkdown}. מהו {::nomarkdown}\( r+A_{i}\){:/nomarkdown}? ובכן, לכל {::nomarkdown}\( e_{j}\){:/nomarkdown} עבור {::nomarkdown}\( j\ne i\){:/nomarkdown} אנחנו יודעים ש-{::nomarkdown}\( e_{j}\){:/nomarkdown} שייך למכפלה של אידאלים שכוללים את {::nomarkdown}\( A_{i}\){:/nomarkdown} ולכן {::nomarkdown}\( e_{j}\in A_{i}\){:/nomarkdown} ולכן {::nomarkdown}\( a_{j}e_{j}\in A_{i}\){:/nomarkdown} והגורם הזה נבלע בתוך {::nomarkdown}\( A_{i}\){:/nomarkdown} (האנלוג עבור {::nomarkdown}\( \mathbb{Z}_{m_{i}}\){:/nomarkdown} היה התאפסות), ואילו עבור {::nomarkdown}\( e_{i}\){:/nomarkdown} אנחנו יודעים ש-{::nomarkdown}\( e_{i}+A_{i}=1+A_{i}\){:/nomarkdown} ולכן {::nomarkdown}\( a_{i}e_{i}+A_{i}=a_{i}+A_{i}\){:/nomarkdown} - בדיוק מה שרצינו. זה מסיים את ההוכחה.

מה שאני אוהב כל כך במשפט הזה, פרט לכך שהוא שימושי במגוון יישומים (נראה אחד בפוסט הבא), הוא העובדה שאפשר לראות אותו בשתי דרכים שונות - אחת מאוד קונקרטית ופרטית, ברמה שבה אפשר להבין מה קורה במשפט כמעט בלי להכיר מושגים קודם, והשניה ברמה יותר מופשטת שדורשת היכרות עם מושגים מתקדמים מעט יותר (לא <strong>הרבה</strong> יותר...), וכל אחת מנקודות המבט הללו מעשירה אותנו ומאפשרת לנו להבין יותר טוב "מה הולך פה", אבל אחרי שמתרגלים רואים ששתיהן הן בעצם אותו הדבר בדיוק. כמו שאני אוהב לצטט לפעמים: "המתמטיקה היא האמנות של קריאה באותו השם לדברים שונים, ושל קריאה בשמות שונים לאותו דבר".
