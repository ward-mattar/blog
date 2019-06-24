---
id: 3159
title: "חישוב קוונטי - דוגמה ראשונה"
date: 2014-07-25 08:14:31
layout: post
categories: 
  - פיזיקה
  - תורת הסיבוכיות
tags: 
  - חישוב קוונטי
---
אני רוצה להתחיל עם הדגמה לאופן שבו חישוב קוונטי מסוגל לסייע בתקשורת. זו דוגמה טובה כי מצד אחד קורה בה "קסם" של ממש: אנחנו מצליחים לעשות משהו שמבחינה "קלאסית" הוא פשוט בלתי אפשרי. מצד שני, אנחנו גם רואים בדיוק עד כמה המשהו הזה הוא מוגבל ולא מתאים לרושם שעשוי להיווצר מתיאורי מדע פופולרי. ואנחנו מקבלים הזדמנות לראות את המתמטיקה של הפוסט הקודם בפעולה.

מה שנסתכל עליו הוא מעין משחק די מוזר שבו משתתפים שני שחקנים: אליס ובוב. אליס ובוב נפגשים, מדברים, מחליטים על אסטרטגיה, מחליפים ביניהם חפצים וכל מה שהם רק רוצים, ואז עולים על חלליות ונוסעים לשני קצוות היקום (נאמר, מרחק של שנת אור ביניהם). עכשיו, מנהל המשחק מגריל שני ביטים {::nomarkdown}\( x,y\){:/nomarkdown} באקראי. לאליס הוא נותן את {::nomarkdown}\( x\){:/nomarkdown} ולבוב הוא נותן את {::nomarkdown}\( y\){:/nomarkdown} בו זמנית (אני אתחמק כאן מהשאלה מה זה "בו זמנית" בהקשר הזה). לשניהם יש שעה לעשות דברים, ולאחר מכן אליס שולחת למנהל המשחק ביט {::nomarkdown}\( a\){:/nomarkdown} ובוב שולח למנהל המשחק ביט {::nomarkdown}\( b\){:/nomarkdown}. המטרה? שיתקיים {::nomarkdown}\( a\oplus b=x\wedge y\){:/nomarkdown} (כאשר {::nomarkdown}\( a\oplus b\){:/nomarkdown} הוא חיבור מודולו 2 ובעברית יפה XOR, כלומר הוא 0 אם {::nomarkdown}\( a=b\){:/nomarkdown} ו-{::nomarkdown}\( 1\){:/nomarkdown} אם {::nomarkdown}\( a\ne b\){:/nomarkdown}, ואילו {::nomarkdown}\( x\wedge y\){:/nomarkdown} הוא AND, כלומר שווה ל-0 אלא אם {::nomarkdown}\( x=y=1\){:/nomarkdown}, ואז הוא שווה 1). במילים אחרות, המטרה היא שאליס ובוב יגידו את אותו הביט, אלא אם {::nomarkdown}\( x=y=1\){:/nomarkdown} ואז דווקא רוצים שיענו תשובות הפוכות.

המשחק הוא בבירור הסתברותי. השאלה היא רק מה הסתברות ההצלחה של אליס ובוב במשחק הזה. כל עוד אנחנו נמצאים בפיזיקה קלאסית (פלוס תורת היחסות הפרטית), המרחק שבין אליס ובוב הוא גדול כל כך עד שמסגרת השעה שיש להם שום מידע לא יכול לעבור מאליס אל בוב וההפך, ולכן הם יכולים לעבוד רק על בסיס אסטרטגיה שהם הסכימו עליה מראש. זה לא מסובך (אבל לא אעשה את זה כרגע) להוכיח שהאסטרטגיה הטובה ביותר נותנת הסתברות הצלחה של {::nomarkdown}\( \frac{3}{4}\){:/nomarkdown} והיא מאוד פשוטה: גם אליס וגם בוב יענו תמיד {::nomarkdown}\( 0\){:/nomarkdown} (ולכן הסיטואציה היחידה שבה הם טועים היא זו שבה {::nomarkdown}\( x=y=1\){:/nomarkdown}, מה שקורה בהסתברות {::nomarkdown}\( \frac{1}{4}\){:/nomarkdown}).

האם תורת הקוונטים יכולה לשפר את סיכויי ההצלחה של אליס ובוב? ובכן, כן.

ארחיב על הרעיון הכללי בהמשך, אבל בינתיים רק אציין את העובדות הבאות: ראשית, מערכת קוונטית לא חייבת להיות כולה באותו המקום. אם יש לנו מערכת של שני קיוביטים, אין מניעה עקרונית שאחד הקיוביטים יהיה עם אליס והשני יהיה עם בוב, למרות המרחק הפיזי הגדול בין אליס ובוב. שנית, מדידה של המערכת משפיעה על המערכת "בבת אחת" עבור כל מי שמחזיק בחלק מהמערכת; דהיינו, אם אליס מודדת את הביט שלה, המערכת כולה מושפעת מייד וגם בוב "ירגיש" את ההשפעה הזו, עד כמה שהוא יכול להרגיש אותה בהתחשב בכך שאין לו את הביט שאליס מדדה.

