---
id: 3513
title: "אינדוקציה שלמה ואינדוקציה רגילה"
date: 2017-10-20 17:16:42
layout: post
categories: 
  - כללי
  - לוגיקה
tags: 
  - אינדוקציה מתמטית
  - אינדוקציה שלמה
---
פנו אלי בשאלה פשוטה: איך מוכיחים את עקרון האינדוקציה השלמה מעקרון האינדוקציה הרגיל? ובכן, בואו נסביר על מה מדובר בכלל, ואיך מוכיחים.

אינדוקציה "רגילה" היא דרך מקובלת במתמטיקה להסיק טענה כללית: מתחילים ממקרים פרטיים ספציפיים שבהם קל להראות את הטענה באופן מפורש, ואז מציגים "תבנית הוכחה" שהיא מהצורה "אם המקרה הפשוט הזה נכון, אז גם המקרה היותר מסובך הזה נכון". הרעיון הוא שלכל מקרה שנרצה להוכיח, נוכל איכשהו להתחיל ממקרה פרטי שעבורו כבר הוכחנו את הטענה, ואז להסיק ממנו, באמצעות תבנית ההוכחה שלנו, מקרים יותר ויותר מסובכים עד שנגיע אל המקרה הספציפי שאנחנו רוצים להוכיח.

את התיאור המאוד כללי ומנופנף ידיים הזה לרוב דוחסים לתוך המסגרת המאוד פשוטה של המספרים הטבעיים - המספרים {::nomarkdown}\(1,2,3,4,\dots\){:/nomarkdown} (נעזוב את 0 להפעם). הרעיון הוא שיש לנו סדרה של טענות, כשכל טענה מתאימה למספר טבעי אחר. למשל, השווין {::nomarkdown}\(1+2+3+\dots+n=\frac{n\left(n+1\right)}{2}\){:/nomarkdown} הוא בעצם דרך כללית לתאר את הסדרה הבאה של טענות:

טענה מס' 1: {::nomarkdown}\(1=\frac{1\left(1+1\right)}{2}\){:/nomarkdown}

טענה מס' 2: {::nomarkdown}\(1+2=\frac{2\left(2+1\right)}{2}\){:/nomarkdown}

טענה מס' 3: {::nomarkdown}\(1+2+3=\frac{3\left(3+1\right)}{2}\){:/nomarkdown}

וכך זה נמשך ונמשך.

אינדוקציה "רגילה" אומרת את הדבר הבא: נניח שאנחנו יודעים להוכיח את הטענה במפורש עבור {::nomarkdown}\(n=1\){:/nomarkdown} (<strong>הבסיס</strong>) ונניח גם ש<strong>אם</strong> נתון לנו שהטענה נכונה עבור {::nomarkdown}\(n\){:/nomarkdown} כלשהו אז אנחנו יודעים להוכיח שהטענה נכונה עבור {::nomarkdown}\(n+1\){:/nomarkdown} (<strong>הצעד</strong>) אז הטענה נכונה לכל {::nomarkdown}\(n\){:/nomarkdown}. האינטואיציה היא שכדי להוכיח את טענה 3, למשל, אנחנו מבצעים שרשרת של טענות מהצורה "אוקיי, קודם כל טענה 1 נכונה כי הנה הוכחה מפורשת. עכשיו, אני יודע להוכיח ש<strong>אם</strong> טענה 1 נכונה אז גם טענה 2 נכונה, וכבר ראיתי שטענה 1 נכונה אז המסקנה היא שטענה 2 נכונה. עכשיו, אני יודע להוכיח ש<strong>אם </strong>טענה 2 נכונה אז גם טענה 3 נכונה, וכבר ראינו ש-2 נכונה ולכן גם 3 נכונה". עבור טענה 1,000,000 אותו עיקרון בדיוק יעבוד, אם כי השרשרת שתיווצר תהיה מפלצתית באורכה (אבל האורך הזה יהיה סופי, שזו הנקודה החשובה פה כי הוכחות אמורות להיות תמיד סופיות).

אינדוקציה "שלמה" אומרת את הדבר הבא: נניח ש<strong>אם </strong>נתון לנו שהטענה נכונה <strong>לכל</strong> מספר טבעי מ-1 ועד {::nomarkdown}\(n\){:/nomarkdown}, אז אנחנו יודעים להוכיח את הטענה עבור {::nomarkdown}\(n+1\){:/nomarkdown}, אז מכאן נובע שהטענה נכונה לכל {::nomarkdown}\(n\){:/nomarkdown}. כאן אין הבדלה בין הבסיס ובין הצעד, כי הבסיס הוא הסיטואציה שבה {::nomarkdown}\(n=0\){:/nomarkdown}, ואז ה"צעד" אומר את הדבר הבא: אנחנו יודעים להוכיח שהטענה נכונה עבור 1 <strong>אם</strong> נתון לנו שהיא נכונה לכל מספר טבעי שגדול או שווה ל-1 אבל קטן או שווה ל-0, כלומר במקרה הזה לא נתון לנו כלום, וזו בדיוק הסיטואציה של להוכיח את המקרה {::nomarkdown}\(n=1\){:/nomarkdown} בלי כלום.

