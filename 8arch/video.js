var isFocus = false;

class video {
    lines = 24;
    columns = 80;
    vram = [];
    console;
    text;
    init = function init()
    {
        this.vram = []
        this.console = document.getElementById("8arch");
        this.console.removeChild(this.console.firstChild);
        this.text = document.createElement("textarea");
        this.text.cols = this.columns;
        this.text.rows = this.lines;
        this.text.readOnly = true;
        this.text.style.resize = "none";
        this.text.onfocus = function(){isFocus = true; console.log("Focus: " + isFocus)};
        this.text.onblur = function(){isFocus = false; console.log("Focus: " + isFocus)};
        this.console.appendChild(this.text);
        this.update();
    }
    
    update = function update()
    {
        var temp_vram = "";
        for(let i = 0; i < this.vram.length; i++)
        {
            if(this.vram[i] == undefined)
            {
               this.vram[i] = ""; 
            }
            temp_vram += this.vram[i] + "\n"
        }
        this.text.value = temp_vram;
        this.text.scrollTop = this.text.scrollHeight;
    }
}