אז מה שקורה הוא הדבר הבא: ראשית, כשאליס ובוב נפגשים כדי לקבוע אסטרטגיה ולהחליף חפצים, הם משתפים ביניהם מערכת קוונטית של שני קיוביטים שנמצאת במצב הבא: {::nomarkdown}\( \left\|00\right\rangle +\left\|11\right\rangle \){:/nomarkdown}. אני מזכיר שהסימון הזה הוא דרך מקוצרת לכתוב {::nomarkdown}\(  \frac{\left\|00\right\rangle +\left\|11\right\rangle }{\sqrt{2}}\){:/nomarkdown} שהוא בתורו דרך מקוצרת לכתוב את הצירוף הלינארי הכללי {::nomarkdown}\( \frac{1}{\sqrt{2}}\cdot\left\|00\right\rangle +0\cdot\left\|10\right\rangle +0\cdot\left\|01\right\rangle +\frac{1}{\sqrt{2}}\cdot\left\|11\right\rangle \){:/nomarkdown} שהוא בתורו דרך מקוצרת לכתוב {::nomarkdown}\( \frac{1}{\sqrt{2}}\cdot\left\|0\right\rangle \otimes\left\|0\right\rangle +0\cdot\left\|1\right\rangle \otimes\left\|0\right\rangle +0\cdot\left\|0\right\rangle \otimes\left\|1\right\rangle +\frac{1}{\sqrt{2}}\cdot\left\|1\right\rangle \otimes\left\|1\right\rangle \){:/nomarkdown}. נראה לי שהכתיב של {::nomarkdown}\( \left\|00\right\rangle +\left\|11\right\rangle \){:/nomarkdown} עדיף. יש מישהו בקהל שרוצה להעיר עוד הערות על ענייני סימון?

המצב הקוונטי {::nomarkdown}\( \left\|00\right\rangle +\left\|11\right\rangle \){:/nomarkdown} הוא מעניין מכיוון שהוא מצביע על "תיאום" בין שני הקיוביטים שמעורבים בו. אם נמדוד את אחד מהביטים ונגרום לו לקרוס, זה יגרום גם לביט השני לקרוס לאותו ערך שנמדד כמו של הביט הראשון. זה יוצר מעין <strong>תיאום בו זמני</strong> בין אליס ובוב, אפילו אם הם נמצאים במרחק גדול זו מזה. על ההשלכות הפילוסופיות-פיזיקליות של זה אדבר בהמשך, בינתיים אני רוצה להסביר איך זה עוזר לנו במשחק.

האינטואיציה הראשונית היא שאליס תוכל להעביר לבוב את המידע על הביט {::nomarkdown}\( x\){:/nomarkdown} שקיבלה. איך? אם הביט הוא 0 היא תפעיל טרנספורמציה על המצב הקוונטי שלה שתהפוך אותו ל-{::nomarkdown}\( \left\|00\right\rangle \){:/nomarkdown}, ואחרת היא תפעיל עליו טרנספורמציה שתהפוך אותו ל-{::nomarkdown}\( \left\|11\right\rangle \){:/nomarkdown}. בוב ימדוד את המצב שלו, יקבל תשובה בודאות של 100 אחוז, ויענה בהתאם. זה רעיון טוב, אבל הוא מתעלם מכך שלאליס אין ביד את כל המערכת הקוונטית; יש לה רק את הקיוביט שלה, ולכן היא מסוגלת לבצע רק עליו פעולות.

עכשיו אני הולך להתחיל להיות טכני, ולכן לפני כן אני אגלה לכם מה בדיוק עושים, כי זה באמת פשוט: אליס ובוב בודקים את הביטים שקיבלו. מי שקיבל 0 לא עושה כלום. מי שקיבל 1 מפעיל על הקיוביט שלו טרנספורמציה מסויימת שאתאר בהמשך (לכל אחד מהם יש טרנספורמציה אחרת). אחר כך הם מודדים את הקיוביטים שלהם ועונים לפי תוצאת המדידה. זה הכל; העיקר הוא כמובן בכך שהטרנספורמציה שהם ביצעו על הקיוביטים שלהם משפיעה איכשהו על תוצאת המדידה. כדי להבין איך נצטרך להיכנס לפרטים. אעיר מראש שפרט אחד שאני <strong>לא</strong> הולך להיכנס אליו בכלל הוא האופן שבו סדר הפעולות משפיע על החישוב - הוא לא, אבל כדי לראות את זה הפוסט יצטרך להתנפח עם עוד חישובים שמגיעים לאותה התוצאה. אם זה מפריע לכם אתם יכולים לבצע את הבדיקה בעצמכם.

