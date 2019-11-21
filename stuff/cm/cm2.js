dojo.require("dojo._base.html");
dojo.require("dijit.form.Textarea");
dojo.require("dijit.InlineEditBox");
dojo.require("dojo.fx")
dojo.require("dijit.layout.BorderContainer");
dojo.require("dijit.layout.ContentPane");


var SPORT_TEAM=394902;
var TIZMORET=394582;
var BINARY="בינארי";




String.prototype.reverse = function(){
    splitext = this.split("");
    revertext = splitext.reverse();
    reversed = revertext.join("");
    return reversed;
}


function roundBy(num, decimals) {
    var v = Math.pow(10,decimals);
    return Math.round(num*v)/v;
}


function addCourse(container, num, points, name, grade) {
    var class_name="course";
    if (grade == "-") {class_name="non-complete"; grade="";}
    if (grade == "רבע") {grade=BINARY;}
    var ul = dojo.create("ul", {class:class_name});
    dojo.place(ul, container, "last");
    dojo.create("li", { innerHTML: num}, ul);
    dojo.create("li", { innerHTML: name}, ul);
    dojo.create("li", { innerHTML: points}, ul);
    var grade_li = dojo.create("li", {}, ul);
    var grade_span = dojo.create("span", {class : "grade" , innerHTML: grade}, grade_li);
    new dijit.InlineEditBox({autoSave: true, onChange : function(value) {
            if ((value=="-") || (value == "")) ul.className="non-complete";
            else ul.className="course";
            updateSemester(container);
        }}, grade_span);


    if (container != dojo.byId("ptorim")) updateSemester(container);
}


function addSemester() {
    var sem = dojo.create("li", {class:"semester"}, semesters, "last");
    var title = dojo.create("ul", {class:"semesterTitle"}, sem, "last");
    dojo.create("li", { innerHTML: "מס' קורס", style:"width:80px;"}, title);
    dojo.create("li", { innerHTML: "שם הקורס"}, title);
    dojo.create("li", { innerHTML: "נק'", style:"width:60px;"}, title);
    dojo.create("li", { innerHTML: "ציון", style:"width:50px;" }, title);
  
  
    updateSemester(sem);
    return sem;
}


function parseCourse(item) {
    var data=new Object();
    if (item) {
        data.points=item[2].innerHTML*1
        data.number=item[0].innerHTML*1;
        data.grade=dojo.query(".grade",item[3])[0].innerHTML;
    }
    return data;
}


function updateSemester(sem) {
    var sum=dojo.query(".semesterSum", sem)[0];
    if (sum != undefined) {dojo.destroy(sum);}
    var CourseByNum = new Object();
  
  
    var points=0; var grades=0; var binary=0; var fail=0;
    var courses=dojo.query("ul.course", sem);
    for (var i=0; i<courses.length; i++) {
        var data = parseCourse(dojo.query("li",courses[i]));
        CourseByNum[data.number]=data;
    }
  
  
    for (var i in CourseByNum) {
        var course=CourseByNum[i];
        if (course.grade==BINARY) {
            binary+=course.points;
        }
        else {
            grades+=course.grade*course.points;
            points+=course.points;
            if (course.grade*1<55) {
		fail+=course.points;
            }
        }
    }
  
  
    var points2=points;
    var NC=dojo.query("ul.non-complete", sem);
    for (var i=0; i<NC.length; i++) {
        var data=parseCourse(dojo.query("li", NC[i]));
        if (!(CourseByNum[data.number])) points2+=data.points;;
    }
  
  
    if (points==0) {grades=0;}
    else {grades=roundBy(grades/points,2);}
    points-=fail;
    if (points2>points) {points=""+(points+binary)+"/"+(points2+binary);}
    else {points+=binary;}


    sum = dojo.create("ul", {class:"semesterSum"}, sem, "last");
    dojo.create("li", { innerHTML: "", class: "hide"}, sum);
    dojo.create("li", { innerHTML: "סה\"כ"}, sum);
    dojo.create("li", { innerHTML: points}, sum);
    dojo.create("li", { innerHTML: grades }, sum);
  
  
    dojo.style(sum, "opacity", "0");
    dojo.fadeIn({node:sum, duration:1000}).play();
  
  
    sumTotal();
}