מה ההבדל בין אינדוקציה רגילה ושלמה? באינדוקציה שלמה <strong>יש יותר על מה להתבסס</strong> כשבאים להוכיח שהטענה נכונה עבור {::nomarkdown}\(n+1\){:/nomarkdown}. באינדוקציה רגילה כל מה שיש לנו הוא את נכונות הטענה עבור {::nomarkdown}\(n\){:/nomarkdown}, וזהו; אבל אולי המקרה עבור {::nomarkdown}\(n\){:/nomarkdown} לא רלוונטי עבור {::nomarkdown}\(n+1\){:/nomarkdown} ודווקא קל להוכיח את המקרה {::nomarkdown}\(n+1\){:/nomarkdown} אם נתונה לנו הטענה עבור {::nomarkdown}\(n-1\){:/nomarkdown}? לכן אינדוקציה שלמה באה להגיד לנו - קחו איזה מקרה שתרצו מבין אלו ש"כבר עברתם". אם נחשוב על זה לרגע, כשאני מוכיח את המקרה {::nomarkdown}\(n=5\){:/nomarkdown} באינדוקציה <strong>רגילה</strong>, מה שאני עושה הוא קודם כל לייצר הוכחות עבור המקרים {::nomarkdown}\(1,2,3,4\){:/nomarkdown} ואז להשתמש רק במקרה 4 כדי להוכיח את 5. אין סיבה עקרוני למה לא להשתמש גם ב"תוצרי הלוואי" שהוכחתי בדרך - 1,2,3.

אם לסכם - אינדוקציה שלמה נראית <strong>חזקה יותר</strong> כי היא נותנת לנו בצעד האינדוקציה יותר מידע שאפשר להתבסס עליו, אבל בפועל זה לא מידע שצץ משום מקום - גם באינדוקציה רגילה הוא נוצר, והאינדוקציה הרגילה פשוט "שוכחת ממנו". תחשבו על האופן שבו אנחנו לפעמים קוראים ערכים בויקיפדיה: אנחנו נכנסים לערך כלשהו, באמצע הקריאה לוחצים על לינק ומתחילים לקרוא על ערך אחר, ואז על ערך אחר וכן הלאה; כשאנחנו עוברים ערך אנחנו יכולים או סתם ללחוץ על הלינק והדפדפן יעבור לערך החדש, או שאנחנו יכולים לפתוח את הלינק בטאב חדש, תוך שאנחנו שומרים את הטאבים שכוללים את כל הערכים שבהם היינו עד כה. זו המחשה להבדל בין שתי הגישות.

אז למה אנחנו כאן? בשביל הפורמליזם. השאלה המעניינת היא זו: נניח שאנחנו יודעים שהמספרים הטבעיים מקיימים את תכונת האינדוקציה הרגילה; איך אפשר להסיק מכך שהם מקיימים את תכונת האינדוקציה השלמה? איך עושים את זה פורמלית? ולמה בעצם זו בעיה?

כדי לפשט טיפה את הדיון מבלי לפגוע במהות שלו, בואו נציג ניסוח קצת יותר נקי של מהי אינדוקציה. במקום לדבר על "תכונות" נדבר על קבוצות. אינדוקציה רגילה אומרת את הדבר הבא: תהא {::nomarkdown}\(S\){:/nomarkdown} קבוצה כלשהי של מספרים טבעיים. אם {::nomarkdown}\(1\in S\){:/nomarkdown} וגם ידוע שלכל {::nomarkdown}\(n\){:/nomarkdown} טבעי, אם {::nomarkdown}\(n\in S\){:/nomarkdown} אז {::nomarkdown}\(n+1\in S\){:/nomarkdown}, אז המסקנה היא ש-{::nomarkdown}\(S=\mathbb{N}\){:/nomarkdown}, דהיינו {::nomarkdown}\(S\){:/nomarkdown} כוללת את כל הטבעיים. בואו ננסח את זה בצורה יותר פורמלית, כדי למנוע ככל הניתן כפלי משמעות שהשפה מכניסה:

{::nomarkdown}\(\forall S\left[\left(1\in S\wedge\left(\forall n\left(n\in S\to n+1\in S\right)\right)\right)\to S=\mathbb{N}\right]\){:/nomarkdown}

הניסוח הזה הוא עדיין כתיבה בנפנוף ידיים כלשהו - זה לא פסוק שמתאים בדיוק לכל כללי הלוגיקה הפורמלית, אבל זה מספיק טוב לצריכנו, שהם לתאר פורמלית את מה שקורה פה. עכשיו אנסח אינדוקציה שלמה בצורה דומה:

{::nomarkdown}\(\forall S\left[\left(\forall n\left(\forall k\left(k&lt;n\to k\in S\right)\to n\in S\right)\right)\to S=\mathbb{N}\right]\){:/nomarkdown}

בואו ננסה להבין איך צריכה להיראות הוכחה פורמלית יחסית לדברים הללו. ראשית, ה-{::nomarkdown}\(\forall S\){:/nomarkdown} הזה אומר שאני צריך לקחת {::nomarkdown}\(S\){:/nomarkdown} <strong>כלשהי</strong> ולהוכיח את הטענה בסוגריים עבור אותה {::nomarkdown}\(S\){:/nomarkdown}. כלומר, מה שנשאר להוכיח הוא כעת

{::nomarkdown}\(\left(\forall n\left(\forall k\left(k&lt;n\to k\in S\right)\to n\in S\right)\right)\to S=\mathbb{N}\){:/nomarkdown}

זו טענה מהמבנה הכללי {::nomarkdown}\(A\to B\){:/nomarkdown}. טענות כאלו הן נכונות תמיד, למעט במקרה שבו {::nomarkdown}\(A\){:/nomarkdown} הוא "אמת" ואילו <strong>{::nomarkdown}\(B\){:/nomarkdown} </strong>הוא "שקר". כלומר, היעד שלנו הוא להראות שהמקרה הזה לא מתאפשר. מכיוון שבמקרה הזה {::nomarkdown}\(A\){:/nomarkdown} הוא "אמת" אני יכול להוסיף את {::nomarkdown}\(A\){:/nomarkdown} להנחות שלי, ומכיוון שאני רוצה להראות שגם {::nomarkdown}\(B\){:/nomarkdown} הוא אמת, אני רוצה להוכיח את {::nomarkdown}\(B\){:/nomarkdown}. במילים אחרות, אם אני מתחזק לעצמי שתי רשימות - רשימה של "ההנחות שלי" ורשימה של "הדברים שעלי להוכיח", ורשימת "הדברים שעלי להוכיח" כללה את {::nomarkdown}\(A\to B\){:/nomarkdown}, אז אני מוציא את {::nomarkdown}\(A\to B\){:/nomarkdown} מהרשימה הזו, מוסיף לה את {::nomarkdown}\(B\){:/nomarkdown} ומוסיף את {::nomarkdown}\(A\){:/nomarkdown} לרשימת ההנחות שלי.

על כן, ה"צריך להוכיח" שלי כולל דבר יחיד: {::nomarkdown}\(S=\mathbb{N}\){:/nomarkdown}. ההנחות שלי כוללות את הרישא של נוסחת האינדוקציה השלמה, ואת <strong>כל</strong> נוסחת האינדוקציה הרגילה. כלומר, יש לי שתי הנחות:
<ol>
	<li>{::nomarkdown}\(\forall n\left(\forall k\left(k&lt;n\to k\in S\right)\to n\in S\right)\){:/nomarkdown}</li>
	<li>{::nomarkdown}\(\left(1\in S\wedge\left(\forall n\left(n\in S\to n+1\in S\right)\right)\right)\to S=\mathbb{N}\){:/nomarkdown}</li>
</ol>
את הנחה מס' 2 אפשר לנצל בצורה הבאה: הסיפא שלה היא בדיוק מה שאני צריך להוכיח, ולכן אם אוכיח את הרישא שלה, סיימתי. זה אומר שאני יכול <strong>להחליף</strong> את הצריך להוכיח המקורי שלי בנוסחה הבאה:

{::nomarkdown}\(1\in S\wedge\left(\forall n\left(n\in S\to n+1\in S\right)\right)\){:/nomarkdown}

אלו בעצם שני "צריך להוכיח" שונים שכתובים יחד. רשימת ה"צריך להוכיח" שלי, אם כן, היא כעת:
<ol>
	<li>{::nomarkdown}\(1\in S\){:/nomarkdown}</li>
	<li>{::nomarkdown}\(\forall n\left(n\in S\to n+1\in S\right)\){:/nomarkdown}</li>