בואו נתאר שניה איך מבצעים פעולות על מערכת קוונטית. נתחיל עם מערכת של קיוביט בודד, עם מצבי בסיס {::nomarkdown}\( \left\|0\right\rangle \){:/nomarkdown} ו-{::nomarkdown}\( \left\|1\right\rangle \){:/nomarkdown}. כל פעולה (שאינה מדידה) שניתן לבצע על המערכת ניתנת לתיאור על ידי מטריצה {::nomarkdown}\( 2\times2\){:/nomarkdown} {::nomarkdown}\( A\){:/nomarkdown} שהיא <strong>אוניטרית</strong>, כלומר {::nomarkdown}\( AA^{*}=I\){:/nomarkdown} (והמשמעות: {::nomarkdown}\( A\){:/nomarkdown} משמרת נורמה של וקטורים שהיא פועלת עליהם). דוגמה קלאסית לטרנספורמציה אוניטרית על מרחב ממימד 2 היא <strong>סיבוב</strong>. סיבוב בזווית של {::nomarkdown}\( \theta \){:/nomarkdown} מעלות מתואר על ידי המטריצה {::nomarkdown}\( A=\left[\begin{array}{cc}\cos\theta &amp; -\sin\theta\\\sin\theta &amp; \cos\theta\end{array}\right]\){:/nomarkdown}. דרך אחרת, שקולה, לתאר את {::nomarkdown}\( A\){:/nomarkdown} היא לתאר את האופן שבו היא פועלת על מצבי הבסיס - לאן היא שולחת אותם:

{::nomarkdown}\( \left\|0\right\rangle \mapsto\cos\theta\left\|0\right\rangle +\sin\theta\left\|1\right\rangle \){:/nomarkdown}

{::nomarkdown}\( \left\|1\right\rangle \mapsto\cos\theta\left\|1\right\rangle -\sin\theta\left\|0\right\rangle \){:/nomarkdown}

אם, למשל, היינו מפעילים את הטרנספורמציה הזו עם זווית של {::nomarkdown}\( \theta=-\frac{\pi}{4}\){:/nomarkdown} על המצב הקוונטי, היינו מקבלים את הדבר הבא (זכרו ש-{::nomarkdown}\( \cos\theta=\frac{1}{\sqrt{2}}\){:/nomarkdown} ו-{::nomarkdown}\( \sin\theta=-\frac{1}{\sqrt{2}}\){:/nomarkdown} במקרה זה):

{::nomarkdown}\( \frac{\left\|0\right\rangle +\left\|1\right\rangle }{\sqrt{2}}\mapsto\frac{\left(\left\|0\right\rangle -\left\|1\right\rangle \right)+\left(\left\|0\right\rangle +\left\|1\right\rangle \right)}{2}=\left\|0\right\rangle \){:/nomarkdown}

כלומר, הטרנספורמציה הזו אכן מסוגלת לקחת מצב "מעורבב" של {::nomarkdown}\( \left\|0\right\rangle +\left\|1\right\rangle \){:/nomarkdown} ולהעביר אותו למצב "טהור" (בדומה גם ל-{::nomarkdown}\( \left\|1\right\rangle \){:/nomarkdown} אפשר להגיע עם טרנספורמציה אחרת). אבל זה, כאמור, במערכת של קיוביט אחד. במערכת של שני הקיוביטים שלנו אם אליס תפעיל סיבוב ב-{::nomarkdown}\( \theta\){:/nomarkdown} מעלות על הקיוביט שלה, הפעולה ה"כללית" היא בעצם שילוב של שתי פעולות: סיבוב של הקיוביט של אליס, והשארה ללא שינוי של הקיוביט של בוב, מה שמתואר על ידי המטריצה {::nomarkdown}\( I\){:/nomarkdown}. שתי אלו הן מטריצות {::nomarkdown}\( 2\times2\){:/nomarkdown} - איך מקבלים מהן את המטריצה {::nomarkdown}\( 4\times4\){:/nomarkdown} שמתארת את הפעולה של אליס על המרחב של שני הקיוביטים?

התשובה פשוטה: מכפלת קרונקר של המטריצות. מכפלת קרונקר, כזכור, פירושו לקחת את אחת המטריצות ולדחוף עותק שלה לתוך כל כניסה במטריצה השניה, תוך שהמטריצה מוכפלת בסקלר שהוא הערך של הכניסה של המטריצה השניה. במקרה שלנו אנחנו לוקחים את המטריצה {::nomarkdown}\( \left[\begin{array}{cc}\cos\theta &amp; -\sin\theta\\\sin\theta &amp; \cos\theta\end{array}\right]\){:/nomarkdown} ודוחפים אותה לתוך המטריצה {::nomarkdown}\( \left[\begin{array}{cc}1 &amp; 0\\0 &amp; 1\end{array}\right]\){:/nomarkdown}. נקבל את המטריצה

{::nomarkdown}\( \left[\begin{array}{cccc}\cos\theta &amp; -\sin\theta &amp; 0 &amp; 0\\\sin\theta &amp; \cos\theta &amp; 0 &amp; 0\\0 &amp; 0 &amp; \cos\theta &amp; -\sin\theta\\0 &amp; 0 &amp; \sin\theta &amp; \cos\theta\end{array}\right]\){:/nomarkdown}

