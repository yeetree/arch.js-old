class asm
{
    insts = [
        //Standard RAM
        ["SET", 2, 0],
        ["MOVE", 2, 1],
        ["SWAP", 2, 2],
        ["ADD", 2, 3],
        ["SUB", 2, 4],
        ["MUL", 2, 5],
        ["DIV", 2, 6],
        ["MOVEV", 2, 7],
        ["SWAPV", 2, 8],
        //Video RAM
        ["VSET", 2, 9],
        ["VMOVE", 2, 10],
        ["VSWAP", 2, 11],
        ["VADD", 2, 12],
        ["VSUB", 2, 13],
        ["VMUL", 2, 14],
        ["VDIV", 2, 15],
        ["MOVER", 2, 16],
        ["SWAPR", 2, 17],
        //Video
        ["UPDATE", 0, 18]
        
    ]
    prg = [];
    lines = [];
    inst = [];
    compile = function compile(string)
    {
        this.prg = [];
        console.log(string);
        this.lines = string.split(";");
        
        for(let i = 0; i < this.lines.length; i++)
        {
            this.inst = this.lines[i].split(',');
            switch(this.inst[0].toUpperCase())
            {
                //Standard RAM
                case "SET":
                    this.prg.push(0, this.inst[i + 1], this.inst[i + 2]);
                    console.log(this.inst)
                    break;
                case "MOVE":
                    this.prg.push(1, this.inst[i + 1], this.inst[i + 2]);
                    break;
                case "SWAP":
                    this.prg.push(2, this.inst[i + 1], this.inst[i + 2]);
                    break;
                case "ADD":
                    this.prg.push(3, this.inst[i + 1], this.inst[i + 2]);
                    break;
                case "SUB":
                    this.prg.push(4, this.inst[i + 1], this.inst[i + 2]);
                    break;         
                case "MUL":
                    this.prg.push(5, this.inst[i + 1], this.inst[i + 2]);
                    break;
                case "DIV":
                    this.prg.push(6, this.inst[i + 1], this.inst[i + 2]);
                    break;
                case "MOVEV":
                    this.prg.push(7, this.inst[i + 1], this.inst[i + 2]);
                    console.log(this.inst)
                    break;
                case "SWAPV":
                    this.prg.push(8, this.inst[i + 1], this.inst[i + 2]);
                    break;


                //Video RAM
                case "VSET":
                    this.prg.push(9, this.inst[i + 1], this.inst[i + 2]);
                    break;
                case "VMOVE":
                    this.prg.push(10, this.inst[i + 1], this.inst[i + 2]);
                    break;
                case "VSWAP":
                    this.prg.push(11, this.inst[i + 1], this.inst[i + 2]);
                    break;
                case "VADD":
                    this.prg.push(12, this.inst[i + 1], this.inst[i + 2]);
                    break;
                case "VSUB":
                    this.prg.push(13, this.inst[i + 1], this.inst[i + 2]);
                    break;         
                case "VMUL":
                    this.prg.push(14, this.inst[i + 1], this.inst[i + 2]);
                    break;
                case "VDIV":
                    this.prg.push(15, this.inst[i + 1], this.inst[i + 2]);
                    break;
                case "MOVER":
                    this.prg.push(16, this.inst[i + 1], this.inst[i + 2]);
                    break;
                case "SWAPR":
                    this.prg.push(17, this.inst[i + 1], this.inst[i + 2]);
                    break;
                //Video
                case "UPDATE":
                    this.prg.push(18);
                    break;
            }
        }
        return this.prg;
    }
}