var isFocus = false;

class video {
    lines = 24;
    columns = 80;
    console;
    text;
    vram = new videoMemory;
    init = function init()
    {
        this.vram.init();
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
        for(let i = 0; i < this.vram.memory.length; i++)
        {

            temp_vram += String.fromCharCode(this.vram.get(i));
        }
        this.text.value = temp_vram;
        this.text.scrollTop = this.text.scrollHeight;
    }
}

class videoMemory
{
    memorySize = 2**16;
    memory = [];
    lines = [0]
    set = function setMemory(loc, val)
    {
        loc = limitNumber(loc, 0, this.memorySize);
        val = limitNumber(val, 0, this.memorySize);
        this.memory[loc] = val;
    }
    get = function setMemory(loc)
    {
        loc = limitNumber(loc, 0, this.memorySize);
        if(this.memory.length < loc)
        {
            return "";
        }
        return this.memory[loc];
    }
    getLineLoc = function getLineLoc(line)
    {
        let line_temp = [0];
        for(let i = 0; i < this.memory.length; i++)
        {
            if(this.memory[i] == (10 || "10"))
            {
                line_temp.concat(i);
            }
        }
        this.lines = line_temp;

        if(line == (0 || this.lines.length))
        {
            return [line, this.memory.length];
        }
        else if(line < this.lines);
        {
            return [this.lines[line], this.lines[line + 1] - 1]
        }

    }
    init = function init()
    {
        this.memory = [];
    }
}