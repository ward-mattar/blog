---
id: 3780
title: "משפט הערך הממוצע של לגראנז'"
date: 2019-06-17 14:59:37
layout: post
categories: 
  - אנליזה מתמטית
tags: 
  - כלל לופיטל
  - משפט הערך הממוצע של לגראנז'
  - משפט הערך הממוצע של קושי
  - משפט רול
---
ביקשו ממני לסגור את אחד החורים המציקים שיש בבלוג - לתאר את <strong>משפט הערך הממוצע </strong>של לגראנז', שהוא אחד מהתוצאות הבסיסיות והמעניינות ביותר שמלמדים על <strong>נגזרות</strong>. כתבתי בשעתו <a href="https://gadial.net/2010/11/21/derivative/">פוסט שמתאר מהן נגזרות</a> והוא הרקע שדרוש כדי להבין את משפט לגראנז'; אבל אל לגראנז' עצמו לא הגעתי. אז נתחיל עם תזכורת קטנה על מה מדובר.

אנחנו מדברים על <strong>פונקציות ממשיות</strong>: פונקציות {::nomarkdown}\(f:\mathbb{R}\to\mathbb{R}\){:/nomarkdown}. אם יש לנו מספיק מזל, הפונקציות הללו הן "נחמדות", והקצב שבו הן משתנות ניתן גם הוא לתיאור על ידי פונקציה, שנקראת <strong>הנגזרת</strong> של {::nomarkdown}\(f\){:/nomarkdown}. פורמלית, אנחנו מגדירים את הנגזרת של {::nomarkdown}\(f\){:/nomarkdown} בנקודה {::nomarkdown}\(a\){:/nomarkdown} בתור הערך של הגבול {::nomarkdown}\(\lim_{h\to0}\frac{f\left(a+h\right)-f\left(a\right)}{h}\){:/nomarkdown}, במקרה שבו הוא קיים. בואו נסתכל שניה על הביטוי הזה יותר בפירוט כדי להבין מה הוא אומר: אפשר לכתוב אותו גם בתור

{::nomarkdown}\(\lim_{h\to0}\frac{f\left(a+h\right)-f\left(a\right)}{\left(a+h\right)-a}\){:/nomarkdown}

כלומר, אפשר לחשוב עליו בתור הערך {::nomarkdown}\(\frac{f\left(b\right)-f\left(a\right)}{b-a}\){:/nomarkdown} עבור נקודות {::nomarkdown}\(b\){:/nomarkdown} שהן "הולכות וקרבות" ל-{::nomarkdown}\(a\){:/nomarkdown}. אבל מה זה הערך הזה? זה פשוט <strong>השינוי הממוצע</strong> בין הערך של {::nomarkdown}\(f\){:/nomarkdown} בנקודה {::nomarkdown}\(a\){:/nomarkdown} והערך שלה בנקודה {::nomarkdown}\(b\){:/nomarkdown}. קל לראות את זה עם דוגמא יומיומית: נניח שאנחנו נוסעים מתל אביב לאילת ומודדים כמה התרחקנו מתל אביב עד כה בעזרת הפונקציה {::nomarkdown}\(f\){:/nomarkdown}. אם בזמן {::nomarkdown}\(t_{1}=1\){:/nomarkdown} (בשעות) היינו במרחק 50 ק"מ מתל אביב ובזמן {::nomarkdown}\(t_{2}=4\){:/nomarkdown} היינו במרחק 290 ק"מ מתל אביב, אז <strong>המהירות הממוצעת</strong> שלנו בנסיעה הזו בין שני פרקי הזמן הללו נתונה, בקילומטר לשעה, על ידי

{::nomarkdown}\(\frac{f\left(t_{2}\right)-f\left(t_{1}\right)}{t_{2}-t_{1}}=\frac{290-50}{4-1}=\frac{240}{3}=80\){:/nomarkdown}

מה המשמעות של מהירות ממוצעת שכזו? האם זה אומר שזו המהירות שבה נסענו במשך רוב הדרך? לא. ייתכן שנסענו במהירות 100 קמ"ש בשעתיים הראשונות שאחרי {::nomarkdown}\(t_{1}=1\){:/nomarkdown}, ואז את 40 הקילומטרים הנוספים עשינו בזחילה במהירות 40 קמ"ש בשעה האחרונה. המשמעות של המהירות הממוצעת היא זו - אם היינו נוסעים כל הדרך באותה מהירות בדיוק, בלי לשנות אותה כלל, אז היינו עוברים את אותה הדרך.

על נגזרת אפשר לחשוב בתור "ערך ממוצע רגעי". כלומר, אנחנו מחשבים את המהירות הממוצעת שלנו לא על פני פרק זמן של שלוש שעות אלא על פני פרק זמן של דקה... לא בעצם, פרק זמן של שנייה... לא, בעצם מילישנייה... וכן הלאה. אם יש איזו מהירות מסויימת שהמהירות הממוצעת מספיק קרובה אליה, בהינתן שפרק הזמן שלנו קצר דיו (זה היה ניסוח מילולי מסורבל של מושג ה<strong>גבול</strong>, {::nomarkdown}\(\lim\){:/nomarkdown}), אז המהירות המסויימת הזו היא <strong>הנגזרת</strong> של פונקציית המיקום שלנו באותה נקודת זמן שאנחנו לוקחים ממנה פער כל כך קצרצר. בהקשר של מהירות קוראים לזה <strong>מהירות רגעית</strong>.

כפי שאפשר להבין, מהירות רגעית שכזו היא עניין, אה, רגעי. מקומי. נקודתי. משהו שמתאר שבריר שניה אחד בהיסטוריה של הנסיעה. מה שמשפט הערך הממוצע של לגראנז' עושה הוא להעביר אותנו מהמקומי הזה אל <strong>הגלובלי</strong> - להראות שקיימת נקודה רגעית בזמן שמה שקורה בה הוא האפיון הממוצע של מה שקורה בכל פרק הזמן הרלוונטי. זה מתאים לחוויה היומיומית שלנו: אם בהתחלה נסענו במהירות ממוצעת של 100 קמ"ש ואז ירדנו למהירות ממוצעת של 40 קמ"ש, אז היה שבריר שניה כלשהו שבו מד המהירות שלנו הראה את המהירות 80 קמ"ש, שהיא המהירות הממוצעת עבור כל הנסיעה.

אז הנה מה שלגראנז' אומר, פורמלית: אם {::nomarkdown}\(a&lt;b\){:/nomarkdown} ויש לנו פונקציה {::nomarkdown}\(f:\left[a,b\right]\to\mathbb{R}\){:/nomarkdown} פונקציה שרציפה בקטע הסגור {::nomarkdown}\(\left[a,b\right]\){:/nomarkdown} וגזירה בקטע הפתוח {::nomarkdown}\(\left(a,b\right)\){:/nomarkdown}, אז קיימת נקודה {::nomarkdown}\(c\in\left(a,b\right)\){:/nomarkdown} כך ש-{::nomarkdown}\(f^{\prime}\left(c\right)=\frac{f\left(b\right)-f\left(a\right)}{b-a}\){:/nomarkdown}. בפוסט הזה נוכיח את המשפט (בהסתמך על דברים קודמים, כמובן) וניתן דוגמא או שתיים לשימושיות שלו.

