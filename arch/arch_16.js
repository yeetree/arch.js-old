class arch_16
{
    bootRead = 512;
    gfx;
    ram;
    store;
    input;

    init = function init()
    {
        this.ram = setSameArrays(this.store.memory, this.ram.memory, 0, this.bootRead - 1)
    }
    
    arch_v1 = function arch_1()
    {
        let ramOff = 0;
        for(let i = 0; i < this.ram.memory.length; i++)
        {
            switch(this.ram.memory[i]){
                case 0:
                    break;
                case 1:
                    this.ram.set(this.ram.get(this.ram.get(i + 1)), this.ram.get(i + 2));
                    i+=2;
                    break;
                case 2:
                    this.ram.set(this.ram.get(this.ram.get(i + 1)), this.ram.get(this.ram.get(i + 2)));
                    i+=2;
                    break;
                case 3:
                    temp = this.ram.get(this.ram.get(i + 2));
                    this.ram.set(this.ram.get(this.ram.get(i + 2)), this.ram.get(this.ram.get(i + 1)));
                    this.ram.set(this.ram.get(this.ram.get(i + 1)), temp);
                    i+=2;
                    break;
                case 4:
                    this.ram.set(this.ram.get(this.ram.get(i + 1)), this.ram.get(this.ram.get(i + 1)) + this.ram.get(this.ram.get(i + 2)));
                    i+=2;
                    break;
                case 5:
                    this.ram.set(this.ram.get(this.ram.get(i + 1)), this.ram.get(this.ram.get(i + 1)) - this.ram.get(this.ram.get(i + 2)));
                    i+=2;
                    break;
                case 6:
                    this.ram.set(this.ram.get(this.ram.get(i + 1)), this.ram.get(this.ram.get(i + 1)) * this.ram.get(this.ram.get(i + 2)));
                    i+=2;
                    break;
                case 7:
                    this.ram.set(this.ram.get(this.ram.get(i + 1)), this.ram.get(this.ram.get(i + 1)) / this.ram.get(this.ram.get(i + 2)));
                    i+=2;
                    break;

                case 8:
                    this.gfx.vram.set(this.ram.get(this.ram.get(i + 1)), this.ram.get(this.ram.get(i + 2)));
                    i+=2;
                    break;
                case 9:
                    temp = this.gfx.vram.get(this.ram.get(i + 1));
                    this.gfx.vram.set(this.ram.get(this.ram.get(i + 1)), this.ram.get(this.ram.get(i + 2)))
                    this.ram.set(this.ram.get(this.ram.get(i + 1)), temp);
                    i+=2;
                    break;
                

                case 10:
                    this.gfx.vram.set(this.gfx.vram.get(this.gfx.vram.get(i + 1)), this.gfx.vram.get(i + 2));
                    i+=2;
                    break;
                case 11:
                    this.gfx.vram.set(this.gfx.vram.get(this.gfx.vram.get(i + 1)), this.gfx.vram.get(this.gfx.vram.get(i + 2)));
                    i+=2;
                    break;
                case 12:
                    temp = this.gfx.vram.get(this.gfx.vram.get(i + 2));
                    this.gfx.vram.set(this.gfx.vram.get(this.gfx.vram.get(i + 2)), this.gfx.vram.get(this.gfx.vram.get(i + 1)));
                    this.gfx.vram.set(this.gfx.vram.get(this.gfx.vram.get(i + 1)), temp);
                    i+=2;
                    break;
                case 13:
                    this.gfx.vram.set(this.gfx.vram.get(this.gfx.vram.get(i + 1)), this.gfx.vram.get(this.gfx.vram.get(i + 1)) + this.ram.get(this.ram.get(i + 2)));
                    i+=2;
                    break;
                case 14:
                    this.gfx.vram.set(this.gfx.vram.get(this.gfx.vram.get(i + 1)), this.gfx.vram.get(this.gfx.vram.get(i + 1)) - this.ram.get(this.ram.get(i + 2)));
                    i+=2;
                    break;
                case 15:
                    this.gfx.vram.set(this.gfx.vram.get(this.gfx.vram.get(i + 1)), this.gfx.vram.get(this.gfx.vram.get(i + 1)) * this.ram.get(this.ram.get(i + 2)));
                    i+=2;
                    break;
                case 16:
                    this.gfx.vram.set(this.gfx.vram.get(this.gfx.vram.get(i + 1)), this.gfx.vram.get(this.gfx.vram.get(i + 1)) / this.ram.get(this.ram.get(i + 2)));
                    i+=2;
                    break;

                case 17:
                    this.ram.set(this.ram.get(this.ram.get(i + 1)), this.gfx.vram.get(this.ram.get(i + 2)));
                    i+=2;
                    break;
                case 18:
                    temp = this.ram.get(this.ram.get(i + 1));
                    this.ram.set(this.ram.get(this.ram.get(i + 1)), this.vram.get(this.ram.get(i + 2)))
                    this.vram.set(this.ram.get(this.ram.get(i + 2)), temp);
                    i+=2;
                    break;

                case 19:
                    this.gfx.update();
                    break
                
                case 20:
                    while(this.input.currentkey = "")
                    {
                        //Literally nothing
                    }
                    this.ram.set(this.ram.get(this.ram.get(i + 1)), this.input.currentkey.charCodeAt());
                    break;
                case 21:
                    while(parseInt(this.input.currentkey) == NaN)
                    {
                        //Literally nothing
                    }
                    this.ram.set(this.ram.get(this.ram.get(i + 1)), parseInt(this.input.currentkey));
                    break;
                case 21:
                    while(parseInt(this.input.currentkey) == NaN || ((parseInt(this.input.currentkey) < this.ram.get(this.ram.get(i + 1)) || parseInt(this.input.currentkey) < this.ram.get(this.ram.get(i + 2)))))
                    {
                        //Literally nothing
                    }
                    this.ram.set(this.ram.get(this.ram.get(i + 1)), parseInt(this.input.currentkey));
                    break;
                
            }
        }
    }
}

function setSameArrays(a,b,c,d)
{
    e = a.split(c,d);
    for(let i = 0; i < a.length; i++)
    {
        b[i] = e[i];
    }
    return b;
}