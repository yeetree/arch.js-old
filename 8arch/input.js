keys = [];
keystr = "";
currentkey = "";
 
keyDown = function keyDown(e){
    keystr += e.key.toString() + ","
    keys = keystr.split(",");
    this.currentkey = e.key.toString();
};
keyUp = function keyUp(e){
    keystr.replace(e.key.toString, "");
    keys = keystr.split(",");
    this.currentkey = "";   
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