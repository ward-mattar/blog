---
id: 3759
title: "משפטי נקודת השבת של בנך וברואר"
date: 2019-03-23 14:42:33
layout: post
categories: 
  - אנליזה מתמטית
tags: 
  - משפט נקודת השבת של בנך
  - משפט נקודת השבת של ברואר
  - נקודת שבת
---
<h2>מבוא</h2>
בואו נתחיל עם סיפור קצרצר בן פסקה אחת של חורחה לואיס בורחס בשם "על הדיוק במדע" שאני מביא פה בתרגום יורם ברונובסקי:
<blockquote>...באימפריה זו הגיעה אמנות כתיבת המפות למידת שלמות כזו, שמפתו של מחוז אחד השתרעה על פני עיר שלמה ואילו מפתה של האימפריה כולה - על פני המחוז כולו. ברבות הימים לא סיפקו עוד מפות ענק אלה את התשובות וועדות כותבי המפות החלו להכין את מפת האימפריה שגודלה כגודל האימפריה עצמה, והיא זהה עמה בכל נקודה ונקודה. הדורות הבאים היו אדוקים פחות במדע כתיבת המפות, הם גרסו שמפה נרחבת זו היא מיותרת והפקידו אותה לאכזריות השמש והחורף. במדבריות המערב שרדו כמה חורבות של המפה, שם שוכנים חיות בר וקבצנים, בארץ כולה לא היו שרידים נוספים של מדע כתיבת הארץ.

