class arch_16 {

    video;
    memory;
    storage;
    input;

    funcs;

    init = function () {
        this.memory = new memory;
        this.video = new video;
        this.storage = new storage;
        this.input = new input;

        this.funcs = new arch16_funcs;

        this.memory.init();
        this.video.init();
        this.storage.init();
        this.input.text = this.video.text;
        //this.input.readKey = true;
        this.input.init();

        this.funcs.vid = this.video;
        this.funcs.vidmem = this.video.memory;
        this.funcs.mem = this.memory;
        this.funcs.store = this.storage;
        this.funcs.inp = this.input;

        this.arch16();
    }

    arch16 = function()
    {

        let temp;

        //Load Master Boot Record
        for(let i = 0; i < 512; i++)
        {
            this.memory.set(i, this.storage.memory.get(i));
        }
        //Excecute
        for(let i = 0; i < this.memory.data.length; i++)
        {
            switch(this.memory.get(i))
            {
                case 0:
                    break;
                case 1:
                    i = this.funcs.set(i);
                    break;
                case 2:
                    i = this.funcs.move(i);
                    break;
                case 3:
                    i = this.funcs.add(i);
                    break;
                case 4:
                    i = this.funcs.sub(i);
                    break;
                case 5:
                    i = this.funcs.mul(i);
                    break;
                case 6:
                    i = this.funcs.div(i);
                    break;
                case 7:
                    i = this.funcs.movev(i);
                    break;
                case 9:
                    i = this.funcs.vset(i);
                    break;
                case 0:
                    i = this.funcs.vmove(i);
                    break;
                case 10:
                    i = this.funcs.vadd(i);
                    break;
                case 11:
                    i = this.funcs.vsub(i);
                    break;
                case 12:
                    i = this.funcs.vmul(i);
                    break;
                case 13:
                    i = this.funcs.vdiv(i);
                    break;
                case 14:
                    i = this.funcs.mover(i);
                    break;
                case 15:
                    i = this.funcs.update(i);
                    break;
                
            }
        }
    }
}

let arch = new arch_16;
arch.init();