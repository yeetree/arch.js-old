class asm
{
    varMarker = "mem"

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
        ["UPDATE", 0, 18],
        //Input
        ['IN', 1, 19],
        ['NUMIN', 1, 20],
        ['RGIN', 3, 21],
        //Control
        ['IFEQ', 3, 22],
        ['NOTEQ', 3, 23],
        ['IFGT', 3, 24],
        ['NOTGT', 3, 25],
        ['IFLT', 3, 26],
        ['NOTLT', 3, 27],
        ['WHILE', 3, 28],
        ['LOOP', 3, 29],

        ['VIFEQ', 3, 30],
        ['VNOTEQ', 3, 31],
        ['VIFGT', 3, 32],
        ['VNOTGT', 3, 33],
        ['VIFLT', 3, 34],
        ['VNOTLT', 3, 35],
        ['VWHILE', 3, 36],
        ['VLOOP', 3, 37],

        ['FUNC', 1, 38],
        ['VFUNC', 1, 39],

        ['CALL', 1 , 40],
        ['VCALL', 1 , 41]
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
            this.inst = this.lines[i].toUpperCase().split(',');
            this.prg.push(this.getInst(this.inst));
        }
        this.prg = this.prg.flat();
        for(let i = 0; i < this.prg.length; i++)
        {
            if(this.prg[i].toString().includes("mem"))
            {
                this.prg[i] = this.prg[i].replaceAll("mem", "");
                this.prg[i] = parseInt(this.prg[i]) + this.prg.length+1;
            }
        }
        return this.prg;
    }
    getInst = function(inst)
    {
        let prgSeg = [];
        switch(inst[0])
        {
            //Standard RAM
            case "SET":
                prgSeg.push(1);
                prgSeg.push(inst[1] + this.varMarker);
                prgSeg.push(inst[2]);
                break;
            case "MOVE":
                prgSeg.push(2);
                prgSeg.push(inst[1] + this.varMarker);
                prgSeg.push(inst[2] + this.varMarker);
                break;
            case "ADD":
                prgSeg.push(3);
                prgSeg.push(inst[1] + this.varMarker);
                prgSeg.push(inst[2] + this.varMarker);
                break;
            case "SUB":
                prgSeg.push(4);
                prgSeg.push(inst[1] + this.varMarker);
                prgSeg.push(inst[2] + this.varMarker);
                break;
            case "MUL":
                prgSeg.push(5);
                prgSeg.push(inst[1] + this.varMarker);
                prgSeg.push(inst[2] + this.varMarker);
                break;
            case "DIV":
                prgSeg.push(6);
                prgSeg.push(inst[1] + this.varMarker);
                prgSeg.push(inst[2] + this.varMarker);
                break;
            case "MOVEV":
                prgSeg.push(7);
                prgSeg.push(inst[1] + this.varMarker);
                prgSeg.push(inst[2] + this.varMarker);
                break;
            //Video RAM
            case "VSET":
                prgSeg.push(8);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "VMOVE":
                prgSeg.push(9);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2]);
                break;
            case "VADD":
                prgSeg.push(10);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2] + varMarker);
                break;
            case "VSUB":
                prgSeg.push(11);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2] + varMarker);
                break;
            case "VMUL":
                prgSeg.push(12);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2] + varMarker);
                break;
            case "VDIV":
                prgSeg.push(13);
                prgSeg.push(inst[1]);
                prgSeg.push(inst[2] + varMarker);
                break;
            case "MOVER":
                prgSeg.push(14);
                prgSeg.push(inst[1] + this.varMarker);
                prgSeg.push(inst[2]);
                break;
            //Video
            case "UPDATE":
                prgSeg.push(15);
                break;

            //Input
            case "IN":
                prgSeg.push(16);
                prgSeg.push(inst[1] + this.varMarker);
                break;
            case "NUMIN":
                prgSeg.push(17);
                prgSeg.push(inst[1] + this.varMarker);
                break;
            case "RGIN":
                prgSeg.push(18);
                prgSeg.push(inst[1] + this.varMarker);
                prgSeg.push(inst[2] + this.varMarker);
                prgSeg.push(inst[3] + this.varMarker);
                break;

            //Control
            case "IFEQ":
                prgSeg.push(19);
                prgSeg.push(inst[1] + this.varMarker);
                prgSeg.push(inst[2] + this.varMarker);
                prgSeg.push(inst[3] + this.varMarker);
                break;
            case "NOTEQ":
                prgSeg.push(20);
                prgSeg.push(inst[1] + this.varMarker);
                prgSeg.push(inst[2] + this.varMarker);
                prgSeg.push(inst[3] + this.varMarker);
                break;
            case "IFGT":
                prgSeg.push(21);
                prgSeg.push(inst[1] + this.varMarker);
                prgSeg.push(inst[2] + this.varMarker);
                break;
            case "NOTGT":
                prgSeg.push(22);
                prgSeg.push(inst[1] + this.varMarker);
                prgSeg.push(inst[2] + this.varMarker);
                prgSeg.push(inst[3] + this.varMarker);
                break;
            case "IFLT":
                prgSeg.push(23);
                prgSeg.push(inst[1] + this.varMarker);
                prgSeg.push(inst[2] + this.varMarker);
                prgSeg.push(inst[3] + this.varMarker);
                break;
            case "NOTLT":
                prgSeg.push(24);
                prgSeg.push(inst[1] + this.varMarker);
                prgSeg.push(inst[2] + this.varMarker);
                break;
            case "WHILE":
                prgSeg.push(25);
                prgSeg.push(inst[1] + this.varMarker);
                prgSeg.push(inst[2] + this.varMarker);
                prgSeg.push(inst[3] + this.varMarker);
                break;
            case "LOOP":
                prgSeg.push(26);
                prgSeg.push(inst[1] + this.varMarker);
                prgSeg.push(inst[2] + this.varMarker);
                break;
            case "FUNC":
                prgSeg.push(27);
                prgSeg.push(inst[1] + this.varMarker);
                prgSeg.push(inst[2] + this.varMarker);
                break;
            case "CALL":
                prgSeg.push(28);
                prgSeg.push(inst[1] + this.varMarker);
                break;
        }
        
        return prgSeg;
    }
}