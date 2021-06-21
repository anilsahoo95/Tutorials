var a="anil";
function add(b,c)
{
    return b+c;
}
class Anil{

    constructor(an,bn)
    {
     this.an=an;
     this.bn=bn;
    }
    static walk(){
    console.log("walking");
    }
}
module.exports={
    a,
    add,
    Anil
};