המטריצה הזו מבוססת על הנחה כלשהי שלי על הסדר של אברי הבסיס במכפלה הטנזורית - ספציפית, שהוא זה: {::nomarkdown}\( \left\|00\right\rangle ,\left\|10\right\rangle ,\left\|01\right\rangle ,\left\|11\right\rangle \){:/nomarkdown}. כלומר, שאנחנו כל פעם מתקדמים קודם כל על פי הרכיב הראשון ואז הרכיב השני.

אם אני אנסה לכתוב את הפעולה הזו על פי מה שהיא מעוללת לוקטורים, אני אקבל את זה:

{::nomarkdown}\( \left\|00\right\rangle \mapsto\cos\theta\left\|00\right\rangle +\sin\theta\left\|10\right\rangle \){:/nomarkdown}

{::nomarkdown}\( \left\|11\right\rangle \mapsto\cos\theta\left\|11\right\rangle -\sin\theta\left\|01\right\rangle \){:/nomarkdown}

{::nomarkdown}\( \left\|10\right\rangle \mapsto\cos\theta\left\|10\right\rangle -\sin\theta\left\|00\right\rangle \){:/nomarkdown}

{::nomarkdown}\( \left\|01\right\rangle \mapsto\cos\theta\left\|01\right\rangle +\sin\theta\left\|11\right\rangle \){:/nomarkdown}

אז אם אליס תפעיל סיבוב בזווית {::nomarkdown}\( \theta\){:/nomarkdown} על המערכת במצב {::nomarkdown}\( \left\|00\right\rangle +\left\|11\right\rangle \){:/nomarkdown} היא תעביר אותה למצב {::nomarkdown}\( \cos\theta\left\|00\right\rangle +\sin\theta\left\|10\right\rangle -\sin\theta\left\|01\right\rangle +\cos\theta\left\|11\right\rangle \){:/nomarkdown}.

הבנו איך נראות טרנספורמציות אוניטריות שמופעלת על קיוביט בודד ברמת ההשפעה שלהן על כל המערכת; עכשיו בואו נראה מה קורה עם מדידה של קיוביט בודד ואיך היא משפיעה על כל המערכת. המדידה שלנו תהיה ביחס לבסיס הסטנדרטי, כלומר הטלה לתת-המרחב שנפרש על ידי {::nomarkdown}\( \left\|0\right\rangle \){:/nomarkdown} או לתת-המרחב שנפרש על ידי {::nomarkdown}\( \left\|1\right\rangle \){:/nomarkdown}. את ההטלה הראשונה אפשר לתאר על ידי הטרנספורמציה

{::nomarkdown}\( \left\|0\right\rangle \mapsto1\cdot\left\|0\right\rangle +0\cdot\left\|1\right\rangle \){:/nomarkdown}

{::nomarkdown}\( \left\|1\right\rangle \mapsto0\cdot\left\|0\right\rangle +0\cdot\left\|1\right\rangle \){:/nomarkdown}

שהמטריצה שלה היא {::nomarkdown}\( \left[\begin{array}{cc}1 &amp; 0\\0 &amp; 0\end{array}\right]\){:/nomarkdown} (שימו לב - לא מטריצה אוניטרית!). אחרי מכפלה טנזורית עם {::nomarkdown}\( I\){:/nomarkdown} נקבל את המטריצה

{::nomarkdown}\( \left[\begin{array}{cccc}1 &amp; 0 &amp; 0 &amp; 0\\0 &amp; 0 &amp; 0 &amp; 0\\0 &amp; 0 &amp; 1 &amp; 0\\0 &amp; 0 &amp; 0 &amp; 0\end{array}\right]\){:/nomarkdown}

שמתאימה לטרנספורמציה

{::nomarkdown}\( \left\|00\right\rangle \mapsto\left\|00\right\rangle \){:/nomarkdown}

{::nomarkdown}\( \left\|11\right\rangle \mapsto0\){:/nomarkdown}

{::nomarkdown}\( \left\|10\right\rangle \mapsto0\){:/nomarkdown}

{::nomarkdown}\( \left\|01\right\rangle \mapsto\left\|01\right\rangle \){:/nomarkdown}

שאפשר לסמן יותר בקלות בתור {::nomarkdown}\( \left\|00\right\rangle \left\langle 00\right\|+\left\|01\right\rangle \left\langle 01\right\|\){:/nomarkdown}.

כלומר (וזה היה כמובן צפוי לגמרי אבל טוב היה לראות את זה בעיניים) קיבלנו את ההטלה לתת-המרחב שנפרש על ידי {::nomarkdown}\( \left\|00\right\rangle \){:/nomarkdown} ו-{::nomarkdown}\( \left\|01\right\rangle \){:/nomarkdown}, כלומר המצבים שבהם הביט שמדדנו הוא 0. אני מניח שאתם יכולים לנחש איך נראה אופרטור המדידה שהוא הטלה לתת-המרחב שנפרש על ידי {::nomarkdown}\( \left\|1\right\rangle \){:/nomarkdown} כשמרחיבים אותו למערכת של שני הקיוביטים.

