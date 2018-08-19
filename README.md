### MOBILE BUG :

- Menu không đi theo navbar : scroll navbar xuống thì sẽ ra bug. => FIXED
  => wrap menu + navbar vào 1 div.

- ScrollHint không biến mất khi mình đã scroll (chưa làm được). => FIXED

- Đéo hiểu sao localhost set scrollLeft thì được, sang deployment lại không set được.

- deployment load ảnh quá chậm. => FIXED
  => Việc giảm size ảnh có tác dụng rất tích cực, web load rất nhanh, có điều size ảnh cũng đi xuống.
  => Cơ chế của web là async, vậy nên preload ảnh là 1 điều tuyệt vời, nhược điểm là load cả trang hơi lâus.

- PreLoader của mình hoạt động sai cách, ảnh chưa load 100% mà nó đã ghi hết là loaded, chỉ có cái window.addEventListener('load') hoạt động đúng. Mình chưa hiểu cách để làm được giống như cái window.addEventListener('load') này.

### LOGS