</ol>
וההנחה שבאמצעותה אני אמור להוכיח את שני אלו היא זו: {::nomarkdown}\(\forall n\left(\forall k\left(k&lt;n\to k\in S\right)\to n\in S\right)\){:/nomarkdown}. בואו נראה איך זה מוכיח את 1: ההנחה מתקיימת לכל {::nomarkdown}\(n\){:/nomarkdown}, ולכן בפרט עבור הבחירה {::nomarkdown}\(n=1\){:/nomarkdown}. כשמציבים את הבחירה הזו בהנחה, מקבלים

{::nomarkdown}\(\left(\forall k\left(k&lt;1\to k\in S\right)\to1\in S\right)\){:/nomarkdown}. כמו קודם, אנחנו יכולים להחליף את ה"צריך להוכיח" הנוכחי שלנו, {::nomarkdown}\(1\in S\){:/nomarkdown}, ברישא של הפסוק הזה, {::nomarkdown}\(\forall k\left(k&lt;1\to k\in S\right)\){:/nomarkdown}. אצלנו הטבעיים לא כוללים את 0, ולכן {::nomarkdown}\(k&lt;1\){:/nomarkdown} הוא משהו שלא מתקיים לאף טבעי. לכן הנוסחה {::nomarkdown}\(\forall k\left(k&lt;1\to k\in S\right)\){:/nomarkdown} היא נכונה תמיד (אם הרישא היא "שקר" לא אכפת לנו אם הסיפא היא אמת או שקר). זה מסיים את זה.

עד עכשיו הכל עבד כל כך חלק, אז איפה הבעיה בעצם? בדיוק בשלב הבא: נשאר לי להוכיח ש-

{::nomarkdown}\(\forall n\left(n\in S\to n+1\in S\right)\){:/nomarkdown}

כלומר, עבור {::nomarkdown}\(a\){:/nomarkdown} שרירותי כלשהו, אנחנו רוצים להוכיח ש-{::nomarkdown}\(a\in S\to a+1\in S\){:/nomarkdown} (בכוונה החלפתי את האות). במילים אחרות, אנחנו רוצים להוכיח את {::nomarkdown}\(a+1\in S\){:/nomarkdown} עם ההנחה {::nomarkdown}\(a\in S\){:/nomarkdown} והנחה נוספת: ההנחה החזקה-לכאורה של אינדוקציה שלמה, שאומרת ש- {::nomarkdown}\(\forall n\left(\forall k\left(k&lt;n\to k\in S\right)\to n\in S\right)\){:/nomarkdown}. אם אני אציב {::nomarkdown}\(n=a+1\){:/nomarkdown}, הסיפא של ההנחה שלי תהיה בדיוק מה שאני חותר אליו, ויישאר לי רק להראות את {::nomarkdown}\(\forall k\left(k&lt;a+1\to k\in S\right)\){:/nomarkdown}. וכאן אני נתקע.

למה אני נתקע? כי לא נתון לי ש-{::nomarkdown}\(k\in S\){:/nomarkdown} <strong>לכל</strong> {::nomarkdown}\(k&lt;a+1\){:/nomarkdown}; זה נתון רק עבור {::nomarkdown}\(k\){:/nomarkdown} ספציפי - {::nomarkdown}\(k=a\){:/nomarkdown}. ההנחה הרחבה של האינדוקציה השלמה היא <strong>חסרון</strong> במקרה הנוכחי, כי בניגוד לסיטואציות הרגילות שבהן אני <strong>משתמש</strong> באינדוקציה שלמה, ואז זה מקל על החיים, כאן אני מנסה להוכיח <strong>את עקרון האינדוקציה השלמה עצמו</strong>, ולצורך כך אני צריך לקושש <strong>יותר</strong> נתונים מאשר בדרך כלל. לכאורה נתקעתי.