עכשיו בואו נעבור לאקשן. ראשית, מה האלגוריתם? אליס ובוב מקבלים ביטים {::nomarkdown}\( x,y\){:/nomarkdown} כקלט. אם אליס קיבלה {::nomarkdown}\( x=0\){:/nomarkdown} היא לא עושה כלום; אם היא קיבלה {::nomarkdown}\( 1\){:/nomarkdown} היא מפעילה על הקיוביט שלה טרנספורמציית <strong>סיבוב</strong> בזווית {::nomarkdown}\( \theta=\frac{\pi}{8}\){:/nomarkdown}. ומה בוב עושה? אם {::nomarkdown}\( y=0\){:/nomarkdown}, כלום; אם {::nomarkdown}\( y=1\){:/nomarkdown}, סיבוב בזווית {::nomarkdown}\( \theta=-\frac{\pi}{8}\){:/nomarkdown} (שימו לב למינוס, הוא חשוב!). אחר כך שניהם מודדים את הקיוביט שלהם ועונים כמו תוצאת המדידה.

כעת, מה המדידות של אליס ובוב יכולות להחזיר אם הביטים של שניהם היו 0 ולכן הם לא נגעו במערכת? כמובן שהאינטואיציה היא ששניהם יענו אותו דבר, כי לא משנה לאיזה ערך המערכת קורסת, שני הקיוביטים יהיו מתואמים.

הבה ונוכיח את האינטואיציה הזו. נאמר שאליס מודדת ראשונה את הקיוביט שלה. המערכת כרגע במצב {::nomarkdown}\( \left\|00\right\rangle +\left\|11\right\rangle \){:/nomarkdown}, אבל זה סימון מקוצר שמשמיט את קבוע הנורמליזציה של הקיוביטים ומכיוון שאנחנו הולכים לבצע מדידה עדיף שלא נשכח את הקבוע הזה. אז נסמן את מצב המערכת בתור {::nomarkdown}\( \frac{\left\|00\right\rangle +\left\|11\right\rangle }{\sqrt{2}}\){:/nomarkdown}. או שנקרוס בהסתברות {::nomarkdown}\( \left\|\left(\left\|00\right\rangle \left\langle 00\right\|+\left\|01\right\rangle \left\langle 01\right\|\right)\frac{\left\|00\right\rangle +\left\|11\right\rangle }{\sqrt{2}}\right\|^{2}=\left\|\frac{\left\|00\right\rangle }{\sqrt{2}}\right\|^{2}=\frac{1}{2}\){:/nomarkdown} למצב {::nomarkdown}\( \left\|00\right\rangle \){:/nomarkdown} או שנקרוס בהסתברות {::nomarkdown}\( \frac{1}{2}\){:/nomarkdown} למצב {::nomarkdown}\( \left\|11\right\rangle \){:/nomarkdown}.

נניח שקרסנו ל-{::nomarkdown}\( \left\|00\right\rangle \){:/nomarkdown}, מה יקרה עם בוב? ובכן, אתם יכולים לעשות את החישוב בצד אבל זה מיותר; די ברור שבוב יקבל 0. לכן אליס ובוב יענו שניהם 0 כאן וינצחו (זכרו - הם צריכים לענות שונה רק אם שניהם קיבלו את הקלט 1, וכאן שניהם קיבלו את הקלט 0). באופן דומה גם קריסה ל-{::nomarkdown}\( \left\|11\right\rangle \){:/nomarkdown} תוביל לכך שגם אליס וגם בוב יענו 1.

אז במקרה הקל טיפלנו. כעת, מה קורה אם אליס מקבלת 1 ובוב לא? ובכן, ראינו כבר שאליס תבצע טרנספורמציית סיבוב שתעביר את המערכת למצב {::nomarkdown}\( \cos\frac{\pi}{8}\left\|00\right\rangle +\sin\frac{\pi}{8}\left\|10\right\rangle -\sin\frac{\pi}{8}\left\|01\right\rangle +\cos\frac{\pi}{8}\left\|11\right\rangle \){:/nomarkdown}. עכשיו, בואו נמדוד! ראשית, הטלה על {::nomarkdown}\( \left\|0\right\rangle \){:/nomarkdown} תצליח בהסתברות:

{::nomarkdown}\( \left\|\frac{1}{\sqrt{2}}\left(\cos\frac{\pi}{8}\left\|00\right\rangle +\sin\frac{\pi}{8}\left\|10\right\rangle -\sin\frac{\pi}{8}\left\|01\right\rangle +\cos\frac{\pi}{8}\left\|11\right\rangle \right)\left(\left\|00\right\rangle \left\langle 00\right\|+\left\|01\right\rangle \left\langle 01\right\|\right)\right\|^{2}=\){:/nomarkdown}