ראשית, אי אפשר בלי להזכיר את האופן הגאומטרי שבו אנחנו רואים את המשפט. כשאנחנו מציירים פונקציה, אנחנו מציירים נקודות שהקואורדינטות שלהן הן מהצורה {::nomarkdown}\(\left(x,f\left(x\right)\right)\){:/nomarkdown} (כלומר, {::nomarkdown}\(f\left(x\right)\){:/nomarkdown} היא קואורדינטת ה-{::nomarkdown}\(y\){:/nomarkdown} של הציור). נקודות הקצה של הפונקציה הן {::nomarkdown}\(\left(a,f\left(a\right)\right)\){:/nomarkdown} ו-{::nomarkdown}\(\left(b,f\left(b\right)\right)\){:/nomarkdown}. אם ניזכר איך הולכים דברים בגאומטריה אנליטית נראה שהביטוי {::nomarkdown}\(\frac{f\left(b\right)-f\left(a\right)}{b-a}\){:/nomarkdown} הוא <strong>שיפוע הישר</strong> שמחבר את שתי הנקודות הללו. עכשיו, מה זו נגזרת? המשמעות של נגזרת בנקודה כלשהי היא <strong>שיפוע המשיק</strong> לפונקציה בנקודה הזו. לכן לגראנז' אומר שיש נקודה כלשהי על גרף הפונקציה ששיפוע המשיק לאותה נקודה זהה לשיפוע הישר שמחבר את שני קצוות הפונקציה. הנה איור באדיבות ויקיפדיה העברית:

<img class="alignnone size-full wp-image-3781" src="https://gadial.net/wp-content/uploads/2019/06/Mv4_he.svg_.png" alt="" width="1024" height="931" />

איך מוכיחים את המשפט? כאן צריך להיזהר עם האינטואיציה שלנו, שעשויה להטעות אותנו. נחזור אל דוגמת הרכב שנסע במהירות של 100 קמ"ש ואז ירד למהירות של 40 קמ"ש. האינטואיציה שלנו אומרת שבירידה מ-100 קמ"ש אל 40 קמ"ש הייתה חייבת להיות שניה שבה המהירות הייתה 80 קמ"ש, כי אנחנו חושבים על מהירות בתור משהו ש<strong>משתנה באופן רציף</strong>. יש לדבר הזה פורמליזם בחדו"א: פונקציה {::nomarkdown}\(f\){:/nomarkdown} היא <strong>רציפה</strong> בנקודה {::nomarkdown}\(a\){:/nomarkdown} אם {::nomarkdown}\(\lim_{x\to a}f\left(x\right)=f\left(a\right)\){:/nomarkdown} (כלומר, הערך שנראה ש-{::nomarkdown}\(f\){:/nomarkdown} "אמורה לקבל" ב-{::nomarkdown}\(a\){:/nomarkdown} הוא מה שמתקבל בפועל). אם יש לנו פונקציה רציפה, אז יש לנו עבורה משהו שנקרא <strong>משפט ערך הביניים</strong> שאומר שאם {::nomarkdown}\(y\){:/nomarkdown} הוא ערך כלשהו שנמצא בין {::nomarkdown}\(f\left(a\right)\){:/nomarkdown} ו-{::nomarkdown}\(f\left(b\right)\){:/nomarkdown}, אז קיים {::nomarkdown}\(x\in\left[a,b\right]\){:/nomarkdown} כך ש-{::nomarkdown}\(f\left(x\right)=y\){:/nomarkdown}. בפרט, מהירות של 80 קמ"ש נמצאת בין 100 קמ"ש ו-40 קמ"ש ולכן היא חייבת להתקבל מתישהו.

אז מה הבעיה? הבעיה היא שנגזרת, באופן כללי, לא חייבת להיות פונקציה רציפה. אמנם, הדוגמאות הנגדיות (של פונקציות גזירות שהנגזרת שלהן אינה רציפה) הן לא יפות במיוחד ואפשר גם להוכיח שאי רציפות של "קפיצה" ישירות מ-100 קמ"ש אל 40 קמ"ש פשוט לא יכולה להתקיים, אבל השורה התחתונה היא שאנחנו רוצים להוכיח את המשפט בלי הסתמכות על משפט ערך הביניים.

עוד נקודה שצריך לתת אליה תשומת לב היא שהתנאים של המשפט די קשיחים. ראשית, הדרישה ש-{::nomarkdown}\(f\){:/nomarkdown} תהיה גזירה בכל הקטע הפתוח {::nomarkdown}\(\left(a,b\right)\){:/nomarkdown}. אחרת אפשר לקחת את דוגמת הנסיעה שלנו לאקסטרים: נדמיין שאנחנו נוסעים 100 קמ"ש ואז <strong>קופצים מיידית</strong> אל 40 קמ"ש, בלי לעבור בערכים באמצע; אז באמת לא היינו בשום מקום במהירות 80 קמ"ש כפי שמשפט לגראנז' טוען. העניין הוא שהנקודה שבה ביצענו את הקפיצה הזו לא תהיה גזירה; הנגזרת ממש לפניה היא 100 והנגזרת ממש אחריה היא 40, ובנקודה עצמה? הנגזרת לא מוגדרת.

שנית, הדרישה הנוספת ש-{::nomarkdown}\(f\){:/nomarkdown} תהיה רציפה בכל {::nomarkdown}\(\left[a,b\right]\){:/nomarkdown} היא כמעט מובנת מאליה. היא חייבת להיות רציפה ב-{::nomarkdown}\(\left(a,b\right)\){:/nomarkdown} כי קל לראות שגזירות בקטע הזה גוררת רציפות בו. היא חייבת להיות רציפה בקצוות, אחרת אפשר יהיה לשנות את הערכים שלה שם באופן שרירותי לגמרי, למשל להגדיר {::nomarkdown}\(f\left(a\right)=f\left(b\right)=232352\){:/nomarkdown}, ואז אין סיבה שמשפט ערך הביניים יעבוד כי הוא מתבסס בצורה חזקה על הערכים בקצוות ועל כך שהם מייצגים תקינים של מה שקורה בתוך הקטע.

עכשיו אפשר לעבור להוכחה של המשפט. נתחיל עם מקרה פרטי שלו שנקרא <strong>משפט רול</strong> שבעזרתו קל להוכיח את התוצאה הכללית. משפט רול אומר שאם {::nomarkdown}\(f\left(a\right)=f\left(b\right)\){:/nomarkdown} אז קיימת {::nomarkdown}\(c\in\left[a,b\right]\){:/nomarkdown} כך ש-{::nomarkdown}\(f^{\prime}\left(c\right)=0\){:/nomarkdown}. אינטואיטיבית, אם נקודות ההתחלה והסיום של הטיול שלנו הן זהות, אז היה רגע שבו עמדנו במקום ולא זזנו.

