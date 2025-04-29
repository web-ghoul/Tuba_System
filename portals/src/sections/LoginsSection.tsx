import React from "react";
import LoginCard from "../components/LoginCard";

const LoginsSection = () => {
  return (
    <div className="logins_parent">
      <div className="content">
        <h1>أهلاً وسهلاً في طوبي - منصتك الصحية الموثوقة!</h1>
        <h6>اختر نوع الحساب اللي يناسب دورك</h6>
      </div>
      <div className="logins">
        <LoginCard
          title="شركة"
          description="إدارة خدمات الرعاية الصحية الخاصة بك"
          link=""
        />
        <LoginCard
          title="مقدم الخدمة الطبية"
          description="إدارة خدمات الرعاية الصحية الخاصة بك"
          link=""
        />
        <LoginCard
          title="مراجع طبي"
          description="إدارة خدمات الرعاية الصحية الخاصة بك"
          link=""
        />
        <LoginCard
          title="مراجع مالي"
          description="إدارة خدمات الرعاية الصحية الخاصة بك"
          link=""
        />
      </div>
      <button className="btn">ابدأ تسجيل الدخول</button>
    </div>
  );
};

export default LoginsSection;
