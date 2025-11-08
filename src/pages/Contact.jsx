import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // يمنع إعادة تحميل الصفحة
    // هنا ممكن تضيفي كود إرسال البيانات للسيرفر أو API
    console.log("تم إرسال البيانات:", formData);
    alert("تم إرسال الرسالة بنجاح!");
    // إعادة ضبط الفورم
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 flex justify-center items-center">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          اتصل بنا
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-semibold">الاسم</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="اكتب اسمك الكامل"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">رقم الجوال</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="اكتب رقم الجوال"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">الرسالة</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="اكتب رسالتك هنا"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-800 transition"
          >
            ارسال الرسالة
          </button>
        </form>
      </div>
    </div>
  );
}