זה לא משפט טריוויאלי, אבל עם ידע רלוונטי בחדו"א אפשר לתת לו הוכחה של שורה אחת, שהאינטואיציה שלה די ברורה: אם נקודות ההתחלה והסיום שלנו זהות, אז או שלא זזנו בכלל כל הזמן, או שזזנו קדימה ואז אחורה ולכן הייתה שניה שבה עברנו מלזוז קדימה אל לזוז אחורה ובה לא זזנו; או שזזנו אחורה ואז קדימה ולכן הייתה שניה שבה לא זזנו. העניין הוא שהאינטואיציה הזו שוב מניחה רציפות של הנגזרת ובפעול משפט רול מצליח לעקוף את זה (ולכן אינו טריוויאלי) בעזרת משפטים קודמים, שרק בזכותם ההוכחה היא בת שורה אחת.

בואו ניתן את השורה הזו למקרה שיש לכם את הידע הזה ואז נרחיב: מכיוון ש-{::nomarkdown}\(f\){:/nomarkdown} רציפה ב-{::nomarkdown}\(\left[a,b\right]\){:/nomarkdown} היא מקבלת בקטע הזה מקסימום ומינימום. אם הם בתוך הקטע, אז בכל אחד מהם ערך הנגזרת הוא 0 על פי משפט פרמה לנקודות קיצון; אם שניהם בקצוות הקטע אז הם שווים זה לזה ולכן הפונקציה קבועה ולכן הנגזרת שלה היא 0 בכל הקטע.

הבעיה עם להסביר את כל המלל שכתבתי למעלה היא שלא ברור כמה רחוק אני אמור ללכת. את הטענה על משפט פרמה לנקודות קיצון <a href="https://gadial.net/2011/01/16/derivative_and_extremal_problems_1-2/">הוכחתי בפוסט קודם</a>, אז אני פטור מלדבר עליה, אבל מה עם הטענה שפונקציה רציפה בקטע סגור מקבלת בו ערכי מקסימום ומינימום? הטענה הזו נקראת בחדו"א "משפט ויירשטראס" (השני; הראשון אומר שפונקציה רציפה בקטע סגור חסומה בו). אני יכול להוכיח אותה, אבל ההוכחה מתבססת על משהו יותר בסיסי שנקרא <strong>משפט בולצאנו-ויירשטראס</strong>, שבתורו נובע מהתכונות הבסיסיות של הממשיים... בקיצור, אני לא הולך ללכת בכיוון הזה ואולי אדבר על משפטי ויירשטראס בפירוט בפוסט אחר מתישהו.

דבר אחד כן קל מאוד להסביר: אם {::nomarkdown}\(f\){:/nomarkdown} היא פונקציה קבועה בקטע, אז הנגזרת שלה בכל נקודה בקטע היא {::nomarkdown}\(0\){:/nomarkdown} פשוט כי בביטוי {::nomarkdown}\(\lim_{h\to0}\frac{f\left(a+h\right)-f\left(a\right)}{h}\){:/nomarkdown} מתקיים {::nomarkdown}\(f\left(a+h\right)=f\left(a\right)\){:/nomarkdown} ולכן המונה הוא אפס.

עכשיו, איך עוברים מהמשפט הזה אל משפט לגראנז'? די בקלות: אם יש לנו פונקציה {::nomarkdown}\(f\left(x\right)\){:/nomarkdown}, אפשר לדבר על הפונקציה {::nomarkdown}\(g\left(x\right)\){:/nomarkdown} שמודדת את <strong>המרחק</strong> של {::nomarkdown}\(f\left(x\right)\){:/nomarkdown} מהמיתר שמחבר את הנקודות {::nomarkdown}\(\left(a,f\left(a\right)\right)\){:/nomarkdown} ו-{::nomarkdown}\(\left(b,f\left(b\right)\right)\){:/nomarkdown}. כלומר, היא מודדת כמה {::nomarkdown}\(f\left(x\right)\){:/nomarkdown} <strong>אינה</strong> מתאימה לממוצע בנקודה מסויימת. בנקודות הקצה המרחק הזה יהיה 0, כך שאנחנו רואים את משפט רול בפעולה.

כדי לכתוב את {::nomarkdown}\(g\left(x\right)\){:/nomarkdown} במפורש צריך להיזכר קודם כל בקצת גאומטריה אנליטית - איך כותבים את משוואות הקו הישר שמחבר שתי נקודות {::nomarkdown}\(\left(x_{1},y_{1}\right),\left(x_{2},y_{2}\right)\){:/nomarkdown}? התשובה היא שזו תהיה משוואה מהצורה {::nomarkdown}\(y=mx+n\){:/nomarkdown} כאשר {::nomarkdown}\(m\){:/nomarkdown} נקרא <strong>השיפוע</strong> של הישר ואילו {::nomarkdown}\(n\){:/nomarkdown} היא נקודת החיתוך של הישר עם ציר {::nomarkdown}\(y\){:/nomarkdown} (כמה "גבוה" הישר יהיה כשנציב {::nomarkdown}\(x=0\){:/nomarkdown}). אם נציב את שתי הנקודות שידועות לנו במשוואה הזו נקבל שתי משוואות:

{::nomarkdown}\(y_{1}=mx_{1}+n\){:/nomarkdown}

{::nomarkdown}\(y_{2}=mx_{2}+n\){:/nomarkdown}

אם נחסר אחת מהשניה ונחלק, נקבל

{::nomarkdown}\(m=\frac{y_{2}-y_{1}}{x_{2}-x_{1}}\){:/nomarkdown}

כאן אנחנו מניחים ש-{::nomarkdown}\(x_{2}\ne x_{1}\){:/nomarkdown} כדי שנוכל לחלק, וזה מתאים להנחה שלנו ש-{::nomarkdown}\(a&lt;b\){:/nomarkdown} במשפט לגראנז' (אם לא היינו מניחים את זה אז משפט לגרנז' היה חסר משמעות; הוא היה אומר שקיים {::nomarkdown}\(x\in\left(a,b\right)\){:/nomarkdown} שמקיים כך-וכך, אבל {::nomarkdown}\(\left(a,b\right)\){:/nomarkdown} היה קטע ריק).

את הערך של {::nomarkdown}\(n\){:/nomarkdown} קל למצוא עכשיו על ידי כך שניקח את המשוואה הראשונה ונעביר אגף: {::nomarkdown}\(y_{1}-mx_{1}=n\){:/nomarkdown}. אם נציב את זה בחזרה במשוואה הכללית {::nomarkdown}\(y=mx+n\){:/nomarkdown} נקבל

{::nomarkdown}\(y=mx+\left(y_{1}-mx_{1}\right)\){:/nomarkdown}