(מתוך "מסעות אנשי החיל" לסוארס מיראנדה, ספר רביעי, פרק מ"ה, לרידה, 1658.)</blockquote>
לא, אל תחפשו את "מסעות אנשי החיל" לסוארס מיראנדה, הוא קיים בערך כמו ספר מפורסם אחר של אחד, ס. מורגנשטרן.

איך כל זה קשור למתמטיקה? ובכן, על משמעות כלליות מהסיפור אפשר לדבר בפעם אחרת, הפעם הבאתי אותו כי המוטיבציה שלי לכתיבת הפוסט היא דבר אחר, דומה, שגם כן מערב מפות: ההבחנה שאם ניקח מפה של ארץ כלשהי (לא בהכרח 1:1 כמו המפה של בורחס) ונניח אותה על הקרקע של הארץ שמתוארת בה, אז תהיה נקודה על המפה שנמצאת <strong>בדיוק</strong> מעל הנקודה על הקרקע הפיזית שהנקודה הזו במפה מתארת. תמיד. וגם אם נזיז קצת את המפה - עדיין תהיה. וכן, גם אם ננסה בכוונה להניח את המפה על הקרקע כך שזה לא יקרה, זה יקרה. וגם אם נסובב את המפה - זה יקרה. ומה שנחמד פה כל כך הוא שהתוצאה הזו היא המחשה יפה של <strong>משפט נקודת השבת של בנך</strong>; והמשפט הזה גם מצביע על הדרך שבה אפשר למצוא את הנקודה שבה זה קורה.

משפט נקודת השבת של בנך הוא הדבר העיקרי שאני רוצה להראות בפוסט הזה, ברמת הניסוח המלא וההוכחה. על הדרך אני גם אנצל את ההזדמנות ואסביר כמעט כל מושג שבו אני משתמש, כי המשפט הזה הוא הזדמנות טובה עבורנו לחזור על מושגי הבסיס הללו.

אפשר לחשוב על משפט נקודת השבת של בנך בתור "כמעט מקרה פרטי" של משפט מפורסם עוד יותר, <strong>משפט נקודת השבת של ברואר</strong> (למה רק "כמעט"? אדבר על ההבדלים המדויקים בהמשך). גם למשפט של ברואר יש אילוסטרציות נחמדות: נניח שאתם מערבבים כוס משקה, אז מובטח שתהיה נקודה אחת בכוס שאחרי כל הערבובים חזרה למקום שבו התחילה. או אילוסטרציה אחרת: קחו שני דפים מאותו הגודל, שימו אחד על השני, ואז קמטו את הדף שלמעלה כמה שתרצו - עדיין תהיה נקודה אחת לפחות בדף המקומט שנמצאת בדיוק מעל הנקודה שמתאימה לה בדף שמתחת. על המשפט של ברואר אני אגניב כמה מילים בסוף אבל לא אוכיח אותו הפעם, כי זו לא הוכחה כמעט-מיידית כמו של בנך.
<h2>משפט נקודת השבת של בנך</h2>
מה הרעיון במפה? מפה היא עותק מוקטן של פני השטח במציאות (אלא אם אנחנו בסיפור של בורחס). אם תרצו, אנחנו <strong>מכווצים</strong> את המרחב שלנו אל תת-מרחב ספציפי, במובן זה שה<strong>מרחק</strong> בין נקודות הופך לקטן יותר. משפט נקודת השבת של בנך עוסק בדיוק בסיטואציה הזו - העתקה ממרחב לעצמו שהיא <strong>מכווצת</strong>. זה דורש ממני להגדיר מה הכוונה ב"מרחב" ואיך אני מודד "מרחק" וכדומה, ויש לי תשובות שונות ומשונות לזה בהתאם להיכרות שיש לכם עם מתמטיקה. נתחיל עם הדוגמא הפשוטה: המרחב שלנו הוא פשוט <strong>המישור</strong>, {::nomarkdown}\(X=\mathbb{R}^{2}\){:/nomarkdown}, אוסף הנקודות מהצורה {::nomarkdown}\(\left(a,b\right)\){:/nomarkdown} כאשר {::nomarkdown}\(a,b\in\mathbb{R}\){:/nomarkdown}. האופן שבו מודדים מרחק בין שתי נקודות במישור הוא על ידי הנוסחה {::nomarkdown}\(d\left(\left(a_{1},a_{2}\right),\left(b_{1},b_{2}\right)\right)=\sqrt{\left(a_{1}-b_{1}\right)^{2}+\left(a_{2}-b_{2}\right)^{2}}\){:/nomarkdown} (זה בעצם <strong>משפט פיתגורס</strong> בפעולה).

זה נותן לנו מרחב קונקרטי להתייחס אליו, אבל למה לעצור שם? האם המשפט לא יעבוד גם עבור תת-קבוצה של המרחב הזה, נאמר ריבוע היחידה {::nomarkdown}\(X=\left[0,1\right]\times\left[0,1\right]\){:/nomarkdown}? והאם הוא לא יעבוד עבור {::nomarkdown}\(X=\mathbb{R}^{3}\){:/nomarkdown}? ומה אם אנחנו מודדים מרחק בדרך קצת שונה, למשל {::nomarkdown}\(d\left(\left(a_{1},a_{2}\right),\left(b_{1},b_{2}\right)\right)=\left\|a_{1}-b_{1}\right\|+\left\|a_{2}-b_{2}\right\|\){:/nomarkdown}? המשפט ימשיך לעבוד בכל המקרים הללו, ולכן כדי לדבר על כולן בבת אחת אנחנו מדברים על מושג שנקרא <strong>מרחב מטרי</strong>. מרחב מטרי {::nomarkdown}\(\left(X,d\right)\){:/nomarkdown} כולל קבוצה {::nomarkdown}\(X\){:/nomarkdown} ופונקציית מרחק {::nomarkdown}\(d:X^{2}\to\mathbb{R}^{\ge0}\){:/nomarkdown} כך שלכל {::nomarkdown}\(a,b,c\in X\){:/nomarkdown}:
<ol>
 	<li>{::nomarkdown}\(d\left(a,b\right)=0\){:/nomarkdown} אם ורק אם {::nomarkdown}\(a=b\){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(d\left(a,b\right)=d\left(b,a\right)\){:/nomarkdown} (סימטריה)</li>
 	<li>{::nomarkdown}\(d\left(a,b\right)\le d\left(a,c\right)+d\left(c,b\right)\){:/nomarkdown} (אי-שוויון המשולש)</li>
</ol>
ההגדרה הפשוטה הזו מאפשרת דיבור אחיד על כל המקרים שציינתי קודם ואינספור מקרים אחרים, וזה ההקשר שבו נכון לתאר את משפט נקודת השבת של בנך; אבל למי שמתקשים עם הדיבור האבסטרקטי על מרחבים מטריים, אפשר לחשוב כל הזמן על המקרה הקונקרטי {::nomarkdown}\(X=\mathbb{R}^{2}\){:/nomarkdown} ו-{::nomarkdown}\(d\left(\left(a_{1},a_{2}\right),\left(b_{1},b_{2}\right)\right)=\sqrt{\left(a_{1}-b_{1}\right)^{2}+\left(a_{2}-b_{2}\right)^{2}}\){:/nomarkdown} שהזכרתי קודם. עובד באותה מידה.

דרישה אחת מהמרחב כדי שהמשפט יעבוד היא שהוא יהיה <strong>שלם</strong>. מרחב מטרי שלם הוא מרחב שבו כל סדרת קושי מתכנסת, אבל אם זה לא אומר לכם שום דבר כרגע זה לא צריך לעצור אתכם - בהמשך נבין בדיוק מה זו סדרת קושי ולמה היא מעניינת אותנו. {::nomarkdown}\(\mathbb{R}^{2}\){:/nomarkdown} הוא מרחב שלם, כך שהמשפט יהיה תקף לגביו. דוגמא למרחב לא שלם היא {::nomarkdown}\(\mathbb{Q}\){:/nomarkdown} - שם המחסור בנקודות כמו {::nomarkdown}\(\sqrt{2}\){:/nomarkdown} ו-{::nomarkdown}\(\pi\){:/nomarkdown} יוצר בעיה של ממש (אפשר לקבל משהו בסגנון "נקודת השבת <strong>צריכה</strong> להיות {::nomarkdown}\(\sqrt{2}\){:/nomarkdown} אבל היי, רגע, מה הולך פה, לאן היא נעלמה?")

עכשיו צריך להכניס לתמונה פונקציה, {::nomarkdown}\(f:X\to X\){:/nomarkdown}. אם רוצים לקשר את זה לדוגמת המפה שאיתה פתחתי, אפשר לחשוב על פונקציה שפועלת כך: בהינתן נקודה בארץ שהמפה מתארת (הארץ הזו היא {::nomarkdown}\(X\){:/nomarkdown}), הפונקציה מאתרת את הנקודה המתאימה על המפה, הולכת אל הנקודה הזו ומחזירה את הנקודה על הקרקע של הארץ "האמיתית" שנוגעת בנקודה הזו במפה. באופן הזה קיבלנו פונקציה מ-{::nomarkdown}\(X\){:/nomarkdown} אל {::nomarkdown}\(X\){:/nomarkdown} (ולא מ-{::nomarkdown}\(X\){:/nomarkdown} אל "מפה שמתארת את {::nomarkdown}\(X\){:/nomarkdown}").

עכשיו, פונקציה היא <strong>מכווצת</strong> אם היא מקטינה את המרחק בין נקודות, אבל לא סתם ברמה "כלשהי" אלא ברמה שנותנת חסם כפלי כלשהו - "מקטינה פי 2" או "מקטינה פי שבע שמיניות" וכן הלאה. פורמלית צריך להיות קיים קבוע {::nomarkdown}\(0&lt;q&lt;1\){:/nomarkdown} כך שלכל {::nomarkdown}\(a,b\in X\){:/nomarkdown} מתקיים {::nomarkdown}\(d\left(f\left(a\right),f\left(b\right)\right)\le q\cdot d\left(a,b\right)\){:/nomarkdown} (באופן כללי פונקציה שבה המרחק בין פלטים של הפונקציה חסום על ידי קבוע <strong>כלשהו</strong> כפול המרחק בין הקלטים נקראת <strong>ליפשיצית</strong>, וכאשר הקבוע הזה קטן מאחד אז היא נקראת "מכווצת"). ומה היה קורה אם לא היה קבוע כזה אלא "סתם" היה מתקיים {::nomarkdown}\(d\left(f\left(a\right),f\left(b\right)\right)\le d\left(a,b\right)\){:/nomarkdown} לכל {::nomarkdown}\(a,b\in X\){:/nomarkdown}? ובכן, לא רק שההוכחה שתכף אציג לא הייתה עובדת, גם המשפט כלל לא היה נכון.

אבל מה המשפט בעצם? עוד לא ניסחתי אותו! ובכן, אם {::nomarkdown}\(f\){:/nomarkdown} היא פונקציה מכווצת שכזו ממרחב מטרי שלם לעצמו, אז קיימת נקודה <strong>יחידה</strong> {::nomarkdown}\(a^{*}\in X\){:/nomarkdown} כך ש-{::nomarkdown}\(f\left(a^{*}\right)=a^{*}\){:/nomarkdown}. הפתעה! (טוב, אולי העובדה שהנקודה הזו <strong>יחידה</strong> היא מפתיעה) אבל יותר מכך, אפשר תמיד למצוא אותה באופן הבא: ניקח נקודה {::nomarkdown}\(a_{0}\in X\){:/nomarkdown} באופן <strong>שרירותי לחלוטין</strong> (לא משנה מאיפה נתחיל) ונגדיר סדרה {::nomarkdown}\(a_{n+1}=f\left(a_{n}\right)\){:/nomarkdown}, אז מובטח לנו שיתקיים {::nomarkdown}\(\lim_{n\to\infty}a_{n}=a^{*}\){:/nomarkdown} (פורמלית: לכל {::nomarkdown}\(\varepsilon&gt;0\){:/nomarkdown} ממשי קיים {::nomarkdown}\(N\){:/nomarkdown} טבעי כך שאם {::nomarkdown}\(n&gt;N\){:/nomarkdown} אז {::nomarkdown}\(d\left(a_{n},a^{*}\right)&lt;\varepsilon\){:/nomarkdown}). כפי שנראה, אפשר יהיה גם להגיד משהו על <strong>קצב ההתכנסות</strong> של הסדרה הזו אל {::nomarkdown}\(a^{*}\){:/nomarkdown}.

עיקר ההוכחה של המשפט היא חישוב טכני לא נוראי במיוחד של המרחק בין שתי נקודות <strong>כלשהן</strong> בסדרה שכזו. כלומר, נניח ש-{::nomarkdown}\(n&lt;m\){:/nomarkdown} ונחשב חסם עבור {::nomarkdown}\(d\left(a_{n},a_{m}\right)\){:/nomarkdown}. הרעיון פה הוא שעבור שתי נקודות שבאות זו אחר זו בסדרה קל לנו לתת חסם מפורש, ואז אפשר להעריך את המרחק בין {::nomarkdown}\(a_{n}\){:/nomarkdown} ו-{::nomarkdown}\(a_{m}\){:/nomarkdown} על ידי שימוש באי-שוויון המשולש כדי לחסום את המרחק ביניהן על ידי נקודות ביניים שהן כל האיברים מ-{::nomarkdown}\(a_{n}\){:/nomarkdown} עד {::nomarkdown}\(a_{m}\){:/nomarkdown}.

נתחיל עם דוגמאות פשוטות: את המרחק {::nomarkdown}\(d\left(a_{0},a_{1}\right)\){:/nomarkdown} אין לנו איך לחסום; זו "נקודת המוצא" שלנו. ככל ש-{::nomarkdown}\(a_{0}\){:/nomarkdown} יותר קרוב ל-{::nomarkdown}\(a_{1}\){:/nomarkdown} (כלומר, ככל ש-{::nomarkdown}\(a_{0}\){:/nomarkdown} יותר קרוב אל {::nomarkdown}\(f\left(a_{0}\right)\){:/nomarkdown}) כך החסם על ההתכנסות של הסדרה יהיה טוב יותר.

את המרחק {::nomarkdown}\(d\left(a_{1},a_{2}\right)\){:/nomarkdown} לעומת זאת אפשר לחסום: {::nomarkdown}\(a_{1}=f\left(a_{0}\right)\){:/nomarkdown} ואילו {::nomarkdown}\(a_{2}=f\left(a_{1}\right)\){:/nomarkdown} ולכן

{::nomarkdown}\(d\left(a_{1},a_{2}\right)=d\left(f\left(a_{0}\right),f\left(a_{1}\right)\right)\le qd\left(a_{0},a_{1}\right)\){:/nomarkdown}

באופן דומה:

{::nomarkdown}\(d\left(a_{2},a_{3}\right)=d\left(f\left(a_{1}\right),f\left(a_{2}\right)\right)\le qd\left(a_{1},a_{2}\right)\le q^{2}d\left(a_{0},a_{1}\right)\){:/nomarkdown}

וכבר אפשר להמשיך עם זה באינדוקציה ולקבל את הטענה הכללית שנכונה לכל {::nomarkdown}\(k\ge0\){:/nomarkdown}:

{::nomarkdown}\(d\left(a_{k},a_{k+1}\right)\le q^{k}d\left(a_{0},a_{1}\right)\){:/nomarkdown}

חמושים בידע הנוסף הזה אפשר להעריך את {::nomarkdown}\(d\left(a_{n},a_{m}\right)\){:/nomarkdown} גם עבור נקודות לא סמוכות. הרעיון הוא להסתכל על כל סדרת הנקודות {::nomarkdown}\(a_{n},a_{n+1},a_{n+2},\dots,a_{m-1},a_{m}\){:/nomarkdown} (הנחנו ש-{::nomarkdown}\(n&lt;m\){:/nomarkdown}) - מאי-שוויון המשולש אנו יודעים שמתקיים

{::nomarkdown}\(d\left(a_{n},a_{m}\right)\le d\left(a_{n},a_{n+1}\right)+\dots+d\left(a_{m-1},a_{m}\right)\){:/nomarkdown}

אפשר לכתוב את אותו הדבר בקיצור כך:

{::nomarkdown}\(d\left(a_{n},a_{m}\right)\le\sum_{i=0}^{m-n-1}d\left(a_{n+i},a_{n+i+1}\right)\){:/nomarkdown}

וכעת, ממה שמצאנו קודם אנו יודעים ש-{::nomarkdown}\(d\left(a_{n+i},a_{n+i+1}\right)\le q^{n+i}d\left(a_{0},a_{1}\right)\){:/nomarkdown} ולכן נקבל

{::nomarkdown}\(d\left(a_{n},a_{m}\right)\le\sum_{i=0}^{m-n-1}q^{n+i}d\left(a_{0},a_{1}\right)=q^{n}d\left(a_{0},a_{1}\right)\cdot\sum_{i=0}^{m-n-1}q^{i}\){:/nomarkdown}

הסכום שנשאר לנו הוא טור הנדסי רגיל. אני תמיד אוהב להזכיר איך אנחנו יודעים מה הסכום של טור הנדסי: אם אני צריך לחשב את {::nomarkdown}\(1+q+q^{2}+\dots+q^{n}\){:/nomarkdown} אני כופל ב-{::nomarkdown}\(\left(q-1\right)\){:/nomarkdown} ומקבל הרבה איברים שמצטמצמים ובסוף נשאר {::nomarkdown}\(q^{n+1}-1\){:/nomarkdown}. נחלק ב-{::nomarkdown}\(q-1\){:/nomarkdown} שבו כפלתי, ונקבל שסכום הטור הוא {::nomarkdown}\(\frac{q^{n+1}-1}{q-1}\){:/nomarkdown}. לכן במקרה שלנו:

{::nomarkdown}\(\sum_{i=0}^{m-n-1}q^{i}=\frac{q^{m-n}-1}{q-1}\){:/nomarkdown}

אפשר לפשט את זה טיפה עבורנו - {::nomarkdown}\(\sum_{i=0}^{m-n-1}q^{i}&lt;\sum_{i=0}^{\infty}q^{i}=\frac{1}{1-q}\){:/nomarkdown} (תחשבו שאני מציב 0 במקום {::nomarkdown}\(q^{m-n}\){:/nomarkdown}), ולכן נקבל

{::nomarkdown}\(d\left(a_{n},a_{m}\right)\le\frac{d\left(a_{0},a_{1}\right)}{1-q}\cdot q^{n}\){:/nomarkdown}

וזו כבר תוצאה מצויינת. תזכרו ש-{::nomarkdown}\(0&lt;q&lt;1\){:/nomarkdown}, ולכן ככל ש-{::nomarkdown}\(n\){:/nomarkdown} גדול יותר כך {::nomarkdown}\(q^{n}\){:/nomarkdown} קטן יותר. לכן מה שקיבלנו הוא שהמרחק בין {::nomarkdown}\(a_{n}\){:/nomarkdown} לבין <strong>כל</strong> נקודה שבאה אחריה בסדרה שווה למספר הקבוע {::nomarkdown}\(\frac{d\left(a_{0},a_{1}\right)}{1-q}\){:/nomarkdown} כפול משהו ({::nomarkdown}\(q^{n}\){:/nomarkdown}) שהולך וקטן ככל שאנחנו לוקחים {::nomarkdown}\(a_{n}\){:/nomarkdown} גדול יותר. חישוב לא מסובך מראה שלכל {::nomarkdown}\(\varepsilon&gt;0\){:/nomarkdown} אנחנו מסוגלים למצוא {::nomarkdown}\(N\){:/nomarkdown} כך שאם {::nomarkdown}\(n&gt;N\){:/nomarkdown} מתקיים {::nomarkdown}\(\frac{d\left(a_{0},a_{1}\right)}{1-q}\cdot q^{n}&lt;\varepsilon\){:/nomarkdown}. כלומר, לכל {::nomarkdown}\(m&gt;n&gt;N\){:/nomarkdown} יתקיים {::nomarkdown}\(d\left(a_{n},a_{m}\right)&lt;\varepsilon\){:/nomarkdown}. זה מראה שהסדרה {::nomarkdown}\(\left\{ a_{n}\right\} \){:/nomarkdown} היא <strong>סדרת קושי</strong>.

סדרת קושי, אינטואיטיבית, היא סדרה שככל שמתקדמים בה יותר כך המרחק בין כל שני איברים בה (לאו דווקא כאלו שסמוכים זה לזה בסדרה) הולך וקטן. פורמלית זה בדיוק מה שתיארנו: לכל {::nomarkdown}\(\varepsilon\){:/nomarkdown} קיים {::nomarkdown}\(N\){:/nomarkdown} כך שלכל {::nomarkdown}\(m&gt;n&gt;N\){:/nomarkdown} מתקיים {::nomarkdown}\(d\left(a_{n},a_{m}\right)&lt;\varepsilon\){:/nomarkdown}. החשיבות של התכונה הזו של "להיות סדרת קושי" היא בכך שהיא מצביעה על כך שהסדרה <strong>אמורה להתכנס</strong> לגבול קונקרטי; כלומר, "צריך" להיות {::nomarkdown}\(a^{*}\){:/nomarkdown} כך שלכל {::nomarkdown}\(\varepsilon&gt;0\){:/nomarkdown} קיים {::nomarkdown}\(N\){:/nomarkdown} כך שאם {::nomarkdown}\(n&gt;N\){:/nomarkdown} אז {::nomarkdown}\(d\left(a_{n},a^{*}\right)&lt;\varepsilon\){:/nomarkdown}. ה"צריך" הזה לא תמיד מתקיים בפועל; במקרה של {::nomarkdown}\(\mathbb{R}\){:/nomarkdown} הוא מתקיים, אבל במקרה של {::nomarkdown}\(\mathbb{Q}\){:/nomarkdown}, למשל, הוא לאו דווקא מתקיים (תסתכלו על הסדרה {::nomarkdown}\(3,3.1,3.14,3.141,\dots\){:/nomarkdown} ש"אמורה להתכנס אל {::nomarkdown}\(\pi\){:/nomarkdown}" אבל הרי {::nomarkdown}\(\pi\){:/nomarkdown} אינו רציונלי למרות שאברי הסדרה כן). מרחב מטרי שבו כל סדרת קושי היא מתכנסת נקרא <strong>מרחב מטרי שלם</strong>, והנחנו ש-{::nomarkdown}\(X\){:/nomarkdown} הוא מרחב מטרי שלם כחלק מתנאי משפט נקודת השבת של בנך.

לסיכום, הראינו ש-{::nomarkdown}\(\left\{ a_{n}\right\} \){:/nomarkdown} היא סדרת קושי ולכן קיים {::nomarkdown}\(a^{*}\in X\){:/nomarkdown} כך ש-{::nomarkdown}\(a_{n}\to a^{*}\){:/nomarkdown}. אבל מה זה עוזר לנו, בעצם? האם זה מוכיח ש-{::nomarkdown}\(a^{*}\){:/nomarkdown} היא נקודת שבת? ובכן, כן, אבל הנימוק יצריך מאיתנו לראות את היעילות של מושג בסיסי נוסף: <strong>רציפות</strong>.

הנה מה שאני <strong>רוצה</strong> להגיד: אנחנו יודעים ש-{::nomarkdown}\(\lim_{n\to\infty}a_{n}=a^{*}\){:/nomarkdown}. עכשיו, את מהסדרה {::nomarkdown}\(a_{0},a_{1},a_{2},\dots\){:/nomarkdown} אפשר לסלק את האיבר הראשון, ואז לכתוב את הסדרה שנותרה בתור {::nomarkdown}\(f\left(a_{0}\right),f\left(a_{1}\right),\dots\){:/nomarkdown}. כלומר, הסדרות {::nomarkdown}\(\left\{ a_{n}\right\} \){:/nomarkdown} ו-{::nomarkdown}\(\left\{ f\left(a_{n}\right)\right\} \){:/nomarkdown} הן אותה סדרה למעט האיבר הראשון, והאיבר הראשון לא באמת משפיע על גבול הסדרה. לכן גם {::nomarkdown}\(\lim_{n\to\infty}f\left(a_{n}\right)=a^{*}\){:/nomarkdown}.

כעת, הייתי <strong>רוצה</strong> להגיד משהו כזה: {::nomarkdown}\(\lim_{n\to\infty}f\left(a_{n}\right)=f\left(\lim_{n\to\infty}a_{n}\right)\){:/nomarkdown}. אם הייתי יכול לומר את זה, אז הייתי מקבל:

{::nomarkdown}\(a^{*}=\lim_{n\to\infty}f\left(a_{n}\right)=f\left(\lim_{n\to\infty}a_{n}\right)=f\left(a^{*}\right)\){:/nomarkdown}

מה שהיה מוכיח ש-{::nomarkdown}\(a^{*}\){:/nomarkdown} היא אכן נקודת שבת של {::nomarkdown}\(f\){:/nomarkdown}. אז בואו נתמקד שוב במה שאני <strong>רוצה</strong> שיקרה:

{::nomarkdown}\(\lim_{n\to\infty}f\left(a_{n}\right)=f\left(\lim_{n\to\infty}a_{n}\right)\){:/nomarkdown}

במילים: הגבול של סדרת הפלטים של {::nomarkdown}\(f\){:/nomarkdown} על {::nomarkdown}\(a_{n}\){:/nomarkdown} הוא אותו דבר כמו הפלט של {::nomarkdown}\(f\){:/nomarkdown} על הגבול של {::nomarkdown}\(a_{n}\){:/nomarkdown}. הפעולות של "חישוב הגבול של הסדרה" ו"הפעלת {::nomarkdown}\(f\){:/nomarkdown}" הן <strong>קומוטטיביות</strong> - אפשר להחליף את הסדר ביניהן ועדיין לקבל את אותה התוצאה. אם {::nomarkdown}\(f\){:/nomarkdown} היא <strong>פונקציה רציפה</strong> אז הדבר הזה מתקיים. מה זו פונקציה רציפה? בנפנוף ידיים כלשהו - פונקציה שעבור קלטים קרובים מספיק מחזירה פלטים שהם גם כן קרובים.

הנה הגדרה פורמלית: {::nomarkdown}\(f\){:/nomarkdown} רציפה בנקודה {::nomarkdown}\(x_{0}\){:/nomarkdown} אם לכל {::nomarkdown}\(\varepsilon&gt;0\){:/nomarkdown} קיים {::nomarkdown}\(\delta&gt;0\){:/nomarkdown} כך ש-{::nomarkdown}\(d\left(x,x_{0}\right)&lt;\delta\){:/nomarkdown} ("קלטים קרובים") גורר {::nomarkdown}\(d\left(f\left(x\right),f\left(x_{0}\right)\right)&lt;\varepsilon\){:/nomarkdown} ("פלטים קרובים"). שימו לב שדיברתי פה על רציפות בנקודה <strong>מסויימת</strong>; אומרים על {::nomarkdown}\(f\){:/nomarkdown} שהיא רציפה בכל המרחב {::nomarkdown}\(X\){:/nomarkdown} אם היא רציפה לכל {::nomarkdown}\(x_{0}\in X\){:/nomarkdown}. בהגדרה הזו, ה-{::nomarkdown}\(\delta\){:/nomarkdown} שמוצאים בתגובה ל-{::nomarkdown}\(\varepsilon\){:/nomarkdown} יכול להיות תלוי גם בנקודה {::nomarkdown}\(x_{0}\){:/nomarkdown}; יש הגדרה חזקה יותר של רציפות שנקראת <strong>רציפות במידה שווה</strong> שבה עבור {::nomarkdown}\(\varepsilon\){:/nomarkdown} אפשר למצוא {::nomarkdown}\(\delta\){:/nomarkdown} ש"עובד לכל הנקודות ב-{::nomarkdown}\(X\){:/nomarkdown} בו זמנית"; לא אצטרך את ההגדרה הזו כאן.

רציפות היא תכונה חשובה עם שלל משמעויות שנובעות ממנה, אבל כאן אני אסתפק בזו שרלוונטית לנו: {::nomarkdown}\(\lim_{n\to\infty}f\left(a_{n}\right)=f\left(\lim_{n\to\infty}a_{n}\right)\){:/nomarkdown}. כזכור, אנחנו מסמנים {::nomarkdown}\(a^{*}=\lim_{n\to\infty}a_{n}\){:/nomarkdown}, כך שמה שאשתמש בו הוא הרציפות של {::nomarkdown}\(f\){:/nomarkdown} בנקודה {::nomarkdown}\(a^{*}\){:/nomarkdown}. כדי להוכיח {::nomarkdown}\(f\left(a^{*}\right)=\lim_{n\to\infty}f\left(a_{n}\right)\){:/nomarkdown} אני לוקח {::nomarkdown}\(\varepsilon&gt;0\){:/nomarkdown} וצריך למצוא {::nomarkdown}\(N\){:/nomarkdown} כך שלכל {::nomarkdown}\(n&gt;N\){:/nomarkdown} מתקיים {::nomarkdown}\(d\left(f\left(a^{*}\right),f\left(a_{n}\right)\right)&lt;\varepsilon\){:/nomarkdown}. ובכן, מכיוון ש-{::nomarkdown}\(f\){:/nomarkdown} רציפה, קיים {::nomarkdown}\(\delta&gt;0\){:/nomarkdown} כך שאם {::nomarkdown}\(d\left(a^{*},a_{n}\right)&lt;\delta\){:/nomarkdown} אז {::nomarkdown}\(d\left(f\left(a^{*}\right),f\left(a_{n}\right)\right)&lt;\varepsilon\){:/nomarkdown}. כעת, מכיוון ש-{::nomarkdown}\(a^{*}=\lim_{n\to\infty}a_{n}\){:/nomarkdown} אז קיים {::nomarkdown}\(N\){:/nomarkdown} כך שאם {::nomarkdown}\(n&gt;N\){:/nomarkdown} אז מתקיים {::nomarkdown}\(d\left(a^{*},a_{n}\right)&lt;\delta\){:/nomarkdown} - ומכאן ש-{::nomarkdown}\(d\left(f\left(a^{*}\right),f\left(a_{n}\right)\right)&lt;\varepsilon\){:/nomarkdown}, כמו שרצינו.

לסיכום: הראינו שאם {::nomarkdown}\(f\){:/nomarkdown} רציפה אז {::nomarkdown}\(a^{*}\){:/nomarkdown} היא אכן נקודת שבת. אבל למה {::nomarkdown}\(f\){:/nomarkdown} רציפה? זו תכונה שמשותפת לכל פונקציה ליפשיצית: אם {::nomarkdown}\(d\left(f\left(a\right),f\left(b\right)\right)\le q\cdot d\left(a,b\right)\){:/nomarkdown} עבור {::nomarkdown}\(0&lt;q\){:/nomarkdown} אז בהינתן {::nomarkdown}\(\varepsilon&gt;0\){:/nomarkdown} נבחר {::nomarkdown}\(\delta=\frac{\varepsilon}{q}\){:/nomarkdown} ואז עבור {::nomarkdown}\(a,b\){:/nomarkdown} כך ש-{::nomarkdown}\(d\left(a,b\right)&lt;\delta\){:/nomarkdown} יתקיים

{::nomarkdown}\(d\left(f\left(a\right),f\left(b\right)\right)\le q\cdot d\left(a,b\right)&lt;q\cdot\frac{\varepsilon}{q}=\varepsilon\){:/nomarkdown}

זה מסיים את שלב ה<strong>קיום</strong> של משפט נקודת השבת של בנך. הראינו שאם לוקחים נקודה שרירותית כלשהי ומפעילים את {::nomarkdown}\(f\){:/nomarkdown} עליה שוב ושוב, מתכנסים אל נקודת שבת. למה לא ייתכן שנתכנס אל שתי נקודות שבת שונות אם נתחיל במקומות שונים? הטיעון כאן הוא כמעט טריוויאלי: כי אם {::nomarkdown}\(f\){:/nomarkdown} לא משנה שתי נקודות, אז המרחק בין התמונות שלהן לא יהיה קטן מהמרחק ביניהן, בסתירה לכך ש-{::nomarkdown}\(f\){:/nomarkdown} מכווצת. פורמלית, אם {::nomarkdown}\(a^{*},b^{*}\){:/nomarkdown} הן שתי נקודות שבת אז

{::nomarkdown}\(d\left(a^{*},b^{*}\right)=d\left(f\left(a^{*}\right),f\left(b^{*}\right)\right)\le qd\left(a^{*},b^{*}\right)\le d\left(a^{*},b^{*}\right)\){:/nomarkdown}

בפרט, {::nomarkdown}\(qd\left(a^{*},b^{*}\right)=d\left(a^{*},b^{*}\right)\){:/nomarkdown} ומכיוון ש-{::nomarkdown}\(0&lt;q&lt;1\){:/nomarkdown} זה קורה רק אם {::nomarkdown}\(d\left(a^{*},b^{*}\right)=0\){:/nomarkdown} כלומר אם {::nomarkdown}\(a^{*}=b^{*}\){:/nomarkdown}. זה מסיים את משפט נקודת השבת של בנך.
<h2>משפט נקודת השבת של ברואר</h2>
משפט נקודת השבת של ברואר אומר שכל פונקציה רציפה מכדור היחידה ה-{::nomarkdown}\(n\){:/nomarkdown} ממדי לעצמו היא בעלת נקודת שבת. ההוכחה שלו היא מסובכת יחסית ולא אציג אותה בפוסט הזה, אבל בואו ננסה להבין במה הוא דומה ושונה למשפט נקודת השבת של בנך.

ראשית, המשפט של ברואר מפורסם יותר ושימושי יותר במתמטיקה, ולכן בכלל הזכרתי אותו למרות שמטרת הפוסט הייתה משפט נקודת השבת של בנך; אני לא חושב שנכון לדבר על משפטי נקודות שבת בלי להזכיר את ברואר בכלל.

שנית, ברואר מדבר על נקודת שבת בפונקציה רציפה <strong>כלשהי</strong>. אצל בנך הדרישה הרבה יותר קיצונית: לא רק שהפונקציה צריכה להיות רציפה, היא צריכה להיות ליפשיצית, עם קבוע ליפשיץ קטן מ-1 ("מכווצת"). במובן זה ברואר מכסה מחלקה רחבה בהרבה של פונקציות.

עוד הבדל, הפעם לטובת בנך, הוא שמשפט בנך תקף במרחב מטרי שלם כלשהו, לא רק במרחב מטרי שחי ב-{::nomarkdown}\(\mathbb{R}^{n}\){:/nomarkdown}. ברואר מתעסק בתנאים מגבילים יותר. אפשר טיפה למתוח את מה שברואר אומר - אם למרחב טופולוגי כלשהו יש את התכונה שלכל פונקציה רציפה מעליו יש נקודת שבת, אז כך גם לכל תמונה הומיאומורפית שלו (מרחב אחר כך שיש בינם התאמה חח"ע ועל שמשמרת את הטופולוגיה של המרחב). זה אומר שאפשר להשתמש בברואר לכל קבוצה קומפקטית קמורה ב-{::nomarkdown}\(\mathbb{R}^{n}\){:/nomarkdown}, אבל עדיין אנחנו "חיים" ב-{::nomarkdown}\(\mathbb{R}^{n}\){:/nomarkdown}; אם תרצו, ברואר הוא אחד ממשפטי האפיון הבסיסיים של "מה זה {::nomarkdown}\(\mathbb{R}^{n}\){:/nomarkdown} בכלל ומה מייחד אותו כמרחב".

ועוד הבדל לטובת בנך הוא שמשפט ברואר הוא לא קונסטרוקטיבי - הוא לא נותן לנו דרך למצוא את נקודת השבת, רק מוכיח שהיא קיימת. זאת בשונה ממשפט בנך, שמראה דרך מפורשת "לבנות" אותה בתור גבול של סדרה. למעשה, העובדה שהמשפט המפורסם שלו עצמו לא קונסטרוקטיבי הייתה אחת מהדברים שגרמו לברואר לאמץ את הגישה ה<strong>אינטואיציוניסטית</strong> לפילוסופיה של המתמטיקה, שבה הוכחות לא קונסטרוקטיביות כאלו אינן מתקבלות בברכה (וכמובן, ראויה לפוסט משל עצמה שמי יודע אם אי פעם אכתוב).
