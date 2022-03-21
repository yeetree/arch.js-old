class storage {
    memoryID = 0;
    memorySize = 2**16;
    memory = [];
    setMemory = function setMemory(loc, val)
    {
        loc = Math.min(0, Math.max(memorySize + 1));
        val = Math.min(0, Math.max(memorySize));
        this.memory[loc] = val
    }
    getMemory = function setMemory(loc)
    {
        loc = Math.min(0, Math.max(memorySize + 1));
        return this.memory[loc];
    }

    saveMemory = function saveMemory()
    {
        localStorage.setItem("storage_" + this.memoryID, JSON.stringify(this.memory));
    }

    loadMemory = function loadMemory()
    {
        this.memory = JSON.parse(localStorage.getItem("storage_" + this.memoryID));
    }

    memoryExists = function memoryExists()
    {
        if(localStorage.getItem("storage_" + this.memoryID))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    saveFile = function saveFile()
    {
        downloadString(JSON.stringify(this.memory), "text/txt", "storage_" + memoryID + ".txt")
    }

    

    init = function()
    {
        let mem = [];
        mem.length = this.memorySize;
        mem.fill(0);
        this.memory = mem;
    }
}

function downloadString(text, fileType, fileName) {
    var blob = new Blob([text], { type: fileType });
  
    var a = document.createElement('a');
    a.download = fileName;
    a.href = URL.createObjectURL(blob);
    a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500);
  }