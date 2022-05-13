//=============Bài 2===============
/**
 * INPUT: Nhập vào họ tên và số kW 
 * PROCESS: (Pseudo code)
        1. lấy được input (hardcode) là var hoTen,soKW;
        2. tạo biến var price chứa giá trị là tổng tiền điện
        3. Kiểm tra điều kiện số Kw thực tính tương ứng với các điều kiện quy định
 * OUTPUT: In kết quả ra màn hình
            document.getElementById("ketqua").style.display = "block";
            document.getElementById("ketqua").innerHTML = "Họ tên: "+hoTen+"; Tiền điện: "+price.toLocaleString();
 */
function calculatePrice(soKw, tienKw50,tienKw50_100, tienKw100_150, tienKw_150,tienKw_150_) {
  var price = 0;
  if (soKw <= 50)
    price = soKw*tienKw50;
  else if (soKw >50 && soKw <=100){
    price= (50)*tienKw50 + (soKw-50)*tienKw50_100;
  }
  else if (soKw <200)
    {
      price= (50)*tienKw50+50*tienKw50_100+(soKw-100)*tienKw100_150;
    }
  else if (soKw <=350 )
    {
        price=(50)*tienKw50+50*tienKw50_100+(100)*tienKw100_150+(soKw-200)*tienKw_150;
    }
  else {
        price=(50)*tienKw50+50*tienKw50_100+(100)*tienKw100_150+(150)*tienKw_150+(soKw-350)*tienKw_150_;
  }
  return price;
}
function pay() {
    var hoTen = document.getElementById("hoTen").value;
    var soKw = +document.getElementById("soKw").value;
    var price =0;
    if (soKw <= 50) {
        price=calculatePrice(soKw,500,650,850,1100,1300);
        console.log(price);
    }
    else if (soKw >50 && soKw <=100){//soKw=100
        
        price=calculatePrice(soKw,500,650,850,1100,1300);
        console.log(price);
    }
    else if (soKw >100 && soKw <=150)
    {   
        price=calculatePrice(soKw,500,650,850,1100,1300);
    }
    else if (soKw <=350  )
    {
        price=calculatePrice(soKw,500,650,850,1100,1300);
    }
    else {
        price=calculatePrice(soKw,500,650,850,1100,1300);
        
    }
    document.getElementById("ketqua").style.display = "block";
    document.getElementById("ketqua").innerHTML = "Họ tên: "+hoTen+"; Tiền điện: "+price.toLocaleString();
    // alert (price);
}
//=============Bài 1===============//
/**
 * INPUT: Nhập vào điểm chuẩn, điểm môn 1, điểm môn 2, điểm môn 3
 *        Chọn Khu vực,Đối tượng
 * PROCESS: (Pseudo code)
        1. B1: Xác định đầu vào: 3 môn thi + khu vực + đối tượng
                var diem1 = +document.getElementById("diem1").value;
                var diem2 = +document.getElementById("diem2").value;
                var diem3 = +document.getElementById("diem3").value;
                var khuVuc = document.getElementById("khuVuc").value;
                var doiTuong = document.getElementById("doiTuong").value;
                var diemChuan = +document.getElementById("diemChuan").value;
        3. Tách ra 2 hàm tinhDiemKhuVuc(khuVuc) và  tinhDiemDoiTuong(doiTuong) để lấy ra số điểm cộng tương ứng cho từng khu vực và đối tượng
        2. Xử lý tính điểm: tạo các biến var diemKhuVuc,diemDoiTuong, var tongDiem để chứa các giá trị tương ứng
                var diemKhuVuc = tinhDiemKhuVuc(khuVuc); // Gọi hàm
                var diemDoiTuong = tinhDiemDoiTuong(doiTuong);
                var tongDiem = tinhTongDiem(diem1, diem2, diem3);
 * OUTPUT: Tách 1 hàm riêng và gọi đến để hiện thị kết quả
           function hienThi(diem1, diem2, diem3, diemTongKet,diemChuan) {
              if (!diem1 || !diem2 || !diem3 || diemTongKet<diemChuan) {
                document.getElementById("ketqua").style.display = "block";
                document.getElementById("kq").innerHTML = "Rớt mất tiêu rồi. Tổng điểm: "+diemTongKet;
              } else {
                document.getElementById("ketqua").style.display = "block";
                document.getElementById("kq").innerHTML = "Bạn đã đậu. Tổng điểm: "+diemTongKet;
              }
            }
 */
function tinhDiemKhuVuc(khuVuc) {
    switch (khuVuc) {
      case "A": // tương đương khuVuc === "A"
        return 2;
      case "B":
        return 1;
      case "C":
        return 0.5;
      default:
        return 0;
    }
  }
