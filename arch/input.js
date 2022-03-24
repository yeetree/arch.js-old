keys = [];
keystr = "";
currentkey = "";
 
keyDown = function keyDown(e){
    this.keystr += e.key.toString() + ","
    this.keys = keystr.split(",");
    if(e.location = 0)
    {
        this.currentkey = e.key.toString();
    }
};


keyUp = function keyUp(e){
    this.keystr.replace(e.key.toString() + ",", "");
    this.keys = keystr.split(",");
    if(this.currentkey == e.key.toString())
    {
        this.currentkey = "";
    }
};

input_init = function init()
{
    window.addEventListener("keydown",
        function(e)
        {
            if(isFocus)
            {
                keyDown(e);
            }
        },
    false);

    window.addEventListener('keyup',
        function(e)
        {
            if(isFocus)
            {
                keyUp(e);
            }
        },
    false);
}