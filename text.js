const textarea = document.getElementById("textarea");  
const filename = document.getElementById("filename-input");


function fontsize(e)  //e = short form of an event 
{
    let value = e.value;
    textarea.style.fontSize = value + "px"  
   
} 
// font size property : sets or returns the font size of the text
// syntax : object.style.fontSize = "value|initial|inherit"


function bold(e)
{
    let selection = document.getSelection();
    let selRange = selection.getRangeAt(0);

    if(textarea.style.fontWeight == "bold")
    {
       textarea.style.fontWeight = "normal";
    }
    else
    {
       textarea.style.fontWeight = "bold";   
    }
} 
// font weight property : sets or returns how thick or thin characters in a text should be displayed
// syntax : object.style.fontWeight = "normal|lighter|bold|bolder|value|initial|inherit"


function italic(e)
{
    if(textarea.style.fontStyle == "italic")
    {
        textarea.style.fontStyle = "normal";
    }
    else
    {
        textarea.style.fontStyle = "italic";
    }
}
// font style property : sets or returns whether the style of the font is normal, italic or oblique
// syntax : object.style.fontStyle = "normal|italic|oblique|initial|inherit"


function underline(e)
{
    if(textarea.style.textDecoration == "underline")
    {
        textarea.style.textDecoration = "none";
    }
    else
    {
        textarea.style.textDecoration = "underline";
    }
} 
// textDecoration property : sets or returns one ore more decorations for a text.
// syntax : object.style.textDecoration = "none|underline|overline|line-through|blink|initial|inherit"


function justify_left(e)
{
    textarea.style.textAlign = "left";
}

function justify_center(e)
{
    textarea.style.textAlign = "center";
}

function justify_right(e)
{
    textarea.style.textAlign = "right";
} 

function full(e)
{
    textarea.style.textAlign = "justify";
} 
// textalign property : sets or returns the horizontal alignment of text in a block level element
// syntax : object.style.textAlign = "left|right|center|justify|initial|inherit"


function capital(e)
{
    if(textarea.style.textTransform == "uppercase")
    {
        textarea.style.textTransform = "none";
    }
    else
    {
        textarea.style.textTransform = "uppercase";
    }
}

function erase()
{
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textTransform = "capitalize";
    textarea.value = "";
}

function font_color(e)
{
    let value = e.value;
    textarea.style.color = value;
}
// color property : 
// syntax : object.style.color = "color|initial|inherit"


function pdfgenerat(){
    var element = document.getElementById('textarea');
html2pdf(element).save(filename.value);
}

// html2pdf.js is a java script library for saving content as pdf