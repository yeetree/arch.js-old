// Arch.js Video

class video
{
    cols = 80;
    rows = 24;

    lineLoc = [0];

    memory;

    console;
    consoleDiv = "video";
    text = "notmade";

    init = function ()
    {
        this.memory = new memory;
        this.memory.init();
        this.console = document.getElementById(this.consoleDiv);
        this.console.removeChild(this.console.firstChild);
        this.text = document.createElement("textarea");
        this.text.cols = this.cols;
        this.text.rows = this.rows;
        this.text.readOnly = true;
        this.text.style.resize = "none";
        this.console.appendChild(this.text);
        this.update();
    }

    update = function ()
    {
        this.lines = [0];
        let temp = "";
        for(let i = 0; i < this.memory.data.length; i++)
        {
            if(this.memory.get(i) == 13)
            {
                this.lines.push(i);
            }
            temp += ace[this.memory.get(i)];
        }
        this.text.value = temp;
    }
}