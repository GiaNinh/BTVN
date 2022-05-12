function canbachai(a)
{
    let kq1 = Math.sqrt(a);
    console.log(kq1);
}

function dientich(a, b)
{
    let kq2=a*b/2;
    console.log(kq2);
}

function FtoC(a)
{
    let kq3=(a-32)/1.8;
    console.log(kq3);
}

function KmtoM(a)
{
    let kq4=a*1000;
    console.log(kq4);
}

let baitap=prompt("Chọn Bài Tập 1, 2, 3 ,4:");
switch(Number(baitap))
{
    case 1:
        {
            console.log("Tính Căn Bậc Hai Của Một Số:");
            let x=prompt("Nhập số:");
            canbachai(x);
            break;
        }
    case 2:
        {
            console.log("Tính Diện Tích Tam Giác:");
            let c=prompt("Nhập Cạnh Đáy:");
            let h=prompt("Nhập Chiều Cao:");
            dientich(c,h);
            break;
        }
    case 3:
        {
            console.log("Chuyển Từ Độ F Sang Độ C:");
            let f=prompt("Nhập Độ F:");
            FtoC(f);
            break;
        }
    case 4:
        {
            console.log("Chuyển Từ Km Sang M:");
            let s=prompt("Nhập Số Km:");
            KmtoM(s);
            break;
        }
    default:
        {
            console.log("Không Có Bài Này");
        }
}