כלומר

{::nomarkdown}\(y=m\left(x-x_{1}\right)+y_{1}\){:/nomarkdown}

במקרה שלנו, שבו {::nomarkdown}\(\left(x_{1},y_{1}\right)=\left(a,f\left(a\right)\right)\){:/nomarkdown} ו-{::nomarkdown}\(\left(x_{2},y_{2}\right)=\left(b,f\left(b\right)\right)\){:/nomarkdown}, משוואת המיתר תהיה

{::nomarkdown}\(y=\frac{f\left(b\right)-f\left(a\right)}{b-a}\left(x-a\right)+f\left(a\right)\){:/nomarkdown}

ולכן אם אנחנו רוצים ש-{::nomarkdown}\(g\left(x\right)\){:/nomarkdown} תתאר את <strong>ההפרש</strong> בין הערך של המיתר והפונקציה, כלומר {::nomarkdown}\(f\left(x\right)-y\){:/nomarkdown}, נקבל:

{::nomarkdown}\(g\left(x\right)=f\left(x\right)-\frac{f\left(b\right)-f\left(a\right)}{b-a}\left(x-a\right)-f\left(a\right)\){:/nomarkdown}

אם נציב {::nomarkdown}\(x=a\){:/nomarkdown} במשוואה הזו נקבל

{::nomarkdown}\(g\left(a\right)=f\left(a\right)-f\left(a\right)=0\){:/nomarkdown}

ואם נציב בה {::nomarkdown}\(b\){:/nomarkdown} נקבל

{::nomarkdown}\(g\left(b\right)=f\left(b\right)-\left(f\left(b\right)-f\left(a\right)\right)-f\left(a\right)=0\){:/nomarkdown}

בנוסף לכך, {::nomarkdown}\(g\){:/nomarkdown} רציפה ב-{::nomarkdown}\(\left[a,b\right]\){:/nomarkdown} וגזירה ב-{::nomarkdown}\(\left(a,b\right)\){:/nomarkdown} בשל האופן הפשוט שבו היא מתקבלת מ-{::nomarkdown}\(f\left(x\right)\){:/nomarkdown} שגם כן מקיימת את התכונות הנחמדות הללו; זאת מכיוון שחיבור של פונקציות גזירות או כפל שלהן בקבוע מותיר אותן גזירות, וכמו כן פולינומים הם פונקציות גזירות.

לכן ניתן להשתמש במשפט רול על {::nomarkdown}\(g\){:/nomarkdown} ולקבל שיש {::nomarkdown}\(c\in\left(a,b\right)\){:/nomarkdown} כך ש-{::nomarkdown}\(g^{\prime}\left(c\right)=0\){:/nomarkdown}. כעת, מהי הנגזרת של {::nomarkdown}\(g\){:/nomarkdown}? קל לחשוב אותה במפורש:

{::nomarkdown}\(g^{\prime}\left(x\right)=f^{\prime}\left(x\right)-\frac{f\left(b\right)-f\left(a\right)}{b-a}\){:/nomarkdown}

ולכן אם {::nomarkdown}\(g^{\prime}\left(c\right)=0\){:/nomarkdown} נקבל ש-

{::nomarkdown}\(f^{\prime}\left(c\right)-\frac{f\left(b\right)-f\left(a\right)}{b-a}=0\){:/nomarkdown}

כלומר {::nomarkdown}\(f^{\prime}\left(c\right)=\frac{f\left(b\right)-f\left(a\right)}{b-a}\){:/nomarkdown} שזה בדיוק מה שרצינו. האינטואיציה פה שוב פשוטה ונובעת ממה שנקרא <strong>לינאריות הנגזרת</strong>, {::nomarkdown}\(\left(f+g\right)^{\prime}=f^{\prime}+g^{\prime}\){:/nomarkdown}: מכיוון ש-{::nomarkdown}\(g\){:/nomarkdown} היא ההפרש בין {::nomarkdown}\(f\){:/nomarkdown} ובין המיתר, אז הנגזרת של {::nomarkdown}\(g\){:/nomarkdown} היא ההפרש בין הנגזרת של {::nomarkdown}\(f\){:/nomarkdown} ובין נגזרת המיתר, שהיא פשוט השיפוע הקבוע של המיתר. לכן יש נקודה שבה ההפרש הזה מתאפס, והנגזרת של {::nomarkdown}\(f\){:/nomarkdown} שווה בדיוק לשיפוע המיתר.

סיימנו להוכיח את המשפט, אבל מן הסתם פוסט בנושא לא יהיה שלם בלי לראות כמה מהשימושים הפשוטים שלו. כאמור, הרעיון במשפט הזה הוא היכולת לעבור מה"מקומי" (הנגזרת) אל ה"גלובלי" (ההתנהגות של הפונקציה בכל הקטע), ובמקרי קצה פשוטים יש כמה הסקות מיידיות שניתן לבצע:
<ol>
 	<li>אם הנגזרת של {::nomarkdown}\(f\){:/nomarkdown} היא 0 בקטע כלשהו אז {::nomarkdown}\(f\){:/nomarkdown} קבועה בכל הקטע הזה (קודם ראינו את ההפך - שהנגזרת של פונקציה קבועה היא 0; עכשיו אנחנו רואים שזה קורה רק לפונקציות קבועות)</li>
 	<li>אם הנגזרת של {::nomarkdown}\(f\){:/nomarkdown} היא <strong>חיובית</strong> בקטע כלשהו אז {::nomarkdown}\(f\){:/nomarkdown} היא <strong>עולה ממש</strong> בכל הקטע הזה.</li>
 	<li>אם הנגזרת של {::nomarkdown}\(f\){:/nomarkdown} היא <strong>שלילית </strong>בקטע כלשהו אז {::nomarkdown}\(f\){:/nomarkdown} היא <strong>יורדת ממש</strong> בכל הקטע הזה.</li>
</ol>
שלושת אלו הם מה שנדרש לנו לצורך "חקירת פונקציות" כמו שלומדים בתיכון - זיהוי תחומי עליה וירידה של פונקציה. כדי לראות שזה נכון, אנחנו לוקחים שתי נקודות כלשהן בתוך הקטע, נקרא להן {::nomarkdown}\(a,b\){:/nomarkdown}, כך ש-{::nomarkdown}\(a&lt;b\){:/nomarkdown}. עכשיו:
<ol>
 	<li>אם {::nomarkdown}\(f\){:/nomarkdown} קבועה בכל הקטע אנחנו מצפים שיתקיים {::nomarkdown}\(f\left(a\right)=f\left(b\right)\){:/nomarkdown}</li>
 	<li>אם {::nomarkdown}\(f\){:/nomarkdown} עולה ממש בכל הקטע אנחנו מצפים שיתקיים {::nomarkdown}\(f\left(a\right)&lt;f\left(b\right)\){:/nomarkdown}</li>
 	<li>אם {::nomarkdown}\(f\){:/nomarkdown} יורדת ממש בכל הקטע אנחנו מצפים שיתקיים {::nomarkdown}\(f\left(a\right)&gt;f\left(b\right)\){:/nomarkdown}</li>
