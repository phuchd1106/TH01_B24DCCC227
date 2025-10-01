import { useState } from "react";
import "./Bai5.css";

function Bai5() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra nếu để trống trường nào thì báo lỗi
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Tên không được để trống";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email không được để trống";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Mật khẩu không được để trống";
    }
    setErrors(newErrors);
    // Nếu không có lỗi thì hiển thị thông tin vừa nhập
    if (Object.keys(newErrors).length === 0) {
      setSubmittedData(formData);
    }
  };

  return (
    <div className="registration-form">
      <h2>Form Đăng ký</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Tên"
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className={errors.email ? "error" : ""}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Mật khẩu"
            className={errors.password ? "error" : ""}
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Đăng ký
        </button>
      </form>

      {submittedData && (
        <div className="submitted-info">
          <h3>Thông tin vừa nhập:</h3>
          <p>
            <strong>Tên:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Mật khẩu:</strong> {submittedData.password}
          </p>
        </div>
      )}
    </div>
  );
}

export default Bai5;