function tinhDiemDoiTuong(doiTuong) {
    switch (doiTuong) {
      case "1": // tương đương khuVuc === "A"
        return 2.5;
      case "2":
        return 1.5;
      case "3":
        return 1;
      default:
        return 0;
    }
  }
function tinhTongDiem(diem1,diem2,diem3){
      var tong=0;
      if( diem1 < 0 && diem2 < 0 && diem3 <0)
      {
          alert("Nhập điểm lớn hơn 0");
      }
      else {    
         return (diem1+diem2+diem3);
      }
  }
tinhTongDiem(2,2,2);
function baitap1() {
    // B1: Xác định đầu vào: 3 môn thi + khu vực + đối tượng
    var diem1 = +document.getElementById("diem1").value;
    var diem2 = +document.getElementById("diem2").value;
    var diem3 = +document.getElementById("diem3").value;
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value;
    var diemChuan = +document.getElementById("diemChuan").value;
    // B2: Xử lý tính điểm
    var diemKhuVuc = tinhDiemKhuVuc(khuVuc); // Gọi hàm
    var diemDoiTuong = tinhDiemDoiTuong(doiTuong);
    var tongDiem = tinhTongDiem(diem1, diem2, diem3);
  
    var diemTongKet = tongDiem + diemKhuVuc + diemDoiTuong;
    hienThi(diem1, diem2, diem3, diemTongKet,diemChuan);
  } 
function hienThi(diem1, diem2, diem3, diemTongKet,diemChuan) {
    if (!diem1 || !diem2 || !diem3 || diemTongKet<diemChuan) {
      document.getElementById("ketqua").style.display = "block";
      document.getElementById("kq").innerHTML = "Rớt mất tiêu rồi. Tổng điểm: "+diemTongKet;
    } else {
      document.getElementById("ketqua").style.display = "block";
      document.getElementById("kq").innerHTML = "Bạn đã đậu. Tổng điểm: "+diemTongKet;
    }
  }
//=============Bài 3===============//
/**
 * INPUT: Nhập vào tongthunhapnam, hoTen, soNguoiphuthuoc
 * PROCESS: (Pseudo code)
        1. lấy được input (hardcode) là var tongthunhapnam, hoTen, soNguoiphuthuoc;
        2. Em sẽ tách ra 2 hàm riêng là tinhTongthunhapchiuthue(tongThunhapnam,soNguoiphuthuoc) truyền vào 2 biến
           Hàm thứ 2 là tinhThue(tongThunhapchiuthe,thue60,thue120,thue120_210,thue210_384,thue384_624,thue624_960,thue960)
            => thì hàm này sẽ kiểm tra điều kiện tongthunhapchiuthue rơi vào mức nào rồi sẽ nhân với thuế tương ứng sẽ ra tông Tiền thuế thu nhập cá nhân
        3. Hàm chính thì em chỉ cẩn gọi lại các hàm trên để tính ra kết quả 
 * OUTPUT: In ra Họ tên và kết quả ra màn hình
            document.getElementById("ketqua").style.display = "block";
            document.getElementById("ketqua").innerHTML = "Họ tên: "+hoTen+"; Tiền thuế thu nhập cá nhân: "+new Intl.NumberFormat('de-DE').format(price)+" VND ";
 */
function tinhThue(tongThunhapchiuthe,thue60,thue120,thue120_210,thue210_384,thue384_624,thue624_960,thue960){
//thue60,thue120,thue120_210,thue210_384,thue384_624,thue624_960,thue960
  if (tongThunhapchiuthe<=60e+6)
  {
    tongThunhapchiuthe=tongThunhapchiuthe*thue60;
  } 
  else if(tongThunhapchiuthe<=120e+6)
  {
    tongThunhapchiuthe=tongThunhapchiuthe*thue120;
  }
  else if (tongThunhapchiuthe<=210e+6)
  {
    tongThunhapchiuthe=tongThunhapchiuthe*thue120_210;
  }
  else if (tongThunhapchiuthe<=384e+6)
  {
    tongThunhapchiuthe=tongThunhapchiuthe*thue210_384;
  }
  else if (tongThunhapchiuthe<=624e+6)
  {
    tongThunhapchiuthe=tongThunhapchiuthe*thue384_624;
  }
  else if (tongThunhapchiuthe<=960e+6)
  {
    tongThunhapchiuthe=tongThunhapchiuthe*thue624_960;
  }
  else if (tongThunhapchiuthe>960e+6)
  {
    tongThunhapchiuthe=tongThunhapchiuthe*thue960;
  }
    return tongThunhapchiuthe;
}

function tinhTongthunhapchiuthue(tongThunhapnam,soNguoiphuthuoc)
{
  if (tongThunhapnam <= 0)
    {
      alert("Vui lòng kiểm tra lại kết quả");
      return tongThunhapchiuthe=0;
    }
  else
    {
      tongThunhapchiuthe= tongThunhapnam-(4e+6)-(soNguoiphuthuoc*(16e+5));
      return tongThunhapchiuthe;
    }  
}