</ol>
שלושת אלו אכן מתקיימים, בזכות משפט הערך הממוצע. כזכור, הוא אומר שקיימת {::nomarkdown}\(c\in\left(a,b\right)\){:/nomarkdown} כך ש-{::nomarkdown}\(f^{\prime}\left(c\right)=\frac{f\left(b\right)-f\left(a\right)}{b-a}\){:/nomarkdown}. אולי קצת יותר קל להרגיש מה קורה אם כופלים ב-{::nomarkdown}\(b-a\){:/nomarkdown} ומקבלים

{::nomarkdown}\(f\left(b\right)-f\left(a\right)=f^{\prime}\left(c\right)\left(b-a\right)\){:/nomarkdown}

כלומר, אנחנו יכולים לתאר את ההפרש בין {::nomarkdown}\(f\){:/nomarkdown} בשתי נקודות הקצה של הקטע בעזרת אורך הקטע כפול קבוע מספרי כלשהו שקשור לנגזרת של {::nomarkdown}\(f\){:/nomarkdown}. נחזור אל שלושת המקרים שלנו:
<ol>
 	<li>אם הנגזרת של {::nomarkdown}\(f\){:/nomarkdown} היא 0 בכל הקטע אז {::nomarkdown}\(f^{\prime}\left(c\right)=0\){:/nomarkdown} ולכן {::nomarkdown}\(f\left(b\right)-f\left(a\right)=0\){:/nomarkdown}, כלומר {::nomarkdown}\(f\left(b\right)=f\left(a\right)\){:/nomarkdown}</li>
 	<li>אם הנגזרת של {::nomarkdown}\(f\){:/nomarkdown} היא חיובית בכל הקטע אז {::nomarkdown}\(f^{\prime}\left(c\right)\left(b-a\right)&gt;0\){:/nomarkdown} ולכן {::nomarkdown}\(f\left(b\right)-f\left(a\right)&gt;0\){:/nomarkdown}, כלומר {::nomarkdown}\(f\left(a\right)&lt;f\left(b\right)\){:/nomarkdown}</li>
 	<li>אם הנגזרת של {::nomarkdown}\(f\){:/nomarkdown} היא שלילית בכל הקטע אז {::nomarkdown}\(f^{\prime}\left(c\right)\left(b-a\right)&lt;0\){:/nomarkdown} ולכן {::nomarkdown}\(f\left(b\right)-f\left(a\right)&lt;0\){:/nomarkdown}, כלומר {::nomarkdown}\(f\left(a\right)&gt;f\left(b\right)\){:/nomarkdown}</li>
</ol>
העובדה שאם הנגזרת של {::nomarkdown}\(f\){:/nomarkdown} היא אפס בקטע אז {::nomarkdown}\(f\){:/nomarkdown} היא קבועה היא הבסיס לעוד טענה מעניינת: אם הנגזרת של שתי פונקציות היא זהה, אז הן <strong>נבדלות בקבוע</strong> ותו לא. בואו נראה את זה: נניח ש-{::nomarkdown}\(f^{\prime}\left(x\right)=g^{\prime}\left(x\right)\){:/nomarkdown} לכל {::nomarkdown}\(x\){:/nomarkdown} בקטע מסויים, אז {::nomarkdown}\(\left(f-g\right)^{\prime}\left(x\right)=0\){:/nomarkdown} לכל הנקודות בקטע הזה, ומכאן ש-{::nomarkdown}\(f-g\){:/nomarkdown} היא פונקציה קבועה: {::nomarkdown}\(\left(f-g\right)\left(x\right)=c\){:/nomarkdown} עבור {::nomarkdown}\(c\in\mathbb{R}\){:/nomarkdown} כלשהו בקטע, כלומר {::nomarkdown}\(f\left(x\right)=g\left(x\right)+c\){:/nomarkdown}. זו אולי התוצאה הבסיסית ביותר שמכירים כשמדברים על <strong>אינטגרלים</strong>: שאם מצאנו פונקציה קדומה של משהו, אז הפונקציות הקדומות הנוספות מתקבלות ממנה על ידי חיבור קבוע כלשהו.

לסיום הפוסט אני רוצה להוכיח משפט מועיל מאין כמותו - <strong>כלל לופיטל</strong>. יש פה קוריוז היסטורי קטן: לופיטל לא גילה או הוכיח את המשפט אלא יוהאן ברנולי עשה את זה (ולופיטל, תלמידו, פרסם אותו בספר שכתב וקיבל את הקרדיט; סוג של קניה בכסף של משפט שייקרא על שמך), ואני הולך להוכיח אותו עם משהו שנקרא "משפט הערך הממוצע של קושי" שחי הרבה אחרי לופיטל וברנולי (אין לי מושג איך ברנולי הוכיח את המשפט).

כלל לופיטל הוא שיטה מועילה לחישוב <strong>גבולות</strong> שהם מנה שבה המונה והמכנה שואפים שניהם לאפס (ועם קצת עבודה אפשר להשתמש בו עבור עוד סוגי גבולות בעייתיים אבל לא אכנס לכך בפוסט הזה). פורמלית, אם {::nomarkdown}\(f,g\){:/nomarkdown} הן פונקציות ממשיות ו-{::nomarkdown}\(a\){:/nomarkdown} מספר ממשי כלשהו כך ש-{::nomarkdown}\(\lim_{x\to a}f\left(x\right)=\lim_{x\to a}g\left(x\right)=0\){:/nomarkdown}, ואם בנוסף לכך הגבול הבא קיים:

{::nomarkdown}\(\lim_{x\to a}\frac{f^{\prime}\left(x\right)}{g^{\prime}\left(x\right)}\){:/nomarkdown}

אז גם הגבול הבא קיים:

{::nomarkdown}\(\lim_{x\to a}\frac{f\left(x\right)}{g\left(x\right)}\){:/nomarkdown}

והם שווים, כלומר {::nomarkdown}\(\lim_{x\to a}\frac{f\left(x\right)}{g\left(x\right)}=\lim_{x\to a}\frac{f^{\prime}\left(x\right)}{g^{\prime}\left(x\right)}\){:/nomarkdown}

המשמעות של הכלל היא שאם יש לנו גבול קשה לחישוב, למשל {::nomarkdown}\(\lim_{x\to0}\frac{\sin x}{x}\){:/nomarkdown}, אז אפשר לנסות לפשט אותו על ידי גזירת המונה והמכנה; אם נצליח למצוא את הגבול המתאים עבור הנגזרות, ינבע מכך הגבול המקורי. בדוגמה שלנו גזירת המונה והמכנה מניבה את

{::nomarkdown}\(\lim_{x\to0}\frac{\cos x}{1}=1\){:/nomarkdown}

