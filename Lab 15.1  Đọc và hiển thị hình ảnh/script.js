'use strict';

const imgContainer = document.querySelector('.images');

// Hàm Promise, được sử dụng để tạm dừng thực thi trong một số giây
const wait = time => {
  return new Promise(res => {
    setTimeout(res, time * 1000);
  });
};

// Hàm này sẽ trả về một Promise, với giá trị là đối tượng hình ảnh khi hình ảnh đã được tải hoàn tất,
// hoặc một lỗi khi xảy ra sự cố khi tải hình ảnh.
const createImage = imgPath => {
  return new Promise((res, rej) => {
    // tạo 1 thẻ img đưa vào HTML
    const img = document.createElement('img');
    // gán giá trị của imgPath cho thuộc tính src của thẻ img
    img.src = imgPath;
    // ảnh tải thành công thì sự kiện được kích hoạt
    img.addEventListener('load', () => {
      //Làm nhỏ ảnh
      img.setAttribute('height', img.height / 6);
      img.setAttribute('width', img.width / 6);
      //Sau khi hình ảnh được tạo, nó được gắn vào imgContainer
      imgContainer.append(img);
      //Hàm trả về đối tượng hình ảnh
      res(img);
    });
    img.addEventListener('error', () => {
      rej(new Error(`Failed to load image ${imgPath}`));
    });
  });
};

//Tạo biến toàn cục với giá trị là 'undefined' để lưu trữ tham chiếu đến ảnh hiện tại
// đang được hiển thị trên web
let currentImg;

// Được gọi để tạo ra đối tượng hình ảnh từ đường dẫn cung cấp
// và hiển thị nó trong phần tử DOM với class 'images'.
createImage('img/img-1.jpg')
  .then(img => {
    // Được dùng để thay đổi thuộc tính display thành none
    currentImg = img;
    console.log(`Image 1 loaded`);
    // return hàm wait để tạm dừng thực thi code trong 2 giây
    return wait(2);
  })
  .then(() => {
    // Tải xong sẽ chuyển sang ảnh mới
    currentImg.style.display = 'none';
    console.log('Image 2 loaded');
    //Hình ảnh này sẽ được hiển thị khi hình ảnh hiện tại đã bị ẩn.
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    console.log('Image 3 loaded');
    //Hình ảnh này sẽ được hiển thị khi hình ảnh hiện tại đã bị ẩn.
    return createImage('img/img-3.jpg');
  })
  .catch(err => console.log(err));
