https://stackblitz.com/github/DanielYKPan/ng-alarm?file=src%2Fapp%2Fstore%2Falarm-model.ts

=> Công nghệ
Angular Store + Redux + Effect
Queue => Background Process để xử lý time 
Catch Event ? Set Interval (trong reactjs) để tạo luồng chạy ngầm

=> How to do ?
Sau khi đã được báo, lưu loging rồi kiểm tra thuộc tính repeat(theo giây, phút, giờ, ngày, ...) để tạo một reminder mới 

=> Tư duy lặp lại
Lặp theo ngày mau quá ==> lặp theo tuần mau quá ==> lặp theo tháng ==> ....
Giống calendar của apple

Todo 
1. Phân tích data (có thể nói là xong)
2. Tạo model và create cơ bản (đang làm cái này)
    - Chuyển từ FormGroup sang FormBuilder để tạo mảng các sự kiện (done)
    - Tạo mảng các thời điểm (done)
    - Thêm thời gian vào mảng các thời điểm (Done)
    - Lưu thời gian
        + Lưu dưới dạng để hiện thị (done)
        + Lưu dưới dạng để bắt event (milisecond à ?) Đợi logic lưu sau
    - Xử lý các sự kiện lặp lại như calendar của Apple
        + Xem lại đoạn thêm thời điểm vấn đề xảy ra khi sự kiện xảy ra ở 2 thời điểm khác nhau, lúc này lặp theo thời gian sẽ tính sao ?
        + Thêm thời gian kết thúc cho sự kiện lặp theo thời gian
    - Tạo 1 form hoàn chỉnh
    - Tạo create cơ bản
3. Tạo data cơ bản với redux, action là create 
4. Update tempolary data với các action  
5. Lưu data ?