(יש בדוגמא שלי מעגליות מכוונת: כדי לדעת מהי הנגזרת של {::nomarkdown}\(\sin\){:/nomarkdown} כבר צריך להכיר את הערך של הגבול הזה; יש לי על כך <a href="https://gadial.net/2008/01/20/lim_sin_x_over_x/">פוסט כאן</a>)

איך מוכיחים את הכלל? בשביל זה אני צריך, כאמור, הכללה של משפט הערך הממוצע של לגראנז' שנקראת משפט הערך הממוצע של קושי. אם בלגראנז' הרעיון הוא שקיים {::nomarkdown}\(c\){:/nomarkdown} עבורו מתקיים

{::nomarkdown}\(f^{\prime}\left(c\right)=\frac{f\left(b\right)-f\left(a\right)}{b-a}\){:/nomarkdown}

אז במשפט קושי הרעיון הוא שקיים {::nomarkdown}\(c\){:/nomarkdown} עבורו מתקיים

{::nomarkdown}\(\frac{f^{\prime}\left(c\right)}{g^{\prime}\left(c\right)}=\frac{f\left(b\right)-f\left(a\right)}{g\left(b\right)-g\left(a\right)}\){:/nomarkdown}

עבור פונקציה {::nomarkdown}\(g\){:/nomarkdown} שמקיימת את אותם תנאים כמו של {::nomarkdown}\(f\){:/nomarkdown} (רציפה ב-{::nomarkdown}\(\left[a,b\right]\){:/nomarkdown} וגזירה ב-{::nomarkdown}\(\left(a,b\right)\){:/nomarkdown}) ובנוסף לכך החלוקה בה ובנגזרתה לא עושה צרות - כלומר, {::nomarkdown}\(g\left(a\right)\ne g\left(b\right)\){:/nomarkdown} ו-{::nomarkdown}\(g^{\prime}\left(x\right)\ne0\){:/nomarkdown} לכל {::nomarkdown}\(x\in\left(a,b\right)\){:/nomarkdown}. לגראנז' הוא מקרה פרטי של זה עבור פונקציית הזהות {::nomarkdown}\(g\left(x\right)=x\){:/nomarkdown}.

למען האמת, הניסוח לעיל של משפט קושי הוא קצת מעצבן; במקום שיהיה לנו משפט סימטרי ונחמד יש לנו את כל הדרישות הנוספות המעיקות על {::nomarkdown}\(g\){:/nomarkdown}. אפשר להיפטר מהקושי הזה אם נפטרים מהחלוקה. כלומר, ניסוח "טוב יותר" של משפט קושי הוא שאם {::nomarkdown}\(f,g\){:/nomarkdown} רציפות על {::nomarkdown}\(\left[a,b\right]\){:/nomarkdown} וגזירות על {::nomarkdown}\(\left(a,b\right)\){:/nomarkdown} אז קיים {::nomarkdown}\(c\in\left(a,b\right)\){:/nomarkdown} כך ש-

{::nomarkdown}\(f^{\prime}\left(c\right)\left(g\left(b\right)-g\left(a\right)\right)=g^{\prime}\left(c\right)\left(f\left(b\right)-f\left(a\right)\right)\){:/nomarkdown}

איך מוכיחים את המשפט? על פניו אפשר לומר משהו כזה: נשתמש פעמיים במשפט לגראנז' ונקבל ש-

{::nomarkdown}\(f^{\prime}\left(c\right)=\frac{f\left(b\right)-f\left(a\right)}{b-a}\){:/nomarkdown}

{::nomarkdown}\(g^{\prime}\left(c\right)=\frac{g\left(b\right)-g\left(a\right)}{b-a}\){:/nomarkdown}

ועכשיו פשוט נכפול את אגף ימין של המשוואה האחת באגף שמאל של השניה, ואת אגף שמאל של השניה באגף ימין של הראשונה, ונצמצמם {::nomarkdown}\(\frac{1}{b-a}\){:/nomarkdown} משני האגפים. זה נשמע מאוד פשוט ואלגנטי ונחמד וזה גם <strong>שגוי מאוד</strong> בצורה שכדאי לתת עליה את הדעת כי זו טעות מאוד נפוצה במתמטיקה. רואים אותה? קחו רגע לחשוב על זה.

השגיאה היא בכך שכתבתי

{::nomarkdown}\(f^{\prime}\left(c\right)=\frac{f\left(b\right)-f\left(a\right)}{b-a}\){:/nomarkdown}

{::nomarkdown}\(g^{\prime}\left(c\right)=\frac{g\left(b\right)-g\left(a\right)}{b-a}\){:/nomarkdown}

כך שבשתי המשוואות הללו מופיע <strong>אותו</strong> ערך {::nomarkdown}\(c\){:/nomarkdown}. זה <strong>לא</strong> מה שמשפט הערך הממוצע של לגראנז' מבטיח! הוא מבטיח שעבור {::nomarkdown}\(f\){:/nomarkdown} קיים קבוע {::nomarkdown}\(c_{f}\){:/nomarkdown} כך ש-{::nomarkdown}\(f^{\prime}\left(c_{f}\right)=\frac{f\left(b\right)-f\left(a\right)}{b-a}\){:/nomarkdown}, ועבור {::nomarkdown}\(g\){:/nomarkdown} קיים קבוע {::nomarkdown}\(c_{g}\){:/nomarkdown} כך ש-{::nomarkdown}\(g^{\prime}\left(c_{g}\right)=\frac{g\left(b\right)-g\left(a\right)}{b-a}\){:/nomarkdown}, אבל שום דבר לא מבטיח לנו {::nomarkdown}\(c_{f}=c_{g}\){:/nomarkdown}; אנחנו צריכים איכשהו להפעיל את משפט לגראנז' <strong>סימולטנית</strong> לשתי הפונקציות הללו ביחד, ואין לנו את זה.