{::nomarkdown}\( \left\|\frac{1}{\sqrt{2}}\left(\cos\frac{\pi}{8}\left\|00\right\rangle -\sin\frac{\pi}{8}\left\|01\right\rangle \right)\right\|^{2}=\frac{1}{2}\left(\cos^{2}\frac{\pi}{8}+\sin^{2}\frac{\pi}{8}\right)=\frac{1}{2}\){:/nomarkdown}

רגע, מה? שוב קיבלנו {::nomarkdown}\( \frac{1}{2}\){:/nomarkdown}? אחרי כל המהומה שעשינו? איך זה ייתכן? איך זה עזר לנו? ובכן, בואו נראה מה קורה עכשיו. בהסתברות {::nomarkdown}\( \frac{1}{2}\){:/nomarkdown} אנחנו קורסים, אבל לאיזה מצב? לא למצב {::nomarkdown}\(  \left\|00\right\rangle \){:/nomarkdown} אלא למצב {::nomarkdown}\( \cos\frac{\pi}{8}\left\|00\right\rangle -\sin\frac{\pi}{8}\left\|01\right\rangle \){:/nomarkdown} - מצב שמנקודת מבטו של בוב, שרואה רק את הקיוביט השני, נראה כמו {::nomarkdown}\( \cos\frac{\pi}{8}\left\|0\right\rangle -\sin\frac{\pi}{8}\left\|1\right\rangle \){:/nomarkdown} - במילים אחרות, זה נראה לו כאילו מישהו סובב את הקיוביט שלו ב-{::nomarkdown}\( -\frac{\pi}{8}\){:/nomarkdown}. שימו לב מה קרה: אליס סובבה את הקיוביט <strong>שלה</strong>, אבל בגלל התיאום בין הקיוביטים, אחרי המדידה מה שיש לבוב ביד היא מערכת שבה הקיוביט <strong>שלו</strong> מסובב. עכשיו, בוב כמובן לא "רואה" שהקיוביט שלו מסובב כי הוא לא יכול לדעת את המקדמים של המערכת שלו; כל מה שהוא יכול לעשות הוא לבצע בעצמו מדידה. מה התוצאות האפשריות של המדידה? או, עכשיו סוף סוף זה לא יהיה סימטרי; המערכת תקרוס אל {::nomarkdown}\( \left\|0\right\rangle \){:/nomarkdown} בהסתברות {::nomarkdown}\( \cos^{2}\frac{\pi}{8}\){:/nomarkdown} ואל {::nomarkdown}\( \left\|1\right\rangle \){:/nomarkdown} בהסתברות {::nomarkdown}\( \sin^{2}\frac{\pi}{8}\){:/nomarkdown}. מבין שתי ההסתברויות, זו של {::nomarkdown}\( \cos^{2}\frac{\pi}{8}\){:/nomarkdown} גדולה משמעותית יותר כי {::nomarkdown}\( \frac{\pi}{8}\){:/nomarkdown} קטן יחסית - לכן בחרנו את הזווית הזו דווקא.

בדומה, אם בהסתברות {::nomarkdown}\( \frac{1}{2}\){:/nomarkdown} אליס תקבל דווקא {::nomarkdown}\( \left\|1\right\rangle \){:/nomarkdown} ולא {::nomarkdown}\( \left\|0\right\rangle \){:/nomarkdown} המערכת תקרוס למצב {::nomarkdown}\( \sin\frac{\pi}{8}\left\|10\right\rangle +\cos\frac{\pi}{8}\left\|11\right\rangle \){:/nomarkdown} שנראה לבוב כמו {::nomarkdown}\( \sin\frac{\pi}{8}\left\|0\right\rangle +\cos\frac{\pi}{8}\left\|1\right\rangle \){:/nomarkdown} והפעם ההסתברות למדוד {::nomarkdown}\( \left\|1\right\rangle \){:/nomarkdown} דווקא תהיה {::nomarkdown}\( \cos^{2}\frac{\pi}{8}\){:/nomarkdown}. מה שראינו הוא שלא משנה מה אליס מקבלת, ההסתברות שבוב יקבל את אותו הדבר כמוה היא גדולה יחסית - {::nomarkdown}\( \cos^{2}\frac{\pi}{8}\ge0.85\){:/nomarkdown}.

עכשיו הפאנץ' מגיע: כאשר אליס ובוב מקבלים שניהם 1, ומפעילים שניהם את הטרנספורמציות שלהם, זה הולך "לשבור" את הקורלציה בין שני הקיוביטים שלהם - או ליתר דיוק, להפוך אותה לאנטי-קורלציה (אנטי-קורלציה מלאה פירושה שכאשר אחד הקיוביטים הוא 0 השני הוא 1; שימו לב להבדל המשמעותי בין זה ובין "אין קורלציה". הדבר דומה להיפסטר שמקפיד תמיד לעשות ההפך מהמיינסטרים, ולכן נקבע על ידו).

