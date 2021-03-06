---
id: 696
title: "הוכחה ש-P שונה מ-NP?"
date: 2010-08-10 09:50:05
layout: post
categories: 
  - בעיות מתמטיות מפורסמות
  - תורת הסיבוכיות
tags: 
  - חדשות מתמטיות
  - שאלת P=NP
---
למרות שאני לא אוהב לכתוב פוסטים "חדשותיים", נראה לי שאין מנוס מכך הפעם. בימים האחרונים נוצר באזז עצום סביב הוכחה לכך ש-P שונה מ-NP (מה הבעיה הזו בכלל? על כך דיברתי <a href="http://www.gadial.net/2007/12/16/np_haystack/">כאן</a>), וגם אני לא יכול להתעלם ממנו. למי שמעוניין לקרוא טיוטה של ההוכחה (שדלפה לרשת ואיננה הגרסה הרשמית של כותב ההוכחה אלא משהו שהוא שלח באופן פרטי לעמיתים), <a href="http://www.hpl.hp.com/personal/Vinay_Deolalikar/Papers/pnp12pt.pdf">הנה</a> היא. למי שמעוניין לקרוא מה בלוגים טובים ממני אומרים - הנה לינק <a href="http://rjlipton.wordpress.com/2010/08/08/a-proof-that-p-is-not-equal-to-np/">אחד</a>, ועוד <a href="http://scottaaronson.com/blog/?p=456">אחד</a>. ולמי שרוצה לשמוע את דעתי, הנה היא בקצרה:

ראשית, לא קראתי את ההוכחה אלא רק רפרפתי עליה. היא לא קצרה במיוחד (אם כי גם לא ארוכה עד כדי כך) וכבר מהצצה חטופה ברור לי שיידרש לי זמן מה כדי להבין מה קורה שם, ואני מעדיף לחכות עד שגדולים ממני יפסקו בעניין. מה שכן אפשר לומר על ההוכחה הזו - הן מהמבט שנתתי בה, אבל בעיקר ממה שאחרים כבר אמרו - היא לא נראית מופרכת. חשוב להבין שהוכחות לכך ש-P שונה מ-NP, או שווה לו, או שהבעיה בכלל לא כריעה, צצות כל הזמן ברשת ולרוב מקורן בטרחנים שאין להם מושג על מה הם מדברים. הנה <a href="http://www.win.tue.nl/~gwoegi/P-versus-NP/argall.txt">דוגמה</a> להוכחה גרועה במיוחד לכך שהבעיה היא אי כריעה (תקציר: "משפט גדל מראה שלא ניתן לדעת הכל, אז בטח גם את P=NP אי אפשר לדעת"). ההוכחה הנוכחית היא יוצאת דופן בכך שהיא חד משמעית איננה הוכחה של טרחן ולא ניתן לפסול אותה על הסף כשטויות. זו הוכחה של חוקר רציני עם רקורד קיים, שכבר התעסק בוריאציות על הבעיה ואמר עליהן דברים לא טריוויאליים, וגם חוקרים נודעים במדעי המחשב (ציטטו בפרט את סטיבן קוק, ההוא ממשפט קוק-לוין למי שמכיר) דיברו בחיוב על ההוכחה. מכאן שגם אם ההוכחה אינה נכונה, היא ללא ספק משהו שיש להתייחס אליו ברצינות.

מה קורה כעת? ובכן, מחכים. אנשים מוכשרים ורציניים עומדים לבדוק את ההוכחה בשבע עיניים ולהעלות אלף ואחת השגות. ייתכן שאפילו יתגלו טעויות מהותיות, ואז נשאלת השאלה האם ניתן יהיה לתקנן. לפני כמה שנים קמה מהומה דומה (אם כי יותר לוקלית ופחות רועשת) סביב הוכחה לכך שבעיית איזומורפיזם הגרפים היא ב-P, ולאחר מכן התברר שההוכחה שגויה והיא טרם תוקנה. לפני זמן רב מעט יותר קמה מהומה אדירה סביב פתרון בעיה פתוחה מרכזית ועתיקת יומין במתמטיקה - המשפט האחרון של פרמה - ובמקרה הזה התגלתה טעות בהוכחה, ונדרשה לא מעט עבודה כדי לתקנה - אך הטעות תוקנה בסוף והמשפט הוכח. ייתכן מאוד שזה מה שיקרה כאן. לכן אפשר לומר שגם אם ההוכחה איננה נכונה, היא כן פותחת פתח חדש לתקיפה של הבעיה. עד עכשיו הקרב נגד הבעיה הזו היה נואש וכושל והמאמצים הטובים ביותר של מדעני המחשב להתמודד איתה נכשלו באופן צורב; כעת יש תקווה למתקפת נגד שתוביל לנצחון.

ונניח שההוכחה נכונה, מה הלאה? ובכן, שום דבר לא קורס ושום דבר מהותי לא משתנה, בעצם. הוכחה ש-P=NP הייתה סנסציה מדהימה; היא הייתה גורמת לקריסת תחומים שלמים במדעי המחשב; היא הייתה, למשל, מוחקת לחלוטין את תחום התיאוריה של הקריפטוגרפיה; ובהתאם לאופן שבו ההוכחה הייתה מתבצעת (למשל, על ידי מתן אלגוריתם יעיל מפורש לבעיה קיימת - ויעיל באופן מציאותי ולא רק תיאורטי), היו עשויות להיות לה גם השלכות מעשיות רבות. אבל הוכחה ש-P <strong>שונה</strong> מ-NP היא בדיוק מה שמדעני המחשב מצפים לו כבר שנים רבות, וכמעט כולם פועלים תחת ההנחה הזו. אין שום דבר מפתיע בכך שהטענה נכונה, אלא רק בכך שהצליחו למצוא לה הוכחה. מה שזה אומר הוא שלא סביר שההוכחה הזו תשנה מהותית את פני מדעי המחשב, אבל היא כן תסיר את הזרקור מהכוכב המרכזי של הבעיות הפתוחות בענף זה - כל ספר על התיאוריה של מדעי המחשב ייאלץ להוציא מהדורה חדשה.

חשוב גם להבין שההוכחה הזו היא של תוצאה <strong>חלשה</strong>. להראות ש-P שונה מ-NP זה רק המינימום שבמינימום שבין השאלות הפתוחות המציקות לנו - האם NP שונה מ-coNP? האם קיימת פונקציה חד כיוונית? האם קיים מחולל מספרים פסאודו-אקראיים? האם ההיררכייה הפולינומית קורסת? אלו כמה דוגמאות לשאלות מהותיות שנותרות ללא מענה (ואם היה מתברר ש-P=NP היה ניתן להן מענה) - מי שלא מכיר את המושגים, לא נורא, אם כי אני מקווה להרחיב בעניינים הללו בבלוג (על חלקם כבר סיפרתי משהו). אם כן, ההוכחה הזו לא מביאה לסופם את מדעי המחשב התיאורטיים - אפילו לא נכון לומר שהבעיה הגדולה נענתה וכעת נותרו רק בעיות "קטנות"; אם כבר, ההוכחה הזו מבשרת את תחילתו של עידן חדש שבו ההתמודדות תהיה עם בעיות פתוחות גדולות אף יותר מהנוכחית, מתוך תקווה שאכן ניתן סוף סוף להתמודד איתן.

אני, בכל מקרה, מחזיק אצבעות לכך שההוכחה תתברר כנכונה לחלוטין. אבל בינתיים אפשר רק לחכות.