העניין הוא שלא צריך להסתבך עם לגראנז, בכלל, הנה הוכחה ישירה בעזרת משפט רול שוב (רואים? משפט רול <strong>יעיל</strong>! הוא בעצם מקפל בתוכו את כל החדו"א המורכב שנלמד עד לשלב הזה, ומרגע שיש לנו אותו צריך רק תעלולים פשוטים). נגדיר פונקציה

{::nomarkdown}\(h\left(x\right)=f\left(x\right)\left(g\left(b\right)-g\left(a\right)\right)-g\left(x\right)\left(f\left(b\right)-f\left(a\right)\right)\){:/nomarkdown}

כלומר, מאוד דומה לייצוג של המשוואה שאנחנו רוצים שתתקיים בסוף. כעת קל לראות ש-{::nomarkdown}\(h\){:/nomarkdown} היא רציפה ב-{::nomarkdown}\(\left[a,b\right]\){:/nomarkdown} וגזירה ב-{::nomarkdown}\(\left(a,b\right)\){:/nomarkdown} והנגזרת שלה היא

{::nomarkdown}\(h^{\prime}\left(x\right)=f^{\prime}\left(x\right)\left(g\left(b\right)-g\left(a\right)\right)-g^{\prime}\left(x\right)\left(f\left(b\right)-f\left(a\right)\right)\){:/nomarkdown}

וכמו כן מתקיים:

{::nomarkdown}\(h\left(a\right)=f\left(a\right)\left(g\left(b\right)-g\left(a\right)\right)-g\left(a\right)\left(f\left(b\right)-f\left(a\right)\right)=f\left(a\right)g\left(b\right)-g\left(a\right)f\left(b\right)\){:/nomarkdown}

{::nomarkdown}\(h\left(b\right)=f\left(b\right)\left(g\left(b\right)-g\left(a\right)\right)-g\left(b\right)\left(f\left(b\right)-f\left(a\right)\right)=f\left(a\right)g\left(b\right)-g\left(a\right)f\left(b\right)\){:/nomarkdown}

כלומר {::nomarkdown}\(h\left(a\right)=h\left(b\right)\){:/nomarkdown} ולכן ממשפט רול קיים {::nomarkdown}\(c\){:/nomarkdown} כך ש-{::nomarkdown}\(h^{\prime}\left(c\right)=0\){:/nomarkdown}, כלומר

{::nomarkdown}\(f^{\prime}\left(c\right)\left(g\left(b\right)-g\left(a\right)\right)-g^{\prime}\left(c\right)\left(f\left(b\right)-f\left(a\right)\right)=0\){:/nomarkdown}

וזה מה שרצינו.

נשאר רק להוכיח את כלל לופיטל בעזרת משפט הערך הממוצע של קושי. זו הוכחה קצת פחות "נקייה" ממה שראינו עד כה, אז טוב ששמרתי אותה לסוף, אבל אין בה שום דבר נוראי; פשוט, הדרך הטובה ביותר להבין מה הולך בה היא לכתוב אותה בעצמכם. כמו מה שאני עושה כרגע. כי בחיי שאין לי שמץ של מושג מה הולך בהוכחה הזו למרות שקראתי אותה לפני רגע, אבל אני יודע שהיא פשוטה ואחרי שאכתוב אותה גם אבין אותה.

ובכן, מה יש לנו? הפונקציות {::nomarkdown}\(f,g\){:/nomarkdown} שמקיימות שני דברים:
<ol>
 	<li>{::nomarkdown}\(\lim_{x\to a}f\left(x\right)=\lim_{x\to a}g\left(x\right)=0\){:/nomarkdown}</li>
 	<li>{::nomarkdown}\(\lim_{x\to a}\frac{f^{\prime}\left(x\right)}{g^{\prime}\left(x\right)}\){:/nomarkdown} קיים</li>
</ol>
הטענה השניה נותנת לנו מידע כלשהו על הנגזרות בסביבת הנקודה {::nomarkdown}\(a\){:/nomarkdown}. באופן כללי, הטענה {::nomarkdown}\(\lim_{x\to a}h\left(x\right)=L\){:/nomarkdown} אומרת שלכל {::nomarkdown}\(\varepsilon&gt;0\){:/nomarkdown} קיים {::nomarkdown}\(\delta&gt;0\){:/nomarkdown} כך שלכל {::nomarkdown}\(x\){:/nomarkdown} עבורו {::nomarkdown}\(0&lt;\left\|x-a\right\|&lt;\delta\){:/nomarkdown} מתקיים {::nomarkdown}\(\left\|h\left(x\right)-L\right\|&lt;\varepsilon\){:/nomarkdown}; בפרט, כדי שזה יתקיים, הכרחי ש-{::nomarkdown}\(h\left(x\right)\){:/nomarkdown} תהיה מוגדרת לכל {::nomarkdown}\(x\){:/nomarkdown} עבורו {::nomarkdown}\(0&lt;\left\|x-a\right\|&lt;\delta\){:/nomarkdown}. החריג היחיד הוא הנקודה {::nomarkdown}\(a\){:/nomarkdown} עצמה, שאין לנו דרישה לגבי הערך של {::nomarkdown}\(h\){:/nomarkdown} בה. עכשיו, אצלנו {::nomarkdown}\(h\left(x\right)=\frac{f^{\prime}\left(x\right)}{g^{\prime}\left(x\right)}\){:/nomarkdown}, כך שאנחנו יודעים שקיים {::nomarkdown}\(\delta\){:/nomarkdown} עבורו אם {::nomarkdown}\(0&lt;\left\|x-a\right\|&lt;\delta\){:/nomarkdown} אז {::nomarkdown}\(\frac{f^{\prime}\left(x\right)}{g^{\prime}\left(x\right)}\){:/nomarkdown} קיים; כלומר גם {::nomarkdown}\(f^{\prime}\left(x\right)\){:/nomarkdown} קיימת, וגם {::nomarkdown}\(g^{\prime}\left(x\right)\){:/nomarkdown} קיימת <strong>ושונה מאפס</strong>.

הרעיון עכשיו הוא לקחת {::nomarkdown}\(x\){:/nomarkdown} כלשהו עבורו {::nomarkdown}\(0&lt;\left\|x-a\right\|&lt;\delta\){:/nomarkdown} ולהפעיל את משפט הערך הממוצע של קושי על הקטע שקצוותיו הם {::nomarkdown}\(a\){:/nomarkdown} ו-{::nomarkdown}\(x\){:/nomarkdown}. יש כאן שני מקרים: כאשר {::nomarkdown}\(a&lt;x\){:/nomarkdown} וכאשר {::nomarkdown}\(a&gt;x\){:/nomarkdown}, אבל מן הסתם מה שיקרה בהם יהיה סימטרי אז נניח ש-{::nomarkdown}\(a&lt;x\){:/nomarkdown}. עכשיו צריך שני דברים: ש-{::nomarkdown}\(f,g\){:/nomarkdown} יהיו <strong>רציפות</strong> ב-{::nomarkdown}\(\left[a,x\right]\){:/nomarkdown}, ושיהיו <strong>גזירות</strong> ב-{::nomarkdown}\(\left(a,x\right)\){:/nomarkdown}. את הדבר השני כבר יש לנו, ואנחנו גם יודעים שהפונקציות גזירות ב-{::nomarkdown}\(x\){:/nomarkdown} ולכן הן רציפות שם; הקושי היחיד הוא ב-{::nomarkdown}\(a\){:/nomarkdown}. אנחנו יודעים ש-{::nomarkdown}\(\lim_{x\to a}f\left(x\right)=\lim_{x\to a}g\left(x\right)=0\){:/nomarkdown} ולכן כדי שהפונקציות הללו יהיו רציפות ב-{::nomarkdown}\(a\){:/nomarkdown} צריך להתקיים {::nomarkdown}\(f\left(a\right)=g\left(a\right)=0\){:/nomarkdown}; אבל אם זה לא מתקיים, הן לא יהיו רציפות שם. לכן נכריח את זה לקרות - <strong>נגדיר מחדש</strong> את הפונקציות הללו ב-{::nomarkdown}\(a\){:/nomarkdown} על ידי {::nomarkdown}\(f\left(a\right)=g\left(a\right)=0\){:/nomarkdown}. האם ההגדרה מחדש הזו תיצור לנו בעיות? עוד מעט נחזור לשאלה הזו כדי לראות למה אין בעיות.

עכשיו אפשר להשתמש במשפט הערך הממוצע של קושי ולקבל את הקיום של {::nomarkdown}\(c\in\left(a,x\right)\){:/nomarkdown} שעבורו מתקיים

{::nomarkdown}\(f^{\prime}\left(c\right)\left(g\left(x\right)-g\left(a\right)\right)=g^{\prime}\left(c\right)\left(f\left(x\right)-f\left(a\right)\right)\){:/nomarkdown}

ומכיוון ש-{::nomarkdown}\(f\left(a\right)=g\left(a\right)=0\){:/nomarkdown} אפשר לפשט קצת ולכתוב

{::nomarkdown}\(f^{\prime}\left(c\right)g\left(x\right)=g^{\prime}\left(c\right)f\left(x\right)\){:/nomarkdown}

ואם נחלק, נקבל

{::nomarkdown}\(\frac{f\left(x\right)}{g\left(x\right)}=\frac{f^{\prime}\left(c\right)}{g^{\prime}\left(c\right)}\){:/nomarkdown}

שכבר קצת מזכיר את המבנה של כלל לופיטל. אבל רגע אחד! אם אני מחלק בדברים, צריך לוודא שהם שונים מאפס! לגבי {::nomarkdown}\(g^{\prime}\left(c\right)\){:/nomarkdown} כבר ראינו את זה בהתחלה. מה לגבי {::nomarkdown}\(g\left(x\right)\){:/nomarkdown}? ובכן, אם היה מתקיים {::nomarkdown}\(g\left(x\right)=0=g\left(a\right)\){:/nomarkdown} אז אפשר היה להשתמש במשפט רול כדי למצוא נקודה בין {::nomarkdown}\(a\){:/nomarkdown} ל-{::nomarkdown}\(x\){:/nomarkdown} שבה {::nomarkdown}\(g^{\prime}\){:/nomarkdown} שווה לאפס, וכבר ראינו שזה לא יכול לקרות.

עכשיו אפשר לסכם, עם טיעון קצת עדין שאפשר לנסח בחופזה בתור "מכיוון ש-{::nomarkdown}\(c\){:/nomarkdown} נמצא ב-{::nomarkdown}\(\left(a,x\right)\){:/nomarkdown} אז כאשר {::nomarkdown}\(x\){:/nomarkdown} שואף ל-{::nomarkdown}\(a\){:/nomarkdown} כך גם {::nomarkdown}\(c\){:/nomarkdown}, ולכן {::nomarkdown}\(\lim_{x\to a}\frac{f\left(x\right)}{g\left(x\right)}\){:/nomarkdown} שווה ל-{::nomarkdown}\(\lim_{c\to a}\frac{f^{\prime}\left(c\right)}{g^{\prime}\left(c\right)}\){:/nomarkdown} כמבוקש". אני ממליץ לכם לנסות להשלים את הפרטים בעצמכם כדי לקבל את תחושת ה"למה זה נכון" אבל הנה הפירוט הטכני בכל מקרה:

פתחנו עם הנתון לפיו {::nomarkdown}\(\lim_{x\to a}\frac{f^{\prime}\left(x\right)}{g^{\prime}\left(x\right)}\){:/nomarkdown} קיים; בואו ואסמן אותו {::nomarkdown}\(L=\lim_{x\to a}\frac{f^{\prime}\left(x\right)}{g^{\prime}\left(x\right)}\){:/nomarkdown}. אני רוצה להוכיח שגם {::nomarkdown}\(\lim_{x\to a}\frac{f\left(x\right)}{g\left(x\right)}=L\){:/nomarkdown}, ואני אעשה את זה לפי הספר עם הגדרת האפסילון-דלתא הסטנדרטית. יהא אם כן {::nomarkdown}\(\varepsilon&gt;0\){:/nomarkdown} כלשהו. מכיוון ש-{::nomarkdown}\(L=\lim_{x\to a}\frac{f^{\prime}\left(x\right)}{g^{\prime}\left(x\right)}\){:/nomarkdown} אז קיים {::nomarkdown}\(\delta&gt;0\){:/nomarkdown} כך שאם {::nomarkdown}\(0&lt;\left\|x-a\right\|&lt;\delta\){:/nomarkdown} אז מתקיים {::nomarkdown}\(\left\|\frac{f^{\prime}\left(x\right)}{g^{\prime}\left(x\right)}-L\right\|&lt;\varepsilon\){:/nomarkdown}. אני טוען שאותו {::nomarkdown}\(\delta\){:/nomarkdown} יוכיח ש-{::nomarkdown}\(\lim_{x\to a}\frac{f\left(x\right)}{g\left(x\right)}=L\){:/nomarkdown}; כלומר, אני צריך להראות שאם {::nomarkdown}\(0&lt;\left\|x-a\right\|&lt;\delta\){:/nomarkdown} אז {::nomarkdown}\(\left\|\frac{f\left(x\right)}{g\left(x\right)}-L\right\|&lt;\varepsilon\){:/nomarkdown}.

עכשיו, הוכחנו קודם כי על פי משפט הערך הממוצע, קיים {::nomarkdown}\(c\){:/nomarkdown} כך ש-{::nomarkdown}\(c\in\left(a,x\right)\){:/nomarkdown} (או {::nomarkdown}\(c\in\left(x,a\right)\){:/nomarkdown} אם {::nomarkdown}\(x&lt;a\){:/nomarkdown}) כך ש-{::nomarkdown}\(\frac{f\left(x\right)}{g\left(x\right)}=\frac{f^{\prime}\left(c\right)}{g^{\prime}\left(c\right)}\){:/nomarkdown}. מכיוון ש-{::nomarkdown}\(a&lt;c&lt;x\){:/nomarkdown} ו-{::nomarkdown}\(\left\|x-a\right\|&lt;\delta\){:/nomarkdown} אז גם {::nomarkdown}\(\left\|c-a\right\|&lt;\delta\){:/nomarkdown} ולכן {::nomarkdown}\(\left\|\frac{f^{\prime}\left(c\right)}{g^{\prime}\left(c\right)}-L\right\|&lt;\varepsilon\){:/nomarkdown} ולכן {::nomarkdown}\(\left\|\frac{f\left(x\right)}{g\left(x\right)}-L\right\|&lt;\varepsilon\){:/nomarkdown} כמבוקש, מה שמסיים את ההוכחה.

זה זמן טוב לסיים בו את הפוסט, אבל כרגיל - זה רק קצה הקרחון של השימושים במשפט הערך הממוצע, וזה פשוט ששולי הבלוג הזה צרים מלהכילם.