מכיוון שגם אליס וגם בוב מפעילים טרנספורמציות לינאריות, אולי הכי פשוט לראות מה קורה על ידי היעזרות בכפל מטריצות. המטריצה שמתארת את הפעולה של אליס היא זו:

{::nomarkdown}\( \left[\begin{array}{cccc}\cos\frac{\pi}{8} &amp; -\sin\frac{\pi}{8} &amp; 0 &amp; 0\\\sin\frac{\pi}{8} &amp; \cos\frac{\pi}{8} &amp; 0 &amp; 0\\0 &amp; 0 &amp; \cos\frac{\pi}{8} &amp; -\sin\frac{\pi}{8}\\0 &amp; 0 &amp; \sin\frac{\pi}{8} &amp; \cos\frac{\pi}{8}\end{array}\right]\){:/nomarkdown}

והמטריצה של בוב היא (בדקו!)

{::nomarkdown}\( \left[\begin{array}{cccc}\cos\frac{\pi}{8} &amp; 0 &amp; \sin\frac{\pi}{8} &amp; 0\\0 &amp; \cos\frac{\pi}{8} &amp; &amp; \sin\frac{\pi}{8}\\-\sin\frac{\pi}{8} &amp; 0 &amp; \cos\frac{\pi}{8} &amp; 0\\0 &amp; -\sin\frac{\pi}{8} &amp; 0 &amp; \cos\frac{\pi}{8}\end{array}\right]\){:/nomarkdown}

כפל מטריצות הוא לא כל כך נורא - אפילו אני יכול לחשב אותו. מקבלים:

{::nomarkdown}\( \left[\begin{array}{cccc}\cos\frac{\pi}{8} &amp; -\sin\frac{\pi}{8} &amp; 0 &amp; 0\\\sin\frac{\pi}{8} &amp; \cos\frac{\pi}{8} &amp; 0 &amp; 0\\0 &amp; 0 &amp; \cos\frac{\pi}{8} &amp; -\sin\frac{\pi}{8}\\0 &amp; 0 &amp; \sin\frac{\pi}{8} &amp; \cos\frac{\pi}{8}\end{array}\right]\left[\begin{array}{cccc}\cos\frac{\pi}{8} &amp; 0 &amp; \sin\frac{\pi}{8} &amp; 0\\0 &amp; \cos\frac{\pi}{8} &amp; &amp; \sin\frac{\pi}{8}\\-\sin\frac{\pi}{8} &amp; 0 &amp; \cos\frac{\pi}{8} &amp; 0\\0 &amp; -\sin\frac{\pi}{8} &amp; 0 &amp; \cos\frac{\pi}{8}\end{array}\right]=\left[\begin{array}{cccc}\cos^{2}\frac{\pi}{8} &amp; \cdots &amp; \cdots &amp; -\sin^{2}\frac{\pi}{8}\\\frac{1}{2}\sin\frac{\pi}{4} &amp; &amp; &amp; \frac{1}{2}\sin\frac{\pi}{4}\\-\frac{1}{2}\sin\frac{\pi}{4} &amp; &amp; &amp; -\frac{1}{2}\sin\frac{\pi}{4}\\-\sin^{2}\frac{\pi}{8} &amp; \cdots &amp; \cdots &amp; \cos^{2}\frac{\pi}{8}\end{array}\right]\){:/nomarkdown}

לא טרחתי לחשב את העמודות במרכז כי כשנכפול את המטריצה במצב הקוונטי {::nomarkdown}\( \left\|00\right\rangle +\left\|11\right\rangle \){:/nomarkdown} העמודות הללו לא ישפיעו. אחרי הכפל נקבל את המצב הבא:

{::nomarkdown}\( \left(\cos^{2}\frac{\pi}{8}-\sin^{2}\frac{\pi}{8}\right)\left\|00\right\rangle +\sin\frac{\pi}{4}\left\|01\right\rangle -\sin\frac{\pi}{4}\left\|10\right\rangle +\left(\cos^{2}\frac{\pi}{8}-\sin^{2}\frac{\pi}{8}\right)\left\|11\right\rangle \){:/nomarkdown}

השתמשתי קודם בכך ש-{::nomarkdown}\( \cos\theta\sin\theta=\frac{1}{2}\sin2\theta\){:/nomarkdown} - זהות הזווית הכפולה עבור סינוס. עבור קוסינוס יש זהות דומה: {::nomarkdown}\( \cos2\theta=\cos^{2}\theta-\sin^{2}\theta\){:/nomarkdown}. לכן המצב הקוונטי שהגענו אליו הוא

{::nomarkdown}\( \cos\frac{\pi}{4}\left\|00\right\rangle +\sin\frac{\pi}{4}\left\|01\right\rangle -\sin\frac{\pi}{4}\left\|10\right\rangle +\cos\frac{\pi}{4}\left\|11\right\rangle \){:/nomarkdown}