function parseInput() {
    dojo.byId("inputDiv").style.display="none";
    var sem=undefined; var count=0;
  
  
    var semesterRE=/ןויצ\s+\.קנ\s+עוצקמ םש/;
    var englishRE=/דוקינ םע רוטפ\s+3.0\s+תינכט תילגנא/;
    var courseRE=/^(\d+|-|רבע)\s+\*?\s*(\d+\.\d)\s+(.+)\s+(\d+)$/;
    var ptorRE=/^(דוקינ םע רוטפ)\s+\*?\s*(\d+\.\d)\s+(.+)\s+(\d+)$/;  
  
  
    var input = dojo.byId("mainIn").value.split("\n");
    for (var i=0; i<input.length; i++) {
        var line=input[i];
        if (semesterRE.test(line)) {
            if ((sem != undefined) && (count==0)) {dojo.destroy(sem);}
            sem=addSemester(); 
            continue;
        }
        if ((sem != undefined) && (courseRE.test(line))) {
            var data = courseRE.exec(line);
            addCourse(sem, data[4], data[2], data[3].reverse(), data[1]);
            count++;
            continue;
        }
        if (ptorRE.test(line)) {
            var ptorim=dojo.byId("ptorim");
            if (!(ptorim)) {
		if (sem) {
	  	  dojo.destroy(sem);
	  	  sem=undefined;
		}
		ptorim = dojo.create("li", {class:"semester", id:"ptorim"}, semesters, "last");
		var title = dojo.create("ul", {class:"semesterTitle"}, ptorim, "last");
		dojo.create("li", { innerHTML: "-", class:"hide"}, title);		
		dojo.create("li", { innerHTML: "זיכויים"}, title);	
		var title = dojo.create("ul", {class:"semesterTitle"}, ptorim, "last");
		dojo.create("li", { innerHTML: "מס' קורס"}, title);
		dojo.create("li", { innerHTML: "שם הקורס"}, title);
		dojo.create("li", { innerHTML: "נק'"}, title);
		dojo.create("li", { innerHTML: "ציון" }, title);	
            }
            var data = ptorRE.exec(line);
            addCourse(ptorim, data[4], data[2], data[3].reverse(), "רבע");
            count++;
        }
    }


    if (count) {
        createSum();
        sumTotal();
        displayHint();
    }
    else dojo.byId("inputDiv").style.display="block";
}


function createSum() {
    var div=dojo.doc.createElement('div');
    div.innerHTML='<span style="display:table; margin: 0 auto;"><ul class="TotalTitle"><li>ממוצע כללי</li><li>סה"כ נקודות</li></ul><ul class="Total"><li id="TotalAvarage">1</li><li id="TotalPoints">1</li></ul></span>';
    dijit.byId("content").domNode.appendChild(div);
    Panel = new dijit.layout.ContentPane({region:'top', id: 'topLeft'}, div);
    dijit.byId("content").addChild(Panel);
}


function sumTotal() {
    var avarage=dojo.byId("TotalAvarage");
    if (!(avarage)) return;
    var CourseByNum = new Object();
    var total=dojo.byId("TotalPoints");	
    var points=0; var grades=0; var binary=0; var fail=0;
    var courses=dojo.query("ul.course");
    var team_count=0;
    for (var i=0; i<courses.length; i++) {
        var data = parseCourse(dojo.query("li",courses[i]));
        if (Math.floor(data.number/10000) == 39) {
            data.number=data.number+"-"+team_count;
            team_count++;
        }
        CourseByNum[data.number]=data;
    }
  
  
    for (var i in CourseByNum) {
        var course = CourseByNum[i];
        if (course.grade==BINARY) {
            binary+=course.points;
        }
        else {
            grades+=course.grade*course.points;
            points+=course.points;
            if (course.grade*1<55) {
		fail+=course.points;
            }
        }
    }
  
  
  
  
    avarage.innerHTML=roundBy(grades/points,2);
    total.innerHTML=points-fail+binary;	
  
  
    dojo.style(avarage, "opacity", "0");
    dojo.fadeIn({node:avarage, duration:1000}).play();
    dojo.style(total, "opacity", "0");
    dojo.fadeIn({node:total, duration:1000}).play();
}


function displayHint() {
    var hint=dojo.byId("hint");
    dojo.style(hint, "opacity", "0");
    dojo.style(hint, "display", "block");
    hint.innerHTML="כדי לשנות ציון בקורס - ללחוץ על הציון";
    dojo.fadeIn({node:hint, duration:1000}).play();  
    dojo.animateProperty({node:hint, properties: {height: 0, padding: {start:12, end:0, units:"px"}, opacity:{start:1, end:0}, duration:1000}}).play(8000);
}


dojo.addOnLoad(function(){
    dojo.byId("loading").style.display="none";
    dojo.byId("inputDiv").style.display="block";
    dojo.byId("bottomLeft").style.display="block";		
    dojo.byId("mainIn").focus();
});
