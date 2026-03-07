// Tạo một biến chứa toàn bộ mã HTML của Footer
const footerContent = `
    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-top">
                <div class="footer-col">
                    <div class="footer-logo">THANH NIÊN<br>TIÊN TIẾN</div>
                    <p>Tiếng nói của thế hệ trẻ...</p>
                </div>
                </div>
            <div class="footer-bottom">
                <div class="footer-container">
                    <div>&copy; 2026 BÁO THANH NIÊN TIÊN TIẾN...</div>
                </div>
            </div>
        </div>
    </footer>
`;

// Chèn đoạn mã trên vào phần tử có id là "footer-placeholder"
document.getElementById("footer-placeholder").innerHTML = footerContent;