ועכשיו אולי ברור למה בחרנו את הזווית {::nomarkdown}\( \theta=\frac{\pi}{8}\){:/nomarkdown}; זה מכיוון ש-{::nomarkdown}\( \frac{\pi}{4}\){:/nomarkdown} מקיימת ש-{::nomarkdown}\( \sin\frac{\pi}{4}=\cos\frac{\pi}{4}\){:/nomarkdown}, מה שאומר שכל המקדמים במצב שקיבלנו הם זהים בערכם המוחלט - ואתם כבר מבינים שזה אומר שהמדידה המשותפת של אליס-ואז-בוב תיתן כל זוג תוצאות באותה הסתברות בדיוק - כלומר, אם גם אליס וגם בוב ביצעו טרנספורמציה על המערכת, הם "שברו" לגמרי את הקורלציה בין הקיוביטים (ולא סתם הפכו אותה לאנטי-קורלציה). עכשיו, מכיוון ש-{::nomarkdown}\( x=y=1\){:/nomarkdown} אליס ובוב צריכים להחזיר תוצאה שונה - מה שיקרה אם הם ימדדו את {::nomarkdown}\( \left\|10\right\rangle \){:/nomarkdown} או {::nomarkdown}\( \left\|01\right\rangle \){:/nomarkdown}, בהסתברות {::nomarkdown}\( \frac{1}{2}\){:/nomarkdown}.

עכשיו אפשר לנתח את האסטרטגיה הזו של אליס ובוב ומה ההסתברות שלהם לנצח במשחק. אמרנו שמנהל המשחק מגריל את {::nomarkdown}\( x,y\){:/nomarkdown} באקראי, כך שאנחנו מפרידים בין שלושה מקרים:
<ol>
	<li>{::nomarkdown}\( x=y=0\){:/nomarkdown} בהסתברות {::nomarkdown}\( \frac{1}{4}\){:/nomarkdown} ואז אליס ובוב מנצחים בהסתברות 1.</li>
	<li>{::nomarkdown}\( x=y=1\){:/nomarkdown} בהסתברות {::nomarkdown}\( \frac{1}{4}\){:/nomarkdown} ואז אליס ובוב מנצחים בהסתברות {::nomarkdown}\( \frac{1}{2}\){:/nomarkdown}.</li>
	<li>{::nomarkdown}\( x\ne y\){:/nomarkdown} בהסתברות {::nomarkdown}\( \frac{1}{2}\){:/nomarkdown} ואז אליס ובוב מנצחים בהסתברות שגדולה מ-{::nomarkdown}\( 0.85\){:/nomarkdown}.</li>
</ol>
סך הכל הסתברות ההצלחה של אליס ובוב היא לפחות {::nomarkdown}\( \frac{1}{4}\cdot1+\frac{1}{4}\cdot\frac{1}{2}+\frac{1}{2}\cdot\frac{17}{20}=\frac{1}{2}\frac{10+5+17}{20}=\frac{32}{40}=\frac{4}{5}=0.8\){:/nomarkdown} - וזו הסתברות גדולה מ-{::nomarkdown}\( 0.75\){:/nomarkdown}!

אז מה יש לנו כאן? מצד אחד, ההפרש בין {::nomarkdown}\( 0.8\){:/nomarkdown} ל-{::nomarkdown}\( 0.75\){:/nomarkdown} הוא לא דרמטי במיוחד, והמשחק כולו נראה אבסורדי לגמרי ולא שימושי בעליל, ולכן התוצאה לא נראית חשובה במיוחד מבחינה פרקטית; אבל המשמעות שלה מבחינה תיאורטית היא לא זניחה בכלל - היא ממחישה מה חישובים קוונטים נותנים לנו שחישוב רגיל לא יכול לתת. מצד שני, לקרוא לזה "חישוב קוונטי" זו קצת רמאות - הפואנטה כאן היא לא החישוב; היא ה<strong>תקשורת</strong> שתורת הקוונטים מאפשרת לאליס ובוב לבצע - היא מאפשרת להם לעשות סוג מוגבל של קורלציית מידע גם כשהם מרוחקים, וכאן הקסם של הסופרפוזיציה לא תורם אלא מפריע (כי במקום שאליס פשוט תשלח ביט באופן קסום אל בוב הם עושים טרנספורמציות למצבים קוונטיים ומודדים אותם ומקווים שיהיה מזל עם המדידות). לכן זו דוגמה טובה להמחשת ה<strong>אתגר</strong> שיש בחישוב קוונטי עם התמודדות עם <strong>מגבלות</strong> על החישוב.

אבל רגע, אתם אומרים, תורת הקוונטים מאפשרת לאליס ובוב לתקשר יותר מהר ממהירות האור, וזה סותר את תורת היחסות הפרטית! ובכן, כן, זה ההקשר שבו המצב הקוונטי {::nomarkdown}\( \left\|00\right\rangle +\left\|11\right\rangle \){:/nomarkdown} הופיע מלכתחילה, אבל כמובן שהסיפור לא עד כדי כך פשוט והסתירה לא כל כך ברורה. אדבר על כך בפוסט הבא.