function bai3(){
  var tongThunhapnam = +document.getElementById("tongThunhapnam").value;
  var hoTen = document.getElementById("hoTen").value;
  var soNguoiphuthuoc= +document.getElementById("soNguoiphuthuoc").value;
  var price =0;

  var tongThunhapchiuthe= tinhTongthunhapchiuthue(tongThunhapnam,soNguoiphuthuoc);
  
  console.log(+tongThunhapchiuthe);

  if (tongThunhapchiuthe<=60e+6){
    price=tinhThue(tongThunhapchiuthe,0.05,0.1,0.15,0.2,0.25,0.3,0.35);
    console.log(+price);
  }
  else if (tongThunhapchiuthe<=120e+6)
  {
    price=tinhThue(tongThunhapchiuthe,0.05,0.1,0.15,0.2,0.25,0.3,0.35);
    console.log(+price);
  }
  else if (tongThunhapchiuthe<=210e+6)
  {
    price=tinhThue(tongThunhapchiuthe,0.05,0.1,0.15,0.2,0.25,0.3,0.35);
    console.log(+price);
  }
  else if (tongThunhapchiuthe<=384e+6)
  {
    price=tinhThue(tongThunhapchiuthe,0.05,0.1,0.15,0.2,0.25,0.3,0.35);
    console.log(+price);
  }
  else if (tongThunhapchiuthe<=624e+6)
  {
    price=tinhThue(tongThunhapchiuthe,0.05,0.1,0.15,0.2,0.25,0.3,0.35);
    console.log(+price);
  }
  else if (tongThunhapchiuthe<=960e+6)
  {
    price=tinhThue(tongThunhapchiuthe,0.05,0.1,0.15,0.2,0.25,0.3,0.35);
    console.log(+price);
  }
  else if (tongThunhapchiuthe>960e+6)
  {
    price=tinhThue(tongThunhapchiuthe,0.05,0.1,0.15,0.2,0.25,0.3,0.35);
    console.log(+price);
  }
  
  document.getElementById("ketqua").style.display = "block";
  document.getElementById("ketqua").innerHTML = "Họ tên: "+hoTen+"; Tiền thuế thu nhập cá nhân: "+new Intl.NumberFormat('de-DE').format(price)+" VND ";
}
//=============Bài 4===============//
/**
 * INPUT: Chọn loại khách hàng, Nhập mã khách hàng, soKetnoi
 * PROCESS: (Pseudo code)
 *      1. lấy được input (hardcode) là var loaiKH,soKW;
        2. Sử dụng event onchange của dropdown để xử lý ẩn hiện cho ô nhập số kết nối khi chọn loại khách hàng: Onchange
           Tách 1 hàm riêng để hiện thị ra số kết nối khi người dụng chọn loại khách hàng là doanh nghiệp
        3. Tách 1 hàm riêng để kiểm tra điều kiện số Kết nối và thực tính tiền cáp tương ứng với các điều kiện quy định
        4. tạo biến var price chứa giá trị là tiền cáp
 * OUTPUT: In kết quả ra màn hình
    document.getElementById("ketqua").style.display = "block";
    document.getElementById("ketqua").innerHTML = "Mã KH: "+maKH+"; Tiền thuế thu nhập cá nhân: "+new Intl.NumberFormat('en-IN').format(price)+" $ ";
 */
function hienThisoketnoi(){
   var loaiKH = document.getElementById("loaiKH").value;
   var soKetnoi = document.getElementById("soKetnoi");
   if(loaiKH=="DN")
   {
     soKetnoi.style.display="block";
   }
   else
    soKetnoi.style.display="none";
}
function baitap4(){
    var maKH = document.getElementById("maKH").value;
    var loaiKH = document.getElementById("loaiKH").value;
    var soKenh = document.getElementById("soKenh").value;
    
    var price =  tinhTiencap(loaiKH,soKenh);

    document.getElementById("ketqua").style.display = "block";
    document.getElementById("ketqua").innerHTML = "Mã KH: "+maKH+"; Tiền thuế thu nhập cá nhân: "+new Intl.NumberFormat('en-IN').format(price)+" $ ";
}
function tinhTiencap(loaiKH,soKenh)
{
  var soKetnoi = +document.getElementById("soKetnoi").value;
  var tienCap;
  if (loaiKH=="ND"){
    tienCap = 4.5 + 20.5 + 7.5*soKenh;
    return tienCap;
  }
  else if (loaiKH=="DN"){
    if (soKetnoi<=10){
      tienCap = 15 + 75 + 50*soKenh;
      return tienCap;
    }
    else {
      tienCap = 15 + 75+ (soKetnoi-10)*5 + 50*soKenh;
      return tienCap;
    }   
  }
}

