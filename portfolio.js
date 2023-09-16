let  i=document.getElementById("button");
let  d=document.getElementById("button_for_media");

function hover(){
    if(d.style.visibility=="visible"){
        d.style.visibility="hidden";
        d.style.height="0px";
    }
    else{
        d.style.visibility="visible";
        d.style.height="fit-content";
    }
}
// scrolldown
function go_down_resume(){
    var r=document.getElementById("resume_section");
    r.scrollIntoView({behavior: "smooth"});
    flip_resume();
    
}
function go_down_about(){
    var a=document.getElementById("about_section");
    a.scrollIntoView({behavior: "smooth"});
    flip_about()
}
function go_down_project(){
    var p=document.getElementById("project_section");
    p.scrollIntoView({behavior: "smooth"});
    flip_project()
}
function go_down_contact(){
    var c=document.getElementById("contact_section");
    c.scrollIntoView({behavior: "smooth"});
    flip_contact();
}
function go_down_skill(){
    var sk=document.getElementById("skill_section");
    sk.scrollIntoView({behavior: "smooth"});
    flip_skill();
}
// about 
function flip_about(){
    var flip_about=document.getElementById("about_flip");
   var  flip_about_containt=document.getElementById("flip_about_containt");

    if(flip_about.style.transform=="scaleY(-1)"){
        flip_about.style.transform="scaleY(1)";
    }
    else{
        flip_about.style.transform="scaleY(-1)";
    }

    if(flip_about_containt.style.display=="none"){
        flip_about_containt.style.display="block";
    }
    else{
        flip_about_containt.style.display="none";
    }
}

// resume 
function flip_resume(){
    var flip_resume=document.getElementById("resume_flip");
    var flip_resume_containt=document.getElementById("flip_resume_containt");
    if(flip_resume.style.transform=="scaleY(-1)"){
        flip_resume.style.transform="scaleY(1)";
    }
    else{
        flip_resume.style.transform="scaleY(-1)";
    }

    if(flip_resume_containt.style.display=="none"){
        flip_resume_containt.style.display="flex";
    }
    else{
        flip_resume_containt.style.display="none";
    }
}

// contact 
function flip_contact(){
    var flip_contact=document.getElementById("contact_flip");
    var flip_contact_containt=document.getElementById("flip_contact_containt");
    if(flip_contact.style.transform=="scaleY(-1)"){
        flip_contact.style.transform="scaleY(1)";
    }
    else{
        flip_contact.style.transform="scaleY(-1)";
    }

    if(flip_contact_containt.style.display=="none"){
        flip_contact_containt.style.display="flex";
    }
    else{
        flip_contact_containt.style.display="none";
    }
}

// skill 
function flip_skill(){
    var flip_skill=document.getElementById("skill_flip");
    var flip_skill_containt=document.getElementById("flip_skill_containt");

    if(flip_skill.style.transform=="scaleY(-1)"){
        flip_skill.style.transform="scaleY(1)";
    }
    else{
        flip_skill.style.transform="scaleY(-1)";
    }

    if(flip_skill_containt.style.display=="none"){
        flip_skill_containt.style.display="flex";
    }
    else{
        flip_skill_containt.style.display="none";
    }
}

// project 
function flip_project(){
    var flip_project=document.getElementById("project_flip");
   var flip_project_containt=document.getElementById("flip_project_containt");

    if(flip_project.style.transform=="scaleY(-1)"){
        flip_project.style.transform="scaleY(1)";
    }
    else{
        flip_project.style.transform="scaleY(-1)";
    }

    if(flip_project_containt.style.display=="none"){
        flip_project_containt.style.display="flex";
        flip_project_containt.style.justifyContent="space-between";
    }
    else{
        flip_project_containt.style.display="none";
    }
}