// Tạo một biến chứa toàn bộ mã HTML của Footer
const footerContent = `<footer class="site-footer">
        <div class="footer-container">
            <div class="footer-top">
                <div class="footer-col">
                    <div class="footer-logo">THANH NIÊN<br>TIÊN TIẾN</div>
                    <p>Tiếng nói của thế hệ trẻ. Cung cấp thông tin đa chiều, bổ ích và kịp thời nhất về công tác Đoàn, phong trào thanh niên trên khắp cả nước.</p>
                    <div class="social-icons">
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                    </div>
                </div>

                <div class="footer-col">
                    <h3>CHUYÊN MỤC</h3>
                    <ul>
                        <li><a href="#">Giới trẻ & Cuộc sống</a></li>
                        <li><a href="#">Gương mặt trẻ tiêu biểu</a></li>
                        <li><a href="#">Khởi nghiệp sáng tạo</a></li>
                        <li><a href="#">Hành trang du học</a></li>
                        <li><a href="#">Nhịp sống số (Công nghệ)</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h3>LIÊN KẾT HỆ THỐNG</h3>
                    <ul>
                        <li><a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i> Trung ương Đoàn</a></li>
                        <li><a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i> Hội Sinh viên VN</a></li>
                        <li><a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i> Báo Tiền Phong</a></li>
                        <li><a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i> Cổng Thánh Gióng</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h3>THÔNG TIN LIÊN HỆ</h3>
                    <ul>
                        <li><i class="fa-solid fa-location-dot"></i> <span>Số 121, Đường Thanh Niên,<br>Quận Ba Đình, Hà Nội</span></li>
                        <li><i class="fa-solid fa-phone"></i> <span>024.3838.3838 -<br>0905.123.456</span></li>
                        <li><i class="fa-solid fa-envelope"></i> <span>toasoan@thanhnientientien.vn</span></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="footer-container">
                <div>&copy; 2026 BÁO THANH NIÊN TIÊN TIẾN. Thiết kế và vận hành bởi Team Đoàn Hội.</div>
                <ul class="footer-bottom-links">
                    <li><a href="#">Điều khoản sử dụng</a></li>
                    <li><a href="#">Chính sách bảo mật</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
    </footer>`;

// Chèn đoạn mã trên vào phần tử có id là "footer-placeholder"
document.getElementById("footer-placeholder").innerHTML = footerContent;
