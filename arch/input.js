class input {
    key;
    keys = [];
    readKey = false;

    text = "notmade";
    
    /*
    keydown = function(e) {
        let ekey = e.key.toString();
        self.key = ace.indexOf(ekey);
        self.keys[ace.indexOf(ekey)] = true;
        if(self.readKey)
        {
            console.log(ekey + ": down");
        }
    }
    keyup = function(e) {
        let ekey = e.key;
        if(e.target.key == ekey)
        {
            self.key = "";
        }
        self.keys[ace.indexOf(ekey)] = false;
        if(self.readKey)
        {
            console.log(ekey + ": up");
        }
    }
    */

    init = function ()
    {
        this.key = undefined;
        this.keys = [];
        this.keys.length = ace.length;
        this.keys.fill(false);

        var self = this;

        this.text.addEventListener("keydown", e => {
            let ekey = e.key.toString();
            self.key = ace.indexOf(ekey);
            self.keys[ace.indexOf(ekey)] = true;
            if(self.readKey)
            {
                console.log(ekey + ": down");
            }
        });
        this.text.addEventListener("keyup", e => {
            let ekey = e.key;
            if(ace[self.key] == ekey)
            {
                self.key = -1;
            }
            self.keys[ace.indexOf(ekey)] = false;
            if(self.readKey)
            {
                console.log(ekey + ": up");
            }
        });
    }
}