הפתרון הוא פתרון סטנדרטי כאשר משתמשים באינדוקציה ונתקעים - <strong>לחזק את הנחת האינדוקציה</strong>. כשמוכיחים את צעד האינדוקציה מוכיחים {::nomarkdown}\(n\in S\to n+1\in S\){:/nomarkdown}. כאן אנחנו נעזרים ב<strong>הנחה</strong> {::nomarkdown}\(n\in S\){:/nomarkdown} כדי להוכיח את ה<strong>צעד</strong> {::nomarkdown}\(n+1\in S\){:/nomarkdown}. אם ההנחה {::nomarkdown}\(n\in S\){:/nomarkdown} לא מספיק טובה לנו, אנחנו מחליפים את {::nomarkdown}\(S\){:/nomarkdown} כולה ב-{::nomarkdown}\(S^{\prime}\){:/nomarkdown} שהיא <strong>חיזוק</strong> של {::nomarkdown}\(S\){:/nomarkdown} - כלומר, היא תכונה שכל מי שמקיים אותה מקיים גם את {::nomarkdown}\(S\){:/nomarkdown}, אבל כוללת יותר אינפורמציה שאפשר לנצל. בצורה הזו אנחנו מקבלים את ההנחה החזקה יותר {::nomarkdown}\(n\in S^{\prime}\){:/nomarkdown} ואם בחרנו את {::nomarkdown}\(S^{\prime}\){:/nomarkdown} בחוכמה, נוכל להוכיח את הצעד החזק יותר (ולכן הקשה יותר להוכחה) {::nomarkdown}\(n+1\in S^{\prime}\){:/nomarkdown} יותר בקלות.

במקרה שלנו החיזוק הוא די ברור: {::nomarkdown}\(S^{\prime}=\left\{ n\in S\ \|\ \forall k&lt;n\left(k\in S\right)\right\} \){:/nomarkdown}. כלומר, התכונה שלנו עכשיו היא "אני מקיים את {::nomarkdown}\(S\){:/nomarkdown} וכך גם כל מי שקטן ממני". בבירור {::nomarkdown}\(S^{\prime}\subseteq S\){:/nomarkdown} ולכן אם אוכיח {::nomarkdown}\(S^{\prime}=\mathbb{N}\){:/nomarkdown} ינבע מכך {::nomarkdown}\(S=\mathbb{N}\){:/nomarkdown}. בשביל להוכיח ש-ּ{::nomarkdown}\(S^{\prime}=\mathbb{N}\){:/nomarkdown} צריך להוכיח את שתי הטענות שהצגתי קודם:
<ol>
	<li>{::nomarkdown}\(1\in S^{\prime}\){:/nomarkdown}</li>
	<li>{::nomarkdown}\(\forall n\left(n\in S^{\prime}\to n+1\in S^{\prime}\right)\){:/nomarkdown}</li>
</ol>
מבין שתיהן, הטענה הראשונה כבר טופלה - כבר ראינו ש-{::nomarkdown}\(1\in S\){:/nomarkdown} ומכיוון שלא קיים {::nomarkdown}\(k&lt;1\){:/nomarkdown} אז השייכות {::nomarkdown}\(1\in S^{\prime}\){:/nomarkdown} נובעת מיידית. נשאר רק להוכיח את צעד האינדוקציה ה"מחוזק", כלומר ש-{::nomarkdown}\(a\in S^{\prime}\to a+1\in S^{\prime}\){:/nomarkdown}. כעת, אם {::nomarkdown}\(a\in S^{\prime}\){:/nomarkdown} אז מהגדרת {::nomarkdown}\(S^{\prime}\){:/nomarkdown} נקבל ש-{::nomarkdown}\(k\in S\){:/nomarkdown} לכל {::nomarkdown}\(k&lt;a+1\){:/nomarkdown}. זה אומר שכדי להראות ש-{::nomarkdown}\(a+1\in S^{\prime}\){:/nomarkdown} צריך אך ורק להראות ש-{::nomarkdown}\(a+1\in S\){:/nomarkdown}. עכשיו מצבנו השתפר! אנחנו צריכים להוכיח את הטענה

{::nomarkdown}\(a+1\in S\){:/nomarkdown}

שגם קודם הסתבכנו איתה, אבל עכשיו יש לנו הנחה חזקה יותר:

{::nomarkdown}\(a\in S^{\prime}\){:/nomarkdown}

וההנחה הזו נותנת לנו את מה שהיה חסר לנו קודם: {::nomarkdown}\(k\in S\){:/nomarkdown} לכל {::nomarkdown}\(k&lt;a+1\){:/nomarkdown}. עם ההנחה הזו אפשר להשתמש בהנחה הנוספת שקיבלנו מעקרון האינדוקציה השלמה ולקבל {::nomarkdown}\(a+1\in S\){:/nomarkdown} כפי שרצינו, מה שמסיים את ההוכחה.

לסיכום, אין בעקרון האינדוקציה השלמה שום דבר מתוחכם במיוחד - הוא דוגמא בסיסית לאופן שבו אפשר <strong>לחזק</strong> את עקרון האינדוקציה הרגיל על ידי שינוי התכונה שאותה מוכיחים באינדוקציה. אבל זה אחד מהמקרים הללו שבהם קשה להבין מה בעצם הבעיה עד שלא חופרים בו טכנית לעומק.
