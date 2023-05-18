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
      // Sau khi hình ảnh được tạo, nó được gắn vào imgContainer
      imgContainer.appendChild(img);
      img.classList.add('parallel');
      //Hàm trả về đối tượng hình ảnh
      res(img);
    });
    img.addEventListener('error', () => {
      rej(new Error(`Failed to load image ${imgPath}`));
    });
  });
};

//async và await
const loadNPause = async () => {
  try {
    await wait(2);
    let img = await createImage('img/img-1.jpg');
    console.log(`Image 1 Load `);

    await wait(2);
    img.style.display = 'none';

    await wait(2);
    img = await createImage('img/img-2.jpg');
    console.log(`Image 2 Load `);

    await wait(2);
    img.style.display = 'none';

    await wait(2);
    img = await createImage('img/img-3.jpg');
    console.log('Image 3 Load');

    await wait(2);
    img.style.display = 'none';
  } catch (error) {
    console.log(error);
  }
};
loadNPause();

//
const loadAll = async imgArr => {
  // Dùng array map tạo 1 mảng mới gồm các Promise trả về từ việc gọi hàm createImage
  const imgs = imgArr.map(imgPath => createImage(imgPath));

  try {
    // hàm sử dụng Promise.all để đợi tất cả các Promise trong mảng imgs đều được giải quyết
    // và trả về một mảng mới chứa các đối tượng hình ảnh đã được tải xuống.
    const loadedImgs = await Promise.all(imgs);
    console.log(loadedImgs);
    // dùng forEach lặp lại từng phần tử trong mảng
    loadedImgs.forEach(img => {
      // mỗi phần tử sẽ thêm 1 class parallel
      img.classList.add('parallel');
    });
  } catch (error) {
    console.log(error);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
